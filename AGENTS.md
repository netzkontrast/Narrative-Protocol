# AGENTS.md: Governance & Coding Agent Rules

This document defines the **Mandatory Rules** and **Operating System** for all AI agents and human developers working on the Narrative Protocol.

## 1. The Prime Directive: Critical Assessment

**NO ACTION** (whether coding, creating a workflow, or executing a task) may begin without a **Critical Assessment Phase**.

### The Rule
Before writing code or defining a new process, you must explicitly ask:
1.  **Is this request valid?** Does it align with the project goals?
2.  **Is a new solution actually needed?** Can this be solved by modifying an existing workflow or component?
3.  **What is the simplest implementation?** (Occam's Razor)

### The Meta-Workflow
If a user asks for a new workflow:
1.  Check `AGENTS.md` and `workflows/` for existing workflows.
2.  If one exists that is similar, propose a modification rather than a duplicate.
3.  Only create a new workflow if the functionality is distinct and necessary.

## 2. Mandatory Workflow Structure

Every workflow defined in `workflows/` **MUST** follow this structure:

1.  **Critical Assessment:** (As defined above).
2.  **Execution:** The steps to perform the task.
3.  **Verification:** Checking the work.
4.  **Cleanup & Reflection:**
    -   Remove unused files.
    -   Refactor messy code immediately.
    -   Update `TODO.md` and `COMPLETED.md`.
    -   **Explicitly clear context** if the agent session is continuing.

## 3. Lean Codebase Policy

-   **Delete Unused:** If a file is no longer imported or used, delete it. Do not "comment it out" for later.
-   **Modularity:** Keep files small. If a file exceeds 200 lines, consider refactoring.
-   **No Overhead:** Do not install heavy libraries for simple utility functions.
-   **Documentation:** Update the `README.md` or `docs/` if the architecture changes.

## 4. Context Economy (Context Window Management)

Agents must minimize their token usage to remain efficient.
-   **Read Sparingly:** Do not read `package-lock.json` or huge compiled files.
-   **Targeted Reads:** Use `grep` or `ls` to find files before reading them.
-   **Summarize:** When passing context between steps, summarize the previous state rather than dumping the full history.

## 5. Workflow Registry

The following workflows are the **Official Standard Operating Procedures**:

| Workflow Name | Description | File Path |
| :--- | :--- | :--- |
| **New Workflow Creation** | **Meta-Workflow.** How to define and register new processes. | `workflows/new_workflow_creation.md` |
| **Task Execution** | Standard process for moving tasks from `TODO.md` to `COMPLETED.md`. | `workflows/task_execution.md` |
| **Template** | The mandatory template for all new workflows. | `workflows/_template.md` |

---

**Note to Agents:** Failure to follow the "Critical Assessment" or "Cleanup" steps is a violation of the protocol.
