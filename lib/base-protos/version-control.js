var uuid = require( 'uuid' );
var _ = require( 'underscore' );

module.exports = exports = {
  post: {
    instanceMembers: {
      initialize: function() {
        this._historyStack = [];
      }
    }
  },
  instanceMembers: {
    commit: function() {
      // valid model
      var data = this.toJSON();
      this._historyStack.push( data );
    },
    undo: function() {
      var data = this._history.pop();
      this.set( _.omit( data, 'id' ) );
    },
    redo: function() {

    }
  }
};
