var Ajax = require ("./../Ajax");
var constants = require ("./constant")
var account = function () {
   return {
    login: function(email, password) {
      var requestData = {'email' : email, 'password': password};
      var options = { data : requestData, url : '/login'}
      Ajax (options, (data) =>{
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
      };
      var _this = this;
      Ajax (options, (data) =>{
        console.log(JSON.stringify(data));

        if(data.code == "000"){
         // window.location.hash = "/";
         _this.flux.actions.routes.transition('activateProfile',{"emailId":email});
          alert(data.success.text);
        }else{
          alert(data.error.text);
        }
        
      }, (data) =>{

        _this.dispatch(constants.ACCOUNT.SIGNUP, {
          
        });
    })
    },
    
    activate: function (email, otp){
      var requestData = {'email' : email, 'otp': otp};
      console.log (email, otp);
      var options = {
        data : requestData,
        url : '/activate_profile'
      };
      console.log(requestData)
      var _this = this;
      Ajax (options, (data) =>{
        console.log(JSON.stringify(data));

        if(data.code == "000"){
         // window.location.hash = "/";
         _this.flux.actions.routes.transition('home',{});
          alert(data.success.text);
        }else{
          alert(data.error.text);
        }
        
      }, (data) =>{

        _this.dispatch(constants.ACCOUNT.SIGNUP, {
          
        });
    })
    },

    forgetPasswordStep1 : function (email){
     // debugger;
     //$('#error_container').bs_alert(email);
     var _this = this;
     var requestData = {'email' : email};
       var options = {
          data : requestData,
          url : '/send_otp'
        }
        Ajax (options, (data) =>{
            console.log(JSON.stringify(data));

            if(data.code == "000"){
             // window.location.hash = "/";
              _this.flux.actions.routes.transition('forgetPassStep2',{"emailId":email})
              alert(data.success.text);
            }else{
              alert(data.error.text);
            }
            
          }, (data) =>{

           // _this.dispatch(constants.ACCOUNT.SIGNUP, {
              
            });
    },

    forgetPasswordStep2 : (token, newPass, email) => {
       var requestData = {'email' : email, 'password': newPass, 'otp':token};
       var options = {
          data : requestData,
          url : '/forgot_password'
        }
       console.log(requestData);

       var _this = this;
        Ajax (options, (data) =>{
            console.log(JSON.stringify(data));
            debugger;
            if(data.code == "000"){
                window.location.hash = "/";
              //_this.flux.actions.routes.transition('home',{});  cant say why its not working here
              alert(data.success.text);
            }else{
              alert(data.error.text);
            }
            
          }, (data) =>{

           // _this.dispatch(constants.ACCOUNT.SIGNUP, {
              
            });
      }
  }
}

  module.exports = account;