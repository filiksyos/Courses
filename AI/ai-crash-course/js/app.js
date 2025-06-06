// Global state
let currentTopic = null;
let currentChunk = 0;
let topics = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    mermaid.initialize({ 
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose'
    });
    
    // Load all topic data
    if (typeof problemSolvingData !== 'undefined') {
        topics['problem-solving'] = problemSolvingData;
    }
    if (typeof uninformedSearchData !== 'undefined') {
        topics['uninformed-search'] = uninformedSearchData;
    }
    if (typeof machineLearningData !== 'undefined') {
        topics['machine-learning'] = machineLearningData;
    }
    
    console.log('AI Explorer initialized with topics:', Object.keys(topics));
});

// Open a specific topic
function openTopic(topicId) {
    if (!topics[topicId]) {
        console.error('Topic not found:', topicId);
        return;
    }
    
    currentTopic = topicId;
    currentChunk = 0;
    
    // Hide dashboard and show topic content
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('topicContent').style.display = 'block';
    
    // Set topic title
    const titles = {
        'problem-solving': '🧩 Problem Solving',
        'uninformed-search': '🔍 Uninformed Search',
        'machine-learning': '🧠 Machine Learning'
    };
    
    document.getElementById('topicTitle').textContent = titles[topicId] || topicId;
    
    // Load first chunk
    loadChunk();
    updateProgress();
    updateNavigation();
}

// Go back to dashboard
function goBack() {
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('topicContent').style.display = 'none';
    currentTopic = null;
    currentChunk = 0;
}

// Load current chunk content
function loadChunk() {
    if (!currentTopic || !topics[currentTopic]) return;
    
    const topic = topics[currentTopic];
    const chunk = topic.chunks[currentChunk];
    
    if (!chunk) return;
    
    // Load main content
    document.getElementById('mainContent').innerHTML = chunk.content;
    
    // Load memory hack
    document.getElementById('currentMemoryHack').innerHTML = chunk.memoryHack || 'No memory hack for this chunk.';
    
    // Re-initialize Mermaid for new diagrams
    mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    
    // Add fade-in animation
    document.getElementById('mainContent').classList.add('fade-in');
    
    // Set up any interactive elements
    setupInteractiveElements();
}

// Setup interactive elements like drag-drop and quizzes
function setupInteractiveElements() {
    // Setup drag and drop
    setupDragAndDrop();
    
    // Setup quizzes
    setupQuizzes();
}

// Setup drag and drop functionality
function setupDragAndDrop() {
    const draggableItems = document.querySelectorAll('.draggable-item');
    const dropZones = document.querySelectorAll('.drop-zone');
    
    draggableItems.forEach(item => {
        item.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', this.textContent.trim());
            e.dataTransfer.setData('text/id', this.id || this.textContent.trim());
            this.classList.add('dragging');
        });
        
        item.addEventListener('dragend', function() {
            this.classList.remove('dragging');
        });
    });
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.style.backgroundColor = '#e3f2fd';
        });
        
        zone.addEventListener('dragleave', function() {
            this.style.backgroundColor = '';
        });
        
        zone.addEventListener('drop', function(e) {
            e.preventDefault();
            this.style.backgroundColor = '';
            
            const draggedText = e.dataTransfer.getData('text/plain');
            const correctAnswers = this.dataset.correct ? this.dataset.correct.split(',') : [];
            
            if (correctAnswers.some(answer => draggedText.toLowerCase().includes(answer.toLowerCase()))) {
                this.classList.add('correct');
                this.innerHTML = `<strong>✅ Correct!</strong><br>${draggedText}`;
                this.style.pointerEvents = 'none';
                
                // Add celebration effect
                celebrateCorrectAnswer();
            } else {
                this.classList.add('incorrect');
                this.innerHTML = `<strong>❌ Try again!</strong><br>That's not quite right.`;
                setTimeout(() => {
                    this.classList.remove('incorrect');
                    this.innerHTML = this.dataset.placeholder || 'Drop here';
                }, 2000);
            }
        });
    });
}

// Setup quiz functionality
function setupQuizzes() {
    // Handle immediate quiz questions
    const quizOptions = document.querySelectorAll('.quiz-option');
    quizOptions.forEach((option, index) => {
        option.addEventListener('click', function() {
            const isCorrect = this.dataset.correct === 'true';
            
            // Clear previous states
            quizOptions.forEach(opt => {
                opt.classList.remove('correct', 'incorrect');
            });
            
            if (isCorrect) {
                this.classList.add('correct');
                celebrateCorrectAnswer();
            } else {
                this.classList.add('incorrect');
                // Show correct answer after delay
                setTimeout(() => {
                    quizOptions.forEach(opt => {
                        if (opt.dataset.correct === 'true') {
                            opt.classList.add('correct');
                        }
                    });
                }, 1000);
            }
        });
    });
}

// Celebration effect for correct answers
function celebrateCorrectAnswer() {
    // Create confetti effect
    createConfetti();
    
    // Add bounce animation to correct element
    const correctElements = document.querySelectorAll('.correct');
    correctElements.forEach(el => {
        el.classList.add('bounce');
        setTimeout(() => el.classList.remove('bounce'), 600);
    });
}

// Create confetti effect
function createConfetti() {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        confetti.style.borderRadius = '50%';
        
        document.body.appendChild(confetti);
        
        // Animate confetti falling
        const animation = confetti.animate([
            { transform: 'translateY(-10px) rotate(0deg)', opacity: 1 },
            { transform: `translateY(100vh) rotate(720deg)`, opacity: 0 }
        ], {
            duration: 3000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        animation.addEventListener('finish', () => {
            confetti.remove();
        });
    }
}

// Navigation functions
function nextChunk() {
    if (!currentTopic || !topics[currentTopic]) return;
    
    const topic = topics[currentTopic];
    if (currentChunk < topic.chunks.length - 1) {
        currentChunk++;
        loadChunk();
        updateProgress();
        updateNavigation();
    }
}

function previousChunk() {
    if (currentChunk > 0) {
        currentChunk--;
        loadChunk();
        updateProgress();
        updateNavigation();
    }
}

// Update progress bar
function updateProgress() {
    if (!currentTopic || !topics[currentTopic]) return;
    
    const topic = topics[currentTopic];
    const progress = ((currentChunk + 1) / topic.chunks.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

// Update navigation buttons
function updateNavigation() {
    if (!currentTopic || !topics[currentTopic]) return;
    
    const topic = topics[currentTopic];
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicator = document.getElementById('chunkIndicator');
    
    prevBtn.disabled = currentChunk === 0;
    nextBtn.disabled = currentChunk === topic.chunks.length - 1;
    
    indicator.textContent = `${currentChunk + 1} / ${topic.chunks.length}`;
}

// Random challenge function
function randomChallenge() {
    const allTopics = Object.keys(topics);
    if (allTopics.length === 0) return;
    
    const randomTopic = allTopics[Math.floor(Math.random() * allTopics.length)];
    const topic = topics[randomTopic];
    
    if (!topic.chunks || topic.chunks.length === 0) return;
    
    const randomChunk = Math.floor(Math.random() * topic.chunks.length);
    
    // Open the random topic and chunk
    openTopic(randomTopic);
    currentChunk = randomChunk;
    loadChunk();
    updateProgress();
    updateNavigation();
    
    // Show notification
    showNotification(`🎲 Random Challenge: ${topic.chunks[randomChunk].title}`);
}

// Show memory hacks modal
function showMemoryHacks() {
    document.getElementById('memoryHacksModal').style.display = 'block';
}

// Close memory hacks modal
function closeMemoryHacks() {
    document.getElementById('memoryHacksModal').style.display = 'none';
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.background = 'linear-gradient(45deg, #FF6B6B, #4ECDC4)';
    notification.style.color = 'white';
    notification.style.padding = '1rem 2rem';
    notification.style.borderRadius = '10px';
    notification.style.zIndex = '10000';
    notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    notification.style.transform = 'translateX(100%)';
    notification.style.transition = 'transform 0.3s ease';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Handle modal clicks
window.onclick = function(event) {
    const modal = document.getElementById('memoryHacksModal');
    if (event.target === modal) {
        closeMemoryHacks();
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (currentTopic) {
        if (e.key === 'ArrowLeft' && currentChunk > 0) {
            previousChunk();
        } else if (e.key === 'ArrowRight' && currentChunk < topics[currentTopic].chunks.length - 1) {
            nextChunk();
        } else if (e.key === 'Escape') {
            goBack();
        }
    }
}); 