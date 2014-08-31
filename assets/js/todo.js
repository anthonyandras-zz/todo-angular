// may i present to you the first application in pro angular.
// create a ghetto model for now - we'll revisit this later.
var model = {
user: "Anthony",
items: [
     {action: "Feed Dotty", done: true},
     {action: "Get Shoes", done: false},
     {action: "Sell Fish Tank", done: false},
     {action: "Finish Thinkful Angular Class", done: false},
     {action: "Play Fallout 3", done: false}
]
};
// name of app, dependencies, which are often admited by accident
var todoApp = angular.module("todoApp", new Array());

// create a custom filter to allow the user to determine if
// they want to see done items or not.
todoApp.filter("checkedItems", function() {
  return function (items, showComplete) {
    var results = new Array();
    angular.forEach(items, function(item) {
      if (item.done == false || showComplete == true) {
      	results.push(item);
      }
    });
    return results;
  };
});

//create a controller for our application
todoApp.controller("ToDoCtrl", function($scope){
  $scope.todo = model;

  $scope.incompleteCount = function() {
    var count = 0;
    angular.forEach($scope.todo.items, function(item) {
      if(!item.done) { count++ }
    });
    return count;
  };

  // will determine bootstrap-css style of item count 
  // based on the number of incomplete items.
  $scope.warningLevel = function() {
    return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
  };

  // add a new menu item 
  // TODO - refactor me to use local storage instead of this ghetto model
  $scope.addNewItem = function(actionText) {
    $scope.todo.items.push({action: actionText, done: false});
    // clear out the input box after item has been added.
    $scope.actionText = "";
  };
});	
