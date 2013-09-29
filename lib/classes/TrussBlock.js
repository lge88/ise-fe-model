
// var scalable = require( '../plugins/scalable.js' );

module.exports = exports = [
  {
    instanceMembers: {
      defaults: {
        A: 10
      },
      setISEModel: function( m ) {
        this.ISEmodel = m;
        return this;
      }
    },
    classMembers: {
      type: 'TrussBlock'
    }
  },
  // scalable(),
  {
    instanceMembers: {

    }
  }
]
