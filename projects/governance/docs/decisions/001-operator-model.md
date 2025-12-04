# ADR 001: The Operator Model

**Date:** 2024-05-21
**Status:** Experimental

## Context
The previous governance model relied on a strict **PMO (Project Management Office)** role as a gatekeeper. This proved too rigid for fluid conversation and complex multi-step reasoning. The system needed a way to self-correct and handle "Idea Orchestration" more naturally.

## Decision
We are transitioning to an **Operator Model**.

1.  **The "Operator" (Meta-Role):** The agent identifies primarily as the Operator who *uses* other roles as tools. The Operator is responsible for the session lifecycle.
2.  **Context Manager as Navigator:** Instead of a static PMO script, the Context Manager role is upgraded to analyze user intent and project state dynamically to recommend the next step.
3.  **Removal of Gatekeeper:** The PMO's "Gatekeeping" function is distributed:
    -   *Process Adherence* -> Operator Protocols.
    -   *Routing Intelligence* -> Context Manager.

## Consequences
-   **Positive:** More flexibility. The agent can "think" before routing. Better handling of ambiguity.
-   **Negative:** Requires more sophisticated prompt handling by the Context Manager.
-   **Risk:** Without a strict PMO script, the Operator might "hallucinate" a process. We mitigate this with the "Reflection & Confidence" protocol.

## Compliance
-   All new sessions must start with the Operator consulting the Context Manager.
-   `AGENTS.md` will be updated to reflect this protocol.
