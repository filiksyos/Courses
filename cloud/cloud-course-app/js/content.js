// Content management utilities
function formatContent(content) {
    // Ensure proper formatting for content display
    return content.replace(/\n\s+/g, '\n').trim();
}

function createConceptBox(title, description) {
    return `
        <div class="concept-box">
            <h5>${title}</h5>
            <p>${description}</p>
        </div>
    `;
}

function createGridLayout(items, minWidth = '200px') {
    const gridItems = items.map(item => `
        <div style="background: ${item.background || '#f8f9fa'}; padding: 15px; border-radius: 10px; text-align: center;">
            ${item.icon ? `<div style="font-size: 2rem; margin-bottom: 10px;">${item.icon}</div>` : ''}
            <h5>${item.title}</h5>
            <p>${item.description}</p>
            ${item.example ? `<em>${item.example}</em>` : ''}
        </div>
    `).join('');
    
    return `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(${minWidth}, 1fr)); gap: 15px; margin: 20px 0;">
            ${gridItems}
        </div>
    `;
}

function createDragDropQuiz(items, zones) {
    const dragItems = items.map(item => 
        `<div class="drag-item" draggable="true" data-item="${item.id}">${item.content}</div>`
    ).join('');
    
    const dropZones = zones.map(zone => 
        `<div class="drop-zone" data-answer="${zone.answer}">${zone.label}</div>`
    ).join('');
    
    return `
        <div class="drag-drop-area">
            <div class="drag-items">
                <h5>Drag items:</h5>
                ${dragItems}
            </div>
            <div class="drop-zones">
                <h5>Drop here:</h5>
                ${dropZones}
            </div>
        </div>
    `;
}

function createQuizOptions(question, options) {
    const optionElements = options.map((option, index) => 
        `<div class="quiz-option" data-correct="${option.correct || false}">${option.text}</div>`
    ).join('');
    
    return `
        <div class="quiz-immediate">
            <h4>🎮 ${question}</h4>
            <div class="quiz-options">
                ${optionElements}
            </div>
        </div>
    `;
}

// Progress tracking utilities
function calculateProgress(currentChunk, totalChunks) {
    return Math.round((currentChunk / totalChunks) * 100);
}

function updateProgressDisplay(progress) {
    const progressBar = document.getElementById('progressFill');
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
}

// Animation utilities
function animateElement(element, animationClass) {
    element.classList.add(animationClass);
    setTimeout(() => {
        element.classList.remove(animationClass);
    }, 1000);
}

function highlightCorrectAnswer(element) {
    element.classList.add('correct');
    animateElement(element, 'pulse');
}

function highlightIncorrectAnswer(element) {
    element.classList.add('incorrect');
    animateElement(element, 'bounce');
}

// Memory hack utilities
function displayMemoryHack(hack) {
    const container = document.getElementById('memoryHackContent');
    if (container) {
        container.innerHTML = hack;
    }
}

function getAllMemoryHacks() {
    const allHacks = [];
    Object.keys(topics).forEach(topicKey => {
        const topic = topics[topicKey];
        topic.chunks.forEach((chunk, index) => {
            if (chunk.memoryHack) {
                allHacks.push({
                    topic: topic.title,
                    chunkIndex: index + 1,
                    hack: chunk.memoryHack
                });
            }
        });
    });
    return allHacks;
}

// Content validation utilities
function validateChunkContent(chunk) {
    const required = ['content'];
    const optional = ['memoryHack', 'quiz'];
    
    for (let field of required) {
        if (!chunk[field]) {
            console.warn(`Missing required field: ${field}`);
            return false;
        }
    }
    return true;
}

function sanitizeContent(content) {
    // Basic content sanitization
    return content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}

// Content search utilities
function searchContent(query) {
    const results = [];
    Object.keys(topics).forEach(topicKey => {
        const topic = topics[topicKey];
        topic.chunks.forEach((chunk, index) => {
            if (chunk.content.toLowerCase().includes(query.toLowerCase()) ||
                (chunk.memoryHack && chunk.memoryHack.toLowerCase().includes(query.toLowerCase()))) {
                results.push({
                    topic: topicKey,
                    chunkIndex: index,
                    title: topic.title,
                    preview: chunk.content.substring(0, 100) + '...'
                });
            }
        });
    });
    return results;
} 