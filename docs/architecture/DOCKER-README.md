
# 🐳 RUGAYA FILMS – Docker & Containerization Guide

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0f0f0f&height=180&section=header&text=DOCKER%20CONTAINERIZATION&fontSize=30&fontColor=d4af37&animation=fadeIn&fontAlignY=35" />
</p>

<p align="center">
  <b>Multi-Container Architecture • Docker Compose • Cloud-Ready Deployment</b>
</p>

---

## 🚀 Overview

Docker enables **RUGAYA FILMS** to run consistently across:

- 💻 Local Development  
- ☁️ Cloud Servers (AWS EC2)  
- 🧱 Kubernetes Clusters  
- 🚀 CI/CD Pipelines  

It ensures environment consistency, portability, and scalable deployment.

---

# 🏗 Container Architecture

Frontend (React + Nginx)  
        ↓  
Backend (Node.js + Express)  
        ↓  
PostgreSQL (Database Container – Dev Only)  

All services communicate inside a Docker network.

---

# 📂 Docker File Structure

rugaya-films/  
│  
├── backend/  
│   └── Dockerfile  
│  
├── frontend/  
│   └── Dockerfile  
│  
├── docker-compose.yml  
└── .env  

---

# ⚙️ How Docker Works in This Project

1️⃣ Docker builds backend image  
2️⃣ Docker builds frontend production image  
3️⃣ Docker pulls PostgreSQL image  
4️⃣ Docker Compose creates internal network  
5️⃣ Containers communicate via service names  
6️⃣ Application becomes accessible via exposed ports  

---

# 🔄 Execution Flow

docker-compose up  
        ↓  
Build Images  
        ↓  
Create Network  
        ↓  
Start PostgreSQL  
        ↓  
Start Backend  
        ↓  
Start Frontend  
        ↓  
Application Live  

---

# 🛠 Running Docker Locally

### 1️⃣ Install Docker

Ubuntu:

sudo apt update  
sudo apt install docker.io -y  
sudo apt install docker-compose -y  

---

### 2️⃣ Build & Run

From project root:

docker-compose up --build  

Run in background:

docker-compose up -d  

---

### 3️⃣ Access Application

Frontend:

http://localhost:3000  

Backend:

http://localhost:5000  

---

# 🔐 Environment Variables

Backend container uses:

DATABASE_URL=postgresql://postgres:password@postgres:5432/rugaya  
JWT_SECRET=your_secret  
AWS_REGION=ap-south-1  
AWS_BUCKET_NAME=rugaya-films-storage  

Note: "postgres" refers to Docker service name, not localhost.

---

# 📦 Volume & Persistence

PostgreSQL container uses persistent volume:

volumes:  
  postgres_data:  

This prevents data loss when container restarts.

---

# ☁️ Docker in AWS Deployment

On EC2:

1️⃣ Install Docker  
2️⃣ Clone repository  
3️⃣ Configure .env  
4️⃣ Run docker-compose  
5️⃣ Application accessible via Public IP  

---

# 📈 Production Optimization

Future Improvements:

- Multi-stage Docker builds  
- Image size optimization  
- Use Docker Hub or AWS ECR  
- Add container health checks  
- Resource limits (CPU/Memory)  
- Reverse proxy with Nginx  

Example Health Check:

healthcheck:  
  test: ["CMD", "curl", "-f", "http://localhost:5000"]  
  interval: 30s  
  timeout: 10s  
  retries: 3  

---

# 🔐 Security Best Practices

- Do not expose database port publicly  
- Use environment variables  
- Use IAM roles instead of AWS access keys  
- Restrict EC2 security group rules  
- Enable HTTPS in production  

---

# 🚀 DevOps Integration

Docker integrates with:

- GitHub Actions CI  
- AWS EC2 Deployment  
- Kubernetes (EKS)  
- Infrastructure as Code  
- Automated Build Pipelines  

---

# 🏆 Summary

Docker transforms RUGAYA FILMS into:

- Portable  
- Scalable  
- Cloud-ready  
- DevOps-aligned  
- Production-deployable  

It bridges development and cloud deployment seamlessly.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0f0f0f&height=120&section=footer"/>
</p>
