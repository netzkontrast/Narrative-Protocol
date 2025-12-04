# Governance Architecture (v2.0)

## 1. Core Concept: Decoupled Roles
The system moves away from a monolithic "Memory Bank" to a distributed **Role-Based** architecture.
*   **Encapsulation**: Each role (`roles/pm`, `roles/architect`) owns its skills and private knowledge.
*   **Orchestration**: The **Context Manager** (`roles/context-manager`) acts as the Operating System, routing requests and managing session state.

## 2. Communication Pattern: Context Export
Roles do not share memory. They pass messages.
*   **Protocol**: At the end of a turn, a Role outputs a `<!-- CONTEXT_EXPORT -->` block.
*   **Data**: Status, Confidence Score, Next Role, and Navigation Instructions.

## 3. Directory Structure
```
/
├── roles/                  # The Agents
│   ├── pmo/                # Governance & Audit
│   ├── pm/                 # Planning & Todos
│   ├── architect/          # Design & Decisions
│   └── context-manager/    # Navigation & State
├── projects/               # The Work
│   └── governance/         # Self-Improvement Project
│       ├── docs/           # Documentation
│       └── TODO.md         # Task Tracking
└── AGENTS.md               # The OS / Protocols
```

## 4. Key Decision: The Context Manager
The Context Manager is responsible for:
1.  **Parsing** user intent at session start.
2.  **Loading** the last known state (`state.json`).
3.  **Routing** the session to the correct specialized role.
