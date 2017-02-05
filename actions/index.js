
var constants = require ("./constant")
var account =  require ("./account")
var dashboard =  require ("./dashboard")
var methods = {
  account : account(),
  dashboard : dashboard(),
  routes: {
    transition: function(path, query) {
      this.dispatch(constants.ROUTE.TRANSITION, {path: path, query: query});
    }
  }
};

module.exports = {
  methods,
  constants
};