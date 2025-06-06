// Quiz and interactive element utilities

// Enhanced quiz handling with explanation display
function handleQuizAnswer(element, isCorrect, explanation = '') {
    const allOptions = element.parentElement.querySelectorAll('.quiz-option');
    
    // Remove previous states
    allOptions.forEach(option => {
        option.classList.remove('correct', 'incorrect');
    });
    
    if (isCorrect) {
        element.classList.add('correct');
        celebrateCorrectAnswer();
        
        // Show explanation if available
        if (explanation) {
            showExplanation(element.parentElement, explanation);
        }
    } else {
        element.classList.add('incorrect');
        
        // Show correct answer after delay
        setTimeout(() => {
            allOptions.forEach(option => {
                if (option.dataset.correct === 'true') {
                    option.classList.add('correct');
                }
            });
            
            if (explanation) {
                showExplanation(element.parentElement, explanation);
            }
        }, 1500);
    }
}

// Show explanation for quiz answers
function showExplanation(quizContainer, explanation) {
    let explanationDiv = quizContainer.querySelector('.quiz-explanation');
    
    if (!explanationDiv) {
        explanationDiv = document.createElement('div');
        explanationDiv.className = 'quiz-explanation';
        explanationDiv.style.marginTop = '1rem';
        explanationDiv.style.padding = '1rem';
        explanationDiv.style.background = '#e7f3ff';
        explanationDiv.style.borderRadius = '8px';
        explanationDiv.style.borderLeft = '4px solid #007bff';
        quizContainer.appendChild(explanationDiv);
    }
    
    explanationDiv.innerHTML = `<strong>💡 Explanation:</strong> ${explanation}`;
    explanationDiv.style.display = 'block';
    explanationDiv.classList.add('fade-in');
}

// Interactive scenario builder
function createInteractiveScenario(scenario) {
    let html = `<div class="interactive-scenario">
                    <h4>🎭 Interactive Scenario</h4>
                    <div class="scenario-content">
                        <p>${scenario.description}</p>`;
    
    if (scenario.choices) {
        html += '<div class="scenario-choices">';
        scenario.choices.forEach((choice, index) => {
            html += `<button class="scenario-choice" onclick="handleScenarioChoice(${index}, '${scenario.id}')">
                        ${choice.text}
                     </button>`;
        });
        html += '</div>';
    }
    
    html += `   <div class="scenario-result" id="result-${scenario.id}" style="display: none;"></div>
             </div>`;
    
    return html;
}

// Handle scenario choices
function handleScenarioChoice(choiceIndex, scenarioId) {
    const resultDiv = document.getElementById(`result-${scenarioId}`);
    const buttons = document.querySelectorAll('.scenario-choice');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Show result
    resultDiv.style.display = 'block';
    resultDiv.classList.add('fade-in');
    
    // This would be customized based on the specific scenario
    resultDiv.innerHTML = `<p><strong>Result:</strong> You chose option ${choiceIndex + 1}. Great choice!</p>`;
}

// Create matching exercise
function createMatchingExercise(title, items, targets) {
    let html = `<div class="matching-exercise">
                    <h4>🔗 ${title}</h4>
                    <div class="matching-container">
                        <div class="matching-items">`;
    
    items.forEach((item, index) => {
        html += `<div class="matching-item" draggable="true" data-match="${item.id}">
                    ${item.text}
                 </div>`;
    });
    
    html += `   </div>
                <div class="matching-targets">`;
    
    targets.forEach((target, index) => {
        html += `<div class="matching-target" data-accepts="${target.accepts}">
                    <h5>${target.title}</h5>
                    <p>${target.description}</p>
                    <div class="target-drop-area">Drop here</div>
                 </div>`;
    });
    
    html += `   </div>
             </div>`;
    
    return html;
}

// Create fill-in-the-blanks exercise
function createFillInBlanks(text, blanks) {
    let html = `<div class="fill-in-blanks">
                    <h4>📝 Fill in the Blanks</h4>
                    <div class="blanks-text">`;
    
    let processedText = text;
    blanks.forEach((blank, index) => {
        const placeholder = `[BLANK_${index}]`;
        const input = `<input type="text" class="blank-input" data-answer="${blank.answer}" data-index="${index}" placeholder="Type here...">`;
        processedText = processedText.replace(placeholder, input);
    });
    
    html += processedText;
    html += `   </div>
                <button class="check-blanks-btn" onclick="checkFillInBlanks()">Check Answers</button>
                <div class="blanks-result" id="blanksResult"></div>
             </div>`;
    
    return html;
}

// Check fill-in-the-blanks answers
function checkFillInBlanks() {
    const inputs = document.querySelectorAll('.blank-input');
    const resultDiv = document.getElementById('blanksResult');
    let correct = 0;
    let total = inputs.length;
    
    inputs.forEach(input => {
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = input.dataset.answer.toLowerCase();
        
        if (userAnswer === correctAnswer) {
            input.style.borderColor = '#28a745';
            input.style.backgroundColor = '#d4edda';
            correct++;
        } else {
            input.style.borderColor = '#dc3545';
            input.style.backgroundColor = '#f8d7da';
        }
    });
    
    resultDiv.innerHTML = `<p>You got ${correct} out of ${total} correct!</p>`;
    resultDiv.style.display = 'block';
    
    if (correct === total) {
        celebrateCorrectAnswer();
    }
}

// Create sorting exercise
function createSortingExercise(title, items, correctOrder) {
    let html = `<div class="sorting-exercise">
                    <h4>🔢 ${title}</h4>
                    <p>Drag the items to sort them in the correct order:</p>
                    <div class="sortable-list" id="sortableList">`;
    
    // Shuffle items
    const shuffledItems = [...items].sort(() => Math.random() - 0.5);
    
    shuffledItems.forEach((item, index) => {
        html += `<div class="sortable-item" draggable="true" data-order="${items.indexOf(item)}">
                    <span class="drag-handle">⋮⋮</span>
                    ${item}
                 </div>`;
    });
    
    html += `   </div>
                <button class="check-order-btn" onclick="checkSortOrder(${JSON.stringify(correctOrder)})">Check Order</button>
                <div class="sort-result" id="sortResult"></div>
             </div>`;
    
    return html;
}

// Check sorting order
function checkSortOrder(correctOrder) {
    const sortableItems = document.querySelectorAll('.sortable-item');
    const currentOrder = Array.from(sortableItems).map(item => parseInt(item.dataset.order));
    const resultDiv = document.getElementById('sortResult');
    
    const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
    
    if (isCorrect) {
        resultDiv.innerHTML = '<p style="color: #28a745;">✅ Perfect! You got the correct order!</p>';
        celebrateCorrectAnswer();
        
        sortableItems.forEach(item => {
            item.style.borderColor = '#28a745';
            item.style.backgroundColor = '#d4edda';
        });
    } else {
        resultDiv.innerHTML = '<p style="color: #dc3545;">❌ Not quite right. Try again!</p>';
        
        sortableItems.forEach(item => {
            item.style.borderColor = '#dc3545';
            item.style.backgroundColor = '#f8d7da';
        });
        
        // Reset colors after delay
        setTimeout(() => {
            sortableItems.forEach(item => {
                item.style.borderColor = '';
                item.style.backgroundColor = '';
            });
        }, 2000);
    }
    
    resultDiv.style.display = 'block';
}

// Create code completion exercise
function createCodeCompletion(title, codeTemplate, blanks) {
    let html = `<div class="code-completion">
                    <h4>💻 ${title}</h4>
                    <div class="code-editor">
                        <pre><code class="code-template">${codeTemplate}</code></pre>
                    </div>
                    <div class="code-blanks">`;
    
    blanks.forEach((blank, index) => {
        html += `<div class="code-blank">
                    <label>Fill in blank ${index + 1}:</label>
                    <input type="text" class="code-input" data-answer="${blank.answer}" data-line="${blank.line}">
                    <span class="hint">💡 ${blank.hint}</span>
                 </div>`;
    });
    
    html += `   </div>
                <button class="check-code-btn" onclick="checkCodeCompletion()">Check Code</button>
                <div class="code-result" id="codeResult"></div>
             </div>`;
    
    return html;
}

// Check code completion
function checkCodeCompletion() {
    const inputs = document.querySelectorAll('.code-input');
    const resultDiv = document.getElementById('codeResult');
    let correct = 0;
    let total = inputs.length;
    
    inputs.forEach(input => {
        const userAnswer = input.value.trim();
        const correctAnswer = input.dataset.answer;
        
        if (userAnswer === correctAnswer) {
            input.style.borderColor = '#28a745';
            correct++;
        } else {
            input.style.borderColor = '#dc3545';
        }
    });
    
    resultDiv.innerHTML = `<p>Code completion: ${correct}/${total} correct</p>`;
    resultDiv.style.display = 'block';
    
    if (correct === total) {
        resultDiv.innerHTML += '<p style="color: #28a745;">🎉 Perfect! Your code is complete!</p>';
        celebrateCorrectAnswer();
    }
}

// Create timeline exercise
function createTimeline(title, events) {
    let html = `<div class="timeline-exercise">
                    <h4>📅 ${title}</h4>
                    <div class="timeline">`;
    
    events.forEach((event, index) => {
        html += `<div class="timeline-event" data-order="${index}">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h5>${event.title}</h5>
                        <p>${event.description}</p>
                        ${event.details ? `<small>${event.details}</small>` : ''}
                    </div>
                 </div>`;
    });
    
    html += `   </div>
             </div>`;
    
    return html;
} 