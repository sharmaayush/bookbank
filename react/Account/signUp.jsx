var React = require("react");
var Router = require("react-router"),
    Link = Router.Link,
    Navigation = Router.Navigation;


var SignUp = React.createClass({
  render: function() {
    return (

      <div className="login-form">
        <h1>Sign Up</h1>
        <div className="form-group ">
          <input type="text" className="form-control" placeholder="Email Id " id="emailId" />
          <i className="fa fa-user" />
        </div>
        <div className="form-group mobile">
          <input type="password" className="form-control" placeholder="Mobile Number" id="mobile" />
          <i className="fa fa fa-mobile" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="password" id="password" />
          <i className="fa fa-lock" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Confirm password" id="confirmPassword" />
          <i className="fa fa-lock" />
        </div>
        <span className="alert">Invalid Credentials</span>
        <button type="button" className="log-btn signup-btn" id="confirm">Confirm</button>
      </div>
    );
  }
});

module.exports = SignUp;