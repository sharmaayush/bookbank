var Fluxxor = require("fluxxor");

var actions = require("../actions");

var NOT_FOUND_TOKEN = {};
var storeData =  require ('./data')
var AppStore = Fluxxor.createStore({
  initialize: function() {
    console.log(storeData)
    this.userId = 0;
    this.book = storeData.book,
    this.bindActions(
      actions.constants.ACCOUNT.LOGIN, this.handleLogin,
      actions.constants.ACCOUNT.SIGNUP, this.handleSignUp,
      actions.constants.DASHBOARD.BOOK,  this.handleBookData
    );
  },

  handleLogin: function(payload) {
    console.log(payload);
  },

  handleSignUp: function() {
    //return this.recipes[id] || NOT_FOUND_TOKEN;
  },

  handleBookData: function(payload) {
    this.book = $.extend(this.book,  payload.obj)
    console.log(payload)
    this.emit("change");
  }
});

AppStore.NOT_FOUND_TOKEN = NOT_FOUND_TOKEN;

module.exports = AppStore;