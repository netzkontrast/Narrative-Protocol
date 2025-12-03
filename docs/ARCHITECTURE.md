# Narrative-Protocol: Architecture & Technical Specification

## 1. Executive Summary: The Paradigm Shift to Agentic Writing

Software development has undergone a radical transformation through AI-powered assistants like Cursor, Kiro, and Roo Code. These tools no longer function as mere autocomplete engines but as intelligent partners that understand the semantic context of a codebase, manage background processes, and perform multi-step logical operations.

The domain of creative writing, specifically complex novel projects, faces an analogous revolution. The requirements for writing a novel—managing thousands of linked entities (characters), temporal dependencies (plotlines), and structural rules (dramaturgy)—are comparable in complexity to the architecture of large software projects.

This document outlines a comprehensive technical blueprint for an AI-native writing environment designed as a "Cursor for Novelists." Unlike traditional chatbots, this system operates via a Chat-First Interface supported by autonomous agents that maintain persistent knowledge of the manuscript state in the background. Using the Vercel AI SDK for streaming interfaces, OpenRouter for model orchestration, and TypeScript for type-safe infrastructure, it defines a platform enabling high-level narrative reasoning.

A central element of this architecture is the transition from simple Retrieval-Augmented Generation (RAG) to **GraphRAG**, which models the narrative not as mere text fragments but as a knowledge graph of relationships and events. To meet the explicit requirement of "critical questioning," the system implements **Reflection Patterns** and **Constitutional AI** guardrails. This empowers the AI to act not just as an author but as an active editor who identifies plot holes, points out tonal inconsistencies, and maintains dramaturgical integrity.

## 2. Architecture Foundation: The Narrative IDE Stack

Developing an advanced AI application on Vercel requires precise navigation of trade-offs between stateless Serverless Functions and the stateful requirements of agentic workflows. The proposed architecture integrates the Vercel ecosystem with Durable Execution patterns to handle the long-term context management required for a novel.

### 2.1 Core Infrastructure: Vercel AI SDK and Next.js

The application is based on **Next.js (App Router)** using **TypeScript**, providing a unified framework for both the frontend UI and backend API routes. The **Vercel AI SDK** serves as the primary interface between application logic and Large Language Models (LLMs) via OpenRouter.

#### 2.1.1 Vercel AI SDK Core as Backbone
The Vercel AI SDK Core provides essential functions `generateText` and `streamText` that abstract differences between model providers. For a novel writing assistant, "Tool Calling" capability is paramount. The system doesn't just generate text; it calls tools to read chapters, update character sheets, or search the timeline.

The `streamUI` function (evolved into `streamObject` and component generation) allows the application to render React components directly within the chat stream. For example, if a user commands: "Create a new antagonist," the agent streams a structured component rendering an interactive form for the character sheet, rather than just text description. This matches the UX of modern coding assistants where AI suggestions are integrated directly into the workspace.

#### 2.1.2 OpenRouter as Strategic Middleware
OpenRouter acts as a strategic middleware layer, allowing dynamic switching between models best suited for specific tasks:
- **Claude 3.5 Sonnet** for nuanced prose generation and stylistic analysis.
- **GPT-4o** for rigorous logic checks and consistency verification.
- **Llama 3 or Haiku** for high-volume background summarization.

### 2.2 Managing Stateful Agents: LangGraph.js vs. Vercel AI SDK Core

#### 2.2.1 The Case for LangGraph.js
**LangGraph.js** excels at complex, stateful workflows. It models the agent as a graph of nodes (steps) and edges (transitions). This is essential for the "Critical Questioning" feature. A Critic Agent must cycle through:
1. Reading the draft.
2. Critiquing based on a rule set (Constitutional AI).
3. Deciding if the critique is valid and substantial.
4. If valid: Propose changes; if not: Reflect and retry.

#### 2.2.2 The Case for Vercel AI SDK Core
Alternatively, Vercel AI SDK Core has introduced powerful patterns for multi-step tool calling. For standard tasks like "Search the lore database and write a scene," it is lightweight and integrates better with Next.js streaming response patterns.

**Architecture Recommendation: A Hybrid Approach.**
- Use **Vercel AI SDK Core** for the real-time Chat Interface (low latency, text streaming) and simple tool usage.
- Use **LangGraph.js** (running on a durable backend or via Inngest) for complex background tasks like "Analyze the entire manuscript for plot holes" or "Develop an alternative plotline over 10 chapters."

### 2.3 Solving "Background Work" on Serverless

#### 2.3.1 Durable Execution: Inngest
To support long-running narrative analyses without hitting Vercel's serverless timeouts (typically 10-60s), the architecture offloads these tasks to a Durable Execution engine. **Inngest** is recommended as it fits the "Chat Interface" paradigm perfectly. When a user asks the agent to "Read all 50 chapters and check eye color consistency," the chat interface pushes an event to Inngest. The Inngest function (background agent) executes the work step-by-step (`step.run`), updates progress in the database, and pushes status updates back to the UI via WebSockets.

## 3. Data Model "Novel Project": Context Management

### 3.1 Hierarchical Data Structure and JSON Schema
The data model must reflect the hierarchy of a novel:
- **Project (Novel):** Root container.
- **Acts/Parts:** Large dramaturgical containers.
- **Chapters:** Primary composition units.
- **Scenes:** Atomic units of action.
- **Entities:** Characters, Locations, Objects (Lore).

This structure is defined via **JSON Schema** to ensure agents interact with structured data.

### 3.2 GraphRAG: The Knowledge Engine for Narrative Causality
Classic RAG (Vector Search) fails to track causality. **GraphRAG** solves this by combining vector embeddings with a knowledge graph.
- **Nodes:** Entities and Plot Events.
- **Edges:** Relationships (e.g., LOVES, BETRAYS, LOCATED_AT, LEADS_TO).

**Technical Implementation:**
- **Database:** **Neo4j** (standard for graphs) or **SurrealDB** (multi-model).
- **Extraction Agent:** A background agent (via Inngest) processes every newly written scene, extracting triplets (Subject -> Predicate -> Object) to update the graph.

### 3.3 Hierarchical Summarization
To avoid context window limits and "Lost-in-the-Middle" issues:
- **Level 1 (Scene):** Dense summary (Chain of Density).
- **Level 2 (Chapter):** Aggregated scene summaries.
- **Level 3 (Act/Global):** Aggregated chapter summaries.
Depending on the user query, the agent loads the appropriate level of abstraction.

## 4. Agentic Workflows and Skills Interface

### 4.1 Skills as Tools (MCP)
Skills are discrete capabilities exposed to the LLM, defined with Zod schemas for type safety.
- **Core Skills:** `read_manuscript`, `write_scene`, `update_lore`, `scan_consistency`.
- **Model Context Protocol (MCP):** Connects external data (Notion, Obsidian) into the writing context.

### 4.2 Multi-Agent Orchestration Patterns
- **Planner-Executor:** Planner outlines changes; Executor applies them; Verifier checks them.
- **Swarm Pattern:** Specialized agents (Historian, Geographer) brainstorm world-building details together.

## 5. Critical Questioning & Reflection

### 5.1 Constitutional AI
To overcome "sycophancy bias" (AI trying to please the user), we use Constitutional AI principles in System Prompts for the "Critic" persona:
> "You are the 'Devil's Advocate'. Your goal is NOT to please the user but to strengthen the story. Principles: Coherence, Show Don't Tell, Negativity Bias (look for weaknesses). Be precise, not polite."

### 5.2 Reflection Pattern
The agent reviews its own critique before presenting it: "Is this specific enough? Did I miss the contradiction in Chapter 2?"

## 6. User Interface: The Chat-First IDE

- **Layout:** "Cursor"-like IDE. Central Editor (TipTap/Slate), Right-side Chat, Left-side Project Explorer.
- **Assistant UI:** Uses `assistant-ui` library for thread history, generative UI (rendering timelines), and optimistic updates.
- **Background Status:** Visual indicators for running background agents (via Inngest).

## 7. Implementation Roadmap

### Phase 1: The Foundation (Core Chat & Editor)
- **Goal:** Functional Next.js App on Vercel for writing and chatting.
- **Stack:** Next.js, Vercel AI SDK, OpenRouter (Claude 3.5 Sonnet), PostgreSQL.
- **Feature:** Basic RAG (Vector Search).

### Phase 2: The Agentic Layer (Deep Context)
- **Goal:** Background processing and structured data.
- **Stack:** Inngest (long-running tasks), Neo4j (Knowledge Graph).
- **Feature:** "Novel Project" Schema, automatic scene summarization, graph extraction.

### Phase 3: The Critic & Skills (Advanced Workflow)
- **Goal:** Proactive assistance.
- **Stack:** LangGraph (critique loops).
- **Feature:** "Critic" persona with Constitutional AI, Reflection Loops, Specific Skills Menu ("Check Pacing", "Analyze Arc").

## 8. Technical Analysis
- **Persistence:** PostgreSQL + pgvector.
- **Cost:** Caching via KV, Tiered Models (Haiku for background, Opus/GPT-4 for critical tasks).
- **Context:** Hybrid approach (Hierarchical Summaries + GraphRAG).

## 9. Conclusion
This architecture treats the novel as a structured database (GraphRAG), uses Durable Execution (Inngest) for deep analysis, and Agentic Workflows (LangGraph) for critical reasoning, creating a true "Cursor for Novelists."
