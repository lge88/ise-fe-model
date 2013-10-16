
// var scalable = require( '../plugins/scalable.js' );
var extend = require( 'extend' );

module.exports = exports = extend( {
  post: {
    instanceMembers: {
      addToFeModel: function() {
        var feModel = this.feModel;
        return this;
      }
    }
  },
  instanceMembers: {
    node: function( n ) {
      if ( !n ) {
        return this.references.node;
      } else {
        this.set( 'node_id', n.id );
        this.updateReference();
        return this;
      }
    },
    fix: function() {
      var feModel = this.feModel;
      feModel.factory().SinglePointConstriant()
    }
  },
  classMembers: {
    type: 'FeNode',
    path: '/nodes',
    properties: [
      { selector: 'node_id' }
    ],
    commands: [],
    queries: []
  }
} );
