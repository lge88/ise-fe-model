
module.exports = exports = {
  post: {
    instanceMembers: {
      toJSON: function( json ) {
        var feModel = this.feModel;
        if ( feModel ) {
          json.id = feModel.marshall( this );
          json.id = feModel.resolveId( this );
        }
        return json;
      }
    }
  }
}
