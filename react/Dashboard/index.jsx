var React = require("react");
var Router = require("react-router"),
    Link = Router.Link,
    Navigation = Router.Navigation;


var Dashboard = React.createClass({

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
    return (
	<div id="page">
        <div className="main-content">
          <nav id="menu" className="nav-header">
            <section style={{height: '100%'}} className="menu-section">
              <ul className="list-unstyled main-menu menu-section-list">
                <li className="menu_logo--container"><img className="img-responsive" src="images/logo.png" alt="Ulink Logo" />
                </li>
                <li className="home_logout_row">
                  <a className="home_nav" href="javascript:void(0)"><span className="glyphicon glyphicon-home home_icon" aria-hidden="true" /><span>Home</span></a>
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
                      <div id="nav-expander" className="nav_icon_button header_left_side pull-left">
                        <button type="button" className="navbar-toggle nav-expander pull-left"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" />
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
            <section className="content_container">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xs-12">
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Dashboard;