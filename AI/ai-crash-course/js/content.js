// Content utility functions

// Function to create quiz option elements
function createQuizOption(text, isCorrect = false) {
    return `<div class="quiz-option" data-correct="${isCorrect}">${text}</div>`;
}

// Function to create drag and drop areas
function createDragDropArea(items, zones) {
    let html = '<div class="drag-drop-area">';
    
    // Create draggable items
    html += '<div class="draggable-container">';
    html += '<h4>Drag these items:</h4>';
    items.forEach((item, index) => {
        html += `<div class="draggable-item" draggable="true" id="item-${index}">${item}</div>`;
    });
    html += '</div>';
    
    // Create drop zones
    html += '<div class="drop-zones-container">';
    zones.forEach((zone, index) => {
        html += `<div class="drop-zone" data-correct="${zone.correct}" data-placeholder="${zone.placeholder}">
                    ${zone.placeholder}
                 </div>`;
    });
    html += '</div>';
    
    html += '</div>';
    return html;
}

// Function to create immediate quiz
function createImmediateQuiz(question, options, correctIndex, explanation = '') {
    let html = `<div class="quiz-immediate">
                    <h4>🎯 Quick Check</h4>
                    <p>${question}</p>
                    <div class="quiz-options">`;
    
    options.forEach((option, index) => {
        html += createQuizOption(option, index === correctIndex);
    });
    
    html += '</div>';
    
    if (explanation) {
        html += `<div class="quiz-explanation" style="display: none; margin-top: 1rem; padding: 1rem; background: #e7f3ff; border-radius: 8px;">
                    <strong>💡 Explanation:</strong> ${explanation}
                 </div>`;
    }
    
    html += '</div>';
    return html;
}

// Function to create Mermaid diagrams
function createMermaidDiagram(diagramCode, title = '') {
    let html = '';
    if (title) {
        html += `<h4>${title}</h4>`;
    }
    html += `<div class="mermaid">${diagramCode}</div>`;
    return html;
}

// Function to create interactive problem-solving steps
function createProblemSteps(steps) {
    let html = '<div class="problem-steps">';
    
    steps.forEach((step, index) => {
        html += `<div class="step-card" data-step="${index + 1}">
                    <div class="step-number">${index + 1}</div>
                    <div class="step-content">
                        <h4>${step.title}</h4>
                        <p>${step.description}</p>
                        ${step.example ? `<div class="step-example"><strong>Example:</strong> ${step.example}</div>` : ''}
                    </div>
                 </div>`;
    });
    
    html += '</div>';
    return html;
}

// Function to create comparison table
function createComparisonTable(title, headers, rows) {
    let html = `<div class="comparison-table">
                    <h4>${title}</h4>
                    <table>
                        <thead>
                            <tr>`;
    
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    
    html += `       </tr>
                        </thead>
                        <tbody>`;
    
    rows.forEach(row => {
        html += '<tr>';
        row.forEach(cell => {
            html += `<td>${cell}</td>`;
        });
        html += '</tr>';
    });
    
    html += `       </tbody>
                    </table>
                 </div>`;
    
    return html;
}

// Function to create interactive algorithm visualization
function createAlgorithmVisualization(algorithmName, steps) {
    let html = `<div class="algorithm-viz">
                    <h4>🔍 ${algorithmName} Visualization</h4>
                    <div class="viz-controls">
                        <button onclick="stepAlgorithm(-1)">⏪ Previous</button>
                        <button onclick="stepAlgorithm(1)">Next ⏩</button>
                        <button onclick="resetAlgorithm()">🔄 Reset</button>
                    </div>
                    <div class="viz-content" id="algorithmViz">`;
    
    steps.forEach((step, index) => {
        html += `<div class="viz-step" data-step="${index}" style="display: ${index === 0 ? 'block' : 'none'}">
                    <h5>Step ${index + 1}: ${step.title}</h5>
                    <p>${step.description}</p>
                    ${step.visualization ? `<div class="step-visualization">${step.visualization}</div>` : ''}
                 </div>`;
    });
    
    html += `   </div>
             </div>`;
    
    return html;
}

// Algorithm visualization control functions
let currentAlgorithmStep = 0;
let algorithmSteps = [];

function stepAlgorithm(direction) {
    const steps = document.querySelectorAll('.viz-step');
    if (steps.length === 0) return;
    
    // Hide current step
    steps[currentAlgorithmStep].style.display = 'none';
    
    // Update step index
    currentAlgorithmStep += direction;
    if (currentAlgorithmStep < 0) currentAlgorithmStep = 0;
    if (currentAlgorithmStep >= steps.length) currentAlgorithmStep = steps.length - 1;
    
    // Show new step
    steps[currentAlgorithmStep].style.display = 'block';
    
    // Add animation
    steps[currentAlgorithmStep].classList.add('fade-in');
    setTimeout(() => steps[currentAlgorithmStep].classList.remove('fade-in'), 500);
}

function resetAlgorithm() {
    const steps = document.querySelectorAll('.viz-step');
    steps.forEach(step => step.style.display = 'none');
    
    currentAlgorithmStep = 0;
    if (steps.length > 0) {
        steps[0].style.display = 'block';
    }
}

// Function to create knowledge check
function createKnowledgeCheck(scenario, question, options, correctIndex, feedback) {
    return `
        <div class="knowledge-check">
            <div class="scenario-box">
                <h4>📋 Scenario</h4>
                <p>${scenario}</p>
            </div>
            
            ${createImmediateQuiz(question, options, correctIndex, feedback)}
        </div>
    `;
}

// Function to create concept map
function createConceptMap(concepts) {
    let html = `<div class="concept-map">
                    <h4>🗺️ Concept Map</h4>
                    <div class="concept-nodes">`;
    
    concepts.forEach((concept, index) => {
        html += `<div class="concept-node" data-concept="${index}">
                    <div class="node-icon">${concept.icon}</div>
                    <div class="node-title">${concept.title}</div>
                    <div class="node-description">${concept.description}</div>
                 </div>`;
    });
    
    html += `   </div>
             </div>`;
    
    return html;
} 