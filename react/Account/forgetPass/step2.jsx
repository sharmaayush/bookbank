var React = require("react");
var Fluxxor = require ("fluxxor");
var Router = require("react-router"),
    Link = Router.Link,
    Navigation = Router.Navigation;


var Step2 =  React.createClass({
    mixins: [
    Fluxxor.FluxMixin(React),
    Fluxxor.StoreWatchMixin("app"),
    Fluxxor.StoreWatchMixin("route"),
    Navigation
  ],

  contextTypes: {
    router: React.PropTypes.func.isRequired  
  },
  getStateFromFlux: function() {
    
    return {
    };
  },

  getInitialState  :  function () {
      return  {
        'activationToken' : '',
        'password' : '',
        'cofirmPass'   : ''
        }
  },

  onSubmit : function (e) {
  	var params = this.context.router.getCurrentParams();
  	var emailId = params.emailId;
     e.preventDefault ();
     if(!this.state.activationToken){
       this.error('activation', "Activation Code is mandatory");
        return false;
      }
    if(!this.state.password){
       this.error('password', "Password is mandatory");
        return false;
      }
      
    if(!this.state.cofirmPass){
       this.error('confirmPassword', "confirm Password is mandatory");
        return false;
      }
     if(this.state.password != this.state.cofirmPass){
       this.error('confirmPassword', "Password do not match");
        return false;
      }  
     this.getFlux().actions.account.forgetPasswordStep2 (this.state.activationToken, this.state.password, emailId);
  },

error: function(id, message){
    $('.' + id).addClass('wrong-entry');
     $('.alert').text(message);
     $('.alert').fadeIn(500);
     setTimeout( "$('.alert').fadeOut(1500);",3000 );
  },

  render : function() {
    return (
      <div className="login-form">
         <h1 className="headerH2">Forgot Password</h1>
         <p> Enter Activation code sent on your Email id</p>
         <div className="form-group log-status activation">
           <input type="text" className="form-control" placeholder="Activation Token"   onChange = {this._setToken} />
           <i className="fa fa-user"></i>
         </div>
         <div className="form-group log-status password">
           <input type="password" className="form-control" placeholder="New password"   onChange = {this._setPassword} />
           <i className="fa fa-user"></i>
         </div>
         <div className="form-group log-status confirmPassword">
           <input type="password" className="form-control" placeholder="confirm new password"   onChange = {this._setConfirmPassword} />
           <i className="fa fa-user"></i>
         </div>
          <span className="alert"></span>
          <a className="link" href="#">back to login</a>
         <button type="button" className="log-btn"  onClick = {this.onSubmit}>Submit</button>
      </div>
    );
  },

  _setToken : function(e) {
    $('.activation').removeClass('wrong-entry');
    this.setState ({activationToken : e.target.value})
  },

  _setPassword : function(e) {
    $('.password').removeClass('wrong-entry');
    this.setState ({password : e.target.value})
  },

  _setConfirmPassword : function(e) {
    $('.confirmPassword').removeClass('wrong-entry');
    this.setState ({cofirmPass : e.target.value})
  }
});


module.exports =  Step2;