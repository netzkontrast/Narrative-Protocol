# Governance Project Todos

- [ ] **Implement Request Orchestration Skill (PM)**
    - Implement the `roles/pm/skills/orchestrate` logic.
    - Define the "Draft Spec" templates.
    - Enable PM to "call" the Architect.

- [ ] **Implement State Management Skill (Context Manager)**
    - Implement `roles/context_engineer/skills/state`.
    - Create logic to parse User Prompt and determine Project Context.
    - Replace the legacy PMO `init` logic with this intelligent routing.

- [ ] **Transition to Operator Model**
    - Finalize `roles/operator` protocols.
    - Update `AGENTS.md` to formally deprecate PMO in favor of Operator + CM.
    - Test the full "Idea -> Todo -> Code" loop with the new roles.

- [ ] **Define Context Loading / Role Initialization Workflow**
    - Create a standardized process for how a role is initialized and how context is loaded.
    - Define file structure and naming conventions for context.

- [ ] **Refine Role Definitions**
    - Ensure `roles/pmo`, `roles/pm`, etc., have clear READMEs.
    - *Status:* Drafts created for Operator, CM (State), PM (Orchestrate).

- [ ] **Refine Context Engineering Workflows**
    - Develop heuristics for when to compress history.
    - Create templates for `context.md` updates.
