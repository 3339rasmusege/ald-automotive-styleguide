name=$1
scsspath="src/scss/components"
jspath="src/js/components"
htmlpath="src/templates/partials"

# Remove files
rm $scsspath/$name.scss
rm $jspath/$name.js
rm $htmlpath/$name.html
