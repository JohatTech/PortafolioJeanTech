---
id: nara-operations
projectId: nara-operations
title: "Nara: a focused operations workspace for rental owners"
subtitle: "One private workspace for reservations, property operations, and financial records."
domain: "Short-term rental operations"
role: "Product engineering across Flutter, FastAPI, and Supabase"
stack: ["Flutter", "Dart", "FastAPI", "Python", "Supabase", "PostgreSQL"]
impact: "Brings booking, guest, payment, expense, and supply workflows into one workspace."
readTime: "3 min read"
date: "2026"
summary:
  speed: "A shared dashboard and quick-entry actions keep common property workflows close together."
  accuracy: "Server and database rules validate reservation dates, payment balances, and stock changes."
  compliance: "Authenticated owner access and database policies protect private operational records."
---

## 1. The user problem

Independent rental owners often coordinate calendars, guest details, payments, expenses, and supplies across separate tools. Nara brings these recurring tasks into a private dashboard organized around the owner's properties.

## 2. Product workflow

Owners can manage properties, guests, reservations, payments, expenses, and supply inventory, then review dashboard summaries and calendar views. New-account guidance and empty-state actions help the owner set up the records a reservation or stock item depends on.

Reservations can be exported as an iCalendar feed. When calendar credentials are configured, the backend can also synchronize bookings with Google Calendar. This keeps the calendar integration optional and makes its setup requirements explicit.

## 3. Technical approach

The client is a Flutter application that targets web and mobile. A Python FastAPI service handles operational APIs, while Supabase Auth and Postgres provide identity and persistence. The backend validates that checkout follows check-in and translates database conflicts into useful booking errors.

Payment recording is bounded by the reservation amount. Inventory adjustments are atomic, reject negative stock, preserve movement history, and can record replenishment costs as expenses. These rules keep important business invariants close to the data they protect.

## 4. Value and scope

Nara is a full-stack business application rather than a single dashboard screen: its value comes from connecting day-to-day records with validation, summaries, and calendar workflows. The private owner model suits individual operators who want a consistent view of each property.

## 5. Engineering focus

- Cross-platform Flutter delivery backed by a purpose-built FastAPI service.
- Explicit business rules for booking conflicts, payment limits, and inventory movements.
- Optional calendar export and synchronization alongside core property workflows.

