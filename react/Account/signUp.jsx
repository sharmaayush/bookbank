var React = require("react");
var Router = require("react-router"),
    Link = Router.Link;
export class SignUp extends React.Component {
  
  constructor() {
    super();
  }

  onSubmit (e) {
     e.preventDefault ();
     this.props.login ({'username' : this.state.username , 'password' : this.state.password});
  }

  render() {
    return (
      <form onSubmit = {this.onSubmit}>
       SIgn Up
      </form>
    );
  }
}