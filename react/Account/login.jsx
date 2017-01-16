var React = require("react");
var Fluxxor = require ("fluxxor");
var Router = require("react-router"),
    Link = Router.Link,
    Navigation = Router.Navigation;


var Login =  React.createClass({
  mixins: [
    Fluxxor.FluxMixin(React),
    Fluxxor.StoreWatchMixin("app"),
    Navigation
  ],

  contextTypes: {
    router: React.PropTypes.func
  },
  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
    };
  },

  getInitialState  :  function () {
      return  {
        'username' : '',
        'password' : ''
      }
  },

  onSubmit : function (e) {
     e.preventDefault ();
      if(!this.state.username){
        this.error('emailId', "EmailId is mandatory");
        return false;
      }
      if(!this.state.password){
        this.error('password' , "Password is mandatory");
        return false;
      }
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
      if(!this.state.username.match(re)){
        this.error('emailId' , "Invalid email Id");
        return false;
      }
      this.getFlux().actions.account.login (this.state.username , this.state.password);
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
         <h1>Humara Book Bank</h1>
         <div className="form-group log-status emailId">
           <input type="email" className="form-control" placeholder="Email Id " id="emailId"  onChange = {this._setUserName} />
           <i className="fa fa-user"></i>
         </div>
         <div className="form-group log-status password">
           <input type="password" className="form-control" placeholder="Password" id="passwod" onChange = {this._setPassword}  />
           <i className="fa fa-lock"></i>
         </div>
          <span className="alert"></span>
          <Link className="link" to="forgetPassStep1">Forgot your password?</Link>
         <button type="button" className="log-btn" id="login" onClick = {this.onSubmit}>Log in</button>
         <button type="button" className="log-btn signup-btn" id="signUp" onClick={() => this.transitionTo('signUp')}>Sign In</button>     
      </div>
    );
  },

  _setUserName : function(e) {
    $('.emailId').removeClass('wrong-entry');
    this.setState ({username : e.target.value})
  },

  _setPassword : function(e) {
    $('.password').removeClass('wrong-entry');
    this.setState ({password : e.target.value})
  },
  _goToSignUp : function (e) {
    debugger;
  }
});


module.exports =  Login;