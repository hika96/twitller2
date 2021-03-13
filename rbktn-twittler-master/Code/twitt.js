function two(){
    add(); 
    
    display() 
   }
     function display() {
    
   var $body = $('#tweets');
   $body.html('');

   var index = streams.home.length - 1;
   var i = streams.home.length - 1;
   while (index >= i -10 ) {
     var tweet = streams.home[index];
     var $tweet = $('<div></div>');
     $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' +tweet.created_at)
     $tweet.appendTo($body);
     index -= 1;
   }
     
   }
 
 $(document).ready(display);
 function add() {
   var writeTweet = function(message){
       var visitor = 'new';
 // 
 var tweet = {};
 tweet.user = 'karamsaadaoui';
 tweet.message = message;
 tweet.created_at = new Date();
 addTweet(tweet);
};
writeTweet('hi again guys')
};