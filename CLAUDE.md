# CLAUDE.md — JANUS Projekt

## Projekt
JANUS ist ein Dual-Cognition AI-Orchestrierungssystem für KI-gestützte
Roman-Entwicklung. Tech-Stack: Next.js 15, React 19, TypeScript (strict),
Tailwind CSS, Vercel AI SDK, Model Context Protocol (MCP).

Arbeitssprache: Deutsch für Dokumentation und Kommentare.
Code und Variablennamen: Englisch.

## Architektur
- System 2 (Planer): Google Jules — globale Architektur, nie Produktionscode
- System 1 (Executor): Claude Code / gemini-cli — lokale Implementierung
- Orchestrierung: SKILL.md definiert Delegierungs-Protokoll
- Zustand: STATE.md (aktuell), PROJECT.md (Projektdefinition)
- Konfiguration: mise.toml (Toolchain-Versionen)

## Verzeichnisse
- `src/app/` — Next.js App Router (Pages, Layouts, API Routes)
- `src/components/ui/` — Shared UI Primitives (shadcn/ui)
- `src/components/features/` — Feature-Komponenten (character/, plot/, editor/)
- `src/lib/ai/` — KI-Integration (Vercel AI SDK Wrapper)
- `src/lib/mcp/` — MCP Protokoll-Implementierung
- `src/server/` — Server-only Code (DB, Services)
- `agent_docs/` — Detaillierte Architektur-Dokumentation
- `plans/` — Implementierungs-Pläne (von Plan Mode erstellt)

## Befehle
```bash
npm run dev            # Dev-Server starten (Port 3000)
npm run build          # Produktions-Build
npm run lint           # ESLint prüfen
npm run lint:fix       # ESLint auto-fix
npm run format         # Prettier formatieren
npm run typecheck      # TypeScript Typ-Prüfung
npm run test           # Jest Unit-Tests
npm run test:coverage  # Tests mit Coverage-Report
npm run ci             # Vollständige CI-Prüfung lokal
```

## Konventionen
- Named Exports verwenden, keine Default Exports
- Komponenten: PascalCase Dateinamen (UserCard.tsx)
- Alle DB-Queries über `src/server/db/`
- Type-Annotations auf allen Funktionen erforderlich
- Test-Dateien neben Quellcode: `Component.test.tsx`
- `cn()` aus `@/lib/utils` für bedingte ClassNames
- Conventional Commits: feat:, fix:, chore:, docs:, refactor:
- Branch-Namensgebung: feature/, fix/, chore/, docs/

## Verboten
- NIEMALS .env Dateien lesen oder Inhalte ausgeben
- NIEMALS direkt auf main committen — immer Feature-Branch
- NIEMALS Migration-Dateien nach Commit ändern
- KEINE neuen Dependencies ohne explizite Diskussion
- NIEMALS STATE.md oder SKILL.md ohne Rücksprache ändern

## Kontext
Für Details siehe:
- `agent_docs/architecture.md` — JANUS Dual-Cognition Architektur
- `agent_docs/testing.md` — Test-Patterns und Anforderungen
- `agent_docs/narrative-engine.md` — Roman-Engine Dokumentation
- `STATE.md` — Aktueller Projektzustand
- `SKILL.md` — Orchestrierungs-Protokoll
