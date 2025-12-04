# Action: Compress

**Goal**: Reduce cognitive load by converting detailed history into a dense state representation.

## Process

1.  **Read History**: Scan recent files in `projects/<project>/history/`.
2.  **Extract Key Information**:
    -   Decisions made.
    -   Tasks completed.
    -   New patterns discovered.
    -   Pending blockers.
3.  **Update Context**:
    -   Rewrite `projects/<project>/context.md` with this new state.
    -   *Crucial*: Remove obsolete details. The context should be "What do I need to know *right now*?", not "What happened last week?".
4.  **Archive**: (Optional) Move processed history files to an `archived/` subfolder if they are no longer needed for immediate reference.
