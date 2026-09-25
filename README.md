# KW Awards Voting Platform: Frontend

React single-page app for the KW Awards voting platform. The Django API lives
in a separate repository (`KW_Awards-voting-platfom`).

> **Status:** early development. The pages are built but **not connected to
> the backend yet**: the voting, category and admin pages use hardcoded mock
> data, the registration form only logs to the console, and there is no
> login or route protection. See the "Not implemented yet" list below and
> `AUDIT.md` (in the workspace root) for the roadmap.

## Tech stack

| | Version |
|---|---|
| Node.js | 24 LTS (`.nvmrc`, `engines`) |
| React | 18.3.1 |
| Vite | 8.3 (`@vitejs/plugin-react` 6.1) |
| Tailwind CSS | 4.3 (CSS-first config, `@tailwindcss/vite`) |
| React Router | 6.30 |
| Redux Toolkit / react-redux | 2.12 / 9.3 |
| Recharts | 2.15 |
| Icons | lucide-react, react-icons |
| Tooling | ESLint 9 (flat config), TypeScript 6 (incremental), npm |

All versions are pinned exactly in `package.json`.

## Getting started

```bash
nvm use            # or install Node 24
npm ci
cp .env.example .env.local   # optional, see below
npm run dev        # http://localhost:4500
```

### Environment variables

| Variable | Purpose |
|---|---|
| `VITE_API_URL` | Base URL of the backend API, no trailing slash. Defaults to `http://localhost:8000/api` in the dev server. **Must be set for production builds.** |

Read through `src/config.js`. Only `VITE_`-prefixed variables reach the
browser, so never put secrets in them.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server on port 4500 |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint (JS/JSX and TS/TSX) |
| `npm run typecheck` | `tsc --noEmit` |

CI (`.github/workflows/ci.yml`) runs `npm ci`, lint, typecheck, build and a
runtime-dependency audit on every push and pull request. **There is no
deployment workflow yet**; hosting is decided later.

## Project structure

```
src/
├── App.jsx                 # Router, Redux provider, lazy-loaded routes
├── config.js               # VITE_API_URL
├── index.css               # Tailwind import, @theme tokens, base styles
├── components/
│   ├── Navbar/             # Responsive top navigation
│   └── store/              # Redux store and slices (dashbardSlice.jsx, sic)
└── pages/
    ├── Home/               # Landing page
    ├── Voting/             # Voting list (mock data)
    ├── Category/           # Categories (mock data)
    ├── Register/           # Nominee registration form (not submitted anywhere)
    ├── AboutUs/            # Static content (placeholder text)
    ├── admin/              # Admin dashboard (mock data)
    └── NotFound/           # 404
```

## Routes

| Path | Page | Notes |
|---|---|---|
| `/` | Home | |
| `/vote` | Voting | mock candidates; the Vote button only logs |
| `/category` | Category | mock categories |
| `/register` | Register | form state only; submission not implemented |
| `/aboutus` | About Us | placeholder text |
| `/gallery`, `/faqs` | placeholders | |
| `/admin` | Admin dashboard | mock data, **not protected** |
| `*` | 404 | |

Every page except Home is loaded with `React.lazy` + `Suspense`, so the
heavy charts library only downloads when `/admin` is visited.

## Styling

Tailwind CSS v4 with CSS-first configuration: design tokens live in the
`@theme` block in `src/index.css` (`gold`, `gold-dark`, `brown-800`,
`brown-900`). There is no `tailwind.config.js`. Avoid building class names
dynamically (`bg-${color}-100`); Tailwind only generates classes that appear
as complete strings in the source.

## TypeScript

The project is migrating to TypeScript incrementally. `tsconfig.json` has
`allowJs` on and `checkJs` off, so existing `.js`/`.jsx` files keep working
and are not type-checked. Convert a file by renaming it to `.ts`/`.tsx`; it
is then checked strictly (`npm run typecheck`) and linted with
typescript-eslint. `react/prop-types` is off because types replace it.

## Not implemented yet

- Any call to the backend (voting, nominees, categories, stats)
- Authentication (login, token storage, logout) and protected routes
- Nominee approval, search, and genre filtering wired to real data
- Real content for About/FAQ/Contact
- Deployment / hosting

## Known issues

- `npm audit` reports 2 moderate advisories in React Router 6.x; the fix is
  in v7 (major migration, deferred). The SSR advisory does not apply, and the
  open-redirect one needs user-controlled navigation targets, which the app
  does not use.
- ESLint 9 is flagged as unsupported upstream, but the React plugin does not
  support ESLint 10 yet.

## Contributing

1. Create a branch: `git checkout -b feature/short-description`
2. Make small commits; run `npm run lint && npm run typecheck && npm run build`
3. Push the branch and open a pull request; CI must pass.
