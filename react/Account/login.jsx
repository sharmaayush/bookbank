var React = require("react");
export class Login extends React.Component {
  
  constructor() {
    super();
    this. _setPassword = this. _setPassword.bind(this);
    this. _setUserName = this. _setUserName.bind(this);
    this. onSubmit = this.onSubmit.bind(this);
    this.state = {'username' : "", 'password' : "" }
  }

  onSubmit (e) {
     e.preventDefault ();
     this.props.login ({'username' : this.state.username , 'password' : this.state.password});
  }

  render() {
    return (
      <form onSubmit = {this.onSubmit}>
        <input type="text" placeholder="Username"  onChange = {this.setUserName} />
        <input type="text" placeholder="Password" onChange = {this.setPassword} />
        <button className="btn btn-positive btn-block">Choose existing</button>
      </form>
    );
  }

  _setUserName (e) {
    this.setState ({username : e.target.value})
  }

  _setPassword (e) {
    this.setState ({password : e.target.value})
  }
}