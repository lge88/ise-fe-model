
var expect = require( 'expect.js' );

describe( 'ise-fe-model', function() {
  var ISEModel = require( 'ise-fe-model' );

  it( '#create', function() {
    var m1 = ISEModel.create();
    var m2 = ISEModel.create();

    expect( m1 ).to.be.a( 'object' );
    expect( m2 ).to.be.a( 'object' );

  } );

} );
