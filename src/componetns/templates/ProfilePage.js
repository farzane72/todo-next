import { useEffect, useState } from "react";
import ProfileData from "../modules/ProfileData";
import ProfileForm from "../modules/ProfileForm";

function ProfilePage() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  const submitHandler = async() => {
    const res=await fetch("/api/profile",{
        method:"POST",
        body: JSON.stringify({ name,lastName,password }),
        headers: { "Content-Type": "application/json" },
    })
    const data=await res.json()
    console.log(data);
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const res = await fetch("/api/profile");
    const data = await res.json();
    if (data.status === "success" && data.data.name && data.data.lastName) {
      setData(data.data);
    }
  };


  return (
    <>
    {
        data?
        <ProfileData data={data} />
         :
            <ProfileForm
              name={name}
              lastName={lastName}
              password={password}
              setName={setName}
              setLastName={setLastName}
              setPassword={setPassword}
              submitHandler={submitHandler}
            />

    }
    </>

   
  );
}

export default ProfilePage;

