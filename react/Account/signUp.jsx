var React = require("react");
var Fluxxor = require ("fluxxor");
var Router = require("react-router"),
    Link = Router.Link,
    Navigation = Router.Navigation;


var SignUp = React.createClass({
  mixins: [
    Fluxxor.FluxMixin(React),
    Fluxxor.StoreWatchMixin("app"),
    Navigation
  ],


  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
    };
  },

  getInitialState  :  function () {
    return  {
      'username' : '',
      'phone': '',
      'password' : '',
      'confirmPassword':''
    }
  },

  onSubmit : function (e) {
     e.preventDefault ();
      if(!this.state.username){
        this.error('emailId', "EmailId is mandatory");
        return false;
      }
      if(!this.state.phone){
        this.error('phone' , "Mobile number is mandatory");
        return false;
      }
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
      if(!this.state.username.match(re)){
        this.error('emailId' , "Invalid email Id");
        return false;
      }

    if(!this.state.password || !this.state.confirmPassword){
        this.error('password' , "Password is mandatory");
        return false;
      }
     if(!this.state.confirmPassword){
        this.error('confirmPassword' , "Password is mandatory");
        return false;
      }  

    if(this.state.password != this.state.confirmPassword){
      this.error('password' , "Password do not match");
      return false;
      }  

      this.getFlux().actions.account.signUp(this.state.username , this.state.password, this.state.phone);
  },

error: function(id, message){
    $('.' + id).addClass('wrong-entry');
     $('.alert').text(message);
     $('.alert').fadeIn(500);
     setTimeout( "$('.alert').fadeOut(1500);",3000 );
  },

  render: function() {
    return (

      <div className="login-form">
        <h1>Sign Up</h1>
        <strong className="back-btn">Back</strong>
        <div className="form-group log-status emailId">
          <input type="text" className="form-control" placeholder="Email Id " id="emailId" onChange = {this._setUserName}/>
          <i className="fa fa-user" />
        </div>
        <div className="form-group log-status phone">
          <input type="password" className="form-control" placeholder="Mobile Number" id="phone" onChange = {this._setphone}/>
          <i className="fa fa fa-mobile" />
        </div>
        <div className="form-group log-status password">
          <input type="password" className="form-control" placeholder="password" id="password" onChange = {this._setPassword}/>
          <i className="fa fa-lock" />
        </div>
        <div className="form-group log-status confirmPassword" >
          <input type="password" className="form-control" placeholder="Confirm password" id="confirmPassword" onChange = {this._setConfirmPassword}/>
          <i className="fa fa-lock" />
        </div>
        <span className="alert"></span>
        <button type="button" className="log-btn signup-btn" id="confirm" onClick = {this.onSubmit}>Confirm</button>
      </div>
    );
  },

   _setUserName : function(e) {
    $('.emailId').removeClass('wrong-entry');
    this.setState ({username : e.target.value})
  },

  _setphone : function(e) {
    $('.phone').removeClass('wrong-entry');
    this.setState ({phone : e.target.value})
  },

   _setPassword : function(e) {
    $('.password, .confirmPassword').removeClass('wrong-entry');
    this.setState ({password : e.target.value})
  },

   _setConfirmPassword : function(e) {
    $('.password, .confirmPassword').removeClass('wrong-entry');
    this.setState ({confirmPassword : e.target.value})
  }


});

module.exports = SignUp;