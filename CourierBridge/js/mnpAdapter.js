// js/mnpAdapter.js

export function generateExcel(normalizedOrders, mnpConfig) {
    const mnpData = normalizedOrders.map(order => {
        
        // Enforce M&P minimum weight slab of 0.5kg
        const weight = order.weight_kg < 0.5 ? 0.5 : parseFloat(order.weight_kg);

        return {
            "ConsigneeName": order.customer_name.substring(0, 90),
            "ConsigneeAddress": order.customer_address.substring(0, 500),
            "ConsigneeMobileNumber": order.customer_phone, // Handled by SheetJS string text enforcement
            "ConsigneeEmail": "",
            "DestinationCity": order.customer_city, // Mapped via cities.js dictionary
            "Pieces": order.total_pieces,
            "Weight": weight,
            "CODAmount": order.cod_amount,
            "CustomerReferenceNumber": order.internal_order_id.substring(0, 50),
            "SpecialHandling": mnpConfig.specialHandling || "No",
            "ServiceType": mnpConfig.serviceType || "O",
            "ProductDetails": order.item_description.substring(0, 999),
            "Remarks": order.special_instructions ? order.special_instructions.substring(0, 450) : ""
        };
    });

    const worksheet = XLSX.utils.json_to_sheet(mnpData);

    // FIX: Force SheetJS & Excel to treat phone numbers strictly as Text (prevents 0-stripping)
    Object.keys(worksheet).forEach(cell => {
        if (worksheet[cell].v !== undefined && (String(worksheet[cell].v).startsWith('03') || cell.startsWith('C'))) {
            worksheet[cell].t = 's'; 
            worksheet[cell].z = '@'; 
        }
    });

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, `MNP_Regular_${new Date().toLocaleDateString('en-CA')}.xlsx`);
}