
var Backbone = require( 'backbone' );
module.exports = exports = {
  instanceMembers: {
    set: function( obj ) {
      // make uuid imuttable;
      if ( obj === 'uuid' ) {
        return Backbone.Model.prototype.set.call( this, {} );
      }
      if ( obj && obj.uuid ) {
        delete obj.uuid;
      }
      return Backbone.Model.prototype.set.apply( this, arguments );
    }
  }
};
