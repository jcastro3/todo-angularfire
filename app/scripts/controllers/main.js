'use strict';

mytodo.controller('TodoCtrl', function TodoCtrl($scope, $firebase, $location) {
    var ref = new Firebase('https://resplendent-fire-2473.firebaseio.com/todos');
    $scope.projects = [];
    $scope.projectListView = function() {
        ref.on('child_added', function (snapshot) {
            var project = snapshot.name();
            $scope.projects.push({title:project});
        });
    };

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

    $scope.newTodoProject = function(projectName){
        //once new repo is created show new list of items on the todolist
        var link = new Firebase('https://resplendent-fire-2473.firebaseio.com/todos/' + projectName);
        $scope.todos = $firebase(link);
    };

    $scope.selectProject = function(selected){

    };
    //This will bind the todos with the firebase database
    $scope.todos = $firebase(ref);
  });


