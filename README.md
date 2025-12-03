# Narrative-Protocol: The "Cursor for Novelists"

**Narrative-Protocol** is an AI-native writing environment designed to handle the complexity of novel writing. It treats a manuscript not just as text, but as a structured database of entities, plotlines, and causality, managed by a team of autonomous agents.

## 🚀 Getting Started

This repository is structured to be an ideal starting point for both **Human Developers** and **AI Agents**.

### 📂 Directory Structure

-   **`docs/`**: Contains the technical core of the project.
    -   [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md): The detailed technical specification and vision (Architecture, Stack, Data Model).
-   **`workflows/`**: Operational protocols.
    -   [`workflows/task_execution/`](workflows/task_execution/README.md): How to complete tasks.
    -   [`workflows/create_new_workflow/`](workflows/create_new_workflow/README.md): How to define new processes.
-   **Root Files**:
    -   [`AGENTS.md`](AGENTS.md): **MANDATORY** reading. Defines the governance, rules, and "Operating System" for agents.
    -   [`TODO.md`](TODO.md): The active backlog of tasks.
    -   [`COMPLETED.md`](COMPLETED.md): Log of finished work.

---

## 🤖 For AI Agents

**Protocol:**
1.  **Read `AGENTS.md`** immediately to understand the Rules of Engagement.
2.  **Check `TODO.md`** for the next priority task.
3.  **Follow `workflows/task_execution/README.md`** to execute the task.
    -   *Remember:* Always perform a **Critical Assessment** before starting.
    -   *Remember:* Always perform **Cleanup** before finishing.

## 👩‍💻 For Humans

This project aims to build a "Narrative IDE" using:
-   **Next.js** & **Vercel AI SDK** for the frontend/chat.
-   **Inngest** for durable background workflows.
-   **GraphRAG (Neo4j)** for narrative consistency.

To contribute:
1.  Pick a task from `TODO.md`.
2.  Follow the architectural guidelines in `docs/ARCHITECTURE.md`.
3.  Ensure you adhere to the "Lean Codebase" policy defined in `AGENTS.md`.

---
*Based on the original "Narrative-Protocol" technical specification.*
