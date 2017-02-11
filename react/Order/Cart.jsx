var React = require("react");
var Fluxxor = require ("fluxxor");
var Router = require("react-router"),
    Link = Router.Link,
    Navigation = Router.Navigation;


var Cart = React.createClass({
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
      cart : flux.store("app").cart
    };
  },
  getInitialState  :  function () {
      return  {
        'searchText' : ''
        
      }
  },

  onSubmit : function (e) {
    e.preventDefault ()
  },
  componentDidMount:function(){
 

  },
  render: function() {
    return (
               <ul>
                 {

                  this.state.cart.map(function (book){
                    return <li> {book.bookName} {book.price}</li>
                  })
                 }
               </ul>
                  
    );
  }
});


module.exports = Cart;