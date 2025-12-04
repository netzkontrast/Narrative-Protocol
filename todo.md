# Repository Maintenance & Global Tasks

This file tracks tasks related to the repository itself, global configurations, and governance of the governance system.

- [ ] **Evaluate configuration files in root**
    -   Determine if files like `package.json`, `package-lock.json`, `config/`, etc., belong to specific projects (App vs Governance) or must remain global.
    -   Current status: `config/eslint` is used by the Next.js app but currently resides in root/config.
    -   Goal: Make clear where each configuration belongs.

- [ ] **Refactor shared configurations**
    -   Refactor linter and other shared configurations to clarify ownership/location.
    -   Ensure that Governance-only tools (if any) are separated from App-only tools.

- [ ] **Design Single Source of Truth for Governance Context**
    -   Design and plan a system to avoid hardcoded paths in `AGENTS.md`.
    -   Define rules (e.g., "Every role is defined in `projects/governance/roles/<role>/README.md`").
    -   Enable dynamic loading of rules and roles so `AGENTS.md` doesn't need to list every specific path.
    -   Check for other files containing old paths (`roles/`, `workflows/`) and update them or the system to handle them dynamically.
