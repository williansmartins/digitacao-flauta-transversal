var app = angular.module('app', []);

app.controller('Controller1', function($scope, $http){
    $scope.digitacoes = [];

    $http.get('modelo.json').then(function(response){
        $scope.digitacoes = response.data.digitacoes;
    });
});