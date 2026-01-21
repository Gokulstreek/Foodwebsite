const express  = require('express')
const app=express()
const port =5014
const cors=require('cors')
const bodyParser = require("body-parser");

//database password:Food123
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.get('/',(req,res)=>{
  res.send('this is the backend of the server')
})
//mongodb


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://Food:Food123@cluster0.k3xdl3j.mongodb.net/?appName=Cluster0";
   

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

        const foodinfo = client.db("FoodData").collection("food_details")
        app.post("/uploadfood",async(req,res)=>{
        const data=req.body
        const result=await foodinfo.insertOne(data)
        res.send(result)
        })
        app.get("/getfood", async(req,res)=>{
        const foodget = foodinfo.find()
        const result = await foodget.toArray()
        res.send(result)
        })
        app.get("/getfood/:id",async(req,res)=>{
          const id=req.params.id
          const filter={_id: new ObjectId(id)}
          const result= await foodinfo.findOne(filter)
          res.send(result)
        })
        app.patch("/Updatefood/:id",async(req,res)=>{
          const id=req.params.id
          const update = req.body
          const filter ={_id:new ObjectId(id)}
          const object={$set:{...update}}  
          const option={upsert:"true"}
          const result=await foodinfo.updateOne(filter,object,option)
          res.send(result)
        }) 
        app.delete("/getfood/:id",async(req,res)=>{
          const id=req.params.id
          const filter={_id: new ObjectId(id)}
          const result= await foodinfo.deleteOne(filter)
          res.send(result)
        })
        const cust = [];
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = cust.find(
    user => user.email.toLowerCase() === email.toLowerCase()
  );

  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }
  cust.push({
    name,
    email: email.toLowerCase().trim(),
    password
  });

  res.status(201).json({ message: "User registered successfully" });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = cust.find(
    user =>
      user.email === email.toLowerCase().trim()&&
      user.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  res.status(200).json({ message: "Login successful" });
});

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port,()=>{
  console.log(`This app is listerning to the port ${port}`)
})
