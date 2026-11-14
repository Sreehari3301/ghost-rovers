# Ghost Rovers

An interactive web story for the 2026 NASA Space Apps Challenge "Abandoned but not Forgotten". Pick a world (Moon, Mars, Deep Space), tap a glowing marker, and hear a machine NASA left behind tell its own story, with real facts and links to NASA sources.

Machines: Apollo 15 science station, Spirit, Opportunity, Ingenuity, InSight, Dawn, NEAR Shoemaker.

## Files

- `index.html`: page structure
- `style.css`: styles (light and dark mode, mobile friendly)
- `app.js`: tabs, map drawing, markers and story panel
- `data.json`: all stories, facts and sources. Edit this to change content.
- `mars.jpg`: the Mars map — NASA Ames / USGS Viking Orbiter mosaic (MDIM 2.1, 2048×1024, centred at 90°E so all four Mars markers fit).
- `moon.jpg`: the Moon map — NASA/GSFC/Arizona State University LRO WAC nearside mosaic (1024×1024).
- `ceres.jpg`, `eros.jpg`: real photos shown on the Deep Space map at the Dawn and NEAR markers — Ceres bright spots (Dawn, PIA19604) and Eros north polar mosaic (NEAR, PIA02923).

## Run locally

The page loads `data.json` with `fetch`, so open it through a local server, not by double-clicking `index.html`.

```
python3 -m http.server
```

Then open http://localhost:8000.

## Add or edit a machine

Add an object to `machines` in `data.json` with: `id`, `name`, `label` (short name shown on the map), `world` (`moon`, `mars` or `deep-space`), `x`, `y` (marker position in percent), `hook`, `story`, `facts`, `howItWorked`, `ending`, `nowAt`, `sources` and `todo`.

## Sources

Every fact and source link comes only from the six NASA pages in the resource list: Apollo 15 lander (NSSDCA), Spirit and Opportunity, Ingenuity, InSight, Dawn and NEAR Shoemaker. One extra NASA detail page is used for the twin rovers only: Rover Basics, linked from the Spirit and Opportunity page, for how a rover works (mast, arm, wheels, solar panels). Facts those pages do not give are left out and listed in each entry's `todo`.

The Mars map image (`mars.jpg`) is separate from the facts: it is the NASA Ames / USGS Viking Orbiter colour mosaic (MDIM 2.1, public domain), centred at 90°E. Landing coordinates for the four Mars machines come from their landing-site records, not from the six pages, and are recorded in `data.json` as `lat`/`lon`.

## Open gaps (see `todo` in data.json)

- Dawn: arrival dates, instruments, how it ended, where it is now — decided 14 Nov 2026 to keep the entry short, no new pages added before submission. Its "How it worked" is now filled from its own page (orbiter, extended stays at Vesta and Ceres)
- Spirit, Opportunity, InSight, Ingenuity: why or how each mission ended, beyond what the page says. Spirit and Opportunity now have "How it worked" from the Rover Basics page linked from their resource (mast, arm, wheels, solar panels); named instruments still not listed
- Apollo 15: rover details and where the rover was parked. Descent stage now covered (it stayed on the Moon as the launch pad), and the full ALSEP instrument list is in "How it worked"
- Ingenuity: the page has a typo giving the first flight as August 19, 2021; the correct date is April 19, 2021
- Spirit and InSight: end dates now show both last contact and the date NASA declared the mission over (Spirit: 22 March 2010 / 25 May 2011; InSight: 15 December 2022 / 21 December 2022); see the credits footer
- Map coordinates for Gusev Crater, Meridiani Planum and Jezero Crater

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

All facts come from NASA pages linked in each story. Moon and Mars maps are real NASA mosaics (LRO WAC and Viking MDIM 2.1); the Deep Space star map is drawn for this project, with real Ceres and Eros photos on it.