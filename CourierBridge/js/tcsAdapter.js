// js/tcs_regularAdapter.js

export function generateExcel(normalizedOrders, tcsConfig) {
    const tcsData = normalizedOrders.map(order => {
        
        // TCS enforces a strict minimum weight of 0.5kg
        const weight = order.weight_kg < 0.5 ? 0.5 : parseFloat(order.weight_kg);

        return {
            "Consignee Name": order.customer_name.substring(0, 90),
            "Consignee Address": order.customer_address.substring(0, 500),
            "Consignee Mobile Number": order.customer_phone,
            "Consignee Email": "",
            "Consignee CNIC": "", 
            "Destination City": order.customer_city, 
            "Pieces": order.total_pieces,
            "Weight": weight,
            "COD Amount": order.cod_amount,
            "Order Reference Number": order.internal_order_id.substring(0, 50),
            "Fragile": tcsConfig.fragile, // Passed from new Settings Modal (Yes/No)
            "Service Type": tcsConfig.serviceType, // Passed from Modal (e.g. "O")
            "Product Details": order.item_description.substring(0, 999),
            "Remarks": order.special_instructions.substring(0, 450),
            "Insurance/Declared Value": order.cod_amount === 0 ? 100 : "", // Declare value if Prepaid
            "Area Code": "",
            "Area Description": "",
            "Block Code": "",
            "Block Description": "",
            "Landmark": "",
            "Special Handling": "No"
        };
    });

    const worksheet = XLSX.utils.json_to_sheet(tcsData);

    // FIX: Force SheetJS & Excel to treat phones strictly as Text (prevents 0-stripping)
    Object.keys(worksheet).forEach(cell => {
        if (worksheet[cell].v && String(worksheet[cell].v).startsWith('03')) {
            worksheet[cell].t = 's'; 
            worksheet[cell].z = '@'; 
        }
    });

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, `TCS_Regular_${new Date().toLocaleDateString('en-CA')}.xlsx`);
}