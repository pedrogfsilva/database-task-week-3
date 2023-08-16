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
    db.query("USE week3;");
});

app.post("/task", (request, response) => {
    try {
        const { name, description, hours } = request.body;
        const sql = `INSERT INTO task(name, description, hours) VALUES ('${name}', '${description}', '${hours}')`;
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            console.log("Task added");
            response.send("Task added");
        });
    } catch (error) {
        console.log(error);
    }
});

app.get("/task", (request, response) => {
    try {
        const sql = "SELECT * FROM task";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            console.log("Tasks retrieved");
            response.send(result);
        });
    } catch (error) {
        console.log(error);
    }
});

app.post("/employees", (request, response) => {
    try {
        const { name, address } = request.body;
        const sql = `INSERT INTO EMPLOYEES(NAME, ADDRESS) VALUES ('${name}', '${address}')`;
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            console.log("Employee added");
            response.send("Employee added");
        });
    } catch (error) {
        console.log(error);
    }
});

app.get("/employees", (request, response) => {
    try {
        const sql = "SELECT * FROM EMPLOYEES";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            console.log("Employees retrieved");
            response.send(result);
        });
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});