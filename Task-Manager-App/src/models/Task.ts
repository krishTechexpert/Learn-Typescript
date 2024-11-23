export enum TaskStatus  {
  Pending = 'PENDING',
  Completed = 'COMPLETED'
}

export type Task = {
  id:number;                // Unique identifier
  title:string,             // Task title
  description:string,       // Task details
  category:string,          // Task category
  status:TaskStatus,   // Task status (enum)
  dueDate:[number,number,number]  // Tuple: [year, month, day]
}