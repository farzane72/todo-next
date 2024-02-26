import EditPage from "@/componetns/templates/EditPage"
import { useEffect ,useState} from "react"
import { useRouter,isReady } from "next/router"

function index() {

    const [data,setData]=useState(null)
    const router=useRouter()
    const {query:{todoId},isReady}=router

    const fetchData=async()=>{

        const res=await fetch(`/api/todos/${todoId}`)
        const data=await res.json()
        console.log(data);
        if(data.status==="success") setData(data.data)
    
      }
      useEffect(()=>{
        if(isReady){
            fetchData()
        }
      },[isReady])

    return (
        <>
        {
            data ?<EditPage data={data} />:<div className="flex justify-start items-center">Is Loading...</div>
        }
        </>
        
    )
}

export default index
