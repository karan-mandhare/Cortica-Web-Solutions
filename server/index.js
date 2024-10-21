import connectDb from "./config/config.js";
import { app } from "./app.js";

connectDb()
  .then(() => {
    app.listen(8001, () => {
      console.log(`Server is running at port : 8001`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
