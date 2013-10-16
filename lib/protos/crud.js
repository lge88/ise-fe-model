
// var crud = require( '../plugins/crud' );
var flatten = require( 'flatten' );
var extend = require( 'extend' );
var classes = require( '../classes' );
var factory = require( 'factory' )().standalone;

factory.loadFactory( classes );

var plugin = {
  pre: {
    instanceMembers: {}
  },
  instanceMembers: {},
  classMembers: {}
};

extend( plugin., {
  createObject: function( obj ) {
    var ret = factory.createObject( obj );
    this.routes[ ]
  }
} );

extend( plugin.instanceMembers, {
  createObject: function( obj ) {
    return factory.createObject( obj );
  },
  removeObject: function( obj ) {}
} );

module.exports = exports = plugin;
