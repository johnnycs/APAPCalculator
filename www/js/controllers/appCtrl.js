

angular.module('JohnToDoApp2', ['TodoService', 'chart.js'])
  .controller('appCtrl', function($scope, Todo) {
    // console.log('helloooooooo')
    // $scope.todos = [];
    // $scope.input = [];
    $scope.apap = null;
    $scope.bdrawn = null;
    $scope.tnac = null;
    $scope.ti = null;
    $scope.final_psi = 0;

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

    $scope.getPSI = function(apap,bdrawn,tnac,ti) {
      var apap_th = 45.0;
      var apap_lvl = apap*(Math.pow(2,((bdrawn-4)/4.0)))
      var k3 = (Math.log(2))/4.0;
      var double_apap = apap_lvl * 2.0;
      var tf = Math.log(double_apap/apap_th)/k3;

      var tff = (tnac - tf < 0 ? tnac : tf);

      var e_kts = Math.exp((-k3*ti)) - Math.exp((-k3*tff));
      var psi_left = (1.0/k3) * double_apap * e_kts;
      var psi_right = (tff - ti)*apap_th
      var psi = psi_left - psi_right

      $scope.final_psi = psi;
    }



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
