---
id: enterprise-vision-suite
projectId: enterprise-vision-suite
title: "Power Transmission & Energy Infrastructure Inspection Engine"
subtitle: "Real-time edge computer vision, multi-spectral thermal fusion, and 3D catenary clearance analytics."
domain: "Power Transmission & Energy Infrastructure"
role: "Lead Computer Vision & Edge AI Engineer"
stack: ["Python", "PyTorch", "YOLO", "RT-DETR", "OpenCV", "FLIR Atlas SDK", "PyQt5", "Geospatial/GIS"]
impact: "90%+ inspection turnaround reduction (60 min ➔ 5 min)"
readTime: "4 min read"
date: "2024"
summary:
  speed: "Reduced review time from 60 minutes to ~5 minutes per mission."
  accuracy: "Objective two-sigma radiometric anomaly detection and 3D catenary clearance calculations."
  compliance: "Direct generation of auditable client deliverables (Catenary Geometry, Verticality, and Radiometric PDFs)."
---

> **Project Overview Domain:** Power Transmission & Energy Infrastructure
> 
> **Role:** Lead Computer Vision & Edge AI Engineer
> 
> **Stack:** Python · PyTorch · YOLO · RT-DETR · OpenCV · FLIR Atlas SDK · PyQt5 · Geospatial/GIS
> 
> **Impact:** 90%+ inspection turnaround reduction (60 min ➔ 5 min)

---

## 1. Project / Problem

Power transmission operators face severe outage and safety risks from vegetation encroachment, structural degradation, and thermal faults along electrical corridors. Manual aerial inspection required technicians to review hours of multi-spectral video and telemetry, creating operational bottlenecks, high labor costs, delayed maintenance interventions, and subjective defect reporting across hundreds of line kilometers.

## 2. My Role

Designed and developed the end-to-end computer-vision and edge processing pipeline. I led model evaluation and benchmarking across YOLO and RT-DETR architectures, engineered real-time multi-threaded inference routines, implemented spatial and radiometric data fusion, and built the automated integration service that converted raw detections into auditable engineering deliverables.

## 3. Technical Approach

Developed a modular Python and PyTorch inspection platform integrating multi-sensor computer vision. High-resolution RGB video and radiometric thermal feeds are processed concurrently via multi-threaded inference engines, evaluating YOLO and RT-DETR models for asset localization, structural damage, and hotspot identification. Point clouds and spatial coordinates were analyzed to compute 3D catenary clearances, identifying vegetation encroachment relative to electrical corridors.

Radiometric frames were captured through an asynchronous socket bridge to the FLIR Atlas SDK. Thermal anomalies were classified dynamically using a two-sigma statistical dispersion model calibrated against live ambient weather and GPS telemetry. To sustain real-time edge performance without frame dropping, image persistence and geospatial logging were decoupled into background worker queues. An automated reporting engine then synthesized detections into georeferenced spreadsheets and standardized inspection PDFs.

## 4. Results

The pipeline fully automated asset detection, thermal anomaly classification, and corridor safety analysis. Video and flight sensor review times dropped from sixty minutes to approximately five minutes per mission—an over 90% reduction in processing turnaround. The system generated compliant, auditable deliverables including georeferenced clearance catalogs, pole verticality assessments, and radiometric reports, significantly mitigating grid failure risks and field technician hazards.

---

> 🎯 **Executive Summary of Value:**
> 
> - **Speed:** Reduced review time from 60 minutes to ~5 minutes per mission.
> - **Accuracy:** Objective two-sigma radiometric anomaly detection and 3D catenary clearance calculations.
> - **Compliance:** Direct generation of auditable client deliverables (Catenary Geometry, Verticality, and Radiometric PDFs).
