
var composable = require( 'composable' );
var Backbone = require( 'backbone' );

module.exports = exports = composable( [
  Backbone.Model,
  {
    classMembers: composable.classMembers
  },
  require( './base-protos/set' ),
  require( './base-protos/uuid' ),
  require( './base-protos/type' ),
  // require( './base-protos/set-fe-model' )
] );
