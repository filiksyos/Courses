const cloudIoTData = {
    title: "🌐 Chapter 5: Cloud in IoT",
    chunks: [
        {
            content: `
                <div class="concept-box">
                    <h5>🌐 IoT + Cloud = Perfect Match</h5>
                    <p>When smart devices meet infinite cloud power!</p>
                </div>
                
                <h3>Why IoT Needs the Cloud ☁️</h3>
                <p>IoT devices are <span class="highlight">smart but limited</span>. The cloud provides what they lack:</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="background: #e3f2fd; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">💾</div>
                        <h5>Storage</h5>
                        <p>Massive data capacity</p>
                    </div>
                    <div style="background: #f3e5f5; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">⚡</div>
                        <h5>Computing Power</h5>
                        <p>Process complex analytics</p>
                    </div>
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🔒</div>
                        <h5>Security</h5>
                        <p>Enterprise-grade protection</p>
                    </div>
                    <div style="background: #fff3cd; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">📊</div>
                        <h5>Analytics</h5>
                        <p>AI/ML insights</p>
                    </div>
                </div>
                
                <div class="quiz-immediate">
                    <h4>🎮 IoT Challenge</h4>
                    <p>A smart home has 50 sensors generating data 24/7. What's the main reason to use cloud storage?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false">Cloud storage is free</div>
                        <div class="quiz-option" data-correct="true">Unlimited scalability and remote access</div>
                        <div class="quiz-option" data-correct="false">Better device performance</div>
                        <div class="quiz-option" data-correct="false">No internet required</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🌐 IoT+Cloud Memory:</strong><br>
                <strong>SCSA</strong> = "SUPER COOL SMART ALLIANCE"<br>
                💾 <strong>S</strong>torage = "SPACE STATION"<br>
                ⚡ <strong>C</strong>ompute = "CALCULATION CENTER"<br>
                🔒 <strong>S</strong>ecurity = "SHIELD SYSTEM"<br>
                📊 <strong>A</strong>nalytics = "ANSWER ANALYZER"<br><br>
                <em>"IoT devices are like smartphones - they need the cloud to be truly smart!"</em>
            `,
            quiz: {
                question: "What is the primary benefit of integrating IoT with cloud computing?",
                options: [
                    "Reduced device costs",
                    "Scalable storage, processing, and analytics capabilities",
                    "Faster internet connections",
                    "Elimination of all security risks"
                ],
                correct: 1,
                explanation: "Cloud provides the scalable infrastructure that IoT devices need for data storage, processing, and advanced analytics!"
            }
        },
        {
            content: `
                <div class="concept-box">
                    <h5>🏢 Cloud-Based IoT Platforms</h5>
                    <p>The command centers for your IoT empire!</p>
                </div>
                
                <h3>Major IoT Cloud Platforms 🎯</h3>
                <p>Leading cloud providers offer <span class="highlight">comprehensive IoT platforms</span> that handle everything from device management to data analytics:</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="background: #fff3cd; padding: 15px; border-radius: 10px;">
                        <h5>☁️ AWS IoT Core</h5>
                        <p><strong>Amazon's IoT Platform</strong></p>
                        <ul style="font-size: 0.9rem; margin-top: 10px;">
                            <li>Device connectivity & management</li>
                            <li>Message broker (MQTT)</li>
                            <li>Rules engine for data routing</li>
                        </ul>
                    </div>
                    
                    <div style="background: #d1ecf1; padding: 15px; border-radius: 10px;">
                        <h5>🔷 Azure IoT Suite</h5>
                        <p><strong>Microsoft's IoT Solution</strong></p>
                        <ul style="font-size: 0.9rem; margin-top: 10px;">
                            <li>IoT Hub for device communication</li>
                            <li>Digital twins</li>
                            <li>Edge computing capabilities</li>
                        </ul>
                    </div>
                    
                    <div style="background: #d4edda; padding: 15px; border-radius: 10px;">
                        <h5>📱 Google Cloud IoT</h5>
                        <p><strong>Google's IoT Platform</strong></p>
                        <ul style="font-size: 0.9rem; margin-top: 10px;">
                            <li>Cloud IoT Core</li>
                            <li>Machine learning integration</li>
                            <li>BigQuery for analytics</li>
                        </ul>
                    </div>
                </div>
                
                <h4>🔧 Common IoT Platform Features:</h4>
                <ul>
                    <li>📱 <strong>Device Management</strong> - Register, monitor, update devices</li>
                    <li>📡 <strong>Connectivity</strong> - MQTT, HTTP, WebSocket protocols</li>
                    <li>🔒 <strong>Security</strong> - Authentication, encryption, certificates</li>
                    <li>📊 <strong>Data Processing</strong> - Real-time analytics and ML</li>
                    <li>📈 <strong>Visualization</strong> - Dashboards and reporting</li>
                </ul>
                
                <div class="quiz-immediate">
                    <h4>🎯 Platform Comparison</h4>
                    <p>Which protocol is most commonly used for IoT device communication in cloud platforms?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false">FTP (File Transfer Protocol)</div>
                        <div class="quiz-option" data-correct="true">MQTT (Message Queuing Telemetry Transport)</div>
                        <div class="quiz-option" data-correct="false">SMTP (Simple Mail Transfer Protocol)</div>
                        <div class="quiz-option" data-correct="false">SSH (Secure Shell)</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🏢 IoT Platform Memory:</strong><br>
                <strong>AWS</strong> = "AMAZING WEB SERVICES"<br>
                <strong>Azure</strong> = "A-Z USER RESOURCES EVERYWHERE"<br>
                <strong>Google</strong> = "GREAT ONLINE OPERATIONS"<br><br>
                <strong>MQTT</strong> = "MESSAGES QUICKLY TRAVEL TOGETHER"<br><br>
                <em>"Think of IoT platforms as air traffic control for smart devices!"</em>
            `,
            quiz: {
                question: "What is a 'digital twin' in the context of Azure IoT?",
                options: [
                    "A backup copy of device data",
                    "A virtual representation of a physical device or system",
                    "Two identical IoT devices",
                    "A security protocol for IoT devices"
                ],
                correct: 1,
                explanation: "A digital twin is a virtual model of a physical device that mirrors its behavior and provides insights through simulation and analytics!"
            }
        },
        // Add more chunks here following the same pattern...
        {
            content: `
                <div class="concept-box">
                    <h5>🔒 IoT Security in the Cloud</h5>
                    <p>Protecting billions of connected devices!</p>
                </div>
                
                <h3>Securing the IoT Ecosystem 🛡️</h3>
                <p>IoT security is <span class="highlight">challenging but critical</span> - billions of devices need protection!</p>
                
                <h4>🚨 IoT Security Challenges:</h4>
                <ul>
                    <li>📱 <strong>Device Constraints</strong> - Limited processing power for security</li>
                    <li>🔄 <strong>Scale</strong> - Billions of devices to secure</li>
                    <li>🔧 <strong>Updates</strong> - Difficult to patch firmware remotely</li>
                    <li>🌐 <strong>Heterogeneity</strong> - Different devices, protocols, standards</li>
                </ul>
                
                <h4>🔐 Cloud Security Solutions:</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="background: #e3f2fd; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🔑</div>
                        <strong>Identity Management</strong><br>
                        <small>Unique device certificates</small>
                    </div>
                    <div style="background: #f3e5f5; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🔒</div>
                        <strong>Encryption</strong><br>
                        <small>End-to-end protection</small>
                    </div>
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">📊</div>
                        <strong>Monitoring</strong><br>
                        <small>Threat detection</small>
                    </div>
                    <div style="background: #fff3cd; padding: 15px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 2rem;">🔄</div>
                        <strong>OTA Updates</strong><br>
                        <small>Secure firmware updates</small>
                    </div>
                </div>
                
                <div class="quiz-immediate">
                    <h4>🎮 Security Scenario</h4>
                    <p>A smart city has 10,000 traffic sensors. What's the biggest security challenge?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false">Individual device encryption</div>
                        <div class="quiz-option" data-correct="true">Managing security at massive scale</div>
                        <div class="quiz-option" data-correct="false">Network bandwidth limitations</div>
                        <div class="quiz-option" data-correct="false">Device battery life</div>
                    </div>
                </div>
            `,
            memoryHack: `
                <strong>🔒 IoT Security Memory:</strong><br>
                <strong>MEMO</strong> = "MAJOR ELECTRONIC MONITORING OPERATIONS"<br>
                🔑 <strong>M</strong>anagement = "MASTER KEY"<br>
                🔒 <strong>E</strong>ncryption = "ENVELOPE PROTECTION"<br>
                📊 <strong>M</strong>onitoring = "MOTION DETECTOR"<br>
                🔄 <strong>O</strong>TA Updates = "OVER-THE-AIR ORCHESTRA"<br><br>
                <em>"IoT security is like city security - protect every entrance!"</em>
            `,
            quiz: {
                question: "What does OTA stand for in IoT security?",
                options: [
                    "Over-The-Air (wireless updates)",
                    "Only-Trust-Authenticated",
                    "Optimal-Time-Access",
                    "Organized-Threat-Analysis"
                ],
                correct: 0,
                explanation: "OTA (Over-The-Air) refers to wirelessly updating device firmware and software without physical access to the device!"
            }
        }
    ]
}; 