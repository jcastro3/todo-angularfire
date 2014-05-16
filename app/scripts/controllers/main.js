'use strict';

mytodo.controller('TodoCtrl', function TodoCtrl($scope, $firebase, $location) {
	var url = 'https://resplendent-fire-2473.firebaseio.com/';
    var ref = new Firebase(url);
	$scope.getTotal = function(){
		return $scope.todos.length;
	};

	$scope.removeTodo = function() {
		angular.forEach($scope.todos.$getIndex(), function (index) {
			if ($scope.todos[index].done === true) {
				$scope.todos.$remove(index);
			}
		});
	};
	$scope.addTodo = function(){
        if(!$scope.todoElem){
            return;
        }
        var data = {text:$scope.todoElem, done:false};
		$scope.todos.$add(data);
		$scope.formTodoText = "";
	};

	$scope.getTodo = function(pathurl){
		
		$location.path(pathurl);
		console.log(pathurl);
	};

    $scope.newTodoProyect = function(proyectName){

    }

    //This will bind the todos with the firebase database
	$scope.todos = $firebase(ref);
  });


