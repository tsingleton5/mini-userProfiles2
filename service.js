angular.module('userProfiles').service('mainService', function($http) {

  this.getUsers = function(pageNum) {
      var promise = $http({
          method: 'GET',
          url: 'http://reqres.in/api/users?page=' + pageNum
      })

      return promise;
  };


});
