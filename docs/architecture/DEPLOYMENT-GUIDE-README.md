
# 🚀 RUGAYA FILMS – Deployment Guide

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0f0f0f&height=180&section=header&text=DEPLOYMENT%20GUIDE&fontSize=32&fontColor=d4af37&animation=fadeIn&fontAlignY=35" />
</p>

<p align="center">
  <b>Docker • AWS EC2 • Production Setup • DevOps Ready</b>
</p>

---

## 🌍 Overview

This Deployment Guide provides a structured process to move **RUGAYA FILMS** from development to production.

It ensures:

- 📦 Consistent deployments  
- 🔐 Secure configuration  
- ☁️ Cloud-ready setup  
- 🐳 Containerized execution  
- 🚀 Scalable infrastructure  

---

# 🏗 Deployment Architecture Flow

Developer Push  
        ↓  
GitHub Repository  
        ↓  
CI Pipeline (Optional)  
        ↓  
EC2 Instance  
        ↓  
Docker Build  
        ↓  
Containers Running  
        ↓  
Public Access via IP / Domain  

---

# 🖥 Local Development Deployment

### 1️⃣ Backend

cd backend  
npm install  
npm run dev  

Server runs at:

http://localhost:5000  

---

### 2️⃣ Frontend

cd frontend  
npm install  
npm run dev  

Application runs at:

http://localhost:5173  

---

# 🐳 Docker Deployment (Recommended)

### 1️⃣ Install Docker

Ubuntu:

sudo apt update  
sudo apt install docker.io -y  
sudo apt install docker-compose -y  

---

### 2️⃣ Run Full Stack

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

# ☁️ AWS EC2 Production Deployment

---

## 🟢 Step 1 – Launch EC2

- Ubuntu 22.04  
- t2.micro (Free tier)  
- Open ports:  
  - 22 (SSH)  
  - 3000 (Frontend)  
  - 5000 (Backend)  

---

## 🟢 Step 2 – Connect to EC2

ssh -i key.pem ubuntu@<EC2-PUBLIC-IP>  

---

## 🟢 Step 3 – Install Docker

sudo apt update  
sudo apt install docker.io -y  
sudo apt install docker-compose -y  
sudo systemctl start docker  
sudo usermod -aG docker ubuntu  

Logout and reconnect.

---

## 🟢 Step 4 – Clone Repository

git clone https://github.com/your-username/rugaya-films.git  
cd rugaya-films  

---

## 🟢 Step 5 – Configure Environment

Update:

backend/.env  

Example:

PORT=5000  
DATABASE_URL=postgresql://username:password@rds-endpoint:5432/rugaya  
JWT_SECRET=your_secret  
AWS_REGION=ap-south-1  
AWS_BUCKET_NAME=rugaya-films-storage  

---

## 🟢 Step 6 – Run Containers

docker-compose up -d --build  

---

## 🌐 Access Application

http://<EC2-PUBLIC-IP>:3000  

---

# 🔐 Production Security Checklist

- Disable public RDS access  
- Use IAM roles instead of access keys  
- Enable HTTPS (Nginx + SSL)  
- Restrict SSH by IP  
- Enable automatic database backups  
- Store secrets securely  

---

# 📈 Scaling Strategy

Future production improvements:

- Add Application Load Balancer  
- Enable Auto Scaling Group  
- Use RDS Multi-AZ  
- Use CloudFront CDN  
- Migrate to Kubernetes (EKS)  

---

# 🧠 DevOps Automation (Future)

- Auto deploy via GitHub Actions  
- Docker image push to ECR  
- Blue-Green deployment  
- Canary release strategy  
- Infrastructure as Code (Terraform)  

---

# 🏆 Summary

This Deployment Guide ensures:

- Structured deployment process  
- Secure cloud configuration  
- Containerized execution  
- Scalable infrastructure  
- DevOps-aligned production readiness  

RUGAYA FILMS is ready for real-world cloud deployment.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0f0f0f&height=120&section=footer"/>
</p>
