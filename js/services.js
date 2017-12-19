var servicesApp = angular.module("servicesApp", []);

servicesApp.controller("ServicesController", function ServicesController($scope, $location, $http, $timeout, $interval, swapChar){
  //location services
  $scope.location = $location.absUrl();

  //http services
  $http.get("welcome.html").then(function (response) {
    $scope.myWelcome = response.data;
    var myEl = angular.element( document.querySelector( '#response' ) );
    // alert(myEl);
    myEl.html($scope.myWelcome);
  });

  //timeout
  $interval(function () {
    $scope.myHeader = "Hello World!";
    $timeout(function () {
        $scope.myHeader = "This text is changing using timeout and interval service.";
    }, 2000);
    $timeout(function () {
        $scope.myHeader = "Did you notice the change in text?";
    }, 5000);
  }, 6000);

  //interval services
  $scope.myTime = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.myTime = new Date().toLocaleTimeString();
  }, 1000);

  //custom services
  $scope.swappedWord = swapChar.swapChar("master");
});


servicesApp.service("swapChar", function($interval) {
  this.tempWord = "";
  this.swapChar = function(word) {
    var length = word.length;
    for(var i = 0; i < length; i++) {
      if (i < (length - 1)) {
        this.tempWord += word[i + 1];
      }
      else {
        this.tempWord += word[0];
      }
    }
    return this.tempWord;
  }
});
