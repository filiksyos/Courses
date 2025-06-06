const securityData = {
    title: "🔐 Database Security & Authorization",
    icon: "🔐",
    chunks: [
        {
            title: "🎯 Security Fundamentals",
            content: `
                <h3>🎯 The Security Trinity</h3>
                <p>Database security is like protecting a fortress with three essential walls:</p>
                
                <div class="drag-drop-area">
                    <div class="drag-items">
                        <h4>🎯 Security Goals</h4>
                        <div class="drag-item" draggable="true" data-type="integrity">🛡️ Integrity</div>
                        <div class="drag-item" draggable="true" data-type="availability">⚡ Availability</div>
                        <div class="drag-item" draggable="true" data-type="confidentiality">🔒 Confidentiality</div>
                    </div>
                    <div class="drop-zones">
                        <div class="drop-zone" data-accepts="integrity">Data accuracy & consistency</div>
                        <div class="drop-zone" data-accepts="availability">System always accessible</div>
                        <div class="drop-zone" data-accepts="confidentiality">Information stays secret</div>
                    </div>
                </div>

                <div class="quiz-immediate">
                    <h4>🏰 Fortress Defense Simulation</h4>
                    <p>A hacker tries to modify salary records. Which security goal is primarily threatened?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkSecurity(this, true)">🛡️ Integrity (data accuracy)</div>
                        <div class="quiz-option" onclick="checkSecurity(this, false)">⚡ Availability (system access)</div>
                        <div class="quiz-option" onclick="checkSecurity(this, false)">🔒 Confidentiality (information secrecy)</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🏰 Security Castle Memory:</strong><br>
                <strong>INTEGRITY</strong> = "STRONG WALLS" (data stays accurate)<br>
                <strong>AVAILABILITY</strong> = "OPEN GATES" (always accessible)<br>
                <strong>CONFIDENTIALITY</strong> = "SECRET CHAMBERS" (hidden from enemies)<br><br>
                <em>"A castle needs strong walls, open gates for allies, and secret chambers!"</em>
            `,
            quiz: {
                question: "Which countermeasure prevents unauthorized data viewing?",
                options: [
                    "Access Control",
                    "Inference Control", 
                    "Flow Control",
                    "All of the above"
                ],
                correct: 3,
                explanation: "All three work together: Access Control blocks direct access, Inference Control prevents indirect discovery, and Flow Control tracks information movement!"
            }
        },
        {
            title: "👑 The Database Administrator (DBA)",
            content: `
                <h3>👑 The Digital Kingdom's Guardian</h3>
                <p>The DBA is like a medieval king managing their realm:</p>
                
                <div class="mermaid">
                graph TD
                    DBA["👑 DBA King"] --> Accounts["👥 User Accounts<br/>Grant citizenship"]
                    DBA --> Privileges["🎖️ Privileges<br/>Assign powers"]
                    DBA --> Audits["📊 Audits<br/>Monitor activities"]
                    DBA --> Logs["📜 Access Logs<br/>Track movements"]
                    
                    Accounts --> Users["👤 Database Users"]
                    Privileges --> Permissions["✅ Permissions"]
                    Audits --> Reports["📋 Security Reports"]
                    Logs --> History["🕰️ Activity History"]
                </div>

                <div class="quiz-immediate">
                    <h4>👑 Royal Decisions</h4>
                    <p>A new employee joins the accounting department. What should the DBA do FIRST?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkDBA(this, true)">Create user account with minimal privileges</div>
                        <div class="quiz-option" onclick="checkDBA(this, false)">Give them admin access immediately</div>
                        <div class="quiz-option" onclick="checkDBA(this, false)">Wait for them to request specific access</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>👑 DBA KING Memory:</strong><br>
                <strong>ACCOUNTS</strong> = "CITIZENSHIP PAPERS" (who can enter)<br>
                <strong>PRIVILEGES</strong> = "ROYAL TITLES" (what powers they have)<br>
                <strong>AUDITS</strong> = "ROYAL INSPECTIONS" (checking everything)<br>
                <strong>LOGS</strong> = "COURT RECORDS" (who did what when)<br><br>
                <em>"A wise king tracks every citizen and their deeds!"</em>
            `,
            quiz: {
                question: "Why are access logs crucial for database security?",
                options: [
                    "They improve database performance",
                    "They provide forensic evidence after attacks",
                    "They automatically prevent unauthorized access",
                    "They reduce storage requirements"
                ],
                correct: 1,
                explanation: "Access logs are like security camera footage - they help investigate what happened after a security incident occurs!"
            }
        },
        {
            title: "🗝️ Discretionary Access Control (DAC)",
            content: `
                <h3>🗝️ Keys to the Kingdom</h3>
                <p>DAC is like giving out specific keys for specific rooms:</p>
                
                <div class="drag-drop-area">
                    <div class="drag-items">
                        <h4>🎭 SQL Privileges</h4>
                        <div class="drag-item" draggable="true" data-type="select">👁️ SELECT</div>
                        <div class="drag-item" draggable="true" data-type="insert">➕ INSERT</div>
                        <div class="drag-item" draggable="true" data-type="update">✏️ UPDATE</div>
                        <div class="drag-item" draggable="true" data-type="delete">🗑️ DELETE</div>
                        <div class="drag-item" draggable="true" data-type="references">🔗 REFERENCES</div>
                    </div>
                    <div class="drop-zones">
                        <div class="drop-zone" data-accepts="select">Read data from tables</div>
                        <div class="drop-zone" data-accepts="insert">Add new records</div>
                        <div class="drop-zone" data-accepts="update">Modify existing data</div>
                        <div class="drop-zone" data-accepts="delete">Remove records</div>
                        <div class="drop-zone" data-accepts="references">Create foreign keys</div>
                    </div>
                </div>

                <h4>🔄 The GRANT Chain Reaction</h4>
                <p>When you grant WITH GRANT OPTION, it creates a privilege pyramid:</p>
                
                <div class="mermaid">
                graph TD
                    DBA["👑 DBA"] -->|GRANT WITH GRANT OPTION| Manager["👔 Manager"]
                    Manager -->|GRANT| Employee1["👤 Employee A"]
                    Manager -->|GRANT WITH GRANT OPTION| Employee2["👤 Employee B"]
                    Employee2 -->|GRANT| Employee3["👤 Employee C"]
                    
                    Manager -.->|REVOKE CASCADE| Employee1
                    Manager -.->|REVOKE CASCADE| Employee2
                    Employee2 -.->|REVOKE CASCADE| Employee3
                </div>

                <div class="quiz-immediate">
                    <h4>🔄 Privilege Domino Effect</h4>
                    <p>If the DBA revokes Manager's privilege WITH CASCADE, what happens?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkGrant(this, true)">All employees lose their privileges too</div>
                        <div class="quiz-option" onclick="checkGrant(this, false)">Only the Manager loses privileges</div>
                        <div class="quiz-option" onclick="checkGrant(this, false)">Employees keep their privileges</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🗝️ KEY RING Memory:</strong><br>
                <strong>SELECT</strong> = "READING GLASSES" (view only)<br>
                <strong>INSERT</strong> = "PLUS SIGN" (add new)<br>
                <strong>UPDATE</strong> = "PENCIL ERASER" (modify existing)<br>
                <strong>DELETE</strong> = "TRASH CAN" (remove completely)<br>
                <strong>REFERENCES</strong> = "CHAIN LINK" (connect tables)<br><br>
                <em>"Each key opens a different type of door!"</em>
            `,
            quiz: {
                question: "What's the main advantage of using VIEWs for access control?",
                options: [
                    "They improve query performance",
                    "They provide row and column level security",
                    "They reduce storage space",
                    "They automatically encrypt data"
                ],
                correct: 1,
                explanation: "Views act like filtered windows - users only see specific rows and columns you want them to see, providing fine-grained access control!"
            }
        },
        {
            title: "🏛️ Mandatory Access Control (MAC) & RBAC",
            content: `
                <h3>🏛️ Military-Grade Classification</h3>
                <p>MAC is like military security levels - strict hierarchy, no exceptions:</p>
                
                <div class="mermaid">
                graph TD
                    TS["🔴 Top Secret<br/>Generals Only"] 
                    S["🟡 Secret<br/>Officers Only"]
                    C["🟢 Confidential<br/>Sergeants Only"] 
                    U["⚪ Unclassified<br/>Everyone"]
                    
                    TS --> S
                    S --> C
                    C --> U
                    
                    TS -.->|Can Read| S
                    TS -.->|Can Read| C
                    TS -.->|Can Read| U
                    S -.->|Can Read| C
                    S -.->|Can Read| U
                    C -.->|Can Read| U
                </div>

                <h4>🎭 Role-Based Access Control (RBAC)</h4>
                <p>RBAC is like job descriptions in a company:</p>
                
                <div class="drag-drop-area">
                    <div class="drag-items">
                        <h4>👥 Employees</h4>
                        <div class="drag-item" draggable="true" data-type="john">👤 John (Accountant)</div>
                        <div class="drag-item" draggable="true" data-type="sarah">👤 Sarah (Manager)</div>
                        <div class="drag-item" draggable="true" data-type="mike">👤 Mike (HR)</div>
                    </div>
                    <div class="drop-zones">
                        <div class="drop-zone" data-accepts="john">💰 Can view/edit financial data</div>
                        <div class="drop-zone" data-accepts="sarah">📊 Can approve budgets & reports</div>
                        <div class="drop-zone" data-accepts="mike">👥 Can access employee records</div>
                    </div>
                </div>

                <div class="quiz-immediate">
                    <h4>🏛️ Security Clearance Test</h4>
                    <p>A Secret-level user tries to read Top Secret data. What happens?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkMAC(this, false)">Access granted (they have Secret clearance)</div>
                        <div class="quiz-option" onclick="checkMAC(this, true)">Access denied (need higher clearance)</div>
                        <div class="quiz-option" onclick="checkMAC(this, false)">Partial access granted</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🏛️ MILITARY RANKS Memory:</strong><br>
                <strong>TOP SECRET</strong> = "GENERAL'S EYES ONLY" (highest level)<br>
                <strong>SECRET</strong> = "OFFICER'S BRIEFING" (mid level)<br>
                <strong>CONFIDENTIAL</strong> = "SERGEANT'S REPORT" (low level)<br>
                <strong>UNCLASSIFIED</strong> = "PUBLIC BULLETIN" (everyone)<br><br>
                <em>"Higher ranks can read lower level documents, but not vice versa!"</em>
            `,
            quiz: {
                question: "What's the main difference between DAC and MAC?",
                options: [
                    "DAC is faster than MAC",
                    "DAC allows users to grant access, MAC uses fixed security levels",
                    "MAC is only for government systems",
                    "DAC is more secure than MAC"
                ],
                correct: 1,
                explanation: "DAC is discretionary (users can choose), MAC is mandatory (system enforces fixed rules like military ranks)!"
            }
        },
        {
            title: "📊 Statistical Database Security",
            content: `
                <h3>📊 The Inference Problem</h3>
                <p>Even innocent statistics can reveal secrets through clever queries:</p>
                
                <div class="mermaid">
                graph TD
                    Query1["COUNT(*) WHERE Dept='Finance'<br/>Result: 5 people"] 
                    Query2["COUNT(*) WHERE Dept='Finance' AND Salary>100k<br/>Result: 4 people"]
                    Query3["COUNT(*) WHERE Dept='Finance' AND Name!='John'<br/>Result: 4 people"]
                    
                    Query1 --> Inference["🕵️ INFERENCE:<br/>John earns ≤100k!"]
                    Query2 --> Inference
                    Query3 --> Inference
                </div>

                <h4>🛡️ Protection Techniques</h4>
                <ul>
                    <li><strong>📏 Query Size Control:</strong> Minimum/maximum result sizes</li>
                    <li><strong>🎯 Query Set Overlap:</strong> Limit overlapping queries</li>
                    <li><strong>🔀 Random Sample:</strong> Return approximate results</li>
                    <li><strong>📊 Data Perturbation:</strong> Add random noise</li>
                    <li><strong>🎭 Anonymization:</strong> Remove identifying information</li>
                </ul>

                <div class="quiz-immediate">
                    <h4>🕵️ Detective Challenge</h4>
                    <p>An attacker knows there are 100 employees total and queries "COUNT(*) WHERE Salary>150k" getting result 1. How can they find who?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkInference(this, true)">Query "COUNT(*) WHERE Salary>150k AND Name!='John'" for each person</div>
                        <div class="quiz-option" onclick="checkInference(this, false)">It's impossible to determine</div>
                        <div class="quiz-option" onclick="checkInference(this, false)">Query the database directly</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>📊 STATISTICAL DETECTIVE Memory:</strong><br>
                <strong>COUNT QUERIES</strong> = "CENSUS COUNTING" (how many?)<br>
                <strong>INFERENCE</strong> = "SHERLOCK HOLMES" (deduce from clues)<br>
                <strong>QUERY SIZE</strong> = "MINIMUM GROUP SIZE" (no lone wolves)<br>
                <strong>PERTURBATION</strong> = "FUZZY MATH" (add noise)<br><br>
                <em>"Even innocent math can reveal secrets!"</em>
            `,
            quiz: {
                question: "What's the most effective way to prevent inference attacks?",
                options: [
                    "Encrypt all data",
                    "Use only aggregate functions",
                    "Combine multiple protection techniques",
                    "Limit database size"
                ],
                correct: 2,
                explanation: "No single technique is foolproof! Like layers of security, combining multiple approaches provides the best protection against clever attackers."
            }
        },
        {
            title: "🔐 Encryption & PKI",
            content: `
                <h3>🔐 The Secret Code Academy</h3>
                <p>Encryption transforms readable data into unreadable code:</p>
                
                <div class="mermaid">
                graph LR
                    Plain["📄 Plaintext<br/>'Hello World'"] 
                    Key1["🗝️ Secret Key<br/>'MyKey123'"]
                    Cipher["🔒 Ciphertext<br/>'X@#$%^&*'"]
                    Key2["🗝️ Secret Key<br/>'MyKey123'"]
                    Plain2["📄 Plaintext<br/>'Hello World'"]
                    
                    Plain -->|Encrypt| Cipher
                    Key1 --> Cipher
                    Cipher -->|Decrypt| Plain2
                    Key2 --> Plain2
                </div>

                <h4>🔑 Two Types of Encryption</h4>
                
                <div class="drag-drop-area">
                    <div class="drag-items">
                        <h4>🔐 Encryption Features</h4>
                        <div class="drag-item" draggable="true" data-type="symmetric">⚡ Fast performance</div>
                        <div class="drag-item" draggable="true" data-type="symmetric">🔑 Same key for encrypt/decrypt</div>
                        <div class="drag-item" draggable="true" data-type="asymmetric">🔐 Public/Private key pair</div>
                        <div class="drag-item" draggable="true" data-type="asymmetric">📝 Digital signatures</div>
                        <div class="drag-item" draggable="true" data-type="asymmetric">🌐 Secure communication setup</div>
                    </div>
                    <div class="drop-zones">
                        <div class="drop-zone" data-accepts="symmetric">🟢 Symmetric Encryption<br/>(AES, DES)</div>
                        <div class="drop-zone" data-accepts="asymmetric">🔵 Asymmetric Encryption<br/>(RSA, ECC)</div>
                    </div>
                </div>

                <div class="quiz-immediate">
                    <h4>🔐 Encryption Scenario</h4>
                    <p>You want to send a secret message to someone you've never met. Which approach works?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkEncryption(this, false)">Symmetric encryption (need to share secret key first)</div>
                        <div class="quiz-option" onclick="checkEncryption(this, true)">Asymmetric encryption (use their public key)</div>
                        <div class="quiz-option" onclick="checkEncryption(this, false)">Both work equally well</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🔐 ENCRYPTION ACADEMY Memory:</strong><br>
                <strong>SYMMETRIC</strong> = "SAME HOUSE KEY" (one key for both)<br>
                <strong>ASYMMETRIC</strong> = "MAILBOX SYSTEM" (public slot, private key)<br>
                <strong>PUBLIC KEY</strong> = "MAILBOX SLOT" (anyone can use)<br>
                <strong>PRIVATE KEY</strong> = "MAILBOX KEY" (only owner has)<br><br>
                <em>"Mailboxes: anyone can put mail in, only owner can take out!"</em>
            `,
            quiz: {
                question: "In PKI, what happens if someone loses their private key?",
                options: [
                    "They can still decrypt with public key",
                    "All their encrypted data becomes unreadable",
                    "The public key automatically updates",
                    "Nothing, they can generate a new one"
                ],
                correct: 1,
                explanation: "Private key is like the master key to your house - lose it and you can't access anything encrypted with your public key!"
            }
        }
    ]
};

// Enhanced peg words for security
const securityPegWords = {
    "integrity": "🛡️ SHIELD protecting treasure",
    "availability": "⚡ ALWAYS-ON lighthouse",
    "confidentiality": "🤐 SECRET AGENT with sealed lips",
    "access control": "🚪 BOUNCER at club door",
    "dba": "👑 KING of digital realm",
    "privileges": "🎖️ MILITARY MEDALS earned",
    "grant": "🎁 GIFT with ribbon",
    "revoke": "✂️ SCISSORS cutting privileges",
    "mac": "🏛️ PENTAGON security levels",
    "dac": "🗝️ KEY RING with many keys",
    "rbac": "🎭 ACTOR playing different roles",
    "inference": "🕵️ SHERLOCK HOLMES deducing",
    "encryption": "🔐 TREASURE CHEST with lock",
    "symmetric": "⚖️ BALANCED SCALE (same both sides)",
    "asymmetric": "📮 MAILBOX (public slot, private key)"
}; 