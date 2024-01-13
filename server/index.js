//use express to make a simple web server
const express = require("express");
const mysql = require("mysql");

const PORT = process.env.PORT || 3001;
const DBHOST = "216.172.184.38";
const DBUSER = "theaaria_admin";
const DBPASS = "fluffyPancakes384";
const DBNAME = "theaaria_spotifywfriends";

const app = express();
app.use(express.json());

//create a connection pool to get next available connection instead of .createConnection, which creates a single, blocking connection
const db = mysql.createPool({
    host: DBHOST,
    user: DBUSER,
    password: DBPASS,
    database: DBNAME,
});

app.get("/debug", (req,res) => {
    db.query(
        `SELECT * FROM user`, function (err,results) {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log(results);
                return;
            }
        }
    );

    res.status(200).json({mesage: 'hello werld'})
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});