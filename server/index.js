//use express to make a simple web server
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const DBHOST = "216.172.184.38";
const DBUSER = "theaaria_admin";
const DBPASS = "fluffyPancakes384";
const DBNAME = "theaaria_spotifywfriends";

const app = express();
app.use(express.json());
app.use(cors());

//create a connection pool to get next available connection instead of .createConnection, which creates a single, blocking connection
const db = mysql.createPool({
    host: DBHOST,
    user: DBUSER,
    password: DBPASS,
    database: DBNAME,
});

app.get("/debug/users", async (req,res) => {
    const role = req.query.role;
    const sql = "SELECT * FROM user";

    if (role==="admin") {
        db.query(sql, (err,results) => {
                if (err) {
                    const errMsg = "you are not authorized to access this resource :p";
                    return res.status(401).json({error: err, message: errMsg});
                } else {
                    return res.status(200).json({mesage: 'success', data: results});
                }
            }
        );
    } else {
        const errMsg = `you are not authorized to access this resource :p ur current role: ${role}`;
        return res.status(401).json({error: errMsg});
    }
});

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});