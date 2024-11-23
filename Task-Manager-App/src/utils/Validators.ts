import { Task, TaskStatus } from "../models/Task";

// Type Guard: Check if an object is a Task ( Runtime type checking	)


/**
 * Type guard to check if an object is a Task.
 * @param obj - The object to check.
 * @returns `true` if the object is a Task, otherwise `false`.
 */


export function isTask(obj:any): obj is Task{
  return (obj &&  
          typeof obj.id === 'number' &&
          typeof obj.title === "string" &&
          typeof obj.description === "string" &&
          typeof obj.category === "string" 
        //  && Object.values(TaskStatus).includes(obj.status)

      )
}
