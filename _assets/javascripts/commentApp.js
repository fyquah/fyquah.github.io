(function(){
  // Dynamically inject dependencies in
  var app = angular.module("commentApp" , ["firebase"]);
  var FIREBASEURL = "https://fyquah95-blog.firebaseio.com/";

  app.factory("Comments" , ["$firebase", function($firebase){
    return function(postName){
      var ref = new Firebase(FIREBASEURL).child(postName);
      return $firebase(ref).$asArray();
    }
  }]);

  app.config(["$interpolateProvider" , function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
  }]);

  app.controller("commentCtrl" , ["$scope" , "Comments" , function($scope , Comments){
    var nodeName = window.location.pathname.split("/").filter(function(x){
      return x != false
    }).join();

    $scope.comments = Comments(nodeName);
    console.log($scope.comments);

    $scope.submitComment = function(){
      var username = $scope.newComment.username;
      var comment = $scope.newComment.comment;
      var website = $scope.newComment.website.length == 0 ? null : $scope.newComment.website;

      if(username.length == 0 || comment.length == 0){
        alert("Please enter a comment and/or username");
        return;
      }

      $scope.comments.$add({
        comment: comment,
        username: username,
        website: website,
        created_at: (new Date()).getTime()
      })
    }
  }]);

  app.filter("beautifulDateTime", function(){
    return function(timestamp){
      var d = null; 
      if(timestamp.constructor !== Date){
        d = new Date(timestamp);
      } else {
        d = timestamp;
      }
      var monthNames = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
      
      var year    = d.getFullYear();
      var month   = monthNames[d.getMonth()]; 
      var day     = d.getDate();
      var hour    = d.getHours();
      var minute  = d.getMinutes();
      var second  = d.getSeconds(); 
      var indicator = null;
      if(hour >= 12){
        indicator = "p.m.";
        hour %= 12;
      } else {
        indicator = "a.m.";
        if(hour == 0)
          hour = 12;
      }

      if(day.toString().length == 1) {
          var day = '0'+day;
      }   
      if(hour.toString().length == 1) {
          var hour = '0'+hour;
      }
      if(minute.toString().length == 1) {
          var minute = '0'+minute;
      }
      if(second.toString().length == 1) {
          var second = '0'+second;
      }
      return year+' '+month+' '+day+" "+hour+':'+minute+':'+second + " " + indicator;
    };
  });

})();
