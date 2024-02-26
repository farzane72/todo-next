import Link from "next/link";
import {VscListSelection} from "react-icons/vsc"
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";


function Aside() {
  
  return (
    <div className="p-4  rounded-tr-2xl bg-white -mt-8 ">
      <h1  className="text-lg my-4 font-bold">Welcome</h1>
      <ul className="">
        <li className="flex gap-1 items-center   my-4">
          <VscListSelection className="text-gray-700" />
          <Link  className="text-gray-700" href="/">Todos</Link>
        </li>
        <li className="flex gap-1 items-center   my-4">
          <BiMessageSquareAdd className="text-gray-700" />
          <Link  className="text-gray-700" href="/add-todo">Add Todo</Link>
        </li>
        <li className="flex gap-1 items-center   my-4">
          <RxDashboard className="text-gray-700" />
          <Link  className="text-gray-700" href="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  )
}

export default Aside
