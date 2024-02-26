

function ProfileData({data}) {
    return (
        <div className="p-8 flex flex-col gap-8">

            <div className=" flex gap-1">
                <span>Name:</span>
                <p>{data.name}</p>
            </div>
            <div className=" flex gap-1">
                <span>LastName:</span>
                <p>{data.lastName}</p>
            </div>
            <div className=" flex gap-1">
                <span>Email:</span>
                <p>{data.email}</p>
            </div>
            
        </div>
    )
}

export default ProfileData
