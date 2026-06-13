# ENG240 Developers

Official website and community platform for **ENG240 Developers** — a programming community dedicated to empowering engineering students through software development, collaboration, innovation, and continuous learning.

## Overview

ENG240 Developers serves as a central hub for members to:

* Showcase projects
* Discover learning resources
* Participate in events and workshops
* Connect with fellow developers
* Share technical articles
* Build engineering-focused software solutions

The platform is designed to support both community engagement and project collaboration while providing a professional online presence for the group.

---

## Features

### Public Website

* Modern responsive design
* Community introduction
* Leadership and member showcase
* Project portfolio
* Events and workshops
* Blog and technical articles
* Photo gallery
* Contact and membership information

### Member Portal

* Secure authentication
* Member profiles
* Skills and interests management
* Project participation tracking
* Resource access
* Community announcements

### Admin Dashboard

* User management
* Role management
* Project management
* Event management
* Blog management
* Gallery management
* Content moderation

---

## Technology Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui
* Framer Motion

### Backend

* Next.js Server Actions
* Next.js Route Handlers

### Database

* Neon PostgreSQL
* Drizzle ORM

### Authentication

* Better Auth

### Storage

* UploadThing / Cloudinary

### Deployment

* Vercel

---

## Project Goals

The primary objectives of the platform are:

* Foster software development culture among engineering students
* Encourage collaboration on real-world projects
* Create a portfolio platform for members
* Provide access to learning resources
* Promote innovation and technical excellence
* Connect students with opportunities and events

---

## Core Modules

### Authentication

* Email authentication
* Social login support
* Session management
* Role-based access control

### Projects

Members can:

* Create projects
* Join project teams
* Track project progress
* Showcase completed work

### Events

* Workshops
* Hackathons
* Technical seminars
* Community meetups

### Blog

* Technical tutorials
* Engineering articles
* Community updates
* Development insights

### Resources

* Frontend development
* Backend development
* Artificial Intelligence
* Robotics
* Embedded Systems
* Career resources

---

## User Roles

### Visitor

Can:

* Browse public content
* View projects
* Read articles
* View events

### Member

Can:

* Access dashboard
* Manage profile
* Participate in projects
* Access member resources

### Executive

Can:

* Manage community content
* Create events
* Publish announcements

### Administrator

Full platform access including:

* User management
* Role management
* System administration

---

## Project Structure

```text
src/
│
├── app/
│   ├── (public)
│   ├── dashboard
│   ├── admin
│   ├── auth
│   └── api
│
├── components/
│   ├── ui
│   ├── layouts
│   ├── dashboard
│   └── admin
│
├── db/
│   ├── schema
│   ├── migrations
│   └── index.ts
│
├── lib/
│   ├── auth
│   ├── validators
│   └── utils
│
├── actions/
│
├── hooks/
│
└── types/
```

---

## Development Setup

### Clone Repository

```bash
git clone https://github.com/your-username/eng240-developers.git

cd eng240-developers
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file:

```env
DATABASE_URL=

BETTER_AUTH_SECRET=
BETTER_AUTH_URL=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

UPLOADTHING_TOKEN=
```

### Run Development Server

```bash
npm run dev
```

Visit:

```text
http://localhost:3000
```

---

## Future Roadmap

### Version 1.0

* Community website
* Authentication
* Projects showcase
* Events management
* Blog platform

### Version 2.0

* Member collaboration tools
* Team formation system
* Internal messaging
* Project recruitment board

### Version 3.0

* Coding challenges
* Certificate generation
* AI-powered community assistant
* Learning management system

---

## Contributing

Contributions are welcome from members of ENG240 Developers.

To contribute:

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Open a pull request

All contributions should follow established coding standards and project guidelines.

---

## Vision

> To build a thriving community of engineering students who leverage software development to solve real-world problems, drive innovation, and create meaningful technological impact.

---

## License

This project is licensed under the MIT License.

---

**ENG240 Developers**
*Building the next generation of engineers through code.* 🚀
