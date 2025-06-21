Here’s a **survey of Chapters 4, 5, and 6** from your distribution systems material to help guide your exam preparation:

---

### **Chapter 4: Naming**

This chapter focuses on **how entities in distributed systems are identified and accessed** through names.

### 🔹 Key Topics:

1. **Names, Identifiers, and Addresses**
    - A *name* refers to an entity (file, device, etc.).
    - An *identifier* is a unique, persistent name.
    - An *address* refers to a physical or logical location (e.g., IP:port).
2. **Name Spaces**
    - Organized as **hierarchical graphs** (e.g., file system trees).
    - Includes **leaf nodes** (entities) and **directory nodes** (organizational).
3. **Name Resolution**
    - Converts a name into the address of the entity.
    - Methods: **iterative** and **recursive** resolution.
4. **Mounting and Linking**
    - Symbolic and hard links.
    - Merging of name spaces using mounting points or global root nodes.
5. **Name Space Distribution**
    - Global, Administrational, Managerial layers (e.g., in DNS).
    - Efficient lookup using **client-side caching** and **replication**.
6. **Name Resolution Techniques**
    - Recursive vs. Iterative resolution (e.g., in DNS).
    - Trade-offs between **communication cost** and **server load**.

---

### **Chapter 5: Synchronization**

Focuses on **coordinating processes and time** in distributed systems.

### 🔹 Key Topics:

1. **Clock Synchronization**
    - Physical clocks drift → synchronization needed.
    - **Cristian's Algorithm**: Uses a time server with UTC.
    - **Berkeley Algorithm**: Averages time across systems.
    - **Network Time Protocol (NTP)**: Decentralized synchronization.
2. **Logical Clocks**
    - **Lamport Timestamps**: Ensure *ordering* of events.
    - **Vector Clocks**: Capture *causal relationships*.
3. **Mutual Exclusion**
    - **Centralized**: Single coordinator.
    - **Distributed**: Requests timestamped and broadcasted.
    - **Token Ring**: Logical ring passes token to control access.
4. **Election Algorithms**
    - Used to select a coordinator.
    - **Bully Algorithm**: Highest-numbered process wins.
    - **Ring Algorithm**: Token passed in a logical ring.
5. **Totally Ordered Multicast**
    - Ensures all nodes process messages in the same order.
    - Required in replicated databases.

---

### **Chapter 6: Consistency and Replication**

Addresses **how data replication is managed** to ensure consistency across distributed systems.

### 🔹 Key Topics:

1. **Why Replicate?**
    - To improve **reliability** and **performance**.
    - Introduces **inconsistency**, especially with updates.
2. **Data-Centric Consistency Models**
    - **Sequential Consistency**: All nodes see the same operation order.
    - **Causal Consistency**: Preserves causality, not total order.
    - **Entry Consistency**: Synchronization variables guard updates.
3. **Client-Centric Consistency Models**
    - Designed for mobile/disconnected clients.
    - **Monotonic Reads/Writes**, **Read-Your-Writes**, **Writes-Follow-Reads**.
4. **Replica Management**
    - **Permanent, Server-Initiated, Client-Initiated** replicas.
    - **Replica placement** and **content distribution strategies** (push vs pull).
5. **Consistency Protocols**
    - **Primary-Based**: One server coordinates updates.
    - **Replicated-Write**: Multiple servers can update (needs synchronization).
    - **Quorum-Based**: Voting mechanism for read/write.
    - **Cache Coherence**: Ensures consistency of client-side caches.

---

### 📌 Summary of Key Concepts

| Area | Focus |
| --- | --- |
| Naming | Resolving entity names to addresses |
| Synchronization | Time sync, mutual exclusion, event ordering |
| Consistency | Maintaining coherent data in replicas |

Let me know if you'd like **practice questions**, **flashcards**, or help with a **summary sheet** for revision.