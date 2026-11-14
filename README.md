# Ghost Rovers

An interactive web story for the 2026 NASA Space Apps Challenge "Abandoned but not Forgotten". Pick a world (Moon, Mars, Deep Space), tap a glowing marker, and hear a machine NASA left behind tell its own story, with real facts and links to NASA sources. Written for ages 8 to 12.

Machines: Apollo 15 science station, Spirit, Opportunity, Ingenuity, InSight, Dawn, NEAR Shoemaker.

## Files

- `index.html`: page structure
- `style.css`: styles (light and dark mode, mobile friendly)
- `app.js`: tabs, map drawing, markers and story panel
- `data.json`: all stories, facts and sources. Edit this to change content.

## Run locally

The page loads `data.json` with `fetch`, so open it through a local server, not by double-clicking `index.html`.

```
python3 -m http.server
```

Then open http://localhost:8000.

## Add or edit a machine

Add an object to `machines` in `data.json` with: `id`, `name`, `label` (short name shown on the map), `world` (`moon`, `mars` or `deep-space`), `x`, `y` (marker position in percent), `hook`, `story`, `facts`, `howItWorked`, `ending`, `nowAt`, `sources` and `todo`.

## Sources

Every fact and source link comes only from the six NASA pages in the resource list: Apollo 15 lander (NSSDCA), Spirit and Opportunity, Ingenuity, InSight, Dawn and NEAR Shoemaker. Facts those pages do not give are left out and listed in each entry's `todo`.

## Open gaps (see `todo` in data.json)

- Dawn: arrival dates, instruments, how it ended, where it is now
- Spirit, Opportunity, InSight, Ingenuity: why or how each mission ended, beyond what the page says
- Apollo 15: rover details and where the rover was parked
- Ingenuity: the page has a typo giving the first flight as August 19, 2021; the correct date is April 19, 2021
- Spirit and InSight: the page end dates (2010 and 15 December 2022) differ from other NASA coverage; see the notes in `todo`
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

All facts come from NASA pages linked in each story. The maps are drawn for this project and use no NASA images. Check NASA media usage rules before adding NASA images.