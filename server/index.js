import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const db = mysql.createConnection({ 
    host: "",
    database: "",
    user: "",
    password: "",
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected to database");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});