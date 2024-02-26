import { signOut, useSession } from "next-auth/react";
import Aside from "../modules/aside";
import { FiLogOut } from "react-icons/fi";

function Layout({ children }) {
const {status}=useSession()
const logOutHandler=()=>{
  signOut()
}

  return (
    <div>
      <header className="bg-blue-500 h-[100px]">
        
        <p className="p-4 text-2xl text-slate-200">To DO App</p>
        {
          (status==="authenticate")?
          <button className="flex gap-1" onClick={logOutHandler}>
              Logout 
             <FiLogOut />
          </button>
          :""
        }
        
      </header>
      <div className="flex flex-row min-h-screen">
        <div className=" basis-1/6">
          <Aside />
        </div>
        <main className="bg-gray-100  basis-5/6 min-h-screen">{children}</main>
      </div>

      
    </div>
  )
}

export default Layout
