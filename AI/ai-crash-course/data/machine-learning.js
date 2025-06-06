// Machine Learning topic data
const machineLearningData = {
    title: "Machine Learning",
    description: "Understanding how algorithms improve performance through experience",
    chunks: [
        {
            title: "What is Machine Learning?",
            content: `
                <h3>🧠 Machine Learning Definition</h3>
                <p>Machine Learning is the study of algorithms that improve their <strong>Performance (P)</strong> at some <strong>Task (T)</strong> with <strong>Experience (E)</strong>.</p>
                
                <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
                    <h4>🎯 The PTE Formula</h4>
                    <p><strong>Performance (P):</strong> How well the algorithm does its job</p>
                    <p><strong>Task (T):</strong> What the algorithm is supposed to do</p>
                    <p><strong>Experience (E):</strong> The data the algorithm learns from</p>
                </div>

                <div style="background: #e7f3ff; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border-left: 4px solid #007bff;">
                    <h4>📧 Real Example: Email Spam Filter</h4>
                    <ul>
                        <li><strong>Task (T):</strong> Classify emails as spam or not spam</li>
                        <li><strong>Experience (E):</strong> Thousands of emails labeled as spam/not spam</li>
                        <li><strong>Performance (P):</strong> Percentage of emails correctly classified</li>
                    </ul>
                    <p>The more emails it sees, the better it gets at identifying spam!</p>
                </div>

                ${createDragDropArea(
                    ["Recognizing handwritten digits", "Thousands of labeled digit images", "99% accuracy on new digits"],
                    [
                        { placeholder: "Task (T) - What to do", correct: "task" },
                        { placeholder: "Experience (E) - What to learn from", correct: "experience" },
                        { placeholder: "Performance (P) - How well it works", correct: "performance" }
                    ]
                )}

                ${createImmediateQuiz(
                    "A music recommendation system suggests songs based on your listening history. What is the 'Experience (E)' in this case?",
                    [
                        "The songs it recommends",
                        "How often users like the recommendations",
                        "Your past listening history and ratings",
                        "The number of songs in the database"
                    ],
                    2,
                    "The experience (E) is the data the algorithm learns from - in this case, your past listening history and how you've rated songs helps it learn your preferences."
                )}
            `,
            memoryHack: `
                <strong>🧠 PTE Memory Hack:</strong><br>
                <strong>ML = PTE</strong><br>
                <strong>P</strong>erformance (how good am I?)<br>
                <strong>T</strong>ask (what am I doing?)<br>
                <strong>E</strong>xperience (what am I learning from?)<br><br>
                <em>"Please Teach me with Experience!"</em><br><br>
                <strong>Email Spam Example:</strong><br>
                <strong>P = PERCENT correct</strong><br>
                <strong>T = TAG emails (spam/not spam)</strong><br>
                <strong>E = EXAMPLES of emails</strong>
            `
        },
        {
            title: "When to Use Machine Learning",
            content: `
                <h3>🎯 Perfect Scenarios for ML</h3>
                <p>Machine Learning is ideal when:</p>
                
                ${createProblemSteps([
                    {
                        title: "Hard to Program Manually",
                        description: "Too complex to write explicit rules",
                        example: "Recognizing faces in photos - impossible to write rules for every possible face!"
                    },
                    {
                        title: "Adapting to Change",
                        description: "The environment or patterns change over time",
                        example: "Spam detection - spammers constantly change their tactics"
                    },
                    {
                        title: "Big Data Available",
                        description: "Lots of data to learn patterns from",
                        example: "Netflix has billions of viewing records to recommend movies"
                    },
                    {
                        title: "Human Expertise Hard to Express",
                        description: "Experts can do it but can't explain how",
                        example: "Doctors can diagnose diseases but can't always explain the exact process"
                    }
                ])}

                <div style="background: #d4edda; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border-left: 4px solid #28a745;">
                    <h4>🚗 Self-Driving Cars Example</h4>
                    <p>Why is ML perfect for autonomous vehicles?</p>
                    <ul>
                        <li><strong>Complex:</strong> Too many traffic scenarios to program manually</li>
                        <li><strong>Changing:</strong> Road conditions, weather, traffic patterns vary</li>
                        <li><strong>Big Data:</strong> Millions of hours of driving data available</li>
                        <li><strong>Hard to Express:</strong> Human drivers can't fully explain how they drive</li>
                    </ul>
                </div>

                ${createMatchingExercise(
                    "Match the Problem to the ML Advantage",
                    [
                        { id: "voice", text: "Voice Recognition" },
                        { id: "fraud", text: "Credit Card Fraud Detection" },
                        { id: "translate", text: "Language Translation" },
                        { id: "medical", text: "Medical Diagnosis" }
                    ],
                    [
                        { title: "Hard to Program", description: "Too many rules needed", accepts: "voice,translate" },
                        { title: "Adapting to Change", description: "Patterns evolve over time", accepts: "fraud" },
                        { title: "Expert Knowledge Hard to Express", description: "Humans can do it but can't explain how", accepts: "medical" }
                    ]
                )}

                ${createKnowledgeCheck(
                    "A company wants to automatically sort customer support tickets into categories like 'billing', 'technical', and 'returns'. They have 50,000 labeled tickets from the past year.",
                    "Why is this a good ML problem?",
                    [
                        "It's easy to program the rules manually",
                        "There's lots of labeled data and the patterns are complex",
                        "The categories never change",
                        "Humans can't do this task"
                    ],
                    1,
                    "This is perfect for ML because there's abundant labeled training data (50,000 tickets) and the language patterns in customer requests are too complex and varied to capture with simple rules."
                )}
            `,
            memoryHack: `
                <strong>🧠 When to Use ML = CHEB:</strong><br>
                <strong>C</strong>omplex to program manually<br>
                <strong>H</strong>uge amounts of data available<br>
                <strong>E</strong>nvironment changes over time<br>
                <strong>B</strong>rain can do it but can't explain how<br><br>
                <em>"Check if it's CHEB-worthy before using ML!"</em><br><br>
                <strong>Self-Driving Cars = ALL FOUR!</strong><br>
                Complex ✓, Huge data ✓, Environment changes ✓, Brain-like task ✓
            `
        },
        {
            title: "Big Data and Machine Learning",
            content: `
                <h3>📊 The Big Data Revolution</h3>
                <p>Big Data is characterized by the <strong>3 Vs</strong> and has revolutionized ML:</p>
                
                ${createComparisonTable(
                    "The 3 Vs of Big Data",
                    ["V", "Description", "ML Impact", "Example"],
                    [
                        ["Volume", "Massive amounts of data", "More training examples = better models", "Facebook: 2.8 billion users"],
                        ["Velocity", "Data generated rapidly", "Real-time learning and updates", "Twitter: 500M tweets/day"],
                        ["Variety", "Different types of data", "Richer feature sets", "Text, images, videos, sensors"]
                    ]
                )}

                <div style="background: #fff3cd; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border-left: 4px solid #ffc107;">
                    <h4>📈 Why More Data = Better ML</h4>
                    <p><strong>The Data Effect:</strong> Machine learning models generally improve with more data because:</p>
                    <ul>
                        <li><strong>Pattern Recognition:</strong> More examples reveal clearer patterns</li>
                        <li><strong>Edge Cases:</strong> Rare but important scenarios get covered</li>
                        <li><strong>Generalization:</strong> Models become less likely to overfit</li>
                        <li><strong>Accuracy:</strong> Performance metrics typically improve</li>
                    </ul>
                </div>

                <div style="background: #f8d7da; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border-left: 4px solid #dc3545;">
                    <h4>🎯 Real Example: Image Recognition</h4>
                    <p><strong>ImageNet Dataset Evolution:</strong></p>
                    <ul>
                        <li><strong>2009:</strong> 1.2 million images → 60% accuracy</li>
                        <li><strong>2012:</strong> Same images, better algorithms → 85% accuracy</li>
                        <li><strong>2017:</strong> More data + deep learning → 97% accuracy</li>
                    </ul>
                    <p>Each breakthrough combined better algorithms with more/better data!</p>
                </div>

                ${createSortingExercise(
                    "Rank these datasets by their likely ML performance (best to worst)",
                    [
                        "1,000 high-quality labeled examples",
                        "100,000 noisy but relevant examples", 
                        "10,000 perfectly clean examples",
                        "1 million examples with some errors"
                    ],
                    [3, 2, 1, 0]
                )}

                ${createImmediateQuiz(
                    "Netflix has 200+ million subscribers generating viewing data 24/7. Which aspect of Big Data does this best represent?",
                    [
                        "Volume (amount of data)",
                        "Velocity (speed of data generation)",
                        "Variety (types of data)",
                        "All three equally"
                    ],
                    1,
                    "This primarily represents Velocity - the continuous, rapid generation of viewing data from millions of users streaming content around the clock."
                )}
            `,
            memoryHack: `
                <strong>🧠 Big Data = 3Vs:</strong><br>
                <strong>V</strong>olume = VAST amounts<br>
                <strong>V</strong>elocity = VERY fast<br>
                <strong>V</strong>ariety = VARIOUS types<br><br>
                <strong>Data Effect Memory:</strong><br>
                <strong>MORE DATA = MORE BETTER</strong><br>
                <em>"Like learning to drive - the more roads you see, the better driver you become!"</em><br><br>
                <strong>ImageNet = PROOF:</strong><br>
                2009 → 2017: More data + better algorithms = 60% → 97% accuracy!
            `
        },
        {
            title: "Classification and Decision Trees",
            content: `
                <h3>🌳 Classification Fundamentals</h3>
                <p><strong>Classification</strong> is like sorting mail - putting things into the right categories based on their features.</p>
                
                <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
                    <h4>🔍 Classification Process</h4>
                    <p><strong>Input:</strong> Object with features (attributes)</p>
                    <p><strong>Output:</strong> Category/class label</p>
                    <p><strong>Goal:</strong> Learn patterns from training examples to classify new objects</p>
                </div>

                <div style="background: #e7f3ff; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border-left: 4px solid #007bff;">
                    <h4>🌤️ Weather Prediction Example</h4>
                    <p>Predict if you should play tennis based on weather conditions:</p>
                    <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                        <tr style="background: #f8f9fa;">
                            <th style="border: 1px solid #dee2e6; padding: 8px;">Outlook</th>
                            <th style="border: 1px solid #dee2e6; padding: 8px;">Temperature</th>
                            <th style="border: 1px solid #dee2e6; padding: 8px;">Humidity</th>
                            <th style="border: 1px solid #dee2e6; padding: 8px;">Wind</th>
                            <th style="border: 1px solid #dee2e6; padding: 8px; background: #d4edda;">Play Tennis?</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #dee2e6; padding: 8px;">Sunny</td>
                            <td style="border: 1px solid #dee2e6; padding: 8px;">Hot</td>
                            <td style="border: 1px solid #dee2e6; padding: 8px;">High</td>
                            <td style="border: 1px solid #dee2e6; padding: 8px;">Weak</td>
                            <td style="border: 1px solid #dee2e6; padding: 8px; background: #f8d7da;">No</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #dee2e6; padding: 8px;">Overcast</td>
                            <td style="border: 1px solid #dee2e6; padding: 8px;">Hot</td>
                            <td style="border: 1px solid #dee2e6; padding: 8px;">High</td>
                            <td style="border: 1px solid #dee2e6; padding: 8px;">Weak</td>
                            <td style="border: 1px solid #dee2e6; padding: 8px; background: #d4edda;">Yes</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #dee2e6; padding: 8px;">Rain</td>
                            <td style="border: 1px solid #dee2e6; padding: 8px;">Mild</td>
                            <td style="border: 1px solid #dee2e6; padding: 8px;">High</td>
                            <td style="border: 1px solid #dee2e6; padding: 8px;">Strong</td>
                            <td style="border: 1px solid #dee2e6; padding: 8px; background: #f8d7da;">No</td>
                        </tr>
                    </table>
                    <p><strong>Pattern:</strong> If Outlook = Overcast → Always Play!</p>
                </div>

                ${createMermaidDiagram(`
                    graph TD
                        A[Outlook?] --> B[Sunny]
                        A --> C[Overcast]
                        A --> D[Rain]
                        B --> E[Humidity?]
                        C --> F[Yes 🎾]
                        D --> G[Wind?]
                        E --> H[High: No ❌]
                        E --> I[Normal: Yes ✅]
                        G --> J[Strong: No ❌]
                        G --> K[Weak: Yes ✅]
                        style F fill:#d4edda
                        style H fill:#f8d7da
                        style I fill:#d4edda
                        style J fill:#f8d7da
                        style K fill:#d4edda
                `, "🌳 Decision Tree for Tennis")}

                ${createFillInBlanks(
                    "Given this new weather condition:<br>" +
                    "Outlook: Sunny, Temperature: Cool, Humidity: Normal, Wind: Strong<br><br>" +
                    "Following the decision tree:<br>" +
                    "1. Start at [BLANK_0] node<br>" +
                    "2. Since Outlook = Sunny, go to [BLANK_1] branch<br>" +
                    "3. Check Humidity = Normal, so decision is [BLANK_2]",
                    [
                        { answer: "Outlook" },
                        { answer: "Humidity" },
                        { answer: "Yes" }
                    ]
                )}

                ${createImmediateQuiz(
                    "What is the main advantage of decision trees for classification?",
                    [
                        "They always give 100% accuracy",
                        "They're easy to understand and interpret",
                        "They work without any training data",
                        "They can only handle numerical data"
                    ],
                    1,
                    "Decision trees are popular because they create interpretable models - you can easily follow the decision path and understand why a particular classification was made."
                )}
            `,
            memoryHack: `
                <strong>🧠 Classification = SORTING:</strong><br>
                <strong>Classification = MAIL SORTING</strong><br>
                Features = Address details<br>
                Classes = Delivery zones<br>
                Algorithm = Sorting rules<br><br>
                <strong>Decision Tree = 20 QUESTIONS:</strong><br>
                <em>"Is it sunny? If yes, is humidity high? If no, then play tennis!"</em><br><br>
                <strong>Tennis Example:</strong><br>
                <strong>O</strong>utlook → <strong>H</strong>umidity/Wind → <strong>P</strong>lay?<br>
                <em>"OH, should I Play?"</em>
            `
        }
    ]
}; 