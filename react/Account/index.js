var Login =  require ("./login.jsx");
var SignUp =  require ("./signUp.jsx");
var ActivateProfile = require ("./activateProfile.jsx");
var forgetPass = require ("./forgetPass");


module.exports = {
	                Login ,
	                SignUp ,
	                ActivateProfile,
	                "ForgetPassStep1" : forgetPass.ForgetPassStep1,
	                "ForgetPassStep2" : forgetPass.ForgetPassStep2
	              }