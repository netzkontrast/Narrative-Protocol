# Skill: Design

**Owner**: Architect Role
**Trigger**: Complex task requiring structural change, new feature definition, or dependency analysis.

## Process

1.  **Initialize Decision Record**:
    -   Create a new file in `projects/<project>/architecture/decisions/` named `YYYY-MM-DD_Title.md`.
    -   Copy the template from `roles/architect/templates/decision_record.md`.

2.  **Analysis Phase**:
    -   Fill in the **Context** and **Dependencies**.
    -   Identify any potential blockers (Obstacles).

3.  **Consultation**:
    -   If needed, ask the **PM** for scope clarification.
    -   If needed, ask the **Code** role for feasibility input.
    -   *Log these interactions in the Consultation Log section of the ADR.*

4.  **Make Decision**:
    -   Define the solution in the **Decision** section.

5.  **Publish**:
    -   **High Level**: If this changes the global architecture, update `docs/ARCHITECTURE.md`.
    -   **Pattern**: If this establishes a reusable pattern, update `projects/<project>/patterns.md`.
    -   **Task**: Inform the **PM** to update `projects/<project>/todo.md` with the implementation tasks.
