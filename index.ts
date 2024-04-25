#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string[] = [];
let conditions = true;

//Print a Welcome Message 
console.log(chalk.bold.yellow("\n\t\t -Welcome to Code With Urooj Ahmed -Todo-List- \t\t\n"));


let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.bgBlueBright("\n Select an option you to do: \n"),
                choices: ["Add Task", "Delete Task" , "Update Task " , "View Todo-List" , "Exit"],
            }
        ]);
        if(option.choice === "Add Task"){
            await addTask()
        }
        else if(option.choice === "Delete Task"){
            await deleteTask()
        }
        else if(option.choice  === "Update Task "){
            await updateTask()
         }
        else if(option.choice === "View Todo-List"){
            await viewTask()
        }
        else if(option.choice === "Exit"){
            conditions = false;
        }
    }
}
// Function to New Task
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.bgBlue("Enter your new Task : ")
        }
    ]);
    todoList.push(newTask.task);
    console.log(chalk.bgBlueBright(`\n ${newTask.task} Task added successfuly in your Todo-List.\n`));
}

//Function to view all Todo_List task
let viewTask = () => {
    console.log(chalk.bgBlue("\n View Your Todo-List :\n"));
    todoList.forEach((task, index) => {
        console.log(`${index + 1} : ${task}`)
    });
}
 
// Function to Delete Task
let deleteTask = async () => {
    await viewTask ()
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.bgYellow("\nplease Enter the 'index no .' of the task you want delete from Todo-List:")}
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(chalk.bgMagenta(`\n ${deletedTask} this task has been deleted from your Todo-List.\n`));
 }

 //Function to Update Task
 let updateTask = async () =>{
    await viewTask()
    let  update_task_index = await inquirer.prompt([
        {
            name:"index",
            type: "number",
            message: chalk.bgYellow("\n Please Enter the 'index no.' of the task you want update your todo-list :")
        },
        {
            name: "new_task",
            type: "input",
            message: chalk.bgGreenBright("\n Kindly Type your new task name: "),
        }
]);
    todoList[update_task_index.index - 1] = update_task_index.new_task
    console.log(chalk.bgYellow(`\n Task at index no. ${update_task_index.index - 1} updated successfuly [For updated list Check option : "view Todo_List"] `))

     }


main();