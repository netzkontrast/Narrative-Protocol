# Role Descriptions & User Guide

## Overview
This repository uses a **Role-Based Governance Model**. Agents act as specialized workers, coordinated by a central **Context Manager**.

## The Roles

### 1. Context Manager (The Navigator)
*   **Responsibility**: Session initialization, routing, and state management.
*   **User Interaction**: The first point of contact. It decides *who* you need to talk to.
*   **Skills**: `init_session`, `manage_context`.

### 2. PMO (The Gatekeeper)
*   **Responsibility**: Enforcing `AGENTS.md` rules, auditing projects, and ensuring "Idea -> Action" workflows exist.
*   **Skills**: `audit_process`.

### 3. PM (The Planner)
*   **Responsibility**: Converting abstract ideas into concrete `TODO.md` items.
*   **Skills**: `plan_tasks`.

### 4. Architect (The Designer)
*   **Responsibility**: Making high-level technical decisions and documenting them in `ARCHITECTURE.md`.
*   **Skills**: `document_decision`.

## How It Works (The Flow)
1.  **User** enters a request: "I want to add a feature."
2.  **Context Manager** analyzes the request and routes to **PM**.
3.  **PM** creates a plan in `TODO.md` and exports context.
4.  **Context Manager** reads context and routes to **Architect** (if design is needed) or **Code** (if ready to build).
5.  **Agents** perform work and **Verify** results with a Confidence Score.

## Protocol: Reflection & Confidence
Every agent must state a **Confidence Score (0-10)** before and after acting. This ensures self-correction and reduces errors.
