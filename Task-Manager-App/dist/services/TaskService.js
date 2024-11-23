"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const Task_1 = require("../models/Task");
class TaskService {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    getAllTasks() {
        return this.tasks;
    }
    getTasksByStatus(status) {
        return this.tasks.filter(task => task.status === status);
    }
    markTaskCompleted(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.status = Task_1.TaskStatus.Completed;
            return true;
        }
        else {
            return false;
        }
    }
}
exports.TaskService = TaskService;
