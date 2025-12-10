# Skill: Request Orchestration

**Role:** Project Manager
**Description:** Transforms raw user requests/ideas into actionable, architectural-approved Todos.

## Workflow

1.  **Analyze Request:**
    -   Is it a simple task? (e.g., "Fix typo") -> Create Todo immediately.
    -   Is it a Feature/Architecture change? -> **Trigger Architect**.

2.  **Consult Architect (if needed):**
    -   Create a "Draft Spec" in `projects/<project>/docs/drafts/`.
    -   Switch to **Architect** role to review/refine the draft.
    -   Wait for Architect approval (Architect updates the Draft Status).

3.  **Finalize Todo:**
    -   Once the spec is clear, create the entry in `projects/<project>/todo.md`.
    -   Link to the Spec/Docs.

4.  **Report:**
    -   Inform the Operator/User that the plan is ready.

## Example Interaction
User: "I want a user profile system."
PM: "Okay. This requires Architecture."
PM -> Creates `docs/drafts/user_profile_spec.md`.
PM -> Calls Architect.
Architect -> Updates `user_profile_spec.md` with DB Schema.
PM -> Reads Spec.
PM -> Writes to `todo.md`: "- [ ] Implement User Profile (See `docs/drafts/user_profile_spec.md`)".
