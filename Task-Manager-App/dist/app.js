"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = require("./models/Task");
const TaskService_1 = require("./services/TaskService");
const taskService = new TaskService_1.TaskService();
// Add tasks
taskService.addTask({
    id: 1,
    title: "Complete TypeScript Project",
    description: "Finish the TypeScript project covering all concepts.",
    category: "Programming",
    status: Task_1.TaskStatus.Pending,
    dueDate: [2024, 11, 30],
});
taskService.addTask({
    id: 2,
    title: "Read TypeScript Docs",
    description: "Go through the official TypeScript documentation.",
    category: "Learning",
    status: Task_1.TaskStatus.Pending,
    dueDate: [2024, 12, 5],
});
// Get all tasks
const tasks = taskService.getAllTasks();
console.log("All Tasks:", tasks);
const pendingTasks = taskService.getTasksByStatus(Task_1.TaskStatus.Pending);
console.log("Pending Tasks:", pendingTasks);
taskService.markTaskCompleted(1);
console.log("Tasks after marking completed:", taskService.getAllTasks());
