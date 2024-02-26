import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function SignupPages() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const {status}=useSession()

  useEffect(()=>{
    if(status==="authenticated") router.replace("/")

  })

  const signUpHandler = async () => {
    
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);

    if (data.status === "success") router.push("/signin");
  };
  return (
    <div className=" flex justify-center  mt-24 ">
      <div className="p-8 rounded-2xl bg-white flex flex-col gap-8  items-center">
        <h2 className="font-bold">Registration Form</h2>
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
          onClick={signUpHandler}
        >
          Register
        </button>
        <div>
          <p>
            Have an account?
            <Link className="text-blue-700" href="/signin">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPages;
