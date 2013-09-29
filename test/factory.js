
var expect = require( 'expect.js' );
var composable = require( 'composable' );

describe( 'ise-model.factory', function() {

  it( '#createObject', function() {
    var FeModel = require( 'ise-fe-model' );
    var m = FeModel.create();

    var n0 = m.createObject( { _type: 'FeNode' } );
    var n1 = m.factory().FeNode( { x: 0.0, y: 0.0, z: 0.0 } );
    var n2 = m.factory().FeNode( { x: 0.0, y: 10.0, z: 0.0 } );
    // debugger;

  } );

} );
