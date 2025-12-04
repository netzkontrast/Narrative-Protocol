# System Patterns

## 1. Role-Based Governance (The "Narrative" Pattern)
Instead of a monolithic agent instruction set, we divide responsibilities into **Roles**.
-   **Why**: Reduces context window pollution. An agent acting as "Coder" doesn't need to know the complex "PM" prioritization rules.
-   **Structure**: `roles/<role_name>/` contains the "System Prompt" (`README.md`) and specific "Skills" (`skills/`).

## 2. Project Isolation
Work is scoped to **Projects** (`projects/<name>/`).
-   **Why**: Prevents "Todo Clutter". Governance tasks shouldn't mix with App Implementation tasks.
-   **Components**:
    -   `todo.md`: The roadmap.
    -   `context.md`: The current state (Session Handover).
    -   `history/`: The session logs.

## 3. Skill-Based Execution
Capabilities are formalized as **Skills**.
-   **Structure**: `roles/<role>/skills/<skill_name>/`.
-   **Trigger**: Explicit (`/role skill`) or Implicit (via PMO routing).
