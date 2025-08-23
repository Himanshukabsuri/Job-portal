// import mongoose from "mongoose";

// // function to connect to the monodb

// const connectDb =async ()=>{
//     mongoose.connection.on('connected',()=>console.log('Database connected'))

//     await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
// }

// export default connectDb;

import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.connection.on("connected", () =>
    console.log("✅ Database connected")
  );

  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "job-portal", // your DB name
  });
};

export default connectDb;
