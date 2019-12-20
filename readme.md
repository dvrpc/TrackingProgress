# Tracking Progress

Tracking Progress is an interactive dashboard for exploring regularly updated data to gauge the region's progress towards long-range plan goals. Regional indicator data are used to better understand where the region is at the start of each plan update, identify successful programs, and align DVRPC's planning and implementation activities to serve as a guide for regional strategies.

## Build Process

Due to how this project was initially outlined, Tracking Process combines a Single Page App with a traditional HTML/CSS/JS architecture. As a result, the Webpack build process requires a couple extra steps beyond `npm build`:

- From root run `npm build`
- In the build folder, move all HTML files *except* for `index.html` into the indicatorSnippets folder (create it if it doesn't exist)
- In `index.html`, change the `<script>` tag in the `<head>` to: `<script defer src="bundle.js" type="text/javascript"></script>`. Delete the reference to `bundle.js` at the bottom of the file.
- Update `baseURL` in `routing.js` to the appropriate path. The build process should detect a dev and production environment and do that automatically, I just haven't set it up yet. Feel free to update it and then delete this line. 
- Copy files to /review/TrackingProgress/ or, for launch, /TrackingProgress/