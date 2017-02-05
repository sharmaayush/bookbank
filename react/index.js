//var Login =  require ("./Account/login.jsx");
//var SignUp =  require ("./Account/signUp.jsx");
//var ActivateProfile = require ("./Account/activateProfile.jsx");
var Dashboard =  require ("./Dashboard");
var Account = require ("./Account")

module.exports = {
	                "Login" : Account.Login ,
	                "SignUp": Account.SignUp,
	                "Dashboard" : Dashboard.Dashboard ,
	                "ActivateProfile" : Account.ActivateProfile,
	                "ForgetPassStep1" : Account.ForgetPassStep1,
	                "ForgetPassStep2" : Account.ForgetPassStep2
	              }

