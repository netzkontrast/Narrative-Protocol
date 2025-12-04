# Concept: The Narrative Engine (NCP + Governance)

**Version:** 1.0
**Status:** Draft Concept
**Target:** Initial Prompt for Fresh Repository Initialization
**References:**
*   **Narrative Context Protocol (NCP)**: [https://github.com/narrative-first/narrative-context-protocol](https://github.com/narrative-first/narrative-context-protocol)
*   **Narrative Protocol (Netzkontrast)**: [https://github.com/netzkontrast/Narrative-Protocol](https://github.com/netzkontrast/Narrative-Protocol)

---

## 1. Executive Summary

This Concept defines the architecture for a **Narrative Engine**: a system where an AI Agent acts as the operating system for a story, using the **Narrative Context Protocol (NCP)** as its data backbone and the **Role-Based Governance Model** as its execution framework.

The goal is to transform the "Governance" repository pattern into a **"Narrative Governance"** system. Instead of managing code and deployment, the Agent manages **Subtext** and **Storytelling**. The Agent becomes the "Frontend" for the Narrative Cursor project, allowing users to build complex, mathematically precise stories through natural language interaction, mediated by specialized internal roles (The Integration Council).

## 2. The Core Philosophy

*   **The Thing is the Story**: We apply software engineering rigor to storytelling. The `story.json` (NCP) is the "Database". The prose (Markdown) is the "Frontend". The Agent is the "Backend/API".
*   **Governance as Game Master**: The `AGENTS.md` protocol is adapted so that "Roles" correspond to narrative functions (e.g., *Architect* becomes *Thematician*).
*   **The Subtext Integration Loop**: A strict workflow that prevents "drift". New ideas are not just appended; they are deconstructed, validated against the existing mathematical storyform, and then integrated.

## 3. Architecture: The Integration Council

The system operates via a set of specialized Roles. In Phase 1, these are "Hats" the Agent wears. In Phase 2, they become specialized MCP Tools/Agents.

### 3.1. The Deconstructor (The Prism)
*   **Archetype:** Parser / Ingestor
*   **Responsibility:** Reads raw user concepts (brain dumps, emails, partial scenes) and shreds them into discrete NCP-compliant fragments. It is non-judgmental; it only categorizes.
*   **Workflow:**
    1.  Ingest raw text.
    2.  Extract entities: `Player` definitions, `Storypoint` (Thematic) claims, `Dynamic` (Force) assertions.
    3.  **Output:** JSON fragments in `_staging/` (e.g., `_staging/players_proposal.json`).

### 3.2. The Cast Director (Player Specialist)
*   **Archetype:** Consistency Checker
*   **Responsibility:** Guards the integrity of the Character Web.
*   **Workflow:**
    1.  Review `_staging/players_proposal.json`.
    2.  Check for **Function Drift**: If "John" is defined as *Avoid*, does the new concept imply *Pursuit*?
    3.  **Output:** `character_conflict_report.md`.

### 3.3. The Thematician (Structure Specialist)
*   **Archetype:** Dramatica Expert / Structural Engineer
*   **Responsibility:** Guards the integrity of the Storyform (Thematic Argument).
*   **Workflow:**
    1.  Review `_staging/storypoints_proposal.json`.
    2.  Validate against Dramatica logic (e.g., if *Goal* is *Obtaining*, *Consequence* must be *Becoming*).
    3.  **Output:** `structural_integrity_report.md`.

### 3.4. The Simulator (The Forecaster)
*   **Archetype:** QA / Scenario Planner
*   **Responsibility:** Synthesizes reports to predict consequences.
*   **Workflow:**
    1.  Consume reports from *Cast Director* and *Thematician*.
    2.  Generate **Integration Scenarios**:
        *   *Scenario A (Override)*: Rewrite Subtext to match Concept (Destructive).
        *   *Scenario B (Adapt)*: Modify Concept to fit Subtext (Conservative).
        *   *Scenario C (Reject)*: Keep Storytelling, discard Subtext changes.

### 3.5. The Mediator (User Liaison)
*   **Archetype:** Product Manager / Interface
*   **Responsibility:** Communicates with the user to resolve conflicts.
*   **Workflow:**
    1.  Present Scenarios to the user.
    2.  Ask clarifying questions (e.g., "This changes the Story Outcome from Success to Failure. Is that intentional?").
    3.  Trigger the final merge based on user decision.

---

## 4. The Workflow: "The Subtext Integration Loop"

1.  **Ingestion**: User provides unstructured text -> **Deconstructor** creates `_staging/` JSONs.
2.  **Review**: **Council** (Cast Director, Thematician) analyzes `_staging/` vs `story.json`.
3.  **Simulation**: **Simulator** creates `conflict_report.md` and Scenarios.
4.  **Clarification**: **Mediator** asks User for decision.
5.  **Merge**: **Archivist** applies patches to `story.json` and commits.

---

## 5. Phase Plan

### Phase 1: Manual Governance (The "Paper Prototype")
*   **State**: The Agent (Jules) manually performs all roles using standard text editing tools.
*   **Files**:
    *   `AGENTS.md`: Defines the roles and the "Reflection & Confidence" protocol.
    *   `projects/story_alpha/story.json`: The Single Source of Truth (NCP).
    *   `_staging/`: A folder for temporary JSON fragments.
*   **Goal**: Establish the rhythm of the "Subtext Integration Loop".

### Phase 2: MCP Integration (The "Tooling")
*   **State**: Python scripts (FastMCP) automate the mechanical steps.
*   **Tools**:
    *   `shred_concept(text)`: Automates The Deconstructor.
    *   `audit_character(json)`: Automates The Cast Director.
    *   `validate_storyform(json)`: Automates The Thematician.
*   **Goal**: Speed and precision.

### Phase 3: "Self-Hosting" & Session Management
*   **State**: The Agent manages multiple stories ("Sessions") simultaneously.
*   **Architecture**:
    *   `sessions/`: Directory containing active story contexts.
    *   **Context Engineer** role gains `mount_session(story_id)` skill to swap the active `story.json` into the context.

---

## 6. Initial Implementation Tasks (TODO)

*Copy the following list into `todo.md` in the new repository to begin.*

### Initialization
- [ ] **Initialize Repository Structure**
    - [ ] Create `AGENTS.md` with "Integration Council" definitions (Deconstructor, Thematician, etc.).
    - [ ] Create `projects/narrative_engine/` structure.
    - [ ] Create `projects/narrative_engine/docs/` (Architecture, Schema).
    - [ ] Create `projects/narrative_engine/schemas/` and download `ncp-schema.json`.

### The Core (Phase 1)
- [ ] **Define the "Story Zero"**
    - [ ] Create an initial `story.json` (NCP format) for a sample story (or the "Narrative Engine" concept itself as a meta-story).
- [ ] **Establish the Workflow**
    - [ ] Create `projects/narrative_engine/workflows/subtext_integration_loop.md` documenting the 5-step process.
    - [ ] Create the `_staging/` directory and add to `.gitignore` (but keep a `.keep` file).

### Governance Setup
- [ ] **Define Role Skills (Prompt Engineering)**
    - [ ] Write `roles/deconstructor/instructions.md`: Guidelines for parsing text to NCP.
    - [ ] Write `roles/thematician/instructions.md`: Guidelines for Dramatica validation.
    - [ ] Write `roles/mediator/instructions.md`: Guidelines for user interaction.

### Prototype "The Loop"
- [ ] **Manual Test Run**
    - [ ] Create a dummy "Concept Note" (e.g., "Hero decides to quit").
    - [ ] Manually act as **Deconstructor** -> Create `_staging/player_update.json`.
    - [ ] Manually act as **Thematician** -> Check for conflict.
    - [ ] Manually act as **Mediator** -> Report to user.
    - [ ] Commit the "Change".
