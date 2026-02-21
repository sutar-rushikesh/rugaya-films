import pool from "../config/db.js";
import s3 from "../config/s3.js";

export const createProduct = async (req, res) => {
  const { title, description, price } = req.body;
  const file = req.file;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${Date.now()}-${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  const upload = await s3.upload(params).promise();

  const result = await pool.query(
    "INSERT INTO products (title, description, price, image_url) VALUES ($1,$2,$3,$4) RETURNING *",
    [title, description, price, upload.Location]
  );

  res.json(result.rows[0]);
};

export const getProducts = async (req, res) => {
  const result = await pool.query("SELECT * FROM products");
  res.json(result.rows);
};
