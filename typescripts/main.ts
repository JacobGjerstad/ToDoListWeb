/**
 * Represents a single task on a todo list
 */
class ToDoItem{
    title:string;
    deadline:Date;
    isCompleted:boolean;

    constructor(task:string){
        this.title = task;
    }
}