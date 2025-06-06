const cloudSecurityData = {
    title: "🔒 Chapter 4: Cloud Security",
    chunks: [
        {
            content: `
                <div class="concept-box">
                    <h5>🔒 Cloud Security Fundamentals</h5>
                    <p>The foundation of trust in the cloud - keeping your data safe!</p>
                </div>
                
                <h3>The Security Triad: CIA 🕵️‍♀️</h3>
                <p>Cloud security is built on the <span class="highlight">CIA Triad</span> - the three pillars that ensure your data stays protected:</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0;">
                    <div style="background: #e3f2fd; padding: 20px; border-radius: 15px; text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 15px;">🔐</div>
                        <h4>Confidentiality</h4>
                        <p>Only authorized people can access data</p>
                        <em>Like a secret diary with a lock</em>
                    </div>
                    
                    <div style="background: #f3e5f5; padding: 20px; border-radius: 15px; text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 15px;">✅</div>
                        <h4>Integrity</h4>
                        <p>Data remains accurate and unaltered</p>
                        <em>Like a sealed envelope that shows tampering</em>
                    </div>
                    
                    <div style="background: #e8f5e8; padding: 20px; border-radius: 15px; text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 15px;">🌐</div>
                        <h4>Availability</h4>
                        <p>Systems are accessible when needed</p>
                        <em>Like a 24/7 convenience store</em>
                    </div>
                </div>
                
                <h4>🚨 Common Cloud Security Threats:</h4>
                <ul>
                    <li>💥 <strong>Data Breaches</strong> - Unauthorized access to sensitive data</li>
                    <li>⚡ <strong>DDoS Attacks</strong> - Overwhelming systems to cause downtime</li>
                    <li>🕴️ <strong>Insider Threats</strong> - Malicious actions from within the organization</li>
                    <li>🦠 <strong>Malware</strong> - Malicious software infections</li>
                    <li>🎣 <strong>Phishing</strong> - Social engineering to steal credentials</li>
                </ul>
                
                <div class="quiz-immediate">
                    <h4>🎮 CIA Triad Challenge</h4>
                    <p>A hacker changes your bank account balance from $1000 to $10. Which part of CIA is compromised?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false">Confidentiality (data secrecy)</div>
                        <div class="quiz-option" data-correct="true">Integrity (data accuracy)</div>
                        <div class="quiz-option" data-correct="false">Availability (system access)</div>
                        <div class="quiz-option" data-correct="false">All three equally</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🔒 CIA Memory Trick:</strong><br>
                <strong>CIA</strong> = "CAN I ACCESS?"<br>
                🔐 <strong>C</strong>onfidentiality = "CLOSED BOOK" (secret)<br>
                ✅ <strong>I</strong>ntegrity = "INTACT SEAL" (unchanged)<br>
                🌐 <strong>A</strong>vailability = "ALWAYS OPEN" (accessible)<br><br>
                <em>"Security is like a three-legged stool - remove one leg and it falls!"</em>
            `,
            quiz: {
                question: "Which aspect of cloud security ensures that data hasn't been modified by unauthorized parties?",
                options: [
                    "Confidentiality",
                    "Integrity",
                    "Availability", 
                    "Authentication"
                ],
                correct: 1,
                explanation: "Integrity ensures that data remains accurate and hasn't been tampered with or modified without authorization!"
            }
        },
        {
            content: `
                <div class="concept-box">
                    <h5>🤝 Shared Responsibility Model</h5>
                    <p>Who's responsible for what in cloud security? It's a team effort!</p>
                </div>
                
                <h3>Security: A Shared Journey 🤝</h3>
                <p>In cloud computing, security responsibility is <span class="highlight">shared between the cloud provider and customer</span>. Think of it like renting an apartment - some things are the landlord's job, others are yours!</p>
                
                <div class="mermaid">
                graph TD
                    A[🌩️ Cloud Security] --> B[☁️ Cloud Provider Responsibility]
                    A --> C[👤 Customer Responsibility]
                    
                    B --> D[🏗️ Physical Infrastructure]
                    B --> E[🌐 Network Controls]
                    B --> F[🖥️ Host Operating System]
                    B --> G[🔧 Hypervisor]
                    
                    C --> H[🔐 Data Encryption]
                    C --> I[👥 Identity & Access Management]
                    C --> J[🔥 Network & Firewall Config]
                    C --> K[⚙️ Operating System Updates]
                    C --> L[📱 Application Security]
                </div>
                
                <h4>🏢 Provider's Responsibilities (Security OF the Cloud):</h4>
                <ul>
                    <li>🏗️ <strong>Physical Security</strong> - Data centers, hardware protection</li>
                    <li>🌐 <strong>Network Infrastructure</strong> - Core networking and DDoS protection</li>
                    <li>🖥️ <strong>Host Operating System</strong> - Patching and maintaining hypervisors</li>
                    <li>🔧 <strong>Service Availability</strong> - Keeping cloud services running</li>
                </ul>
                
                <h4>👤 Customer's Responsibilities (Security IN the Cloud):</h4>
                <ul>
                    <li>🔐 <strong>Data Protection</strong> - Encryption and data classification</li>
                    <li>👥 <strong>Identity Management</strong> - User access and permissions</li>
                    <li>🔥 <strong>Network Security</strong> - Firewalls and network configuration</li>
                    <li>📱 <strong>Application Security</strong> - Code security and patches</li>
                </ul>
                
                <div class="quiz-immediate">
                    <h4>🎯 Responsibility Sorting</h4>
                    <p>Who is responsible for encrypting data stored in AWS S3?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false">AWS (Cloud Provider)</div>
                        <div class="quiz-option" data-correct="true">Customer</div>
                        <div class="quiz-option" data-correct="false">Both equally</div>
                        <div class="quiz-option" data-correct="false">No one - S3 doesn't support encryption</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🤝 Shared Responsibility Memory:</strong><br>
                <strong>Provider</strong> = "PLUMBING & ELECTRICITY" (infrastructure)<br>
                <strong>Customer</strong> = "FURNITURE & DECORATIONS" (your stuff)<br><br>
                Think: <strong>APARTMENT RENTAL</strong> 🏠<br>
                Landlord handles building, you handle your belongings!<br><br>
                <em>"Cloud provider secures the cloud, you secure in the cloud!"</em>
            `,
            quiz: {
                question: "In the shared responsibility model, what is the cloud provider primarily responsible for?",
                options: [
                    "Customer's application code security",
                    "Physical infrastructure and host operating systems",
                    "Customer's data encryption",
                    "User access management"
                ],
                correct: 1,
                explanation: "Cloud providers handle the underlying infrastructure, physical security, and foundational services - the 'security OF the cloud'!"
            }
        },
        {
            content: `
                <div class="concept-box">
                    <h5>📋 Security Standards & Compliance</h5>
                    <p>Following the rules that keep everyone safe and legal!</p>
                </div>
                
                <h3>The Security Rulebook 📚</h3>
                <p>Cloud security follows <span class="highlight">international standards and regulations</span> to ensure consistent protection. It's like having a universal safety code that everyone follows!</p>
                
                <h4>🏆 Major Security Standards:</h4>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="background: #e3f2fd; padding: 15px; border-radius: 10px;">
                        <h5>🔒 ISO/IEC 27001</h5>
                        <p><strong>Information Security Management</strong><br>
                        Global standard for managing sensitive information securely</p>
                        <em>Like a security management recipe book</em>
                    </div>
                    
                    <div style="background: #f3e5f5; padding: 15px; border-radius: 10px;">
                        <h5>☁️ ISO/IEC 27017</h5>
                        <p><strong>Cloud Security Controls</strong><br>
                        Specific guidelines for cloud service security</p>
                        <em>Cloud-specific security best practices</em>
                    </div>
                    
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 10px;">
                        <h5>🛡️ NIST Framework</h5>
                        <p><strong>Cybersecurity Framework</strong><br>
                        US standard for managing cybersecurity risks</p>
                        <em>Step-by-step cyber protection guide</em>
                    </div>
                </div>
                
                <h4>⚖️ Key Compliance Regulations:</h4>
                <ul>
                    <li>🇪🇺 <strong>GDPR</strong> - European data protection regulation</li>
                    <li>🏥 <strong>HIPAA</strong> - US healthcare data protection</li>
                    <li>🏢 <strong>SOX</strong> - Financial reporting requirements</li>
                    <li>💳 <strong>PCI DSS</strong> - Payment card data security</li>
                    <li>🇺🇸 <strong>CCPA</strong> - California consumer privacy act</li>
                </ul>
                
                <div class="mermaid">
                graph LR
                    A[📋 Compliance] --> B[🔍 Audit]
                    B --> C[📊 Assessment]
                    C --> D[✅ Certification]
                    D --> E[🔄 Continuous Monitoring]
                    E --> A
                    
                    style A fill:#e3f2fd
                    style B fill:#f3e5f5
                    style C fill:#e8f5e8
                    style D fill:#fff3cd
                    style E fill:#fce4ec
                </div>
                
                <div class="quiz-immediate">
                    <h4>🎮 Compliance Challenge</h4>
                    <p>Your company processes EU customer data. Which regulation must you primarily comply with?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false">HIPAA (Healthcare)</div>
                        <div class="quiz-option" data-correct="true">GDPR (General Data Protection Regulation)</div>
                        <div class="quiz-option" data-correct="false">PCI DSS (Payment Cards)</div>
                        <div class="quiz-option" data-correct="false">SOX (Financial Reporting)</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>📋 Compliance Memory Map:</strong><br>
                <strong>GDPR</strong> = "GUARD DATA PRIVACY RIGHTS" (EU data protection)<br>
                <strong>HIPAA</strong> = "HEALTH INFO PRIVACY & ACCOUNTABILITY" (medical)<br>
                <strong>PCI DSS</strong> = "PAYMENT CARD INDUSTRY" (credit cards)<br>
                <strong>SOX</strong> = "SARBANES-OXLEY" (financial transparency)<br><br>
                <em>"Different data types, different rules!"</em>
            `,
            quiz: {
                question: "What is the primary purpose of ISO/IEC 27001?",
                options: [
                    "Cloud computing performance standards",
                    "Information security management systems",
                    "Network bandwidth requirements",
                    "Software development lifecycle"
                ],
                correct: 1,
                explanation: "ISO/IEC 27001 provides a framework for establishing, implementing, and maintaining an information security management system!"
            }
        },
        {
            content: `
                <div class="concept-box">
                    <h5>🏗️ Infrastructure & Network Security</h5>
                    <p>Building fortress walls around your cloud infrastructure!</p>
                </div>
                
                <h3>Your Digital Fortress 🏰</h3>
                <p>Infrastructure security creates <span class="highlight">multiple layers of protection</span> around your cloud resources. Think of it as building a medieval castle with walls, moats, and guard towers!</p>
                
                <h4>🔥 Network Security Controls:</h4>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="background: #fff3cd; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem; margin-bottom: 10px;">🔥</div>
                        <h5>Firewalls</h5>
                        <p>Digital bouncers that control network traffic</p>
                        <em>Like club security checking IDs</em>
                    </div>
                    
                    <div style="background: #d1ecf1; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem; margin-bottom: 10px;">🚨</div>
                        <h5>IDS/IPS</h5>
                        <p>Intrusion Detection/Prevention Systems</p>
                        <em>Like security cameras with alarms</em>
                    </div>
                    
                    <div style="background: #f8d7da; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem; margin-bottom: 10px;">🔐</div>
                        <h5>VPN</h5>
                        <p>Virtual Private Networks for secure tunnels</p>
                        <em>Like secret underground passages</em>
                    </div>
                    
                    <div style="background: #d4edda; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem; margin-bottom: 10px;">⚖️</div>
                        <h5>Load Balancers</h5>
                        <p>Distribute traffic to prevent overload</p>
                        <em>Like traffic directors at busy intersections</em>
                    </div>
                </div>
                
                <h4>🛡️ Host Security Measures:</h4>
                <ul>
                    <li>🔒 <strong>Endpoint Protection</strong> - Antivirus and anti-malware on devices</li>
                    <li>🔄 <strong>Patch Management</strong> - Regular security updates</li>
                    <li>🔐 <strong>Access Controls</strong> - Who can access what systems</li>
                    <li>📊 <strong>System Monitoring</strong> - Real-time security surveillance</li>
                    <li>🔒 <strong>Encryption</strong> - Scrambling data so only authorized users can read it</li>
                </ul>
                
                <div class="mermaid">
                graph TD
                    A[🌐 Internet] --> B[🔥 Firewall]
                    B --> C[⚖️ Load Balancer]
                    C --> D[🚨 IDS/IPS]
                    D --> E[☁️ Cloud Servers]
                    
                    F[🔐 VPN] --> B
                    
                    style A fill:#ffebee
                    style B fill:#fff3cd
                    style C fill:#e8f5e8
                    style D fill:#e3f2fd
                    style E fill:#f3e5f5
                    style F fill:#fce4ec
                </div>
                
                <div class="quiz-immediate">
                    <h4>🎯 Security Layers Quiz</h4>
                    <p>What's the primary purpose of a firewall in cloud security?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="true">Control and filter network traffic based on security rules</div>
                        <div class="quiz-option" data-correct="false">Encrypt data stored in databases</div>
                        <div class="quiz-option" data-correct="false">Balance load across multiple servers</div>
                        <div class="quiz-option" data-correct="false">Monitor user login attempts</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🏗️ Infrastructure Security Memory:</strong><br>
                <strong>FIVL</strong> = "FORTIFIED INTERNET VIRTUAL LAYER"<br>
                🔥 <strong>F</strong>irewall = "FORTRESS GATE"<br>
                🚨 <strong>I</strong>DS/IPS = "INTRUDER DETECTION SYSTEM"<br>
                🔐 <strong>V</strong>PN = "VIRTUAL PRIVATE NETWORK"<br>
                ⚖️ <strong>L</strong>oad Balancer = "LOAD LEVELER"<br><br>
                <em>"Build your castle one security layer at a time!"</em>
            `,
            quiz: {
                question: "Which security measure would best protect against unauthorized network access attempts?",
                options: [
                    "Load balancers",
                    "Intrusion Detection/Prevention Systems (IDS/IPS)",
                    "Data encryption",
                    "User training programs"
                ],
                correct: 1,
                explanation: "IDS/IPS specifically monitor network traffic for suspicious activities and can automatically block unauthorized access attempts!"
            }
        },
        {
            content: `
                <div class="concept-box">
                    <h5>📱 Application Security</h5>
                    <p>Protecting your apps from code to cloud!</p>
                </div>
                
                <h3>Secure Coding in the Cloud 👨‍💻</h3>
                <p>Application security ensures your <span class="highlight">software is resistant to attacks</span> and data breaches. It's like building a house with strong locks, reinforced windows, and alarm systems!</p>
                
                <h4>🔐 Application Security Fundamentals:</h4>
                
                <div style="margin: 20px 0;">
                    <div style="background: #e3f2fd; padding: 15px; border-radius: 10px; margin: 10px 0;">
                        <h5>🔒 Secure Coding Practices</h5>
                        <p>Writing code that's resistant to common vulnerabilities like SQL injection and XSS</p>
                        <em>Like building with strong materials instead of cardboard</em>
                    </div>
                    
                    <div style="background: #f3e5f5; padding: 15px; border-radius: 10px; margin: 10px 0;">
                        <h5>🛡️ Web Application Firewalls (WAF)</h5>
                        <p>Filters malicious web traffic before it reaches your application</p>
                        <em>Like a security guard checking everyone entering a building</em>
                    </div>
                    
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 10px; margin: 10px 0;">
                        <h5>🔑 Authentication & Authorization</h5>
                        <p>Verifying who users are and what they're allowed to do</p>
                        <em>Like checking both ID and guest list at a VIP party</em>
                    </div>
                </div>
                
                <h4>🚨 Common Application Vulnerabilities (OWASP Top 10):</h4>
                <ul>
                    <li>💉 <strong>Injection Attacks</strong> - SQL, NoSQL, command injection</li>
                    <li>🔓 <strong>Broken Authentication</strong> - Weak login systems</li>
                    <li>💾 <strong>Sensitive Data Exposure</strong> - Unprotected personal data</li>
                    <li>🌐 <strong>XML External Entities (XXE)</strong> - Malicious XML processing</li>
                    <li>⚠️ <strong>Security Misconfiguration</strong> - Default or weak settings</li>
                </ul>
                
                <h4>🔧 Security Tools & Practices:</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="background: #fff3cd; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🔍</div>
                        <strong>SAST</strong><br>
                        <small>Static code analysis</small>
                    </div>
                    <div style="background: #d1ecf1; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🏃‍♂️</div>
                        <strong>DAST</strong><br>
                        <small>Dynamic testing</small>
                    </div>
                    <div style="background: #f8d7da; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🔐</div>
                        <strong>HTTPS/TLS</strong><br>
                        <small>Encrypted connections</small>
                    </div>
                    <div style="background: #d4edda; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🎯</div>
                        <strong>API Security</strong><br>
                        <small>Secure interfaces</small>
                    </div>
                </div>
                
                <div class="quiz-immediate">
                    <h4>🎮 Security Scenario</h4>
                    <p>A user enters malicious SQL code in a web form to access unauthorized data. What type of attack is this?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="true">SQL Injection</div>
                        <div class="quiz-option" data-correct="false">Cross-Site Scripting (XSS)</div>
                        <div class="quiz-option" data-correct="false">DDoS Attack</div>
                        <div class="quiz-option" data-correct="false">Man-in-the-Middle</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>📱 Application Security Memory:</strong><br>
                <strong>SAW</strong> = "SECURE APPLICATION WARRIOR"<br>
                🔒 <strong>S</strong>ecure Coding = "SOLID FOUNDATION"<br>
                🔑 <strong>A</strong>uthentication = "ACCESS CONTROL"<br>
                🛡️ <strong>W</strong>AF = "WEB APPLICATION FIREWALL"<br><br>
                <em>"Code like a security expert from day one!"</em>
            `,
            quiz: {
                question: "What is the primary purpose of a Web Application Firewall (WAF)?",
                options: [
                    "Encrypt data in transit",
                    "Filter and block malicious web traffic to applications",
                    "Manage user authentication",
                    "Monitor application performance"
                ],
                correct: 1,
                explanation: "A WAF sits between users and your web application, filtering out malicious requests before they reach your app!"
            }
        },
        {
            content: `
                <div class="concept-box">
                    <h5>🔐 Data Privacy & Protection</h5>
                    <p>Keeping sensitive information safe from prying eyes!</p>
                </div>
                
                <h3>Your Data's Best Friend 👥</h3>
                <p>Data privacy ensures that <span class="highlight">personal and sensitive information is collected, used, and stored responsibly</span>. It's like being a trusted friend who keeps secrets and respects boundaries!</p>
                
                <h4>🛡️ Data Protection Principles:</h4>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="background: #e3f2fd; padding: 15px; border-radius: 10px;">
                        <h5>🎯 Purpose Limitation</h5>
                        <p>Data should only be used for the specific purpose it was collected</p>
                        <em>Like using a gym membership only for the gym</em>
                    </div>
                    
                    <div style="background: #f3e5f5; padding: 15px; border-radius: 10px;">
                        <h5>⏱️ Data Minimization</h5>
                        <p>Collect only the data you actually need</p>
                        <em>Like packing light for a trip - take only essentials</em>
                    </div>
                    
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 10px;">
                        <h5>🔒 Storage Limitation</h5>
                        <p>Don't keep data longer than necessary</p>
                        <em>Like cleaning out old receipts from your wallet</em>
                    </div>
                </div>
                
                <h4>🚨 Common Data Privacy Issues:</h4>
                <ul>
                    <li>💥 <strong>Data Misuse</strong> - Using data for unintended purposes</li>
                    <li>🕳️ <strong>Unauthorized Access</strong> - Wrong people accessing sensitive data</li>
                    <li>📍 <strong>Location Tracking</strong> - Excessive monitoring of user location</li>
                    <li>🔄 <strong>Data Sharing</strong> - Sharing with third parties without consent</li>
                    <li>📧 <strong>Profiling</strong> - Creating detailed profiles without permission</li>
                </ul>
                
                <h4>✅ Best Practices for Data Privacy:</h4>
                
                <div class="mermaid">
                graph LR
                    A[📊 Data Collection] --> B[🔒 Encryption]
                    B --> C[🔑 Access Control]
                    C --> D[📋 Audit Logs]
                    D --> E[🗑️ Data Deletion]
                    E --> F[✅ Compliance Check]
                    F --> A
                    
                    style A fill:#e3f2fd
                    style B fill:#f3e5f5
                    style C fill:#e8f5e8
                    style D fill:#fff3cd
                    style E fill:#fce4ec
                    style F fill:#e0f2f1
                </div>
                
                <div style="background: #fff3cd; padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <h5>🛠️ Technical Protection Measures:</h5>
                    <ul>
                        <li>🔐 <strong>Encryption at Rest</strong> - Scramble stored data</li>
                        <li>🚀 <strong>Encryption in Transit</strong> - Secure data movement</li>
                        <li>🎭 <strong>Anonymization</strong> - Remove identifying information</li>
                        <li>🔑 <strong>Tokenization</strong> - Replace sensitive data with tokens</li>
                        <li>📋 <strong>Data Loss Prevention (DLP)</strong> - Prevent data leaks</li>
                    </ul>
                </div>
                
                <div class="quiz-immediate">
                    <h4>🎯 Privacy Principle Challenge</h4>
                    <p>Your app collects email addresses for newsletters but starts using them for targeted ads. Which privacy principle is violated?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="true">Purpose Limitation - using data beyond original purpose</div>
                        <div class="quiz-option" data-correct="false">Data Minimization - collecting too much data</div>
                        <div class="quiz-option" data-correct="false">Storage Limitation - keeping data too long</div>
                        <div class="quiz-option" data-correct="false">No violation - emails can be used for anything</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🔐 Data Privacy Memory:</strong><br>
                <strong>PSM</strong> = "PRIVACY SUPER METHODS"<br>
                🎯 <strong>P</strong>urpose Limitation = "PURPOSE POLICE"<br>
                📏 <strong>S</strong>torage Limitation = "STORAGE SHERIFF"<br>
                ⏱️ <strong>M</strong>inimization = "MINIMUM MANDATE"<br><br>
                <em>"Treat user data like borrowing a friend's car - with respect and care!"</em>
            `,
            quiz: {
                question: "What does 'data minimization' mean in privacy protection?",
                options: [
                    "Making data files smaller to save storage space",
                    "Collecting only the minimum data necessary for the intended purpose",
                    "Encrypting data to make it unreadable",
                    "Sharing data with the minimum number of companies"
                ],
                correct: 1,
                explanation: "Data minimization means collecting only the data you actually need for your specific purpose - no more, no less!"
            }
        },
        {
            content: `
                <div class="concept-box">
                    <h5>👤 Access Control & Authentication</h5>
                    <p>The digital keys to your cloud kingdom!</p>
                </div>
                
                <h3>Who Gets In? The Access Control Story 🚪</h3>
                <p>Access control determines <span class="highlight">who can access what resources and when</span>. It's like being the bouncer at an exclusive club - you check IDs, manage guest lists, and ensure only the right people get in!</p>
                
                <h4>🔑 Types of Access Control:</h4>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="background: #e3f2fd; padding: 15px; border-radius: 10px;">
                        <h5>👥 Role-Based (RBAC)</h5>
                        <p>Access based on job roles and responsibilities</p>
                        <em>Like office keys - managers get different access than interns</em>
                    </div>
                    
                    <div style="background: #f3e5f5; padding: 15px; border-radius: 10px;">
                        <h5>🏷️ Attribute-Based (ABAC)</h5>
                        <p>Access based on user, resource, and environmental attributes</p>
                        <em>Like a smart card that considers time, location, and clearance level</em>
                    </div>
                    
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 10px;">
                        <h5>📋 Discretionary (DAC)</h5>
                        <p>Resource owners decide who gets access</p>
                        <em>Like homeowners choosing who gets house keys</em>
                    </div>
                    
                    <div style="background: #fff3cd; padding: 15px; border-radius: 10px;">
                        <h5>🔒 Mandatory (MAC)</h5>
                        <p>System-wide policies control access</p>
                        <em>Like military security clearances</em>
                    </div>
                </div>
                
                <h4>🔐 Authentication Methods:</h4>
                
                <div class="mermaid">
                graph TD
                    A[🔐 Authentication] --> B[📱 Single Factor]
                    A --> C[🔗 Multi-Factor MFA]
                    
                    B --> D[🔑 Password Only]
                    
                    C --> E[🧠 Something You Know - Password]
                    C --> F[📱 Something You Have - Phone/Token]
                    C --> G[👤 Something You Are - Biometrics]
                    
                    style A fill:#e3f2fd
                    style B fill:#f8d7da
                    style C fill:#d4edda
                    style D fill:#f8d7da
                    style E fill:#fff3cd
                    style F fill:#d1ecf1
                    style G fill:#f3e5f5
                </div>
                
                <h4>🚨 Identity Threats & Mitigation:</h4>
                <ul>
                    <li>🎣 <strong>Phishing</strong> - Fake login pages → Use MFA and user training</li>
                    <li>🔓 <strong>Credential Stuffing</strong> - Reused passwords → Unique passwords + MFA</li>
                    <li>🕴️ <strong>Privilege Escalation</strong> - Gaining unauthorized access → Principle of least privilege</li>
                    <li>👤 <strong>Account Takeover</strong> - Stolen accounts → Monitor login patterns</li>
                </ul>
                
                <h4>🔧 Modern Authentication Solutions:</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="background: #e3f2fd; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🔐</div>
                        <strong>SSO</strong><br>
                        <small>Single Sign-On</small>
                    </div>
                    <div style="background: #f3e5f5; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">📱</div>
                        <strong>MFA</strong><br>
                        <small>Multi-Factor Auth</small>
                    </div>
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🔑</div>
                        <strong>Passwordless</strong><br>
                        <small>Biometric/Token auth</small>
                    </div>
                    <div style="background: #fff3cd; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🌊</div>
                        <strong>Zero Trust</strong><br>
                        <small>Never trust, always verify</small>
                    </div>
                </div>
                
                <div class="quiz-immediate">
                    <h4>🎮 Access Control Scenario</h4>
                    <p>An employee leaves the company. What should happen to their access immediately?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false">Wait until their official last day</div>
                        <div class="quiz-option" data-correct="true">Revoke all access immediately upon departure</div>
                        <div class="quiz-option" data-correct="false">Give them read-only access for 30 days</div>
                        <div class="quiz-option" data-correct="false">Let their manager decide when to revoke access</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>👤 Access Control Memory:</strong><br>
                <strong>RBAC</strong> = "ROLE-BASED ACCESS CLUB"<br>
                <strong>MFA</strong> = "MULTIPLE FACTOR AUTHENTICATION" = "MORE FRIENDS ALLOWED"<br>
                Think: <strong>VIP CLUB</strong> 🎭<br>
                Different wristbands (roles) = different areas of access<br><br>
                <em>"Authentication asks 'who are you?' Authorization asks 'what can you do?'"</em>
            `,
            quiz: {
                question: "What is the main advantage of Multi-Factor Authentication (MFA) over single-factor authentication?",
                options: [
                    "It's faster to log in",
                    "It requires multiple types of credentials, making it much more secure",
                    "It costs less to implement",
                    "It works without internet connection"
                ],
                correct: 1,
                explanation: "MFA combines multiple authentication factors (something you know, have, and are), making it exponentially harder for attackers to gain unauthorized access!"
            }
        }
    ]
}; 