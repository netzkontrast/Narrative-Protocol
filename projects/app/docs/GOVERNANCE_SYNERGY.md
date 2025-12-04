# Governance Synergy & Roadmap

**Status**: Experimental Analysis
**Role Perspective**: The Governance Mirror

## 1. The Isomorphism: Governance as a Playground

The `projects/governance` system is not just a management layer; it is a **Low-Fidelity Prototype** of the Narrative App. We are simulating the target software's logic using human-readable Markdown and strict Role protocols.

| Narrative App Concept | Governance Repository Equivalent |
| :--- | :--- |
| **Planner Agent** | **PM Role** (`roles/pm`) managing `todo.md` |
| **Executor Agent** | **Code Role** (`roles/code`) implementing tasks |
| **Context Manager (Summarizer)** | **Context Engineer** (`roles/context_engineer`) managing `context.md` |
| **Constitutional AI (Critic)** | **PMO Role** (`roles/pmo`) enforcing `AGENTS.md` |
| **Knowledge Graph (Neo4j)** | **File System & Links** (The directory structure and relative links) |
| **Durable Execution (Inngest)** | **Session Handover** (Persisting state in `context.md` between sessions) |

### The "Proof"
Since we can successfully build and maintain complex software using this Governance structure, we have **proven** that the logical architecture of the App is sound. The App is simply the **automation** of these manual processes.

## 2. Integrating App Ideas into Governance (MCP & Skills)

To reach the "Sweet Spot", we should use the Governance system to test App features before coding them.

### 2.1 The Model Context Protocol (MCP)
**Concept**: The App uses MCP to connect to external data (Notion, Obsidian).
**Governance Application**:
-   We can define "Virtual MCP Servers" as **Skills**.
-   *Example*: `roles/architect/skills/consult_patterns`. Instead of just "reading a file", the Architect "queries the Pattern Server" (a structured grep/search workflow).
-   **Goal**: Formalize the "Reading" of the codebase as an MCP-like interface.

### 2.2 Skill: "The Critic" (Constitutional Checks)
**Concept**: The App checks for "Plot Holes".
**Governance Application**:
-   Create a generic `roles/pmo/skills/critique_plan`.
-   Input: A proposed plan.
-   Constitution: `AGENTS.md` rules.
-   *Action*: The Agent must play the "Devil's Advocate" against its own plan before setting it. This mirrors the "Reflexion" loop in the App.

## 3. Synergy Roadmap: Building the Thing with the Thing

We will use the development of the App to evolve the Governance, and vice versa.

### Phase 1: The Mirror (Current State)
-   **Goal**: Establish strict isomorphism.
-   **Action**: Every time we design a feature for the App (e.g., "Character Consistency Check"), we implement a manual equivalent in Governance (e.g., "Role Consistency Check" in `AGENTS.md`).
-   **Milestone**: "Governance v2.5" - A set of skills that perfectly mirror the proposed App Agents.

### Phase 2: The Hybrid (Tool Integration)
-   **Goal**: Automate the Governance friction.
-   **Action**: Build small CLI tools (in `projects/governance/scripts`) that the Agents *must* use.
    -   *Tool*: `check-context`. Automatically summarizes `context.md` (MVP of the App's Summarizer).
    -   *Tool*: `verify-links`. Checks if all linked docs exist (MVP of the App's Graph Integrity).
-   **Milestone**: "Cyborg Governance" - Agents use the App's core algorithms to manage the repo.

### Phase 3: The Convergence (App as IDE)
-   **Goal**: The App *is* the Governance Interface.
-   **Action**: We point the Narrative IDE at the `projects/` directory.
    -   "Characters" = Roles.
    -   "Plot" = Project Roadmap.
    -   "Scenes" = Tasks.
-   **Milestone**: "Self-Hosting". We use the Narrative IDE to write the next version of the Narrative IDE.

## 4. Immediate Next Steps (The Experiment)
1.  **Reflexion Loop**: In the next session, force the **PM Role** to use a "Critic" workflow before finalizing any todo.
2.  **Context Compression**: Have the **Context Engineer** experiment with "Hierarchical Summarization" on the `history/` folder.
