# Ghost Rovers

An interactive web story for the 2026 NASA Space Apps Challenge "Abandoned but not Forgotten". Pick a world (Moon, Mars, Deep Space), tap a glowing marker, and hear a machine NASA left behind tell its own story, with real facts and links to NASA sources. Written for ages 6 to 10, and readable by older kids too.

Machines: Apollo 15 science station, Spirit, Opportunity, Ingenuity, InSight, Dawn, NEAR Shoemaker.

## Files

- `index.html`: page structure
- `style.css`: styles (light and dark mode, mobile friendly)
- `app.js`: tabs, maps, markers, story panel, listen button, sources sidebar
- `data.json`: all stories, facts and sources. Edit this to change content.
- `audio/`: one MP3 per story (ElevenLabs narration), played by the Listen button; if a file is missing the button falls back to the browser's built-in voice.
- `mars.jpg`: Mars map, NASA Ames / USGS Viking Orbiter mosaic (MDIM 2.1), centred at 90°E so all four Mars markers fit
- `moon.jpg`: Moon map, NASA/GSFC/Arizona State University LRO WAC nearside mosaic
- `ceres.jpg`, `eros.jpg`: real photos shown on the Deep Space map at the Dawn and NEAR markers (Ceres bright spots, Dawn, PIA19604; Eros north polar mosaic, NEAR, PIA02923)

## Run locally

The page loads `data.json` with `fetch`, so open it through a local server, not by double-clicking `index.html`.

```
python3 -m http.server
```

Then open http://localhost:8000.

## Add or edit a machine

Add an object to `machines` in `data.json` with: `id`, `name`, `label` (short name on the map), `world` (`moon`, `mars` or `deep-space`), `x`, `y` (marker position in percent), `hook`, `story` (separate paragraphs with a blank line), `ending`, `nowAt` and `sources`. `facts` and `howItWorked` are optional notes and are not shown on the page. If you change a story, make a new MP3 for it (`audio/<id>.mp3`) so the voice matches the text.

## Sources

Every fact and source link comes from NASA pages: the six in the resource list (Apollo 15 lander at NSSDCA, Spirit and Opportunity, Ingenuity, InSight, Dawn and NEAR Shoemaker), the Rover Basics page linked from the Spirit and Opportunity page, and two NASA end-of-mission pages for end dates (Spirit: science.nasa.gov/mission/mer-spirit; InSight: the JPL/NASA release of 21 December 2022).

Map images are separate from the facts. Moon: NASA/GSFC/ASU (LRO WAC). Mars: NASA Ames / USGS (Viking MDIM 2.1, public domain). Landing coordinates for the four Mars machines come from their landing-site records and are stored in `data.json` as `lat` and `lon`. The Deep Space star map is drawn for this project, with real Ceres and Eros photos on it.

## Accessibility

Keyboard friendly (arrow keys switch worlds, Escape closes the sidebar), screen reader labels on markers and maps, reduced-motion support, light and dark mode, and a Listen button that plays each story aloud. On phones a row of machine buttons sits under the map so every machine is easy to tap, and the Sources button (top right) opens the NASA links. Every story also ends with its NASA sources.

## Design choices

- Age group: written for ages 6 to 10, in short sentences with hard words explained in the story; older kids can read it too.
- Narrative, not lists: every fact lives inside the machine's own story, showing how it worked and what it found — no fact sheets on the page.
- Focus: seven specific machines, one story each, on three real maps.
- Perspectives: each machine speaks in its own imagined voice; the NASA pages behind every fact are linked in the sidebar.

## AI use

This project was built with help from AI. Claude (Anthropic) helped plan the project, write the code, draft the stories and check the facts against the NASA pages linked in each story. The narration voices were made with ElevenLabs. Story text, facts and sources were reviewed before publishing. Edit this section so it describes exactly what you did yourself.

## Publish with GitHub Pages

1. Create a public repository named `ghost-rovers` on GitHub.
2. In this folder run:

```
git init
git add .
git commit -m "First version"
git branch -M main
git remote add origin https://github.com/YOUR-NAME/ghost-rovers.git
git push -u origin main
```

3. In the repository open Settings, then Pages. Under Build and deployment choose Deploy from a branch, select `main` and `/ (root)`, then Save.
4. After one to two minutes the site is live at `https://YOUR-NAME.github.io/ghost-rovers/`.

## Credits

All facts come from NASA pages linked in each story. Moon and Mars maps are real NASA mosaics (LRO WAC and Viking MDIM 2.1); the Deep Space star map is drawn for this project, with real Ceres and Eros photos on it. Story narration voices were made with ElevenLabs.
