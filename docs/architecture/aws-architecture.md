☁️ Cloud Infrastructure Architecture – RUGAYA FILMS
📌 Why AWS Infrastructure Is Needed

AWS infrastructure provides the cloud environment required to deploy, scale, and securely operate the RUGAYA FILMS platform.

Without AWS:

Application remains local-only

No global accessibility

No scalability

No managed database

No secure cloud storage

AWS transforms the application into a production-ready, internet-accessible SaaS platform.
![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)
🎯 Importance of AWS Infrastructure

AWS enables:

🌍 Public access via EC2

🗄 Managed database via RDS

📸 Image storage via S3

🔐 Secure access via IAM

📈 Scalability & reliability

💾 Backup & disaster recovery

It ensures:

High availability

Fault tolerance

Cost optimization

Enterprise-level deployment

🏗 AWS Architecture Overview
4
🧱 Infrastructure Components
1️⃣ Amazon EC2

Hosts Docker containers

Runs frontend + backend

Publicly accessible

2️⃣ Amazon RDS (PostgreSQL)

Managed database service

Automated backups

High availability option

3️⃣ Amazon S3

Stores uploaded product images

Public image URLs

Highly durable storage

4️⃣ IAM (Identity & Access Management)

Controls permissions

Secures S3 access

Follows least-privilege model

5️⃣ Security Groups

Firewall rules

Control inbound/outbound traffic

🔄 AWS Infrastructure Working Flow
User Accesses Website
        ↓
Request Reaches EC2 Instance
        ↓
Frontend Served via Nginx
        ↓
API Request Sent to Backend
        ↓
Backend Queries RDS
        ↓
Image Stored/Retrieved from S3
        ↓
Response Sent Back to User
📂 AWS Logical Architecture (3-Tier)
Presentation Layer

EC2 → React Frontend

Application Layer

EC2 → Node.js Backend

Data Layer

RDS → PostgreSQL
S3 → Image Storage

🛠 Steps to Deploy on AWS (Basic EC2 Setup)
1️⃣ Launch EC2

Ubuntu 22.04

t2.micro (Free tier)

Open ports:

22 (SSH)

3000 (Frontend)

5000 (Backend)

2️⃣ Install Docker on EC2
sudo apt update
sudo apt install docker.io -y
sudo apt install docker-compose -y
sudo systemctl start docker
sudo usermod -aG docker ubuntu

Re-login to apply changes.

3️⃣ Clone Project
git clone https://github.com/your-username/rugaya-films.git
cd rugaya-films
4️⃣ Run Application
docker-compose up -d --build

Access via:

http://<EC2-PUBLIC-IP>:3000
🛠 Steps to Setup RDS (Production Upgrade)

Go to AWS RDS

Create PostgreSQL instance

Disable public access (recommended)

Allow EC2 security group access

Update backend .env:

DATABASE_URL=postgresql://username:password@rds-endpoint:5432/rugaya
🛠 Steps to Setup S3

Create bucket: rugaya-films-storage

Enable public read (if needed)

Create IAM user with S3 access

Add credentials in backend .env

🔐 Security Recommendations

Use IAM Roles instead of Access Keys

Disable public RDS access

Use HTTPS (SSL via Nginx + Certbot)

Restrict SSH access by IP

Enable automatic backups

Use private subnets for database

📈 Scalability Plan

Future improvements:

Add Load Balancer (ALB)

Use Auto Scaling Group

Move to ECS or EKS

Add CloudFront CDN

Use Route53 for domain

Add WAF for protection

🔄 Production Architecture (Recommended)

Public Subnet:

EC2 Instance

Load Balancer

Private Subnet:

RDS Database

S3:

Global image storage

🚀 DevOps Integration

AWS integrates with:

Docker containers

GitHub Actions CI/CD

Infrastructure as Code (Terraform)

Kubernetes (EKS)

Monitoring (CloudWatch)

🧠 Suggested Future Enhancements

Implement VPC with public/private subnets

Use Bastion host for SSH

Add CloudWatch alarms

Add AWS Secrets Manager

Add Infrastructure as Code (Terraform)

🏆 Final Summary

AWS Infrastructure enables RUGAYA FILMS to be:

Internet accessible

Scalable

Secure

Cloud-native

Production ready

It transforms the application from development stage to enterprise-grade deployment.