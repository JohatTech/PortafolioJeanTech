---
id: sirifruit
projectId: sirifruit
title: "SiriFruit: camera-assisted sales and stock capture"
subtitle: "A practical computer-vision workflow for a small frozen-fruit business."
domain: "Small business operations and food retail"
role: "Product engineering across mobile, web, API, and recognition"
stack: ["Flutter", "Next.js", "FastAPI", "OpenCV", "PyTorch", "Supabase"]
impact: "Connects product recognition with reviewable sales, stock, and reporting workflows."
readTime: "3 min read"
date: "2026"
summary:
  speed: "Replaces repeated manual flavor and item entry with a photo-first capture flow."
  accuracy: "Keeps staff in control with confidence-aware suggestions and manual correction."
  compliance: "Stores per-user business records and private package photos with Supabase policies."
---

## 1. The user problem

Small sellers need a quick way to track sales and stock while serving customers. Re-entering product details takes time, and a recognition result that cannot be corrected is not dependable enough for daily records. SiriFruit focuses on frozen fruit treats sold in different flavors and sizes.

## 2. Product workflow

The user opens the camera, frames a package, and receives ranked flavor suggestions. They can confirm or correct the flavor, set quantity and price, and choose whether the item is sold or should be added to stock. Corrected images can be enrolled as new references, giving the recognition catalog a practical feedback loop.

The app also manages the flavor and price catalog, stock actions, bookings, and sales dashboards. Date filters and summaries help the owner review revenue, gross profit, units, and sales by flavor.

## 3. Technical approach

The mobile client is built with Flutter and the web client with Next.js. A FastAPI service preprocesses package photos with OpenCV, extracts a MobileNetV3 visual embedding and an HSV color histogram, then combines their similarities against enrolled references. Low-confidence or closely ranked results stay reviewable by the user.

Supabase provides authentication, Postgres storage, user-scoped row-level security, dashboard RPCs, and private photo storage. This separates image recognition from the operational record and gives the business a consistent data layer across clients.

## 4. Value and scope

SiriFruit connects a concrete AI task to the full business workflow around it: capture, human review, sale or stock entry, and reporting. The product is designed for the realities of a small operation, including Spanish-language use, variable prices, and imperfect recognition.

## 5. Engineering focus

- Multiplatform product delivery across Flutter mobile and Next.js web.
- Human-in-the-loop visual matching rather than an unreviewable prediction.
- Per-user data access, private photos, and reporting built around business records.

