"use strict";


function TodoController() {
    const vm = this;
    vm.objects = [
    { task: "Vaccuum the grass", completed: true},
    { task: "Clean the house", completed: false},
    { task: "Do the dishes", completed: true},
    { task: "Run a marathon", completed: false},
    { task: "Become President", completed: false}
];

    vm.removeItem = (index) => {
        vm.objects.splice(index, 1);
    }

    vm.addItem = (ctrl) => {
        vm.objects.push(ctrl.do);
        ctrl.do = [];
    }

    vm.nowComplete = (index) => {
        vm.objects[index].completed = true;
    }

}




angular
    .module("todoApp")
    .controller("TodoController", TodoController);