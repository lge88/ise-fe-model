
var Backbone = require( 'backbone' );
var extend = require( 'extend' );

module.exports = exports = function( options ) {
  options || ( options = {} );
  var commands = options.commands;
  var methodField = options.methodField || '_method';
  var plugin = {
    pre: {
      instanceMembers: {}
    },
    post: {
      instanceMembers: {
        initialize: function() {
          var ns = this.command = runCommands;
          ns._multi = false;
          ns._history = new Backbone.Collection();
        }
      }
    },
    instanceMembers: {}
  };

  commands.forEach( function( cmd ) {
     plugin.pre.instanceMembers[ cmd ] = function( arg ) {
       if ( this.command.comma ) {  }
       return arg
     }
  } );

  return plugin;

  function getMethod( obj ) { return obj[ methodField ]; }

  function runCommands( commands, cb, scope ) {
    // save the state


    var error = null;
    var success = ensureArray( commands )
      .every( function( cmd ) {
        var method = getMethod( scope );
        method.call( scope, cmd )
      } )
  }
}


function ensureArray( x ) { return Array.isArray( x ) ? x : [ x ]; }
