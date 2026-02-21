
# 🏗 RUGAYA FILMS – Three-Tier Architecture

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0f0f0f&height=180&section=header&text=THREE%20TIER%20ARCHITECTURE&fontSize=30&fontColor=d4af37&animation=fadeIn&fontAlignY=35" />
</p>

<p align="center">
  <b>Presentation Layer • Application Layer • Data Layer</b>
</p>

---

## 🚀 Overview

The **Three-Tier Architecture** is the structural foundation of RUGAYA FILMS.

It separates the system into:

1️⃣ Presentation Layer  
2️⃣ Application Layer  
3️⃣ Data Layer  

This design ensures scalability, maintainability, security, and cloud readiness.

---

## 🎯 Why Three-Tier Architecture Is Important

Without layered architecture:

- Code becomes tightly coupled  
- Scaling becomes difficult  
- Security boundaries weaken  
- Deployment becomes complex  

With three-tier separation:

- Each layer scales independently  
- Security is enforced at multiple levels  
- DevOps workflows become structured  
- Cloud migration becomes seamless  

---

# 🏗 Architectural Breakdown

---

## 1️⃣ Presentation Layer (Frontend)

Technology Stack:

- React  
- Tailwind CSS  
- Vite  

Responsibilities:

- UI rendering  
- User interaction  
- Sending API requests  
- Handling JWT token storage  

This layer NEVER directly communicates with the database.

---

## 2️⃣ Application Layer (Backend)

Technology Stack:

- Node.js  
- Express  
- JWT  
- Middleware  

Responsibilities:

- Business logic execution  
- Authentication & authorization  
- API routing  
- S3 integration  
- Database communication  

Acts as the secure bridge between frontend and database.

---

## 3️⃣ Data Layer (Database + Storage)

Technology Stack:

- PostgreSQL  
- AWS S3  

Responsibilities:

- Persistent data storage  
- Relational integrity  
- Image storage  
- Secure structured queries  

Database is never directly exposed to frontend.

---

# 🔄 End-to-End Request Flow

User Accesses Website  
        ↓  
React Frontend  
        ↓  
API Request to Backend  
        ↓  
JWT Middleware Validation  
        ↓  
Controller Logic  
        ↓  
PostgreSQL Query  
        ↓  
S3 Image Fetch (if required)  
        ↓  
Response to Frontend  
        ↓  
UI Updated  

---

# ☁️ Cloud Deployment Architecture

Presentation Layer → EC2 (React via Nginx)  
Application Layer → EC2 (Node Backend)  
Data Layer → AWS RDS + AWS S3  

This ensures:

- Public accessibility  
- Secure database isolation  
- Scalable infrastructure  

---

# 🔐 Security Benefits

- Database isolated from public internet  
- Backend validates every request  
- JWT protects sensitive routes  
- Role-based access control enforced  
- Environment-based configuration  

---

# 📈 Scalability Benefits

Each layer can scale independently:

- Scale frontend containers  
- Scale backend services  
- Upgrade database instance  
- Use CDN for asset delivery  

Future scaling includes:

- Load Balancer  
- Auto Scaling Groups  
- Kubernetes (EKS)  
- Redis caching  

---

# 🧠 DevOps Integration

Three-tier architecture integrates smoothly with:

- Docker containerization  
- GitHub Actions CI  
- AWS EC2 deployment  
- RDS migration  
- Kubernetes orchestration  

---

# 🛠 Running Locally

1️⃣ Start PostgreSQL  

2️⃣ Start Backend:

npm install  
npm run dev  

3️⃣ Start Frontend:

npm install  
npm run dev  

---

# 🐳 Running via Docker

docker-compose up --build  

---

# 🚀 Future Architectural Evolution

- Microservices architecture  
- Event-driven design  
- API Gateway integration  
- Service mesh (Istio)  
- Blue-Green deployments  

---

# 🏆 Summary

The Three-Tier Architecture ensures:

- Clean separation of concerns  
- Secure system boundaries  
- DevOps-friendly deployment  
- Cloud-native scalability  
- Enterprise-grade maintainability  

It forms the core design philosophy of RUGAYA FILMS.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0f0f0f&height=120&section=footer"/>
</p>
