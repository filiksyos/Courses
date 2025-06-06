Here are the main topics extracted from the three uploaded presentations:

---

### **1. Chapter 5 – Database Security and Authorization**

#### **A. Introduction to Database Security**

* Security threats: integrity, availability, confidentiality
* Countermeasures: access control, inference control, flow control, encryption
* Security mechanisms: discretionary vs. mandatory

#### **B. Role of the DBA**

* User account and privilege management
* Database audits and access logging

#### **C. Discretionary Access Control (DAC)**

* Account-level and relation-level privileges
* SQL privileges: SELECT, INSERT, DELETE, UPDATE, REFERENCES
* Access matrix model and privilege propagation
* Use of views for access control
* Revoking privileges and GRANT OPTION

#### **D. Mandatory Access Control (MAC) and RBAC**

* Security classifications (TS, S, C, U)
* Role-Based Access Control (RBAC): roles, permissions, hierarchies

#### **E. Statistical Database Security**

* Protection against inference of individual data from statistical queries

#### **F. Encryption and Public Key Infrastructure (PKI)**

* Symmetric and asymmetric encryption
* Use of public and private keys

---

### **2. Chapter 3 – Concurrency Control Techniques**

#### **A. Purpose of Concurrency Control**

* Ensuring isolation, consistency, and resolving conflicts

#### **B. Lock-Based Protocols**

* Binary locks, shared/exclusive locks
* Lock conversion (upgrade/downgrade)
* Lock compatibility and lock table management

#### **C. Two-Phase Locking (2PL)**

* Growing and shrinking phases
* Variants: basic and conservative 2PL

#### **D. Deadlock and Starvation**

* Deadlock prevention and resolution (wait-die, wound-wait, cautious waiting)
* Starvation and fair scheduling

#### **E. Timestamp Ordering**

* Basic timestamp ordering algorithm
* Read\_TS and Write\_TS rules

#### **F. Multiversion Concurrency Control**

* Version management with timestamps
* Read and write version selection
* Ensuring serializability

#### **G. Validation-Based (Optimistic) Techniques**

* Read, validation, and write phases
* Conflict detection at commit

#### **H. Granularity of Data Items**

* Locking at different levels (tuple, page, table)
* Multiple Granularity Locking (MGL)
* Intention locks (IS, IX, SIX)
* Rules and compatibility matrix

---

### **3. Chapter 4 – Database Recovery Techniques**

#### **A. Purpose of Recovery**

* Restoring database consistency after failure

#### **B. Types of Failures**

* Transaction, system, and media failures

#### **C. Transaction Logs**

* Before and after image (BFIM, AFIM)

#### **D. Data Update Techniques**

* Immediate, deferred, shadow, in-place updates

#### **E. Caching and Flush Strategies**

* Steal/No-Steal and Force/No-Force combinations

#### **F. Undo and Redo**

* Transaction rollback and roll-forward strategies

#### **G. Write-Ahead Logging (WAL)**

* Logging rules for recovery integrity

#### **H. Checkpointing**

* Periodic flushing and log recording for minimizing recovery effort

#### **I. Recovery Schemes**

* Deferred update, immediate update (Undo/Redo combinations)
* Shadow paging

#### **J. Recovery in Multidatabase Systems**

* Two-phase commit protocol
* Global recovery coordination

---

Let me know if you want summaries, visual diagrams, or review questions based on these topics.
