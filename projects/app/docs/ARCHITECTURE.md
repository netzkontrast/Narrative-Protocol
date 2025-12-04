# Application Architecture

**Project**: Narrative Protocol App
**Status**: Planning / Restoration

## Tech Stack
-   **Frontend**: Next.js 15 (App Router), React 19.
-   **Styling**: Tailwind CSS v4, Shadcn/UI.
-   **AI Integration**: Vercel AI SDK (Streaming, Tools).
-   **State Management**: Zustand (Client), Server Components (Server).
-   **Background Jobs**: Inngest (Durable workflows).
-   **Database**: PostgreSQL (Prisma/Drizzle) + Neo4j (GraphRAG).

## Core Concepts
1.  **Narrative IDE**: A rich text editor coupled with a chat interface.
2.  **The Agentic Layer**: Background agents (Critics, Researchers) triggered by user events.
3.  **Graph Memory**: Storing narrative entities (Characters, Locations) in a graph database for consistency checks.
