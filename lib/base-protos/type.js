
module.exports = exports = {
  instanceMembers: {
    getType: function() {
      return this.constructor.type;
    }
  },
  classMembers: {
    getType: function() {
      return this.type;
    }
  }
};
