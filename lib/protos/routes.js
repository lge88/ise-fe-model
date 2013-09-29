
var crud = require( '../plugins/crud' );
var classes = require( '../classes' );

var routes = classes.map( function( c ) {
  return c;
} )

module.exports = exports = crud( {
  routes: routes
} );
