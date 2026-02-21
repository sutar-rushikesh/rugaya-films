🎬 RUGAYA FILMS
<p align="center"> <img src="https://capsule-render.vercel.app/api?type=waving&color=0f0f0f&height=200&section=header&text=RUGAYA%20FILMS&fontSize=40&fontColor=d4af37&animation=fadeIn&fontAlignY=35" /> </p> <p align="center"> <b>Luxury Photography E-Commerce Platform</b><br/> Cloud-Native • Three-Tier Architecture • DevOps Driven </p>
🚀 Build Status & Tech Stack

🧠 Backend








🎨 Frontend






☁️ Cloud & DevOps










🌍 Project Overview

RUGAYA FILMS is a premium photography e-commerce platform built using modern DevOps principles and a scalable three-tier architecture.

It demonstrates:

🔐 Secure JWT Authentication

👤 Role-Based Access (Admin/User)

🛍 Product Management System

☁️ AWS S3 Image Storage

🗄 PostgreSQL Data Persistence

🐳 Full Docker Containerization

🚀 CI Pipeline Automation

☁️ Cloud Deployment on AWS EC2

This project reflects real-world production architecture practices.

🏗 System Architecture
Three-Tier Architecture
Presentation Layer  →  React + Tailwind
Application Layer   →  Node.js + Express
Data Layer          →  PostgreSQL + AWS S3
🔄 Application Flow
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
📂 Project Structure
rugaya-films/
│
├── frontend/                # React Application
├── backend/                 # Node.js API
├── database/                # Schema Definitions
├── docs/                    # Architecture & DevOps Docs
├── .github/workflows/       # CI Pipeline
├── docker-compose.yml       # Multi-container Setup
└── README.md
🐳 Docker Deployment

Run entire application using Docker:

docker-compose up --build

Access:

Frontend → http://localhost:3000

Backend → http://localhost:5000

☁️ AWS Deployment
Infrastructure Components

EC2 → Application Hosting

RDS → PostgreSQL (Production)

S3 → Image Storage

IAM → Secure Access

Security Groups → Network Control

Deployment Steps:

Launch EC2

Install Docker

Clone repository

Run docker-compose

Configure environment variables

Access via Public IP

🔐 Security Features

Password hashing (bcrypt)

JWT token validation

Role-based route protection

Environment variable isolation

Docker container isolation

IAM-based cloud access

🛤 DevOps Roadmap
Phase	Status
Local Development	✅
Docker Containerization	✅
EC2 Deployment	✅
CI Pipeline	✅
RDS Migration	🔜
Kubernetes Migration	🔜
Auto Deployment	🔜
Monitoring & Observability	🔜
🚀 CI/CD Pipeline

The GitHub Actions workflow automatically:

Runs on every push

Installs dependencies

Builds frontend

Validates backend

Reports status

View pipeline inside Actions tab.

📈 Future Enhancements

Load Balancer (ALB)

Auto Scaling Groups

CloudFront CDN

Payment Gateway Integration

Admin Dashboard UI

Kubernetes (EKS)

Terraform Infrastructure as Code

Blue-Green Deployment Strategy

🧠 Why This Project Stands Out

Clean Three-Tier Architecture

Cloud-Ready Infrastructure

DevOps Integrated Workflow

Production Deployment Strategy

Enterprise-Scalable Design

Security-First Approach

👨‍💻 Author

Rushikesh Sutar
Founder – RUGAYA FILMS
Cloud • DevOps • Full-Stack Engineering

<p align="center"> <img src="https://capsule-render.vercel.app/api?type=waving&color=0f0f0f&height=120&section=footer"/> </p>
⭐ Support

If you find this project valuable:

⭐ Star the repository

🍴 Fork for learning

🧠 Suggest improvements

🔥 Final Statement

RUGAYA FILMS is more than a project —
It is a complete cloud-native, DevOps-driven, scalable SaaS foundation built for production excellence.