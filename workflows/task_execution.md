# Workflow: Standard Task Execution

**Description:** The default protocol for picking up a task from `TODO.md` and completing it.
**Trigger:** User assigns a task or Agent selects next task from `TODO.md`.

## Phase 1: Critical Assessment (Mandatory)

1.  **Read Task:**
    -   Read the specific entry in `TODO.md`.
    -   Understand "Context", "Requirements", and "Definition of Done".
2.  **Verify Necessity:**
    -   Is this task still relevant given the current state of the codebase?
    -   Are there blocking dependencies?
3.  **Plan:**
    -   Break down the task into atomic steps.
    -   Check `AGENTS.md` for any specific constraints.

## Phase 2: Execution

1.  **Implementation:**
    -   Write/Modify code.
    -   Create necessary files.
2.  **Continuous Verification:**
    -   After every file change, verify with `read_file` or `ls`.

## Phase 3: Verification

1.  **Test:**
    -   Run the code (if applicable).
    -   Verify against "Definition of Done" in `TODO.md`.

## Phase 4: Cleanup & Reflection (Mandatory)

1.  **Log Completion:**
    -   Remove the task from `TODO.md`.
    -   Add the task to `COMPLETED.md` (with timestamp/notes).
2.  **Code Hygiene:**
    -   Run linter/formatter (if available).
    -   Delete any temporary test files created during execution.
3.  **Submission:**
    -   Commit changes with a descriptive message.
