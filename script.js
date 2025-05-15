// --- ESG Framework Keywords for Descriptions ---
const esgKeywords = ["CSRD", "TCFD", "IFRS S2", "IFRS S1", "CDP", "GRI", "ESRS"];

/**
 * Appends a random selection of ESG keywords to a description.
 * @param {string} originalDescription - The original software description.
 * @param {number} count - The number of random keywords to add.
 * @returns {string} The description with appended keywords.
 */
function appendRandomKeywords(originalDescription, count = 2) {
    let appendedDescription = originalDescription;
    const availableKeywords = [...esgKeywords];
    let addedKeywords = " Supports reporting for: ";
    let keywordsAddedCount = 0;

    for (let i = 0; i < count; i++) {
        if (availableKeywords.length === 0) break;
        const randomIndex = Math.floor(Math.random() * availableKeywords.length);
        const keyword = availableKeywords.splice(randomIndex, 1)[0];
        if (keywordsAddedCount > 0) {
            addedKeywords += ", ";
        }
        addedKeywords += keyword;
        keywordsAddedCount++;
    }
    // Ensure the sentence ends naturally.
    if (appendedDescription.endsWith('.')) {
        return appendedDescription + addedKeywords + ".";
    } else {
        return appendedDescription + "." + addedKeywords + ".";
    }
}

// --- Sample Software Data (with ESG keywords in descriptions) ---
let softwareData = [
    // Challengers (Low Capability <50, Low Momentum <50)
    { id: 14, name: "WayCarbon Solutions", logo: "assets/logos/Waycarbon.png", owner_company: "WayCarbon", deployment_model: "SaaS", primary_purpose: "GHG Accounting", description: "WayCarbon offers software and consulting for climate change and ESG management, including GHG inventories, risk analysis, and sustainability strategies. Strong in Latin America.", website: "https://www.waycarbon.com", starting_price: "Consulting-led", license_model: "Project-Based", analyst_rating: "Gartner: Not Rated", created_at: "2024-09-05", updated_at: "2025-02-20", mock_capability_score: 25, mock_momentum_score: 20 },
    { id: 10, name: "Sustaira ESG Platform", logo: "assets/logos/Sustaira.png", owner_company: "Sustaira", deployment_model: "SaaS", primary_purpose: "All-in-One", description: "Sustaira provides a low-code platform for building custom ESG and sustainability applications. Offers pre-built templates and flexibility for unique organizational needs.", website: "https://www.sustaira.com", starting_price: "Modular Pricing", license_model: "Custom", analyst_rating: "Gartner: Not Rated", created_at: "2024-11-20", updated_at: "2025-04-28", mock_capability_score: 30, mock_momentum_score: 35 },
    { id: 11, name: "Plan A Platform", logo: "assets/logos/Plan A.png", owner_company: "Plan A Earth GmbH", deployment_model: "SaaS", primary_purpose: "Data Management", description: "Plan A offers a science-based SaaS platform for carbon accounting, decarbonization, and ESG reporting. It helps businesses calculate their footprint and develop reduction strategies.", website: "https://plana.earth/", starting_price: "Starts from €X/month", license_model: "Tiered", analyst_rating: "Verdantix: Challenger 2025", created_at: "2025-02-01", updated_at: "2025-05-08", mock_capability_score: 40, mock_momentum_score: 25 },

    // Innovators (High Capability >50, Low Momentum <50)
    { id: 9, name: "SWEEP Carbon", logo: "assets/logos/Sweep.png", owner_company: "SWEEP", deployment_model: "SaaS", primary_purpose: "GHG Accounting", description: "SWEEP offers a data-driven platform to help businesses measure, track, and reduce their carbon emissions across Scopes 1, 2, and 3. Focuses on automation and collaboration with suppliers.", website: "https://www.sweep.io", starting_price: "Contact for Pricing", license_model: "Tiered", analyst_rating: "Internal Assessment: Growing Presence", created_at: "2025-01-10", updated_at: "2025-05-12", mock_capability_score: 70, mock_momentum_score: 30 },
    { id: 16, name: "Novisto Data Mgmt", logo: "assets/logos/Novisto.png", owner_company: "Novisto Inc.", deployment_model: "SaaS", primary_purpose: "Data Management", description: "Novisto offers an AI-powered ESG data management and reporting platform. It helps companies streamline data collection, improve data quality, and generate investor-grade ESG reports.", website: "https://novisto.com/", starting_price: "Contact for Pricing", license_model: "Tiered", analyst_rating: "Internal Assessment: Emerging Innovator", created_at: "2025-03-01", updated_at: "2025-05-14", mock_capability_score: 75, mock_momentum_score: 40 },
    { id: 6, name: "Persefoni Carbon", logo: "assets/logos/Persefoni.png", owner_company: "Persefoni AI Inc.", deployment_model: "SaaS", primary_purpose: "GHG Accounting", description: "Persefoni offers an AI-powered platform for carbon footprint management, enabling organizations to calculate, analyze, and report their emissions in compliance with global standards. Strong focus on financial-grade carbon data.", website: "https://www.persefoni.com", starting_price: "Custom Quote", license_model: "Usage-Based", analyst_rating: "Verdantix: Innovator 2025", created_at: "2025-02-15", updated_at: "2025-05-05", mock_capability_score: 85, mock_momentum_score: 45 },
    
    // Specialists (Low Capability <50, High Momentum >50)
    { id: 18, name: "EcoOnline ESG", logo: "assets/logos/ecoonline.png", owner_company: "EcoOnline", deployment_model: "SaaS", primary_purpose: "Risk Management", description: "EcoOnline provides software solutions for chemical safety, EHS, and ESG management. Their ESG tools help businesses track performance, ensure compliance, and manage sustainability risks.", website: "https://www.ecoonline.com/esg-software", starting_price: "Contact Sales", license_model: "Per User", analyst_rating: "Verdantix: Specialist (Chemical Management)", created_at: "2024-09-12", updated_at: "2025-03-25", mock_capability_score: 35, mock_momentum_score: 70 },
    { id: 13, name: "Clarity AI Tech", logo: "assets/logos/Clarity Al.png", owner_company: "Clarity AI", deployment_model: "SaaS", primary_purpose: "Analytics", description: "Clarity AI uses machine learning and big data to deliver environmental and social insights for investors, organizations, and consumers. Focuses on impact assessment and ESG risk.", website: "https://clarity.ai", starting_price: "API Access / Custom", license_model: "Usage-Based", analyst_rating: "Internal Assessment: Strong Niche Player", created_at: "2024-10-01", updated_at: "2025-03-30", mock_capability_score: 45, mock_momentum_score: 75 },
    { id: 17, name: "OneTrust ESG Cloud", logo: "assets/logos/onetrust.png", owner_company: "OneTrust", deployment_model: "SaaS", primary_purpose: "Compliance", description: "OneTrust ESG & Sustainability Cloud helps organizations build and scale their ESG programs, manage disclosures, and demonstrate accountability. Leverages OneTrust's expertise in trust intelligence.", website: "https://www.onetrust.com/products/esg-sustainability-software/", starting_price: "Custom Quote", license_model: "Platform-based", analyst_rating: "IDC MarketScape: Leader (Privacy Management)", created_at: "2024-08-25", updated_at: "2025-04-22", mock_capability_score: 40, mock_momentum_score: 80 },
    
    // Leaders (High Capability >50, High Momentum >50)
    { id: 3, name: "Cority Cloud", logo: "assets/logos/cority.png", owner_company: "Cority", deployment_model: "SaaS", primary_purpose: "ESG Reporting", description: "Cority's Sustainability Cloud focuses on simplifying ESG reporting and compliance. It supports various frameworks, enabling organizations to generate accurate and timely reports for stakeholders.", website: "https://www.cority.com", starting_price: "Custom Quote", license_model: "Usage-Based", analyst_rating: "IDC MarketScape: Major Player 2024", created_at: "2024-09-20", updated_at: "2025-03-15", mock_capability_score: 60, mock_momentum_score: 65 },
    { id: 2, name: "Intelex ESG", logo: "assets/logos/intelex.png", owner_company: "Intelex Technologies", deployment_model: "SaaS", primary_purpose: "Data Management", description: "Intelex provides robust ESG data management capabilities, helping companies streamline data collection, improve accuracy, and meet reporting requirements. Its platform is known for its user-friendly interface and strong analytics features.", website: "https://www.intelex.com", starting_price: "$25,000/year", license_model: "Per User", analyst_rating: "Gartner: Challenger 2024", created_at: "2024-11-01", updated_at: "2025-05-01", mock_capability_score: 70, mock_momentum_score: 70 },
    { id: 8, name: "Benchmark ESG", logo: "assets/logos/benchmarkG.png", owner_company: "Benchmark Digital Partners", deployment_model: "SaaS", primary_purpose: "Compliance", description: "Benchmark ESG provides a comprehensive suite of digital solutions for EHS, Sustainability, and ESG management. Their platform helps organizations ensure compliance, manage risks, and improve operational performance with configurable applications.", website: "https://benchmarkdigital.com/", starting_price: "Custom Quote", license_model: "Tiered", analyst_rating: "Verdantix: Leader (EHS Software)", created_at: "2024-07-15", updated_at: "2025-03-10", mock_capability_score: 78, mock_momentum_score: 75 },
    { id: 5, name: "Watershed Climate", logo: "assets/logos/watershed.png", owner_company: "Watershed Technology, Inc.", deployment_model: "SaaS", primary_purpose: "GHG Accounting", description: "Watershed specializes in carbon accounting and decarbonization. Their platform helps businesses measure their carbon footprint, set reduction targets, and report on progress. Known for its granular data analysis.", website: "https://www.watershed.com", starting_price: "Starts at $25,000/year", license_model: "Tiered", analyst_rating: "Internal Assessment: Promising", created_at: "2025-01-05", updated_at: "2025-05-10", mock_capability_score: 90, mock_momentum_score: 60 }, 
    { id: 4, name: "SpheraCloud ESG", logo: "assets/logos/sphera.png", owner_company: "Sphera", deployment_model: "Hybrid", primary_purpose: "Risk Management", description: "SpheraCloud ESG helps organizations identify, assess, and mitigate ESG risks across their operations and supply chain. It combines software with deep domain expertise to provide actionable insights.", website: "https://www.sphera.com", starting_price: "Tiered Pricing", license_model: "Flat Rate", analyst_rating: "Forrester Wave: Strong Performer Q4 2024", created_at: "2024-08-10", updated_at: "2025-02-28", mock_capability_score: 80, mock_momentum_score: 82 },
    { id: 15, name: "VelocityEHS ESG", logo: "assets/logos/velocityehs.png", owner_company: "VelocityEHS", deployment_model: "SaaS", primary_purpose: "All-in-One", description: "VelocityEHS provides an integrated platform for EHS and ESG management, helping companies manage risk, ensure compliance, and improve sustainability performance. Known for its comprehensive EHS capabilities.", website: "https://www.ehs.com/solutions/esg-sustainability/", starting_price: "Custom Quote", license_model: "Per User", analyst_rating: "Verdantix: Leader (EHS Software)", created_at: "2024-07-22", updated_at: "2025-04-18", mock_capability_score: 85, mock_momentum_score: 88 },
    { id: 7, name: "Workiva ESG", logo: "assets/logos/workiva.png", owner_company: "Workiva Inc.", deployment_model: "SaaS", primary_purpose: "ESG Reporting", description: "Workiva provides a connected reporting platform that simplifies complex ESG and sustainability reporting. It allows for collaboration, data integration, and audit trails, ensuring accuracy and compliance for public disclosures.", website: "https://www.workiva.com/solutions/esg-reporting", starting_price: "Free Tier Available", license_model: "Freemium", analyst_rating: "Gartner: Leader (Financial Close & Consolidation)", created_at: "2024-12-01", updated_at: "2025-04-25", mock_capability_score: 88, mock_momentum_score: 92 },
    { id: 1, name: "Enablon Excellence", logo: "assets/logos/enablon.png", owner_company: "Wolters Kluwer", deployment_model: "SaaS", primary_purpose: "All-in-One", description: "Enablon offers a comprehensive suite of tools for managing ESG performance, risk, and compliance. It helps organizations collect, analyze, and report on ESG data, ensuring transparency and adherence to global standards. Ideal for large enterprises looking for an integrated solution.", website: "https://www.enablon.com", starting_price: "Custom Quote", license_model: "Tiered", analyst_rating: "Verdantix: Leader Q1 2025", created_at: "2024-10-15", updated_at: "2025-04-20", mock_capability_score: 92, mock_momentum_score: 90 },
    { id: 12, name: "IBM Envizi Suite", logo: "assets/logos/envizi.png", owner_company: "IBM", deployment_model: "SaaS", primary_purpose: "Analytics", description: "IBM Envizi Suite provides data and analytics software for ESG performance management. It helps organizations capture, consolidate, manage, analyze, and report on their ESG data.", website: "https://www.ibm.com/products/envizi", starting_price: "Custom Quote", license_model: "Enterprise", analyst_rating: "Verdantix: Leader (ESG Reporting & Data Management)", created_at: "2024-06-15", updated_at: "2025-04-15", mock_capability_score: 95, mock_momentum_score: 93 }
];

// Update descriptions with random keywords
softwareData = softwareData.map(software => {
    // Add 2 or 3 random keywords
    const keywordCount = Math.random() < 0.5 ? 2 : 3; 
    return { ...software, description: appendRandomKeywords(software.description, keywordCount) };
});


// --- DOM Elements ---
const searchBar = document.getElementById('searchBar');
const softwareCardContainer = document.getElementById('softwareCardContainer');
const softwareListContainer = document.getElementById('softwareListContainer');
const softwareQuadrantContainer = document.getElementById('softwareQuadrantContainer');
const mainQuadrantArea = document.getElementById('mainQuadrantArea'); 
const noResultsMessage = document.getElementById('noResultsMessage');

const softwareModal = document.getElementById('softwareModal');
const closeModalButton = document.getElementById('closeModalButton');
const closeModalButtonFooter = document.getElementById('closeModalButtonFooter');

// Modal fields
const modalName = document.getElementById('modalName');
const modalLogo = document.getElementById('modalLogo');
const modalOwnerCompany = document.getElementById('modalOwnerCompany');
const modalPrimaryPurpose = document.getElementById('modalPrimaryPurpose');
const modalDescription = document.getElementById('modalDescription');
const modalDeploymentModel = document.getElementById('modalDeploymentModel');
const modalLicenseModel = document.getElementById('modalLicenseModel');
const modalStartingPrice = document.getElementById('modalStartingPrice');
const modalAnalystRating = document.getElementById('modalAnalystRating');
const modalWebsite = document.getElementById('modalWebsite');
const modalCreatedAt = document.getElementById('modalCreatedAt');
const modalUpdatedAt = document.getElementById('modalUpdatedAt');

// View toggle buttons
const cardViewBtn = document.getElementById('cardViewBtn');
const listViewBtn = document.getElementById('listViewBtn');
const quadrantViewBtn = document.getElementById('quadrantViewBtn');

let currentView = 'card'; // Default view

// --- Utility Functions ---
function getInitials(name) {
    if (!name) return 'LOGO';
    const words = name.split(' ');
    if (words.length > 1) {
        return (words[0][0] + (words[1][0] || '')).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
}

function handleImageError(imgElement, softwareName, placeholderSize = "64x64") {
    imgElement.onerror = null; 
    const initials = getInitials(softwareName);
    imgElement.src = `https://placehold.co/${placeholderSize}/E2E8F0/A0AEC0?text=${initials}`;
    imgElement.alt = `${softwareName} logo placeholder with initials ${initials}`;
}

// --- HTML Generation Functions ---
function createSoftwareCardHTML(software) {
    const snippet = software.description.length > 100 ? software.description.substring(0, 100) + "..." : software.description;
    return `
        <div class="card-base overflow-hidden cursor-pointer flex flex-col card-focusable" data-id="${software.id}" role="button" tabindex="0" aria-labelledby="card-title-${software.id}">
            <div class="p-6 flex-grow">
                <div class="flex items-start space-x-4 mb-3">
                    <img src="${software.logo}" alt="${software.name} Logo" class="w-16 h-16 rounded-lg logo-img flex-shrink-0 border border-slate-100" onerror="handleImageError(this, '${software.name.replace(/'/g, "\\'")}', '64x64')">
                    <div>
                        <h3 id="card-title-${software.id}" class="text-xl font-semibold text-slate-800 mb-1">${software.name}</h3>
                        <span class="text-xs font-medium bg-sky-100 text-sky-700 px-2 py-1 rounded-full">${software.primary_purpose}</span>
                    </div>
                </div>
                <p class="text-sm text-slate-600 leading-relaxed mb-3">${snippet}</p>
            </div>
            <div class="px-6 py-4 bg-slate-50 border-t border-slate-200">
                 <span class="text-sm text-blue-600 hover:text-blue-700 font-medium">View Details &rarr;</span>
            </div>
        </div>`;
}

function createSoftwareListItemHTML(software) {
    return `
        <div class="list-item card-focusable" data-id="${software.id}" role="button" tabindex="0" aria-labelledby="list-title-${software.id}">
            <img src="${software.logo}" alt="${software.name} Logo" class="logo-img flex-shrink-0" onerror="handleImageError(this, '${software.name.replace(/'/g, "\\'")}', '40x40')">
            <div class="flex-grow">
                <h4 id="list-title-${software.id}" class="font-semibold text-slate-800">${software.name}</h4>
                <p class="text-xs text-slate-500">${software.owner_company} - ${software.primary_purpose}</p>
            </div>
            <span class="text-xs text-blue-600 hover:text-blue-700 font-medium ml-auto p-2" aria-hidden="true">&rarr;</span>
        </div>`;
}

function createSoftwareQuadrantBubbleHTML(software) {
    const xPos = Math.max(5, Math.min(95, software.mock_momentum_score)); 
    const yPos = 100 - Math.max(5, Math.min(95, software.mock_capability_score)); 
    
    const displayName = software.name.length > 15 ? software.name.substring(0,13) + "..." : software.name;

    return `
        <div class="company-bubble focusable" data-id="${software.id}" role="button" tabindex="0" style="left: calc(${xPos}% - 40px); bottom: calc(${yPos}% - 40px);" title="${software.name} | Capability: ${software.mock_capability_score}, Momentum: ${software.mock_momentum_score}" aria-label="${software.name}">
            <img src="${software.logo}" alt="" onerror="this.style.display='none'"> 
            <span>${displayName}</span>
        </div>`;
}

// --- DOM Manipulation & Display Logic ---
function clearQuadrantBubbles() {
    if (mainQuadrantArea) { // Check if element exists
        const existingBubbles = mainQuadrantArea.querySelectorAll('.company-bubble');
        existingBubbles.forEach(bubble => bubble.remove());
    }
}

function displaySoftware(filteredData) {
    // Ensure containers exist before manipulating them
    if (softwareCardContainer) softwareCardContainer.classList.add('hidden');
    if (softwareListContainer) softwareListContainer.classList.add('hidden');
    if (softwareQuadrantContainer) softwareQuadrantContainer.classList.add('hidden');
    if (noResultsMessage) noResultsMessage.classList.add('hidden');
    
    if (softwareCardContainer) softwareCardContainer.innerHTML = '';
    if (softwareListContainer) softwareListContainer.innerHTML = '';
    clearQuadrantBubbles(); 

    if (filteredData.length === 0) {
        if (noResultsMessage) noResultsMessage.classList.remove('hidden'); 
    } else {
        if (currentView === 'card' && softwareCardContainer) {
            softwareCardContainer.classList.remove('hidden');
            filteredData.forEach(software => softwareCardContainer.insertAdjacentHTML('beforeend', createSoftwareCardHTML(software)));
        } else if (currentView === 'list' && softwareListContainer) {
            softwareListContainer.classList.remove('hidden');
            filteredData.forEach(software => softwareListContainer.insertAdjacentHTML('beforeend', createSoftwareListItemHTML(software)));
        } else if (currentView === 'quadrant' && softwareQuadrantContainer && mainQuadrantArea) {
            softwareQuadrantContainer.classList.remove('hidden');
            filteredData.forEach(software => {
                const bubbleHTML = createSoftwareQuadrantBubbleHTML(software);
                mainQuadrantArea.insertAdjacentHTML('beforeend', bubbleHTML);
            });
        }
    }
}

// --- Modal Logic ---
function openModal(software) {
    if (!softwareModal) return; // Ensure modal exists

    modalName.textContent = software.name;
    modalLogo.src = software.logo;
    modalLogo.alt = `${software.name} Logo`;
    modalLogo.onerror = () => handleImageError(modalLogo, software.name, '80x80');
    
    modalOwnerCompany.textContent = software.owner_company;
    modalPrimaryPurpose.textContent = software.primary_purpose;
    modalDescription.textContent = software.description;
    modalDeploymentModel.textContent = software.deployment_model;
    modalLicenseModel.textContent = software.license_model;
    modalStartingPrice.textContent = software.starting_price;
    modalAnalystRating.textContent = software.analyst_rating;
    modalWebsite.href = software.website;
    modalWebsite.textContent = software.website;
    modalCreatedAt.textContent = software.created_at;
    modalUpdatedAt.textContent = software.updated_at;
    
    softwareModal.classList.remove('modal-hidden');
    softwareModal.classList.add('modal-visible');
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    if (!softwareModal) return; // Ensure modal exists
    softwareModal.classList.add('modal-hidden');
    softwareModal.classList.remove('modal-visible');
    document.body.style.overflow = ''; 
}

// --- Filtering and View Switching ---
function filterSoftware(searchTerm) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();
    if (!lowerCaseSearchTerm) return softwareData; 
    return softwareData.filter(software => 
        software.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        software.description.toLowerCase().includes(lowerCaseSearchTerm) || // Search in description
        software.primary_purpose.toLowerCase().includes(lowerCaseSearchTerm)
    );
}

function switchView(view) {
    currentView = view; 

    if (cardViewBtn) cardViewBtn.classList.toggle('active', view === 'card');
    if (listViewBtn) listViewBtn.classList.toggle('active', view === 'list');
    if (quadrantViewBtn) quadrantViewBtn.classList.toggle('active', view === 'quadrant');
    
    const searchTerm = searchBar ? searchBar.value : "";
    const dataToDisplay = filterSoftware(searchTerm).sort((a, b) => a.id - b.id); 
    
    displaySoftware(dataToDisplay); 
}

// --- Event Handling using Delegation ---
function handleInteractiveItemClick(event) {
    const targetElement = event.target.closest('[data-id]'); 
    if (targetElement) {
        const softwareId = parseInt(targetElement.dataset.id);
        const selectedSoftware = softwareData.find(s => s.id === softwareId);
        if (selectedSoftware) {
            openModal(selectedSoftware);
        }
    }
}

function handleInteractiveItemKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        let targetElement = event.target;
        while(targetElement && targetElement !== event.currentTarget) {
            if (targetElement.matches('[data-id][role="button"]')) {
                event.preventDefault();
                const softwareId = parseInt(targetElement.dataset.id);
                const selectedSoftware = softwareData.find(s => s.id === softwareId);
                if (selectedSoftware) {
                    openModal(selectedSoftware);
                }
                return; 
            }
            targetElement = targetElement.parentElement;
        }
    }
}

// --- Initial Setup ---
document.addEventListener('DOMContentLoaded', () => {
    // Ensure modal is hidden by default
    if (softwareModal) { 
         softwareModal.classList.add('modal-hidden');
         softwareModal.classList.remove('modal-visible');
    }

    switchView('card'); 

    if (searchBar) {
        searchBar.addEventListener('input', (e) => {
            const searchTerm = e.target.value;
            const dataToDisplay = filterSoftware(searchTerm).sort((a, b) => a.id - b.id);
            displaySoftware(dataToDisplay);
        });
    }

    if (closeModalButton) closeModalButton.addEventListener('click', closeModal);
    if (closeModalButtonFooter) closeModalButtonFooter.addEventListener('click', closeModal);
    if (softwareModal) {
        softwareModal.addEventListener('click', (e) => { 
            if (e.target === softwareModal) closeModal(); 
        });
    }
    document.addEventListener('keydown', (e) => { 
        if (e.key === 'Escape' && softwareModal && softwareModal.classList.contains('modal-visible')) {
            closeModal(); 
        }
    });

    if (cardViewBtn) cardViewBtn.addEventListener('click', () => switchView('card'));
    if (listViewBtn) listViewBtn.addEventListener('click', () => switchView('list'));
    if (quadrantViewBtn) quadrantViewBtn.addEventListener('click', () => switchView('quadrant'));

    // Setup event delegation for clicks and keydowns on items
    if (softwareCardContainer) {
        softwareCardContainer.addEventListener('click', handleInteractiveItemClick);
        softwareCardContainer.addEventListener('keydown', handleInteractiveItemKeydown);
    }
    if (softwareListContainer) {
        softwareListContainer.addEventListener('click', handleInteractiveItemClick);
        softwareListContainer.addEventListener('keydown', handleInteractiveItemKeydown);
    }
    if (mainQuadrantArea) {
        mainQuadrantArea.addEventListener('click', handleInteractiveItemClick);
        mainQuadrantArea.addEventListener('keydown', handleInteractiveItemKeydown);
    }
});
