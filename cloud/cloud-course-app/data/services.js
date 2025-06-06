const cloudServicesData = {
    title: "🏗️ Chapter 3: Cloud Services",
    chunks: [
        {
            content: `
                <div class="concept-box">
                    <h5>🏗️ Cloud Service Models Overview</h5>
                    <p>Three fundamental layers that build the cloud computing pyramid!</p>
                </div>
                
                <h3>The Cloud Service Stack</h3>
                <p>Think of cloud services as a <span class="highlight">three-layer cake</span> 🍰 where each layer provides different levels of abstraction:</p>
                
                <div class="mermaid">
                graph TD
                    A[📱 Software as a Service - SaaS] --> B[🛠️ Platform as a Service - PaaS]
                    B --> C[🏗️ Infrastructure as a Service - IaaS]
                    
                    A1[Gmail, Office 365, Salesforce] --> A
                    B1[Heroku, Google App Engine] --> B
                    C1[AWS EC2, Azure VMs] --> C
                </div>
                
                <div class="quiz-immediate">
                    <h4>🎮 Quick Match Game</h4>
                    <p>Match each service to its correct layer:</p>
                    <div class="drag-drop-area">
                        <div class="drag-items">
                            <div class="drag-item" draggable="true" data-item="Gmail">📧 Gmail</div>
                            <div class="drag-item" draggable="true" data-item="AWS EC2">☁️ AWS EC2</div>
                            <div class="drag-item" draggable="true" data-item="Heroku">🛠️ Heroku</div>
                        </div>
                        <div class="drop-zones">
                            <div class="drop-zone" data-answer="Gmail">📱 SaaS (Software)</div>
                            <div class="drop-zone" data-answer="Heroku">🛠️ PaaS (Platform)</div>
                            <div class="drop-zone" data-answer="AWS EC2">🏗️ IaaS (Infrastructure)</div>
                        </div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🏗️ Service Stack Memory:</strong><br>
                <strong>SaaS</strong> = "SOFTWARE for AUNTS" (ready-to-use apps)<br>
                <strong>PaaS</strong> = "PLATFORM for PROS" (developer tools)<br>
                <strong>IaaS</strong> = "INFRASTRUCTURE for ARCHITECTS" (raw computing)<br><br>
                <em>"From bottom to top: Build → Develop → Use"</em>
            `,
            quiz: {
                question: "Which cloud service model requires the LEAST technical expertise from users?",
                options: [
                    "Infrastructure as a Service (IaaS)",
                    "Platform as a Service (PaaS)", 
                    "Software as a Service (SaaS)",
                    "All require equal expertise"
                ],
                correct: 2,
                explanation: "SaaS is ready-to-use software that requires no technical setup - just like using Gmail or Netflix!"
            }
        },
        {
            content: `
                <div class="concept-box">
                    <h5>🏗️ Infrastructure as a Service (IaaS)</h5>
                    <p>The foundation layer - raw computing power on demand!</p>
                </div>
                
                <h3>IaaS: Your Virtual Data Center 🏢</h3>
                <p>IaaS gives you <span class="highlight">virtualized computing resources</span> over the internet. It's like renting a fully equipped computer lab without buying the hardware!</p>
                
                <h4>🔧 What IaaS Provides:</h4>
                <ul>
                    <li>🖥️ <strong>Virtual Machines</strong> - Computers in the cloud</li>
                    <li>💾 <strong>Storage</strong> - Hard drives you can't touch</li>
                    <li>🌐 <strong>Networking</strong> - Virtual cables and routers</li>
                    <li>🔥 <strong>Firewalls</strong> - Digital security guards</li>
                    <li>⚖️ <strong>Load Balancers</strong> - Traffic directors</li>
                </ul>
                
                <h4>📊 Popular IaaS Examples:</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="background: #fff3cd; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">☁️</div>
                        <strong>AWS EC2</strong><br>
                        <small>Amazon's virtual machines</small>
                    </div>
                    <div style="background: #d1ecf1; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🔷</div>
                        <strong>Azure VMs</strong><br>
                        <small>Microsoft's cloud servers</small>
                    </div>
                    <div style="background: #d4edda; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">☁️</div>
                        <strong>Google Compute</strong><br>
                        <small>Google's computing power</small>
                    </div>
                </div>
                
                <div class="quiz-immediate">
                    <h4>🎯 IaaS Scenario</h4>
                    <p>Your startup needs 50 servers for Black Friday traffic, but only 5 servers normally. What's the IaaS advantage?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="true">Scale up for Black Friday, scale down after - pay only for what you use</div>
                        <div class="quiz-option" data-correct="false">Buy 50 physical servers and keep them year-round</div>
                        <div class="quiz-option" data-correct="false">Rent a physical data center permanently</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🏗️ IaaS Memory Trick:</strong><br>
                <strong>IaaS</strong> = "I'LL ASK for SERVERS" <br>
                Think: <strong>LEGO BLOCKS</strong> 🧱<br>
                You get basic building blocks (CPU, RAM, Storage) and build whatever you want!<br><br>
                <em>"Raw materials for digital construction"</em>
            `,
            quiz: {
                question: "What is the main advantage of IaaS over traditional physical servers?",
                options: [
                    "Better security",
                    "Faster processing speed",
                    "Scalability and pay-per-use pricing",
                    "No internet connection required"
                ],
                correct: 2,
                explanation: "IaaS allows you to scale resources up or down instantly and pay only for what you use, unlike physical servers that require upfront investment!"
            }
        },
        {
            content: `
                <div class="concept-box">
                    <h5>🛠️ Platform as a Service (PaaS)</h5>
                    <p>The developer's playground - focus on code, not infrastructure!</p>
                </div>
                
                <h3>PaaS: Your Development Kitchen 👨‍🍳</h3>
                <p>PaaS provides a <span class="highlight">ready-to-use development environment</span>. It's like a fully equipped kitchen where you just cook - no need to install ovens or buy utensils!</p>
                
                <h4>🍳 What PaaS Includes:</h4>
                <ul>
                    <li>💻 <strong>Runtime Environment</strong> - Where your code lives</li>
                    <li>🗃️ <strong>Database Management</strong> - Data storage made easy</li>
                    <li>🌐 <strong>Web Server</strong> - Serves your app to users</li>
                    <li>🔧 <strong>Development Tools</strong> - Code, test, deploy</li>
                    <li>📊 <strong>Analytics & Monitoring</strong> - Watch your app perform</li>
                </ul>
                
                <div class="mermaid">
                graph LR
                    A[👨‍💻 Developer] --> B[📝 Write Code]
                    B --> C[🚀 Deploy to PaaS]
                    C --> D[🌍 App Goes Live]
                    
                    C --> E[🛠️ PaaS Handles:<br/>- Servers<br/>- OS Updates<br/>- Security<br/>- Scaling]
                </div>
                
                <h4>🏆 Popular PaaS Platforms:</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="background: #e7d4f7; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🟣</div>
                        <strong>Heroku</strong><br>
                        <small>Deploy with git push</small>
                    </div>
                    <div style="background: #d1ecf1; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🔷</div>
                        <strong>Azure App Service</strong><br>
                        <small>Microsoft's PaaS</small>
                    </div>
                    <div style="background: #d4edda; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">📱</div>
                        <strong>Google App Engine</strong><br>
                        <small>Auto-scaling apps</small>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🛠️ PaaS Memory Hook:</strong><br>
                <strong>PaaS</strong> = "PASS the PLATFORM to PROGRAMMERS"<br>
                Think: <strong>READY-MADE KITCHEN</strong> 🍳<br>
                All tools provided, you just cook (code)!<br><br>
                <em>"Focus on the recipe, not building the kitchen"</em>
            `,
            quiz: {
                question: "A developer wants to deploy a web app without managing servers, operating systems, or runtime environments. Which service is best?",
                options: [
                    "Infrastructure as a Service (IaaS)",
                    "Platform as a Service (PaaS)", 
                    "Software as a Service (SaaS)",
                    "Function as a Service (FaaS)"
                ],
                correct: 1,
                explanation: "PaaS abstracts away infrastructure management, letting developers focus purely on writing and deploying code!"
            }
        },
        {
            content: `
                <div class="concept-box">
                    <h5>📱 Software as a Service (SaaS)</h5>
                    <p>Ready-to-use applications - just click and go!</p>
                </div>
                
                <h3>SaaS: Your Digital Apps 📱</h3>
                <p>SaaS delivers <span class="highlight">complete, ready-to-use applications</span> over the internet. It's like having a restaurant meal delivered - no cooking, no cleaning, just enjoy!</p>
                
                <h4>🎯 SaaS Characteristics:</h4>
                <ul>
                    <li>🌐 <strong>Web-based Access</strong> - Use any browser, anywhere</li>
                    <li>💳 <strong>Subscription Model</strong> - Pay monthly/yearly</li>
                    <li>🔄 <strong>Automatic Updates</strong> - Always latest version</li>
                    <li>👥 <strong>Multi-tenant</strong> - Shared but isolated</li>
                    <li>📱 <strong>Zero Installation</strong> - No software to download</li>
                </ul>
                
                <h4>🌟 Everyday SaaS Examples:</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="background: #fff3cd; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">📧</div>
                        <strong>Gmail</strong><br>
                        <small>Email service</small>
                    </div>
                    <div style="background: #d1ecf1; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">📄</div>
                        <strong>Office 365</strong><br>
                        <small>Document suite</small>
                    </div>
                    <div style="background: #f8d7da; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">📈</div>
                        <strong>Salesforce</strong><br>
                        <small>CRM platform</small>
                    </div>
                    <div style="background: #d4edda; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🎵</div>
                        <strong>Spotify</strong><br>
                        <small>Music streaming</small>
                    </div>
                </div>
                
                <div class="quiz-immediate">
                    <h4>🎮 SaaS Benefits Quiz</h4>
                    <p>Why do companies love SaaS applications?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false">They can modify the source code</div>
                        <div class="quiz-option" data-correct="true">No installation, maintenance, or updates needed</div>
                        <div class="quiz-option" data-correct="false">They own the software permanently</div>
                        <div class="quiz-option" data-correct="false">They get dedicated servers</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>📱 SaaS Memory Helper:</strong><br>
                <strong>SaaS</strong> = "SOFTWARE as a SNACK" 🍿<br>
                Think: <strong>NETFLIX</strong> 📺<br>
                Ready to consume, no preparation needed!<br><br>
                <em>"Click and use - that's the SaaS way!"</em>
            `,
            quiz: {
                question: "What is the primary business model for most SaaS applications?",
                options: [
                    "One-time purchase",
                    "Subscription-based pricing",
                    "Advertisement revenue only", 
                    "Free with no monetization"
                ],
                correct: 1,
                explanation: "SaaS typically uses subscription models (monthly/yearly) which provides predictable revenue and continuous service improvements!"
            }
        },
        {
            content: `
                <div class="concept-box">
                    <h5>🔄 Other Cloud Service Models</h5>
                    <p>Beyond the big three - specialized cloud services for every need!</p>
                </div>
                
                <h3>The Extended Cloud Family 🏠</h3>
                <p>While IaaS, PaaS, and SaaS are the main trio, the cloud family has grown with <span class="highlight">specialized services</span>:</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="background: #e3f2fd; padding: 15px; border-radius: 10px;">
                        <div style="font-size: 1.5rem; margin-bottom: 10px;">🌐 <strong>NaaS</strong></div>
                        <p><strong>Network as a Service</strong><br>
                        Virtual networking infrastructure<br>
                        <em>Example: AWS VPC, Azure Virtual Network</em></p>
                    </div>
                    
                    <div style="background: #f3e5f5; padding: 15px; border-radius: 10px;">
                        <div style="font-size: 1.5rem; margin-bottom: 10px;">🖥️ <strong>DaaS</strong></div>
                        <p><strong>Desktop as a Service</strong><br>
                        Virtual desktops in the cloud<br>
                        <em>Example: Amazon WorkSpaces</em></p>
                    </div>
                    
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 10px;">
                        <div style="font-size: 1.5rem; margin-bottom: 10px;">🗄️ <strong>DBaaS</strong></div>
                        <p><strong>Database as a Service</strong><br>
                        Managed database hosting<br>
                        <em>Example: AWS RDS, MongoDB Atlas</em></p>
                    </div>
                    
                    <div style="background: #fff3cd; padding: 15px; border-radius: 10px;">
                        <div style="font-size: 1.5rem; margin-bottom: 10px;">🔒 <strong>SECaaS</strong></div>
                        <p><strong>Security as a Service</strong><br>
                        Cloud-based security solutions<br>
                        <em>Example: Cloudflare, Auth0</em></p>
                    </div>
                </div>
                
                <h4>🎯 The "Everything as a Service" Trend</h4>
                <p>The pattern is simple: Take any IT function and deliver it as a cloud service!</p>
                
                <div class="mermaid">
                graph TD
                    A[Traditional IT] --> B[Cloud Transformation]
                    B --> C[XaaS - Everything as a Service]
                    
                    C --> D[🏗️ Infrastructure]
                    C --> E[🛠️ Platform] 
                    C --> F[📱 Software]
                    C --> G[🗄️ Database]
                    C --> H[🔒 Security]
                    C --> I[🌐 Network]
                    C --> J[... and more!]
                </div>
            `,
            memoryHack: `
                <strong>🔄 XaaS Memory Map:</strong><br>
                <strong>XaaS</strong> = "ANYTHING as a SERVICE"<br>
                Think: <strong>BUFFET RESTAURANT</strong> 🍽️<br>
                Pick and choose what you need from the cloud menu!<br><br>
                <em>"If it exists in IT, there's probably a cloud service for it!"</em>
            `,
            quiz: {
                question: "What does 'XaaS' stand for in cloud computing?",
                options: [
                    "eXtreme as a Service",
                    "eXtra as a Service", 
                    "Everything/Anything as a Service",
                    "eXclusive as a Service"
                ],
                correct: 2,
                explanation: "XaaS represents the trend of delivering any IT functionality as a cloud service - from infrastructure to specialized applications!"
            }
        },
        {
            content: `
                <div class="concept-box">
                    <h5>☁️ Cloud Storage Solutions</h5>
                    <p>Your files, everywhere, anytime - the magic of cloud storage!</p>
                </div>
                
                <h3>Cloud Storage: Your Digital Warehouse 📦</h3>
                <p>Cloud storage provides <span class="highlight">virtualized, scalable, on-demand storage</span> accessible from anywhere with internet. It's like having infinite closet space that follows you everywhere!</p>
                
                <h4>🔑 Key Features:</h4>
                <ul>
                    <li>♾️ <strong>Scalable</strong> - Grows with your needs</li>
                    <li>🌍 <strong>Accessible</strong> - From any device, anywhere</li>
                    <li>🔐 <strong>Secure</strong> - Encrypted and protected</li>
                    <li>🔄 <strong>Synchronized</strong> - Changes update everywhere</li>
                    <li>💰 <strong>Cost-effective</strong> - Pay for what you use</li>
                </ul>
                
                <h4>📁 Types of Cloud Storage:</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="background: #e3f2fd; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">📄</div>
                        <strong>File Storage</strong><br>
                        <small>Documents, photos, videos</small><br>
                        <em>Dropbox, Google Drive</em>
                    </div>
                    <div style="background: #f3e5f5; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🗃️</div>
                        <strong>Block Storage</strong><br>
                        <small>Raw storage volumes</small><br>
                        <em>AWS EBS, Azure Disks</em>
                    </div>
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🌐</div>
                        <strong>Object Storage</strong><br>
                        <small>Web-scale data storage</small><br>
                        <em>AWS S3, Azure Blob</em>
                    </div>
                </div>
                
                <div class="quiz-immediate">
                    <h4>🎯 Storage Scenario</h4>
                    <p>You're building a photo-sharing app that needs to store millions of images. Which storage type is best?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false">File Storage (like Dropbox)</div>
                        <div class="quiz-option" data-correct="true">Object Storage (like AWS S3)</div>
                        <div class="quiz-option" data-correct="false">Block Storage (like hard drives)</div>
                        <div class="quiz-option" data-correct="false">Local server storage</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>☁️ Storage Memory Guide:</strong><br>
                <strong>File Storage</strong> = "FILE CABINET" 🗄️ (organized folders)<br>
                <strong>Block Storage</strong> = "LEGO BLOCKS" 🧱 (raw building pieces)<br>
                <strong>Object Storage</strong> = "WAREHOUSE" 📦 (massive scale)<br><br>
                <em>"Choose storage like choosing containers!"</em>
            `,
            quiz: {
                question: "What is the main advantage of cloud storage over traditional local storage?",
                options: [
                    "Faster access speeds",
                    "Accessibility from anywhere and automatic backup",
                    "Lower cost for small amounts of data",
                    "No internet connection required"
                ],
                correct: 1,
                explanation: "Cloud storage's biggest advantage is accessibility from any device anywhere, plus automatic backup and synchronization!"
            }
        },
        {
            content: `
                <div class="concept-box">
                    <h5>🔧 Cloud Management & Operations</h5>
                    <p>Running the cloud show - management, monitoring, and more!</p>
                </div>
                
                <h3>Cloud Management: The Control Center 🎛️</h3>
                <p>Cloud management involves <span class="highlight">provisioning, monitoring, and optimizing</span> cloud resources. Think of it as being the conductor of a digital orchestra!</p>
                
                <h4>🎯 Key Management Areas:</h4>
                
                <div style="margin: 20px 0;">
                    <div style="background: #e3f2fd; padding: 15px; border-radius: 10px; margin: 10px 0;">
                        <h5>⚙️ Resource Provisioning</h5>
                        <p>Automatically creating and configuring cloud resources when needed</p>
                        <em>Like having a smart assistant that sets up your workspace</em>
                    </div>
                    
                    <div style="background: #f3e5f5; padding: 15px; border-radius: 10px; margin: 10px 0;">
                        <h5>📊 SLA & QoS Management</h5>
                        <p>Ensuring service levels meet agreed performance standards</p>
                        <em>Like a quality inspector ensuring everything runs smoothly</em>
                    </div>
                    
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 10px; margin: 10px 0;">
                        <h5>💰 Billing & Cost Optimization</h5>
                        <p>Tracking usage and optimizing costs across cloud services</p>
                        <em>Like a financial advisor for your cloud spending</em>
                    </div>
                    
                    <div style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 10px 0;">
                        <h5>🔒 Security & Backup</h5>
                        <p>Protecting data and ensuring business continuity</p>
                        <em>Like a security guard and insurance policy combined</em>
                    </div>
                </div>
                
                <h4>📈 Management Tools & Platforms:</h4>
                <ul>
                    <li>🌐 <strong>AWS CloudFormation</strong> - Infrastructure as Code</li>
                    <li>🔷 <strong>Azure Resource Manager</strong> - Resource grouping and management</li>
                    <li>📊 <strong>CloudWatch/Azure Monitor</strong> - Performance monitoring</li>
                    <li>💰 <strong>Cost Management Tools</strong> - Budget tracking and optimization</li>
                </ul>
                
                <div class="quiz-immediate">
                    <h4>🎮 Management Challenge</h4>
                    <p>Your company's cloud bill suddenly doubled last month. What's the FIRST step in cloud cost management?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="true">Monitor and analyze resource usage patterns</div>
                        <div class="quiz-option" data-correct="false">Immediately shut down all non-essential services</div>
                        <div class="quiz-option" data-correct="false">Switch to a cheaper cloud provider</div>
                        <div class="quiz-option" data-correct="false">Negotiate with the current provider for discounts</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🔧 Management Memory Framework:</strong><br>
                <strong>SPBS</strong> = "SUPER POWERED BUSINESS SOLUTIONS"<br>
                📊 <strong>S</strong>LA & QoS<br>
                ⚙️ <strong>P</strong>rovisioning<br>
                💰 <strong>B</strong>illing<br>
                🔒 <strong>S</strong>ecurity<br><br>
                <em>"Managing clouds is like managing a smart city!"</em>
            `,
            quiz: {
                question: "What is Infrastructure as Code (IaC) in cloud management?",
                options: [
                    "Writing software applications in the cloud",
                    "Defining and managing infrastructure using code/scripts",
                    "Converting physical servers to virtual machines",
                    "Programming cloud security policies"
                ],
                correct: 1,
                explanation: "Infrastructure as Code allows you to define, deploy, and manage infrastructure using code files rather than manual processes!"
            }
        },
        {
            content: `
                <div class="concept-box">
                    <h5>🚀 DevOps and the Cloud</h5>
                    <p>Where development meets operations in perfect harmony!</p>
                </div>
                
                <h3>DevOps: Breaking Down the Walls 🧱➡️🤝</h3>
                <p>DevOps is a <span class="highlight">culture and set of practices</span> that combines software development (Dev) and IT operations (Ops). The cloud is DevOps's best friend, enabling seamless collaboration!</p>
                
                <h4>🔄 The DevOps Lifecycle:</h4>
                <div class="mermaid">
                graph LR
                    A[📝 Plan] --> B[👨‍💻 Code]
                    B --> C[🔨 Build]
                    C --> D[🧪 Test]
                    D --> E[🚀 Deploy]
                    E --> F[📊 Monitor]
                    F --> G[🎨 Configure]
                    G --> A
                    
                    style A fill:#e3f2fd
                    style B fill:#f3e5f5
                    style C fill:#e8f5e8
                    style D fill:#fff3cd
                    style E fill:#fce4ec
                    style F fill:#e0f2f1
                    style G fill:#f3e5f5
                </div>
                
                <h4>☁️ How Cloud Enables DevOps:</h4>
                <ul>
                    <li>⚡ <strong>Rapid Provisioning</strong> - Spin up environments instantly</li>
                    <li>🔄 <strong>Automation</strong> - Infrastructure as Code</li>
                    <li>📊 <strong>Monitoring & Logging</strong> - Real-time insights</li>
                    <li>🌍 <strong>Global Collaboration</strong> - Teams work from anywhere</li>
                    <li>💰 <strong>Cost Efficiency</strong> - Pay for what you use</li>
                </ul>
                
                <h4>🛠️ Essential DevOps Tools in the Cloud:</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="background: #e3f2fd; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🔄</div>
                        <strong>Jenkins</strong><br>
                        <small>CI/CD automation</small>
                    </div>
                    <div style="background: #f3e5f5; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">📋</div>
                        <strong>GitHub Actions</strong><br>
                        <small>Workflow automation</small>
                    </div>
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🐳</div>
                        <strong>Docker</strong><br>
                        <small>Containerization</small>
                    </div>
                    <div style="background: #fff3cd; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🎯</div>
                        <strong>Ansible</strong><br>
                        <small>Configuration management</small>
                    </div>
                </div>
                
                <div class="quiz-immediate">
                    <h4>🎯 DevOps Philosophy</h4>
                    <p>What's the main goal of DevOps culture?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false">Replace developers with operations team</div>
                        <div class="quiz-option" data-correct="true">Break down silos between development and operations for faster, reliable delivery</div>
                        <div class="quiz-option" data-correct="false">Reduce the number of IT staff needed</div>
                        <div class="quiz-option" data-correct="false">Focus only on automated testing</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🚀 DevOps Memory Method:</strong><br>
                <strong>DevOps</strong> = "DEVELOPERS ❤️ OPERATIONS"<br>
                Think: <strong>ASSEMBLY LINE</strong> 🏭<br>
                Continuous flow from idea to production!<br><br>
                <em>"Build bridges, not walls between teams!"</em>
            `,
            quiz: {
                question: "Which practice is most central to DevOps philosophy?",
                options: [
                    "Manual deployment processes",
                    "Continuous Integration and Continuous Deployment (CI/CD)",
                    "Separate development and operations teams", 
                    "Quarterly software releases"
                ],
                correct: 1,
                explanation: "CI/CD automates the integration, testing, and deployment process, enabling the rapid, reliable delivery that DevOps aims for!"
            }
        }
    ]
}; 