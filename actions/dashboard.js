var Ajax = require ("./../Ajax");
var constants = require ("./constant")

var dashboard  = function () {
	return {
		searchBook : function (bookName) {
                           this.dispatch(constants.DASHBOARD.BOOK,{"NOT_FOUND" : false,"SEARCHING" : true});
						   var requestData = { 
						   	                   'search' : bookName,
						                       'token': localStorage.getItem('token'),
						                       'email' : localStorage.getItem('email')
						                     };
					       var options = { data : requestData, url : '/search_book'}
					       Ajax (options, (data) =>{
						        if(data.code == "000"){
						          var obj = {}
						          if (data.hasOwnProperty('data')) {
						          	   obj =  $.extend({}, data.data, {"NOT_FOUND" : false,"SEARCHING" : false});
						          		
						          } else {
										obj =  $.extend({}, {"NOT_FOUND" : true,"SEARCHING" : false});
						          }
						          this.dispatch(constants.DASHBOARD.BOOK, {
										obj	
								  });
						        }else{
						          alert(data.error.text);
						        }      
					        }, (data) =>{

					      })
	    }
	}
	
}

module.exports = dashboard