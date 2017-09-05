name=$1
scsspath="src/scss/utilities"
jspath="src/js/utilities"

# Create files
touch $scsspath/$name.scss
touch $jspath/$name.js

# Add content to scss file
echo ".$name {

}//.$name
" >> $scsspath/$name.scss

# Add content to js file
echo "// (function(){
  // var $name = \$('.$name');

  // Do your stuff here...

  // $name is done loading
  // $name.load(function() {
  // ...
  // });

  // The DOM is ready
  // \$(function() {
  // // ...
  // });

  // When window is resized
  // \$(window).resize(function() {
  // ...
  // });
// })();
" >> $jspath/$name.js
