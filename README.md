# ALD Automotive Styleguide

Live at https://rommel-dk.github.io/ald-automotive-styleguide/

## How to us the styles, scripts and html

Include `app.css` and `app.js` located in the /build/ folder on the page. Run the following javascript after the script is included, to run the javascript for the components.
```
var triggerJavascriptEvent = new Event('trigger-load');
window.dispatchEvent(triggerJavascriptEvent)
```

## Building with npm or yarn
### Build with npm
```
npm install
npm run build
```

### Build with yarn
```
yarn
yarn build
```

The builded files in the 'docs' folder is for hosting the styleguide on Github Pages.

## Naming convention
Naming convention for components follows https://suitcss.github.io/:

`u-utilityName`
`ComponentName`
`ComponentName--modifierName`
`ComponentName-descendentName`
`ComponentName.is-stateOfComponent`

## Gulp tasks
- `gulp s` starts development server
- `gulp production` builds for production in the 'docs' folder
- `gulp ghp` builds for deployment on GitHub pages in the 'docs' folder

## Generate tasks
- `gulp gc --name ComponentName` generates css, js and html for a new component.
- `gulp rc --name ComponentName` removes a component.
- `gulp gu --name utilityName` generates css and js for a utility.
- `gulp ru --name utilityName` removes a utility.

## Todos
- 'reload browser to see models' when resizing window
