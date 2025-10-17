
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

// Observe all story cards and timeline items
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll('.story-card, .timeline-item, .stat-card');
    elementsToObserve.forEach(el => observer.observe(el));
});

// Modal functionality for detailed stories
class StoryModal {
    constructor() {
        this.modal = null;
        this.createModal();
    }

    createModal() {
        const modalHTML = `
            <div class="modal fade" id="storyModal" tabindex="-1">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content" style="background: #1a1a1a; color: #fff; border: 2px solid rgba(102, 126, 234, 0.3);">
                        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <h3 class="modal-title" id="modalTitle"></h3>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body" id="modalBody">
                            <!-- Content will be inserted here -->
                        </div>
                        <div class="modal-footer" style="border-top: 1px solid rgba(255,255,255,0.1);">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modal = new bootstrap.Modal(document.getElementById('storyModal'));
    }

    show(story) {
        document.getElementById('modalTitle').textContent = story.name;
        
        const statsHTML = this.generateStatsHTML(story);
        
        document.getElementById('modalBody').innerHTML = `
            <img src="${story.image}" class="img-fluid rounded mb-3" alt="${story.name}">
            <p class="mb-3"><strong>Established:</strong> ${story.year}</p>
            <span class="category-badge category-${story.category}">${story.category}</span>
            <p class="mt-3">${story.story}</p>
            ${statsHTML}
        `;
        
        this.modal.show();
    }

    generateStatsHTML(story) {
        let statsHTML = '<div class="mt-4"><h5>Impact Statistics</h5><ul>';
        
        if (story.stats.employees) {
            statsHTML += `<li><strong>Employees:</strong> ${story.stats.employees}</li>`;
            statsHTML += `<li><strong>Years Active:</strong> ${story.stats.yearsActive}</li>`;
            statsHTML += `<li><strong>Community Events:</strong> ${story.stats.communityEvents}</li>`;
        } else if (story.stats.volunteers) {
            statsHTML += `<li><strong>Volunteers:</strong> ${story.stats.volunteers}</li>`;
            statsHTML += `<li><strong>People Served:</strong> ${story.stats.peopleServed.toLocaleString()}</li>`;
            statsHTML += `<li><strong>Programs Offered:</strong> ${story.stats.programsOffered}</li>`;
        } else if (story.stats.members) {
            statsHTML += `<li><strong>Members:</strong> ${story.stats.members}</li>`;
            statsHTML += `<li><strong>Calls Answered:</strong> ${story.stats.callsAnswered.toLocaleString()}</li>`;
            statsHTML += `<li><strong>Lives Impacted:</strong> ${story.stats.livesImpacted.toLocaleString()}</li>`;
        }
        
        statsHTML += '</ul></div>';
        return statsHTML;
    }
}


let storyModal;
document.addEventListener('DOMContentLoaded', () => {
    storyModal = new StoryModal();
});


function showStoryModal(id) {
    const story = allStories.find(s => s.id === id);
    if (story && storyModal) {
        storyModal.show(story);
    }
}

// Search functionality
class SearchHandler {
    constructor() {
        this.searchInput = null;
        this.searchResults = [];
    }

    init() {
        // Add search bar to navbar if it doesn't exist
        const navbar = document.querySelector('.navbar-nav');
        if (navbar && !document.getElementById('searchInput')) {
            const searchHTML = `
                <li class="nav-item">
                    <input type="text" id="searchInput" class="form-control" placeholder="Search stories..." 
                           style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff;">
                </li>
            `;
            navbar.insertAdjacentHTML('beforeend', searchHTML);
            
            this.searchInput = document.getElementById('searchInput');
            this.searchInput.addEventListener('input', (e) => this.search(e.target.value));
        }
    }

    search(query) {
        if (query.length < 2) {
            this.clearResults();
            return;
        }

        const results = allStories.filter(story => 
            story.name.toLowerCase().includes(query.toLowerCase()) ||
            story.story.toLowerCase().includes(query.toLowerCase()) ||
            story.category.toLowerCase().includes(query.toLowerCase())
        );

        this.displayResults(results);
    }

    displayResults(results) {
        // Implementation depends on where you want to show results
        console.log('Search results:', results);
    }

    clearResults() {
        this.searchResults = [];
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const searchHandler = new SearchHandler();
    searchHandler.init();
});


window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});


function animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = Math.round(end).toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current).toLocaleString();
        }
    }, 16);
}

// Trigger counters when they come into view
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber) {
                const endValue = parseInt(statNumber.textContent.replace(/,/g, ''));
                statNumber.textContent = '0';
                animateCounter(statNumber, 0, endValue, 2000);
                entry.target.dataset.animated = 'true';
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.stat-card').forEach(card => {
        statObserver.observe(card);
    });
});

// Export data as JSON
function exportData() {
    const dataStr = JSON.stringify({
        businesses: communityData.businesses,
        nonprofits: communityData.nonprofits,
        heroes: communityData.heroes
    }, null, 2);
    
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'community_data.json';
    link.click();
}


function printPage() {
    window.print();
}


function shareStory(storyId) {
    const story = allStories.find(s => s.id === storyId);
    
    if (navigator.share && story) {
        navigator.share({
            title: story.name,
            text: story.story,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy to clipboard
        const url = `${window.location.href}?story=${storyId}`;
        navigator.clipboard.writeText(url)
            .then(() => alert('Link copied to clipboard!'))
            .catch(err => console.log('Error copying:', err));
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const storyId = urlParams.get('story');
    
    if (storyId) {
        const id = parseInt(storyId);
        setTimeout(() => showStoryModal(id), 500);
    }
});


document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.focus();
    }
    
 
    if (e.key === 'Escape' && storyModal && storyModal.modal) {
        storyModal.modal.hide();
    }
});


window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});


const style = document.createElement('style');
style.textContent = `
    .fade-in-visible {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    @media print {
        .navbar, .footer, .cta-button, .filter-btn {
            display: none !important;
        }
    }
`;
document.head.appendChild(style);

console.log('Community Stories website loaded successfully!');
