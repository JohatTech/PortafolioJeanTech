---
id: enterprise-vision-suite
projectId: enterprise-vision-suite
title: "Motor de Inspección de Infraestructura Energética y Redes de Transmisión"
subtitle: "Visión computacional en el edge en tiempo real, fusión térmica multi-espectral y analítica espacial de catenaria 3D."
domain: "Transmisión Eléctrica e Infraestructura Energética"
role: "Ingeniero Líder de Visión Computacional e IA Edge"
stack: ["Python", "PyTorch", "YOLO", "RT-DETR", "OpenCV", "FLIR Atlas SDK", "PyQt5", "Geospatial/GIS"]
impact: "Reducción del 90%+ en tiempo de inspección (60 min ➔ 5 min)"
readTime: "4 min de lectura"
date: "2024"
summary:
  speed: "Reducción del tiempo de revisión de 60 minutos a ~5 minutos por misión."
  accuracy: "Detección objetiva de anomalías radiométricas de dos sigmas y cálculo de holgura de catenaria 3D."
  compliance: "Generación directa de entregables auditables para clientes (Geometría de Catenaria, Verticalidad y PDFs Radiométricos)."
---

> **Project Overview Domain:** Transmisión Eléctrica e Infraestructura Energética
> 
> **Role:** Ingeniero Líder de Visión Computacional e IA Edge
> 
> **Stack:** Python · PyTorch · YOLO · RT-DETR · OpenCV · FLIR Atlas SDK · PyQt5 · Geospatial/GIS
> 
> **Impact:** Reducción del 90%+ en tiempo de inspección (60 min ➔ 5 min)

---

## 1. Proyecto / Problema

Los operadores de transmisión eléctrica se enfrentan a graves riesgos de cortes y seguridad provocados por invasión de vegetación, degradación estructural y fallas térmicas a lo largo de los corredores eléctricos. La inspección aérea manual requería que los técnicos revisaran horas de video multi-espectral y telemetría, creando cuellos de botella operativos, altos costos laborales, retrasos en intervenciones de mantenimiento y reportes de defectos subjetivos en cientos de kilómetros de líneas.

## 2. Mi Rol

Diseñé y desarrollé el pipeline integral de visión computacional y procesamiento en el edge. Lideré la evaluación y benchmarking de modelos en arquitecturas YOLO y RT-DETR, diseñé rutinas de inferencia multi-hilo en tiempo real, implementé la fusión de datos espaciales y radiométricos, y construí el servicio de integración automatizado que convirtió detecciones brutas en entregables de ingeniería auditables.

## 3. Enfoque Técnico

Desarrollé una plataforma modular de inspección en Python y PyTorch que integra visión computacional multi-sensor. Las secuencias de video RGB de alta resolución y las transmisiones térmicas radiométricas se procesan de manera concurrente mediante motores de inferencia multi-hilo, evaluando modelos YOLO y RT-DETR para localización de activos, daños estructurales e identificación de puntos calientes. Se analizaron nubes de puntos y coordenadas espaciales para calcular distancias de catenaria en 3D, identificando riesgos de invasión de vegetación con respecto a los corredores eléctricos.

Los fotogramas radiométricos se capturaron a través de un puente de sockets asíncrono con el SDK FLIR Atlas. Las anomalías térmicas se clasificaron dinámicamente mediante un modelo de dispersión estadística de dos sigmas calibrado contra telemetría ambiental y GPS en vivo. Para mantener un rendimiento en tiempo real en el edge sin pérdida de fotogramas, la persistencia de imágenes y el registro geoespacial se desacoplaron en colas de trabajadores en segundo plano. Un motor de reportes automatizado sintetizó las detecciones en hojas de cálculo georreferenciadas y reportes de inspección en PDF estandarizados.

## 4. Resultados

El pipeline automatizó por completo la detección de activos, la clasificación de anomalías térmicas y el análisis de seguridad de corredores. Los tiempos de revisión de video y sensores de vuelo se redujeron de sesenta minutos a aproximadamente cinco minutos por misión: una disminución superior al 90% en el tiempo de procesamiento. El sistema generó entregables conformes y auditables, incluyendo catálogos de distancias georreferenciados, evaluaciones de verticalidad de postes e informes radiométricos, mitigando significativamente los riesgos de fallas en la red y la exposición al peligro de los técnicos en campo.

---

> 🎯 **Executive Summary of Value:**
> 
> - **Speed:** Reducción del tiempo de revisión de 60 minutos a ~5 minutos por misión.
> - **Accuracy:** Detección objetiva de anomalías radiométricas de dos sigmas y cálculo de holgura de catenaria 3D.
> - **Compliance:** Generación directa de entregables auditables para clientes (Geometría de Catenaria, Verticalidad y PDFs Radiométricos).
