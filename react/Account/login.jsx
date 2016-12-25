var React = require("react");
var Fluxxor = require ("fluxxor");
var Router = require("react-router"),
    Link = Router.Link;


var Login =  React.createClass({
  mixins: [
    Fluxxor.FluxMixin(React),
    Fluxxor.StoreWatchMixin("app")
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
      <form onSubmit = {this.onSubmit}>
        <input type="text" placeholder="Username"  onChange = {this.setUserName} />
        <input type="text" placeholder="Password" onChange = {this.setPassword} />
        <button className="btn btn-positive btn-block">login </button>
        <Link to="signUp">go to sign up</Link>
      </form>
    );
  },

  _setUserName : function(e) {
    this.setState ({username : e.target.value})
  },

  _setPassword : function(e) {
    this.setState ({password : e.target.value})
  }
});


module.exports =  Login;