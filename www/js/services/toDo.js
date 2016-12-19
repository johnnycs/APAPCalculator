
angular.module('TodoService', [])
  .service('Todo', function($http, Backand) {
    var baseUrl = '/1/objects/';
    var objectName = 'todos/';

    function getUrl() {
      return Backand.getApiUrl() + baseUrl + objectName;
    }

    function getUrlForId(id) {
      return getUrl() + id;
    }

    getTodos = function() {
      return $http.get(getUrl());
    }

    addTodo = function(todo) {
      return $http.post(getUrl(), todo);
    }

    deleteTodo = function(id) {
      return $http.delete(getUrlForId(id));
    }

    return {
      getTodos: getTodos,
      addTodo: addTodo,
      deleteTodo: deleteTodo
    }
  })