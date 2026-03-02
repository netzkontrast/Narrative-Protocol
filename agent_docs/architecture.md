# JANUS Architektur — Detailliert

## Dual-Cognition Modell
JANUS implementiert ein Planner-Executor Design Pattern:

### System 2 — Der Kohärenz-Kernel (AEGIS)
- Verkörpert durch Google Jules (asynchron, cloud-basiert)
- Verantwortlich für: globale architektonische Integrität,
  Langzeit-Planung, externalisiertes Wissensmanagement
- Verwendet `repomix` für statische XML-Digests des Dateisystems
- Schreibt NIEMALS Produktionscode direkt

### System 1 — Der Kollaps-Kernel (Juna)
- Verkörpert durch Claude Code (lokaler Executor)
- Verantwortlich für: schnelle Implementierung, Code-Generierung,
  lokale Refactorings, Test-Erstellung
- Arbeitet innerhalb der Grenzen der SKILL.md Delegierungen

### Kommunikations-Protokoll
- System 2 delegiert via SKILL.md an System 1
- System 1 aktualisiert STATE.md nach Abschluss
- PROJECT.md bleibt als konstante Referenz

## Tech-Stack Details
- **Framework**: Next.js 15 (App Router)
- **UI**: React 19 + Tailwind CSS + shadcn/ui
- **KI-SDK**: Vercel AI SDK (ai package)
- **Protokoll**: Model Context Protocol (MCP)
- **Toolchain**: mise (polyglot version manager)
- **Deployment**: Vercel (Serverless + Edge)

## Domain-Modell: Roman-Entwicklung
- Charaktere (Properties, Beziehungen, Entwicklungsbögen)
- Plot-Stränge (Timeline, Verflechtungen, Spannungsbögen)
- Kapitel (Struktur, Szenen, POV-Tracking)
- Welt-Building (Orte, Regeln, Hintergrund)
- KI-Assistenz (Vorschläge, Konsistenz-Checks, Stil-Analyse)
