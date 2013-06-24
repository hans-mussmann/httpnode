// Requirements
var http = require("http");
var url = require("url");
 
// HTTP Server.
var server = http.createServer(function( request, response ){
  var _query = url.parse(request.url, true).query;
  if(_query){
    for(i in _query){
      // Query string key/val pairs
      _keys[i] = i;
      _vals[i] = _query[i];
    }
    response.writeHead( 200, {"content-type": "text/plain"} );
    response.write('Page loaded');
    response.end();
  }else{
    response.writeHead( 404, {"content-type": "text/plain"} );
    response.write('Resource could not be found!');
    response.end();
  }
});
 
// Start HTTP Server on Port 8080.
server.listen(8080);
