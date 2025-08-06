import {useState} from 'react';
import Input  from './Input';

function AddTask( {onAddTaskSubmit} ) {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">

            <Input type="text" placeholder={"Type the task title"} value={title} onChange={() => { setTitle(event.target.value)}} />

            <Input type="text" placeholder={"Type the task description"} value={description} onChange={() => { setDescription(event.target.value)}} />

            <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium" 
            onClick={() => {
                if (!title.trim() || !description.trim()) {
                    alert('You cant send empty values !');
                }
                onAddTaskSubmit(title, description)
                setTitle("")
                setDescription("")}}>
            Add
            </button>
        </div>
    )
}

export default AddTask