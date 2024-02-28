import express from "express";
import cors from "cors";

// Initialise express
const app = express();
// Here, we provide a port. You can choose any available port.
const port = process.env.PORT || 3005;

// We add this so that our server and frontend app can interact without issue
app.use(cors());
// We add this line to parse JSON in the request body
app.use(express.json());
// This allows us to see if our server is running ok
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});