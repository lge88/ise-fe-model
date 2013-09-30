
var expect = require( 'expect.js' );

describe( 'Examples', function() {
    it(
      'http://opensees.berkeley.edu/wiki/index.php/Basic_Truss_Example',
      function() {
        var ISEModel = require( 'ise-fe-model' );

        var m1 = ISEModel.create()
          .ndm( 2 )
          .ndf( 2 );

        var creator = m.factory();

        var mat = creator.FeMaterial.Uniaxial.Elatic.create()
          .E( 3000 )
          .addToFeModel( m1 );

        var ts = creator.FeTimeSeries.Linear.create()
          .addToFeModel( m1 );

        var n1 = creator.FeNode.create()
          .positionX( 0.0 )
          .positionY( 0.0 )
          .fix()
          .addToFeModel( m1 );

        var n2 = creator.FeNode.create()
          .positionX( 144.0 )
          .positionY( 0.0 )
          .addToFeModel( m1 );

        var n3 = creator.FeNode.create()
          .positionX( 168.0 )
          .positionY( 0.0 )
          .addToFeModel( m1 );

        var n4 = creator.FeNode.create()
          .positionX( 72.0 )
          .positionY( 96 )
          .addToFeModel( m1 );

        var e1 = creator.FeElement.Truss.create()
          .nodes( n1, n4 )
          .A( 10 )
          .material( mat )
          .addToFeModel( m1 );

        var e2 = creator.FeElement.Truss.create()
          .nodes( n2, n4 )
          .A( 5 )
          .material( mat )
          .addToFeModel( m1 );

        var e3 = creator.FeElement.Truss.create()
          .nodes( n3, n4 )
          .A( 5 )
          .material( mat )
          .addToFeModel( m1 );

      }
    );

} );
