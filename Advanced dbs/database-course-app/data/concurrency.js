const concurrencyData = {
    title: "⚡ Concurrency Control Techniques",
    icon: "⚡",
    chunks: [
        {
            title: "🎯 Why Concurrency Control?",
            content: `
                <h3>🎯 The Traffic Control Problem</h3>
                <p>Imagine multiple transactions accessing the same data simultaneously - it's like cars at an intersection!</p>
                
                <div class="mermaid">
                graph TD
                    T1["🚗 Transaction 1<br/>READ(A), WRITE(A)"] 
                    T2["🚙 Transaction 2<br/>READ(A), WRITE(A)"]
                    T3["🚕 Transaction 3<br/>READ(B), WRITE(B)"]
                    
                    T1 --> Data["💾 Database<br/>A = 100, B = 200"]
                    T2 --> Data
                    T3 --> Data
                    
                    Data --> Problems["⚠️ Without Control:<br/>Lost Updates<br/>Dirty Reads<br/>Inconsistent Analysis"]
                </div>

                <h4>🚧 The ACID Properties</h4>
                <ul>
                    <li><strong>⚛️ Atomicity:</strong> All or nothing execution</li>
                    <li><strong>🔒 Consistency:</strong> Database remains valid</li>
                    <li><strong>🏝️ Isolation:</strong> Transactions don't interfere</li>
                    <li><strong>💾 Durability:</strong> Changes survive crashes</li>
                </ul>

                <div class="quiz-immediate">
                    <h4>🚦 Traffic Light Challenge</h4>
                    <p>Two transactions both read balance = $1000, then each adds $100. Without control, what's the final balance?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkConcurrency(this, false)">$1200 (correct result)</div>
                        <div class="quiz-option" onclick="checkConcurrency(this, true)">$1100 (lost update problem)</div>
                        <div class="quiz-option" onclick="checkConcurrency(this, false)">$1000 (no change)</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🚦 TRAFFIC CONTROL Memory:</strong><br>
                <strong>ATOMICITY</strong> = "ALL OR NOTHING PACKAGE" (complete delivery)<br>
                <strong>CONSISTENCY</strong> = "BALANCE SHEET" (always balanced)<br>
                <strong>ISOLATION</strong> = "PRIVATE BOOTHS" (no peeking)<br>
                <strong>DURABILITY</strong> = "PERMANENT INK" (can't erase)<br><br>
                <em>"Database traffic needs strict rules!"</em>
            `,
            quiz: {
                question: "Which ACID property prevents the 'lost update' problem?",
                options: [
                    "Atomicity",
                    "Consistency", 
                    "Isolation",
                    "Durability"
                ],
                correct: 2,
                explanation: "Isolation ensures transactions don't interfere with each other, preventing one transaction from overwriting another's changes!"
            }
        },
        {
            title: "🔐 Lock-Based Protocols",
            content: `
                <h3>🔐 The Locking Library System</h3>
                <p>Locks are like checking out books from a library:</p>
                
                <div class="drag-drop-area">
                    <div class="drag-items">
                        <h4>📚 Lock Types</h4>
                        <div class="drag-item" draggable="true" data-type="shared">👥 Shared Lock (S)</div>
                        <div class="drag-item" draggable="true" data-type="exclusive">🔒 Exclusive Lock (X)</div>
                        <div class="drag-item" draggable="true" data-type="intent-shared">👀 Intent Shared (IS)</div>
                        <div class="drag-item" draggable="true" data-type="intent-exclusive">✏️ Intent Exclusive (IX)</div>
                    </div>
                    <div class="drop-zones">
                        <div class="drop-zone" data-accepts="shared">Multiple readers allowed</div>
                        <div class="drop-zone" data-accepts="exclusive">Only one writer allowed</div>
                        <div class="drop-zone" data-accepts="intent-shared">Planning to read subtree</div>
                        <div class="drop-zone" data-accepts="intent-exclusive">Planning to write subtree</div>
                    </div>
                </div>

                <h4>🔄 Lock Compatibility Matrix</h4>
                <div class="mermaid">
                graph TD
                    subgraph "Lock Compatibility"
                        S1["👥 Shared"] -.->|✅ Compatible| S2["👥 Shared"]
                        S1 -.->|❌ Incompatible| X1["🔒 Exclusive"]
                        X1 -.->|❌ Incompatible| S3["👥 Shared"]
                        X1 -.->|❌ Incompatible| X2["🔒 Exclusive"]
                    end
                </div>

                <div class="quiz-immediate">
                    <h4>📚 Library Scenario</h4>
                    <p>Transaction A has a Shared lock on a record. Can Transaction B get a Shared lock on the same record?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkLocks(this, true)">Yes - multiple readers can share</div>
                        <div class="quiz-option" onclick="checkLocks(this, false)">No - only one lock at a time</div>
                        <div class="quiz-option" onclick="checkLocks(this, false)">Only if A releases first</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>📚 LIBRARY LOCKS Memory:</strong><br>
                <strong>SHARED LOCK</strong> = "READING ROOM" (many readers)<br>
                <strong>EXCLUSIVE LOCK</strong> = "EDITOR'S OFFICE" (one writer)<br>
                <strong>INTENT SHARED</strong> = "BROWSING AISLE" (looking around)<br>
                <strong>INTENT EXCLUSIVE</strong> = "RESERVED DESK" (planning to write)<br><br>
                <em>"Libraries: many can read, only one can edit!"</em>
            `,
            quiz: {
                question: "What happens when a transaction requests an Exclusive lock on data that already has a Shared lock?",
                options: [
                    "Gets the lock immediately",
                    "Waits until Shared lock is released",
                    "Gets a Shared lock instead",
                    "Transaction is aborted"
                ],
                correct: 1,
                explanation: "Exclusive locks are incompatible with any other locks, so the transaction must wait in the queue until all current locks are released!"
            }
        },
        {
            title: "📈 Two-Phase Locking (2PL)",
            content: `
                <h3>📈 The Mountain Climbing Protocol</h3>
                <p>2PL is like climbing a mountain - you acquire locks going up, release them going down:</p>
                
                <div class="mermaid">
                graph TD
                    Start["🚀 Transaction Start"] --> Growing["📈 Growing Phase<br/>Acquire locks only"]
                    Growing --> Peak["⛰️ Lock Point<br/>Maximum locks held"]
                    Peak --> Shrinking["📉 Shrinking Phase<br/>Release locks only"]
                    Shrinking --> End["🏁 Transaction End"]
                    
                    Growing -.->|❌ Can't Release| Growing
                    Shrinking -.->|❌ Can't Acquire| Shrinking
                </div>

                <h4>🔍 2PL Variants</h4>
                <ul>
                    <li><strong>🔒 Basic 2PL:</strong> Release locks at any time (during shrinking)</li>
                    <li><strong>🛡️ Conservative 2PL:</strong> Acquire ALL locks before starting</li>
                    <li><strong>⏰ Strict 2PL:</strong> Release exclusive locks at commit only</li>
                    <li><strong>💎 Rigorous 2PL:</strong> Release ALL locks at commit only</li>
                </ul>

                <div class="quiz-immediate">
                    <h4>⛰️ Mountain Climbing Rule Check</h4>
                    <p>A transaction is in the shrinking phase. Can it acquire a new lock?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="check2PL(this, false)">Yes, if needed for the operation</div>
                        <div class="quiz-option" onclick="check2PL(this, true)">No, violates 2PL protocol</div>
                        <div class="quiz-option" onclick="check2PL(this, false)">Only if it's an exclusive lock</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>⛰️ MOUNTAIN CLIMBING Memory:</strong><br>
                <strong>GROWING PHASE</strong> = "CLIMBING UP" (collecting gear)<br>
                <strong>SHRINKING PHASE</strong> = "CLIMBING DOWN" (dropping gear)<br>
                <strong>LOCK POINT</strong> = "MOUNTAIN PEAK" (maximum altitude)<br>
                <strong>2PL RULE</strong> = "NO PICKING UP WHILE DESCENDING"<br><br>
                <em>"Once you start descending, you can't pick up new gear!"</em>
            `,
            quiz: {
                question: "What's the main advantage of Strict 2PL over Basic 2PL?",
                options: [
                    "Better performance",
                    "Prevents cascading rollbacks",
                    "Uses fewer locks",
                    "Allows more concurrency"
                ],
                correct: 1,
                explanation: "Strict 2PL holds exclusive locks until commit, preventing other transactions from reading uncommitted data that might need to be rolled back!"
            }
        },
        {
            title: "💀 Deadlock Detection & Prevention",
            content: `
                <h3>💀 The Circular Waiting Problem</h3>
                <p>Deadlock is like cars stuck in a traffic circle - everyone waiting for someone else!</p>
                
                <div class="mermaid">
                graph TD
                    T1["🚗 Transaction 1<br/>Has: Lock A<br/>Wants: Lock B"] 
                    T2["🚙 Transaction 2<br/>Has: Lock B<br/>Wants: Lock A"]
                    
                    T1 -->|Waiting for| T2
                    T2 -->|Waiting for| T1
                    
                    T1 -.->|💀 DEADLOCK!| T2
                </div>

                <h4>🛡️ Deadlock Prevention Strategies</h4>
                <div class="drag-drop-area">
                    <div class="drag-items">
                        <h4>⚔️ Prevention Methods</h4>
                        <div class="drag-item" draggable="true" data-type="wait-die">⏰ Wait-Die</div>
                        <div class="drag-item" draggable="true" data-type="wound-wait">🗡️ Wound-Wait</div>
                        <div class="drag-item" draggable="true" data-type="cautious">🐌 Cautious Waiting</div>
                    </div>
                    <div class="drop-zones">
                        <div class="drop-zone" data-accepts="wait-die">Older waits, younger dies</div>
                        <div class="drop-zone" data-accepts="wound-wait">Older wounds, younger waits</div>
                        <div class="drop-zone" data-accepts="cautious">Wait only if no cycle possible</div>
                    </div>
                </div>

                <div class="quiz-immediate">
                    <h4>⚔️ Battle Royale Scenario</h4>
                    <p>Using Wait-Die: Old transaction (T1) wants a lock held by Young transaction (T2). What happens?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkDeadlock(this, true)">T1 waits (older can wait for younger)</div>
                        <div class="quiz-option" onclick="checkDeadlock(this, false)">T1 dies (gives up and restarts)</div>
                        <div class="quiz-option" onclick="checkDeadlock(this, false)">T2 dies (younger gives way)</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>⚔️ MEDIEVAL BATTLE Memory:</strong><br>
                <strong>WAIT-DIE</strong> = "WISE ELDER waits, YOUNG FOOL dies"<br>
                <strong>WOUND-WAIT</strong> = "VETERAN WOUNDS rookie, rookie waits"<br>
                <strong>CAUTIOUS WAITING</strong> = "LOOK BEFORE YOU LEAP"<br>
                <strong>DEADLOCK</strong> = "MEXICAN STANDOFF" (nobody moves)<br><br>
                <em>"Age and wisdom have their privileges!"</em>
            `,
            quiz: {
                question: "In the Wound-Wait scheme, what does an older transaction do when it needs a lock held by a younger transaction?",
                options: [
                    "Waits patiently",
                    "Dies and restarts",
                    "Forces the younger to abort",
                    "Skips the operation"
                ],
                correct: 2,
                explanation: "In Wound-Wait, older transactions are more aggressive - they 'wound' (abort) younger transactions to get their locks!"
            }
        },
        {
            title: "⏰ Timestamp Ordering",
            content: `
                <h3>⏰ The Time Machine Database</h3>
                <p>Every transaction gets a timestamp - like a boarding pass number determining order:</p>
                
                <div class="mermaid">
                graph LR
                    T1["🎫 T1 (timestamp: 001)"] 
                    T2["🎫 T2 (timestamp: 002)"]
                    T3["🎫 T3 (timestamp: 003)"]
                    
                    T1 -->|Earlier = Higher Priority| Data["💾 Data Item X<br/>Read_TS: 002<br/>Write_TS: 001"]
                    T2 --> Data
                    T3 --> Data
                </div>

                <h4>📋 Timestamp Rules</h4>
                <ul>
                    <li><strong>📖 Read Rule:</strong> If TS(T) < Write_TS(X), reject (reading old data)</li>
                    <li><strong>✍️ Write Rule:</strong> If TS(T) < Read_TS(X), reject (overwriting needed data)</li>
                    <li><strong>🔄 Thomas Write Rule:</strong> If TS(T) < Write_TS(X), ignore (obsolete write)</li>
                </ul>

                <div class="quiz-immediate">
                    <h4>⏰ Time Travel Scenario</h4>
                    <p>Data X has Read_TS=5, Write_TS=3. Transaction with TS=4 wants to READ X. What happens?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkTimestamp(this, true)">Read allowed (TS=4 > Write_TS=3)</div>
                        <div class="quiz-option" onclick="checkTimestamp(this, false)">Read rejected (violates timestamp order)</div>
                        <div class="quiz-option" onclick="checkTimestamp(this, false)">Transaction aborted immediately</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>⏰ TIME MACHINE Memory:</strong><br>
                <strong>TIMESTAMP</strong> = "BOARDING PASS NUMBER" (order matters)<br>
                <strong>READ_TS</strong> = "LAST READER'S TICKET" (who read last)<br>
                <strong>write_TS</strong> = "LAST WRITER'S TICKET" (who wrote last)<br>
                <strong>REJECT</strong> = "BOARDING DENIED" (wrong time)<br><br>
                <em>"Time travelers must follow chronological order!"</em>
            `,
            quiz: {
                question: "What's the main advantage of timestamp ordering over locking?",
                options: [
                    "Uses less memory",
                    "No deadlocks possible",
                    "Faster execution",
                    "Better concurrency"
                ],
                correct: 1,
                explanation: "Since transactions are ordered by timestamp rather than waiting for locks, circular waiting (deadlock) is impossible!"
            }
        },
        {
            title: "📚 Multiversion Concurrency Control",
            content: `
                <h3>📚 The Time Library System</h3>
                <p>MVCC keeps multiple versions of data - like a library with different editions of books:</p>
                
                <div class="mermaid">
                graph TD
                    Data["💾 Data Item X"] 
                    V1["📖 Version 1<br/>Value: 100<br/>TS: 001-005"]
                    V2["📖 Version 2<br/>Value: 150<br/>TS: 006-010"] 
                    V3["📖 Version 3<br/>Value: 200<br/>TS: 011-∞"]
                    
                    Data --> V1
                    Data --> V2
                    Data --> V3
                    
                    T4["🎫 T4 (TS: 004)"] -.->|Reads| V1
                    T8["🎫 T8 (TS: 008)"] -.->|Reads| V2
                    T12["🎫 T12 (TS: 012)"] -.->|Reads| V3
                </div>

                <h4>🔍 Version Selection Rules</h4>
                <ul>
                    <li><strong>📖 Read:</strong> Select version with largest TS ≤ transaction's TS</li>
                    <li><strong>✍️ Write:</strong> Create new version with transaction's TS</li>
                    <li><strong>🗑️ Cleanup:</strong> Remove versions no longer needed</li>
                </ul>

                <div class="quiz-immediate">
                    <h4>📚 Library Time Travel</h4>
                    <p>Versions exist with TS: 5, 10, 15. Transaction with TS=12 wants to read. Which version?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkMVCC(this, false)">Version with TS=5 (earliest)</div>
                        <div class="quiz-option" onclick="checkMVCC(this, true)">Version with TS=10 (largest ≤ 12)</div>
                        <div class="quiz-option" onclick="checkMVCC(this, false)">Version with TS=15 (latest)</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>📚 TIME LIBRARY Memory:</strong><br>
                <strong>VERSIONS</strong> = "BOOK EDITIONS" (1st, 2nd, 3rd edition)<br>
                <strong>TIMESTAMP</strong> = "PUBLICATION DATE" (when edition released)<br>
                <strong>READ RULE</strong> = "LATEST EDITION YOU CAN ACCESS"<br>
                <strong>WRITE</strong> = "PUBLISH NEW EDITION"<br><br>
                <em>"Read the latest edition available when you started!"</em>
            `,
            quiz: {
                question: "What's the main benefit of MVCC over traditional locking?",
                options: [
                    "Uses less storage space",
                    "Readers never block writers",
                    "Eliminates all conflicts",
                    "Provides perfect isolation"
                ],
                correct: 1,
                explanation: "In MVCC, readers access old versions while writers create new ones, so they never block each other - maximum concurrency!"
            }
        },
        {
            title: "✅ Optimistic Concurrency Control",
            content: `
                <h3>✅ The Trust But Verify System</h3>
                <p>Optimistic control assumes conflicts are rare - like an honor system with final checking:</p>
                
                <div class="mermaid">
                graph LR
                    Read["📖 Read Phase<br/>Work with local copies"] 
                    Validate["🔍 Validation Phase<br/>Check for conflicts"]
                    Write["✍️ Write Phase<br/>Apply changes if valid"]
                    
                    Read --> Validate
                    Validate -->|✅ No Conflicts| Write
                    Validate -->|❌ Conflicts Found| Abort["💥 Abort & Restart"]
                </div>

                <h4>🔍 Validation Rules</h4>
                <div class="drag-drop-area">
                    <div class="drag-items">
                        <h4>🎯 Conflict Checks</h4>
                        <div class="drag-item" draggable="true" data-type="read-write">📖➡️✍️ Read-Write Conflict</div>
                        <div class="drag-item" draggable="true" data-type="write-read">✍️➡️📖 Write-Read Conflict</div>
                        <div class="drag-item" draggable="true" data-type="write-write">✍️➡️✍️ Write-Write Conflict</div>
                    </div>
                    <div class="drop-zones">
                        <div class="drop-zone" data-accepts="read-write">T1 read X, T2 modified X</div>
                        <div class="drop-zone" data-accepts="write-read">T1 modified X, T2 read X</div>
                        <div class="drop-zone" data-accepts="write-write">T1 & T2 both modified X</div>
                    </div>
                </div>

                <div class="quiz-immediate">
                    <h4>🎓 Honor System Test</h4>
                    <p>When are conflicts detected in optimistic control?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkOptimistic(this, false)">When transaction starts</div>
                        <div class="quiz-option" onclick="checkOptimistic(this, false)">During read/write operations</div>
                        <div class="quiz-option" onclick="checkOptimistic(this, true)">At validation phase before commit</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🎓 HONOR SYSTEM Memory:</strong><br>
                <strong>READ PHASE</strong> = "STUDY PERIOD" (work freely)<br>
                <strong>VALIDATION</strong> = "EXAM PROCTORING" (check for cheating)<br>
                <strong>WRITE PHASE</strong> = "SUBMIT ANSWERS" (if honest)<br>
                <strong>ABORT</strong> = "ACADEMIC DISHONESTY" (start over)<br><br>
                <em>"Trust everyone, but verify before grading!"</em>
            `,
            quiz: {
                question: "When is optimistic concurrency control most effective?",
                options: [
                    "When conflicts are frequent",
                    "When conflicts are rare",
                    "When all transactions are read-only",
                    "When system load is high"
                ],
                correct: 1,
                explanation: "Optimistic control works best when conflicts are rare - if conflicts happen often, too many transactions will be aborted and restarted!"
            }
        },
        {
            title: "📊 Multiple Granularity Locking",
            content: `
                <h3>📊 The Corporate Hierarchy</h3>
                <p>MGL is like a company structure - lock at appropriate levels for efficiency:</p>
                
                <div class="mermaid">
                graph TD
                    DB["🏢 Database<br/>(Company)"] 
                    Table1["📋 Table 1<br/>(Department A)"]
                    Table2["📋 Table 2<br/>(Department B)"]
                    Page1["📄 Page 1<br/>(Team 1)"]
                    Page2["📄 Page 2<br/>(Team 2)"]
                    Record1["📝 Record 1<br/>(Employee A)"]
                    Record2["📝 Record 2<br/>(Employee B)"]
                    
                    DB --> Table1
                    DB --> Table2
                    Table1 --> Page1
                    Table1 --> Page2
                    Page1 --> Record1
                    Page1 --> Record2
                </div>

                <h4>🎯 Intention Locks</h4>
                <ul>
                    <li><strong>👁️ IS (Intent Shared):</strong> "Planning to read something below"</li>
                    <li><strong>✏️ IX (Intent Exclusive):</strong> "Planning to write something below"</li>
                    <li><strong>🔒 SIX (Shared + Intent Exclusive):</strong> "Reading all, writing some"</li>
                </ul>

                <div class="quiz-immediate">
                    <h4>🏢 Corporate Lock Strategy</h4>
                    <p>To get Exclusive lock on a record, what locks are needed on the path from database root?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkMGL(this, true)">IX locks on Database → Table → Page, X lock on Record</div>
                        <div class="quiz-option" onclick="checkMGL(this, false)">X locks on everything in the path</div>
                        <div class="quiz-option" onclick="checkMGL(this, false)">Only X lock on the record</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🏢 CORPORATE LADDER Memory:</strong><br>
                <strong>DATABASE</strong> = "CEO OFFICE" (top level)<br>
                <strong>TABLE</strong> = "DEPARTMENT HEAD" (middle management)<br>
                <strong>PAGE</strong> = "TEAM LEADER" (supervisor)<br>
                <strong>RECORD</strong> = "EMPLOYEE" (individual worker)<br>
                <strong>INTENTION LOCK</strong> = "MEETING REQUEST" (planning ahead)<br><br>
                <em>"Ask permission from your boss's boss first!"</em>
            `,
            quiz: {
                question: "What's the main advantage of Multiple Granularity Locking?",
                options: [
                    "Eliminates all deadlocks",
                    "Reduces the number of locks needed",
                    "Allows higher concurrency",
                    "Simplifies lock management"
                ],
                correct: 1,
                explanation: "Instead of locking every individual record, you can lock at table or page level when appropriate, dramatically reducing lock overhead!"
            }
        }
    ]
};

// Enhanced peg words for concurrency
const concurrencyPegWords = {
    "acid": "🧪 CHEMISTRY LAB (precise reactions)",
    "isolation": "🏝️ DESERT ISLAND (alone)",
    "atomicity": "⚛️ ATOM (indivisible)",
    "consistency": "⚖️ BALANCED SCALES (fair)",
    "durability": "💎 DIAMOND (forever)",
    "shared lock": "📚 LIBRARY READING ROOM (many readers)",
    "exclusive lock": "🔒 BATHROOM STALL (one person)",
    "two phase locking": "⛰️ MOUNTAIN CLIMB (up then down)",
    "deadlock": "🚗 TRAFFIC JAM (nobody moves)",
    "wait-die": "👴 OLD MAN waits, 👶 BABY dies",
    "wound-wait": "🗡️ SWORD wounds 🛡️ SHIELD waits",
    "timestamp": "🎫 CONCERT TICKET (order matters)",
    "mvcc": "📚 LIBRARY EDITIONS (multiple versions)",
    "optimistic": "🎓 HONOR SYSTEM (trust but verify)",
    "granularity": "🏢 CORPORATE HIERARCHY (levels)"
}; 