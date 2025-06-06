// Quiz management system for the database course

// Security quiz handlers
function checkSecurity(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "Security threats need comprehensive protection!");
}

function checkDBA(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "DBAs follow the principle of least privilege!");
}

function checkGrant(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "CASCADE revocation creates a domino effect!");
}

function checkMAC(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "MAC enforces strict hierarchical security levels!");
}

function checkInference(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "Statistical queries can reveal individual secrets!");
}

function checkEncryption(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "Asymmetric encryption solves the key distribution problem!");
}

// Concurrency quiz handlers
function checkConcurrency(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "Without concurrency control, transactions interfere!");
}

function checkLocks(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "Shared locks allow multiple readers simultaneously!");
}

function check2PL(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "Two-phase locking has strict growing and shrinking phases!");
}

function checkDeadlock(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "Wait-Die lets older transactions wait for younger ones!");
}

function checkTimestamp(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "Timestamp ordering prevents conflicts through time!");
}

function checkMVCC(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "MVCC selects the appropriate version for each transaction!");
}

function checkOptimistic(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "Optimistic control validates conflicts at commit time!");
}

function checkMGL(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "Multiple granularity requires intention locks on the path!");
}

// Recovery quiz handlers
function checkRecoveryBasics(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "Recovery restores committed data and undoes uncommitted!");
}

function checkLogs(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "UNDO operations use BFIM to restore old values!");
}

function checkWAL(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "STEAL policy requires UNDO capability for recovery!");
}

function checkUndoRedo(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "Committed transactions need REDO, uncommitted need UNDO!");
}

function checkCheckpoint(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "Recovery processes transactions based on their final state!");
}

function checkSchemes(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "Deferred update waits until commit to write to database!");
}

function check2PC(element, isCorrect) {
    handleQuizAnswer(element, isCorrect, "Two-phase commit requires unanimous agreement to commit!");
}

// Generic quiz answer handler
function handleQuizAnswer(element, isCorrect, explanation = "") {
    const options = element.parentElement.querySelectorAll('.quiz-option');
    
    // Disable all options
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Style the selected option
    if (isCorrect) {
        element.classList.add('correct');
        triggerConfetti();
        showFeedback("🎉 Correct!", "success");
    } else {
        element.classList.add('incorrect');
        showFeedback("❌ Try again!", "error");
    }
    
    // Show explanation if provided
    if (explanation) {
        setTimeout(() => {
            showExplanation(explanation, element.parentElement);
        }, 1000);
    }
    
    // Update quiz statistics
    updateQuizStats(isCorrect);
}

// Show feedback message
function showFeedback(message, type) {
    const feedback = document.createElement('div');
    feedback.className = `quiz-feedback ${type}`;
    feedback.textContent = message;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 25px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        animation: feedbackSlide 0.3s ease-out;
        ${type === 'success' ? 'background: linear-gradient(135deg, #28a745, #20c997);' : 'background: linear-gradient(135deg, #dc3545, #c82333);'}
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.style.animation = 'feedbackSlide 0.3s ease-out reverse';
        setTimeout(() => {
            if (feedback.parentNode) {
                feedback.parentNode.removeChild(feedback);
            }
        }, 300);
    }, 2000);
}

// Show detailed explanation
function showExplanation(explanation, container) {
    const explanationDiv = document.createElement('div');
    explanationDiv.className = 'quiz-explanation-popup';
    explanationDiv.innerHTML = `
        <div class="explanation-content">
            <h4>💡 Explanation</h4>
            <p>${explanation}</p>
            <button onclick="closeExplanation(this)" class="close-explanation">Got it!</button>
        </div>
    `;
    explanationDiv.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #e3f2fd, #bbdefb);
        border-radius: 10px;
        padding: 20px;
        margin-top: 15px;
        border: 3px solid #2196f3;
        animation: explanationAppear 0.5s ease-out;
        z-index: 100;
    `;
    
    // Make container relative if not already
    container.style.position = 'relative';
    container.appendChild(explanationDiv);
}

function closeExplanation(button) {
    const explanation = button.closest('.quiz-explanation-popup');
    if (explanation) {
        explanation.style.animation = 'explanationAppear 0.3s ease-out reverse';
        setTimeout(() => {
            if (explanation.parentNode) {
                explanation.parentNode.removeChild(explanation);
            }
        }, 300);
    }
}

// Quiz statistics tracking
let quizStats = {
    totalQuestions: 0,
    correctAnswers: 0,
    streakCount: 0,
    maxStreak: 0
};

function updateQuizStats(isCorrect) {
    quizStats.totalQuestions++;
    
    if (isCorrect) {
        quizStats.correctAnswers++;
        quizStats.streakCount++;
        quizStats.maxStreak = Math.max(quizStats.maxStreak, quizStats.streakCount);
        
        // Special achievements
        if (quizStats.streakCount === 5) {
            showAchievement("🔥 On Fire!", "5 correct answers in a row!");
        } else if (quizStats.streakCount === 10) {
            showAchievement("🌟 Quiz Master!", "10 correct answers in a row!");
        }
    } else {
        quizStats.streakCount = 0;
    }
    
    // Save stats to localStorage
    localStorage.setItem('database-quiz-stats', JSON.stringify(quizStats));
}

function showAchievement(title, description) {
    const achievement = document.createElement('div');
    achievement.className = 'achievement-popup';
    achievement.innerHTML = `
        <div class="achievement-content">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
    `;
    achievement.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ffd700, #ffed4e);
        color: #333;
        padding: 30px;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        z-index: 2000;
        animation: achievementBounce 0.6s ease-out;
    `;
    
    document.body.appendChild(achievement);
    
    // Trigger extra confetti for achievements
    setTimeout(() => {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => triggerConfetti(), i * 50);
        }
    }, 200);
    
    setTimeout(() => {
        achievement.style.animation = 'achievementBounce 0.4s ease-out reverse';
        setTimeout(() => {
            if (achievement.parentNode) {
                achievement.parentNode.removeChild(achievement);
            }
        }, 400);
    }, 3000);
}

// Progress-based quizzing
function generateProgressQuiz() {
    if (!currentTopic) return;
    
    const topicData = topics[currentTopic];
    const completedChunks = topicData.chunks.slice(0, currentChunk + 1);
    
    // Select random quiz from completed chunks
    const availableQuizzes = completedChunks
        .filter(chunk => chunk.quiz)
        .map(chunk => chunk.quiz);
    
    if (availableQuizzes.length > 0) {
        const randomQuiz = availableQuizzes[Math.floor(Math.random() * availableQuizzes.length)];
        showProgressQuiz(randomQuiz);
    }
}

function showProgressQuiz(quiz) {
    const modal = document.createElement('div');
    modal.className = 'progress-quiz-modal';
    modal.innerHTML = `
        <div class="progress-quiz-content">
            <div class="quiz-header">
                <h3>📊 Progress Check</h3>
                <p>Test your understanding so far!</p>
            </div>
            <div class="quiz-question">
                <h4>${quiz.question}</h4>
                <div class="quiz-options">
                    ${quiz.options.map((option, index) => 
                        `<div class="quiz-option" onclick="checkProgressQuiz(this, ${index === quiz.correct}, '${quiz.explanation}')">${option}</div>`
                    ).join('')}
                </div>
            </div>
            <button onclick="closeProgressQuiz()" class="skip-quiz">Skip for now</button>
        </div>
    `;
    
    modal.style.cssText = `
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
    `;
    
    document.body.appendChild(modal);
}

function checkProgressQuiz(element, isCorrect, explanation) {
    handleQuizAnswer(element, isCorrect, explanation);
    
    setTimeout(() => {
        closeProgressQuiz();
    }, 3000);
}

function closeProgressQuiz() {
    const modal = document.querySelector('.progress-quiz-modal');
    if (modal) {
        modal.remove();
    }
}

// Quiz difficulty adjustment
function adjustQuizDifficulty() {
    const accuracy = quizStats.correctAnswers / quizStats.totalQuestions;
    
    if (accuracy > 0.8) {
        // High accuracy - show more challenging questions
        return 'hard';
    } else if (accuracy > 0.6) {
        // Medium accuracy - standard questions
        return 'medium';
    } else {
        // Low accuracy - easier questions with more hints
        return 'easy';
    }
}

// Spaced repetition for incorrect answers
let incorrectQuestions = [];

function addToReview(quiz, topicName, chunkTitle) {
    incorrectQuestions.push({
        quiz,
        topicName,
        chunkTitle,
        timestamp: Date.now(),
        reviewCount: 0
    });
    
    localStorage.setItem('database-review-questions', JSON.stringify(incorrectQuestions));
}

function showReviewQuiz() {
    const now = Date.now();
    const dueQuestions = incorrectQuestions.filter(item => {
        const daysSince = (now - item.timestamp) / (1000 * 60 * 60 * 24);
        const reviewInterval = Math.pow(2, item.reviewCount); // Exponential backoff
        return daysSince >= reviewInterval;
    });
    
    if (dueQuestions.length > 0) {
        const questionToReview = dueQuestions[0];
        showReviewModal(questionToReview);
    }
}

function showReviewModal(reviewItem) {
    const modal = document.createElement('div');
    modal.className = 'review-quiz-modal';
    modal.innerHTML = `
        <div class="review-quiz-content">
            <div class="review-header">
                <h3>📚 Review Time!</h3>
                <p>From: ${reviewItem.topicName} → ${reviewItem.chunkTitle}</p>
            </div>
            <div class="quiz-question">
                <h4>${reviewItem.quiz.question}</h4>
                <div class="quiz-options">
                    ${reviewItem.quiz.options.map((option, index) => 
                        `<div class="quiz-option" onclick="checkReviewQuiz(this, ${index === reviewItem.quiz.correct}, ${incorrectQuestions.indexOf(reviewItem)})">${option}</div>`
                    ).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function checkReviewQuiz(element, isCorrect, questionIndex) {
    handleQuizAnswer(element, isCorrect);
    
    if (isCorrect) {
        incorrectQuestions[questionIndex].reviewCount++;
        if (incorrectQuestions[questionIndex].reviewCount >= 3) {
            // Remove from review after 3 successful reviews
            incorrectQuestions.splice(questionIndex, 1);
        }
    } else {
        // Reset review count if still getting it wrong
        incorrectQuestions[questionIndex].reviewCount = 0;
        incorrectQuestions[questionIndex].timestamp = Date.now();
    }
    
    localStorage.setItem('database-review-questions', JSON.stringify(incorrectQuestions));
    
    setTimeout(() => {
        const modal = document.querySelector('.review-quiz-modal');
        if (modal) modal.remove();
    }, 2000);
}

// Load quiz statistics on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedStats = localStorage.getItem('database-quiz-stats');
    if (savedStats) {
        quizStats = JSON.parse(savedStats);
    }
    
    const savedReviews = localStorage.getItem('database-review-questions');
    if (savedReviews) {
        incorrectQuestions = JSON.parse(savedReviews);
        
        // Check for due reviews
        setTimeout(() => {
            showReviewQuiz();
        }, 5000); // Show after 5 seconds
    }
});

// Add CSS animations
const quizStyles = document.createElement('style');
quizStyles.textContent = `
    @keyframes feedbackSlide {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes explanationAppear {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes achievementBounce {
        0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.1); }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    
    .quiz-explanation-popup {
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    
    .close-explanation {
        background: linear-gradient(135deg, #2196f3, #1976d2);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 20px;
        cursor: pointer;
        margin-top: 15px;
        transition: all 0.3s ease;
    }
    
    .close-explanation:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
    
    .progress-quiz-content, .review-quiz-content {
        background: white;
        border-radius: 15px;
        padding: 30px;
        max-width: 600px;
        width: 90%;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }
    
    .skip-quiz {
        background: #6c757d;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 20px;
        cursor: pointer;
        margin-top: 20px;
        transition: all 0.3s ease;
    }
    
    .skip-quiz:hover {
        background: #5a6268;
        transform: translateY(-2px);
    }
`;
document.head.appendChild(quizStyles); 