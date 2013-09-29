
var extend = require( 'extend' );

module.exports = exports = function( options ) {
  var out = {
    instanceMembers: {
      loadPlugin: function( plugin, options ) {
        if ( !this.plugins ) { this.plugins = {} };
        if ( typeof plugin.name === 'undefined' ) {
          throw new Error( 'plugin must provide a name' );
        }
        if ( typeof this.plugins[ plugin.name ] !== 'undefined' ) {
          throw new Error( 'plugin with name ' + plugin.name
                           + ' already exists!' );
        }
        this.plugins[ plugin.name ] = plugin;
        return this.enablePlugin( plugin.name );
      },
      unloadPlugin: function( plugin ) {
        if ( this.plugins ) {
          var plugin = getPlugin( name );
          var name = plugin.name;
          delete this.plugins[ name ];
        }
        return this;
      },
      enablePlugin: function( name ) {
        var plugin = getPlugin( name );
        plugin.enabled = true;
        return applyPlugins( this );
      },
      disablePlugin: function( name ) {
        var plugin = getPlugin( name );
        plugin.enabled = false;
        return applyPlugins( this );
      }
    }
  };
  return out;
}

function getPlugin( name ) {
  return typeof name === 'string' ? this.plugins[ name ] : name;
}

function applyPlugins( scope ) {
  var plugins = scope.plugins;
  if ( !scope._originalMembers ) {
    // make a copy of original members;
    Object.keys( scope ).forEach( function( k ) {
      scope._originalMembers = scope[ k ];
    } );
  }
  // clear
  extend( scope, scope._originalMembers );

  Object
    .keys( plugins )
    .map( function( k ) {
      return plugins[ k ];
    } )
    .forEach( function( p ) {
      if ( p.enabled === true ) {
        if ( typeof p.members === 'object' ) {
          extend( scope, p.members );
        }
        if ( typeof p.enable === 'function' ) {
          p.enable.call( this );
        }
      } else {
        if ( typeof p.disable === 'function' ) {
          p.disable.call( this );
        }
      }
    } );
}

function omit( obj, keys ) {
  Array.isArray( keys ) || ( keys = [ keys ] );
  var mask = keys
    .reduce( function( obj, item ) {
      obj[ item ] = true;
      return obj;
    }, {} );

  return Object
    .keys( obj )
    .filter( function( k ) {
      return !mask[k];
    } )
    .reduce( function( ret, key ) {
      ret[ key ] = obj[ key ];
      return ret;
    }, {} );
}
