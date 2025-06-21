// Placeholder for synchronization data - to be implemented
const synchronizationData = {
    title: "⏰ Chapter 5: Synchronization",
    chunks: [
        {
            id: 1,
            title: "Clock Synchronization - Getting in Sync!",
            content: `
                <h3>⏰ Why Do Clocks Drift?</h3>
                <p>Physical clocks in computers aren't perfect - they drift apart over time!</p>
                <p><strong>Problem:</strong> Different machines think it's different times 🤯</p>
                <p><strong>Solution:</strong> Synchronization algorithms!</p>
                
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 20px 0;">
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; text-align: center;">
                        <h4>🎯 Cristian's Algorithm</h4>
                        <p>Ask time server: "What time is it?"</p>
                        <p>Account for network delay</p>
                        <div class="mermaid">
                        sequenceDiagram
                            Client->>TimeServer: Request time
                            TimeServer->>Client: Current time
                            Note over Client: Adjust for network delay
                        </div>
                    </div>
                    
                    <div style="background: #e8e8f5; padding: 15px; border-radius: 8px; text-align: center;">
                        <h4>🤝 Berkeley Algorithm</h4>
                        <p>Master polls all slaves</p>
                        <p>Calculates average time</p>
                        <p>Tells everyone to adjust</p>
                        <div class="mermaid">
                        graph TD
                            A[Master] --> B[Slave 1: 3:00]
                            A --> C[Slave 2: 3:05]
                            A --> D[Slave 3: 2:58]
                            A --> E[Average: 3:01<br/>Tell all to adjust]
                        </div>
                    </div>
                    
                    <div style="background: #f5e8e8; padding: 15px; border-radius: 8px; text-align: center;">
                        <h4>🌐 NTP (Network Time)</h4>
                        <p>Hierarchical time distribution</p>
                        <p>Multiple time sources</p>
                        <p>Self-organizing network</p>
                        <div class="mermaid">
                        graph TD
                            A[Atomic Clock] --> B[Stratum 1]
                            B --> C[Stratum 2]
                            B --> D[Stratum 2]
                            C --> E[Your Computer]
                            D --> E
                        </div>
                    </div>
                </div>

                <div class="drag-container">
                    <div class="drag-source">
                        <h4>Match the clock sync method:</h4>
                        <div class="draggable-item" data-type="cristian">One time server answers requests</div>
                        <div class="draggable-item" data-type="berkeley">Master calculates average time</div>
                        <div class="draggable-item" data-type="ntp">Hierarchical time distribution</div>
                        <div class="draggable-item" data-type="cristian">Client adjusts for network delay</div>
                    </div>
                    <div class="drop-zone" id="cristianZone">Cristian's Algorithm</div>
                    <div class="drop-zone" id="berkeleyZone">Berkeley Algorithm</div>
                    <div class="drop-zone" id="ntpZone">NTP</div>
                </div>
            `,
            memoryHack: `
                <strong>⏰ Clock Sync Memory:</strong><br>
                <strong>Cristian</strong> = "CHRISTIAN asks God for time" (one source of truth)<br>
                <strong>Berkeley</strong> = "BERKELEY UNIVERSITY" averages all student grades<br>
                <strong>NTP</strong> = "NETWORK TIME PYRAMID" - hierarchy like company org chart<br><br>
                <em>"Cristian = Client asks, Berkeley = Boss averages, NTP = Network pyramid!"</em>
            `,
            quiz: {
                question: "If the network delay is 10ms, and the time server says it's 3:00:00, what should the client set its clock to?",
                options: [
                    "Exactly 3:00:00",
                    "3:00:00 plus 5ms (half the round-trip delay)",
                    "3:00:00 plus 10ms", 
                    "3:00:00 minus 5ms"
                ],
                correct: 1,
                explanation: "Add half the round-trip delay (5ms) to account for the time it took the message to travel!"
            }
        },
        {
            id: 2,
            title: "Logical Clocks - Event Ordering Without Time!",
            content: `
                <h3>🎯 Lamport Timestamps - The Happened-Before Relation</h3>
                <p>Who cares about real time? Let's just order events!</p>
                
                <div style="background: #f0f8ff; padding: 20px; border-radius: 10px; margin: 15px 0;">
                    <h4>📮 Lamport Clock Rules:</h4>
                    <ol style="margin-left: 20px;">
                        <li><strong>Local event:</strong> Increment your counter</li>
                        <li><strong>Send message:</strong> Include your current counter</li>
                        <li><strong>Receive message:</strong> Set counter = max(your_counter, received_counter) + 1</li>
                    </ol>
                </div>

                <div class="mermaid">
                sequenceDiagram
                    participant A as Process A
                    participant B as Process B
                    participant C as Process C
                    
                    Note over A: Event a1 (1)
                    Note over B: Event b1 (1)
                    A->>B: Message (2)
                    Note over B: Event b2 (3)
                    B->>C: Message (4) 
                    Note over C: Event c1 (5)
                    Note over A: Event a2 (3)
                </div>

                <h4>📊 Vector Clocks - Capturing Causality</h4>
                <p>Lamport clocks can't detect concurrent events. Vector clocks can!</p>
                
                <div style="background: #f0fff0; padding: 15px; border-radius: 8px;">
                    <p><strong>Vector Clock:</strong> Each process maintains a vector [A_count, B_count, C_count]</p>
                    <p>Example: Process A at [3, 1, 2] means A has seen 3 of its own events, 1 from B, 2 from C</p>
                </div>

                <div class="drag-container">
                    <div class="drag-source">
                        <h4>Drag events in causal order:</h4>
                        <div class="draggable-item" data-order="3">C receives message from B</div>
                        <div class="draggable-item" data-order="1">A sends message to B</div>
                        <div class="draggable-item" data-order="2">B processes A's message</div>
                        <div class="draggable-item" data-order="4">A and C do concurrent events</div>
                    </div>
                    <div class="drop-zone" id="causalOrder">
                        <h4>Correct Causal Order →</h4>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>📮 Logical Clock Memory:</strong><br>
                <strong>Lamport</strong> = "LAMP POST" numbers (just ordering, like house numbers)<br>
                <strong>Vector</strong> = "VECTOR like GPS coordinates" (shows exact position in time)<br><br>
                Think: Lamport = "What happened first?" Vector = "What caused what?"<br>
                <em>"Postman (Lamport) delivers in order, GPS (Vector) shows exact location!"</em>
            `,
            quiz: {
                question: "Process A has timestamp [2,1,0] and receives a message with timestamp [1,3,2]. What's A's new timestamp?",
                options: [
                    "[2,1,0] - no change",
                    "[3,3,2] - max of each position + 1 for A",
                    "[2,3,2] - just take the max",
                    "[1,3,2] - copy the received timestamp"
                ],
                correct: 1,
                explanation: "Take max of each position: max(2,1)=2, max(1,3)=3, max(0,2)=2, then increment A's position: [3,3,2]!"
            }
        },
        {
            id: 3,
            title: "Mutual Exclusion - One at a Time Please!",
            content: `
                <h3>🚪 The Critical Section Problem</h3>
                <p>Only ONE process can access the shared resource at a time!</p>
                <p>Like a bathroom - only one person allowed! 🚽</p>

                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 20px 0;">
                    <div style="background: #fff3cd; padding: 15px; border-radius: 8px;">
                        <h4>👑 Centralized</h4>
                        <p>One coordinator grants permission</p>
                        <div class="mermaid">
                        graph TD
                            A[Coordinator] 
                            B[Client 1] --> A
                            C[Client 2] --> A
                            D[Client 3] --> A
                            A --> B
                            style A fill:#ffeb3b
                        </div>
                        <p>✅ Simple, fair<br>❌ Single point of failure</p>
                    </div>

                    <div style="background: #d1ecf1; padding: 15px; border-radius: 8px;">
                        <h4>📢 Distributed</h4>
                        <p>Broadcast request to everyone</p>
                        <p>Wait for ALL replies</p>
                        <div class="mermaid">
                        graph TD
                            A[Process 1] --> B[Process 2]
                            A --> C[Process 3]
                            A --> D[Process 4]
                            B --> A
                            C --> A
                            D --> A
                            style A fill:#4caf50
                        </div>
                        <p>✅ No single point of failure<br>❌ Lots of messages</p>
                    </div>

                    <div style="background: #e1f5fe; padding: 15px; border-radius: 8px;">
                        <h4>🎯 Token Ring</h4>
                        <p>Token circulates in logical ring</p>
                        <p>Hold token = enter critical section</p>
                        <div class="mermaid">
                        graph LR
                            A[Process 1] --> B[Process 2]
                            B --> C[Process 3]
                            C --> D[Process 4]
                            D --> A
                            style B fill:#ff9800
                        </div>
                        <p>✅ Fair, no starvation<br>❌ Token can be lost</p>
                    </div>
                </div>

                <div class="quiz-immediate">
                    <h4>🎮 Mutual Exclusion Simulator</h4>
                    <p>Click the method that would work best for 100 processes:</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkMutex(this, false)">Centralized (100 messages to coordinator)</div>
                        <div class="quiz-option" onclick="checkMutex(this, false)">Distributed (100×99 = 9,900 messages!)</div>
                        <div class="quiz-option" onclick="checkMutex(this, true)">Token Ring (1 token, 100 messages max)</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🚪 Mutual Exclusion Memory:</strong><br>
                <strong>Centralized</strong> = "CENTRAL BATHROOM KEY" (one key, one keeper)<br>
                <strong>Distributed</strong> = "ASK EVERYONE'S PERMISSION" (like planning a party)<br>
                <strong>Token Ring</strong> = "HOT POTATO game" (pass it around)<br><br>
                <em>"Bathroom key = Centralized, Party planning = Distributed, Hot potato = Token!"</em>
            `,
            quiz: {
                question: "What's the main advantage of the token ring approach for mutual exclusion?",
                options: [
                    "It's the fastest method",
                    "It guarantees no process will starve (wait forever)",
                    "It requires the fewest total messages",
                    "It works even when processes crash"
                ],
                correct: 1,
                explanation: "Token ring guarantees fairness - everyone gets a turn eventually, so no process starves!"
            }
        },
        {
            id: 4,
            title: "Election Algorithms - Who's the Boss?",
            content: `
                <h3>👑 Electing a Coordinator</h3>
                <p>When the coordinator crashes, who takes over?</p>
                <p>Time for an ELECTION! 🗳️</p>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div style="background: #ffebee; padding: 20px; border-radius: 10px;">
                        <h4>💪 Bully Algorithm</h4>
                        <p><strong>Rule:</strong> Process with highest ID wins!</p>
                        
                        <div style="background: white; padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p><strong>Steps:</strong></p>
                            <ol style="margin-left: 20px; font-size: 0.9em;">
                                <li>Detect coordinator is down</li>
                                <li>Send ELECTION to all higher IDs</li>
                                <li>If no response, you're coordinator!</li>
                                <li>If response, wait for COORDINATOR message</li>
                            </ol>
                        </div>

                        <div class="mermaid">
                        graph TD
                            A[Process 1] 
                            B[Process 2]
                            C[Process 3 CRASH]
                            D[Process 4]
                            E[Process 5]
                            
                            B -->|ELECTION| D
                            B -->|ELECTION| E
                            E -->|OK| B
                            E -->|COORDINATOR| A
                            E -->|COORDINATOR| B
                            E -->|COORDINATOR| D
                            
                            style C fill:#ff5252
                            style E fill:#4caf50
                        </div>
                    </div>

                    <div style="background: #e8f5e8; padding: 20px; border-radius: 10px;">
                        <h4>🔄 Ring Algorithm</h4>
                        <p><strong>Rule:</strong> Pass election message around ring</p>
                        
                        <div style="background: white; padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p><strong>Steps:</strong></p>
                            <ol style="margin-left: 20px; font-size: 0.9em;">
                                <li>Add your ID to election message</li>
                                <li>Pass message to next process</li>
                                <li>When message returns, highest ID wins!</li>
                                <li>Send COORDINATOR message around ring</li>
                            </ol>
                        </div>

                        <div class="mermaid">
                        graph LR
                            A[1] --> B[2]
                            B --> C[3]
                            C --> D[4] 
                            D --> E[5]
                            E --> A
                            
                            style D fill:#ff9800
                            style E fill:#4caf50
                        </div>
                        <p style="text-align: center; font-size: 0.9em;">Election: [2,4,5] → Process 5 wins!</p>
                    </div>
                </div>

                <div class="drag-container">
                    <div class="drag-source">
                        <h4>Election scenarios - drag to correct algorithm:</h4>
                        <div class="draggable-item" data-type="bully">Process 2 sends to all higher processes</div>
                        <div class="draggable-item" data-type="ring">Message travels in circle collecting IDs</div>
                        <div class="draggable-item" data-type="bully">"I'm the coordinator!" (if no higher response)</div>
                        <div class="draggable-item" data-type="ring">Everyone sees the same election message</div>
                    </div>
                    <div class="drop-zone" id="bullyAlgo">Bully Algorithm</div>
                    <div class="drop-zone" id="ringAlgo">Ring Algorithm</div>
                </div>
            `,
            memoryHack: `
                <strong>👑 Election Memory Tricks:</strong><br>
                <strong>Bully</strong> = "PLAYGROUND BULLY" (biggest kid becomes boss)<br>
                <strong>Ring</strong> = "TELEPHONE GAME" (message goes around circle)<br><br>
                Think: Bully = "I'm bigger than you!", Ring = "Pass the message around"<br>
                <em>"Bully fights upward, Ring shares with everyone!"</em>
            `,
            quiz: {
                question: "In the Bully algorithm, Process 3 wants to start an election. Processes 1,2,4,5 are alive. Who will become coordinator?",
                options: [
                    "Process 3 (the one who started election)",
                    "Process 5 (highest ID)", 
                    "Process 1 (lowest ID)",
                    "They'll have a tie"
                ],
                correct: 1,
                explanation: "In Bully algorithm, the process with the highest ID always wins - that's Process 5!"
            }
        },
        {
            id: 5,
            title: "Totally Ordered Multicast - Everyone Agrees!",
            content: `
                <h3>📢 Making Sure Everyone Sees Messages in Same Order</h3>
                <p>Imagine replicated databases - they MUST process updates in identical order!</p>
                <p>Otherwise: Database A thinks balance = $100, Database B thinks balance = $50! 😱</p>

                <div style="background: #f3e5f5; padding: 20px; border-radius: 10px; margin: 15px 0;">
                    <h4>🎯 The Problem:</h4>
                    <div class="mermaid">
                    sequenceDiagram
                        participant S1 as Site 1
                        participant S2 as Site 2
                        participant S3 as Site 3
                        
                        Note over S1,S3: Without total ordering:
                        S1->>S2: Deposit $50
                        S1->>S3: Deposit $50
                        S2->>S1: Withdraw $30
                        S2->>S3: Withdraw $30
                        
                        Note over S1: Sees: +$50, -$30 = $20
                        Note over S3: Sees: -$30, +$50 = $20
                        Note over S2: Might see different order!
                    </div>
                </div>

                <div style="background: #e8f5e8; padding: 20px; border-radius: 10px; margin: 15px 0;">
                    <h4>✅ The Solution: Totally Ordered Multicast</h4>
                    <ol style="margin-left: 20px;">
                        <li><strong>Use logical timestamps</strong> (Lamport clocks)</li>
                        <li><strong>Buffer messages</strong> until you can deliver in order</li>
                        <li><strong>All sites deliver messages in same timestamp order</strong></li>
                        <li><strong>Result:</strong> All replicas stay consistent! 🎉</li>
                    </ol>
                </div>

                <div class="drag-container">
                    <div class="drag-source">
                        <h4>Sort these messages by timestamp (delivery order):</h4>
                        <div class="draggable-item" data-timestamp="15">Message C (timestamp 15)</div>
                        <div class="draggable-item" data-timestamp="8">Message A (timestamp 8)</div>
                        <div class="draggable-item" data-timestamp="12">Message B (timestamp 12)</div>
                        <div class="draggable-item" data-timestamp="20">Message D (timestamp 20)</div>
                    </div>
                    <div class="drop-zone" id="deliveryOrder">
                        <h4>Correct Delivery Order →</h4>
                    </div>
                </div>

                <div class="quiz-immediate">
                    <h4>🎮 Banking Simulation</h4>
                    <p>Two operations arrive: "Deposit $100" (timestamp 5) and "Check balance" (timestamp 3)</p>
                    <p>What should happen?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkOrder(this, true)">Check balance first, then deposit (timestamp order)</div>
                        <div class="quiz-option" onclick="checkOrder(this, false)">Deposit first, then check balance (arrival order)</div>
                        <div class="quiz-option" onclick="checkOrder(this, false)">Process them simultaneously</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>📢 Multicast Memory:</strong><br>
                <strong>Total Order</strong> = "GRADUATION CEREMONY" (everyone goes in same order)<br>
                <strong>Timestamp</strong> = "TICKET NUMBERS" (lower number goes first)<br>
                <strong>Buffer</strong> = "WAITING ROOM" (wait until your number is called)<br><br>
                <em>"Everyone graduates in ticket number order, no cutting in line!"</em>
            `,
            quiz: {
                question: "Why is totally ordered multicast crucial for replicated databases?",
                options: [
                    "It makes the system faster",
                    "It ensures all replicas process operations in the same order", 
                    "It reduces network traffic",
                    "It prevents database crashes"
                ],
                correct: 1,
                explanation: "Without total ordering, replicas might process the same operations in different orders, leading to inconsistent data!"
            }
        }
    ]
};

// Enhanced peg words for synchronization
const synchronizationPegWords = {
    "clock sync": "⏰ ALARM CLOCKS ringing together",
    "cristian": "✝️ CHRISTIAN asks God for time",
    "berkeley": "🎓 BERKELEY UNIVERSITY averages grades", 
    "ntp": "🏔️ NETWORK TIME PYRAMID (hierarchy)",
    "lamport": "📮 POSTMARK timestamp on letter",
    "vector clock": "📊 SCOREBOARD showing all scores",
    "happened-before": "🔗 FAMILY TREE (ancestors come first)",
    "mutual exclusion": "🚪 BATHROOM door (only one at a time)",
    "centralized": "👑 KING grants permission",
    "distributed": "🗳️ DEMOCRACY (ask everyone)",
    "token ring": "🎯 HOT POTATO passed around",
    "bully algorithm": "💪 PLAYGROUND BULLY (biggest wins)",
    "ring algorithm": "📞 TELEPHONE GAME (pass message around)",
    "total order": "🎓 GRADUATION LINE (everyone same order)",
    "multicast": "📢 MEGAPHONE announcement to all"
}; 