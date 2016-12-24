var c = {
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
      this.dispatch(c.ACCOUNT.LOGIN, {
        name: name,
        description: desc,
        ingredients: ingredients,
        directions: directions,
        preventTransition: preventTransition
      });
    },

    signUp: function(id, name, desc, ingredients, directions) {
      this.dispatch(c.ACCOUNT.SIGNUP, {
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
      this.dispatch(c.ROUTE.TRANSITION, {path: path, params: params});
    }
  }
};

module.exports = {
  methods: methods,
  constants: c
};