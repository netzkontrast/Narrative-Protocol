# Design Session Simulation: The Operator & Context Evolution

**Participants:**
-   **Jules (Operator/Meta):** Moderator and Scribe.
-   **Architect:** Systems Thinker.
-   **PM (Project Manager):** Process & Task Owner.
-   **CM (Context Manager):** State & Information Owner.

---

**Jules:** We are here to redesign the Governance system. The goal is a "Self-Correcting, State-Aware Agent Ecosystem". The user wants to replace the rigid PMO gatekeeper with a more fluid "Operator" model, driven by the Context Manager.

**Architect:** "Rigid" is the problem. Currently, PMO forces a linear path. We need Feedback Loops. The file system should be the brain. If I change a file, the system should "know".

**CM:** That's my domain. Right now, I just compress history. I need to be proactive. When a session starts, *I* should determine the state.
*Proposal:* `roles/context_engineer/skills/state`.
-   Input: User Prompt + Current Directory State.
-   Output: `Project Context`, `Current Goal`, `Suggested Role`.

**Jules:** So, instead of PMO running a hardcoded `case/switch` on the prompt, I (the Operator) ask you (CM): "Where are we?" and you analyze the *files* and the *prompt* to tell me.

**CM:** Exactly. If the user says "Fix the bug", and `projects/app/todo.md` has a high-priority bug, I route to Code. If the user says nothing, I look at `projects/governance/history/last_session.json` (which I will create) and resume.

**PM:** Wait, what about new ideas? If a user says "I want a new feature", that's not code yet.

**Architect:** Correct. That's the "Orchestration" flow.
*The Flow:*
1.  User: "I want X."
2.  CM: "This is a new Feature Request. Route to PM."
3.  PM: *Triggers `roles/pm/skills/orchestrate`.*
    -   Step A: Check if `projects/app/docs/specs/X.md` exists.
    -   Step B: If not, call Architect to draft it.
    -   Step C: Once drafted, PM converts it to a TODO.

**PM:** I don't have that skill yet. My `manage_todos` is too simple.
*Action Item:* We need to build `roles/pm/skills/orchestrate`. It needs to be able to "call" the Architect.

**Jules:** In our system, "calling" means the PM writes a prompt or a temporary file that the Operator sees, and then the Operator switches to Architect.

**Architect:** We need a standard format for this "Handover".
*Proposal:* `projects/<project>/context.md` isn't enough. We need a `session_state.json` or similar for immediate context, or we stick to the file system.
*Decision:* Stick to the file system. The PM creates a "Draft Spec" file. The Architect reviews it. The Operator sees the file is "Draft" and knows the Architect is needed.

**CM:** That's too implicit. Let's make it explicit. The PM writes to `projects/governance/todo.md`: "Architect: Review Draft X". The Operator reads the TODO and switches.

**Jules:** Simple is best. The "Todo" file is the queue.

**Architect:** One final thing. "Self-Correction". How do we bake that in?
*Proposal:* The "Confidence Score". Every Role, at the end of a Skill, must update a `confidence` metric in their output or the logs. If it's low, the Operator triggers a "Review" step.

**Jules:** Agreed. I will update `AGENTS.md` with the "Reflection Protocol".

**Summary of Decisions:**
1.  **Replace PMO logic:** Operator + CM Intelligence.
2.  **CM Upgrade:** New `state` skill to parse intent and load context.
3.  **PM Upgrade:** New `orchestrate` skill to manage the "Idea -> Spec -> Todo" pipeline.
4.  **Protocol:** "Reflection & Confidence" becomes mandatory.

---
*End of Simulation.*
