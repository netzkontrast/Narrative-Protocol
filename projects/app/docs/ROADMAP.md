# Roadmap: Building the Thing with the Thing

**Vision**: Evolve the Governance repository from a "manual paper prototype" into a live instance of the Narrative Protocol App, while simultaneously building the App itself.

## Phase 1: The "Paper Prototype" (Current State)
*   **Goal**: Establish the mental model and prove the value of specialized roles.
*   **Action**:
    *   Strict adherence to Role/Skill separation in `projects/governance`.
    *   Manual execution of "Context Engineering" (summarizing history).
    *   Refining the `AGENTS.md` "Constitution" based on friction points.
*   **Deliverable**: A stable, documented process that *could* be automated.

## Phase 2: Tooling Integration (The "Cyborg" Phase)
*   **Goal**: Reduce the friction of the Governance model by giving Roles (Agents) specific CLI tools.
*   **Milestones**:
    1.  **Context CLI**: Build a script that mimics the App's "Tree of Summaries". A tool that reads `history/` and auto-generates a draft of `context.md`.
    2.  **Linting as Constitution**: Implement custom linters that enforce `AGENTS.md` rules (e.g., "No file changes without verification steps").
    3.  **MCP Basics**: Create a simple MCP server that exposes the repo's `todo.md` and `docs/` to the AI agent, allowing it to "query" the project state rather than just reading files.

## Phase 3: The "Narrative IDE" Alpha (The App V1)
*   **Goal**: The App exists as a standalone software artifact.
*   **Milestones**:
    1.  **Core Stack**: Next.js + AI SDK + GraphRAG setup.
    2.  **The "Writer" Agent**: Implements the `Code` role logic.
    3.  **The "Planner" Agent**: Implements the `PM` role logic.
    4.  **The "Librarian" Agent**: Implements the `Context Engineer` role logic (managing GraphRAG).

## Phase 4: Convergence (The "Ouroboros" Phase)
*   **Goal**: The Governance Repo *runs on* the App.
*   **Concept**:
    *   The "Project" in the App is this Repository.
    *   The "Narrative" is the Codebase and Documentation.
    *   The "Chapters" are the Sprints/Feature Branches.
    *   The "User" uses the App's Chat Interface to drive the development of the App.
*   **Action**:
    *   Migrate `todo.md` into the App's `Planner` Agent.
    *   Migrate `context.md` into the App's `GraphRAG`.
    *   The App's "Skills" become the actual interface for modifying the codebase.

## Phase 5: Recursion
*   **Goal**: The System improves itself.
*   **Action**:
    *   The App identifies inefficiencies in its own "Constitution" (via Reflexion loops).
    *   It proposes code changes to its own "Agentic Layer" to fix them.
    *   The User approves the changes, and the App deploys its own upgrade.
