app.controller('AddHeroController', ['$http', function($http){
  console.log('add hero controller loaded');
  var self = this;
  self.newHero = {};

  self.addHero = function(){
    console.log(self.newHero);
    $http({
      method: 'POST',
      url: '/heroes',
      data: self.newHero
    }).then(function(response){
      self.newHero = {};
    });
  }
}]);
