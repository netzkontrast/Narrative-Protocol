# [Workflow Name]

**Description:** [Brief description of what this workflow achieves]
**Trigger:** [When should this workflow be used?]

## Phase 1: Critical Assessment (Mandatory)

1.  **Analyze Request:**
    -   Restate the user's goal.
    -   Verify understanding of requirements.
2.  **Check Existing Solutions:**
    -   Search `workflows/` for similar processes.
    -   Search `docs/ARCHITECTURE.md` for existing components.
    -   *Decision Point:* Should we modify an existing solution or create a new one?
3.  **Plan:**
    -   Define the steps for execution.

## Phase 2: Execution

1.  [Step 1]
2.  [Step 2]
3.  ...

## Phase 3: Verification

1.  **Verify Output:** Ensure the result matches the requirements.
2.  **Run Tests:** If code was changed, run relevant tests.

## Phase 4: Cleanup & Reflection (Mandatory)

1.  **Lean Codebase Check:**
    -   Did we create temporary files? -> Delete them.
    -   Did we deprecate code? -> Delete it.
2.  **Documentation Update:**
    -   Update `TODO.md` (mark as done) and `COMPLETED.md`.
    -   Update `docs/` if architecture changed.
3.  **Context Reset:**
    -   Summarize the session for the user.
