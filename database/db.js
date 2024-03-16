import mongoose from "mongoose";

const Connection = async(MONGODB_URL) =>{
   //  const URL=``;
   try{

await mongoose.connect(MONGODB_URL);
console.log("database is connected successfully")
   }catch(error)
   {
   console.log("Error while connection with database", error); 
   } 
}



export default Connection;