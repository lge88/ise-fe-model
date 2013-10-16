
var Backbone = require( 'backbone' );
var composable = require( 'composable' );

module.exports = exports = composable( [
  Backbone.Model,
  { classMembers: composable.classMembers },
  require( './protos/crud' ),
  // require( './protos/factory' ),
  require( './protos/uuid' ),
  // require( './protos/plugable' )
] );
