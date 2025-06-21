const namingData = {
    title: "🏷️ Chapter 4: Naming",
    chunks: [
        {
            id: 1,
            title: "Names vs Identifiers vs Addresses",
            content: `
                <h3>🏷️ What's in a Name?</h3>
                <p><strong>Name:</strong> A human-readable reference to an entity (like "my-file.txt")</p>
                <p><strong>Identifier:</strong> A unique, persistent name that never changes (like a social security number)</p>
                <p><strong>Address:</strong> Tells you WHERE to find something (like IP:port 192.168.1.1:80)</p>
                
                <div class="drag-container">
                    <div class="drag-source" id="nameTypes">
                        <h4>Drag these examples:</h4>
                        <div class="draggable-item" data-type="name">📄 report.pdf</div>
                        <div class="draggable-item" data-type="identifier">🆔 UUID: a1b2c3d4</div>
                        <div class="draggable-item" data-type="address">🌐 192.168.1.100:8080</div>
                        <div class="draggable-item" data-type="name">👤 John's Computer</div>
                    </div>
                    <div class="drop-zone" id="nameDropZone">
                        <h4>Drop NAMES here</h4>
                    </div>
                    <div class="drop-zone" id="identifierDropZone">
                        <h4>Drop IDENTIFIERS here</h4>
                    </div>
                    <div class="drop-zone" id="addressDropZone">
                        <h4>Drop ADDRESSES here</h4>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🧠 Memory Hack:</strong><br>
                <em>"NIA"</em> - like the spy agency!<br>
                <strong>N</strong>ame = Nice and readable<br>
                <strong>I</strong>dentifier = Immutable forever<br>
                <strong>A</strong>ddress = Actual location<br><br>
                Think: Name is what you CALL it, ID is what it IS, Address is WHERE it lives!
            `,
            quiz: {
                question: "If you moved your house but kept the same phone number, what would change?",
                options: [
                    "The name stays the same, but the address changes",
                    "The identifier stays the same, but the address changes", 
                    "Everything changes",
                    "Nothing changes"
                ],
                correct: 1,
                explanation: "Your phone number (identifier) stays the same, but your physical address changes!"
            }
        },
        {
            id: 2,
            title: "Name Spaces - The Tree Structure",
            content: `
                <h3>🌳 Name Space Hierarchies</h3>
                <p>Name spaces are organized like family trees - everything has a parent (except the root)!</p>
                
                <div class="mermaid">
                graph TD
                    A[Root /] --> B[home]
                    A --> C[usr]
                    A --> D[etc]
                    B --> E[alice]
                    B --> F[bob]
                    E --> G[documents]
                    E --> H[photos]
                    G --> I[report.txt]
                    
                    click B "Build your own tree!"
                    click E "Add more folders!"
                </div>
                
                <div class="diagram-controls">
                    <button onclick="addNode()">🏗️ Add Folder</button>
                    <button onclick="addFile()">📄 Add File</button>
                    <button onclick="resetTree()">🔄 Reset Tree</button>
                </div>
                
                <p><strong>Leaf nodes:</strong> 📄 Files (the actual entities)</p>
                <p><strong>Directory nodes:</strong> 📁 Folders (organizational structure)</p>
            `,
            memoryHack: `
                <strong>🌳 Tree Memory Trick:</strong><br>
                Think of your family tree!<br>
                🔝 <strong>Root</strong> = Great-grandparent<br>
                📁 <strong>Directories</strong> = Parents<br>
                📄 <strong>Leaves</strong> = You (the end result)<br><br>
                <em>"Every file has ancestors, just like you!"</em>
            `,
            quiz: {
                question: "In /home/alice/documents/report.txt, what is 'documents'?",
                options: [
                    "A leaf node",
                    "A directory node", 
                    "The root node",
                    "An identifier"
                ],
                correct: 1,
                explanation: "Documents is a directory node - it contains other files/folders but isn't the final entity!"
            }
        },
        {
            id: 3,
            title: "Name Resolution - Finding Your Way",
            content: `
                <h3>🗺️ Name Resolution: Two Approaches</h3>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 8px;">
                        <h4>🔄 Iterative Resolution</h4>
                        <p>Client does the work - server just gives next step</p>
                        <div class="mermaid">
                        sequenceDiagram
                            Client->>Root: Where is alice?
                            Root->>Client: Try home server
                            Client->>Home: Where is alice?
                            Home->>Client: Here's alice's address!
                        </div>
                    </div>
                    
                    <div style="background: #e8e8f5; padding: 15px; border-radius: 8px;">
                        <h4>🎯 Recursive Resolution</h4>
                        <p>Server does the work - client just waits</p>
                        <div class="mermaid">
                        sequenceDiagram
                            Client->>Root: Where is alice?
                            Root->>Home: Where is alice?
                            Home->>Root: Here's alice!
                            Root->>Client: Here's alice's address!
                        </div>
                    </div>
                </div>
                
                <div class="drag-container">
                    <div class="drag-source">
                        <h4>Resolution Steps (drag in order):</h4>
                        <div class="draggable-item" data-step="3">3. Get final address</div>
                        <div class="draggable-item" data-step="1">1. Ask root server</div>
                        <div class="draggable-item" data-step="2">2. Follow referral</div>
                    </div>
                    <div class="drop-zone" id="resolutionOrder">
                        <h4>Correct Order →</h4>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🎯 Resolution Memory:</strong><br>
                <strong>Iterative</strong> = "I'll do it myself!" (like asking for directions step by step)<br>
                <strong>Recursive</strong> = "You handle it!" (like having a travel agent book everything)<br><br>
                <em>Iterative = Independent, Recursive = Reliant on others</em>
            `,
            quiz: {
                question: "Which resolution puts MORE load on servers?",
                options: [
                    "Iterative - servers do more work",
                    "Recursive - servers do more work",
                    "They're exactly the same",
                    "Neither puts load on servers"
                ],
                correct: 1,
                explanation: "Recursive puts more load on servers because they have to do all the resolution work for the client!"
            }
        },
        {
            id: 4,
            title: "Mounting & Linking - Connecting Worlds",
            content: `
                <h3>🔗 Linking Different Name Spaces</h3>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div style="background: #fff3cd; padding: 15px; border-radius: 8px;">
                        <h4>🔗 Hard Links</h4>
                        <p>Multiple names → same file</p>
                        <p>Like having multiple business cards for the same person!</p>
                        <div class="mermaid">
                        graph LR
                            A[name1.txt] --> C[File Data]
                            B[name2.txt] --> C
                        </div>
                    </div>
                    
                    <div style="background: #d1ecf1; padding: 15px; border-radius: 8px;">
                        <h4>🎯 Symbolic Links</h4>
                        <p>Name → pointer → file</p>
                        <p>Like a GPS coordinate that points to a house!</p>
                        <div class="mermaid">
                        graph LR
                            A[shortcut.txt] --> B[→ /home/alice/document.txt]
                            B --> C[File Data]
                        </div>
                    </div>
                </div>
                
                <div class="drag-container">
                    <div class="drag-source">
                        <h4>Match the scenarios:</h4>
                        <div class="draggable-item" data-type="hard">Same file, different locations</div>
                        <div class="draggable-item" data-type="symbolic">Shortcut that can break</div>
                        <div class="draggable-item" data-type="hard">Delete one, others still work</div>
                        <div class="draggable-item" data-type="symbolic">Points to a path</div>
                    </div>
                    <div class="drop-zone" id="hardLinks">
                        <h4>Hard Links</h4>
                    </div>
                    <div class="drop-zone" id="symbolicLinks">
                        <h4>Symbolic Links</h4>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🔗 Link Memory Trick:</strong><br>
                <strong>Hard Links</strong> = "Hard to break" - multiple real connections<br>
                <strong>Symbolic Links</strong> = "Symbol points somewhere" - just a pointer<br><br>
                Think: Hard link = multiple front doors to same house<br>
                Symbolic link = sign pointing to the house
            `,
            quiz: {
                question: "If you delete the original file, what happens to a symbolic link pointing to it?",
                options: [
                    "The symbolic link still works fine",
                    "The symbolic link becomes broken/dangling",
                    "The symbolic link automatically updates",
                    "All symbolic links are deleted too"
                ],
                correct: 1,
                explanation: "Symbolic links become broken/dangling because they just point to a path that no longer exists!"
            }
        },
        {
            id: 5,
            title: "Name Space Distribution - DNS Style",
            content: `
                <h3>🌐 Three-Layer DNS Architecture</h3>
                
                <div class="mermaid">
                graph TD
                    A[Global Layer: .com .org .edu] --> B[Administrative Layer: google.com microsoft.com]
                    B --> C[Managerial Layer: mail.google.com www.google.com]
                    
                    style A fill:#ff9999
                    style B fill:#99ccff  
                    style C fill:#99ff99
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 20px 0;">
                    <div style="background: #ffeeee; padding: 15px; border-radius: 8px; text-align: center;">
                        <h4>🌍 Global Layer</h4>
                        <p>Rarely changes</p>
                        <p>Root servers, TLDs</p>
                        <p>Heavily replicated</p>
                    </div>
                    <div style="background: #eeeeff; padding: 15px; border-radius: 8px; text-align: center;">
                        <h4>🏢 Administrative</h4>
                        <p>Organization level</p>
                        <p>Company domains</p>
                        <p>Moderate replication</p>
                    </div>
                    <div style="background: #eeffee; padding: 15px; border-radius: 8px; text-align: center;">
                        <h4>⚙️ Managerial</h4>
                        <p>Changes frequently</p>
                        <p>Individual hosts</p>
                        <p>Local caching</p>
                    </div>
                </div>
                
                <div class="drag-container">
                    <div class="drag-source">
                        <h4>Drag to correct layer:</h4>
                        <div class="draggable-item" data-layer="global">.edu</div>
                        <div class="draggable-item" data-layer="admin">stanford.edu</div>
                        <div class="draggable-item" data-layer="mgmt">cs.stanford.edu</div>
                        <div class="draggable-item" data-layer="global">.com</div>
                    </div>
                    <div class="drop-zone" id="globalLayer">Global</div>
                    <div class="drop-zone" id="adminLayer">Administrative</div>
                    <div class="drop-zone" id="mgmtLayer">Managerial</div>
                </div>
            `,
            memoryHack: `
                <strong>🏢 DNS Layer Memory:</strong><br>
                Think of a company hierarchy!<br>
                <strong>Global</strong> = CEO level (rarely changes)<br>
                <strong>Administrative</strong> = Department heads<br>
                <strong>Managerial</strong> = Daily workers (change often)<br><br>
                <em>"Higher up = changes less, lower down = changes more!"</em>
            `,
            quiz: {
                question: "Which layer would 'mail.google.com' belong to?",
                options: [
                    "Global layer",
                    "Administrative layer", 
                    "Managerial layer",
                    "It doesn't fit the model"
                ],
                correct: 2,
                explanation: "mail.google.com is in the managerial layer - it's a specific service that changes frequently!"
            }
        },
        {
            id: 6,
            title: "Caching & Replication - Speed Tricks",
            content: `
                <h3>🚀 Making Name Resolution Lightning Fast</h3>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div style="background: #f0f8ff; padding: 15px; border-radius: 8px;">
                        <h4>📦 Client-Side Caching</h4>
                        <p>Store recent lookups locally</p>
                        <ul>
                            <li>✅ Super fast repeat lookups</li>
                            <li>❌ Might get stale data</li>
                            <li>🔄 TTL (Time To Live) controls freshness</li>
                        </ul>
                        
                        <div class="mermaid">
                        graph LR
                            A[Client] --> B[Cache Check]
                            B --> C{Found?}
                            C -->|Yes| D[Return Cached]
                            C -->|No| E[Query Server]
                        </div>
                    </div>
                    
                    <div style="background: #f0fff0; padding: 15px; border-radius: 8px;">
                        <h4>🔄 Replication</h4>
                        <p>Multiple copies of name servers</p>
                        <ul>
                            <li>✅ High availability</li>
                            <li>✅ Load distribution</li>
                            <li>❌ Consistency challenges</li>
                        </ul>
                        
                        <div class="mermaid">
                        graph TD
                            A[Client] --> B[Load Balancer]
                            B --> C[Server 1]
                            B --> D[Server 2] 
                            B --> E[Server 3]
                        </div>
                    </div>
                </div>
                
                <div class="quiz-immediate">
                    <h4>🎯 Quick Challenge: TTL Game</h4>
                    <p>You cached "example.com → 1.2.3.4" with TTL=300 seconds at 2:00 PM.</p>
                    <p>When would you need to refresh this cache entry?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkTTL(this, false)">2:03 PM</div>
                        <div class="quiz-option" onclick="checkTTL(this, true)">2:05 PM</div>
                        <div class="quiz-option" onclick="checkTTL(this, false)">2:10 PM</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>💾 Caching Memory Hack:</strong><br>
                <strong>TTL</strong> = "Time Till Lost" (when cache expires)<br>
                <strong>Cache</strong> = Like keeping phone numbers in your phone vs looking them up every time<br><br>
                <em>"Fresh cache = fast response, stale cache = wrong number!"</em><br>
                300 seconds = 5 minutes (easy conversion!)
            `,
            quiz: {
                question: "What's the main trade-off with longer TTL values in caching?",
                options: [
                    "Faster lookups vs more stale data",
                    "More memory usage vs faster lookups",
                    "Better security vs worse performance", 
                    "Higher availability vs more complexity"
                ],
                correct: 0,
                explanation: "Longer TTL means faster repeat lookups but higher chance of getting outdated information!"
            }
        }
    ]
};

// Peg word associations for naming concepts
const namingPegWords = {
    "name": "🏷️ LABEL on a jar (easy to read)",
    "identifier": "🆔 FINGERPRINT (unique forever)",
    "address": "🏠 HOUSE NUMBER (where to find it)",
    "resolution": "🔍 DETECTIVE solving a case",
    "iterative": "🪜 LADDER (step by step)",
    "recursive": "🤖 ROBOT (does it all for you)",
    "hard link": "🔗 HANDCUFFS (can't break easily)",
    "symbolic link": "➡️ ARROW pointing somewhere",
    "TTL": "⏰ MILK EXPIRATION date"
}; 