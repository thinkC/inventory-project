const express = require("express")
const app = express();
const inventoryRoutes = require("./routes/inventory");
const cors = require("cors");

app.use(express.json());

//use cores middleware 
// app.use(cors({origin: "*"}))
app.use(cors({origin: "http://localhost:3000"}))

//use the inventroy routes
app.use("/api", inventoryRoutes);

const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
})

