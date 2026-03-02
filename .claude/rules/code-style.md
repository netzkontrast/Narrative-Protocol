---
paths: src/**/*.ts, src/**/*.tsx
---
# Code-Style Regeln für JANUS

- Verwende `interface` statt `type` für Objekt-Shapes
- Alle Komponenten als Arrow Functions mit explizitem Return-Type
- Props-Interface direkt über der Komponente definieren
- Keine `any` Types — verwende `unknown` und Type Guards
- Error Handling immer mit custom Error-Klassen
- Async/Await statt .then() Chains
- Alle API-Responses mit Zod validieren
- React Server Components als Default, 'use client' nur wenn nötig
