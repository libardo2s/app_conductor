app.controller('GremioCtrl',function($scope, $rootScope,ConductorService,$ionicLoading,$window){
    $ionicLoading.show();
    $scope.listaConductores = [];
    
    $scope.$on('$ionicView.enter',function(){
        ConductorService.getAll($window.localStorage['idGremio']).then(
            function(respuesta){
                $scope.listaConductores = respuesta.data;
                $ionicLoading.hide();
            },function(error){
                console.log(error);
                $ionicLoading.hide();
            }
        );
    });
})
