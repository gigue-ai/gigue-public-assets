## Summary

<!-- What changed and why? Link Linear: PDE-xxx -->

## Test plan

- [ ] Local typecheck (`pnpm run check-types`)
- [ ] CI green (`ci` workflow)
- [ ] SVG / asset review (no scripts, event handlers, or external URLs in glyphs)

## Deploy notes

- Target branch: **staging** only for day-to-day work
- Cadence: `feat → staging → beta → main` (solo merge OK on staging/beta; **main** requires 1 approval)
- This repo is **public by design** (CI/Docker git dependency without auth) — do not make it private
- Cross-repo impact: <!-- office-floor / web-app pins? -->
