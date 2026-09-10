const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "inventory_db"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
        return;
    }

    console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
    res.send("Inventory API is running");
});

// گرفتن محصولات
app.get("/products", (req, res) => {
    const sql = "SELECT * FROM products";

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.json(result);
    });
});

// اضافه کردن محصول
app.post("/products", (req, res) => {
    const { name, category_id, supplier_id, quantity, price } = req.body;

    const sql = `
        INSERT INTO products
        (name, category_id, supplier_id, quantity, price)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, category_id, supplier_id, quantity, price],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.status(201).json({
                message: "Product added successfully",
                id: result.insertId
            });
        }
    );
});
// گرفتن دسته بندی ها
app.get("/categories", (req, res) => {
    const sql = "SELECT * FROM categories";

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.json(result);
    });
});

// گرفتن تامین کننده ها
app.get("/suppliers", (req, res) => {
    const sql = "SELECT * FROM suppliers";

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.json(result);
    });
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});