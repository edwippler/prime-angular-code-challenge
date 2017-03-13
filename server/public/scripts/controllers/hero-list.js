app.controller('HeroListController', ['$http', function($http){
    console.log('Hero List Controller loaded');
    var self = this;

    self.herosList = [];

    getHeroes();

    function getHeroes() {
    $http({
      method: 'GET',
      url: '/heroes'
    }).then(function(response){
      // console.log(response.data);
      self.herosList = response.data;
    });
  }

    self.dropHero = function(heroID){
      console.log(heroID, 'was clicked');
    $http({
      method: 'DELETE',
      url: '/heroes/' + heroID
    }).then(function(response){
      getHeroes();
    });
}
  self.updateHero = function(heroID, hero){
    $http({
      method: 'PUT',
      url: '/heroes/' + heroID,
      data: hero
    }).then(function(response){
      getHeroes();
    });
  }

}]);
