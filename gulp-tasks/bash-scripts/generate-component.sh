name=$1
scsspath="src/scss/components"
jspath="src/js/components"
htmlpath="src/templates/partials"

# Create files
touch $scsspath/$name.scss
touch $jspath/$name.js
touch $htmlpath/$name.html

# Add content to scss file
echo ".$name {

}//.$name
" >> $scsspath/$name.scss

# Add content to js file
echo "// $name
" >> $jspath/$name.js

# Add content to html file
echo "<div class='$name'>

</div><!-- /.$name -->
" >> $htmlpath/$name.html
