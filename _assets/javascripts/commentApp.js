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

  app.factory("validateComment" , function(){
  	return function(obj){
  		var errs = [];
  		["username" , "comment"].forEach(function(key){
  			if(typeof obj[key] == "undefined"){
  				errs.push(key + " cannot be empty!");
  			}
  		});
  		if(typeof obj["username"] == "string" && obj["username"].length > 50){
  			errs.push("username must be less than or equal to 50 characters in length!");
  		}
  		return errs;
  	};
  });

  app.config(["$interpolateProvider" , function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
  }]);

  app.controller("commentCtrl" , ["$scope" , "Comments" , "validateComment" , function($scope , Comments , validateComment){
    (function(){
      $scope.newComment = Object.create(null);
    })();

    var nodeName = window.location.pathname.split("/").filter(function(x){
      return x != false
    }).join();

    $scope.comments = Comments(nodeName);

    $scope.submitComment = function(){
      if(typeof $scope.newComment == "undefined" || $scope.newComment == null){
        $scope.newComment = Object.create(null);
      }

      var obj = {};
      ["comment" , "username", "website"].forEach(function(prop){
        if (typeof $scope.newComment[prop] === "string" && $scope.newComment[prop].length !== 0) {
          obj[prop] = $scope.newComment[prop];
        }
      });
      obj.created_at = (new Date()).getTime();
      var errors = validateComment(obj);
      
      if(errors.length == 0){
      	$scope.comments.$add(obj);	
      }
      $scope.newComment.errors = errors;
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
