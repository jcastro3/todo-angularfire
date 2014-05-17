'use strict';

mytodo.controller('TodoCtrl', function TodoCtrl($scope, $firebase, $location) {
    var url = 'https://resplendent-fire-2473.firebaseio.com/';
    var ref = new Firebase(url);
    
    ref.on('child_added', function(snapshot) {
        var newList = snapshot.newTodoProyect();
      });

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
        $scope.todoElem = '';
      };

    $scope.getTodo = function(pathurl){
      $location.path(pathurl);
    };

    $scope.newTodoProyect = function(proyectName){
        //once new repo is created show new list of items on the todolist
        url += proyectName;
        var ref = new Firebase(url);
        $scope.todos = $firebase(ref);
      };

    $scope.selectedProyect = function(selected){

    };
    //This will bind the todos with the firebase database
    $scope.todos = $firebase(ref);
  });


