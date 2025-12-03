# Project Brief: Narrative Protocol

## Project Name
Narrative Protocol

## Purpose
Narrative Protocol is an AI-native writing environment designed to handle the complexity of novel writing. It treats a manuscript not just as text, but as a structured database of entities, plotlines, and causality, managed by a team of autonomous agents. It acts as a "Cursor for Novelists".

## Core Objectives
1.  **Deep Context Management**: Use GraphRAG (Neo4j) to track relationships and causality across thousands of entities.
2.  **Agentic Workflow**: Employ autonomous agents (via Inngest and LangGraph) for background tasks like consistency checking and plot simulation.
3.  **Chat-First Interface**: Integrate AI assistance directly into the writing process using Vercel AI SDK.

## Key Features
-   **Chat-First IDE**: Central Editor with side-by-side Chat and Project Explorer.
-   **GraphRAG Engine**: Models narrative as a knowledge graph.
-   **Durable Execution**: Long-running background agents for manuscript analysis.
-   **Constitutional AI**: "Critic" agents that provide objective dramaturgical feedback.

## Roadmap
-   **Phase 1**: Foundation (Core Chat & Editor, Next.js 15 Setup).
-   **Phase 2**: Agentic Layer (Deep Context, Inngest, Neo4j).
-   **Phase 3**: Critic & Skills (Advanced Workflow, LangGraph).
