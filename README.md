# ALD Automotive Styleguide

Live at https://rommel-dk.github.io/ald-automotive-styleguide/

## Naming convention
Notice that the build folder is named 'docs'. This allows us to host it on Github Pages.
Naming convention for components follows https://suitcss.github.io/

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
- Sticky footer
- Dark blue sticky footer scroll down to it on click
- 'reload browser to see models' when resizing window
