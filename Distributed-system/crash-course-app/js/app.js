// Global state
let currentTopic = null;
let currentChunk = 0;
let topics = {};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Load topic data
    topics = {
        naming: namingData,
        synchronization: synchronizationData || null,
        consistency: consistencyData || null
    };
    
    // Initialize Mermaid
    mermaid.initialize({ 
        startOnLoad: true,
        theme: 'default',
        themeVariables: {
            primaryColor: '#007bff',
            primaryTextColor: '#fff',
            primaryBorderColor: '#0056b3',
            lineColor: '#666',
            sectionBkgColor: '#f8f9fa'
        }
    });
    
    // Show dashboard initially
    showDashboard();
    
    // Setup drag and drop event listeners
    setupDragAndDrop();
});

// Navigation functions
function openTopic(topicName) {
    if (!topics[topicName]) {
        alert(`${topicName} content is coming soon! 🚧`);
        return;
    }
    
    currentTopic = topicName;
    currentChunk = 0;
    
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('contentArea').style.display = 'block';
    
    loadChunk();
}

function backToDashboard() {
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('contentArea').style.display = 'none';
    currentTopic = null;
    currentChunk = 0;
}

function nextChunk() {
    if (currentTopic && currentChunk < topics[currentTopic].chunks.length - 1) {
        currentChunk++;
        loadChunk();
        
        // Add success animation
        document.getElementById('contentBody').classList.add('success-effect');
        setTimeout(() => {
            document.getElementById('contentBody').classList.remove('success-effect');
        }, 600);
    }
}

function prevChunk() {
    if (currentTopic && currentChunk > 0) {
        currentChunk--;
        loadChunk();
    }
}

function loadChunk() {
    if (!currentTopic || !topics[currentTopic]) return;
    
    const topic = topics[currentTopic];
    const chunk = topic.chunks[currentChunk];
    
    // Update navigation
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progress = document.getElementById('chunkProgress');
    
    prevBtn.disabled = currentChunk === 0;
    nextBtn.disabled = currentChunk === topic.chunks.length - 1;
    progress.textContent = `${currentChunk + 1} / ${topic.chunks.length}`;
    
    // Load content
    document.getElementById('contentBody').innerHTML = `
        <h2>${chunk.title}</h2>
        ${chunk.content}
    `;
    
    // Load memory hack
    document.getElementById('memoryTip').innerHTML = chunk.memoryHack;
    
    // Re-initialize Mermaid diagrams
    mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    
    // Load quiz
    if (chunk.quiz) {
        loadQuiz(chunk.quiz);
    } else {
        document.getElementById('quizSection').style.display = 'none';
    }
    
    // Setup any interactive elements for this chunk
    setupChunkInteractivity();
}

function loadQuiz(quiz) {
    const quizSection = document.getElementById('quizSection');
    quizSection.style.display = 'block';
    
    quizSection.innerHTML = `
        <div class="quiz-question">${quiz.question}</div>
        <div class="quiz-options">
            ${quiz.options.map((option, index) => 
                `<div class="quiz-option" onclick="checkAnswer(${index}, ${quiz.correct}, '${quiz.explanation}')">${option}</div>`
            ).join('')}
        </div>
        <div id="quizFeedback" style="margin-top: 15px; font-weight: bold;"></div>
    `;
}

function checkAnswer(selected, correct, explanation) {
    const options = document.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('quizFeedback');
    
    // Disable all options
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    if (selected === correct) {
        options[selected].classList.add('correct');
        feedback.innerHTML = `🎉 Correct! ${explanation}`;
        feedback.style.color = '#28a745';
        
        // Confetti effect
        createConfetti();
    } else {
        options[selected].classList.add('incorrect');
        options[correct].classList.add('correct');
        feedback.innerHTML = `❌ Not quite! ${explanation}`;
        feedback.style.color = '#dc3545';
    }
}

// Drag and drop functionality
function setupDragAndDrop() {
    document.addEventListener('dragstart', function(e) {
        if (e.target.classList.contains('draggable-item')) {
            e.target.classList.add('dragging');
            e.dataTransfer.setData('text/plain', e.target.outerHTML);
            e.dataTransfer.effectAllowed = 'move';
        }
    });
    
    document.addEventListener('dragend', function(e) {
        if (e.target.classList.contains('draggable-item')) {
            e.target.classList.remove('dragging');
        }
    });
    
    document.addEventListener('dragover', function(e) {
        if (e.target.classList.contains('drop-zone')) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            e.target.style.background = '#e3f2fd';
        }
    });
    
    document.addEventListener('dragleave', function(e) {
        if (e.target.classList.contains('drop-zone')) {
            e.target.style.background = '';
        }
    });
    
    document.addEventListener('drop', function(e) {
        if (e.target.classList.contains('drop-zone')) {
            e.preventDefault();
            e.target.style.background = '';
            
            const draggedHTML = e.dataTransfer.getData('text/plain');
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = draggedHTML;
            const draggedElement = tempDiv.firstChild;
            
            // Check if drop is correct based on data attributes
            const isCorrect = validateDrop(draggedElement, e.target);
            
            if (isCorrect) {
                e.target.appendChild(draggedElement);
                draggedElement.style.background = '#d4edda';
                draggedElement.style.border = '2px solid #28a745';
                
                // Remove the original element
                const original = document.querySelector('.dragging');
                if (original) original.remove();
                
                // Success feedback
                showDropFeedback(true);
            } else {
                showDropFeedback(false);
            }
        }
    });
}

function validateDrop(element, dropZone) {
    const elementType = element.dataset.type || element.dataset.step || element.dataset.layer || element.dataset.order || element.dataset.timestamp;
    const zoneId = dropZone.id;
    
    // Define correct mappings for all topics
    const validDrops = {
        // Naming chapter
        'nameDropZone': 'name',
        'identifierDropZone': 'identifier', 
        'addressDropZone': 'address',
        'hardLinks': 'hard',
        'symbolicLinks': 'symbolic',
        'globalLayer': 'global',
        'adminLayer': 'admin',
        'mgmtLayer': 'mgmt',
        
        // Synchronization chapter
        'cristianZone': 'cristian',
        'berkeleyZone': 'berkeley',
        'ntpZone': 'ntp',
        'bullyAlgo': 'bully',
        'ringAlgo': 'ring',
        
        // Consistency chapter
        'benefitZone': 'benefit',
        'problemZone': 'problem',
        'sequentialZone': 'sequential',
        'causalZone': 'causal',
        'entryZone': 'entry',
        'monotonicReadZone': 'monotonic-read',
        'readWritesZone': 'read-writes',
        'monotonicWriteZone': 'monotonic-write',
        'writesReadsZone': 'writes-reads',
        'permanentZone': 'permanent',
        'serverInitZone': 'server-init',
        'clientInitZone': 'client-init',
        'primaryZone': 'primary',
        'quorumZone': 'quorum',
        'invalidateZone': 'invalidate',
        'updateZone': 'update'
    };
    
    return validDrops[zoneId] === elementType;
}

function showDropFeedback(correct) {
    const feedback = document.createElement('div');
    feedback.style.position = 'fixed';
    feedback.style.top = '50%';
    feedback.style.left = '50%';
    feedback.style.transform = 'translate(-50%, -50%)';
    feedback.style.padding = '20px';
    feedback.style.borderRadius = '10px';
    feedback.style.fontWeight = 'bold';
    feedback.style.fontSize = '1.2em';
    feedback.style.zIndex = '1000';
    
    if (correct) {
        feedback.textContent = '🎉 Perfect match!';
        feedback.style.background = '#d4edda';
        feedback.style.color = '#28a745';
    } else {
        feedback.textContent = '❌ Try again!';
        feedback.style.background = '#f8d7da';
        feedback.style.color = '#dc3545';
    }
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        document.body.removeChild(feedback);
    }, 1500);
}

// Random challenge function
function randomChallenge() {
    const allChallenges = [];
    
    // Collect all quizzes from all topics
    for (const topicName in topics) {
        if (topics[topicName]) {
            topics[topicName].chunks.forEach(chunk => {
                if (chunk.quiz) {
                    allChallenges.push({
                        topic: topicName,
                        quiz: chunk.quiz,
                        title: chunk.title
                    });
                }
            });
        }
    }
    
    if (allChallenges.length === 0) {
        alert('No challenges available yet! 🚧');
        return;
    }
    
    const randomChallenge = allChallenges[Math.floor(Math.random() * allChallenges.length)];
    showChallengeModal(randomChallenge);
}

function showChallengeModal(challenge) {
    const modal = document.getElementById('challengeModal');
    const content = document.getElementById('challengeContent');
    
    content.innerHTML = `
        <h4>From: ${challenge.title}</h4>
        <div class="quiz-question">${challenge.quiz.question}</div>
        <div class="quiz-options">
            ${challenge.quiz.options.map((option, index) => 
                `<div class="quiz-option" onclick="checkChallengeAnswer(${index}, ${challenge.quiz.correct}, '${challenge.quiz.explanation}')">${option}</div>`
            ).join('')}
        </div>
        <div id="challengeFeedback" style="margin-top: 15px; font-weight: bold;"></div>
    `;
    
    modal.style.display = 'flex';
}

function checkChallengeAnswer(selected, correct, explanation) {
    const options = document.querySelectorAll('#challengeContent .quiz-option');
    const feedback = document.getElementById('challengeFeedback');
    
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    if (selected === correct) {
        options[selected].classList.add('correct');
        feedback.innerHTML = `🎉 Awesome! ${explanation}`;
        feedback.style.color = '#28a745';
        createConfetti();
    } else {
        options[selected].classList.add('incorrect');
        options[correct].classList.add('correct');
        feedback.innerHTML = `❌ Not quite! ${explanation}`;
        feedback.style.color = '#dc3545';
    }
}

function closeModal() {
    document.getElementById('challengeModal').style.display = 'none';
}

function showMemoryHacks() {
    const modal = document.getElementById('challengeModal');
    const content = document.getElementById('challengeContent');
    
    let pegWordsHTML = '<h4>🧠 Peg Word Memory Associations</h4>';
    
    // Combine peg words from all topics
    const allPegWords = {
        ...namingPegWords,
        ...(synchronizationPegWords || {}),
        ...(consistencyPegWords || {})
    };
    
    for (const [concept, association] of Object.entries(allPegWords)) {
        pegWordsHTML += `<div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 5px;">
            <strong>${concept}:</strong> ${association}
        </div>`;
    }
    
    content.innerHTML = pegWordsHTML;
    modal.style.display = 'flex';
}

// Chunk-specific interactivity
function setupChunkInteractivity() {
    // TTL game for caching chunk
    window.checkTTL = function(element, isCorrect) {
        const options = document.querySelectorAll('.quiz-immediate .quiz-option');
        options.forEach(opt => opt.style.pointerEvents = 'none');
        
        if (isCorrect) {
            element.classList.add('correct');
            element.innerHTML += ' ✅ Correct! 300 seconds = 5 minutes';
        } else {
            element.classList.add('incorrect');
        }
    };

    // Synchronization chapter games
    window.checkMutex = function(element, isCorrect) {
        const options = document.querySelectorAll('.quiz-immediate .quiz-option');
        options.forEach(opt => opt.style.pointerEvents = 'none');
        
        if (isCorrect) {
            element.classList.add('correct');
            element.innerHTML += ' ✅ Right! Token ring scales much better!';
        } else {
            element.classList.add('incorrect');
        }
    };

    window.checkOrder = function(element, isCorrect) {
        const options = document.querySelectorAll('.quiz-immediate .quiz-option');
        options.forEach(opt => opt.style.pointerEvents = 'none');
        
        if (isCorrect) {
            element.classList.add('correct');
            element.innerHTML += ' ✅ Perfect! Timestamp order is crucial!';
        } else {
            element.classList.add('incorrect');
        }
    };

    // Consistency chapter games  
    window.checkReplication = function(element, isCorrect) {
        const options = document.querySelectorAll('.quiz-immediate .quiz-option');
        options.forEach(opt => opt.style.pointerEvents = 'none');
        
        if (isCorrect) {
            element.classList.add('correct');
            element.innerHTML += ' ✅ Exactly! Consistency lag is the main challenge!';
        } else {
            element.classList.add('incorrect');
        }
    };

    window.checkQuorum = function(element, isCorrect) {
        const options = document.querySelectorAll('.quiz-immediate .quiz-option');
        options.forEach(opt => opt.style.pointerEvents = 'none');
        
        if (isCorrect) {
            element.classList.add('correct');
            element.innerHTML += ' ✅ Right! Majority = 3 out of 5!';
        } else {
            element.classList.add('incorrect');
        }
    };
    
    // Tree building functions (placeholder)
    window.addNode = function() {
        alert('🏗️ Interactive tree builder coming soon!');
    };
    
    window.addFile = function() {
        alert('📄 File addition feature coming soon!');
    };
    
    window.resetTree = function() {
        // Re-render the mermaid diagram
        mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    };
}

// Visual effects
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#feca57', '#ff9ff3'];
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        
        document.body.appendChild(confetti);
        
        // Animate confetti falling
        const animation = confetti.animate([
            { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 50}px) rotate(360deg)`, opacity: 0 }
        ], {
            duration: 2000 + Math.random() * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        animation.onfinish = () => {
            document.body.removeChild(confetti);
        };
    }
}

function showDashboard() {
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('contentArea').style.display = 'none';
} 