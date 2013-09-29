
module.exports = exports = {
  instanceMembers: {
    // feObjects -> plain json array
    marshall: function( feObjects ) {
      return ensureArray( feObjects )
        .map( function( o ) {
          return [ o, o.toJSON() ];
        } )
        .map( function( tuple ) {

        } )
    },

    // plain json array -> feObjects
    unmarshall: function( json ) {

    }
  }
}

function ensureArray( x ) { return Array.isArray( x ) ? x : [ x ]; }
