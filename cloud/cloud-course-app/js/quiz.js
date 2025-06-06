// Quiz management system
let quizState = {
    currentQuiz: null,
    userAnswers: [],
    score: 0,
    totalQuestions: 0
};

// Quiz creation and management
function createQuiz(questions) {
    quizState.currentQuiz = questions;
    quizState.userAnswers = [];
    quizState.score = 0;
    quizState.totalQuestions = questions.length;
}

function checkAnswer(selectedOption, correctAnswer, explanation = '') {
    const isCorrect = selectedOption === correctAnswer;
    
    // Record the answer
    quizState.userAnswers.push({
        selected: selectedOption,
        correct: correctAnswer,
        isCorrect: isCorrect
    });
    
    if (isCorrect) {
        quizState.score++;
        showConfetti();
    }
    
    return {
        isCorrect: isCorrect,
        explanation: explanation,
        score: quizState.score,
        total: quizState.userAnswers.length
    };
}

// Interactive quiz functions for immediate feedback
function checkDragDrop(draggedItem, targetZone, correctAnswer) {
    const isCorrect = draggedItem === correctAnswer;
    
    if (isCorrect) {
        targetZone.classList.add('correct');
        targetZone.innerHTML = `<span style="color: #28a745; font-weight: bold;">✅ ${draggedItem}</span>`;
        showConfetti();
        return true;
    } else {
        targetZone.classList.add('incorrect');
        setTimeout(() => {
            targetZone.classList.remove('incorrect');
        }, 1000);
        return false;
    }
}

function checkMultipleChoice(selectedElement, isCorrect) {
    // Clear previous selections
    const options = selectedElement.parentElement.querySelectorAll('.quiz-option');
    options.forEach(option => {
        option.classList.remove('correct', 'incorrect');
    });
    
    // Mark the selected answer
    if (isCorrect) {
        selectedElement.classList.add('correct');
        showConfetti();
    } else {
        selectedElement.classList.add('incorrect');
    }
    
    // Disable further clicking temporarily
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    setTimeout(() => {
        options.forEach(option => {
            option.style.pointerEvents = 'auto';
        });
    }, 2000);
    
    return isCorrect;
}

// Global quiz option checking function
function checkOrder(element, isCorrect) {
    return checkMultipleChoice(element, isCorrect);
}

// Quiz scoring and statistics
function calculateScore() {
    const correct = quizState.userAnswers.filter(answer => answer.isCorrect).length;
    const total = quizState.userAnswers.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    
    return {
        correct: correct,
        total: total,
        percentage: percentage
    };
}

function getQuizFeedback(percentage) {
    if (percentage >= 90) {
        return {
            message: "🌟 Outstanding! You're a cloud computing expert!",
            level: "expert",
            emoji: "🎓"
        };
    } else if (percentage >= 80) {
        return {
            message: "🎉 Excellent work! You've mastered the concepts!",
            level: "advanced",
            emoji: "🏆"
        };
    } else if (percentage >= 70) {
        return {
            message: "👍 Good job! You're on the right track!",
            level: "intermediate",
            emoji: "📚"
        };
    } else if (percentage >= 60) {
        return {
            message: "📖 Not bad! Review the concepts and try again!",
            level: "beginner",
            emoji: "💪"
        };
    } else {
        return {
            message: "🔄 Keep practicing! Review the material and try again!",
            level: "novice",
            emoji: "🎯"
        };
    }
}

// Random quiz generation
function generateRandomQuiz(count = 5) {
    const allQuizzes = [];
    
    // Collect all quizzes from all topics
    Object.keys(topics).forEach(topicKey => {
        const topic = topics[topicKey];
        topic.chunks.forEach((chunk, index) => {
            if (chunk.quiz) {
                allQuizzes.push({
                    ...chunk.quiz,
                    topic: topic.title,
                    chunkIndex: index + 1
                });
            }
        });
    });
    
    // Shuffle and select random quizzes
    const shuffled = allQuizzes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Quiz analytics
function getTopicPerformance() {
    const performance = {};
    
    Object.keys(topics).forEach(topicKey => {
        performance[topicKey] = {
            attempted: 0,
            correct: 0,
            percentage: 0
        };
    });
    
    // This would be expanded with actual user data tracking
    return performance;
}

// Quiz export/import for progress tracking
function exportQuizResults() {
    return {
        answers: quizState.userAnswers,
        score: quizState.score,
        timestamp: new Date().toISOString(),
        topics: Object.keys(topics)
    };
}

function importQuizResults(data) {
    if (data && data.answers) {
        quizState.userAnswers = data.answers;
        quizState.score = data.score || 0;
        return true;
    }
    return false;
}

// Interactive quiz utilities
function createInteractiveQuiz(quizData) {
    const quizHTML = `
        <div class="interactive-quiz">
            <h4>🎯 ${quizData.question}</h4>
            <div class="quiz-options">
                ${quizData.options.map((option, index) => `
                    <div class="quiz-option" 
                         onclick="handleQuizAnswer(${index}, ${quizData.correct}, '${quizData.explanation}')"
                         data-correct="${index === quizData.correct}">
                        ${option}
                    </div>
                `).join('')}
            </div>
            <div class="quiz-explanation" style="display: none;">
                <strong>💡 Explanation:</strong> ${quizData.explanation}
            </div>
        </div>
    `;
    
    return quizHTML;
}

function handleQuizAnswer(selectedIndex, correctIndex, explanation) {
    const quizContainer = event.target.closest('.interactive-quiz');
    const options = quizContainer.querySelectorAll('.quiz-option');
    const explanationDiv = quizContainer.querySelector('.quiz-explanation');
    
    // Disable all options
    options.forEach(option => option.style.pointerEvents = 'none');
    
    // Show correct/incorrect
    options.forEach((option, index) => {
        if (index === correctIndex) {
            option.classList.add('correct');
        } else if (index === selectedIndex) {
            option.classList.add('incorrect');
        }
    });
    
    // Show explanation
    explanationDiv.style.display = 'block';
    
    // Show confetti for correct answers
    if (selectedIndex === correctIndex) {
        showConfetti();
    }
    
    // Re-enable after delay
    setTimeout(() => {
        options.forEach(option => option.style.pointerEvents = 'auto');
        options.forEach(option => option.classList.remove('correct', 'incorrect'));
        explanationDiv.style.display = 'none';
    }, 3000);
}

// Memory game quiz
function createMemoryMatchGame(pairs) {
    const cards = [];
    pairs.forEach(pair => {
        cards.push({ id: pair.id + 'a', content: pair.term, type: 'term', match: pair.id });
        cards.push({ id: pair.id + 'b', content: pair.definition, type: 'definition', match: pair.id });
    });
    
    // Shuffle cards
    const shuffled = cards.sort(() => 0.5 - Math.random());
    
    const gameHTML = shuffled.map(card => `
        <div class="memory-card" data-id="${card.id}" data-match="${card.match}" data-type="${card.type}">
            ${card.content}
        </div>
    `).join('');
    
    return `<div class="memory-game">${gameHTML}</div>`;
} 