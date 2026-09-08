import express from "express"; // need "type":"module" in pkg.json

const app = express();

//route 
app.get("/api/home", (req, res) => {
    res.status(200).send("you got 20 notes")
})

app.listen(5001, () => {
    console.log("SERVER STARTED ON PORT: 5001");
})