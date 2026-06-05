# 📘 THE TECHNICAL INTERVIEW PLAYBOOK CANVAS

┌────────────────────────────────────────────────────────────────────────┐
│ 🚀 PHASE 1: CLARIFY & BOUND (0 - 5 Mins)                               │
├────────────────────────────────────────────────────────────────────────┤
│ 💡 Goal: Uncover hidden constraints, eliminate ambiguity, map errors.  │
│                                                                        │
│ 📋 Checklist:                                                          │
│ [ ] Restate the prompt in your own words to ensure alignment.          │
│ [ ] Define Input constraints (null, empty, negative, types).           │
│ [ ] Ask about scale / volume of data.                                  │
│ [ ] Clarify output format (mutated data, new copy, specific type).     │
│                                                                        │
│ 💬 Key Scripting:                                                      │
│ "To make sure we are aligned, I am building a utility that does X..."  │
│ "What should the system do if the input is empty or invalid?"          │
└────────────────────────────────────────────────────────────────────────┘
│
▼
┌────────────────────────────────────────────────────────────────────────┐
│ 🎯 PHASE 2: STRATEGIZE & BIG-O (5 - 10 Mins)                           │
├────────────────────────────────────────────────────────────────────────┤
│ 💡 Goal: State trade-offs and get buy-in before typing code.           │
│                                                                        │
│ 📋 Checklist:                                                          │
│ [ ] Explain the brute-force (naive) approach first.                    │
│ [ ] Pitch your optimized approach (Data Structure / Mechanism).        │
│ [ ] Explicitly state Time and Space complexities using Big-O.          │
│ [ ] Pause for interviewer confirmation.                                │
│                                                                        │
│ 💬 Key Scripting:                                                      │
│ "A naive approach would take O(N^2) time because of X..."              │
│ "We can optimize this to O(N) by using a [Map/Closure] at the cost of..."│
│ "Does this design profile make sense before I begin typing?"          │
└────────────────────────────────────────────────────────────────────────┘
│
▼
┌────────────────────────────────────────────────────────────────────────┐
│ ✍️ PHASE 3: CODE WITH INTENT (10 - 25 Mins)                            │
├────────────────────────────────────────────────────────────────────────┤
│ 💡 Goal: Write production-grade, readable, defensive JavaScript code.  │
│                                                                        │
│ 📋 Checklist:                                                          │
│ [ ] Write Phase 1 Guard Clauses (input validation) immediately.        │
│ [ ] Use descriptive variable names (avoid single letters like x, y, i).│
│ [ ] Talk aloud as you type to explain JavaScript runtime engine traits. │
│ [ ] Secure scope and execution context (this, lexical scoping).        │
│                                                                        │
│ 💬 Key Scripting:                                                      │
│ "I am placing a guard clause here to prevent a crash if..."            │
│ "I am using an arrow function here to inherit the outer scope's 'this'..."│
└────────────────────────────────────────────────────────────────────────┘
│
▼
┌────────────────────────────────────────────────────────────────────────┐
│ 🔍 PHASE 4: DRY RUN & AUDIT (25 - 30 Mins)                             │
├────────────────────────────────────────────────────────────────────────┤
│ 💡 Goal: Manually test your code, catch bugs, and confirm victory.     │
│                                                                        │
│ 📋 Checklist:                                                           │
│ [ ] Walk through your code line-by-line using a small, concrete sample.│
│ [ ] Track variable values manually as your sample processes.           │
│ [ ] Actively check boundary conditions (loop edges, timeouts).         │
│ [ ] If a bug is found, explicitly acknowledge it and fix it calmly.     │
│                                                                        │
│ 💬 Key Scripting:                                                      │
│ "Let's dry-run this code manually with an input of X..."               │
│ "Looking closely at line Y, I notice a potential edge case where..."   │
└────────────────────────────────────────────────────────────────────────┘
