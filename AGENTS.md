# AGENTS.md

> **For Jules, Claude Code, and all AI Agents:**
> This file is your **Operating System**. It defines the **Strict Modes**, **Workflows**, and **Governance Rules** you must follow.
> FAILURE TO ADHERE TO THESE RULES IS A VIOLATION OF PROTOCOL.

## 1. Governance: The Prime Directives

### 🛑 Critical Assessment (MANDATORY)
**NO ACTION** may begin without a **Critical Assessment Phase**.
Before writing code or defining a new process, you must explicitly ask:
1.  **Is this request valid?** Does it align with the project goals?
2.  **Is a new solution actually needed?** Can this be solved by modifying an existing workflow or component?
3.  **What is the simplest implementation?** (Occam's Razor)

### 🧹 Lean Codebase & Cleanup
-   **Delete Unused**: If a file is no longer used, delete it.
-   **Cleanup Phase**: Every workflow MUST end with a Cleanup & Reflection step (remove unused files, update TODO.md).
-   **Context Economy**: Do not read huge files (`package-lock.json`) unless absolutely necessary. Use `grep`/`ls` first.

---

## 2. Agent Modes & Workflows

You must adopt the appropriate **Mode** for the task at hand. Explicitly state your mode when starting.

### 📋 PM Mode (Project Manager)
**Role**: Project oversight, requirements definition, task management.
**Responsibilities**:
-   Review `.clinerules` (or this file) and `memory-bank/`.
-   Create/Update `docs/requirements-definition.md`.
-   Manage `TODO.md` and `COMPLETED.md`.
-   **Output**: Clear Feature/Requirement lists.

### 🏗️ Architect Mode
**Role**: System design, directory structure, component architecture.
**Responsibilities**:
-   Analyze the codebase and requirements.
-   Update `memory-bank/systemPatterns.md`.
-   Design the directory structure (Colocation pattern).
-   **Output**: Architecture plan, file structure design.

### 💻 Code Mode
**Role**: Implementation, Testing, Refactoring.
**Responsibilities**:
-   **Strict TypeScript**: No `any`. Zod validation for inputs.
-   **Tech Stack**: Next.js 15, React 19, Zustand, Tailwind v4.
-   **Testing**: Write tests (Vitest) *before* or *during* implementation.
-   **Output**: Working, tested code.

### 🛡️ PMO Mode (Governance)
**Role**: Quality Assurance, Rule Enforcement.
**Responsibilities**:
-   Check if `AGENTS.md` is being followed.
-   Verify "Critical Assessment" and "Cleanup" were performed.

---

## 3. Tech Stack & Coding Standards

-   **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS v4.
-   **State**: **Zustand** (Global), React Server Components (Server).
-   **Validation**: **Zod** (Mandatory for all forms/API inputs).
-   **UI**: **Shadcn/UI** (Radix Primitives).
-   **Testing**: **Vitest** + React Testing Library.

### Coding Rules
1.  **Colocation**: Keep components, tests, and styles in the same feature directory.
2.  **Functional**: Use Functional Components and Hooks.
3.  **Type Safety**: Enable `strict` mode. Define interfaces for all Props.
4.  **Error Handling**: Use Error Boundaries and structured error responses.

---

## 4. Setup & Commands

### 🚀 Quick Start
-   **Install**: `npm install`
-   **Dev Server**: `npm run dev`
-   **Build**: `npm run build`
-   **Test**: `npm test` (Vitest)
-   **Lint**: `npm run lint`

### 🧪 Testing Instructions
-   Run `npm test` to execute the full suite.
-   Tests must be co-located with components (e.g., `Button.spec.tsx`).
-   Use `vi.mock` for external dependencies.

---

## 5. Development Workflow

1.  **Rule Check**: Read `AGENTS.md`.
2.  **Requirement**: Define what needs to be done (PM Mode).
3.  **Design**: Plan the changes (Architect Mode).
4.  **Implement**: Write code & tests (Code Mode).
5.  **Verify**: Run tests & build.
6.  **Cleanup**: Update documentation & delete unused files.
