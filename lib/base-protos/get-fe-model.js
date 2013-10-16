
module.exports = exports = {
  instanceMembers: {
    getFeModel: function() {
      return getFeModel( this );
    }
  },
  classMembers: {
    getFeModel: function() {
      return getFeModel( this );
    }
  }
}

function getFeModel( scope ) {
  return scope.feModel || scope.constructor.feModel;
}
