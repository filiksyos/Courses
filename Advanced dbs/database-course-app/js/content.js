// Content management functions for different topics

// Topic-specific content loaders
const contentLoaders = {
    security: loadSecurityContent,
    concurrency: loadConcurrencyContent,
    recovery: loadRecoveryContent
};

function loadSecurityContent(chunk) {
    // Security-specific content processing
    if (chunk.title.includes('Fundamentals')) {
        setupSecurityTriadDragDrop();
    } else if (chunk.title.includes('Access Control')) {
        setupPrivilegesDragDrop();
    } else if (chunk.title.includes('MAC')) {
        setupRBACDragDrop();
    } else if (chunk.title.includes('Encryption')) {
        setupEncryptionDragDrop();
    }
}

function loadConcurrencyContent(chunk) {
    // Concurrency-specific content processing
    if (chunk.title.includes('Lock-Based')) {
        setupLocksDragDrop();
    } else if (chunk.title.includes('Deadlock')) {
        setupDeadlockDragDrop();
    } else if (chunk.title.includes('Multiple Granularity')) {
        setupMGLContent();
    }
}

function loadRecoveryContent(chunk) {
    // Recovery-specific content processing
    if (chunk.title.includes('Transaction Logs')) {
        setupLogsDragDrop();
    } else if (chunk.title.includes('Buffer Management')) {
        setupWALDragDrop();
    } else if (chunk.title.includes('Recovery Schemes')) {
        setupSchemesDragDrop();
    }
}

// Security-specific setup functions
function setupSecurityTriadDragDrop() {
    // Already handled by general drag-drop, but could add specific logic
}

function setupPrivilegesDragDrop() {
    // Specific logic for SQL privileges drag-drop
}

function setupRBACDragDrop() {
    // Specific logic for role-based access control
}

function setupEncryptionDragDrop() {
    // Specific logic for encryption features
}

// Concurrency-specific setup functions
function setupLocksDragDrop() {
    // Specific logic for lock types
}

function setupDeadlockDragDrop() {
    // Specific logic for deadlock prevention methods
}

function setupMGLContent() {
    // Multiple Granularity Locking specific content
}

// Recovery-specific setup functions
function setupLogsDragDrop() {
    // Transaction log entries drag-drop
}

function setupWALDragDrop() {
    // Write-ahead logging and buffer policies
}

function setupSchemesDragDrop() {
    // Recovery schemes drag-drop
}

// Dynamic content enhancement functions
function enhanceContent() {
    // Add interactive elements to static content
    addHoverEffects();
    addClickEffects();
    setupTooltips();
}

function addHoverEffects() {
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('.drag-item, .quiz-option, .memory-hack');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

function addClickEffects() {
    // Add click animations to buttons
    const buttons = document.querySelectorAll('button, .quiz-option, .drag-item');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

function setupTooltips() {
    // Add tooltips for technical terms
    const terms = {
        'ACID': 'Atomicity, Consistency, Isolation, Durability',
        '2PL': 'Two-Phase Locking Protocol',
        'WAL': 'Write-Ahead Logging',
        'MVCC': 'Multiversion Concurrency Control',
        'RBAC': 'Role-Based Access Control',
        'MAC': 'Mandatory Access Control',
        'DAC': 'Discretionary Access Control',
        'PKI': 'Public Key Infrastructure'
    };
    
    Object.keys(terms).forEach(term => {
        const regex = new RegExp(`\\b${term}\\b`, 'g');
        const content = document.getElementById('chunkContent');
        if (content) {
            content.innerHTML = content.innerHTML.replace(regex, 
                `<span class="tooltip-term" title="${terms[term]}">${term}</span>`);
        }
    });
}

// Content animation functions
function animateContent() {
    const elements = document.querySelectorAll('.chunk-content h3, .chunk-content p, .drag-drop-area, .quiz-immediate');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Progress tracking
function updateProgress() {
    const topicData = topics[currentTopic];
    const progress = ((currentChunk + 1) / topicData.chunks.length) * 100;
    
    // Update progress bar if it exists
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
    
    // Save progress to localStorage
    saveProgress();
}

function saveProgress() {
    const progress = {
        currentTopic,
        currentChunk,
        timestamp: Date.now()
    };
    
    localStorage.setItem('database-course-progress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('database-course-progress');
    if (saved) {
        const progress = JSON.parse(saved);
        
        // Only restore if it's recent (within 24 hours)
        if (Date.now() - progress.timestamp < 24 * 60 * 60 * 1000) {
            return progress;
        }
    }
    return null;
}

// Search functionality
function searchContent(query) {
    const results = [];
    
    Object.keys(topics).forEach(topicKey => {
        const topic = topics[topicKey];
        
        topic.chunks.forEach((chunk, chunkIndex) => {
            if (chunk.title.toLowerCase().includes(query.toLowerCase()) ||
                chunk.content.toLowerCase().includes(query.toLowerCase())) {
                results.push({
                    topic: topicKey,
                    topicTitle: topic.title,
                    chunk: chunkIndex,
                    chunkTitle: chunk.title
                });
            }
        });
    });
    
    return results;
}

// Accessibility features
function setupAccessibility() {
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    previousChunk();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    nextChunk();
                    break;
                case 'Escape':
                    e.preventDefault();
                    goToDashboard();
                    break;
            }
        }
    });
    
    // Add ARIA labels
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent || button.innerHTML);
        }
    });
    
    // Add focus indicators
    const focusableElements = document.querySelectorAll('button, .quiz-option, .drag-item');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '3px solid #667eea';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
}

// Performance optimization
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 250);
    });
}

function handleResize() {
    // Recalculate layouts if needed
    if (window.innerWidth < 768) {
        // Mobile optimizations
        adjustForMobile();
    } else {
        // Desktop optimizations
        adjustForDesktop();
    }
}

function adjustForMobile() {
    // Mobile-specific adjustments
    const dragDropAreas = document.querySelectorAll('.drag-drop-area');
    dragDropAreas.forEach(area => {
        area.style.gridTemplateColumns = '1fr';
    });
}

function adjustForDesktop() {
    // Desktop-specific adjustments
    const dragDropAreas = document.querySelectorAll('.drag-drop-area');
    dragDropAreas.forEach(area => {
        area.style.gridTemplateColumns = '1fr 1fr';
    });
}

// Initialize content enhancements
document.addEventListener('DOMContentLoaded', function() {
    setupAccessibility();
    optimizePerformance();
    
    // Load saved progress
    const savedProgress = loadProgress();
    if (savedProgress && confirm('Continue from where you left off?')) {
        openTopic(savedProgress.currentTopic);
        currentChunk = savedProgress.currentChunk;
        loadChunk();
        updateNavigationButtons();
    }
}); 