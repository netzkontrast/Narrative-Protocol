# Skill: Init (Session Initialization)

**Owner**: PMO Role
**Trigger**: Start of a new session or user interaction.

## Process

1.  **Log Session Start**:
    -   Create a new file in `projects/governance/history/` named `session_YYYY-MM-DD_HH-MM.md` (or similar timestamp).
    -   Content: The initial user prompt/task.

2.  **Cleanup Check**:
    -   Check `projects/governance/todo.md` (and other project todos if active) for any high-priority cleanup tasks.
    -   If cleanup is needed, address it *before* starting new work.

3.  **Routing**:
    -   Analyze the user request.
    -   **Explicit Trigger**: If request matches `/role skill "context"`, switch to that Role and execute the Skill.
    -   **Implicit Trigger**: If ambiguous, default to **PM Role** to assess the request and update Todos.

4.  **Context Loading**:
    -   (Future: Automated context loading based on active project).
    -   For now, identify the relevant project (e.g., `projects/governance`) and read its `todo.md`.
