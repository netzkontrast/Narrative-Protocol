# System Patterns

## Architecture Overview
The system follows a **Layered Architecture** integrated with **Event-Driven** and **Agentic** patterns.

### Core Layers
1.  **Presentation (Next.js App Router)**:
    -   React Server Components (RSC) for initial load.
    -   Client Components for interactive editor/chat.
    -   Vercel AI SDK for streaming UI.
2.  **Application (State & Logic)**:
    -   **Zustand**: Client-side global state (UI state, current editor selection).
    -   **Server Actions**: Backend logic execution.
3.  **Agentic Layer (Background)**:
    -   **Inngest**: Durable execution for long-running tasks (e.g., "Read Chapter 1-10").
    -   **LangGraph**: Complex reasoning loops (Critic/Reflector).
4.  **Data Layer**:
    -   **PostgreSQL**: Core manuscript data.
    -   **Neo4j**: GraphRAG knowledge graph (Relationships).

## Design Patterns
-   **Colocation**: Feature-based directory structure (Code, Tests, Types in one folder).
-   **Composition**: Building complex UIs from atomic Shadcn/UI components.
-   **Durable Execution**: Offloading non-interactive work to background queues.
-   **Constitutional AI**: Explicit rule sets for Agent behavior (defined in `AGENTS.md`).

## File Structure
```
src/
├── app/                 # Next.js App Router
├── components/          # Shared Components
│   ├── features/        # Domain-specific components
│   └── ui/              # Generic UI (Shadcn)
├── lib/                 # Utilities
└── env/                 # Environment validation
```
