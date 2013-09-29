
var flatten = require( 'flatten' );
var factory = require( 'factory' );
var base = require( '../Base' );
var classes = flatten( require( '../classes' ) );

module.exports = exports = factory( {
  base: base,
  factory: classes
} );
