//connection to the database
import mongoose from "mongoose"

const connectToDatabase = async () => {
  console.log(process.env.MONGO_URI)

  try {
    //mongoose.set("strictQuery", false) use this if you have multiple versions of the mongodb and if it's giving you errors
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })

    console.log(`MongoDB Connected: ${connect.connection.host}`)
  } catch (error) {
    console.log(`There was an Error: ${error.message}`)
  }
}

export default connectToDatabase