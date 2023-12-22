//use express to make a simple web server
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req,res) => {
    res.status(200).json({mesage: 'hello werld'})
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});