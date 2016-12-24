var ReactDOM = require('react-dom');
var React = require('react');
var Router = require("react-router");

import {Login} from "./react/index.jsx";
var Fluxxor = require ('fluxxor');

var actions = require("./actions");
import routes from './routes';
var
    RecipeStore = require("./stores/app_store"),
    RouteStore = require("./stores/route_store.jsx");



// using an ES6 transpiler, like babel


var router = Router.create({routes: routes});

var stores = {
  app: new RecipeStore(),
  route: new RouteStore({router: router})
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
