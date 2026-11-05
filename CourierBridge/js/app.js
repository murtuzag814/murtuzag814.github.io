// js/app.js

// --- 1. CONFIGURATION SCHEMAS ---
const courierSchemas = {
    'trax_regular': {
        title: 'Trax Regular Settings',
        keys: ['pickupAddressId', 'modeOfShipmentId'],
        labels: ['Pickup Address ID (e.g. 569518)', 'Shipping Mode ID (e.g. 1)'],
        defaults: ['', '1'],
        adapterFile: './traxRegularAdapter.js'
    },
    'trax_reverse': {
        title: 'Trax Reverse Settings',
        keys: ['pickupAddressId', 'modeOfShipmentId'],
        labels: ['Pickup Address ID (e.g. 569518)', 'Shipping Mode ID (e.g. 1)'],
        defaults: ['', '1'],
        adapterFile: './traxReverseAdapter.js'
    },
    'tcs_regular': {
        title: 'TCS Regular Settings',
        keys: ['serviceType', 'fragile'],
        labels: [
            'Service Type (O=Overnight, S=Same Day, OLE=Overland, MYO=MyCollect)', 
            'Fragile (Yes/No)'
        ],
        defaults: ['O', 'No'],
        adapterFile: './tcs_regularAdapter.js'
    },
    'leopards_regular': {
        title: 'Leopards Regular Settings',
        keys: ['shipperName', 'shipperPhone', 'shipperAddress', 'originCity', 'shipmentType'],
        labels: [
            'Shipper / Brand Name', 
            'Shipper Phone (e.g. 03000000000)', 
            'Warehouse Address', 
            'Origin City (e.g. karachi)', 
            'Shipment Type (overnight / overland / detain)'
        ],
        defaults: ['My Brand', '03000000000', 'Warehouse Address', 'karachi', 'overnight'],
        adapterFile: './leopardsAdapter.js'
    }
};

// --- 2. MODAL GATEKEEPER LOGIC ---
const modal = document.getElementById('settingsModal');
let currentConfigTarget = null;

function getCourierConfig(courierType) {
    const raw = localStorage.getItem(`${courierType}_config`);
    return raw ? JSON.parse(raw) : null;
}

function showSettingsModal(courierType) {
    currentConfigTarget = courierType;
    const schema = courierSchemas[courierType];
    const existingConfig = getCourierConfig(courierType) || {};

    document.getElementById('modalTitle').innerText = schema.title;
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = ''; // Clear previous fields

    schema.keys.forEach((key, index) => {
        const value = existingConfig[key] || schema.defaults[index];
        modalBody.innerHTML += `
            <div>
                <label class="block text-sm font-bold mb-1">${schema.labels[index]}</label>
                <input type="text" id="config_${key}" class="w-full border p-2 rounded text-sm" value="${value}">
            </div>
        `;
    });

    modal.classList.remove('hidden');
}

document.getElementById('saveModalBtn').addEventListener('click', () => {
    if (!currentConfigTarget) return;
    
    const schema = courierSchemas[currentConfigTarget];
    const newConfig = {};
    
    schema.keys.forEach(key => {
        newConfig[key] = document.getElementById(`config_${key}`).value.trim();
    });

    localStorage.setItem(`${currentConfigTarget}_config`, JSON.stringify(newConfig));
    modal.classList.add('hidden');
    alert(`${schema.title} saved successfully. You can now generate your booking.`);
});

document.getElementById('closeModalBtn').addEventListener('click', () => {
    modal.classList.add('hidden');
});

document.getElementById('settingsBtn').addEventListener('click', () => {
    const courierType = document.getElementById('courierSelect').value;
    showSettingsModal(courierType);
});

// --- 3. THE 4-STEP PIPELINE (FORWARD FLOW) ---
document.getElementById('generateBookingBtn').addEventListener('click', async () => {
    const fileInput = document.getElementById('shopifyCsv');
    const selectedOption = document.getElementById('courierSelect').value;
    const [courierPrefix] = selectedOption.split('_'); // 'trax', 'tcs', 'leopards'
    
    if (!fileInput.files.length) {
        return alert("Please drop your Shopify CSV file first.");
    }

    const file = fileInput.files[0];

    // Step 1: Pre-Flight File Format Check
    if (!file.name.toLowerCase().endsWith('.csv')) {
        return alert("Invalid file format. Please upload the raw Shopify CSV export.");
    }

    // Step 2: Config Gatekeeper
    const config = getCourierConfig(selectedOption);
    if (!config) {
        showSettingsModal(selectedOption);
        return; // Halt execution until settings are saved
    }

    const schema = courierSchemas[selectedOption];

    // Step 3 & 4: Universal Parsing & Dynamic Adapter
    Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: async function(results) {
            // Validate it's a valid Shopify export
            if (!results.data[0].hasOwnProperty('Name') || !results.data[0].hasOwnProperty('Lineitem quantity')) {
                return alert("This doesn't look like a Shopify Export CSV. Missing required columns.");
            }

            // Step 3: Run the universal parser
            const normalizedOrders = parseShopifyOrders(results.data, courierPrefix);

            if (normalizedOrders.length === 0) {
                return alert("No valid orders could be generated. Check city spelling or file data.");
            }

            // Step 4: Dynamically import and execute the isolated adapter
            try {
                const adapter = await import(schema.adapterFile);
                adapter.generateExcel(normalizedOrders, config);
            } catch (error) {
                console.error(error);
                alert(`Error loading adapter (${schema.adapterFile}). Verify the file exists in your repository.`);
            }
        },
        error: function() {
            alert("Failed to read the CSV file.");
        }
    });
});