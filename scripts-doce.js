var app = angular.module('app', []);

app.controller('Controller1', function($scope, $http){
    $scope.grupos = [];

    $http.get('modelo-doce.json').then(function(response){
        $scope.grupos = response.data.grupos;
    });
});

