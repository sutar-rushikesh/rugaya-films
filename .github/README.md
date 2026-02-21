
# 🎬 RUGAYA FILMS  

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0f0f0f&height=200&section=header&text=RUGAYA%20FILMS&fontSize=40&fontColor=d4af37&animation=fadeIn&fontAlignY=35" />
</p>

<p align="center">
  <b>Luxury Photography E-Commerce Platform</b><br/>
  Cloud-Native • Three-Tier Architecture • DevOps Driven
</p>

---

## 🚀 Build Status & Tech Stack

![CI Status](https://github.com/sutar-rushikesh/rugaya-films/actions/workflows/ci.yml/badge.svg)

### 🧠 Backend
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express.js-API-black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)

### 🎨 Frontend
![React](https://img.shields.io/badge/React-Frontend-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Design-38B2AC)
![Vite](https://img.shields.io/badge/Vite-Build-purple)

### ☁️ Cloud & DevOps
![Docker](https://img.shields.io/badge/Docker-Containerization-2496ED)
![AWS](https://img.shields.io/badge/AWS-Cloud-FF9900)
![EC2](https://img.shields.io/badge/AWS-EC2-yellow)
![S3](https://img.shields.io/badge/AWS-S3-red)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-blue)

---

# 🌍 Project Overview

**RUGAYA FILMS** is a premium photography e-commerce platform built using modern DevOps principles and a scalable three-tier architecture.

It demonstrates:

- 🔐 Secure JWT Authentication
- 👤 Role-Based Access (Admin/User)
- 🛍 Product Management System
- ☁️ AWS S3 Image Storage
- 🗄 PostgreSQL Data Persistence
- 🐳 Full Docker Containerization
- 🚀 CI Pipeline Automation
- ☁️ Cloud Deployment on AWS EC2

---

# 🏗 Three-Tier Architecture

Presentation Layer  →  React + Tailwind  
Application Layer   →  Node.js + Express  
Data Layer          →  PostgreSQL + AWS S3  

---

# 🔄 Application Flow

User Request  
↓  
React Frontend  
↓  
API Call → Backend  
↓  
JWT Middleware Validation  
↓  
Database Query (PostgreSQL)  
↓  
Image Storage / Fetch (S3)  
↓  
Response Returned  
↓  
UI Updated  

---

# 📂 Project Structure

rugaya-films/  
│  
├── frontend/  
├── backend/  
├── database/  
├── docs/  
├── .github/workflows/  
├── docker-compose.yml  
└── README.md  

---

# 🐳 Docker Deployment

Run entire application:

docker-compose up --build  

Frontend → http://localhost:3000  
Backend → http://localhost:5000  

---

# ☁️ AWS Deployment

Infrastructure:

- EC2 → Application Hosting  
- RDS → PostgreSQL  
- S3 → Image Storage  
- IAM → Secure Access  

Steps:

1. Launch EC2  
2. Install Docker  
3. Clone repository  
4. Run docker-compose  
5. Configure environment variables  
6. Access via Public IP  

---

# 🔐 Security Features

- Password hashing (bcrypt)  
- JWT authentication  
- Role-based route protection  
- Environment variable isolation  
- Docker container isolation  

---

# 🛤 DevOps Roadmap

- ✅ Local Development  
- ✅ Docker Containerization  
- ✅ EC2 Deployment  
- ✅ CI Pipeline  
- 🔜 RDS Migration  
- 🔜 Kubernetes Migration  
- 🔜 Auto Deployment  
- 🔜 Monitoring & Observability  

---

# 👨‍💻 Author

Rushikesh Sutar  
Cloud • DevOps • Full-Stack Engineering  

---

⭐ If you find this project valuable, consider starring the repository.
