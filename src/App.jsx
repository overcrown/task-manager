import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import {v4} from 'uuid';



function App() {

    // At the APP, we creates the useStates and the functions who interacts with useState objects
    
    // Our state data is stored at browser memory
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));
    

    function onTasksClick(taskId)  {
        const newTasks = tasks.map((task) => {
            if (task.id == taskId) {
                return {...task, completed: !task.completed } // Changes the value of completed to the opposite
            }

            return task;
        });

        setTasks(newTasks);
    }


    function onDeleteTaskClick(taskId) {
        const newTasks = tasks.filter((task) => task.id != taskId);
        setTasks(newTasks);
    };

    function onAddTaskSubmit(title, description) {
        const newTask = {
            id: v4(), //v4() provides a random ID
            title: title,
            description: description,
            completed: false
        }

        // ...tasks - pass every item at object
        setTasks([ ...tasks, newTask]);
    }


    useEffect(() => 
        {
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }, 
    [tasks]);

    // useEffect with empty list means will be executed once the user access the page
    useEffect(() => {

        const getPosts = async () =>  {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5", {method: "GET"});
            
            const data = await response.json();
            console.log(data);

            setTasks(data)
        };

        //console.log(JSON.parse(localStorage.getItem('tasks')).length);

        // If there's no task, add a default one
        if (JSON.parse(localStorage.getItem('tasks')).length === 0) {

            // Doing this to initialize a session to each user with a default task
            const firstTask = {
                id: v4(), //v4() provides a random ID
                title: "Hello Word",
                description: "First task",
                completed: false
            }
    
            setTasks([ ...tasks, firstTask]);

        }

        //getPosts();

    }, []);

    return(
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <h1 className="text-3xl text-slate-100 font-bold text-center" >Gerenciador de Tarefas</h1>
                <AddTask onAddTaskSubmit={onAddTaskSubmit} />
                <Tasks tasks={tasks} onTasksClick={onTasksClick} onDeleteTaskClick={onDeleteTaskClick}/>
                

            </div>

        </div>
        
    );
}

export default App