import { useState,useEffect } from "react"
import Tasks from "../modules/tasks"
function HomePage() {

    const[todos,setTodos]=useState([])
    const fetchTodos=async()=>{
      const res=await fetch("/api/todos")
      const data=await res.json()
      console.log(data);
      if(data.status==="success") 
      setTodos(data.data)
    }
    useEffect(()=>{
      fetchTodos()
  
    },[])
    console.log(todos);
    console.log(todos.todo);

    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            <div className="">
                <div className="bg-orange-500 rounded-t-md p-1">
                    <p className="text-bold text-center">Todo</p>
                    
                </div>
                {
                    todos.todo?
                    <Tasks todos={todos.todo} next="inProgress" setTodos={setTodos} />
                    :""
                }
                

            </div>
            <div className="">
                <div className="bg-green-500 rounded-t-md p-1">
                    <p className="text-bold text-center">In Progress</p>
                   
                </div>
                {
                     todos.inProgress?
                     <Tasks todos={todos.inProgress} next="review" back="todo" setTodos={setTodos} />
                     :""
                }
               

            </div>
            <div className="">
                <div className="bg-blue-500 rounded-t-md p-1">
                    <p className="text-bold text-center">Review</p>
                   
                </div>
                {
                    todos.review?
                    <Tasks todos={todos.review} next="done" back="inProgress" setTodos={setTodos}    />
                    :""
                }
                
            </div>
            <div className="">
                <div className="bg-cyan-500 rounded-t-md p-1">
                    <p className="text-bold text-center">Done</p>
                   
                </div>
                {
                    todos.done?
                    <Tasks todos={todos.done} back="review" setTodos={setTodos} />
                    :""

                }
                

            </div>
            
        </div>
    )
}

export default HomePage
