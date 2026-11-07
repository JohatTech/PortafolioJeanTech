---
id: enterprise-vision-suite
projectId: enterprise-vision-suite
title: "Motor de Inspección de Infraestructura Energética y Redes de Transmisión"
subtitle: "Visión computacional en el edge en tiempo real, fusión térmica multi-espectral y analítica espacial de catenaria 3D."
domain: "Transmisión Eléctrica e Infraestructura Energética"
role: "Ingeniero Líder de Visión Computacional e IA Edge"
stack: ["Python", "PyTorch", "YOLO", "RT-DETR", "OpenCV", "FLIR Atlas SDK", "PyQt5", "Geospatial/GIS"]
impact: "Un flujo más consistente para la inspección y revisión aérea de redes eléctricas."
readTime: "4 min de lectura"
date: "2024"
summary:
  speed: "Automatiza pasos de procesamiento de imágenes y telemetría dentro del flujo de inspección."
  accuracy: "Utiliza umbrales estadísticos para señalar posibles anomalías térmicas para revisión técnica."
  compliance: "Produce informes estructurados y resultados georreferenciados para revisión."
---

> **Project Overview Domain:** Transmisión Eléctrica e Infraestructura Energética
> 
> **Role:** Ingeniero Líder de Visión Computacional e IA Edge
> 
> **Stack:** Python · PyTorch · YOLO · RT-DETR · OpenCV · FLIR Atlas SDK · PyQt5 · Geospatial/GIS
> 
> **Valor del proyecto:** Un flujo más consistente para la inspección y revisión aérea de redes eléctricas.

---

## 1. Proyecto / Problema

Los operadores de transmisión eléctrica se enfrentan a graves riesgos de cortes y seguridad provocados por invasión de vegetación, degradación estructural y fallas térmicas a lo largo de los corredores eléctricos. La inspección aérea manual requería que los técnicos revisaran horas de video multi-espectral y telemetría, creando cuellos de botella operativos, altos costos laborales, retrasos en intervenciones de mantenimiento y reportes de defectos subjetivos en cientos de kilómetros de líneas.

## 2. Mi Rol

Diseñé y desarrollé el pipeline integral de visión computacional y procesamiento en el edge. Lideré la evaluación y benchmarking de modelos en arquitecturas YOLO y RT-DETR, diseñé rutinas de inferencia multi-hilo en tiempo real, implementé la fusión de datos espaciales y radiométricos, y construí el servicio de integración automatizado que convirtió detecciones brutas en entregables de ingeniería auditables.

## 3. Enfoque Técnico

Desarrollé una plataforma modular de inspección en Python y PyTorch que integra visión computacional multi-sensor. Las secuencias de video RGB de alta resolución y las transmisiones térmicas radiométricas se procesan de manera concurrente mediante motores de inferencia multi-hilo, evaluando modelos YOLO y RT-DETR para localización de activos, daños estructurales e identificación de puntos calientes. Se analizaron nubes de puntos y coordenadas espaciales para calcular distancias de catenaria en 3D, identificando riesgos de invasión de vegetación con respecto a los corredores eléctricos.

Los fotogramas radiométricos se capturaron a través de un puente de sockets asíncrono con el SDK FLIR Atlas. Las anomalías térmicas se clasificaron dinámicamente mediante un modelo de dispersión estadística de dos sigmas calibrado contra telemetría ambiental y GPS en vivo. Para mantener un rendimiento en tiempo real en el edge sin pérdida de fotogramas, la persistencia de imágenes y el registro geoespacial se desacoplaron en colas de trabajadores en segundo plano. Un motor de reportes automatizado sintetizó las detecciones en hojas de cálculo georreferenciadas y reportes de inspección en PDF estandarizados.

## 4. Resultados

El pipeline reúne la localización de activos, la revisión térmica y el análisis de corredores en un flujo de inspección conectado. Produce resultados estructurados, incluidos catálogos georreferenciados de holgura, evaluaciones de verticalidad de postes e informes radiométricos para revisión técnica. El sistema busca ayudar a los equipos de inspección a revisar los datos de campo con mayor consistencia y preparar el trabajo de seguimiento.

---

> 🎯 **Executive Summary of Value:**
> 
> - **Flujo:** Conecta inspección visual, revisión térmica y análisis geoespacial.
> - **Revisión:** Señala posibles anomalías y preocupaciones de holgura para evaluación técnica.
> - **Entregables:** Produce informes estructurados y resultados georreferenciados.
