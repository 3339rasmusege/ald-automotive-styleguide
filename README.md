# ALD Automotive Styleguide

Live at https://rommel-dk.github.io/ald-automotive-styleguide/

## How to us the styles, scripts and html

Include the following files:

`build/app.js`
`build/css/main-default.css`

To use a different styled variation, include 
`build/css/main-ford.css` 
or 
`build/css/main-examplevariation.css` 
instead of
`build/css/main-default.css`

See "Building, watching and extending" for explanation of how to create these.

### Javascript usage
To execute the javascript and bind the events of the components, run the following script after app.js is included:
`moduleScripts.loadScripts()`
or
`window.moduleScripts.loadScripts()`

## Building, watching and extending
Building the html, assets and css can be done with the folling package manager commands
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

### Watch and build only the SCSS
`yarn watch-scss`

### Extend the scss for new variations
To create a new .css file for a new styleguide variation, create a folder here:
`/src/scss/<foldername>`
Include the `main.scss` file and a `variables.scss` file for the necessary scss theme configurations. See the example inside `/src/scss/examplevariation/`.
The example files is set up to use the SCSS files from the `/src/scss/default/`-folder with its own variables defined in the local `variables.scss` file. This way you can use the default styling and extend as necessary. I recommend adding any extra files that should only be included for an individual variation in its local folder (ex. `src/scss/examplevariation/`) and `@import` it to the local `main.scss`.

## Github Pages docs
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
