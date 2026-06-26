// Workshop Index JavaScript
// Populates the workshop index page with all available workshops

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the workshop index page
    initializeWorkshopIndex();
});

function initializeWorkshopIndex() {
    // Populate workshops grid
    populateWorkshopsGrid();
}

function populateWorkshopsGrid() {
    if (window.WORKSHOPS_INDEX_CONFIG) {
        const workshopsContainer = document.getElementById('workshops-grid');
        if (workshopsContainer) {
            const workshops = window.WORKSHOPS_INDEX_CONFIG.workshops;
            
            workshopsContainer.innerHTML = workshops.map(workshop => `
                <div class="workshop-card ${workshop.colorScheme}">
                    <div class="workshop-card-header">
                        <h2 class="workshop-card-title">${workshop.title}</h2>
                        <p class="workshop-card-subtitle">${workshop.subtitle}</p>
                    </div>
                    
                    <p class="workshop-description">${workshop.description}</p>
                    
                    <ul class="workshop-features">
                        ${workshop.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    
                    <div class="workshop-meta">
                        <div class="workshop-meta-item">
                            <span>📅</span>
                            <strong>When:</strong> ${workshop.date}
                        </div>
                        <div class="workshop-meta-item">
                            <span>⏰</span>
                            <strong>Duration:</strong> ${workshop.duration}
                        </div>
                        <div class="workshop-meta-item">
                            <span>👥</span>
                            <strong>Format:</strong> ${workshop.format}
                        </div>
                        <div class="workshop-meta-item">
                            <span>💰</span>
                            <strong>Price:</strong> ${workshop.price}
                        </div>
                    </div>
                    
                    <div class="workshop-cta">
                        ${workshop.status === 'active' 
                            ? `<a href="${workshop.ctaUrl}" class="cta-button ${workshop.colorScheme}" target="_blank" rel="noopener noreferrer">${workshop.ctaText}</a>`
                            : `<span class="cta-button ${workshop.colorScheme}" style="opacity: 0.6; cursor: not-allowed;">Coming Soon</span>`
                        }
                    </div>
                </div>
            `).join('');
        }
    }
}