# CLAUDE.md

## What this folder is

`Art-Projects` is a single git repository that holds art-related projects
as subfolders — a dedicated collection, distinct from the general-purpose
`ai-slop` (throwaway/satirical projects) and from fully standalone projects
like `visa-map/` or `cost-of-living-map/` (each with its own git history
and remote). Everything in here shares one repo, pushed to
`github.com/JozsuaHeng/Art-Projects`.

- Each project still gets its **own subfolder** (e.g. `world-art-galleries/`),
  fully self-contained with its own `CLAUDE.md` describing that specific
  project.
- When starting a new art-related project, create a new subfolder here
  rather than adding files loose in this folder or giving it a top-level
  spot in the shelf.
- Git history is shared across all subfolders here — there is one `.git` at
  the `Art-Projects/` level, not one per project. Projects reuse the shared
  `.gitignore` and `.nojekyll` at this root rather than duplicating them.
