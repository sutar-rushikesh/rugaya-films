
# ☁️ RUGAYA FILMS – AWS Cloud Architecture

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0f0f0f&height=180&section=header&text=AWS%20CLOUD%20ARCHITECTURE&fontSize=30&fontColor=d4af37&animation=fadeIn&fontAlignY=35" />
</p>

<p align="center">
  <b>EC2 • RDS • S3 • IAM • Secure Cloud Deployment</b>
</p>

---

## 🚀 Overview

The AWS Architecture of **RUGAYA FILMS** is designed to support a scalable, secure, and production-ready three-tier application.

It leverages core AWS services to provide:

- 🌍 Public accessibility  
- 🔐 Secure infrastructure  
- ☁️ Managed database services  
- 📦 Cloud object storage  
- 📈 Scalable compute resources  

This architecture enables the platform to transition from local development to enterprise-grade cloud deployment.

---

# 🏗 High-Level Architecture

Presentation Layer → Amazon EC2 (React via Nginx)  
Application Layer → Amazon EC2 (Node.js Backend)  
Data Layer → Amazon RDS (PostgreSQL)  
Storage Layer → Amazon S3 (Image Storage)  

---

## 🔄 End-to-End Cloud Request Flow

User Accesses Website  
        ↓  
Public IP / Domain  
        ↓  
EC2 Instance (Frontend Served via Nginx)  
        ↓  
API Request to Backend (Node.js)  
        ↓  
JWT Middleware Validation  
        ↓  
RDS PostgreSQL Query  
        ↓  
S3 Image Fetch / Upload  
        ↓  
Response Sent to User  

---

# 🧱 AWS Components Breakdown

---

## 1️⃣ Amazon EC2

Purpose:

- Host frontend & backend containers  
- Provide compute infrastructure  
- Expose application via public IP  

Best Practices:

- Use Ubuntu 22.04  
- Restrict SSH access  
- Use security groups  
- Use IAM roles instead of access keys  

---

## 2️⃣ Amazon RDS (PostgreSQL)

Purpose:

- Managed database service  
- Automated backups  
- High availability option  

Best Practices:

- Disable public access  
- Use private subnet  
- Enable automated backups  
- Enable Multi-AZ deployment  

---

## 3️⃣ Amazon S3

Purpose:

- Store uploaded images  
- Provide durable object storage  
- Integrate with backend via AWS SDK  

Best Practices:

- Use IAM policy with least privilege  
- Enable bucket versioning  
- Use lifecycle policies  
- Use CloudFront for CDN  

---

## 4️⃣ IAM (Identity & Access Management)

Purpose:

- Secure access control  
- Define roles and permissions  
- Protect AWS resources  

Best Practice:

- Use IAM roles attached to EC2  
- Avoid hardcoded credentials  
- Follow least privilege principle  

---

# 🔐 Security Architecture

- Security Groups act as firewall  
- RDS placed in private subnet  
- Backend validates JWT tokens  
- Environment variables protect secrets  
- IAM restricts S3 access  

This ensures production-grade security posture.

---

# 🐳 Deployment with Docker on EC2

1️⃣ Launch EC2 instance  
2️⃣ Install Docker & Docker Compose  
3️⃣ Clone repository  
4️⃣ Configure .env file  
5️⃣ Run:

docker-compose up -d --build  

6️⃣ Access application via EC2 public IP  

---

# 📈 Scalability Roadmap

Future Enhancements:

- Add Application Load Balancer (ALB)  
- Add Auto Scaling Group  
- Move to ECS / EKS  
- Add CloudFront CDN  
- Add AWS WAF  
- Add monitoring via CloudWatch  

---

# 🧠 DevOps Integration

AWS integrates with:

- GitHub Actions (CI/CD)  
- Docker containers  
- Infrastructure as Code (Terraform)  
- Kubernetes (EKS)  
- Monitoring & Logging systems  

---

# 🛠 Production Hardening Checklist

- Disable root login  
- Restrict inbound traffic  
- Enable HTTPS via Nginx + SSL  
- Use private subnets  
- Enable RDS encryption  
- Enable S3 encryption  
- Setup monitoring & alarms  

---

# 🚀 Future Cloud Evolution

- Multi-region deployment  
- Blue-Green deployment strategy  
- Canary releases  
- Observability stack integration  
- Infrastructure automation with Terraform  

---

# 🏆 Summary

The AWS Cloud Architecture ensures:

- Secure public access  
- Managed database reliability  
- Durable image storage  
- Scalable compute infrastructure  
- DevOps-aligned cloud deployment  

It transforms RUGAYA FILMS into a **cloud-native, production-ready SaaS platform**.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0f0f0f&height=120&section=footer"/>
</p>
