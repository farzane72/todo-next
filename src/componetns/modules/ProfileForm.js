import { CgProfile } from "react-icons/cg";

function ProfileForm(props) {
    const{name,setName,lastName,setLastName,password,setPassword,submitHandler}=props
    return (
        <div>
      <div className="p-8 flex flex-col gap-4">
        <div className="flex gap-2 ">
          <CgProfile />
          <h2>Profile</h2>
        </div>
        <div className=" flex flex-col gap-1 ">
          <label>Name:</label>
          <input
            className="w-1/2 p-1 rounded-md"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className=" flex flex-col gap-1 ">
          <label>LastName:</label>
          <input
            className="w-1/2 p-1 rounded-md"
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className=" flex flex-col gap-1 ">
          <label>Password:</label>
          <input
            className="w-1/2 p-1 rounded-md"
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <button
        className="border ml-8 p-2 bg-gray-500 rounded-md"
        onClick={submitHandler}
      >
        Submit
      </button>
    </div>
    )
}

export default ProfileForm
