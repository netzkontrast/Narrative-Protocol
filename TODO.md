# Active Tasks

## Phase 1: The Foundation (Core Chat & Editor)

- [ ] **[TASK-001] Initialize Next.js Application**
  - **Context:** Setting up the base framework for the Narrative IDE.
  - **Requirements:**
    - Initialize a new Next.js App Router project with TypeScript.
    - Configure Tailwind CSS.
    - Set up directory structure for components, lib, and hooks.
  - **Definition of Done:**
    - App builds and runs locally.
    - Basic "Hello World" landing page is visible.
    - Repository structure matches Next.js best practices.

- [ ] **[TASK-002] Configure Vercel AI SDK & OpenRouter**
  - **Context:** Enabling the application to communicate with LLMs.
  - **Requirements:**
    - Install `ai` and `@ai-sdk/openai` packages.
    - Configure OpenRouter client (compatible with OpenAI provider).
    - Set up environment variables for API keys.
  - **Definition of Done:**
    - A simple API route (`/api/chat`) successfully returns a streamed response from Claude 3.5 Sonnet (via OpenRouter).

- [ ] **[TASK-003] Implement Basic Editor Interface**
  - **Context:** The central workspace for the user to write text.
  - **Requirements:**
    - Integrate a rich text editor (TipTap or Slate.js).
    - Create a layout with the editor in the center.
    - Ensure the editor content can be serialized to JSON/Markdown.
  - **Definition of Done:**
    - User can type in the editor.
    - Basic formatting (bold, italic) works.
    - Content persists in local state (for now).

- [ ] **[TASK-004] Implement Chat Sidebar**
  - **Context:** The interface for interacting with the AI agent.
  - **Requirements:**
    - Create a sidebar component using Vercel AI SDK's `useChat` hook.
    - Implement message bubbling and input field.
    - Connect to the `/api/chat` route.
  - **Definition of Done:**
    - User can send messages from the sidebar.
    - AI responses are streamed back to the sidebar.

- [ ] **[TASK-005] Setup PostgreSQL Database**
  - **Context:** Persistent storage for user manuscripts.
  - **Requirements:**
    - Set up a PostgreSQL database (local or cloud like Neon/Supabase).
    - Configure Prisma or Drizzle ORM.
    - Define initial schema for `Project` and `Document`.
  - **Definition of Done:**
    - Database is reachable.
    - Migrations run successfully.
    - Application can read/write to the DB.

## Phase 2: The Agentic Layer (Deep Context)

- [ ] **[TASK-006] Integrate Inngest for Background Jobs**
  - **Context:** Infrastructure for long-running agent tasks.
  - **Requirements:**
    - Install and configure Inngest SDK.
    - Create a "Hello World" background job.
  - **Definition of Done:**
    - Inngest dev server runs.
    - An event triggers a background function successfully.

- [ ] **[TASK-007] Implement Novel Project Schema**
  - **Context:** The structured data model for Acts, Chapters, Scenes, and Entities.
  - **Requirements:**
    - define Zod schemas for the hierarchical structure.
    - Update Database schema to support these relationships.
  - **Definition of Done:**
    - Can create a full project hierarchy (Project -> Act -> Chapter -> Scene) in the DB.

- [ ] **[TASK-008] Implement GraphRAG Base (Neo4j)**
  - **Context:** The knowledge graph for narrative consistency.
  - **Requirements:**
    - Set up Neo4j instance.
    - Create basic connection utilities.
  - **Definition of Done:**
    - Application can connect to Neo4j and run a simple Cypher query.

## Phase 3: The Critic & Skills

- [ ] **[TASK-009] Implement "Critic" Persona**
  - **Context:** The agent that provides critical feedback.
  - **Requirements:**
    - Create a specific system prompt with Constitutional AI principles.
    - Implement a "Critique" button/action in the UI.
  - **Definition of Done:**
    - Agent responds with "Devil's Advocate" style feedback when invoked.

- [ ] **[TASK-010] Create Workflow for Reflection Pattern**
  - **Context:** Improving AI critique quality.
  - **Requirements:**
    - Implement a multi-step call (Critique -> Reflect -> Refine).
  - **Definition of Done:**
    - The output shows evidence of self-correction (can be logged for verification).
