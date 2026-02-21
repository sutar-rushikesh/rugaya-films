CREATE DATABASE rugaya;

\c rugaya

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password TEXT,
    role VARCHAR(20) DEFAULT 'user'
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150),
    description TEXT,
    price NUMERIC,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
