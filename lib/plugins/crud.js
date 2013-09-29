
var Backbone = require( 'backbone' );
var extend = require( 'extend' );

module.exports = exports = function( options ) {
  options || ( options = {} );
  var BaseCollection = options.BaseCollection || Backbone.Collection;
  var routes = options.routes;

  var plugin = {
    post: {
      instanceMembers: {
        initialize: function() {
          this.routes || ( this.routes = {} );
          extend(
            this.routes,
            routes
              .map( function( r ) {
                return r.path;
              } )
              .reduce( function( obj, p ) {
                if ( !obj[ p ] ) {
                  createRoute( this, p );
                }
              }, {} )
          );
        }
      }
    },

    instanceMembers: {
      startBatch: function( operations ) {

      },
      executeBatch: function() {

      },
      addObject: function( obj ) {
        var path = getObjectPath( obj );
        if ( !obj.uuid ) {
          obj = this.createObject( obj );
        }
        return this.routes[ path ].add( obj );
      },
      removeObject: function( obj ) {
        var path = getObjectPath( obj );
        return this.routes[ path ].remove( obj );
      },
      updateObject: function( obj ) {
        var path = getObjectPath( obj );
        var model = this.routes[ path ].get( obj );
        return model.set( obj );
      },
      resetRoute: function( route ) {

      },
      getObject: function() {

      }
    }
  };
  return plugin;

  function createRoute( scope, p ) {
    var col = new BaseCollection();
    col.on( 'add', function( model ) {
      scope.trigger( p + ':add', model );
    } );
    col.on( 'remove', function( model ) {
      scope.trigger( p + ':remove', model );
    } );
    col.on( 'change', function( model ) {
      scope.trigger( p + ':change', model );
    } );
    col.on( 'reset', function( model ) {
      scope.trigger( p + ':reset', model );
    } );
    scope.routes[ p ] = col;
  }

  function getObjectPath( obj ) {
    var path;
    if ( typeof obj.getPath === 'function' ) {
      path = obj.getPath();
    } else {
      path = obj.path || obj._path ||
        obj.constructor.path || obj.constructor._path;
    }
    return path;
  }
};
