var React = require("react");
var Fluxxor = require ("fluxxor");
var Router = require("react-router"),
    Link = Router.Link,
    Navigation = Router.Navigation;


var Dashboard = React.createClass({
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
      "book" : flux.store("app").book
    };
  },
  getInitialState  :  function () {
      return  {
        'searchText' : ''
        
      }
  },

  onSubmit : function (e) {
    e.preventDefault ()
    this.getFlux ().actions.dashboard.searchBook (this.state.searchText)
  },
  addtocart : function (book) {
       this.getFlux ().actions.cart.update(book)
  },
  goToOrder : function () {
    this.getFlux ().actions.routes.transition("order", {})
  },
  componentDidMount:function(){
      	 $('#nav-expander').on('click',function(e){
            $(".head_right_nav").hide();
            $('input, select').on('focus', function(){
                console.log('focus is called.');
                //PhonegapApi.isFocus = true;
                });
              e.preventDefault();
              var body = $('body');
                body.toggleClass('nav-expanded');
              });
              $('#nav-close').on('touchend',function(e){
                e.preventDefault();
                $('body').removeClass('nav-expanded');
          });

      },
render: function() {
    var book = this.state.book
    var NOT_FOUND = this.state.book.NOT_FOUND
    var _this = this
    return (

                    <div id="page">
                      <div className="main-content">
                        <nav className="nav-header" id="menu">
                          <section className="menu-section" style={{height: '100%'}}>
                            <ul className="list-unstyled main-menu menu-section-list">
                              <li className="menu_logo--container"><img alt="Ulink Logo" src="images/logo.png" className="img-responsive" />
                              </li>
                              <li className="home_logout_row">
                                <a href="javascript:void(0)" className="home_nav"><span aria-hidden="true" className="glyphicon glyphicon-home home_icon" /><span>Home</span></a>
                                <a href="javascript:void(0)" onClick = {this.goToOrder} className="home_nav"><span aria-hidden="true" className="glyphicon glyphicon-home home_icon" /><span>Order</span></a>
                              </li>
                            </ul>
                          </section>
                        </nav>
                        <div className="wrapper">
                          <div className="header-fixed-top">
                            <header className="header">
                              <div className="container-fluid">
                                <div className="row">
                                  <div className="col-xs-12">
                                    <div className="nav_icon_button header_left_side pull-left" id="nav-expander">
                                      <button className="navbar-toggle nav-expander pull-left" type="button"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" />
                                      </button>
                                    </div>
                                    <div className="header_title header_mid">
                                      <h1>Dashboard</h1>
                                    </div>
                                    <div className="header_right_side pull-right">
                                    </div>
                                  </div>
                                </div>
                              </div></header>
                          </div>
                          <div id="mask" />
                          <div className="content-container">
                            <div className="row">
                              <h2>Enter your Book Name</h2>
                              <div>
                                <input type="text" className="search-query form-control" placeholder="Search"  onChange ={this._setSearchText} />
                              </div>
                              <div className="btn-bottom clrFloat">
                                <button type="button" className="log-btn" onClick = {this.onSubmit}>Search</button>
                              </div>
                            </div>
                            <div className="search_section">
                              <ul className="search_section_ul"> 
                             { 
                               book.book.map(function (book, i){
                                  return <SearchResult addtocart = {_this.addtocart} book ={book} />                                
                               })
                              }
                              {NOT_FOUND ? 
                                <li className="search_section_li">
                                  <span className="fLeft left">Not found</span>
                                  <div className="clrFloat">Try other book</div>
                                </li>
                                : ""
                              }
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
    );
  },

  _setSearchText : function (e) {
    this.setState ({
      "searchText" : e.target.value
    })
  }
});


var SearchResult =  React.createClass({
  addcart : function () {
              this.props.addtocart (this.props.book)
  },
  render : function () {
    return (
                               <li className="search_section_li">
                                  <span className="fLeft left">{this.props.book.bookName}</span>
                                  <span className="fRight right" onClick = {this.addcart}>
                                     <i className="fa fa-cart-plus" aria-hidden="true" />
                                  </span>
                                  <div className="clrFloat">{this.props.book.description}</div>
                                </li>
    )
  }
})

module.exports = Dashboard;