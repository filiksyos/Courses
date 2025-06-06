// Global state
let currentTopic = null;
let currentChunk = 0;
let topics = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load all topic data
    topics = {
        'security': securityData,
        'concurrency': concurrencyData,
        'recovery': recoveryData
    };
    
    // Initialize Mermaid
    mermaid.initialize({ 
        startOnLoad: true,
        theme: 'default',
        themeVariables: {
            primaryColor: '#667eea',
            primaryTextColor: '#333',
            primaryBorderColor: '#667eea',
            lineColor: '#667eea'
        }
    });
    
    // Setup drag and drop for all drag-drop areas
    setupDragAndDrop();
});

// Open a specific topic
function openTopic(topicName) {
    currentTopic = topicName;
    currentChunk = 0;
    
    const topicData = topics[topicName];
    if (!topicData) {
        console.error('Topic not found:', topicName);
        return;
    }
    
    // Hide dashboard and show topic content
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('topicContent').style.display = 'block';
    
    // Update topic header
    document.getElementById('topicTitle').innerHTML = `${topicData.icon} ${topicData.title}`;
    
    // Load first chunk
    loadChunk();
    
    // Update navigation buttons
    updateNavigationButtons();
}

// Go back to dashboard
function goToDashboard() {
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('topicContent').style.display = 'none';
    currentTopic = null;
    currentChunk = 0;
}

// Load current chunk content
function loadChunk() {
    if (!currentTopic) return;
    
    const topicData = topics[currentTopic];
    const chunk = topicData.chunks[currentChunk];
    
    if (!chunk) return;
    
    // Update progress indicator
    document.getElementById('chunkProgress').textContent = 
        `${currentChunk + 1} / ${topicData.chunks.length}`;
    
    // Load chunk content
    document.getElementById('chunkContent').innerHTML = chunk.content;
    
    // Re-initialize Mermaid for new diagrams
    mermaid.init();
    
    // Setup drag and drop for new elements
    setupDragAndDrop();
    
    // Update memory hacks sidebar
    updateMemoryHacks(chunk);
}

// Navigation functions
function nextChunk() {
    if (!currentTopic) return;
    
    const topicData = topics[currentTopic];
    if (currentChunk < topicData.chunks.length - 1) {
        currentChunk++;
        loadChunk();
        updateNavigationButtons();
        
        // Scroll to top
        document.getElementById('chunkContent').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

function previousChunk() {
    if (!currentTopic) return;
    
    if (currentChunk > 0) {
        currentChunk--;
        loadChunk();
        updateNavigationButtons();
        
        // Scroll to top
        document.getElementById('chunkContent').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

function updateNavigationButtons() {
    if (!currentTopic) return;
    
    const topicData = topics[currentTopic];
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Update previous button
    prevBtn.disabled = currentChunk === 0;
    
    // Update next button
    nextBtn.disabled = currentChunk === topicData.chunks.length - 1;
    
    // Update button text for last chunk
    if (currentChunk === topicData.chunks.length - 1) {
        nextBtn.textContent = 'Complete! →';
    } else {
        nextBtn.textContent = 'Next →';
    }
}

// Random challenge function
function randomChallenge() {
    const allTopics = Object.keys(topics);
    const randomTopic = allTopics[Math.floor(Math.random() * allTopics.length)];
    const topicData = topics[randomTopic];
    const randomChunk = Math.floor(Math.random() * topicData.chunks.length);
    
    // Show random quiz from random chunk
    const chunk = topicData.chunks[randomChunk];
    if (chunk.quiz) {
        showRandomQuiz(chunk.quiz, topicData.title, chunk.title);
    }
}

function showRandomQuiz(quiz, topicTitle, chunkTitle) {
    // Create modal for random quiz
    const modal = document.createElement('div');
    modal.className = 'quiz-modal';
    modal.innerHTML = `
        <div class="quiz-modal-content">
            <div class="quiz-modal-header">
                <h3>🎲 Random Challenge</h3>
                <span class="quiz-source">${topicTitle} → ${chunkTitle}</span>
                <button class="close-quiz" onclick="closeRandomQuiz()">×</button>
            </div>
            <div class="quiz-question">
                <h4>${quiz.question}</h4>
                <div class="quiz-options">
                    ${quiz.options.map((option, index) => 
                        `<div class="quiz-option" onclick="checkRandomQuiz(this, ${index === quiz.correct})">${option}</div>`
                    ).join('')}
                </div>
                <div class="quiz-explanation" style="display: none;">
                    <p><strong>Explanation:</strong> ${quiz.explanation}</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .quiz-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
        }
        .quiz-modal-content {
            background: white;
            border-radius: 15px;
            padding: 30px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
        }
        .quiz-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #f0f0f0;
            padding-bottom: 15px;
        }
        .quiz-source {
            color: #667eea;
            font-size: 0.9rem;
        }
        .close-quiz {
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            padding: 0;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            transition: background 0.3s ease;
        }
        .close-quiz:hover {
            background: #f0f0f0;
        }
    `;
    document.head.appendChild(style);
}

function checkRandomQuiz(element, isCorrect) {
    const options = element.parentElement.querySelectorAll('.quiz-option');
    const explanation = element.parentElement.parentElement.querySelector('.quiz-explanation');
    
    options.forEach(option => {
        option.style.pointerEvents = 'none';
        if (option === element) {
            option.className = isCorrect ? 'quiz-option correct' : 'quiz-option incorrect';
        }
    });
    
    if (isCorrect) {
        triggerConfetti();
    }
    
    explanation.style.display = 'block';
}

function closeRandomQuiz() {
    const modal = document.querySelector('.quiz-modal');
    if (modal) {
        modal.remove();
    }
}

// Memory hacks functions
function showMemoryHacks() {
    const sidebar = document.getElementById('memorySidebar');
    sidebar.classList.add('open');
    
    // Load all memory hacks
    loadAllMemoryHacks();
}

function closeMemoryHacks() {
    const sidebar = document.getElementById('memorySidebar');
    sidebar.classList.remove('open');
}

function updateMemoryHacks(chunk) {
    // This function is called when loading chunks to show relevant memory hacks
    if (chunk.memoryHack) {
        // Could highlight relevant memory hacks in sidebar
    }
}

function loadAllMemoryHacks() {
    const memoryContent = document.getElementById('memoryContent');
    let allHacks = '';
    
    Object.keys(topics).forEach(topicKey => {
        const topic = topics[topicKey];
        allHacks += `<h4>${topic.icon} ${topic.title}</h4>`;
        
        topic.chunks.forEach(chunk => {
            if (chunk.memoryHack) {
                allHacks += `
                    <div class="memory-hack-item">
                        <h5>${chunk.title}</h5>
                        <div class="memory-hack">${chunk.memoryHack}</div>
                    </div>
                `;
            }
        });
    });
    
    memoryContent.innerHTML = allHacks;
}

// Drag and drop functionality
function setupDragAndDrop() {
    const dragItems = document.querySelectorAll('.drag-item');
    const dropZones = document.querySelectorAll('.drop-zone');
    
    dragItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
    });
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
        zone.addEventListener('dragenter', handleDragEnter);
        zone.addEventListener('dragleave', handleDragLeave);
    });
}

let draggedElement = null;

function handleDragStart(e) {
    draggedElement = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    draggedElement = null;
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
    this.classList.add('drag-over');
}

function handleDragLeave(e) {
    // Only remove drag-over if we're actually leaving the element
    if (!this.contains(e.relatedTarget)) {
        this.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    
    if (draggedElement) {
        const dragType = draggedElement.getAttribute('data-type');
        const acceptType = this.getAttribute('data-accepts');
        
        if (dragType === acceptType) {
            // Correct match
            this.classList.add('correct');
            this.innerHTML = draggedElement.innerHTML;
            draggedElement.style.opacity = '0.5';
            draggedElement.style.pointerEvents = 'none';
            
            triggerConfetti();
            
            // Check if all items are correctly placed
            setTimeout(checkDragDropCompletion, 500);
        } else {
            // Incorrect match
            this.classList.add('incorrect');
            setTimeout(() => {
                this.classList.remove('incorrect');
            }, 1000);
        }
    }
}

function checkDragDropCompletion() {
    const container = document.querySelector('.drag-drop-area');
    if (!container) return;
    
    const dropZones = container.querySelectorAll('.drop-zone');
    const correctZones = container.querySelectorAll('.drop-zone.correct');
    
    if (dropZones.length === correctZones.length) {
        // All correct! Show completion message
        const message = document.createElement('div');
        message.className = 'completion-message';
        message.innerHTML = '🎉 Perfect! All matches correct!';
        message.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #28a745, #20c997);
            color: white;
            padding: 15px 30px;
            border-radius: 25px;
            font-weight: bold;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: completionPulse 0.6s ease-in-out;
        `;
        
        container.style.position = 'relative';
        container.appendChild(message);
        
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 3000);
    }
}

// Confetti animation
function triggerConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.backgroundColor = getRandomColor();
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 3000);
        }, i * 100);
    }
}

function getRandomColor() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96c93d', '#feca57', '#ff9ff3', '#54a0ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add completion pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes completionPulse {
        0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.1); }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
`;
document.head.appendChild(style); 