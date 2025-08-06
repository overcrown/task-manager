import { useSearchParams, useNavigate } from "react-router-dom"
import { ChevronLeft } from "lucide-react";

function TaskPage() {


    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const description = searchParams.get('description');
    const navigate = useNavigate();
    
    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[800px] space-y-4">
                <div className="flex justify-center relative mb-6">

                    <button className="absolute top-0 left-0 bottom-0 text-xl text-slate-200"
                     onClick={() =>{navigate(-1)}}>
                        <ChevronLeft/>
                    </button>
                    <h1 className="text-3xl text-slate-100 font-bold text-center mb-6" >Detalhes da Tarefa</h1>
                </div>

                <div className="bg-slate-200 rounded-md p-4">
                    <h2 className="text-slate-600 font-bold text-xl">{title}</h2>
                    <p className="text-slate-600">{description}</p>
                </div>
            </div>
        </div>
        
    ) 
}


export default TaskPage