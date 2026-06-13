# ENG240 Developers Website — Implementation Plan

## Tech Stack

### Frontend

* Next.js 16 (App Router)
* TypeScript
* Tailwind CSS
* shadcn/ui
* Framer Motion

### Backend

* Next.js Server Actions
* Next.js Route Handlers

### Database

* [Neon](https://neon.tech?utm_source=chatgpt.com) (PostgreSQL)

### ORM

* [Drizzle ORM](https://orm.drizzle.team?utm_source=chatgpt.com)

### Authentication

* [Better Auth](https://www.better-auth.com?utm_source=chatgpt.com)

### File Storage

* [UploadThing](https://uploadthing.com?utm_source=chatgpt.com)
  or
* [Cloudinary](https://cloudinary.com?utm_source=chatgpt.com)

### Hosting

* [Vercel](https://vercel.com?utm_source=chatgpt.com)

---

# Phase 1 — Foundation

## Goal

Get authentication, database, and core layout working.

### Tasks

### 1. Create Project

```bash
npx create-next-app@latest eng240-developers
```

### 2. Configure

```bash
npm install drizzle-orm
npm install drizzle-kit
npm install postgres
npm install better-auth
npm install zod
npm install react-hook-form
npm install uploadthing
```

### 3. Setup Neon

Create:

```env
DATABASE_URL=
```

### 4. Setup Better Auth

Features:

* Email Login
* Google Login
* Session Management
* Role-based access

Roles:

```txt
Admin
Executive
Member
Visitor
```

### Deliverables

* Login
* Register
* Protected routes
* Role system

---

# Phase 2 — Database Design

## Users

```txt
id
name
email
image
role
department
level
bio
skills
github
linkedin
created_at
```

---

## Projects

```txt
id
title
slug
description
thumbnail
github_url
demo_url
status
created_by
created_at
```

Status:

```txt
Planning
In Progress
Completed
Archived
```

---

## Project Members

```txt
id
project_id
user_id
role
```

---

## Events

```txt
id
title
description
location
date
banner
created_at
```

---

## Blog Posts

```txt
id
title
slug
content
cover_image
author_id
published
created_at
```

---

## Gallery

```txt
id
title
image_url
event_id
uploaded_by
```

---

## Resources

```txt
id
title
description
category
link
uploaded_by
```

Categories:

```txt
Frontend
Backend
AI
Robotics
Mobile
DevOps
```

---

# Phase 3 — Public Website

## Home

### Sections

Hero

Statistics

Upcoming Event

Featured Projects

Leadership Preview

Latest Blog Posts

Join Community CTA

---

## About

Sections:

* History
* Mission
* Vision
* Core Values

---

## Team

Display:

* Executives
* Members

Filters:

* Frontend
* Backend
* AI
* Mobile
* Robotics

---

## Projects

Features:

* Search
* Filtering
* Project Details

Dynamic route:

```txt
/projects/[slug]
```

---

## Events

Features:

* Upcoming
* Past Events

Dynamic route:

```txt
/events/[id]
```

---

## Blog

Dynamic route:

```txt
/blog/[slug]
```

---

## Gallery

Grid layout

Lightbox viewer

---

# Phase 4 — Member Portal

Protected Area

```txt
/dashboard
```

---

## Dashboard Home

Display:

* Current Projects
* Upcoming Events
* Announcements

---

## Profile

Members can update:

* Bio
* Skills
* Social Links
* Profile Picture

---

## Project Participation

Members can:

* Join Projects
* Leave Projects
* Track Progress

---

## Resource Library

Members can:

* Upload Resources
* Download Resources

---

# Phase 5 — Admin Dashboard

Route:

```txt
/admin
```

Only:

```txt
Admin
Executive
```

Access allowed.

---

## User Management

Features:

* View Users
* Change Roles
* Suspend Users

---

## Event Management

Create Event

Edit Event

Delete Event

---

## Blog Management

Create Post

Edit Post

Delete Post

Publish Post

---

## Gallery Management

Upload Photos

Delete Photos

Manage Albums

---

## Project Management

Create Projects

Assign Members

Update Status

Archive Projects

---

# Phase 6 — Community Features

## Announcements

Table:

```txt
id
title
content
priority
created_at
```

Shown on dashboard.

---

## Project Recruitment

Example:

```txt
Need:
- 2 Frontend Developers
- 1 UI Designer
```

Members can apply.

---

## Skill Endorsements

Members can endorse skills:

```txt
JavaScript
React
Python
UI/UX
```

---

# Phase 7 — SEO & Performance

### Metadata

Every page:

```ts
export const metadata = {
  title: "...",
  description: "...",
};
```

### Open Graph

### Twitter Cards

### Sitemap

### Robots.txt

### Structured Data

---

# Recommended Folder Structure

```txt
src/
│
├── app/
│   ├── (public)
│   ├── dashboard
│   ├── admin
│   ├── api
│   └── auth
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
├── hooks/
│
├── actions/
│
└── types/
```

# Development Roadmap

### Week 1

* Next.js setup
* Neon setup
* Drizzle setup
* Better Auth setup

### Week 2

* Database schema
* Public pages
* Responsive layout

### Week 3

* Projects system
* Events system
* Blog system

### Week 4

* Member dashboard
* Profile management

### Week 5

* Admin dashboard
* Role permissions

### Week 6

* Testing
* SEO
* Deployment

By the end of Week 6, ENG240 Developers will have a production-ready platform with authentication, member management, project showcases, events, blogging, and an admin portal that can scale as the faculty programming community grows.
