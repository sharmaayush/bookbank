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
    login: function(email, password) {
      var requestData = {'email' : email, 'password': password};
      var options = {
        data : requestData,
        url : '/login'
      }
      Ajax (options, (data) =>{
        console.log(JSON.stringify(data));
        if(data.code == "000"){
          window.location.hash = "dashboard";
        }else{
          alert(data.error.text);
        }
        
      }, (data) =>{

      })
      this.dispatch(constants.ACCOUNT.LOGIN, {
        //name: username
      });
    },

    signUp: function(email, password, phone) {

    var requestData = {'email' : email, 'password': password, 'phone':phone};
      var options = {
        data : requestData,
        url : '/signup'
      }
      Ajax (options, (data) =>{
        console.log(JSON.stringify(data));

        if(data.code == "000"){
          window.location.hash = "/";
          alert(data.success.text);
        }else{
          alert(data.error.text);
        }
        
      }, (data) =>{

      })

      this.dispatch(constants.ACCOUNT.SIGNUP, {
        
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