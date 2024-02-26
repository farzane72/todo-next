import connectDB from "@/utils/connectDB";
import User from "@/modules/User";
import { getSession } from "next-auth/react";
import { sortTodos } from "@/utils/sortTodos";
export default async function (req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to database" });
    return;
  }

  const session = await getSession({ req });
  if (!session) {
    return res
      .status(401)
      .jsonjson({ status: "failed", message: "you are not login" });
  }
  const user = await User.findOne({ email: session.user.email });
  console.log(user);
  if (!user) {
    res.status(404).json({ status: "failed", message: "user doesnt exit" });
  }
  if (req.method === "POST") {
    const { title, status } = req.body;
    console.log(title,status);

    if (!title || !status) {
      return res
        .status(422)
        .json({ status: "failed", message: "Invaild data!" });
    }

    user.todoes.push({ title, status });
    user.save();

    res.status(201).json({ status: "success", message: "Todo created!" });
  }
  else if(req.method === "GET")
  {
    const sortedData=sortTodos(user.todoes)
    
    res.status(200).json({status:"success",data:sortedData})
  }
  else if(req.method === "PATCH"){

    const {_id,status}=req.body
    console.log(_id,status);
    if(!_id || !status)return res.status(422).json({status:"failed",data:"invalid data!"})

    const result=await User.updateOne({"todoes._id":_id},
    {$set:{"todoes.$.status":status}})
    console.log(result);
    res.status(200).json({status:"success"})

  }


  
}
