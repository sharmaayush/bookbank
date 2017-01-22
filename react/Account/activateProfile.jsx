var React = require("react");
var Fluxxor = require ("fluxxor");
var Router = require("react-router"),
    Link = Router.Link,
    Navigation = Router.Navigation;


var ActivateProfile =  React.createClass({
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
        'email' : ''
      }
  },

  onSubmit : function (e) {
     e.preventDefault ();
      if(!this.state.email){
       // this.error('emailId', "EmailId is mandatory");
        return false;
      }
      var params = this.context.router.getCurrentParams();
      var emailId = params.emailId;
      
      this.getFlux().actions.account.activate (emailId, this.state.email);
  },


  render : function() {
    return (
      <div className="login-form">
         <h1> Enter activation Token</h1>
         <div className="form-group log-status emailId">
           <input type="text" className="form-control" placeholder="activation token"   onChange = {this._setEmail} />
           <i className="fa fa-user"></i>
         </div>

          <span className="alert"></span>
          <a className="link" href="#">Forgot your password?</a>
         <button type="button" className="log-btn"  onClick = {this.onSubmit}>Activate</button>
      </div>
    );
  },

  _setEmail : function(e) {
   // $('.emailId').removeClass('wrong-entry');
    this.setState ({email : e.target.value})
  }
});


module.exports =  ActivateProfile;