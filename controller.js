angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.currentPage = 1;
  $scope.totalPages = 2;

  $scope.getUsers = function() {
  	var promise = mainService.getUsers($scope.currentPage)
                promise.then(function(response){
                  $scope.users = response.data.data;
                  $scope.totalPages = response.data.total_pages;
                })
  }


  $scope.getUsers();

});
