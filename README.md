#  Research Grant Radar

> A centralized intelligence platform that aggregates, organizes, and tracks research funding opportunities across India, helping researchers discover grants faster and avoid missed opportunities.

<p align="center">
  <strong>Next.js • TypeScript • Supabase • Tailwind CSS • Vercel</strong>
</p>

<p align="center">
  <strong>66+ Grants Indexed • 15 Funding Agencies • Daily Verification • Real-Time Search & Filtering</strong>
</p>

---

##  Overview

Research funding opportunities in India are fragmented across government ministries, research councils, public sector organizations, CSR initiatives, and philanthropic foundations. Each organization publishes opportunities independently, often using different formats, update cycles, and communication channels.

As a result, researchers, universities, startups, and NGOs spend significant time manually monitoring multiple websites and frequently miss opportunities due to scattered information and changing deadlines.

**Research Grant Radar** solves this problem by providing a single searchable platform that consolidates research funding opportunities from multiple sources into one unified dashboard.

Every grant listing is linked directly to its official source, ensuring transparency, credibility, and easy verification.

---

##  Problem Statement

During my internship at **CSIR-CSIO**, I observed that researchers often had to:

* Visit numerous agency websites regularly
* Track funding calls manually
* Monitor deadline extensions
* Search through PDFs and announcements
* Maintain their own funding spreadsheets

The lack of a centralized discovery platform created inefficiencies and increased the likelihood of missing relevant funding opportunities.

Research Grant Radar was built to eliminate this friction.

---

##  Solution

Research Grant Radar acts as a centralized funding intelligence layer by:

* Aggregating grant opportunities from multiple agencies
* Storing structured grant data in Supabase
* Providing powerful search and filtering capabilities
* Tracking application status and deadlines
* Linking users directly to official funding sources
* Presenting opportunities through a clean and responsive interface

The result is a significantly faster and more reliable grant discovery experience.

---

## 📈 Impact

| Metric                   | Value                      |
| ------------------------ | -------------------------- |
| Grants Indexed           | 66+                        |
| Funding Agencies Tracked | 15                         |
| Data Source Categories   | Government + Philanthropic |
| Status Monitoring        | Open, Closing Soon, Closed |
| Verification             | Official Source Linked     |
| Database                 | Supabase                   |
| Deployment               | Vercel                     |

---

##  Key Features

###  Intelligent Search

Search funding opportunities using:

* Grant name
* Scheme title
* Agency name
* Focus area
* Research keywords

---

###  Advanced Filtering

Filter grants by:

* Funding agency
* Grant status
* Research domain

allowing users to quickly narrow down relevant opportunities.

---

### 📊 Live Dashboard Analytics

Real-time dashboard metrics include:

* Total grants indexed
* Open opportunities
* Grants closing soon
* Number of agencies monitored

---

### ⏳ Deadline Visibility

Grant statuses are automatically categorized into:

* 🟢 Open
* 🔴 Closed

making critical deadlines immediately visible.

---

### 🔗 Direct Source Verification

Every grant record includes:

* Official program website
* Application portal

ensuring complete transparency and traceability.

---

###  Responsive Experience

Fully optimized for:

* Desktop
* Tablet


---

##  Agencies Covered

### Government & Research Organizations

* ANRF
* DBT
* DST
* DSIR
* BIRAC
* CSIR
* ICMR
* ICAR
* MeitY
* MNRE

### Philanthropic & Foundation Sources

* Tata Trusts
* Azim Premji Foundation
* Wipro Foundation
* United Way India
* Nudge Institute

and additional funding organizations.

---

##  System Architecture

```text
                      ┌─────────────────────┐
                      │      End Users      │
                      │ Researchers/NGOs    │
                      │ Universities        │
                      └──────────┬──────────┘
                                 │
                                 ▼
                   ┌─────────────────────────┐
                   │     Next.js Frontend    │
                   │  Search & Visualization │
                   └──────────┬──────────────┘
                              │
                              ▼
                   ┌─────────────────────────┐
                   │        Supabase         │
                   │ Grant Data Repository   │
                   └──────────┬──────────────┘
                              │
                              ▼
                 ┌─────────────────────────────┐
                 │ Government & Foundation     │
                 │ Funding Sources             │
                 └─────────────────────────────┘
```

---

## ⚙️ Technical Architecture

### Frontend

* Next.js 15 (App Router)
* React
* TypeScript
* Tailwind CSS

### Backend & Data Layer

* Supabase

  * Structured grant storage
  * Query management
  * Data persistence
  * Fast retrieval

### Deployment

* Vercel

### Tooling

* ESLint
* PostCSS

---

##  Project Structure

```text
Research-Grant-Radar
│
├── app
│   ├── about
│   │   └── page.tsx
│   ├── contact
│   │   └── page.tsx
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components
│   ├── DashboardStats.tsx
│   ├── GrantTable.tsx
│   └── Footer.tsx
│
├── lib
├── public
│
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── postcss.config.mjs
```

---

## 🚧 Engineering Challenges & Solutions

### Challenge 1 — Fragmented Funding Ecosystem

Research grants are distributed across numerous agencies with different publishing formats.

**Solution**

Designed a unified grant representation model that standardizes opportunities from multiple sources into a consistent format.

---

### Challenge 2 — Discoverability

Researchers often struggle to locate opportunities relevant to their domain.

**Solution**

Implemented keyword-based search and filtering capabilities for rapid grant discovery.

---

### Challenge 3 — Deadline Awareness

Many opportunities are missed because deadline changes go unnoticed.

**Solution**

Built status indicators and deadline tracking mechanisms that immediately highlight active and closing opportunities.

---

### Challenge 4 — Data Organization

Managing grants from multiple organizations requires structured storage and efficient retrieval.

**Solution**

Utilized Supabase as a centralized database layer to store, query, and organize grant records consistently.

---

## 🧠 What This Project Demonstrates

This project showcases:

### Software Engineering

* Modern React development
* Next.js App Router architecture
* TypeScript best practices
* Component-driven design

### Database Engineering

* Relational data modeling
* Supabase integration
* Query optimization
* Data organization

### Product Thinking

* User-centered design
* Information architecture
* Search experience design
* Dashboard analytics

### Problem Solving

* Data aggregation
* Research ecosystem understanding
* Workflow simplification
* Real-world impact

---

## 🔮 Future Roadmap

### Phase 1

* Email notifications
* Deadline reminders
* Saved searches

### Phase 2

* User authentication
* Personalized dashboards
* Research-interest subscriptions

### Phase 3

* AI-powered grant recommendations
* Funding trend analytics
* Public API
* Institution-level dashboards

---

## 🛠 Local Development

### Clone Repository

```bash
git clone https://github.com/thekavyaasharma/Research-Grant-Radar.git

cd Research-Grant-Radar
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🌐 Live Demo

https://research-grant-radar.vercel.app/

---

##  Repository

https://github.com/thekavyaasharma/Research-Grant-Radar

---

## Developer

### Kavya Sharma

Final-Year B.Tech, Computer Science Engineering
Rayat Bahra University, Mohali

Built during an internship at **CSIR-CSIO** under the guidance of:

**Dr. V. D. Shivling**
Chief Scientist, CSIR-CSIO

---

##  Why This Project Matters

Research Grant Radar is more than a dashboard.

It addresses a genuine information-discovery challenge faced by researchers, institutions, startups, and NGOs across India by transforming fragmented funding information into a structured, searchable, and accessible platform.

The project demonstrates the ability to identify a real-world problem, design a scalable solution, and deliver a production-ready application using modern web technologies.

---

## 📄 License

MIT License

---

<p align="center">
  Built to make research funding opportunities more accessible, discoverable, and transparent.
</p>
