// URL of the local pre-populated data endpoint
const DATA_URL = "users.json";

// Global State
let users = [];
let filteredUsers = [];
let currentGenderFilter = "all";
let searchQuery = "";

// DOM Elements
const userGrid = document.getElementById("user-grid");
const apiStatus = document.getElementById("api-status");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");
const errorContainer = document.getElementById("error-container");
const errorMessage = document.getElementById("error-message");
const emptyContainer = document.getElementById("empty-container");
const retryBtn = document.getElementById("retry-btn");

// Stats Elements
const statTotal = document.getElementById("stat-total");
const statFemale = document.getElementById("stat-female");
const statMale = document.getElementById("stat-male");
const statOther = document.getElementById("stat-other");

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
    fetchUserData();
    setupEventListeners();
});

// Event Listeners setup
function setupEventListeners() {
    // Search input handler with input event (instant filtering)
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        applyFilterAndSearch();
    });

    // Gender Filter buttons handler
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            currentGenderFilter = button.getAttribute("data-gender");
            applyFilterAndSearch();
        });
    });

    // Retry Button click
    retryBtn.addEventListener("click", () => {
        fetchUserData();
    });
}

// Fetch user data from backend
async function fetchUserData() {
    showLoading();
    updateApiStatus("fetching", "Fetching data...");

    try {
        const response = await fetch(DATA_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        
        if (!Array.isArray(data)) {
            throw new Error("Invalid response format: expected an array.");
        }

        users = data;
        filteredUsers = [...users];
        
        // Calculate Stats
        calculateStats(users);

        // Update UI
        updateApiStatus("success", "API Connection Live");
        hideError();
        enableControls();
        applyFilterAndSearch();

    } catch (error) {
        console.error("Fetch Error:", error);
        updateApiStatus("error", "Connection Failed");
        showError(error.message || "Failed to retrieve registry data from endpoint.");
    }
}

// UI State Helpers
function showLoading() {
    userGrid.innerHTML = `
        <div class="user-card skeleton">
            <div class="skeleton-avatar"></div>
            <div class="skeleton-line short"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line medium"></div>
        </div>
        <div class="user-card skeleton">
            <div class="skeleton-avatar"></div>
            <div class="skeleton-line short"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line medium"></div>
        </div>
        <div class="user-card skeleton">
            <div class="skeleton-avatar"></div>
            <div class="skeleton-line short"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line medium"></div>
        </div>
    `;
    userGrid.classList.add("skeleton-active");
    emptyContainer.classList.add("hidden");
    errorContainer.classList.add("hidden");
    searchInput.disabled = true;
}

function enableControls() {
    searchInput.disabled = false;
}

function updateApiStatus(state, label) {
    const statusDot = apiStatus.querySelector(".status-dot");
    const statusLabel = apiStatus.querySelector(".status-label");
    
    // Reset classes
    statusDot.className = "status-dot";
    statusLabel.textContent = label;

    if (state === "fetching") {
        statusDot.classList.add("pulsing");
    } else if (state === "success") {
        statusDot.classList.add("success");
    } else if (state === "error") {
        statusDot.classList.add("error");
    }
}

function showError(msg) {
    errorMessage.textContent = msg;
    userGrid.innerHTML = "";
    userGrid.classList.remove("skeleton-active");
    errorContainer.classList.remove("hidden");
    emptyContainer.classList.add("hidden");
    
    // Clear stats
    statTotal.textContent = "0";
    statFemale.textContent = "0";
    statMale.textContent = "0";
    statOther.textContent = "0";
}

function hideError() {
    errorContainer.classList.add("hidden");
}

// Calculate Statistics
function calculateStats(dataList) {
    statTotal.textContent = dataList.length;
    
    const stats = dataList.reduce((acc, user) => {
        const gender = (user.gender || "").toLowerCase();
        if (gender === "female") {
            acc.female++;
        } else if (gender === "male") {
            acc.male++;
        } else {
            acc.other++;
        }
        return acc;
    }, { female: 0, male: 0, other: 0 });

    statFemale.textContent = stats.female;
    statMale.textContent = stats.male;
    statOther.textContent = stats.other;
}

// Filter and Search logic
function applyFilterAndSearch() {
    filteredUsers = users.filter(user => {
        // Gender filter matching
        const genderMatch = currentGenderFilter === "all" || 
            (currentGenderFilter === "female" && user.gender?.toLowerCase() === "female") ||
            (currentGenderFilter === "male" && user.gender?.toLowerCase() === "male") ||
            (currentGenderFilter === "other" && user.gender?.toLowerCase() !== "female" && user.gender?.toLowerCase() !== "male");

        // Search matching (first name, last name, email, ip)
        const fullName = `${user.first_name || ""} ${user.last_name || ""}`.toLowerCase();
        const email = (user.email || "").toLowerCase();
        const ip = (user.ip_address || "").toLowerCase();
        const searchMatch = !searchQuery || 
            fullName.includes(searchQuery) ||
            email.includes(searchQuery) ||
            ip.includes(searchQuery);

        return genderMatch && searchMatch;
    });

    renderUsers();
}

// Render list of users into the grid
function renderUsers() {
    userGrid.classList.remove("skeleton-active");
    userGrid.innerHTML = "";

    if (filteredUsers.length === 0) {
        emptyContainer.classList.remove("hidden");
        return;
    }

    emptyContainer.classList.add("hidden");

    const fragment = document.createDocumentFragment();

    filteredUsers.forEach(user => {
        const card = document.createElement("div");
        card.className = "user-card";
        
        // Colors/Styles based on gender
        const genderClass = (user.gender || "").toLowerCase();
        const initials = `${user.first_name?.charAt(0) || ""}${user.last_name?.charAt(0) || ""}`.toUpperCase();
        
        card.innerHTML = `
            <div class="user-card-header">
                <div class="avatar gender-${genderClass}">${initials}</div>
                <div class="user-badge-id">#${user.id}</div>
            </div>
            <div class="user-info">
                <h3>${user.first_name || ""} ${user.last_name || ""}</h3>
                <a href="mailto:${user.email}" class="user-email" title="Click to email">
                    <span>✉️</span> ${user.email}
                </a>
            </div>
            <div class="user-meta">
                <span class="gender-tag gender-${genderClass}">${user.gender || "Unknown"}</span>
                <div class="ip-address" onclick="copyToClipboard('${user.ip_address}', this)">
                    <span class="ip-value">🖥️ ${user.ip_address || "N/A"}</span>
                    <span class="tooltip">Click to copy</span>
                </div>
            </div>
        `;
        fragment.appendChild(card);
    });

    userGrid.appendChild(fragment);
}

// Copy to Clipboard Utility helper
function copyToClipboard(text, element) {
    if (!text || text === "N/A") return;
    
    navigator.clipboard.writeText(text).then(() => {
        const tooltip = element.querySelector(".tooltip");
        if (tooltip) {
            tooltip.textContent = "Copied!";
            tooltip.classList.add("copied");
            
            setTimeout(() => {
                tooltip.textContent = "Click to copy";
                tooltip.classList.remove("copied");
            }, 2000);
        }
    }).catch(err => {
        console.error("Unable to copy", err);
    });
}
