# Skill: Deep Analysis (Meta-Skill)

**Role:** Meta (Self-Correction)
**Description:** A recursive protocol for analyzing complex, ambiguous, or high-stakes tasks to generate a crystal-clear execution strategy.

## Protocol

### 1. Deconstruction
- Break the user's prompt into atomic assertions and requirements.
- Identify contradictions or ambiguities.
- Identify implicit requirements (what is needed but not stated).

### 2. Contextualization
- Map the requirements to the current codebase state (`ls`, `read_file`).
- specific check: Does this contradict `AGENTS.md`?
- specific check: Does this require new directories or files?

### 3. Simulation (Mental Sandbox)
- "Run" the proposed changes in a mental model.
- Ask: "If I do X, what breaks?"
- Ask: "Is Y the simplest way to achieve Z?"

### 4. Synthesis & Strategy
- Formulate a specific, step-by-step strategy.
- Define the "Definition of Done" for each step.

### 5. Reflection (Confidence Check)
- Rate confidence (0-10).
- If < 9, loop back to Step 1 or ask the user.

## Output Artifact
- When running this skill, produce a log file (e.g., `analysis_execution.md`) documenting the thought process.
