import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
//import {signin} from "next-auth/react"
import {signIn,useSession} from "next-auth/react"

function SigninPages() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const {status}=useSession()

  useEffect(()=>{
    if(status==="authenticated") router.replace("/")

  })
  const signInHandler = async () => {
    
    const res = await signIn("credentials",{
        email,password,redirect:false
    })
  

    if (! res.error) router.push("/");
  };
  return (
    <div className=" flex justify-center  mt-24 ">
      <div className="p-8 rounded-2xl bg-white flex flex-col gap-8  items-center">
        <h2 className="font-bold">Login Form</h2>
        <input
          className="shadow rounded-md p-1"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="shadow rounded-md p-1"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="px-2 py-1 rounded-md bg-gray-300"
          onClick={signInHandler}
        >
          Login
        </button>
        <div>
          <p>
            Create An Account?
            <Link className="text-blue-700" href="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SigninPages;

