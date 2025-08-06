import { ChevronRightIcon, Trash } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Button from './Button';


function Tasks({ tasks, onTasksClick, onDeleteTaskClick}) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {

        const query = new URLSearchParams(); // Safer way to pass parameters, it checks for any wrong caracter at the params and sets it
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }

    return(
        //map() function renders each element from a object/list

        // The son component receives every value through the props parameter, including the onTasksClick function
        <ul className="space-y-4 bg-slate-200 p-6 rounded-md shadow">{tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
                
                
                <button onClick={(() => {onTasksClick(task.id)})} 
                className={`bg-slate-400 w-full text-left text-white p-2 rounded-md 
                ${task.completed && 'line-through'} `}>{task.title}
                </button>

                <Button onClick={() => {onSeeDetailsClick(task)}}> <ChevronRightIcon/> </Button>
                <Button onClick={(() => {onDeleteTaskClick(task.id)})}> <Trash/> </Button>


            </li>
            ))}

        </ul>

    )
    
}

export default Tasks