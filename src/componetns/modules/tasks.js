import Card from "./card"
function Tasks(props) {
    const {todos,next,back,setTodos} =props
    console.log("card");
    console.log(todos);
    return (
        <div className="bg-white p-4 flex flex-col gap-2">
             
             {
                todos?.map((task)=> <Card  key={task._id} task={task} next={next} back={back} todos={todos} setTodos={setTodos} />
                )
            } 
          
            
        </div>
    )
}

export default Tasks
