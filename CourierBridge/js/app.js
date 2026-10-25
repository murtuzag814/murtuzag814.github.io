// js/app.js

// --- 1. CONFIGURATION SCHEMA ---
const courierSchemas = {
    'trax_regular': {
        title: 'Trax Regular Settings',
        keys: ['pickupAddressId', 'modeOfShipmentId'],
        labels: ['Pickup Address ID (e.g. 569518)', 'Shipping Mode ID (e.g. 1)'],
        defaults: ['', '1'],
        adapterFile: './traxRegularAdapter.js' // Explicit file mapping
    },
    'trax_reverse': {
        title: 'Trax Reverse Settings',
        keys: ['pickupAddressId', 'modeOfShipmentId'],
        labels: ['Pickup Address ID (e.g. 569518)', 'Shipping Mode ID (e.g. 1)'],
        defaults: ['', '1'],
        adapterFile: './traxReverseAdapter.js' // Explicit file mapping
    },
    'tcs_regular': {
        title: 'TCS Regular Settings',
        keys: ['serviceType', 'fragile'],
        labels: [
            'Service Type (O=Overnight, S=Same Day, OLE=Overland, MYO=MyCollect)', 
            'Fragile (Yes/No)'
        ],
        defaults: ['O', 'No'],
        adapterFile: './tcs_regularAdapter.js' // Explicit file mapping
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
    modalBody.innerHTML = ''; // Clear previous

    schema.keys.forEach((key, index) => {
        const value = existingConfig[key] || schema.defaults[index];
        modalBody.innerHTML += `
            <div>
                <label class="block text-sm font-bold mb-1">${schema.labels[index]}</label>
                <input type="text" id="config_${key}" class="w-full border p-2 rounded" value="${value}">
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
    const selectedOption = document.getElementById('courierSelect').value; // e.g. "tcs_regular"
    const [courierPrefix] = selectedOption.split('_'); // "tcs", "trax"
    
    if (!fileInput.files.length) {
        return alert("Please drop your Shopify CSV file first.");
    }

    const file = fileInput.files[0];

    // Step 1: Pre-Flight Check (Fails Fast if not a Shopify CSV)
    if (!file.name.toLowerCase().endsWith('.csv')) {
        return alert("Invalid file format. Please upload the raw Shopify CSV export.");
    }

    // Step 2: Config Gatekeeper
    const config = getCourierConfig(selectedOption);
    if (!config) {
        showSettingsModal(selectedOption);
        return; // Halt execution until they save settings
    }

    const schema = courierSchemas[selectedOption];

    // Step 3 & 4: Universal Parsing & Dynamic Adapter
    Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: async function(results) {
            // Validate it's actually Shopify data
            if (!results.data[0].hasOwnProperty('Name') || !results.data[0].hasOwnProperty('Lineitem quantity')) {
                return alert("This doesn't look like a Shopify Export CSV. Missing required columns.");
            }

            // Step 3: Run the universal engine
            const normalizedOrders = parseShopifyOrders(results.data, courierPrefix);

            if (normalizedOrders.length === 0) {
                return alert("No valid orders could be generated. Check city spelling or file data.");
            }

            // Step 4: Dynamically load and execute the required adapter using the explicit file path
            try {
                const adapter = await import(schema.adapterFile);
                adapter.generateExcel(normalizedOrders, config);
            } catch (error) {
                console.error(error);
                alert(`Error loading the adapter file (${schema.adapterFile}). Make sure it is uploaded to your GitHub repository.`);
            }
        },
        error: function() {
            alert("Failed to read the CSV file.");
        }
    });
});