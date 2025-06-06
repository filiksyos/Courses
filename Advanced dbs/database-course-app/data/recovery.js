const recoveryData = {
    title: "🔄 Database Recovery Techniques",
    icon: "🔄",
    chunks: [
        {
            title: "🚑 Why Recovery is Critical",
            content: `
                <h3>🚑 The Digital Hospital System</h3>
                <p>Database recovery is like emergency medicine - bringing systems back to life after disasters:</p>
                
                <div class="mermaid">
                graph TD
                    Normal["💚 Healthy Database<br/>All transactions committed"] 
                    
                    Normal -->|System Crash| System["💥 System Failure<br/>Power outage, OS crash"]
                    Normal -->|Transaction Error| Trans["❌ Transaction Failure<br/>Division by zero, constraint violation"]
                    Normal -->|Hardware Death| Media["💾 Media Failure<br/>Disk crash, corruption"]
                    
                    System --> Recovery1["🚑 System Recovery<br/>UNDO uncommitted<br/>REDO committed"]
                    Trans --> Recovery2["🚑 Transaction Recovery<br/>ROLLBACK changes"]
                    Media --> Recovery3["🚑 Media Recovery<br/>Restore from backup<br/>Apply logs"]
                </div>

                <h4>🎯 Recovery Goals</h4>
                <ul>
                    <li><strong>⚛️ Atomicity:</strong> All-or-nothing transactions</li>
                    <li><strong>💾 Durability:</strong> Committed changes survive crashes</li>
                    <li><strong>🔄 Consistency:</strong> Database returns to valid state</li>
                </ul>

                <div class="quiz-immediate">
                    <h4>🚑 Emergency Room Triage</h4>
                    <p>The system crashes while Transaction A is committed but Transaction B is still running. What should recovery do?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkRecoveryBasics(this, true)">REDO A's changes, UNDO B's changes</div>
                        <div class="quiz-option" onclick="checkRecoveryBasics(this, false)">UNDO both A and B</div>
                        <div class="quiz-option" onclick="checkRecoveryBasics(this, false)">REDO both A and B</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🚑 EMERGENCY ROOM Memory:</strong><br>
                <strong>SYSTEM FAILURE</strong> = "POWER OUTAGE" (lights go out)<br>
                <strong>TRANSACTION FAILURE</strong> = "PATIENT ERROR" (wrong medicine)<br>
                <strong>MEDIA FAILURE</strong> = "HEART ATTACK" (organ failure)<br>
                <strong>RECOVERY</strong> = "CPR + SURGERY" (bring back to life)<br><br>
                <em>"Different emergencies need different treatments!"</em>
            `,
            quiz: {
                question: "Which type of failure requires restoring from backup?",
                options: [
                    "Transaction failure",
                    "System failure", 
                    "Media failure",
                    "Network failure"
                ],
                correct: 2,
                explanation: "Media failure means the storage device is damaged, so you must restore from backup and replay logs to recover!"
            }
        },
        {
            title: "📝 Transaction Logs",
            content: `
                <h3>📝 The Digital Diary</h3>
                <p>Transaction logs are like a detailed diary recording every database change:</p>
                
                <div class="mermaid">
                graph LR
                    Log["📖 Transaction Log"] --> Entry1["📝 [T1, START]"]
                    Log --> Entry2["📝 [T1, X, 100, 150]<br/>BFIM→AFIM"]
                    Log --> Entry3["📝 [T1, Y, 200, 250]<br/>BFIM→AFIM"]
                    Log --> Entry4["📝 [T1, COMMIT]"]
                    Log --> Entry5["📝 [T2, START]"]
                    Log --> Entry6["📝 [T2, Z, 300, 350]<br/>BFIM→AFIM"]
                    Log --> Entry7["📝 [CRASH!]"]
                </div>

                <h4>📋 Log Record Types</h4>
                <div class="drag-drop-area">
                    <div class="drag-items">
                        <h4>📝 Log Entry Types</h4>
                        <div class="drag-item" draggable="true" data-type="start">[T1, START]</div>
                        <div class="drag-item" draggable="true" data-type="update">[T1, X, old, new]</div>
                        <div class="drag-item" draggable="true" data-type="commit">[T1, COMMIT]</div>
                        <div class="drag-item" draggable="true" data-type="abort">[T1, ABORT]</div>
                        <div class="drag-item" draggable="true" data-type="checkpoint">[CHECKPOINT]</div>
                    </div>
                    <div class="drop-zones">
                        <div class="drop-zone" data-accepts="start">Transaction begins</div>
                        <div class="drop-zone" data-accepts="update">Data item changed (BFIM/AFIM)</div>
                        <div class="drop-zone" data-accepts="commit">Transaction successfully ends</div>
                        <div class="drop-zone" data-accepts="abort">Transaction cancelled</div>
                        <div class="drop-zone" data-accepts="checkpoint">Sync point for recovery</div>
                    </div>
                </div>

                <div class="quiz-immediate">
                    <h4>📖 Diary Detective Work</h4>
                    <p>Log shows: [T1, START], [T1, X, 100, 150], [CRASH]. What should recovery do with X?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkLogs(this, true)">Restore X to 100 (UNDO uncommitted)</div>
                        <div class="quiz-option" onclick="checkLogs(this, false)">Keep X as 150 (changes are valid)</div>
                        <div class="quiz-option" onclick="checkLogs(this, false)">Set X to NULL (uncertain value)</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>📖 DIARY DETECTIVE Memory:</strong><br>
                <strong>BFIM</strong> = "BEFORE PICTURE" (old mugshot)<br>
                <strong>AFIM</strong> = "AFTER PICTURE" (new mugshot)<br>
                <strong>START</strong> = "DEAR DIARY" (beginning entry)<br>
                <strong>COMMIT</strong> = "SIGNED AND SEALED" (final signature)<br>
                <strong>LOG</strong> = "DETECTIVE'S NOTEBOOK" (evidence trail)<br><br>
                <em>"Every crime leaves a paper trail!"</em>
            `,
            quiz: {
                question: "What does BFIM (Before Image) help with during recovery?",
                options: [
                    "REDO operations",
                    "UNDO operations",
                    "Log compression",
                    "Performance optimization"
                ],
                correct: 1,
                explanation: "BFIM stores the old value, which is needed to UNDO changes when rolling back uncommitted transactions!"
            }
        },
        {
            title: "💾 Buffer Management & WAL",
            content: `
                <h3>💾 The Memory-Disk Dance</h3>
                <p>Buffer management is like managing a busy kitchen - when to cook, when to serve:</p>
                
                <div class="mermaid">
                graph TD
                    subgraph "Buffer Pool (Kitchen)"
                        Clean["🟢 Clean Pages<br/>(Fresh ingredients)"]
                        Dirty["🔴 Dirty Pages<br/>(Cooked food)"]
                    end
                    
                    subgraph "Disk Storage (Pantry)"
                        Database["💾 Database<br/>(Main storage)"]
                        LogFile["📝 Log File<br/>(Recipe book)"]
                    end
                    
                    Clean -->|Read from disk| Database
                    Dirty -->|Write to disk| Database
                    LogFile -->|WAL Rule| Dirty
                </div>

                <h4>🏪 Cache Policies</h4>
                <div class="drag-drop-area">
                    <div class="drag-items">
                        <h4>🎛️ Policy Combinations</h4>
                        <div class="drag-item" draggable="true" data-type="steal-force">🔥 STEAL + FORCE</div>
                        <div class="drag-item" draggable="true" data-type="steal-no-force">⚡ STEAL + NO-FORCE</div>
                        <div class="drag-item" draggable="true" data-type="no-steal-force">🛡️ NO-STEAL + FORCE</div>
                        <div class="drag-item" draggable="true" data-type="no-steal-no-force">💎 NO-STEAL + NO-FORCE</div>
                    </div>
                    <div class="drop-zones">
                        <div class="drop-zone" data-accepts="steal-force">Need UNDO + REDO</div>
                        <div class="drop-zone" data-accepts="steal-no-force">Need UNDO only</div>
                        <div class="drop-zone" data-accepts="no-steal-force">Need REDO only</div>
                        <div class="drop-zone" data-accepts="no-steal-no-force">Need neither (simplest)</div>
                    </div>
                </div>

                <h4>📝 Write-Ahead Logging (WAL) Rules</h4>
                <ul>
                    <li><strong>🔒 WAL Rule:</strong> Log record must be written before data page</li>
                    <li><strong>💾 Commit Rule:</strong> All log records must be written before COMMIT</li>
                </ul>

                <div class="quiz-immediate">
                    <h4>👨‍🍳 Kitchen Management</h4>
                    <p>System uses STEAL policy. An uncommitted transaction's page is written to disk. What recovery capability is needed?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkWAL(this, true)">UNDO (uncommitted changes on disk)</div>
                        <div class="quiz-option" onclick="checkWAL(this, false)">REDO (committed changes lost)</div>
                        <div class="quiz-option" onclick="checkWAL(this, false)">Both UNDO and REDO</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>👨‍🍳 KITCHEN MANAGEMENT Memory:</strong><br>
                <strong>STEAL</strong> = "TAKE DIRTY DISHES" (write uncommitted)<br>
                <strong>NO-STEAL</strong> = "KEEP DIRTY DISHES" (wait for commit)<br>
                <strong>FORCE</strong> = "IMMEDIATE SERVICE" (write at commit)<br>
                <strong>NO-FORCE</strong> = "LAZY SERVICE" (write later)<br>
                <strong>WAL</strong> = "RECIPE FIRST" (log before data)<br><br>
                <em>"Log the recipe before cooking the dish!"</em>
            `,
            quiz: {
                question: "Why must log records be written before data pages (WAL rule)?",
                options: [
                    "To improve performance",
                    "To ensure recovery information exists before changes",
                    "To reduce disk space",
                    "To prevent conflicts"
                ],
                correct: 1,
                explanation: "If the system crashes after writing data but before writing the log, there's no record of what was changed - recovery becomes impossible!"
            }
        },
        {
            title: "🔄 UNDO and REDO Operations",
            content: `
                <h3>🔄 The Time Travel Operations</h3>
                <p>UNDO and REDO are like time travel - going backward and forward in history:</p>
                
                <div class="mermaid">
                graph LR
                    subgraph "Timeline"
                        T1["⏮️ Transaction Start"] 
                        T2["📝 Operation 1<br/>X: 100→150"]
                        T3["📝 Operation 2<br/>Y: 200→250"]
                        T4["💥 CRASH!"]
                    end
                    
                    T4 -->|UNDO (Backward)| T3
                    T3 -->|UNDO| T2
                    T2 -->|UNDO| T1
                    
                    T1 -->|REDO (Forward)| T2
                    T2 -->|REDO| T3
                    T3 -->|REDO| T4
                </div>

                <h4>⚙️ Operation Details</h4>
                <ul>
                    <li><strong>🔙 UNDO:</strong> Use BFIM (before image) to reverse changes</li>
                    <li><strong>🔄 REDO:</strong> Use AFIM (after image) to reapply changes</li>
                    <li><strong>🔍 Idempotent:</strong> Multiple UNDOs/REDOs produce same result</li>
                </ul>

                <div class="quiz-immediate">
                    <h4>🕰️ Time Machine Challenge</h4>
                    <p>Log: [T1, X, 100, 150], [T1, COMMIT], [T2, Y, 200, 250], [CRASH]. Recovery needs to:</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkUndoRedo(this, true)">REDO T1 (X=150), UNDO T2 (Y=200)</div>
                        <div class="quiz-option" onclick="checkUndoRedo(this, false)">UNDO both T1 and T2</div>
                        <div class="quiz-option" onclick="checkUndoRedo(this, false)">REDO both T1 and T2</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🕰️ TIME MACHINE Memory:</strong><br>
                <strong>UNDO</strong> = "BACK TO THE FUTURE" (reverse time)<br>
                <strong>REDO</strong> = "FAST FORWARD" (replay events)<br>
                <strong>BFIM</strong> = "OLD PHOTOGRAPH" (how it was)<br>
                <strong>AFIM</strong> = "NEW PHOTOGRAPH" (how it became)<br>
                <strong>IDEMPOTENT</strong> = "SAME MOVIE ENDING" (repeatable)<br><br>
                <em>"Time travel: go back with old photos, forward with new ones!"</em>
            `,
            quiz: {
                question: "Why is idempotency important for UNDO/REDO operations?",
                options: [
                    "It improves performance",
                    "It prevents infinite loops during recovery",
                    "It reduces log size",
                    "It allows safe repeated execution"
                ],
                correct: 3,
                explanation: "During recovery, operations might be repeated due to multiple crashes - idempotency ensures the final result is correct regardless of repetitions!"
            }
        },
        {
            title: "🔖 Checkpointing",
            content: `
                <h3>🔖 The Bookmark System</h3>
                <p>Checkpoints are like bookmarks in a book - they mark safe restart points:</p>
                
                <div class="mermaid">
                graph TD
                    Start["📖 Recovery Start"] --> FindCP["🔍 Find Last Checkpoint"]
                    FindCP --> Active["📋 List Active Transactions<br/>at checkpoint"]
                    Active --> ScanLog["🔍 Scan Forward from Checkpoint"]
                    ScanLog --> Undo["🔙 UNDO uncommitted transactions"]
                    ScanLog --> Redo["🔄 REDO committed transactions"]
                    Undo --> Complete["✅ Recovery Complete"]
                    Redo --> Complete
                </div>

                <h4>📸 Checkpoint Process</h4>
                <ol>
                    <li><strong>🛑 Suspend new transactions</strong></li>
                    <li><strong>💾 Force all dirty buffers to disk</strong></li>
                    <li><strong>📝 Write checkpoint record with active transaction list</strong></li>
                    <li><strong>🔄 Resume normal operations</strong></li>
                </ol>

                <div class="quiz-immediate">
                    <h4>🔖 Bookmark Recovery</h4>
                    <p>Checkpoint shows [T1, T2] active. After scanning forward: T1 committed, T2 still active, T3 started and committed. What to do?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkCheckpoint(this, true)">REDO T1 & T3, UNDO T2</div>
                        <div class="quiz-option" onclick="checkCheckpoint(this, false)">REDO all transactions</div>
                        <div class="quiz-option" onclick="checkCheckpoint(this, false)">UNDO all transactions</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🔖 BOOKMARK SYSTEM Memory:</strong><br>
                <strong>CHECKPOINT</strong> = "BOOKMARK PAGE" (where you stopped)<br>
                <strong>ACTIVE LIST</strong> = "CHARACTERS STILL ALIVE" (ongoing stories)<br>
                <strong>SCAN FORWARD</strong> = "READ FROM BOOKMARK" (continue story)<br>
                <strong>RECOVERY</strong> = "UNDERSTAND THE PLOT" (what happened)<br><br>
                <em>"Start reading from your bookmark, not the beginning!"</em>
            `,
            quiz: {
                question: "What's the main benefit of checkpointing?",
                options: [
                    "Eliminates the need for logs",
                    "Reduces recovery time by limiting log scanning",
                    "Prevents all types of failures",
                    "Improves transaction performance"
                ],
                correct: 1,
                explanation: "Checkpoints create safe restart points, so recovery only needs to scan logs from the last checkpoint instead of from the beginning of time!"
            }
        },
        {
            title: "📊 Recovery Schemes",
            content: `
                <h3>📊 The Recovery Playbook</h3>
                <p>Different recovery schemes are like different emergency protocols:</p>
                
                <div class="drag-drop-area">
                    <div class="drag-items">
                        <h4>🚑 Recovery Schemes</h4>
                        <div class="drag-item" draggable="true" data-type="deferred">⏰ Deferred Update</div>
                        <div class="drag-item" draggable="true" data-type="immediate">⚡ Immediate Update</div>
                        <div class="drag-item" draggable="true" data-type="shadow">👥 Shadow Paging</div>
                    </div>
                    <div class="drop-zones">
                        <div class="drop-zone" data-accepts="deferred">REDO only (no UNDO needed)</div>
                        <div class="drop-zone" data-accepts="immediate">UNDO + REDO both needed</div>
                        <div class="drop-zone" data-accepts="shadow">Copy-on-write pages</div>
                    </div>
                </div>

                <h4>🔍 Scheme Comparison</h4>
                <div class="mermaid">
                graph TD
                    subgraph "Deferred Update"
                        D1["✍️ Write to log only"] --> D2["💾 Apply at commit"]
                        D2 --> D3["🔄 REDO on crash"]
                    end
                    
                    subgraph "Immediate Update"
                        I1["✍️ Write to log + DB"] --> I2["💥 May crash anytime"]
                        I2 --> I3["🔄 UNDO + REDO"]
                    end
                    
                    subgraph "Shadow Paging"
                        S1["📄 Copy pages before update"] --> S2["🔄 Switch pointers at commit"]
                        S2 --> S3["🗑️ Discard old pages"]
                    end
                </div>

                <div class="quiz-immediate">
                    <h4>🚑 Emergency Protocol Choice</h4>
                    <p>A system never writes uncommitted changes to the database. Which recovery scheme is this?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkSchemes(this, true)">Deferred Update (NO-STEAL policy)</div>
                        <div class="quiz-option" onclick="checkSchemes(this, false)">Immediate Update (STEAL policy)</div>
                        <div class="quiz-option" onclick="checkSchemes(this, false)">Shadow Paging</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🚑 EMERGENCY PROTOCOLS Memory:</strong><br>
                <strong>DEFERRED</strong> = "WAIT FOR AMBULANCE" (treat at hospital)<br>
                <strong>IMMEDIATE</strong> = "FIELD SURGERY" (treat immediately)<br>
                <strong>SHADOW PAGING</strong> = "BACKUP DANCER" (copy ready)<br>
                <strong>REDO</strong> = "REPEAT TREATMENT" (do again)<br>
                <strong>UNDO</strong> = "REVERSE TREATMENT" (fix mistakes)<br><br>
                <em>"Different emergencies need different medical protocols!"</em>
            `,
            quiz: {
                question: "What's the main disadvantage of shadow paging?",
                options: [
                    "Requires UNDO operations",
                    "Cannot handle multiple transactions",
                    "High overhead for scattered updates",
                    "Doesn't support durability"
                ],
                correct: 2,
                explanation: "Shadow paging works well for clustered updates but has high overhead when updates are scattered across many pages - too many page copies needed!"
            }
        },
        {
            title: "🌐 Distributed Recovery",
            content: `
                <h3>🌐 The Global Coordination Challenge</h3>
                <p>Distributed recovery is like coordinating multiple hospitals across cities:</p>
                
                <div class="mermaid">
                graph TD
                    Coord["🎯 Coordinator<br/>(Central Hospital)"] 
                    
                    Coord -->|Phase 1: PREPARE| Site1["🏥 Site 1<br/>Can you commit?"]
                    Coord -->|Phase 1: PREPARE| Site2["🏥 Site 2<br/>Can you commit?"]
                    Coord -->|Phase 1: PREPARE| Site3["🏥 Site 3<br/>Can you commit?"]
                    
                    Site1 -->|YES/NO| Coord
                    Site2 -->|YES/NO| Coord
                    Site3 -->|YES/NO| Coord
                    
                    Coord -->|Phase 2: COMMIT/ABORT| Site1
                    Coord -->|Phase 2: COMMIT/ABORT| Site2
                    Coord -->|Phase 2: COMMIT/ABORT| Site3
                </div>

                <h4>🤝 Two-Phase Commit Protocol</h4>
                <ul>
                    <li><strong>📋 Phase 1 (Voting):</strong> "Can everyone commit?"</li>
                    <li><strong>✅ Phase 2 (Decision):</strong> "All commit or all abort"</li>
                    <li><strong>🔒 Blocking Protocol:</strong> Sites wait for coordinator</li>
                    <li><strong>⚡ Timeout Handling:</strong> Assume abort if no response</li>
                </ul>

                <div class="quiz-immediate">
                    <h4>🗳️ Global Voting Scenario</h4>
                    <p>Coordinator asks 3 sites to prepare. Site 1: YES, Site 2: YES, Site 3: NO. What happens?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="check2PC(this, true)">ALL sites abort (unanimous required)</div>
                        <div class="quiz-option" onclick="check2PC(this, false)">Sites 1 & 2 commit, Site 3 aborts</div>
                        <div class="quiz-option" onclick="check2PC(this, false)">Majority wins, so commit</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🌐 GLOBAL COORDINATION Memory:</strong><br>
                <strong>COORDINATOR</strong> = "UN SECRETARY GENERAL" (global leader)<br>
                <strong>PHASE 1</strong> = "PEACE TREATY VOTE" (can you agree?)<br>
                <strong>PHASE 2</strong> = "SIGNING CEREMONY" (make it official)<br>
                <strong>2PC</strong> = "UNANIMOUS DECISION" (all or nothing)<br>
                <strong>TIMEOUT</strong> = "DIPLOMATIC SILENCE" (assume no)<br><br>
                <em>"Global decisions need unanimous agreement!"</em>
            `,
            quiz: {
                question: "What happens if the coordinator crashes after sending PREPARE messages?",
                options: [
                    "All sites automatically commit",
                    "All sites automatically abort",
                    "Sites are blocked until coordinator recovers",
                    "Sites vote among themselves"
                ],
                correct: 2,
                explanation: "This is the main weakness of 2PC - if the coordinator crashes during the protocol, participant sites are blocked waiting for the final decision!"
            }
        }
    ]
};

// Enhanced peg words for recovery
const recoveryPegWords = {
    "system failure": "💡 POWER OUTAGE (lights out)",
    "transaction failure": "💊 WRONG MEDICINE (patient error)",
    "media failure": "💔 HEART ATTACK (organ death)",
    "bfim": "📷 OLD PHOTOGRAPH (before shot)",
    "afim": "📸 NEW PHOTOGRAPH (after shot)",
    "undo": "⏪ REWIND MOVIE (go backward)",
    "redo": "⏩ FAST FORWARD (replay scene)",
    "wal": "📝 RECIPE FIRST (log before cook)",
    "steal": "🍽️ DIRTY DISHES (take uncommitted)",
    "no-steal": "🧽 CLEAN KITCHEN (wait for commit)",
    "force": "🚚 EXPRESS DELIVERY (immediate write)",
    "no-force": "📬 REGULAR MAIL (write later)",
    "checkpoint": "🔖 BOOKMARK (safe restart point)",
    "deferred update": "🏥 HOSPITAL TREATMENT (treat when stable)",
    "immediate update": "🚑 FIELD SURGERY (treat immediately)",
    "shadow paging": "👯 BACKUP DANCER (copy ready)",
    "two phase commit": "🗳️ UNANIMOUS VOTE (all agree or none)"
}; 