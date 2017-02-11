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
        'activationToken' : ''
      }
  },

  onSubmit : function (e) {
     e.preventDefault ();
      if(!this.state.activationToken){
        this.error('activation', "Activation Code is mandatory");
        return false;
      }
      var params = this.context.router.getCurrentParams();
      var emailId = params.emailId;
      
      this.getFlux().actions.account.activate (emailId, this.state.activationToken);
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
         <h1 className="headerH2"> Activate Profile</h1>
         <p> Enter Activation code sent on your Email id</p>
         <div className="form-group log-status activation">
           <input type="text" className="form-control" placeholder="Activation Token"   onChange = {this._setToken} />
           <i className="fa fa-user"></i>
         </div>

          <span className="alert"></span>
          <a className="link" href="#">Forgot your password?</a>
         <button type="button" className="log-btn"  onClick = {this.onSubmit}>Activate</button>
      </div>
    );
  },

  _setToken : function(e) {
    $('.activation').removeClass('wrong-entry');
    this.setState ({activationToken : e.target.value})
  }
});


module.exports =  ActivateProfile;