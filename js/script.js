/*<!--/01100101 01100100 01110011 01101111 01101110-->*/
var pokemon= angular.module("pokemon",[])

pokemon.controller("listadopokemon", function ($scope,$rootScope,$http){
	$scope.listado = [];

	for(var i = 1; i < 800; i++){

		$http({
			method: "GET",
			url: "https://pokeapi.co/api/v2/pokemon/"+i

		}).then(function Sucess(y){
			$scope.listado.push(y);
		})
	}
})