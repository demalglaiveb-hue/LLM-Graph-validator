# LLM-Graph Validator (Draft)

This repository contains the web UI and API for validating **LLM-Graph** JSON
snippets against the official schemas (v0.2.0).

## Goals

- Validate LLM-Graph documents (web, document, product, app)
- Provide a simple web UI (paste JSON → validate)
- Expose an HTTP API endpoint (`/validate`) for programmatic use

## Structure

```text
validator/
├── README.md
├── package.json
├── src/
│   ├── web/        # Frontend (for example: Next.js / React)
│   ├── api/        # HTTP endpoints (validate, lint)
│   └── core/       # Core validation logic (schema loading, etc.)
└── schema/         # (optional copy of LLM-Graph schemas)
```

## Status

Draft skeleton only — logic to be implemented.
