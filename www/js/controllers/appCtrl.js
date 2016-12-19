

angular.module('JohnToDoApp2', ['TodoService', 'chart.js'])
  .controller('appCtrl', function($scope, Todo) {
    console.log('helloooooooo')
    // $scope.todos = [];
    // $scope.input = [];

    $scope.labelsCT = ["A", "B", "D", "E", "F", "G", "H"];
    $scope.seriesCT = ['Series A'];
    $scope.dataCT = [
        [90, 75, 65, 53, 45, 35, 30]
    ];

    $scope.labelsRisk = [1, 2, 3, 4, 5, 6, 7];
    $scope.seriesRisk = ['Series B'];
    $scope.dataRisk = [
        [100, 50, 25, 12.5, 6.25, 3, 1.5]
    ];


    // function getAllTodos() {
    //   Todo.getTodos()
    //   .then(function(result) {
    //     $scope.todos = result.data.data;
    //   });
    // }

    // $scope.addTodo = function(){
    //   Todo.addTodo($scope.input)
    //   .then(function(result) {
    //     $scope.input = {};
    //     getAllTodos();
    //   });
    // }

    // $scope.deleteTodo = function(id){
    //   Todo.deleteTodo(id)
    //   .then(function(result) {
    //     getAllTodos();
    //   });
    // }

    // getAllTodos();

  })

