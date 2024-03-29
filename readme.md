# [Tracking Progress](https://www.dvrpc.org/TrackingProgress/)
Tracking Progress is an interactive dashboard for exploring regularly updated data to gauge The DVRPC region's progress towards long-range plan goals. Regional indicator data are used to better understand where the region is at the start of each plan update, identify successful programs, and align DVRPC's planning and implementation activities to serve as a guide for regional strategies. <a href="https://www.dvrpc.org/TrackingProgress/">View website</a>.

## Development
Tracking Progress is built primarily with native web technologies. The charts are built with D3, using <a href="http://nvd3.org/">NVD3</a> as a wrapper for most cases. Everything else is vanilla HTML, CSS and Javascript.

Running ```npm start``` starts the dev-server which will automatically update the application after any changes. Initially the application may not be up to date but after the first save the dev-server will reload the most recent version of the application.

Running ```npm run build``` creates a production ready build. After running the command copy files to staging server in order to update application.

## Build Process
Source code is transpiled and prepared for production with a custom <a href="https://webpack.js.org/">Webpack</a> config. 
- `npm install` (first time only)
- From root run `npm run build`
- Copy files to /TrackingProgress/