# Governance Project Todos

- [ ] **Define Context Loading / Role Initialization Workflow**
    - Create a standardized process for how a role is initialized and how context is loaded.
    - Define file structure and naming conventions for context.

- [ ] **Implement standard Init Workflow**
    - Step 1: Save User Input to `projects/governance/history/session_X.md`.
    - Step 2: PMO checks for pending cleanup tasks.
    - Step 3: PMO routes the request based on syntax.

- [ ] **Define Syntax for Role/Skill triggering**
    - Define syntax like `/role skill "context"`.
    - Document this in the root governance documentation.

- [ ] **Refine Role Definitions**
    - Ensure `roles/pmo`, `roles/pm`, etc., have clear READMEs.

- [ ] **Refine Context Engineering Workflows**
    - Develop heuristics for when to compress history.
    - Create templates for `context.md` updates.
