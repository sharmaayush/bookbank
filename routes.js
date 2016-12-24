
var React = require('react');
var Fluxxor = require("fluxxor");


import {Login} from "./react/index.jsx";
import { Router, Route, Link, browserHistory  } from 'react-router'





export default <Router history={browserHistory}>
    <Route path="/" component={Login}>
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>



class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Page Not Found.</h1>
        <p>Go to 
        <Link to="/">
         Home Page
         </Link></p>
      </div>
    )
  }
}