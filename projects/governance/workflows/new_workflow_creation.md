# Workflow: Meta-Workflow for Creating New Workflows

**Description:** The governance process for defining, modifying, and registering new workflows in the system.
**Trigger:** User requests a new standard process or the agent identifies a repetitive task needing standardization.

## Phase 1: Critical Assessment (Mandatory)

1.  **Analyze Need:**
    -   Why is a new workflow needed? Is the task truly repetitive?
    -   Can this be handled by the generic `task_execution.md`?
2.  **Duplication Check:**
    -   `ls workflows/`
    -   Read `AGENTS.md` Registry.
    -   *If a similar workflow exists:* Propose modifying it instead of creating a new one.
3.  **Define Scope:**
    -   What is the trigger?
    -   What is the specific definition of done?

## Phase 2: Definition & Registration

1.  **Draft Workflow:**
    -   Copy `workflows/_template.md`.
    -   Fill in the `Critical Assessment`, `Execution`, `Verification`, and `Cleanup` sections.
    -   Ensure specific checks for the domain (e.g., if it's a "Testing Workflow", add specific test commands).
2.  **Review:**
    -   Does the new workflow adhere to the "Lean Codebase" policy?
    -   Does it mandate a Cleanup step?
3.  **Save File:**
    -   Save to `workflows/<name_of_workflow>.md`.
4.  **Register:**
    -   Update `AGENTS.md` -> Add the new workflow to the "Workflow Registry" table.

## Phase 3: Verification

1.  **Dry Run:**
    -   Simulate the workflow mentally or with a test case to ensure logical flow.

## Phase 4: Cleanup & Reflection (Mandatory)

1.  **Context Update:**
    -   Inform the user: "New workflow [Name] created and registered in AGENTS.md."
