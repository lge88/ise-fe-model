
module.exports = exports = {
  instanceMembers: {
    updateReference: function( col ) {
      this.references || ( this.references = {} );
      var ns = this.references;
      var needResolved = Object
        .keys( this.attributes )
        .filter( function( k ) {
          return /_id$/.test( k );
        } )
        .forEach( function( k ) {
          var ref = k.slice( 0, -3 );
          var id = this.attributes[ k ];
          if ( ref && ref.length > 0 ) {
            ns[ ref ] = col.get( id );
          }
        } );
      return this;
    }
  }
}
