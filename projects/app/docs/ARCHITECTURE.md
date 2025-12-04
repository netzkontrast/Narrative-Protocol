# Narrative IDE: Architecture & Concept

**Version**: 1.0 (Conceptual)
**Based on**: "KI-natives Narrativ-IDE" (German Concept)

## 1. Executive Summary: The "Cursor for Novelists"
We are building an AI-native writing environment that transcends simple text generation. Just as Cursor acts as an intelligent partner for code (understanding context, dependencies, and logic), this App acts as an intelligent partner for novels (understanding plot, character arcs, and causality).

**The Core Shift**: From **Retrieval (RAG)** to **Reasoning (GraphRAG)**. The system doesn't just "remember" text; it models the narrative as a knowledge graph of relationships, enabling it to detect plot holes, timeline inconsistencies, and tonal shifts.

## 2. Technical Stack (The Narrative Stack)

The architecture navigates the trade-off between Serverless (Vercel) and Stateful Agents.

### 2.1 Core Infrastructure
-   **Frontend/API**: **Next.js (App Router)** & **TypeScript**.
-   **AI Interface**: **Vercel AI SDK Core** (for streaming and tool calling).
-   **Model Orchestration**: **OpenRouter**.
    -   *Claude 3.5 Sonnet*: Prose generation, stylistic nuance.
    -   *GPT-4o*: Logic checks, strict reasoning.
    -   *Haiku/Flash*: High-volume background summarization.

### 2.2 Agent Orchestration (Hybrid Approach)
-   **Real-time Interaction**: **Vercel AI SDK**. Used for the "Chat" interface where low latency is key.
-   **Complex Reasoning**: **LangGraph.js**. Used for multi-step loops (e.g., "Critique -> Reflect -> Refine").
-   **Background Processing**: **Inngest**. Solves the Vercel timeout limit. Long-running jobs (e.g., "Read entire book and index entities") run as durable step functions.

### 2.3 Data & Memory
-   **Document Store**: **PostgreSQL** (via Supabase/Neon). Stores the raw text and JSON hierarchy.
-   **Knowledge Engine**: **Neo4j** (GraphRAG). Stores the "Mental Model" of the book (Nodes: Characters, Locations; Edges: LOVES, KILLS, LOCATED_IN).

## 3. Data Model: The "Project" Structure

Unlike a flat file, a novel is hierarchical.

| Level | Description | Example Data |
| :--- | :--- | :--- |
| **Project** | Root Container | Title, Genre, Target Audience |
| **Act** | Structural Unit | "Act 1: The Setup", Thematic Goal |
| **Chapter** | Composition Unit | Sequence #, POV Character |
| **Scene** | Atomic Unit | Timestamp, Location, Mood, Content |
| **Entity** | Knowledge Node | Character (Alice), Object (The Ring) |

**User Customization (The Sweet Spot)**:
The User defines the "Schema" of their story implicitly. By editing a "Character Sheet" (UI), they update the underlying JSON schema that the Agents obey. The system "knows itself" because every entity is strongly typed.

## 4. Key Workflows & Skills

### 4.1 The GraphRAG Engine
Instead of just searching for keywords, the system traverses the graph.
-   *User Query*: "Why is Alice angry at Bob?"
-   *System Action*: Traverses `Alice -[INTERACTED_WITH]-> Bob` edges looking for negative sentiment events.

### 4.2 Hierarchical Summarization
To handle 100k+ words:
1.  **Scene Level**: Dense summary generated immediately after writing.
2.  **Chapter Level**: Aggregated from Scenes.
3.  **Act Level**: Aggregated from Chapters.
*Result*: The "Context Window" is never overloaded. High-level questions use Act summaries; specific questions use Scene details.

### 4.3 Agentic Patterns
-   **Planner-Executor**: One agent outlines the scene (Plan), another writes it (Execute).
-   **Critic-Reflector (Constitutional AI)**:
    -   *Critic*: "This dialogue is too expository."
    -   *Reflector*: "Is this critique specific? If yes, apply."
    -   *Constitution*: The user can set the "Rules" (e.g., "Always 'Show, Don't Tell'", "No adverbs").

## 5. User Power & Interaction Model

**"Complexity wrapped in Ease"**

### 5.1 The Interface
-   **Left Panel**: Project Explorer (Acts/Chapters/Entities).
-   **Center**: The Editor (Rich Text).
-   **Right Panel**: The Agent Chat (Assistant UI).
-   **Bottom/Status**: Background Task Indicators (via Inngest).

### 5.2 Customizing the "Brain"
The user has God-mode control over the Agents without writing code:
1.  **Skill Toggling**: User can enable/disable "Logic Checker" or "Tone Police" for specific sessions.
2.  **Rule Injection**: User adds a rule to the "Constitution" (e.g., "In this world, magic costs blood"). The Agents immediately respect this constraint in the Graph and Generation.
3.  **Entity Management**: User manually corrects the Graph. If the AI thinks "Alice loves Bob", the user can switch the edge to "Alice hates Bob", and the AI immediately adapts its reasoning.

## 6. Synergy with Governance
(See `GOVERNANCE_SYNERGY.md`)
