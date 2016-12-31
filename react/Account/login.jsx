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
      this.getFlux().actions.account.login ({'username' : this.state.username , 'password' : this.state.password});
  },

  render : function() {
    return (
      <div className="login-form">
         <h1>Humara Book Bank</h1>
         <div className="form-group ">
           <input type="text" className="form-control" placeholder="Email Id " id="emailId"  onChange = {this._setUserName} />
           <i className="fa fa-user"></i>
         </div>
         <div className="form-group log-status">
           <input type="password" className="form-control" placeholder="Password" id="passwod" onChange = {this._setPassword}  />
           <i className="fa fa-lock"></i>
         </div>
          <span className="alert">Invalid Credentials</span>
          <a className="link" href="#">Forgot your password?</a>
         <button type="button" className="log-btn" id="login" onClick = {this.onSubmit}>Log in</button>
         <button type="button" className="log-btn signup-btn" id="signUp" onClick={() => this.transitionTo('signUp')}>Sign In</button>     
      </div>
    );
  },

  _setUserName : function(e) {
    this.setState ({username : e.target.value})
  },

  _setPassword : function(e) {
    this.setState ({password : e.target.value})
  },
  _goToSignUp : function (e) {
    debugger;
  }
});


module.exports =  Login;