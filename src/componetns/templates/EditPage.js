import { GrAddCircle } from "react-icons/gr";
import { BsAlignStart } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import RadioButton from "../elements/RadioButton";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditPage(props) {
  const {data}=props
 console.log(data);
  const [title, setTitle] = useState(data.title || "");
  const [status, setStatus] = useState(data.status || "todo");
 const router=useRouter()
  

  const editHandler=async(id)=>{
  console.log(title,status);
    const res=await fetch(`/api/todos/${id}`,{
      method: "PATCH",
      body: JSON.stringify({ title, status ,id}),
      headers: { "Content-Type": "application/json" },
    })
    const data=await res.json()
    if(data.status==="success"){
      router.push("/")
      toast.success("Todo edited!")
    }
  }
  

  return (
    <div className="p-4 ">
      <div className="flex gap-2 items-center">
        <FaEdit />
        <h2>Edit Todo</h2>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <div className="">
          <p>Title:</p>

          <input
            className=" p-1 shadow rounded-md w-[400px] "
           // placeholder="new todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        

       

        <div className="bg-orange-500 rounded-md w-[150px] p-2 text-white flex  justify-between">
         <RadioButton title="todo" status={status} setStatus={setStatus}>
          <BsAlignStart />
         </RadioButton>
        </div>


        <div className="bg-green-500 rounded-md w-[150px] p-2 text-white flex  justify-between">
         <RadioButton title="inProgress" status={status} setStatus={setStatus}>
          <FiSettings />
         </RadioButton>
        </div>

        

        <div className="bg-blue-500 rounded-md w-[150px] p-2 text-white flex  justify-between">
         <RadioButton title="review" status={status} setStatus={setStatus}>
          <AiOutlineFileSearch />
         </RadioButton>
        </div>

        <div className="bg-cyan-500 rounded-md w-[150px] p-2 text-white flex  justify-between">
         <RadioButton title="done" status={status} setStatus={setStatus}>
          <MdDoneAll />
         </RadioButton>
        </div>

        <button className="bg-gray-400 p-1 rounded-md w-10"
        onClick={()=>editHandler(data._id)}> Edit</button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default EditPage;
