---
paths: src/**/*.test.ts, src/**/*.test.tsx, tests/**/*
---
# Test-Regeln für JANUS

- Jede neue Komponente braucht einen Test
- Jede neue Utility-Funktion braucht einen Test
- Tests verwenden React Testing Library (keine enzyme)
- Teste Verhalten, nicht Implementierung
- Mindestens 80% Coverage für neuen Code
- E2E-Tests für kritische User-Flows (Charakter erstellen, Plot bearbeiten)
- Mock-Daten in `tests/fixtures/` ablegen
- Test-Beschreibungen auf Deutsch erlaubt
