var React = require("react"),
    Router = require("react-router"),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;


var App =  require ("./react");

var EmptyView = React.createClass({
  render: function() {
    return <RouteHandler {...this.props} />;
  }
});


/*
export default <Router history={browserHistory}>
    <Route path="/" component={Login}>
      <Route path="*" component={PageNotFound} />
    </Route>
    ForgetPassStep2
  </Router>*/ 

var routes = (
  <Route handler={EmptyView} name="home" path="/">
     <Route handler={App.SignUp} name="signUp" path="signUp" />
     <Route handler={App.ActivateProfile} name="activateProfile" path="activateProfile/:emailId" />
     <Route handler={App.ForgetPassStep1} name="forgetPassStep1" path="forgetPassStep1" />
     <Route handler={App.ForgetPassStep2} name="forgetPassStep2" path="forgetPassStep2/:emailId" />

     <DefaultRoute handler={App.Login} />
     <Route handler={App.Dashboard} name="dashboard" path="dashboard">
     </Route>  
  </Route>
);

/*
  <Route handler={RecipeAdder} name="add-recipe" path="/recipe/add" />

    <Route handler={EmptyView} path="/recipe/:id">
      <Route handler={RecipeEditor} name="edit-recipe" path="edit" />
      <DefaultRoute handler={Recipe} name="recipe" />
    </Route>
*/
/*var routes = (
  <Route path="/" component={Login}>
      <Route path="*" component={PageNotFound} />
  </Route>
);
*/



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


module.exports = routes;