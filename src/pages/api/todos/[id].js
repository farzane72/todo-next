import connectDB from "@/utils/connectDB";
import User from "@/modules/User";
import { getSession } from "next-auth/react";

export default async function (req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to DB" });
  }

  const session = await getSession({ req });
  console.log(session);
  if (!session) {
    return res
      .status(401)
      .json({ status: "failed", message: "You are not logged in!" });
  }

  const user = await User.findOne({ email: session.user.email });

  if (!user) {
    return res
      .status(404)
      .json({ status: "failed", message: "User doesn't exist!" });
  }
//console.log(req);
  const id   = req.query.id;
  console.log(id);
   if (req.method === "GET") {
   // console.log(user.todoes);
     const data = await user.todoes.find((todo) =>todo._id.toHexString()===id );
     
     console.log(data);
   
    return res
    .status(200)
    .json({ status: "success",data:data });
    
  }
  else if(req.method === "PATCH"){

    const {id,status,title}=req.body
    console.log(id,status,title);
    if(!id || !status || !title)return res.status(422).json({status:"failed",data:"invalid data!"})

    const result=await User.updateOne({"todoes._id":id},
    //set title ham ezafe she
    {$set:{"todoes.$.title":title,"todoes.$.status":status}})
    console.log(result);
    res.status(200).json({status:"success"})

  }
  else if(req.method === "DELETE"){

    //const data = await user.todoes.find((todo) =>todo._id.toHexString()===id );
    // await User.findOneAndDelete({ "todoes._id":id });

    // res.status(200).json({ status: "Success", message: "data deleted" });

    const data= await User.update({email : user.email},{$pull : { todoes : { _id : id }}})
    res.status(200).json({ status: "Success", message: "data deleted",data:data })
    
  }

}
