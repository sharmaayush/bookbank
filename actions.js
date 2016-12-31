var Ajax = require ("./Ajax");
var constants = {
  ACCOUNT: {
    LOGIN: "ACCOUNT:LOGIN",
    SIGNUP: "ACCOUNT:SIGNUP",
    REMOVE: "RECIPE:REMOVE"
  },

  ROUTE: {
    TRANSITION: "ROUTE:TRANSITION"
  }
};

var methods = {
  account: {
    login: function(username, password) {
      console.log(username);
      var requestData = {'username' : username, 'password': password};
      var options = {
        data : requestData,
        url : '/login'
      }
      Ajax (options, (data) =>{
        console.log(data);
        window.location.hash = "dashboard"
      }, (data) =>{

      })
      this.dispatch(constants.ACCOUNT.LOGIN, {
        name: username
      });
    },

    signUp: function(id, name, desc, ingredients, directions) {
      this.dispatch(constants.ACCOUNT.SIGNUP, {
        id: id,
        name: name,
        description: desc,
        ingredients: ingredients,
        directions: directions
      });
    }
  },

  routes: {
    transition: function(path, params) {
      this.dispatch(constants.ROUTE.TRANSITION, {path: path, params: params});
    }
  }
};

module.exports = {
  methods: methods,
  constants: constants
};