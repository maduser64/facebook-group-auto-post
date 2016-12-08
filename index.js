//Lets require/import the HTTP module
var http = require('http');
var graph = require('fbgraph');
var access_token='EAACEdEose0cBAGAwahoQSl37dd2cIKbKx1yRCQPZBj1weWHC0qNLcYbBZClmjKB4ht77A9C4zxiXjbRhvPV18AlJtFZB7pMl2bHitAGXRwZBq5NDdC2M3tb8bd5NNdvZBbjQOlME3OLZCa1aQLFFZAX1gN75QeRLXol38xfweVHiQZDZD';
graph.setAccessToken(access_token);
//Lets define a port we want to listen to
const PORT=8081; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}


    // pass it in as part of the url
    graph.get("me?fields=id,name,email",function(err, res) {
        // returns the post id
        console.log(res); // { id: xxxxx}
    });

var wallpost={
	"message":"Here is a blog post about auto posting on Facebook using PHP @ Nazmul Islam",
	"message_tags": [
	    {
	      "id": "88388366982",
	      "name": "Público",
	      "type": "page",
	      "offset": 94,
	      "length": 7
	    }
	  ]
    };

    //POST post
    graph.post("731850373632043/feed",wallpost,function(err, res) {
        // returns the post id
        if(err) console.log(err);
        console.log(res); // { id: xxxxx}
    });

    // // EDIT POST
    // graph.post("731850373632043_732251223591958",wallpost,function(err, res) {
    //     // returns the post id
    //     if(err) console.log(err);
    //     console.log(res); // { id: xxxxx}
    // });

//     graph.batch([
//   {
//     method: "GET",
//     relative_url: "me" // Get the current user's profile information
//   },
//   {
//     method: "GET",
//     relative_url: "me/friends?limit=50" // Get the first 50 friends of the current user
//   }
// ], function(err, res) {
//   console.log(res);
// });
//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});