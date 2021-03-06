var React = require("react");
var Fluxxor = require ("fluxxor");
var Router = require("react-router"),
    Link = Router.Link,
    Navigation = Router.Navigation;


var Step1 =  React.createClass({
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
       this.error('emailId', "EmailId is mandatory");
        return false;
      }
      //this.context.router.transitionTo("forgetPassStep2", {emailId: this.state.email});

      this.getFlux().actions.account.forgetPasswordStep1 (this.state.email);
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
         <h2 className="headerH2">Forgot Password</h2>
         <p>Enter your registered Email Id</p>
         <div className="form-group log-status emailId">
           <input type="text" className="form-control" placeholder="Email-id"   onChange = {this._setEmail} />
           <i className="fa fa-user"></i>
         </div>

          <span className="alert"></span>
          <a className="link" href="#">Back to login </a>
         <button type="button" className="log-btn"  onClick = {this.onSubmit}>Submit</button>
      </div>
    );
  },

  _setEmail : function(e) {
    $('.emailId').removeClass('wrong-entry');
    this.setState ({email : e.target.value})
  }
});


module.exports =  Step1;