// Placeholder for consistency data - to be implemented
const consistencyData = {
    title: "🔄 Chapter 6: Consistency & Replication", 
    chunks: [
        {
            id: 1,
            title: "Why Replicate? The Great Trade-off!",
            content: `
                <h3>🔄 The Replication Dilemma</h3>
                <p>Replication is like having multiple copies of your homework - great for backup, but keeping them all the same is tricky! 📚</p>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                    <div style="background: #e8f5e8; padding: 20px; border-radius: 10px;">
                        <h4>✅ Why We Want Replication</h4>
                        <ul style="margin-left: 20px;">
                            <li><strong>🛡️ Reliability:</strong> If one server crashes, others keep working!</li>
                            <li><strong>⚡ Performance:</strong> Serve users from nearby servers</li>
                            <li><strong>📍 Availability:</strong> Always accessible somewhere</li>
                        </ul>
                        
                        <div class="mermaid">
                        graph TD
                            A[User] --> B[Server USA]
                            A --> C[Server Europe] 
                            A --> D[Server Asia]
                            B --> E[Same Data]
                            C --> E
                            D --> E
                            style E fill:#4caf50
                        </div>
                    </div>

                    <div style="background: #f5e8e8; padding: 20px; border-radius: 10px;">
                        <h4>❌ The Problem: Inconsistency!</h4>
                        <ul style="margin-left: 20px;">
                            <li><strong>📝 Updates:</strong> Change one copy, others get out of sync</li>
                            <li><strong>⏱️ Timing:</strong> Updates arrive at different times</li>
                            <li><strong>🤔 Confusion:</strong> Which copy is "correct"?</li>
                        </ul>
                        
                        <div class="mermaid">
                        graph TD
                            A[Update: Price = $10] --> B[Server 1: $10]
                            A --> C[Server 2: $15]
                            A --> D[Server 3: $12]
                            style B fill:#4caf50
                            style C fill:#ff5252
                            style D fill:#ff9800
                        </div>
                    </div>
                </div>

                <div class="quiz-immediate">
                    <h4>🎮 Replication Scenario</h4>
                    <p>You have an online store with servers in 3 countries. A customer in Japan updates their address. What's the main challenge?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkReplication(this, false)">The servers will crash from too much load</div>
                        <div class="quiz-option" onclick="checkReplication(this, true)">Other servers might still show the old address temporarily</div>
                        <div class="quiz-option" onclick="checkReplication(this, false)">The customer will be charged multiple times</div>
                    </div>
                </div>

                <div class="drag-container">
                    <div class="drag-source">
                        <h4>Benefits vs Problems - drag to correct side:</h4>
                        <div class="draggable-item" data-type="benefit">Faster access for global users</div>
                        <div class="draggable-item" data-type="problem">Data might be outdated</div>
                        <div class="draggable-item" data-type="benefit">System works even if one server fails</div>
                        <div class="draggable-item" data-type="problem">Complex synchronization needed</div>
                    </div>
                    <div class="drop-zone" id="benefitZone">✅ Benefits of Replication</div>
                    <div class="drop-zone" id="problemZone">❌ Problems with Replication</div>
                </div>
            `,
            memoryHack: `
                <strong>🔄 Replication Memory:</strong><br>
                <strong>Replication</strong> = "PHOTOCOPIES of important document"<br>
                <strong>Benefit</strong> = "Multiple copies = safety backup"<br>
                <strong>Problem</strong> = "Updating all copies takes time"<br><br>
                <em>"Photocopies are great until you need to update them all!"</em>
            `,
            quiz: {
                question: "What's the fundamental trade-off in replication?",
                options: [
                    "Security vs Speed",
                    "Reliability/Performance vs Consistency",
                    "Storage space vs Memory",
                    "Local vs Remote access"
                ],
                correct: 1,
                explanation: "The classic replication trade-off: you gain reliability and performance, but lose consistency (keeping all copies identical)!"
            }
        },
        {
            id: 2,
            title: "Data-Centric Consistency Models",
            content: `
                <h3>📚 How Strict Should We Be About Order?</h3>
                <p>Different consistency models = different rules for keeping replicas in sync!</p>

                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 20px 0;">
                    <div style="background: #fff3cd; padding: 15px; border-radius: 8px;">
                        <h4>📖 Sequential Consistency</h4>
                        <p><strong>Rule:</strong> All processes see operations in same order</p>
                        <p>Like everyone reading the same book page by page!</p>
                        
                        <div style="background: white; padding: 10px; border-radius: 5px; margin: 10px 0; font-size: 0.8em;">
                            <p><strong>Example:</strong></p>
                            <p>Process A: Write X=1, Write Y=2</p>
                            <p>Process B: Read X=1, Read Y=2</p>
                            <p>✅ Everyone sees: X=1 then Y=2</p>
                        </div>
                    </div>

                    <div style="background: #d1ecf1; padding: 15px; border-radius: 8px;">
                        <h4>👨‍👩‍👧‍👦 Causal Consistency</h4>
                        <p><strong>Rule:</strong> Related operations stay in order</p>
                        <p>Like family relationships - parent before child!</p>
                        
                        <div style="background: white; padding: 10px; border-radius: 5px; margin: 10px 0; font-size: 0.8em;">
                            <p><strong>Example:</strong></p>
                            <p>A writes X=1, then B reads X=1, then B writes Y=2</p>
                            <p>✅ Order preserved: X=1 → Y=2</p>
                            <p>✅ Unrelated ops can be reordered</p>
                        </div>
                    </div>

                    <div style="background: #e1f5fe; padding: 15px; border-radius: 8px;">
                        <h4>🔐 Entry Consistency</h4>
                        <p><strong>Rule:</strong> Use locks/synchronization variables</p>
                        <p>Like a library - check out book before reading!</p>
                        
                        <div style="background: white; padding: 10px; border-radius: 5px; margin: 10px 0; font-size: 0.8em;">
                            <p><strong>Example:</strong></p>
                            <p>acquire(lock) → access shared data → release(lock)</p>
                            <p>✅ Only synchronized access is consistent</p>
                        </div>
                    </div>
                </div>

                <div class="mermaid">
                graph TD
                    A[Strict ← Consistency Models → Relaxed]
                    B[Sequential: Everyone same order]
                    C[Causal: Related events in order]
                    D[Entry: Only locked access consistent]
                    
                    A --> B
                    B --> C
                    C --> D
                    
                    style B fill:#ff9999
                    style C fill:#ffcc99
                    style D fill:#99ff99
                </div>

                <div class="drag-container">
                    <div class="drag-source">
                        <h4>Match the consistency model:</h4>
                        <div class="draggable-item" data-type="sequential">All processes see identical operation order</div>
                        <div class="draggable-item" data-type="causal">Parent-child relationships preserved</div>
                        <div class="draggable-item" data-type="entry">Must acquire lock before access</div>
                        <div class="draggable-item" data-type="sequential">Like everyone reading same book</div>
                    </div>
                    <div class="drop-zone" id="sequentialZone">Sequential Consistency</div>
                    <div class="drop-zone" id="causalZone">Causal Consistency</div>
                    <div class="drop-zone" id="entryZone">Entry Consistency</div>
                </div>
            `,
            memoryHack: `
                <strong>📚 Consistency Memory:</strong><br>
                <strong>Sequential</strong> = "LIBRARY BOOKS in order" (everyone same sequence)<br>
                <strong>Causal</strong> = "FAMILY TREE" (related events stay connected)<br>
                <strong>Entry</strong> = "LIBRARY CHECKOUT" (get permission first)<br><br>
                <em>"Books in order → Family relationships → Library checkout!"</em>
            `,
            quiz: {
                question: "Which consistency model allows the most flexibility (best performance)?",
                options: [
                    "Sequential consistency (strictest)",
                    "Causal consistency (medium strict)",
                    "Entry consistency (most relaxed)",
                    "They're all equally strict"
                ],
                correct: 2,
                explanation: "Entry consistency is most relaxed - only requires consistency for synchronized accesses, giving best performance!"
            }
        },
        {
            id: 3,
            title: "Client-Centric Consistency - Mobile Users!",
            content: `
                <h3>📱 Consistency for Users on the Go</h3>
                <p>What happens when you access your data from different locations? Client-centric models to the rescue!</p>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                    <div style="background: #f0f8ff; padding: 15px; border-radius: 8px;">
                        <h4>📖 Monotonic Read Consistency</h4>
                        <p><strong>Promise:</strong> You'll never see older data than what you've already seen</p>
                        <p>Like reading a book - never go backwards!</p>
                        
                        <div style="background: white; padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p><strong>Example:</strong> Check bank balance on phone: $100<br>
                            Later check on laptop: Must see ≥ $100, never $50!</p>
                        </div>

                        <h4>✍️ Monotonic Write Consistency</h4>
                        <p><strong>Promise:</strong> Your writes are applied in order</p>
                        <p>Like writing diary entries - they stay in order!</p>
                    </div>

                    <div style="background: #f0fff0; padding: 15px; border-radius: 8px;">
                        <h4>👀 Read-Your-Writes</h4>
                        <p><strong>Promise:</strong> You always see your own updates</p>
                        <p>Like posting on social media - you see your own posts!</p>
                        
                        <div style="background: white; padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p><strong>Example:</strong> Update profile picture<br>
                            When you refresh, you MUST see the new picture!</p>
                        </div>

                        <h4>🔄 Writes-Follow-Reads</h4>
                        <p><strong>Promise:</strong> Writes are ordered after reads that caused them</p>
                        <p>Like replying to an email - reply comes after reading!</p>
                    </div>
                </div>

                <div class="mermaid">
                sequenceDiagram
                    participant User as Mobile User
                    participant S1 as Server USA
                    participant S2 as Server Europe
                    
                    Note over User,S2: Monotonic Read Example:
                    User->>S1: Read balance = $100
                    User->>S2: Read balance 
                    S2->>User: Must be ≥ $100, never less!
                    
                    Note over User,S2: Read-Your-Writes Example:
                    User->>S1: Update status
                    User->>S2: Check my status
                    S2->>User: Must show YOUR update!
                </div>

                <div class="drag-container">
                    <div class="drag-source">
                        <h4>Match the scenario to the consistency model:</h4>
                        <div class="draggable-item" data-type="monotonic-read">Never see bank balance go backwards</div>
                        <div class="draggable-item" data-type="read-writes">See your own Facebook posts immediately</div>
                        <div class="draggable-item" data-type="monotonic-write">Your diary entries stay in order</div>
                        <div class="draggable-item" data-type="writes-reads">Reply to email after reading it</div>
                    </div>
                    <div class="drop-zone" id="monotonicReadZone">Monotonic Read</div>
                    <div class="drop-zone" id="readWritesZone">Read-Your-Writes</div>
                    <div class="drop-zone" id="monotonicWriteZone">Monotonic Write</div>
                    <div class="drop-zone" id="writesReadsZone">Writes-Follow-Reads</div>
                </div>
            `,
            memoryHack: `
                <strong>📱 Client-Centric Memory:</strong><br>
                <strong>Monotonic Read</strong> = "BOOK PAGES" (never go backwards)<br>
                <strong>Read-Your-Writes</strong> = "MIRROR REFLECTION" (always see yourself)<br>
                <strong>Monotonic Write</strong> = "DIARY ENTRIES" (in order)<br>
                <strong>Writes-Follow-Reads</strong> = "EMAIL REPLY" (after reading)<br><br>
                <em>"Book pages → Mirror → Diary → Email reply!"</em>
            `,
            quiz: {
                question: "You update your profile in New York, then immediately check it in London. Which consistency model ensures you see your update?",
                options: [
                    "Monotonic Read Consistency",
                    "Read-Your-Writes Consistency", 
                    "Monotonic Write Consistency",
                    "Writes-Follow-Reads Consistency"
                ],
                correct: 1,
                explanation: "Read-Your-Writes ensures you always see your own updates, no matter which server you connect to!"
            }
        },
        {
            id: 4,
            title: "Replica Management - Where to Put Copies?",
            content: `
                <h3>🗺️ Strategic Replica Placement</h3>
                <p>Not all replicas are created equal! Let's see the different types and strategies.</p>

                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 20px 0;">
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; text-align: center;">
                        <h4>🏛️ Permanent Replicas</h4>
                        <p>Fixed locations, always there</p>
                        <p>Like bank branches in major cities!</p>
                        
                        <div class="mermaid">
                        graph TD
                            A[Main Server] 
                            B[Backup NYC]
                            C[Backup London]
                            D[Backup Tokyo]
                            
                            A -.-> B
                            A -.-> C  
                            A -.-> D
                            
                            style A fill:#4caf50
                            style B fill:#2196f3
                            style C fill:#2196f3
                            style D fill:#2196f3
                        </div>
                        <p>✅ Always available<br>❌ Fixed locations</p>
                    </div>

                    <div style="background: #fff3cd; padding: 15px; border-radius: 8px; text-align: center;">
                        <h4>🎯 Server-Initiated</h4>
                        <p>Server decides where to replicate</p>
                        <p>Like opening store branches in busy areas!</p>
                        
                        <div style="background: white; padding: 10px; border-radius: 5px; margin: 10px 0; font-size: 0.8em;">
                            <p><strong>When to replicate:</strong></p>
                            <ul style="text-align: left; margin-left: 20px;">
                                <li>High demand from region</li>
                                <li>Network congestion</li>
                                <li>Load balancing needed</li>
                            </ul>
                        </div>
                        <p>✅ Smart placement<br>❌ Server overhead</p>
                    </div>

                    <div style="background: #f3e5f5; padding: 15px; border-radius: 8px; text-align: center;">
                        <h4>👤 Client-Initiated</h4>
                        <p>Clients cache data locally</p>
                        <p>Like saving files to your laptop!</p>
                        
                        <div style="background: white; padding: 10px; border-radius: 5px; margin: 10px 0; font-size: 0.8em;">
                            <p><strong>Client caching:</strong></p>
                            <ul style="text-align: left; margin-left: 20px;">
                                <li>Browser cache</li>
                                <li>Mobile app cache</li>
                                <li>Local file copies</li>
                            </ul>
                        </div>
                        <p>✅ Super fast access<br>❌ May be stale</p>
                    </div>
                </div>

                <h4>📡 Content Distribution: Push vs Pull</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 15px 0;">
                    <div style="background: #e3f2fd; padding: 15px; border-radius: 8px;">
                        <h4>📤 Push (Server Pushes Updates)</h4>
                        <p>Server immediately sends updates to all replicas</p>
                        <p>Like news alerts to your phone! 📱</p>
                        <p>✅ Always fresh data<br>❌ Network traffic even if not needed</p>
                    </div>
                    
                    <div style="background: #f3e5f5; padding: 15px; border-radius: 8px;">
                        <h4>📥 Pull (Client Requests Updates)</h4>
                        <p>Client asks for updates when needed</p>
                        <p>Like checking email manually! 📧</p>
                        <p>✅ Only when needed<br>❌ Might get stale data</p>
                    </div>
                </div>

                <div class="drag-container">
                    <div class="drag-source">
                        <h4>Match the replica management strategy:</h4>
                        <div class="draggable-item" data-type="permanent">Bank branches in major cities</div>
                        <div class="draggable-item" data-type="server-init">Open new store where demand is high</div>
                        <div class="draggable-item" data-type="client-init">Save webpage to laptop</div>
                        <div class="draggable-item" data-type="permanent">Always-on backup servers</div>
                    </div>
                    <div class="drop-zone" id="permanentZone">Permanent Replicas</div>
                    <div class="drop-zone" id="serverInitZone">Server-Initiated</div>
                    <div class="drop-zone" id="clientInitZone">Client-Initiated</div>
                </div>
            `,
            memoryHack: `
                <strong>🗺️ Replica Management Memory:</strong><br>
                <strong>Permanent</strong> = "BANK BRANCHES" (fixed locations)<br>
                <strong>Server-Initiated</strong> = "MCDONALDS EXPANSION" (put stores where busy)<br>
                <strong>Client-Initiated</strong> = "PERSONAL BACKUP" (save locally)<br>
                <strong>Push</strong> = "NEWS ALERTS" (sent automatically)<br>
                <strong>Pull</strong> = "CHECK EMAIL" (ask when needed)<br><br>
                <em>"Banks → McDonalds → Personal backup, News alerts → Email checking!"</em>
            `,
            quiz: {
                question: "A video streaming service notices high demand from India and automatically sets up servers there. What type of replication is this?",
                options: [
                    "Permanent replicas",
                    "Server-initiated replicas",
                    "Client-initiated replicas", 
                    "Push-based replication"
                ],
                correct: 1,
                explanation: "Server-initiated replication - the server automatically creates replicas based on demand patterns!"
            }
        },
        {
            id: 5,
            title: "Consistency Protocols - Making It Work!",
            content: `
                <h3>⚙️ How to Actually Keep Replicas Consistent</h3>
                <p>Theory is nice, but how do we actually implement consistency? Let's see the protocols!</p>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                    <div style="background: #fff3cd; padding: 20px; border-radius: 10px;">
                        <h4>👑 Primary-Based Protocols</h4>
                        <p><strong>Idea:</strong> One server is the "boss" for updates</p>
                        
                        <div style="background: white; padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p><strong>Remote-Write:</strong></p>
                            <ol style="margin-left: 20px; font-size: 0.9em;">
                                <li>All writes go to primary server</li>
                                <li>Primary updates all backups</li>
                                <li>Reads can happen anywhere</li>
                            </ol>
                        </div>

                        <div class="mermaid">
                        graph TD
                            A[Client] -->|Write| B[Primary Server]
                            B -->|Update| C[Backup 1]
                            B -->|Update| D[Backup 2]
                            A -->|Read| C
                            A -->|Read| D
                            
                            style B fill:#4caf50
                            style C fill:#2196f3
                            style D fill:#2196f3
                        </div>
                        <p>✅ Simple, consistent<br>❌ Primary bottleneck</p>
                    </div>

                    <div style="background: #e8f5e8; padding: 20px; border-radius: 10px;">
                        <h4>🤝 Replicated-Write Protocols</h4>
                        <p><strong>Idea:</strong> Multiple servers can handle updates</p>
                        
                        <div style="background: white; padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p><strong>Quorum-Based:</strong></p>
                            <ol style="margin-left: 20px; font-size: 0.9em;">
                                <li>Write to majority of servers (quorum)</li>
                                <li>Read from majority of servers</li>
                                <li>Majority overlap ensures consistency</li>
                            </ol>
                        </div>

                        <div class="mermaid">
                        graph TD
                            A[Client] -->|Write| B[Server 1]
                            A -->|Write| C[Server 2]
                            A -->|Write| D[Server 3]
                            E[Read Client] -->|Read| B
                            E -->|Read| C
                            
                            style B fill:#4caf50
                            style C fill:#4caf50
                            style D fill:#ff9800
                        </div>
                        <p>✅ No single bottleneck<br>❌ More complex coordination</p>
                    </div>
                </div>

                <h4>💾 Cache Coherence - Keeping Caches in Sync</h4>
                <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <p><strong>Problem:</strong> Multiple clients cache the same data - what happens when one client updates?</p>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 10px 0;">
                        <div style="background: white; padding: 10px; border-radius: 5px;">
                            <h5>🚫 Write-Invalidate</h5>
                            <p>When you update, tell everyone else "your copy is now invalid!"</p>
                            <p>Like shouting "the prices changed!" in a store</p>
                        </div>
                        <div style="background: white; padding: 10px; border-radius: 5px;">
                            <h5>📤 Write-Update</h5>
                            <p>When you update, send the new value to everyone</p>
                            <p>Like sending new price list to all customers</p>
                        </div>
                    </div>
                </div>

                <div class="quiz-immediate">
                    <h4>🎮 Quorum Voting Simulator</h4>
                    <p>You have 5 servers. For strong consistency, what's the minimum quorum size for writes?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkQuorum(this, false)">2 servers (minority)</div>
                        <div class="quiz-option" onclick="checkQuorum(this, true)">3 servers (majority)</div>
                        <div class="quiz-option" onclick="checkQuorum(this, false)">5 servers (all of them)</div>
                    </div>
                </div>

                <div class="drag-container">
                    <div class="drag-source">
                        <h4>Match the protocol characteristics:</h4>
                        <div class="draggable-item" data-type="primary">One boss server handles all updates</div>
                        <div class="draggable-item" data-type="quorum">Write to majority, read from majority</div>
                        <div class="draggable-item" data-type="invalidate">Tell others "your copy is stale"</div>
                        <div class="draggable-item" data-type="update">Send new value to all caches</div>
                    </div>
                    <div class="drop-zone" id="primaryZone">Primary-Based</div>
                    <div class="drop-zone" id="quorumZone">Quorum-Based</div>
                    <div class="drop-zone" id="invalidateZone">Write-Invalidate</div>
                    <div class="drop-zone" id="updateZone">Write-Update</div>
                </div>
            `,
            memoryHack: `
                <strong>⚙️ Protocol Memory Tricks:</strong><br>
                <strong>Primary-Based</strong> = "👑 KING makes all decisions"<br>
                <strong>Quorum</strong> = "🗳️ VOTING (majority wins)"<br>
                <strong>Write-Invalidate</strong> = "🚫 EXPIRED MILK sticker"<br>
                <strong>Write-Update</strong> = "📮 MAIL new newsletter to everyone"<br><br>
                <em>"King decides → Vote for majority → Expired stickers → Mail newsletter!"</em>
            `,
            quiz: {
                question: "In a quorum system with 7 servers, what's the minimum number you need to read from to guarantee you get the latest data?",
                options: [
                    "1 server (any one)",
                    "3 servers (minority)",
                    "4 servers (majority)",
                    "7 servers (all of them)"
                ],
                correct: 2,
                explanation: "You need a majority (4 out of 7) because the majority of readers will overlap with the majority of writers who wrote the latest data!"
            }
        }
    ]
};

// Enhanced peg words for consistency and replication
const consistencyPegWords = {
    "replication": "📄 PHOTOCOPIES of important document",
    "sequential consistency": "📚 LIBRARY BOOKS in order",
    "causal consistency": "👨‍👩‍👧‍👦 FAMILY TREE relationships",
    "entry consistency": "🔐 LIBRARY CHECKOUT system",
    "monotonic read": "📖 BOOK PAGES (never go backwards)",
    "read-your-writes": "🪞 MIRROR (always see yourself)",
    "monotonic write": "📔 DIARY ENTRIES in order",
    "writes-follow-reads": "📧 EMAIL REPLY after reading",
    "permanent replica": "🏛️ BANK BRANCHES in major cities",
    "server-initiated": "🍟 MCDONALDS opens where busy",
    "client-initiated": "💾 PERSONAL BACKUP on laptop",
    "push": "📱 NEWS ALERTS sent automatically",
    "pull": "📧 CHECK EMAIL manually",
    "primary backup": "👑 KING and loyal subjects",
    "quorum": "🗳️ VOTING for majority decision",
    "cache coherence": "🪞 MIRRORS reflecting same image",
    "write-invalidate": "🚫 EXPIRED MILK sticker",
    "write-update": "📮 MAIL newsletter to everyone"
}; 