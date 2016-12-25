var Fluxxor = require("fluxxor");

var actions = require("../actions");

var NOT_FOUND_TOKEN = {};

var AppStore = Fluxxor.createStore({
  initialize: function() {
    this.userId = 0;

    this.bindActions(
      actions.constants.ACCOUNT.LOGIN, this.handleLogin,
      actions.constants.ACCOUNT.SIGNUP, this.handleSignUp,
      actions.constants.ACCOUNT.REMOVE, this.handleRemoveRecipe
    );
  },

  handleLogin: function(payload) {
    console.log(payload);
  },

  handleSignUp: function(id) {
    return this.recipes[id] || NOT_FOUND_TOKEN;
  },

  handleRemoveRecipe: function(id) {
    delete this.recipes[id];
    this.emit("change");
  }
});

AppStore.NOT_FOUND_TOKEN = NOT_FOUND_TOKEN;

module.exports = AppStore;