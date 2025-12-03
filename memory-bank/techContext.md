# Tech Context

## Core Stack
-   **Framework**: Next.js 15 (App Router)
-   **Language**: TypeScript 5.x (Strict)
-   **UI Library**: React 19
-   **Styling**: Tailwind CSS v4
-   **Components**: Shadcn/UI (Radix primitives)
-   **State Management**: Zustand
-   **Validation**: Zod
-   **AI SDK**: Vercel AI SDK Core

## Infrastructure
-   **Deployment**: Vercel
-   **Database**: PostgreSQL (Prisma/Drizzle - TBD), Neo4j (Graph)
-   **Queue/Background**: Inngest

## Development Tools
-   **Linting**: ESLint v9 (Flat Config)
-   **Formatting**: Prettier
-   **Testing**: Vitest + React Testing Library
-   **Git Hooks**: Lefthook

## Constraints
-   **Edge Compatibility**: Core AI functions should run on Edge/Serverless.
-   **Type Safety**: No `any`. Strict Zod schemas for all inputs.
-   **Performance**: Web Vitals score > 90.
