// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('JohnToDoApp', ['ionic', 'backand', 'TodoService','JohnToDoApp2', 'chart.js'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function (BackandProvider) {
  BackandProvider.setAppName('johnnytodo');
  BackandProvider.setAnonymousToken('9521cca9-9edf-4625-a165-90320cd53ecf');
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app',{
      url: '/app',
      templateUrl: 'views/app.html',
      controller: 'appCtrl'
    })

  $urlRouterProvider.otherwise('/app')
})

// .controller('AppCtrl', function($scope, TodoService, $ionicModal) {
//   $scope.todos = [];
//   $scope.input = [];
//   $scope.idToEdit = 0;

//   $ionicModal.fromTemplateUrl('views/modal.html', {
//     scope: $scope
//   }).then(function(modal) {
//     $scope.modal = modal;
//   });

//   $scope.taskEdit = function(id) {
//     $scope.idToEdit = id;
//   }

//   function getAllTodos() {
//     TodoService.getTodos()
//     .then(function(result) {
//       $scope.todos = result.data.data;
//     });
//   }

//   $scope.addTodo = function(){
//     TodoService.addTodo($scope.input)
//     .then(function(result) {
//       $scope.input = {};
//       getAllTodos();
//     });
//   }

//   $scope.editTodo = function() {
//     console.log($scope.input, $scope.idToEdit)
//     TodoService.editTodo($scope.idToEdit, $scope.input)
//     .then(function(result) {
//       getAllTodos();
//     })
//     $scope.modal.hide();
//     $scope.idToEdit = 0;
//   }

//   $scope.deleteTodo = function(id){
//     TodoService.deleteTodo(id)
//     .then(function(result) {
//       getAllTodos();
//     });
//   }

//   getAllTodos();
// })

// .service('TodoService', function($http, Backand) {
//   var baseUrl = '/1/objects/';
//   var objectName = 'todos/';

//   function getUrl() {
//     return Backand.getApiUrl() + baseUrl + objectName;
//   }

//   function getUrlForId(id) {
//     return getUrl() + id;
//   }

//   getTodos = function() {
//     return $http.get(getUrl());
//   }

//   addTodo = function(todo) {
//     console.log(todo)
//     return $http.post(getUrl(), todo);
//   }

//   // /1/objects/{name}/{id}
//   editTodo = function(id, todo, returnObject) {
//     console.log(id,todo.newtask)
//     // return $http.put(Backand.getApiUrl() + baseUrl + objectName + id)
//       return $http({
//           method: 'PUT',
//           url : getUrl() + todo.newtask + "/" + id,
//           params: {
//             deep: true,
//             overwrite: true
//           }
//       })
//   }

//   deleteTodo = function(id) {
//     console.log(getUrlForId(id))
//     return $http.delete(getUrlForId(id));
//   }

//   return {
//     getTodos: getTodos,
//     addTodo: addTodo,
//     editTodo: editTodo,
//     deleteTodo: deleteTodo
//   }
// })










