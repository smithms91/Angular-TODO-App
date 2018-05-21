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

    vm.addItem = (newTask) => {
      vm.newTask.completed = false;
      vm.objects.push(vm.newTask);
      vm.newTask = {};
    }

    vm.editItem = (index, item) => {
      vm.allowEdit = true;
      vm.tempItem = {
        task: item.task,
        completed: item.completed
      };
      vm.tempIndex = index;
    }

    vm.updateItem = (index, item) => {
      vm.objects.splice(index, 1, {
        task: item.task,
        completed: item.completed
      });
      vm.allowEdit = false;
    }

    vm.nowComplete = (index) => {
      vm.objects[index].completed = true;
    }

}




angular.module("todoApp").controller("TodoController", TodoController);