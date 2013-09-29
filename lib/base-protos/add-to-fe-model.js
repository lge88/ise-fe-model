
module.exports = exports = {
  instanceMembers: {
    addToFeModel: function( feModel ) {
      feModel.addObject( this );
      return this;
    }
  }
}
