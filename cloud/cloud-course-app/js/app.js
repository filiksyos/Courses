// Global state management
let currentTopic = null;
let currentChunk = 0;
let topics = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load all topic data
    topics = {
        services: cloudServicesData,
        security: cloudSecurityData,
        iot: cloudIoTData
    };
    
    // Initialize Mermaid
    mermaid.initialize({ startOnLoad: true });
    
    console.log('Cloud Computing Explorer initialized!');
});

// Navigation functions
function openTopic(topicName) {
    currentTopic = topicName;
    currentChunk = 0;
    
    // Hide dashboard, show topic content
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('topicContent').style.display = 'block';
    
    // Update topic title
    const titles = {
        services: '🏗️ Chapter 3: Cloud Services',
        security: '🔒 Chapter 4: Cloud Security',
        iot: '🌐 Chapter 5: Cloud in IoT'
    };
    document.getElementById('topicTitle').textContent = titles[topicName];
    
    // Load first chunk
    loadChunk();
    updateProgress();
    updateNavigation();
}

function goBack() {
    // Show dashboard, hide topic content
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('topicContent').style.display = 'none';
    currentTopic = null;
    currentChunk = 0;
}

function nextChunk() {
    if (currentTopic && currentChunk < topics[currentTopic].chunks.length - 1) {
        currentChunk++;
        loadChunk();
        updateProgress();
        updateNavigation();
        scrollToTop();
    }
}

function previousChunk() {
    if (currentTopic && currentChunk > 0) {
        currentChunk--;
        loadChunk();
        updateProgress();
        updateNavigation();
        scrollToTop();
    }
}

function loadChunk() {
    if (!currentTopic || !topics[currentTopic]) return;
    
    const chunk = topics[currentTopic].chunks[currentChunk];
    if (!chunk) return;
    
    // Load main content
    document.getElementById('mainContent').innerHTML = chunk.content;
    
    // Load memory hack
    document.getElementById('memoryHackContent').innerHTML = chunk.memoryHack || 
        '<p>🧠 Keep learning! Memory hacks help information stick better.</p>';
    
    // Initialize any interactive elements
    initializeInteractiveElements();
    
    // Re-initialize Mermaid for any new diagrams
    mermaid.init(undefined, document.querySelectorAll('.mermaid'));
}

function updateProgress() {
    if (!currentTopic) return;
    
    const totalChunks = topics[currentTopic].chunks.length;
    const progress = ((currentChunk + 1) / totalChunks) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

function updateNavigation() {
    if (!currentTopic) return;
    
    const totalChunks = topics[currentTopic].chunks.length;
    
    // Update counter
    document.getElementById('chunkCounter').textContent = `${currentChunk + 1} / ${totalChunks}`;
    
    // Update button states
    document.getElementById('prevBtn').disabled = currentChunk === 0;
    document.getElementById('nextBtn').disabled = currentChunk === totalChunks - 1;
}

function scrollToTop() {
    document.getElementById('topicContent').scrollIntoView({ behavior: 'smooth' });
}

// Interactive elements initialization
function initializeInteractiveElements() {
    // Initialize drag and drop
    initializeDragAndDrop();
    
    // Initialize quiz options
    initializeQuizOptions();
}

function initializeDragAndDrop() {
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

function handleDragStart(e) {
    this.classList.add('dragging');
    e.dataTransfer.setData('text/plain', this.dataset.item);
    e.dataTransfer.setData('text/html', this.outerHTML);
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDragEnter(e) {
    e.preventDefault();
    this.classList.add('drag-over');
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    
    const draggedItem = e.dataTransfer.getData('text/plain');
    const correctAnswer = this.dataset.answer;
    
    if (draggedItem === correctAnswer) {
        this.classList.add('filled');
        this.innerHTML = `<span style="color: #28a745; font-weight: bold;">✅ ${draggedItem}</span>`;
        showConfetti();
        
        // Remove the dragged item from the source
        const draggedElement = document.querySelector(`[data-item="${draggedItem}"]`);
        if (draggedElement) {
            draggedElement.style.display = 'none';
        }
    } else {
        // Show incorrect feedback
        this.style.background = '#f8d7da';
        setTimeout(() => {
            this.style.background = '#f5f5f5';
        }, 1000);
    }
}

function initializeQuizOptions() {
    const quizOptions = document.querySelectorAll('.quiz-option');
    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove previous selections
            quizOptions.forEach(opt => {
                opt.classList.remove('correct', 'incorrect');
            });
            
            // Check if correct
            const isCorrect = this.dataset.correct === 'true';
            this.classList.add(isCorrect ? 'correct' : 'incorrect');
            
            if (isCorrect) {
                showConfetti();
            }
            
            // Disable further clicks
            quizOptions.forEach(opt => {
                opt.style.pointerEvents = 'none';
            });
            
            // Re-enable after 2 seconds
            setTimeout(() => {
                quizOptions.forEach(opt => {
                    opt.style.pointerEvents = 'auto';
                });
            }, 2000);
        });
    });
}

// Modal functions
function showMemoryHacks() {
    const modal = document.getElementById('memoryModal');
    const content = document.getElementById('memoryModalContent');
    
    let allMemoryHacks = '';
    
    Object.keys(topics).forEach(topicKey => {
        const topic = topics[topicKey];
        allMemoryHacks += `<h4>${topic.title}</h4>`;
        
        topic.chunks.forEach((chunk, index) => {
            if (chunk.memoryHack) {
                allMemoryHacks += `<div class="memory-technique">
                    <strong>Chunk ${index + 1}:</strong><br>
                    ${chunk.memoryHack}
                </div>`;
            }
        });
        allMemoryHacks += '<hr>';
    });
    
    content.innerHTML = allMemoryHacks;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('memoryModal').style.display = 'none';
}

function closeQuizModal() {
    document.getElementById('quizModal').style.display = 'none';
}

// Random challenge function
function randomChallenge() {
    const allTopics = Object.keys(topics);
    const randomTopic = allTopics[Math.floor(Math.random() * allTopics.length)];
    const randomChunkIndex = Math.floor(Math.random() * topics[randomTopic].chunks.length);
    const randomChunk = topics[randomTopic].chunks[randomChunkIndex];
    
    if (randomChunk.quiz) {
        showQuizModal(randomChunk.quiz, `Random Challenge: ${topics[randomTopic].title}`);
    } else {
        // If no quiz, show a memory hack instead
        showQuizModal({
            question: "Memory Hack Challenge",
            explanation: randomChunk.memoryHack || "Keep practicing to improve your memory!",
            isMemoryHack: true
        }, `Memory Hack: ${topics[randomTopic].title}`);
    }
}

function showQuizModal(quiz, title) {
    const modal = document.getElementById('quizModal');
    const titleElement = document.getElementById('quizTitle');
    const content = document.getElementById('quizModalContent');
    
    titleElement.textContent = title;
    
    if (quiz.isMemoryHack) {
        content.innerHTML = `
            <div class="memory-technique">
                <h4>💡 ${quiz.question}</h4>
                <p>${quiz.explanation}</p>
            </div>
        `;
    } else {
        let optionsHTML = '';
        quiz.options.forEach((option, index) => {
            optionsHTML += `
                <div class="quiz-option" onclick="selectQuizAnswer(${index}, ${quiz.correct})" 
                     data-correct="${index === quiz.correct}">
                    ${option}
                </div>
            `;
        });
        
        content.innerHTML = `
            <h4>${quiz.question}</h4>
            <div class="quiz-options" style="margin-top: 15px;">
                ${optionsHTML}
            </div>
            <div id="quizExplanation" style="display: none; margin-top: 15px; padding: 15px; 
                 background: #e3f2fd; border-radius: 8px;">
                <strong>Explanation:</strong> ${quiz.explanation}
            </div>
        `;
    }
    
    modal.style.display = 'block';
}

function selectQuizAnswer(selectedIndex, correctIndex) {
    const options = document.querySelectorAll('#quizModal .quiz-option');
    const explanation = document.getElementById('quizExplanation');
    
    options.forEach((option, index) => {
        option.style.pointerEvents = 'none';
        if (index === correctIndex) {
            option.classList.add('correct');
        } else if (index === selectedIndex) {
            option.classList.add('incorrect');
        }
    });
    
    if (selectedIndex === correctIndex) {
        showConfetti();
    }
    
    explanation.style.display = 'block';
}

// Confetti animation
function showConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    
    // Create confetti pieces
    for (let i = 0; i < 100; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: -10,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 6 + 4
        });
    }
    
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confettiPieces.forEach((piece, index) => {
            piece.x += piece.vx;
            piece.y += piece.vy;
            piece.vy += 0.1; // gravity
            
            ctx.fillStyle = piece.color;
            ctx.beginPath();
            ctx.arc(piece.x, piece.y, piece.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Remove pieces that fall off screen
            if (piece.y > canvas.height + 10) {
                confettiPieces.splice(index, 1);
            }
        });
        
        if (confettiPieces.length > 0) {
            requestAnimationFrame(animateConfetti);
        }
    }
    
    animateConfetti();
}

// Click outside modal to close
window.addEventListener('click', function(event) {
    const memoryModal = document.getElementById('memoryModal');
    const quizModal = document.getElementById('quizModal');
    
    if (event.target === memoryModal) {
        closeModal();
    }
    if (event.target === quizModal) {
        closeQuizModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (currentTopic) {
        if (event.key === 'ArrowRight' || event.key === ' ') {
            nextChunk();
        } else if (event.key === 'ArrowLeft') {
            previousChunk();
        } else if (event.key === 'Escape') {
            goBack();
        }
    }
}); 