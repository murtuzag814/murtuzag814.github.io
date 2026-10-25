// js/trax_reverseAdapter.js

export function generateExcel(normalizedOrders, traxConfig) {
    const traxData = normalizedOrders.map(order => {
        const declaredValue = order.cod_amount > 0 ? order.cod_amount : 100;
        const localDate = new Date().toLocaleDateString('en-CA');

        return {
            'Pickup Address ID': parseInt(traxConfig.pickupAddressId), 
            'Show Information on Air Waybill': 'No', 
            'Consignee City Name': order.customer_city, 
            'Consignee Name': order.customer_name,
            'Consignee Address': order.customer_address, 
            'Consignee Phone Number 1 (03000000000)': order.customer_phone, 
            'Consignee Phone Number 2 (03000000000)': '',
            'Consignee Email Address': '',
            'Consignee Address Latitude': '',
            'Consignee Address Longitude': '',
            'Order ID': order.internal_order_id, 
            
            // FIX: Exactly TWO spaces required by Trax Corporate Template
            'Order Date  (YYYY-MM-DD)': localDate, 
            
            'Item Product Type ID': 1, 
            'Item Description': order.item_description,
            'Item Quantity': 1, 
            'Item Insurance': 'No', 
            'Product Value': declaredValue, 
            'Special Instructions': order.special_instructions, 
            'Estimated Weight (kg)': parseFloat(order.weight_kg),
            'Mode of Shipment ID': parseInt(traxConfig.modeOfShipmentId), 
            'Same Day Timing ID': '',
            'Shipper Reference Number 1': '',
            'Shipper Reference Number 2': '',
            'Shipper Reference Number 3': '',
            'Shipper Reference Number 4': '',
            'Shipper Reference Number 5': '',
            'Open Shipment': 'No'
        };
    });

    const worksheet = XLSX.utils.json_to_sheet(traxData);

    // FIX: Force SheetJS & Excel to treat phones strictly as Text (prevents 0-stripping)
    Object.keys(worksheet).forEach(cell => {
        if (worksheet[cell].v && String(worksheet[cell].v).startsWith('03')) {
            worksheet[cell].t = 's'; 
            worksheet[cell].z = '@'; 
        }
    });

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, `Trax_Reverse_${new Date().toLocaleDateString('en-CA')}.xlsx`);
}