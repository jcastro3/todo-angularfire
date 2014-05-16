'use strict';

mytodo.controller('TodoCtrl', function TodoCtrl($scope, $firebase, $location) {
	var url = 'https://resplendent-fire-2473.firebaseio.com/';
    var ref = new Firebase(url);
	$scope.getTotal = function(){
		return $scope.todos.length;
	};

	$scope.removeTodo = function() {
		angular.forEach($scope.todos.$getIndex(), function (index) {
			if($scope.todos[index].done === true) {
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
		$scope.todoElem = "";
	};

	$scope.getTodo = function(pathurl){
		$location.path(pathurl);
	};

    $scope.newTodoProyect = function(proyectName){
        //connect to firebase and create new Repo for new TodoProyect
        //once new repo is created show new list of items on the todolist
        url += proyectName;
        var ref = new Firebase(url);
        $scope.todos = $firebase(ref);
    };
    //This will bind the todos with the firebase database
	$scope.todos = $firebase(ref);
  });


