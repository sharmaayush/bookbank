var React = require("react"),
    Router = require("react-router"),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute;

import {Login} from "./react/index.jsx";
var Fluxxor = require ('fluxxor');

var actions = require("./actions");
var routes = require("./routes.js");
var
    AppStore = require("./stores/app_store"),
    RouteStore = require("./stores/route_store.jsx");



// using an ES6 transpiler, like babel


var router = Router.create({routes: routes});

var stores = {
  app: new AppStore(),
  route: new RouteStore({router: routes})
};

var flux = new Fluxxor.Flux(stores, actions.methods);

flux.on("dispatch", function(type, payload) {
  console.log("Dispatch:", type, payload);
});



router.run(function(Handler) {
  React.render(
    <Handler flux={flux} />,
    document.getElementById("container")
  );
});
