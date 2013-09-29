
var crud = require( '../plugins/crud' );
var classes = require( '../classes' );

module.exports = exports = crud( {
  routes: classes,
  BaseCollection: require( './BaseCollection' )
} );
