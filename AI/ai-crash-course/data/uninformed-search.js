// Uninformed Search topic data
const uninformedSearchData = {
    title: "Uninformed Search",
    description: "Exploring search trees and algorithms to find paths from start to goal",
    chunks: [
        {
            title: "What is Search?",
            content: `
                <h3>🔍 Search in AI</h3>
                <p><strong>Search</strong> is the process of exploring different possible sequences of actions to find a path from an initial state to a goal state.</p>
                
                <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
                    <h4>🗺️ Think of Search Like...</h4>
                    <p><strong>GPS Navigation:</strong> Finding the best route from your current location to your destination</p>
                    <ul>
                        <li><strong>Current Location:</strong> Initial state</li>
                        <li><strong>Destination:</strong> Goal state</li>
                        <li><strong>Roads:</strong> Available actions</li>
                        <li><strong>Route:</strong> Solution path</li>
                    </ul>
                </div>

                <div style="background: #e7f3ff; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border-left: 4px solid #007bff;">
                    <h4>🔬 Uninformed vs Informed Search</h4>
                    <p><strong>Uninformed Search (Blind Search):</strong> No additional information about how close we are to the goal</p>
                    <p><strong>Informed Search:</strong> Uses heuristics or estimates to guide the search</p>
                    <p>Today we focus on uninformed search - like exploring a maze blindfolded!</p>
                </div>

                ${createImmediateQuiz(
                    "What makes a search algorithm 'uninformed'?",
                    [
                        "It doesn't know the goal state",
                        "It has no additional information to guide the search toward the goal",
                        "It can't find optimal solutions",
                        "It's slower than informed search"
                    ],
                    1,
                    "Uninformed search algorithms only use information available in the problem definition - they have no heuristics or estimates about how close they are to the goal."
                )}
            `,
            memoryHack: `
                <strong>🧠 Search Memory Hack:</strong><br>
                <strong>Search = GPS</strong><br>
                <strong>G</strong>oal state (destination)<br>
                <strong>P</strong>ath finding (route planning)<br>
                <strong>S</strong>tates (locations along the way)<br><br>
                <em>"Like GPS navigation, but without knowing which direction the destination is!"</em>
            `
        },
        {
            title: "Search Trees and Components",
            content: `
                <h3>🌳 Understanding Search Trees</h3>
                <p>A <strong>search tree</strong> represents all possible paths an agent could take from the initial state:</p>
                
                ${createMermaidDiagram(`
                    graph TD
                        A[Root: Initial State] --> B[State B]
                        A --> C[State C]
                        B --> D[State D]
                        B --> E[State E]
                        C --> F[State F]
                        C --> G[Goal State! 🎯]
                        E --> H[State H]
                        style A fill:#e7f3ff
                        style G fill:#d4edda
                `, "🌳 Example Search Tree")}

                ${createComparisonTable(
                    "Search Tree Components",
                    ["Component", "Description", "Example"],
                    [
                        ["Root Node", "Starting point of search", "Initial state"],
                        ["Branch", "Possible action/path", "Move North, South, etc."],
                        ["Leaf Node", "End of current path", "Unexplored states"],
                        ["Goal Node", "Target we're looking for", "Solution state"]
                    ]
                )}

                ${createDragDropArea(
                    ["Root Node", "Branch", "Leaf Node", "Goal Node"],
                    [
                        { placeholder: "Where we start searching", correct: "root" },
                        { placeholder: "What we're trying to find", correct: "goal" },
                        { placeholder: "Possible actions between states", correct: "branch" },
                        { placeholder: "Unexplored endpoints", correct: "leaf" }
                    ]
                )}
            `,
            memoryHack: `
                <strong>🧠 Tree = FAMILY Memory:</strong><br>
                <strong>Root = GRANDPARENT</strong> (where it all starts)<br>
                <strong>Branch = PARENT-CHILD</strong> (relationships/connections)<br>
                <strong>Leaf = YOUNGEST KIDS</strong> (no children yet)<br>
                <strong>Goal = FAMILY REUNION</strong> (what we're looking for)<br><br>
                <em>"Every family tree starts with grandparents and grows through relationships!"</em>
            `
        },
        {
            title: "Search Algorithm Components",
            content: `
                <h3>⚙️ The Building Blocks</h3>
                <p>Every search algorithm needs these essential components:</p>
                
                ${createProblemSteps([
                    {
                        title: "Generator (Successor Function)",
                        description: "Produces next possible states from current state",
                        example: "From position (2,3), generate moves to (1,3), (3,3), (2,2), (2,4)"
                    },
                    {
                        title: "Tester (Goal Test)",
                        description: "Checks if current state is the goal",
                        example: "Is current position == target position?"
                    },
                    {
                        title: "OPEN List",
                        description: "Stores nodes seen but not yet explored",
                        example: "To-do list of places to visit next"
                    },
                    {
                        title: "CLOSED List",
                        description: "Stores nodes already explored",
                        example: "History of places already visited"
                    }
                ])}

                <div style="background: #fff3cd; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border-left: 4px solid #ffc107;">
                    <h4>🏃‍♂️ Real-World Analogy</h4>
                    <p><strong>Exploring a Museum:</strong></p>
                    <ul>
                        <li><strong>Generator:</strong> "What rooms can I visit from here?"</li>
                        <li><strong>Tester:</strong> "Is this the Egyptian exhibit I'm looking for?"</li>
                        <li><strong>OPEN List:</strong> "Rooms I know about but haven't visited yet"</li>
                        <li><strong>CLOSED List:</strong> "Rooms I've already been in"</li>
                    </ul>
                </div>

                ${createImmediateQuiz(
                    "A robot is exploring a building. It's currently in Room A and can move to Rooms B, C, or D. Which component generates these options?",
                    [
                        "Goal Test function",
                        "OPEN list",
                        "Generator/Successor function",
                        "CLOSED list"
                    ],
                    2,
                    "The Generator (Successor function) is responsible for producing all possible next states from the current state - in this case, the rooms the robot can move to from Room A."
                )}
            `,
            memoryHack: `
                <strong>🧠 GTC Memory Hack:</strong><br>
                <strong>G</strong>enerator (what can I do next?)<br>
                <strong>T</strong>ester (am I done yet?)<br>
                <strong>C</strong>losed vs OPEN (done vs to-do)<br><br>
                <em>"GTC - Generate, Test, Categorize!"</em><br><br>
                <strong>OPEN vs CLOSED:</strong><br>
                <strong>OPEN = TO-DO LIST</strong> (places to visit)<br>
                <strong>CLOSED = DONE LIST</strong> (places visited)
            `
        },
        {
            title: "Basic Search Algorithms",
            content: `
                <h3>🔄 Breadth-First vs Depth-First Search</h3>
                <p>Two fundamental approaches to exploring a search tree:</p>
                
                ${createComparisonTable(
                    "BFS vs DFS Comparison",
                    ["Aspect", "Breadth-First Search (BFS)", "Depth-First Search (DFS)"],
                    [
                        ["Strategy", "Explore all neighbors first", "Go as deep as possible first"],
                        ["Data Structure", "Queue (FIFO)", "Stack (LIFO)"],
                        ["Memory", "High (stores many nodes)", "Low (stores path only)"],
                        ["Optimal?", "Yes (if costs are equal)", "No"],
                        ["Complete?", "Yes (finds solution if exists)", "No (can get stuck in loops)"]
                    ]
                )}

                ${createAlgorithmVisualization("BFS vs DFS", [
                    {
                        title: "Starting Position",
                        description: "Both algorithms begin at the root node",
                        visualization: `
                            <div style="text-align: center;">
                                <div style="width: 40px; height: 40px; border: 2px solid #007bff; border-radius: 50%; background: #e7f3ff; display: inline-flex; align-items: center; justify-content: center; margin: 5px;">A</div>
                            </div>
                        `
                    },
                    {
                        title: "BFS: Level by Level",
                        description: "BFS explores all nodes at depth 1, then depth 2, etc.",
                        visualization: `
                            <div style="text-align: center;">
                                <div style="margin: 10px;">
                                    <div style="width: 40px; height: 40px; border: 2px solid #28a745; border-radius: 50%; background: #d4edda; display: inline-flex; align-items: center; justify-content: center; margin: 5px;">A</div>
                                </div>
                                <div style="margin: 10px;">
                                    <div style="width: 40px; height: 40px; border: 2px solid #007bff; border-radius: 50%; background: #e7f3ff; display: inline-flex; align-items: center; justify-content: center; margin: 5px;">B</div>
                                    <div style="width: 40px; height: 40px; border: 2px solid #007bff; border-radius: 50%; background: #e7f3ff; display: inline-flex; align-items: center; justify-content: center; margin: 5px;">C</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: "DFS: Deep First",
                        description: "DFS goes deep down one path before backtracking",
                        visualization: `
                            <div style="text-align: center;">
                                <div style="margin: 10px;">
                                    <div style="width: 40px; height: 40px; border: 2px solid #28a745; border-radius: 50%; background: #d4edda; display: inline-flex; align-items: center; justify-content: center; margin: 5px;">A</div>
                                </div>
                                <div style="margin: 10px;">
                                    <div style="width: 40px; height: 40px; border: 2px solid #28a745; border-radius: 50%; background: #d4edda; display: inline-flex; align-items: center; justify-content: center; margin: 5px;">B</div>
                                    <div style="width: 40px; height: 40px; border: 2px solid #6c757d; border-radius: 50%; background: #f8f9fa; display: inline-flex; align-items: center; justify-content: center; margin: 5px;">C</div>
                                </div>
                                <div style="margin: 10px;">
                                    <div style="width: 40px; height: 40px; border: 2px solid #007bff; border-radius: 50%; background: #e7f3ff; display: inline-flex; align-items: center; justify-content: center; margin: 5px;">D</div>
                                </div>
                            </div>
                        `
                    }
                ])}

                ${createKnowledgeCheck(
                    "You're looking for the shortest path to exit a maze. The maze has multiple solutions at different distances from the start.",
                    "Which algorithm should you choose?",
                    [
                        "Depth-First Search (DFS)",
                        "Breadth-First Search (BFS)",
                        "Both work equally well",
                        "Neither can solve this problem"
                    ],
                    1,
                    "BFS is guaranteed to find the shortest path (optimal solution) because it explores nodes level by level, always finding closer solutions before more distant ones."
                )}
            `,
            memoryHack: `
                <strong>🧠 BFS vs DFS Memory:</strong><br>
                <strong>BFS = RIPPLES</strong> (like stone in pond, spreads outward)<br>
                <strong>DFS = DRILL</strong> (goes deep down first)<br><br>
                <strong>Queue vs Stack:</strong><br>
                <strong>BFS Queue = CAFETERIA LINE</strong> (first in, first out)<br>
                <strong>DFS Stack = PLATES</strong> (last in, first out)<br><br>
                <em>"Ripples spread wide, drills go deep!"</em>
            `
        },
        {
            title: "Search Algorithm Analysis",
            content: `
                <h3>📊 Evaluating Search Algorithms</h3>
                <p>We judge search algorithms on four key criteria:</p>
                
                ${createProblemSteps([
                    {
                        title: "Completeness",
                        description: "Will it find a solution if one exists?",
                        example: "BFS: ✅ Yes, DFS: ❌ No (can get stuck in loops)"
                    },
                    {
                        title: "Optimality", 
                        description: "Will it find the best (shortest/cheapest) solution?",
                        example: "BFS: ✅ Yes (if equal costs), DFS: ❌ No"
                    },
                    {
                        title: "Time Complexity",
                        description: "How long does it take? (Big O notation)",
                        example: "BFS: O(b^d), DFS: O(b^m)"
                    },
                    {
                        title: "Space Complexity", 
                        description: "How much memory does it use?",
                        example: "BFS: O(b^d), DFS: O(b*m)"
                    }
                ])}

                <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border: 2px solid #dee2e6;">
                    <h4>📚 Complexity Notation Explained</h4>
                    <ul>
                        <li><strong>b</strong> = branching factor (average number of children per node)</li>
                        <li><strong>d</strong> = depth of shallowest goal</li>
                        <li><strong>m</strong> = maximum depth of search tree</li>
                    </ul>
                    <p><strong>Example:</strong> In a chess game, b ≈ 35 (average moves per position)</p>
                </div>

                ${createSortingExercise(
                    "Rank these from MOST important to LEAST important for a GPS navigation system",
                    [
                        "Completeness (finding a route)",
                        "Optimality (shortest route)",
                        "Space complexity (memory usage)",
                        "Time complexity (calculation speed)"
                    ],
                    [0, 1, 3, 2]
                )}

                ${createImmediateQuiz(
                    "Why does BFS use more memory than DFS?",
                    [
                        "BFS stores all visited nodes permanently",
                        "BFS keeps many nodes in OPEN list at each level",
                        "DFS doesn't use any memory",
                        "BFS generates more nodes than DFS"
                    ],
                    1,
                    "BFS explores level by level, so it must keep all nodes at the current level in the OPEN list before moving deeper. DFS only keeps nodes along the current path."
                )}
            `,
            memoryHack: `
                <strong>🧠 COTS Analysis:</strong><br>
                <strong>C</strong>ompleteness (will it find something?)<br>
                <strong>O</strong>ptimality (will it find the best?)<br>
                <strong>T</strong>ime complexity (how long?)<br>
                <strong>S</strong>pace complexity (how much memory?)<br><br>
                <strong>BFS vs DFS Trade-off:</strong><br>
                <strong>BFS = SMART but HUNGRY</strong> (optimal but uses lots of memory)<br>
                <strong>DFS = FAST but RISKY</strong> (low memory but might not find best solution)
            `
        }
    ]
}; 