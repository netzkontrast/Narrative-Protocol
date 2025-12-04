# Skill: State Management

**Role:** Context Manager
**Description:** Determines the current session state, active project, and next best action based on file system history and user prompt.

## Inputs
-   `User Prompt` (String)
-   `Current Directory` (File Structure)
-   `History Files` (`projects/governance/history/`)

## Logic (Design)
1.  **Parse Prompt:** Analyze the user's input for keywords matching known projects (`governance`, `app`).
2.  **Load Context:**
    -   If Project is found -> Read `projects/<project>/context.md` and `todo.md`.
    -   If No Project -> Read `projects/governance/history/last_session.json` (Proposed).
3.  **Determine Action:**
    -   If `todo.md` has pending tasks AND User says "Continue" -> Suggest **Code**.
    -   If User asks a question -> Suggest **Architect** or **PM**.
    -   If User gives a command -> Suggest **Operator** (Direct Execution).

## Output
JSON format:
```json
{
  "project": "governance",
  "status": "active",
  "suggested_role": "pm",
  "reasoning": "User asked to add a new task.",
  "context_files": ["projects/governance/todo.md"]
}
```
