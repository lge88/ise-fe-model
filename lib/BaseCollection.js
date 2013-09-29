
var Backbone = require( 'backbone' );

var BaseCollection = Backbone.Collection.extend( {
  comparator: 'uuid',
  initialize: function() {
    var uuidMap = this._uuidMap = {};
    // var indexMap = this._indexMap = {};
    // var _this = this;

    this.on( 'add', function( model ) {
      uuidMap[ model.uuid ] = model;
      // indexMap[ model.uuid ] = _this.indexOf( model, true );
    } );
    this.on( 'remove', function( model ) {
      delete uuidMap[ model.uuid ];
      // delete indexMap[ model.uuid ];
    } );
  },

  get: function( obj ) {
    if ( this._uuidMap[ obj ] ) {
      return this._uuidMap[ obj ];
    } else if ( obj && obj.uuid ) {
      return this._uuidMap[ obj.uuid ];
    }

    return Backbone.Collection.prototype.get.apply( this, arguments );
  }

} );

module.exports = exports = BaseCollection;
