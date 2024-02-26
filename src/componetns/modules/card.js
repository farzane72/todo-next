import { useRouter } from "next/router";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";

function Card(props) {
  const { task, next, back, todos, setTodos } = props;
  const { title, status, _id } = task;
  console.log("cart",_id);
  //console.log(title, status, next, _id);
  const router = useRouter();
  const backHandler = async () => {
    const res = await fetch("/api/todos", {
      method: "PATCH",
      body: JSON.stringify({ _id, status: back }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") {
      router.reload();
    }
  };
  const nextHandler = async () => {
    const res = await fetch("/api/todos", {
      method: "PATCH",
      body: JSON.stringify({ _id, status: next }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") {
      router.reload();
      //reload or
      // await setTodos(()=> todos.map((task)=>{
      //     task._id===_id?{...task,status:next}:task

      // }))
      // console.log(todos);
    }
  };
  const editHandler=async()=>{
    
    router.push(`/edit/${_id}`)
    if(data.status==="success") router.reload()

  }
  const deleteHandler=async()=>{
    const res=await fetch(`/api/todos/${_id}`,{
      method:"DELETE"
    })
    const data=res.json()

    
  }

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div
        className={`w-1/2 h-[5px] rounded-md mb-8
                 ${
                   status === "todo"
                     ? "bg-orange-500"
                     : status === "review"
                     ? "bg-blue-500"
                     : status === "done"
                     ? "bg-cyan-500"
                     : "bg-green-500"
                 } `}
      ></div>
      <div className="flex justify-between items-center">
        <p className="">{title}</p>
        <div className="flex gap-2 ">
          <button onClick={editHandler}>
            <FaEdit />
          </button>
          <button onClick={deleteHandler}>
            <RiDeleteBin7Fill />
          </button>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        {back ? (
          <button
            className="p-1 bg-orange-500 rounded-md"
            onClick={backHandler}
          >
            Back
          </button>
        ) : (
          ""
        )}
        {next ? (
          <button className="p-1 bg-blue-500 rounded-md" onClick={nextHandler}>
            Next
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Card;
