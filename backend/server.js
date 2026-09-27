import "dotenv/config";

import server from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 3000;

const serverStar = server.listen(PORT, async (err) => {
  if (err) {
    console.log(`server failed with error ${err}`);
    
  } else {
    await connectDB();

    console.log(`server is running at http://localhost:${PORT}`);
  
  }
});
