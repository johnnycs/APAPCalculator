

angular.module('JohnToDoApp2', ['TodoService', 'chart.js', 'nvd3'])
  .controller('appCtrl', function($scope, Todo) {
    // console.log('helloooooooo')
    // $scope.todos = [];
    // $scope.input = [];
    vm = $scope;

    vm.apap = null;
    vm.bdrawn = null;
    vm.tnac = null;
    vm.ti = null;
    vm.final_psi = 0;
    vm.apap_th = 45.0;
    vm.k3 = (Math.log(2))/4.0;

    vm.labelsCT = ["A", "B", "D", "E", "F", "G", "H"];
    vm.seriesCT = ['Series A'];
    vm.dataCT = [
        [90, 75, 65, 53, 45, 35, 30],
        []
    ];

    vm.labelsRisk = [1, 2, 3, 4, 5, 6, 7];
    vm.seriesRisk = ['Series B'];
    vm.dataRisk = [
        [100, 50, 25, 12.5, 6.25, 3, 1.5]
    ];


    vm.getPSI = function(apap,bdrawn,tnac,ti) {
      var apap_lvl = apap*(Math.pow(2,((bdrawn-4)/4.0)))
      // var k3 = (Math.log(2))/4.0;
      var double_apap = apap_lvl * 2.0;
      var tf = Math.log(double_apap/vm.apap_th)/vm.k3;

      var tff = (tnac - tf < 0 ? tnac : tf);

      var e_kts = Math.exp((-vm.k3*ti)) - Math.exp((-vm.k3*tff));
      var psi_left = (1.0/vm.k3) * double_apap * e_kts;
      var psi_right = (tff - ti)*vm.apap_th
      var psi = psi_left - psi_right

      vm.final_psi = psi;
    }

    // return apap_lvl * np.exp(-k3*(t-tnac))
    vm.graphPSI = function(apap,bdrawn,tnac,ti){
      var apap_lvl = apap*(Math.pow(2,((bdrawn-4)/4.0)))

      for(var hour=[],b=ti+24;b>=ti;hour[--b]=b+1);
      for(var threshold=[],b=hour.length;b>0;threshold[--b]=vm.apap_th);
      // console.log(threshold);

      var psi_val = function(t){
        return apap_lvl * Math.exp(-vm.k3*(t-tnac))/4.0;
      }

      vm.labelsCT = hour;
      vm.dataCT[0] = hour.map(psi_val);

      vm.dataCT[1] = threshold;



    }

    vm.data = []
    for(var i = 1; i <= Math.E; i += 0.01) {
      vm.data.push({x: i, y: Math.log(i)});
    }

    vm.data = [{
      key: 'y = log(x)',
      values: vm.data
    }];

    nv.addGraph(function() {
      var chart = nv.models.lineChart()
        .showLegend(false)
        .showYAxis(true)
        .showXAxis(true);

      chart.xAxis
        .axisLabel('x')
        .tickFormat(d3.format('.2f'));

      chart.yAxis
        .axisLabel('y')
        .tickFormat(d3.format('.2f'));

      d3.select('svg')
        .datum(vm.data)
        .call(chart);

      nv.utils.windowResize(function() {
        chart.update()
      });

      return chart;
    });

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
