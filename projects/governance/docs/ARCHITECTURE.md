# System Architecture

**Current Version**: v2.0 (Role-Based Governance)

## Overview
This repository implements a **Role-Based Governance System** designed to manage software projects (including itself) with high context efficiency. Instead of a monolithic agent trying to do everything, responsibilities are sharded into specific **Roles**.

## Core Components

### 1. The Role System (`roles/`)
The "Operating System" of the agent.
-   **PMO**: The Kernel. Handles initialization and routing.
-   **PM**: The Scheduler. Manages the work queue (`todo.md`).
-   **Architect**: The Designer. Owns the structure and cross-component dependencies.
-   **Code**: The Worker. Executes tasks.
-   **Context Engineer**: The Memory Manager. Compresses state.

### 2. The Project Structure (`projects/`)
Data is isolated by **Project**.
-   **`projects/governance/`**: The current project managing the repo itself.
-   **`projects/app/`** (Future): The actual application code.

### 3. Data Flow
1.  **Session Start** -> `roles/pmo/skills/init` runs.
2.  **Context Load** -> `projects/<project>/context.md` is read.
3.  **Task Selection** -> `projects/<project>/todo.md` is consulted.
4.  **Execution** -> Specific Role (Code, Architect) performs work.
5.  **Completion** -> `context.md` is updated (Session Handover).

## Key Patterns
-   **Governance as Code**: Rules are stored in markdown files that act as System Prompts.
-   **Skill-Based Execution**: Functionality is modularized into "Skills" (documented workflows).
