import {Task,TaskStatus} from "../models/Task";

export class TaskService {
  private tasks:Task[]=[];

  addTask(task:Task):void{
    this.tasks.push(task)
  }
  // if you want to validate task obj suppose it is coming from API then we can used isTask() validator
    /**
   * Adds a new task to the list after validating it.
   * @param task - The task to add.
   */

  // addTask(task: any): void {
  //   if (isTask(task)) {
  //     this.tasks.push(task);
  //     console.log(`Task with ID ${task.id} added.`);
  //   } else {
  //     console.error("Invalid task object. Task was not added.");
  //   }
  // }


  getAllTasks():Task[]{
    return this.tasks;
  }
  getTasksByStatus(status:TaskStatus):Task[]{
    return this.tasks.filter(task => task.status === status)
  }
  markTaskCompleted(taskId:number):boolean{
    const task =  this.tasks.find(task => task.id === taskId);
    if(task) {
      task.status= TaskStatus.Completed;
      return true
    }
    else {
      return false
    }
  }
}