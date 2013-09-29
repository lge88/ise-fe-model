
module.exports = exports = {
  instanceMembers: {
    getPath: function() {
      return this.constructor.path;
    }
  },
  classMembers: {
    getPath: function() {
      return this.path;
    }
  }
};
