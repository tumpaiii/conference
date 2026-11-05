# OFFGRID — complete Next.js project

Next.js 14 App Router, TypeScript, Tailwind CSS, Poppins, Framer Motion, Lucide React, clsx and tailwind-merge. Includes shadcn-compatible button, badge and card primitives plus components.json.

## Run

Use Node.js 20 LTS or newer. Open the extracted folder containing package.json in VS Code:

```bash
npm install
npm run dev
```

Preview: http://localhost:3000

```bash
npm run typecheck
npm run build
npm start
```

## GitHub → AI Studio

Extract the ZIP, then upload its contents to your repository. package.json must be at the repository root. Do not upload only the ZIP itself. Import that repository in AI Studio. Preserve the Next.js framework and all folders. Run npm install, then npm run dev. No standalone output or custom server is configured. Generated node_modules and .next folders are deliberately excluded.

## Folder structure

- app/: App Router entry points and global CSS.
- components/all-components/: all individual website sections plus offgrid-website.tsx for page composition.
- components/ui/: button.tsx, badge.tsx, card.tsx; default exports.
- lib/utils.ts: cn() helper using clsx and tailwind-merge.
- lib/site-actions.ts: typed UI actions.
- lib/site-runtime.ts: preserved coordinated intro, scroll animations, countdown, accordions and registration behaviour; initialized once after hydration. Keep this file when importing the project.
- src/assets/images/: 14 bundled JPG photographs.
- src/assets/videos/: background MP4 with imported JPG poster.
- src/assets/icons/: SVG logo and local Poppins font files.

Images, video and SVG are imported as variables. Native img uses importedImage.src for Next.js image imports. CSS backgrounds and fonts use relative paths. All media stays under src/assets. Photos are under 500 KB; video is below 10 MB. Fonts do not require external requests. The original approved full-page order is preserved. When adding a new isolated component preview, put the latest section first in your preview composition; do not reorder the production conference page.

## Important integration status

Registration validates details, lets visitors edit them and download a local summary. It does NOT send details to an organizer, reserve seats, collect payment or store submissions on a server. Connect your chosen backend before accepting real registrations. The form clearly states this limitation.

Speaker names, roles and companies are fictional sample profiles with stock portraits. Replace them with confirmed speaker details before advertising the event. Exact venue is unconfirmed. Prices are proposed USD prices. Event date is November 13, 2026.

Photographs/video are bundled from the approved preview's stock assets (Unsplash/Pexels sources); stock models are not actual speakers. Retain applicable stock licenses. Poppins is under SIL Open Font License 1.1 (FONT-LICENSE.txt). Brand SVG is editable.
