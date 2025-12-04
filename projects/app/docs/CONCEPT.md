# Narrative IDE: Concept & Architecture

## 1. Executive Summary: The Agentic Paradigm Shift
The Narrative Protocol App is designed as a **"Cursor for Novelists"**—a creative environment where AI is not just a text generator but an intelligent partner. It manages the semantic context of a story (characters, plot lines, rules) with the same rigor used in software engineering.
*   **Goal**: Enable "Narrative Reasoning" where the system understands causality, consistency, and structure.
*   **Key Innovation**: Moving from simple RAG to **GraphRAG**, modeling the narrative as a Knowledge Graph of entities and events.
*   **Role of AI**: Active Editor/Critic that identifies plot holes and enforces tonal consistency using **Constitutional AI** and **Reflexion Patterns**.

## 2. Architecture Stack
The system balances serverless efficiency with durable, stateful agentic workflows.

### Core Infrastructure
*   **Frontend**: Next.js (App Router) + Tailwind CSS + Shadcn/UI.
*   **AI Orchestration**: **Vercel AI SDK Core** for streaming interfaces and tool calling.
*   **Model Provider**: **OpenRouter** as middleware to switch models dynamically (e.g., Claude 3.5 Sonnet for prose, GPT-4o for logic).

### Agentic & Background Layer
*   **Stateful Agents**: **LangGraph.js** for complex, cyclic workflows (e.g., "Critique -> Reflect -> Refine" loops).
*   **Durable Execution**: **Inngest** to manage long-running background tasks (e.g., "Read 50 chapters and check eye color consistency") without hitting serverless timeouts.

## 3. Data Model: Context & Memory
The system treats a novel not as a flat text file but as a structured, hierarchical database.

### Hierarchical Structure
*   **Project (Root)** -> **Acts** -> **Chapters** -> **Scenes** (Atomic Units) -> **Entities**.
*   Defined via strict **JSON Schemas** to allow agents to perform structured updates.

### GraphRAG & Knowledge Engine
*   **Graph Database**: **Neo4j** (or similar) stores entities (Nodes) and relationships (Edges).
*   **Function**: Enables queries like "Show all scenes where Alice is in Berlin and sentiment is negative" or detecting impossible travel times between scenes.

### Hierarchical Summarization (Tree of Summaries)
To manage limited context windows:
1.  **Scene Summaries** (Chain of Density).
2.  **Chapter Aggregations**.
3.  **Act/Global Summaries**.
*   **Strategy**: Global queries load high-level summaries; specific queries use GraphRAG to load exact scenes.

## 4. Agentic Workflows & User Power
The user interacts with the system via a **Chat-First IDE** interface, but has deep control through "Skills" and "Constitutions".

### Skills as Tools (MCP Integration)
*   **Model Context Protocol (MCP)**: The app exposes its internal state and tools via MCP.
*   **Customizability**: Users can connect external data (e.g., Obsidian notes) or define new "Skills" (e.g., "Check Pacing", "Analyze Character Voice") which map to underlying agent tools.

### Orchestration Patterns
*   **Planner-Executor**: One agent plans a change ("Make Chapter 5 more tense"), another executes it, a third verifies it.
*   **Swarm Pattern**: Collaborative agents (Historian, Geographer, Sociologist) brainstorm world-building elements together.

### Critical Questioning & Constitutional AI
The system is programmed to *not* be a sycophant.
*   **Constitution**: A set of user-defined principles (e.g., "Show, Don't Tell", "No Plot Armor") that the Critic Agent must enforce.
*   **Reflexion Loop**: The Agent critiques the text, then critiques its own critique to ensure it is actionable and specific before showing it to the user.

## 5. User Interface
*   **Layout**: Three-pane IDE style.
    *   **Left**: Project Explorer (Structure/Graph view).
    *   **Center**: Rich Text/Markdown Editor (Prose).
    *   **Right**: Chat/Agent Interface.
*   **Generative UI**: Agents stream React components (e.g., a form to edit a character sheet) directly into the chat.
*   **Background Visibility**: UI indicators show what background agents are doing (e.g., "Continuity Check in progress...").
