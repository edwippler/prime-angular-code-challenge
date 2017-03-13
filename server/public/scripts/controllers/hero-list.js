app.controller('HeroListController', ['$http', function($http){
    console.log('Hero List Controller loaded');
    var self = this;

    self.herosList = [];

    $http({
      method: 'GET',
      url: '/heroes'
    }).then(function(response){
      // console.log(response.data);
      self.herosList = response.data;
    });

    
}]);
