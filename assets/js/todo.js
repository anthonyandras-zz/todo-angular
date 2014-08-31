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
//create a controller for our application
todoApp.controller("ToDoCtrl", function($scope){
$scope.todo = model;
});	
