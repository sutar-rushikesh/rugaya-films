
# 🗄 RUGAYA FILMS – Data Persistence Layer

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0f0f0f&height=180&section=header&text=DATA%20PERSISTENCE%20LAYER&fontSize=30&fontColor=d4af37&animation=fadeIn&fontAlignY=35" />
</p>

<p align="center">
  <b>PostgreSQL • Relational Integrity • Cloud-Ready Storage</b>
</p>

---

## 🚀 Overview

The **Database Layer** is responsible for storing and managing all persistent data of RUGAYA FILMS.

It ensures:

- 👤 Secure user storage  
- 🛍 Product information management  
- 🔗 Relational integrity  
- 📊 Structured data architecture  
- ☁️ Cloud-ready scalability  

This layer guarantees reliable and consistent data operations.

---

## 🎯 Why This Layer Is Important

Without a structured database:

- Authentication cannot function  
- Products cannot be stored  
- Image references cannot be saved  
- Business logic becomes unstable  

The database is the **foundation of the system**.

---

## 🏗 Database Architecture Flow

Frontend Request  
        ↓  
Backend Controller  
        ↓  
SQL Query Execution  
        ↓  
PostgreSQL Engine  
        ↓  
Data Retrieved / Stored  
        ↓  
Response Sent to Backend  
        ↓  
Frontend Updated  

---

## 📂 Folder Structure

database/  
│  
└── schema.sql  

---

## 📜 Schema Overview

### Users Table

- id (Primary Key)  
- name  
- email (Unique)  
- password (Hashed)  
- role (admin/user)  

---

### Products Table

- id (Primary Key)  
- title  
- description  
- price  
- image_url (S3 Reference)  
- created_at  

---

## 🛠 Running Database Locally

### 1️⃣ Install PostgreSQL

Ubuntu:

sudo apt install postgresql -y  

Windows:

Install via official PostgreSQL installer.

---

### 2️⃣ Create Database

CREATE DATABASE rugaya;  

---

### 3️⃣ Run Schema

psql -U postgres -d rugaya -f schema.sql  

---

### 4️⃣ Verify Tables

\dt  

You should see:

- users  
- products  

---

## 🔐 Security Practices

- Passwords stored as hashed values  
- No plain text credentials  
- Role-based access control  
- Environment-based connection string  
- Production DB placed in private subnet  

---

## ☁️ Production Upgrade

For production:

- Use AWS RDS (PostgreSQL)  
- Enable automated backups  
- Enable Multi-AZ deployment  
- Restrict public access  
- Use SSL connection  

---

## 📈 Scaling Strategy

As application grows:

- Add indexing  
- Enable connection pooling  
- Use read replicas  
- Add caching layer (Redis)  
- Monitor query performance  

---

## 🚀 Future Enhancements

- Add bookings table  
- Add orders table  
- Add payments table  
- Add audit_logs table  
- Implement foreign key constraints  
- Add performance indexing  

---

## 🏆 Summary

The Data Persistence Layer ensures:

- Reliable storage  
- Secure authentication support  
- Structured relational design  
- Cloud scalability  
- Production readiness  

It forms the backbone of RUGAYA FILMS.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0f0f0f&height=120&section=footer"/>
</p>
