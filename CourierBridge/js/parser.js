// js/parser.js

function parseShopifyOrders(rawRows, targetCourier) {
    const orders = {};
    const failedOrders = []; // Track failures

    rawRows.forEach((row) => {
        const orderName = row['Name'];
        if (!orderName) return;

        if (!orders[orderName]) {
            orders[orderName] = {
                orderId: orderName,
                customerName: row['Shipping Name'] || row['Billing Name'] || 'Customer',
                phone: row['Shipping Phone'] || row['Phone'] || row['Billing Phone'] || '',
                address1: row['Shipping Address1'] || row['Billing Address1'] || '',
                address2: row['Shipping Address2'] || row['Billing Address2'] || '',
                city: row['Shipping City'] || row['Billing City'] || '',
                financialStatus: (row['Financial Status'] || '').toLowerCase(),
                totalAmount: parseFloat((row['Total'] || '0').replace(/,/g, '')), // FIX: Strip commas for prices like 1,500
                notes: row['Notes'] || '',
                items: [],
                totalPieces: 0,
                totalGrams: 0 // FIX: Track actual weight
            };
        }

        const quantity = parseInt(row['Lineitem quantity']) || 1;
        const grams = parseFloat(row['Lineitem weight (g)']) || parseFloat(row['Lineitem grams']) || 0;
        
        orders[orderName].items.push(`${quantity}x ${row['Lineitem name']}`);
        orders[orderName].totalPieces += quantity;
        orders[orderName].totalGrams += (grams * quantity);
    });

    const validOrders = [];

    Object.values(orders).forEach((order) => {
        // 1. Run the City Engine
        const cityMatch = resolveCity(order.city, targetCourier);
        
        if (cityMatch.status !== 'success') {
            failedOrders.push(`Order ${order.orderId}: ${cityMatch.errorMsg}`);
            return; // Skip this order, don't add to valid batch
        }

        const isPrepaid = order.financialStatus === 'paid';
        const codAmount = isPrepaid ? 0 : order.totalAmount;

        let description = order.items.join(' + ');
        if (description.length > 900) description = description.substring(0, 900) + '...';

        // FIX: Truncate at word boundary to avoid weird cutoff addresses
        let fullAddress = `${order.address1} ${order.address2}`.trim() || "Address Not Provided";
        if (fullAddress.length > 185) {
            fullAddress = fullAddress.substr(0, 185);
            fullAddress = fullAddress.substr(0, Math.min(fullAddress.length, fullAddress.lastIndexOf(" ")));
        }

        // FIX: Better regex to preserve 10-digit local inputs
        let cleanPhone = order.phone.replace(/\D/g, '');
        if (cleanPhone.startsWith('92') && cleanPhone.length >= 12) cleanPhone = '0' + cleanPhone.slice(2);
        else if (cleanPhone.startsWith('0092') && cleanPhone.length >= 14) cleanPhone = '0' + cleanPhone.slice(4);
        else if (cleanPhone.length === 10 && !cleanPhone.startsWith('0')) cleanPhone = '0' + cleanPhone;

        let weightKg = order.totalGrams > 0 ? (order.totalGrams / 1000).toFixed(2) : 0.5;

        validOrders.push({
            internal_order_id: order.orderId.replace('#', ''), // FIX: Strip '#' to prevent portal errors
            customer_name: order.customerName.substring(0, 95),
            customer_phone: cleanPhone,
            customer_address: fullAddress,
            
            // Pass BOTH the official string and the mapped Courier ID to the adapter
            customer_city: cityMatch.officialName, 
            courier_city_id: cityMatch.code,
            
            weight_kg: weightKg,
            total_pieces: order.totalPieces,
            cod_amount: codAmount,
            item_description: description,
            special_instructions: order.notes.substring(0, 185)
        });
    });

    // Alert merchant about skipped orders
    if (failedOrders.length > 0) {
        alert(`WARNING: ${failedOrders.length} orders were skipped.\n\n` + failedOrders.slice(0, 5).join('\n') + (failedOrders.length > 5 ? '\n...and more' : ''));
    }

    return validOrders;
}