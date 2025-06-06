// Problem Solving topic data
const problemSolvingData = {
    title: "Problem Solving",
    description: "Understanding problems as gaps between current and desired states",
    chunks: [
        {
            title: "What is a Problem?",
            content: `
                <h3>🧩 Understanding Problems</h3>
                <p>A <strong>problem</strong> is simply a gap between where you are now (current state) and where you want to be (desired state).</p>
                
                <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
                    <h4>🎯 Problem = Current State → Desired State</h4>
                    <p><strong>Example:</strong> You're at home 🏠 and want to get to work 🏢</p>
                    <ul>
                        <li><strong>Current State:</strong> At home</li>
                        <li><strong>Desired State:</strong> At work</li>
                        <li><strong>Actions:</strong> Walk, drive, take bus, etc.</li>
                    </ul>
                </div>

                ${createImmediateQuiz(
                    "Which of the following best describes a problem in AI?",
                    [
                        "A difficult mathematical equation",
                        "A gap between current and desired states",
                        "A broken computer program",
                        "A complex algorithm"
                    ],
                    1,
                    "Problems in AI are defined as the difference between where we are (current state) and where we want to be (goal state), along with the actions available to bridge that gap."
                )}
            `,
            memoryHack: `
                <strong>🧠 Problem Memory Hack:</strong><br>
                <strong>Problem = GAP</strong><br>
                <strong>G</strong>oal state (where you want to be)<br>
                <strong>A</strong>ctions (what you can do)<br>
                <strong>P</strong>resent state (where you are now)<br><br>
                <em>Think of it like a bridge - you need to know where you are, where you're going, and how to get there!</em>
            `
        },
        {
            title: "Elements of a Well-Defined Problem",
            content: `
                <h3>🔧 The Four Essential Elements</h3>
                <p>Every well-defined problem needs these four components:</p>
                
                ${createProblemSteps([
                    {
                        title: "Initial State",
                        description: "Where the agent starts",
                        example: "Robot at position (0,0) in a grid"
                    },
                    {
                        title: "Operators (Actions)",
                        description: "What the agent can do",
                        example: "Move North, South, East, or West"
                    },
                    {
                        title: "Goal Test",
                        description: "How to recognize the solution",
                        example: "Reach position (5,5)"
                    },
                    {
                        title: "Path Cost",
                        description: "How much each action costs",
                        example: "Each move costs 1 energy unit"
                    }
                ])}

                ${createDragDropArea(
                    ["Initial State", "Actions", "Goal Test", "Path Cost"],
                    [
                        { placeholder: "What we start with", correct: "initial" },
                        { placeholder: "What we can do", correct: "actions" },
                        { placeholder: "How we know we're done", correct: "goal" },
                        { placeholder: "How expensive actions are", correct: "cost" }
                    ]
                )}
            `,
            memoryHack: `
                <strong>🧠 ISOG Memory Hack:</strong><br>
                <strong>I</strong>nitial state (starting point)<br>
                <strong>S</strong>uccessor function (actions)<br>
                <strong>g<u>O</u></strong>al test (finish line)<br>
                <strong>G</strong>ost... wait, path <strong>C</strong>ost! 😄<br><br>
                <em>Think "I SOG" - "I Start, Operations, Goal!"</em>
            `
        },
        {
            title: "Types of Problems - Part 1",
            content: `
                <h3>🔍 Single-State vs Multiple-State Problems</h3>
                <p>Problems are classified based on what the agent knows about the world:</p>
                
                ${createComparisonTable(
                    "Problem Types Comparison",
                    ["Type", "World Observable?", "World Deterministic?", "Example"],
                    [
                        ["Single-state", "Fully", "Yes", "Chess game - you see all pieces"],
                        ["Multiple-state", "Partially", "Yes", "Vacuum cleaner - can't see all rooms"]
                    ]
                )}

                <div style="background: #e7f3ff; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border-left: 4px solid #007bff;">
                    <h4>🎮 Single-State Problem Example</h4>
                    <p><strong>Chess:</strong> You can see the entire board and know exactly what happens when you move a piece. You can plan your entire strategy in advance!</p>
                </div>

                <div style="background: #fff3cd; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border-left: 4px solid #ffc107;">
                    <h4>🧹 Multiple-State Problem Example</h4>
                    <p><strong>Vacuum Cleaner:</strong> The robot can't see all rooms at once, but it knows that if it vacuums a dirty room, it becomes clean. It must keep track of multiple possible states.</p>
                </div>

                ${createImmediateQuiz(
                    "A robot navigating a maze where it can only see adjacent walls belongs to which category?",
                    [
                        "Single-state problem",
                        "Multiple-state problem", 
                        "Contingency problem",
                        "Exploration problem"
                    ],
                    1,
                    "The robot has limited visibility (partially observable) but knows the effects of its movements (deterministic), making this a multiple-state problem."
                )}
            `,
            memoryHack: `
                <strong>🧠 Observable Memory Hack:</strong><br>
                <strong>Single-state = CHESS</strong> (see everything, plan everything)<br>
                <strong>Multiple-state = VACUUM</strong> (see some, know effects)<br><br>
                <em>Chess players see the whole board, vacuum cleaners don't see through walls!</em>
            `
        },
        {
            title: "Types of Problems - Part 2",
            content: `
                <h3>🎲 Contingency vs Exploration Problems</h3>
                <p>When the world becomes unpredictable or unknown:</p>
                
                ${createComparisonTable(
                    "Advanced Problem Types",
                    ["Type", "World Observable?", "World Deterministic?", "Strategy"],
                    [
                        ["Contingency", "Partially", "No", "Sense during execution"],
                        ["Exploration", "Unknown", "Unknown", "Learn by experimenting"]
                    ]
                )}

                <div style="background: #f8d7da; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border-left: 4px solid #dc3545;">
                    <h4>🌪️ Contingency Problem Example</h4>
                    <p><strong>Robot in a Storm:</strong> The robot plans to move North, but wind might blow it East or West unpredictably. It must sense and adapt during execution!</p>
                </div>

                <div style="background: #d1ecf1; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border-left: 4px solid #17a2b8;">
                    <h4>🗺️ Exploration Problem Example</h4>
                    <p><strong>Mars Rover:</strong> Lands on unknown terrain with no map. Must learn about the environment, its own capabilities, and effects of actions through trial and error.</p>
                </div>

                ${createKnowledgeCheck(
                    "A self-driving car encounters a new type of road construction it has never seen before. The car's sensors work normally, but it doesn't know what actions to take or what the consequences might be.",
                    "What type of problem is this?",
                    [
                        "Single-state problem",
                        "Multiple-state problem",
                        "Contingency problem", 
                        "Exploration problem"
                    ],
                    3,
                    "Since the car doesn't know what actions are available or their effects in this new situation, it must learn through experimentation - this is an exploration problem."
                )}
            `,
            memoryHack: `
                <strong>🧠 SOME Memory Hack:</strong><br>
                <strong>S</strong>ingle-state (see all, know all)<br>
                <strong>O</strong>bservable partially = Multiple-state<br>
                <strong>M</strong>aybe works = Contingency<br>
                <strong>E</strong>xploration (know nothing!)<br><br>
                <em>"SOME problems are harder than others!"</em>
            `
        },
        {
            title: "Problem Formulation Process",
            content: `
                <h3>📋 The 4-Step Problem Solving Process</h3>
                <p>Here's how to approach any AI problem systematically:</p>
                
                ${createTimeline("Problem Solving Steps", [
                    {
                        title: "1. Goal Formulation",
                        description: "Decide what you want to achieve",
                        details: "What is the desired outcome?"
                    },
                    {
                        title: "2. Problem Formulation", 
                        description: "Define states, actions, and constraints",
                        details: "How do we represent this formally?"
                    },
                    {
                        title: "3. Search",
                        description: "Find a sequence of actions to reach the goal",
                        details: "What's the path from start to goal?"
                    },
                    {
                        title: "4. Execution",
                        description: "Carry out the planned actions",
                        details: "Actually perform the solution"
                    }
                ])}

                <div style="background: #d4edda; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border-left: 4px solid #28a745;">
                    <h4>🚗 Real Example: Route Planning</h4>
                    <ol>
                        <li><strong>Goal Formulation:</strong> "Get to the airport"</li>
                        <li><strong>Problem Formulation:</strong> States = locations, Actions = drive/walk/bus, Cost = time</li>
                        <li><strong>Search:</strong> GPS finds optimal route considering traffic</li>
                        <li><strong>Execution:</strong> Follow the directions</li>
                    </ol>
                </div>

                ${createSortingExercise(
                    "Problem Solving Process",
                    [
                        "Execute the solution",
                        "Define the problem formally", 
                        "Decide what you want to achieve",
                        "Find a path to the goal"
                    ],
                    [2, 1, 3, 0]
                )}
            `,
            memoryHack: `
                <strong>🧠 GAPS Memory Hack:</strong><br>
                <strong>G</strong>oal formulation (what do I want?)<br>
                <strong>A</strong>bstraction/Problem formulation (how to represent?)<br>
                <strong>P</strong>ath finding/Search (how to get there?)<br>
                <strong>S</strong>olution execution (just do it!)<br><br>
                <em>"Fill the GAPS between where you are and where you want to be!"</em>
            `
        },
        {
            title: "Problem Solving Practice",
            content: `
                <h3>🎯 Put It All Together!</h3>
                <p>Let's practice with a classic AI problem:</p>
                
                <div style="background: #f8f9fa; padding: 2rem; border-radius: 10px; margin: 1rem 0; border: 2px solid #dee2e6;">
                    <h4>🧩 The 8-Puzzle Problem</h4>
                    <p>Move numbered tiles in a 3×3 grid to reach the goal configuration:</p>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 1rem 0;">
                        <div style="text-align: center;">
                            <h5>Initial State</h5>
                            <div style="display: grid; grid-template-columns: repeat(3, 40px); gap: 2px; justify-content: center;">
                                <div style="border: 1px solid #333; padding: 10px; text-align: center;">2</div>
                                <div style="border: 1px solid #333; padding: 10px; text-align: center;">8</div>
                                <div style="border: 1px solid #333; padding: 10px; text-align: center;">3</div>
                                <div style="border: 1px solid #333; padding: 10px; text-align: center;">1</div>
                                <div style="border: 1px solid #333; padding: 10px; text-align: center;">6</div>
                                <div style="border: 1px solid #333; padding: 10px; text-align: center;">4</div>
                                <div style="border: 1px solid #333; padding: 10px; text-align: center;">7</div>
                                <div style="border: 1px solid #333; padding: 10px; text-align: center; background: #f0f0f0;"></div>
                                <div style="border: 1px solid #333; padding: 10px; text-align: center;">5</div>
                            </div>
                        </div>
                        
                        <div style="text-align: center;">
                            <h5>Goal State</h5>
                            <div style="display: grid; grid-template-columns: repeat(3, 40px); gap: 2px; justify-content: center;">
                                <div style="border: 1px solid #333; padding: 10px; text-align: center;">1</div>
                                <div style="border: 1px solid #333; padding: 10px; text-align: center;">2</div>
                                <div style="border: 1px solid #333; padding: 10px; text-align: center;">3</div>
                                <div style="border: 1px solid #333; padding: 10px; text-align: center;">8</div>
                                <div style="border: 1px solid #333; padding: 10px; text-align: center; background: #f0f0f0;"></div>
                                <div style="border: 1px solid #333; padding: 10px; text-align: center;">4</div>
                                <div style="border: 1px solid #333; padding: 10px; text-align: center;">7</div>
                                <div style="border: 1px solid #333; padding: 10px; text-align: center;">6</div>
                                <div style="border: 1px solid #333; padding: 10px; text-align: center;">5</div>
                            </div>
                        </div>
                    </div>
                </div>

                ${createFillInBlanks(
                    "Analyze the 8-puzzle problem:<br><br>" +
                    "• Initial state: [BLANK_0]<br>" +
                    "• Actions: [BLANK_1]<br>" +
                    "• Goal test: [BLANK_2]<br>" +
                    "• Path cost: [BLANK_3]",
                    [
                        { answer: "Current tile configuration" },
                        { answer: "Move tiles into empty space" },
                        { answer: "Check if configuration matches goal" },
                        { answer: "Number of moves" }
                    ]
                )}

                ${createImmediateQuiz(
                    "What type of problem is the 8-puzzle?",
                    [
                        "Single-state problem (fully observable, deterministic)",
                        "Multiple-state problem (partially observable)",
                        "Contingency problem (non-deterministic)",
                        "Exploration problem (unknown environment)"
                    ],
                    0,
                    "The 8-puzzle is fully observable (we can see all tiles) and deterministic (each move has a predictable outcome), making it a single-state problem perfect for planning ahead."
                )}
            `,
            memoryHack: `
                <strong>🧠 8-Puzzle Memory:</strong><br>
                <strong>8-Puzzle = SLIDE</strong><br>
                <strong>S</strong>ingle-state problem<br>
                <strong>L</strong>imited actions (slide tiles)<br>
                <strong>I</strong>nitial configuration given<br>
                <strong>D</strong>eterministic moves<br>
                <strong>E</strong>xact goal state defined<br><br>
                <em>"Just SLIDE the pieces to solve!"</em>
            `
        }
    ]
}; 