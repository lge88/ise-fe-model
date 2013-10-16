
var flatten = require( 'flatten' );
var factory = new require( 'factory' )().standalone;
var base = require( '../Base' );
var classes = flatten( require( '../classes' ) );

module.exports = exports = factory( {
  base: base,
  factory: classes
} );

var plugin = {
  instanceMembers: {},
  classMembers: {
    factory: factory
  }
};

plugin.instanceMembers.createObject = function( obj ) {
  var obj = factory.createObject( obj );


}
