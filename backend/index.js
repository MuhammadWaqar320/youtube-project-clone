
import mongoose from "mongoose";
import app from "./app.js";
const PORT = process.env.PORT||5000;
const connnection_string =
  "mongodb+srv://waqar:1234@youtube-db.asonv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(connnection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then( () => {
      app.listen(PORT,()=>
      {
        console.log(`server is running on port ${PORT}`);
      })
    
  })
  .catch((error) => {
    console.log(error.message);
  });
