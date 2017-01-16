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
  	debugger;
  	var emailId = params.id;
     e.preventDefault ();
     this.getFlux().actions.account.forgetPassword (emailId, this.state.activationToken, this.state.password);
  },


  render : function() {
    return (
      <div className="login-form">
         <h1> Enter Registered Email-id</h1>
         <div className="form-group log-status emailId">
           <input type="text" className="form-control" placeholder="Activation Token"   onChange = {this._setToken} />
           <i className="fa fa-user"></i>
         </div>
         <div className="form-group log-status emailId">
           <input type="text" className="form-control" placeholder="New password"   onChange = {this._setPassword} />
           <i className="fa fa-user"></i>
         </div>
         <div className="form-group log-status emailId">
           <input type="text" className="form-control" placeholder="confirm new password"   onChange = {this._setConfirmPassword} />
           <i className="fa fa-user"></i>
         </div>
          <span className="alert"></span>
          <a className="link" href="#">back to login</a>
         <button type="button" className="log-btn"  onClick = {this.onSubmit}>Submit</button>
      </div>
    );
  },

  _setToken : function(e) {
   // $('.emailId').removeClass('wrong-entry');
    this.setState ({activationToken : e.target.value})
  },

  _setPassword : function(e) {
   // $('.emailId').removeClass('wrong-entry');
    this.setState ({password : e.target.value})
  },

  _setConfirmPassword : function(e) {
   // $('.emailId').removeClass('wrong-entry');
    this.setState ({cofirmPass : e.target.value})
  }
});


module.exports =  Step2;