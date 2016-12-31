var Ajax = function(options, onSuccess, onError){
    var domain = 'http://67.128.69.51/';

    var url = domain+options.url;
    var requestData = options.data;
    var apiTimeout = 20000;

    
        setTimeout(function(){
        		return onSuccess (options.data)
           }, 1000); 
        
       /* $.ajax({
          url: url,
          type: 'POST',
          contentType: 'application/json',
          crossDomain: true,
          timeout: apiTimeout,
          beforeSend: function(xhr) {
        
          },
         // xhrFields: {
          //  withCredentials: true
          //},
          cache: false,
          dataType: 'json',
          data: JSON.stringify(requestData),
          success: function(responseData,  textStatus, errorThrown){
            return onSuccess (responseData,  textStatus, errorThrown)
            
          },
          error:function(jqXHR, textStatus, errorThrown) {
            return onError (jqXHR, textStatus, errorThrown);
          },
          complete: function(){
           setTimeout(function(){
              //$('#loading').hide();
           }, 1000); 
          }
        }); */
}
  
module.exports = Ajax;