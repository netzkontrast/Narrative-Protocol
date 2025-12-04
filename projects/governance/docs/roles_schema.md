# Governance Roles Schema

This document explains the Roles within the Governance system and how they interact to serve the user.

## Overview
The system operates on a **Role-Based Execution** model. The AI Agent (Jules) adopts a specific "Hat" (Role) depending on the task.

## The Roles

### 1. Operator (Jules)
*   **The Pilot.**
*   **You interact with him.** He is the one reading your prompt.
*   **Duties:** Decides which Role is needed next. Ensures rules are followed.

### 2. Context Manager (CM)
*   **The Librarian & Navigator.**
*   **Duties:**
    *   Remembers where we left off.
    *   Finds the right files for the task.
    *   Tells the Operator: "The user is talking about Project X."

### 3. Project Manager (PM)
*   **The Planner.**
*   **Duties:**
    *   Maintains the `todo.md` list.
    *   Takes your vague ideas ("Let's build a blog") and breaks them down into tasks ("Setup Next.js", "Design Database").

### 4. Architect
*   **The Designer.**
*   **Duties:**
    *   Decides *how* things are built.
    *   Writes Architecture Decision Records (ADRs).
    *   Ensures the system scales.

### 5. Code
*   **The Builder.**
*   **Duties:**
    *   Writes the code.
    *   Runs the tests.
    *   Fixes the bugs.

## How They Work Together (The Flow)

1.  **You:** "I want to add a login page."
2.  **Operator:** Asks **CM**: "What project is this?"
3.  **CM:** "This is the App project."
4.  **Operator:** "Okay. **PM**, add a task for Login Page."
5.  **PM:** Adds task to `todo.md`. "Done. **Architect**, how should we build it?"
6.  **Architect:** "Use NextAuth." Writes a design note.
7.  **Operator:** "**Code Role**, implement the login page using NextAuth."
8.  **Code:** Writes code. Runs tests. "Done."
