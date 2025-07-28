// Workshop Index JavaScript
// Populates the workshop index page with all available workshops

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the workshop index page
    initializeWorkshopIndex();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

function initializeWorkshopIndex() {
    // Populate workshops grid
    populateWorkshopsGrid();
    
    console.log('Workshop index page initialized successfully');
}

function populateWorkshopsGrid() {
    if (window.WORKSHOPS_INDEX_CONFIG) {
        const workshopsContainer = document.getElementById('workshops-grid');
        if (workshopsContainer) {
            const workshops = window.WORKSHOPS_INDEX_CONFIG.workshops;
            
            workshopsContainer.innerHTML = workshops.map(workshop => `
                <div class="workshop-card ${workshop.colorScheme}">
                    <div class="workshop-header">
                        <h2 class="workshop-title">${workshop.title}</h2>
                        <p class="workshop-subtitle">${workshop.subtitle}</p>
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

// Add click tracking for analytics (if needed)
function trackWorkshopClick(workshopId) {
    console.log('Workshop clicked:', workshopId);
    // You can add analytics tracking here
    // Example: gtag('event', 'workshop_click', { workshop_id: workshopId });
}

// Add hover effects for workshop cards
document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.workshop-card')) {
        const card = e.target.closest('.workshop-card');
        card.style.transform = 'translateY(-4px)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.workshop-card')) {
        const card = e.target.closest('.workshop-card');
        card.style.transform = 'translateY(0)';
    }
});