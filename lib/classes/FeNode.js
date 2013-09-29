
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
    defaults: {
      position: { x: 0.0, y: 0.0, z: 0.0 }
    },
    fix: function() {
      var feModel = this.feModel;
      feModel.factory().SinglePointConstriant()
    }
  },
  classMembers: {
    type: 'FeNode',
    path: '/nodes'
  }
} );
