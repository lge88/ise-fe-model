
var uuid = require( 'uuid' );
module.exports = exports = function( options ) {
  return {
    post: {
      classMembers: {
        create: function( item ) {
          item.uuid = uuid();
          return item;
        }
      }
    }
  }
}
