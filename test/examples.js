
var expect = require( 'expect.js' );

describe( 'Examples', function() {
    it(
      'http://opensees.berkeley.edu/wiki/index.php/Basic_Truss_Example',
      function() {
        var ISEModel = require( 'ise-fe-model' );

        var history = [];
        var m1 = ISEModel.create();
        var m2 = ISEModel.create();

        m1.on( 'delta', function( json ) {
          m2.applyDelta( json );
        } );

        m1.on( 'commit', function( json ) {
          m2.commit( json.uuid );
          history.push( json );
        } );

        m1.commit();
        m1
          .ndm( 2 )
          .ndf( 2 )
          .unit( 'kg,m,C' );
        m1.commit();

        m1.checkout( history[ 0 ] );

        expect( m1.toJSON() ).to.be.eql( m2.toJSON() );

        var mat = m1.createMaterial
          .type( 'Uniaxial.Elatic' )
          .E( 3000 );

        var ts = m1.createTimeSeries()
          .type( 'Linear' );

        var n1 = m1.createNode()
          .positionX( 0 )
          .positionY( 0 );

        var n2 = m1.creatNode()
          .positionX( 144 )
          .positionY( 0 );

        var n3 = m1.createNode()
          .positionX( 168 )
          .positionY( 0 );

        var n4 = m1.createNode()
          .positionX( 72 )
          .positionY( 96 );

        var spcs = [ n1, n2, n3 ]
          .map( function( n ) {
            return m1.createConstraint()
              .type( 'SinglePoint' )
              .node( n );
          } );

        var l = m1.createLoad()
          .type( 'NodalForce' )
          .direction( 100, -50 )
          .magnitude( 1 );

        var e1 = m1.createElement()
          .type( 'truss' )
          .nodes( n1, n4 )
          .A( 10 )
          .material( mat );

        var e2 = m1.createElement()
          .type( 'truss' )
          .nodes( [ n2, n4 ] )
          .A( 5 )
          .material( mat );

        var e3 = m1.createElement()
          .type( 'truss' )
          .nodes( [ n3, n4 ] )
          .A( 5 )
          .material( mat );

        var p = m1.createLoadPattern()
          .type( 'Plain' )
          .timeSeries( ts )
          .loads( [ l ] );

        console.log( m1.toJSON() );



      }
    );

} );
