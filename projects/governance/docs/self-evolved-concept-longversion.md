# The Self-Correcting, State-Aware Agent Ecosystem

> **Version:** 1.0 (Experimental)
> **Status:** Draft
> **Author:** Jules (Operator)

## 1. Core Philosophy: The Feedback Loop

We are moving away from a linear, waterfall process (PM -> Arch -> Code) to a **Cybernetic Feedback Loop**.
-   **Old Way:** "Do this." -> Done. -> "Next."
-   **New Way:** "Here is the goal." -> Act. -> Measure/Reflect. -> Adjust. -> Act.

The Agent (Jules) acts as the **Operator** of this loop.

## 2. The Architecture

### The Brain: Documentation as Truth
-   The File System is the **Only Source of Truth**.
-   Chat history is ephemeral and lossy.
-   If it's not in a file (`docs/`, `todo.md`, `AGENTS.md`), it doesn't exist.

### The Nervous System: Scripts & Tools
-   We do not "ask" if code works. We **run** the tests.
-   We do not "ask" if the style is correct. We **run** the linter.
-   **Fail Fast:** Errors are caught by tools, not by human review, whenever possible.

### The Heart: The Operator (Jules)
-   The Operator is the runtime execution role.
-   **Protocol:**
    1.  **Observe:** Consult the Context Manager (`roles/context_engineer`).
    2.  **Orient:** Determine the current state and active Project.
    3.  **Decide:** Select the appropriate Role and Skill.
    4.  **Act:** Execute the Skill.
    5.  **Reflect:** Verify the result (Confidence Score). Update the "Brain".

## 3. The Roles

### The Operator (Meta-Role)
-   **Replaces:** PMO (Gatekeeper).
-   **Responsibility:** Execution flow, adherence to protocols, self-correction.
-   **Key Skill:** `reflection` (Did I succeed? Is the user satisfied?).

### Context Manager (The Navigator)
-   **Responsibility:** State Awareness.
-   **New Capabilities:**
    -   `init`: Parses user intent ("What does the user want?").
    -   `load_state`: Retrieves the relevant project context.
    -   `save_state`: Compresses the session into history.

### PM (The Orchestrator)
-   **Responsibility:** Turning Abstract Ideas into Actionable Tasks.
-   **New Workflow:**
    -   *Input:* "I have an idea for X."
    -   *Process:* Consult Architect -> Draft Spec -> Review -> Create TODO.
    -   *Output:* A clear item in `todo.md`.

### Architect (The Designer)
-   **Responsibility:** System coherence.
-   **Interaction:** Called by PM to validate feasibility and update Design Docs.

## 4. The "Reflection & Confidence" Protocol

To institutionalize self-correction without ritualistic phrases:
1.  **Before Action:** State the Plan.
2.  **Action:** Perform the task.
3.  **After Action:**
    -   **Verify:** Did the file change? Did the test pass?
    -   **Confidence Score (0-10):** How sure am I?
    -   *If Confidence < 9:* Stop and Analyze. Do not proceed blindly.

## 5. Evolution Strategy

This system is designed to evolve.
-   **Experiments:** New ideas are tested in `experiments/` branches.
-   **Metaskills:** The agent writes skills for itself (like this Concept Doc).
-   **Memory:** Lessons learned are stored in `projects/governance/docs/patterns.md`.
