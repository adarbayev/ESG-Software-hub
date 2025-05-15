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
    { id: 14, name: "WayCarbon Climas", logo: "assets/logos/Waycarbon.png", owner_company: "Banco Santander (80% stake)", deployment_model: "SaaS", primary_purpose: "All-in-One ESG & Carbon Management", description: "Climas by WayCarbon delivers end-to-end carbon accounting, ESG data management and scenario analysis with a strong footprint in Latin America.", website: "https://www.waycarbon.com", starting_price: "Consulting-led", license_model: "Project / Subscription hybrid", frameworks: "GHG Protocol, CDP, SBTi, TCFD", analyst_rating: "IDC Market Note 2024", created_at: "2024-09-05", updated_at: "2025-05-15", capability_score: 42, momentum_score: 38 },
    { id: 10, name: "Sustaira ESG Platform", logo: "assets/logos/Sustaira.png", owner_company: "Sustaira B.V.", deployment_model: "SaaS (Low-code)", primary_purpose: "Custom ESG Apps & Dashboards", description: "Low-code platform that lets organisations build modular ESG apps (carbon, DEI, goals, etc.) on top of Microsoft Power Platform.", website: "https://www.sustaira.com", starting_price: "Modular – from $1 k/app/yr", license_model: "Subscription (per app or site)", frameworks: "GRI, SASB, SDGs (template kits)", analyst_rating: "Verdantix Green Quadrant 2024 – Niche", created_at: "2024-11-20", updated_at: "2025-05-15", capability_score: 48, momentum_score: 45 },
    { id: 11, name: "Plan A Platform", logo: "assets/logos/PlanA.png", owner_company: "Plan A Earth GmbH", deployment_model: "SaaS", primary_purpose: "Carbon Accounting & CSRD Readiness", description: "Science-based platform for Scope 1-3 accounting, decarbonisation road-mapping and CSRD-aligned ESG reporting.", website: "https://plana.earth", starting_price: "From €8 k/yr", license_model: "Tiered (seat + sites)", frameworks: "GHG Protocol, CSRD/ESRS, CDP, SBTi", analyst_rating: "Verdantix Green Quadrant 2025 – Challenger", created_at: "2025-02-01", updated_at: "2025-05-15", capability_score: 60, momentum_score: 50 },,

    // Innovators (High Capability >50, Low Momentum <50)
    { id: 9,  name: "Sweep", logo: "assets/logos/Sweep.png", owner_company: "Sweep SAS", deployment_model: "SaaS", primary_purpose: "GHG Accounting & Supplier Collaboration", description: "Data-driven carbon platform covering Scopes 1-3 with supplier engagement workflows and reduction scenario modelling.", website: "https://www.sweep.net", starting_price: "Contact Sales", license_model: "Tiered (tonnage-based)", frameworks: "GHG Protocol, SBTi, CDP, TCFD", analyst_rating: "Forrester New Wave 2024 – Strong Performer", created_at: "2025-01-10", updated_at: "2025-05-15", capability_score: 72, momentum_score: 48 },
    { id: 16, name: "Novisto", logo: "assets/logos/Novisto.png", owner_company: "Novisto Inc.", deployment_model: "SaaS", primary_purpose: "ESG Data Management & Reporting", description: "AI-powered platform that centralises ESG data, improves auditability and auto-maps disclosures to multiple frameworks.", website: "https://novisto.com", starting_price: "Contact Sales", license_model: "Subscription (tiered)", frameworks: "GRI, SASB, TCFD, CSRD/ESRS", analyst_rating: "Gartner Cool Vendor 2024", created_at: "2025-03-01", updated_at: "2025-05-15", capability_score: 78, momentum_score: 52 },
    { id: 6,  name: "Persefoni", logo: "assets/logos/Persefoni.png", owner_company: "Persefoni AI Inc.", deployment_model: "SaaS", primary_purpose: "Enterprise Carbon Platform", description: "‘ERP for carbon’ offering audit-grade emissions data, IFRS-ISSB templates and Japanese PCAF financing support.", website: "https://www.persefoni.com", starting_price: "Usage-based (per MTCO2e)", license_model: "Subscription + overage", frameworks: "GHG Protocol, ISSB S1/S2, CDP, PCAF", analyst_rating: "Verdantix Green Quadrant 2025 – Innovator", created_at: "2025-02-15", updated_at: "2025-05-15", capability_score: 85, momentum_score: 58 },
,
    
    // Specialists (Low Capability <50, High Momentum >50)
    { id: 18, name: "EcoOnline ESG", logo: "assets/logos/EcoOnline.png", owner_company: "EcoOnline Holding AS", deployment_model: "SaaS", primary_purpose: "EHS & ESG Risk Management", description: "Adds ESG dashboards to EcoOnline’s EHS suite, supporting KPI tracking and disclosure workflows, especially for chemicals-intensive sectors.", website: "https://www.ecoonline.com/esg-software", starting_price: "Contact Sales", license_model: "Per User", frameworks: "GRI, GHG Protocol, ISO 14001", analyst_rating: "Verdantix Best in Class (Chemical Safety) 2024", created_at: "2024-09-12", updated_at: "2025-05-15", capability_score: 50, momentum_score: 62 },
    { id: 13, name: "Clarity AI", logo: "assets/logos/ClarityAI.png", owner_company: "Clarity AI Inc.", deployment_model: "SaaS / API", primary_purpose: "ESG & Impact Analytics", description: "AI-powered sustainability data engine used by investors and corporates for SFDR, EU Taxonomy and bespoke impact scoring.", website: "https://clarity.ai", starting_price: "API usage-based", license_model: "Usage-Based", frameworks: "SFDR, EU Taxonomy, SASB, SDGs", analyst_rating: "Forrester Wave 2024 – Leader (ESG Data)", created_at: "2024-10-01", updated_at: "2025-05-15", capability_score: 55, momentum_score: 70 },
    { id: 17, name: "OneTrust ESG Cloud", logo: "assets/logos/OneTrust.png", owner_company: "OneTrust LLC", deployment_model: "SaaS", primary_purpose: "Disclosure & Compliance Management", description: "Extends OneTrust’s privacy platform to ESG: double-materiality, CSRD gap analysis and automated report builder.", website: "https://www.onetrust.com/products/esg-sustainability-software", starting_price: "Custom Quote", license_model: "Platform Subscription", frameworks: "CSRD/ESRS, SEC Climate, GRI, SASB", analyst_rating: "IDC MarketScape 2024 – Leader (Trust Management)", created_at: "2024-08-25", updated_at: "2025-05-15", capability_score: 60, momentum_score: 80 },
,
    
    // Leaders (High Capability >50, High Momentum >50)
    { id: 3,  name: "Cority Sustainability Cloud", logo: "assets/logos/Cority.png", owner_company: "Cority Software Inc.", deployment_model: "SaaS", primary_purpose: "ESG Reporting & EHS Integration", description: "End-to-end sustainability solution tightly integrated with Cority’s EHS workflow engine.", website: "https://www.cority.com/sustainability-cloud", starting_price: "Custom Quote", license_model: "Module-based", frameworks: "GRI, SASB, CDP, TCFD", analyst_rating: "IDC MarketScape 2024 – Major Player", created_at: "2024-09-20", updated_at: "2025-05-15", capability_score: 68, momentum_score: 70 },
    { id: 2,  name: "Intelex ESG", logo: "assets/logos/Intelex.png", owner_company: "Intelex Technologies ULC (Fortive Corp.)", deployment_model: "SaaS", primary_purpose: "Data Collection & KPI Management", description: "Collect, validate and map ESG data to multiple frameworks with drag-and-drop dashboards.", website: "https://www.intelex.com/esg", starting_price: "≈ $25 k/yr", license_model: "Per User", frameworks: "CSRD/ESRS, SEC, GRI, CDP, GRESB", analyst_rating: "Gartner Market Guide 2024 – Challenger", created_at: "2024-11-01", updated_at: "2025-05-15", capability_score: 70, momentum_score: 78 },
    { id: 8,  name: "Benchmark ESG (Gensuite)", logo: "assets/logos/BenchmarkG.png", owner_company: "Benchmark Digital Partners LLC", deployment_model: "SaaS", primary_purpose: "EHS / ESG Compliance Suite", description: "Configurable applications for EHS, sustainability and ESG with strong audit trails and IoT integrations.", website: "https://benchmarkdigital.com", starting_price: "Custom Quote", license_model: "Tiered Subscription", frameworks: "GRI, CDP, SASB, ISO 14031", analyst_rating: "Verdantix Green Quadrant 2024 – Leader", created_at: "2024-07-15", updated_at: "2025-05-15", capability_score: 76, momentum_score: 75 },
    { id: 5,  name: "Watershed", logo: "assets/logos/Watershed.png", owner_company: "Watershed Technology Inc.", deployment_model: "SaaS", primary_purpose: "High-resolution Carbon Accounting", description: "Granular carbon measurement with live procurement data; partnered with SBTi and CDP to streamline disclosures.", website: "https://www.watershed.com", starting_price: "From $25 k/yr", license_model: "Tiered (seat + tonnage)", frameworks: "GHG Protocol, SBTi, CDP, TCFD", analyst_rating: "Sequoia-backed; Internal Score Strong", created_at: "2025-01-05", updated_at: "2025-05-15", capability_score: 88, momentum_score: 65 },
    { id: 4,  name: "SpheraCloud ESG", logo: "assets/logos/Sphera.png", owner_company: "Sphera Solutions Inc. (Blackstone)", deployment_model: "Hybrid (SaaS + On-prem)", primary_purpose: "ESG & Supply-Chain Risk", description: "Combines deep LCA datasets with enterprise-grade risk analytics across the value chain.", website: "https://www.sphera.com", starting_price: "Tiered Pricing", license_model: "Flat/Enterprise", frameworks: "GRI, GHG Protocol, CDP, TCFD", analyst_rating: "Forrester Wave 2024 – Strong Performer", created_at: "2024-08-10", updated_at: "2025-05-15", capability_score: 82, momentum_score: 80 },
    { id: 15, name: "VelocityEHS ESG", logo: "assets/logos/VelocityEHS.png", owner_company: "VelocityEHS", deployment_model: "SaaS", primary_purpose: "Integrated EHS & ESG", description: "Unified platform linking safety, industrial hygiene and ESG dashboards; strong analytics and mobile UX.", website: "https://www.ehs.com/solutions/esg-sustainability", starting_price: "Custom Quote", license_model: "Per User", frameworks: "GRI, SASB, TCFD, CDP", analyst_rating: "Verdantix Green Quadrant 2024 – Leader", created_at: "2024-07-22", updated_at: "2025-05-15", capability_score: 85, momentum_score: 88 },
    { id: 7,  name: "Workiva ESG", logo: "assets/logos/Workiva.png", owner_company: "Workiva Inc.", deployment_model: "SaaS", primary_purpose: "Connected ESG Reporting", description: "Collaboration-first platform linking SEC filings, financials and ESG data in one controlled workspace.", website: "https://www.workiva.com/solutions/esg-reporting", starting_price: "Freemium (view-only) → paid tiers", license_model: "Seat-based", frameworks: "GRI, SASB, TCFD, CDP, SEC", analyst_rating: "Gartner Magic Quadrant 2024 – Leader (FC&C)", created_at: "2024-12-01", updated_at: "2025-05-15", capability_score: 80, momentum_score: 92 },
    { id: 1,  name: "Enablon ESG Excellence", logo: "assets/logos/Enablon.png", owner_company: "Wolters Kluwer (NLD)", deployment_model: "SaaS", primary_purpose: "Enterprise ESG, EHS & ORM", description: "Flagship integrated suite for large enterprises with robust workflow engine and assurance-ready audit trails.", website: "https://www.enablon.com", starting_price: "Custom Quote", license_model: "Tiered (module + user)", frameworks: "GRI, SASB, TCFD, CDP, CSRD/ESRS", analyst_rating: "Verdantix Green Quadrant 2025 – Leader", created_at: "2024-10-15", updated_at: "2025-05-15", capability_score: 92, momentum_score: 90 },
    { id: 12, name: "IBM Envizi", logo: "assets/logos/Envizi.png", owner_company: "IBM Corp.", deployment_model: "SaaS", primary_purpose: "ESG Data & Analytics", description: "Envizi captures, consolidates and analyses ESG data at scale, integrating natively with IBM Maximo & TRIRIGA.", website: "https://www.ibm.com/products/envizi", starting_price: "Enterprise Quote", license_model: "Enterprise Subscription", frameworks: "GRI, SASB, TCFD, CDP, SBTi", analyst_rating: "Verdantix Green Quadrant 2024 – Leader", created_at: "2024-06-15", updated_at: "2025-05-15", capability_score: 82, momentum_score: 75 }
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
    const yPos = Math.max(5, Math.min(95, software.mock_capability_score)); 
    
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
