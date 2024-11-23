import { Task, TaskStatus } from "./models/Task";
import { TaskService } from "./services/TaskService";

const taskService = new TaskService();

// Add tasks
taskService.addTask({
  id: 1,
  title: "Complete TypeScript Project",
  description: "Finish the TypeScript project covering all concepts.",
  category: "Programming",
  status: TaskStatus.Pending,
  dueDate: [2024, 11, 30],
});

taskService.addTask({
  id: 2,
  title: "Read TypeScript Docs",
  description: "Go through the official TypeScript documentation.",
  category: "Learning",
  status: TaskStatus.Pending,
  dueDate: [2024, 12, 5],
});

// Get all tasks
const tasks = taskService.getAllTasks();
console.log("All Tasks:", tasks);


const pendingTasks = taskService.getTasksByStatus(TaskStatus.Pending);
console.log("Pending Tasks:", pendingTasks);


taskService.markTaskCompleted(1);
console.log("Tasks after marking completed:", taskService.getAllTasks());


// to compile first then run
//npx tsc
//node dist/app.js
