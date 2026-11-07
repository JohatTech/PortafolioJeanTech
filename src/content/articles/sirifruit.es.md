---
id: sirifruit
projectId: sirifruit
title: "SiriFruit: registro de ventas e inventario asistido por cámara"
subtitle: "Un flujo práctico de visión computacional para un pequeño negocio de helados de fruta."
domain: "Operaciones de pequeños negocios y venta de alimentos"
role: "Ingeniería de producto en móvil, web, API y reconocimiento"
stack: ["Flutter", "Next.js", "FastAPI", "OpenCV", "PyTorch", "Supabase"]
impact: "Conecta el reconocimiento de productos con flujos revisables de ventas, inventario e informes."
readTime: "3 min de lectura"
date: "2026"
summary:
  speed: "Sustituye el ingreso repetido de sabores y productos por un flujo de captura con fotos."
  accuracy: "Mantiene el control en manos del usuario con sugerencias según confianza y corrección manual."
  compliance: "Guarda registros por usuario y fotos privadas de empaques con políticas de Supabase."
---

## 1. La necesidad del usuario

Los pequeños vendedores necesitan registrar ventas e inventario con rapidez mientras atienden a sus clientes. Reingresar los datos de cada producto toma tiempo, y un resultado de reconocimiento que no puede corregirse no es confiable para el trabajo diario. SiriFruit se enfoca en helados de fruta congelados que se venden en distintos sabores y tamaños.

## 2. Flujo del producto

El usuario abre la cámara, encuadra un empaque y recibe sugerencias ordenadas de sabores. Puede confirmar o corregir el sabor, indicar cantidad y precio, y elegir si el producto se vendió o debe agregarse al inventario. Las imágenes corregidas pueden incorporarse como nuevas referencias, creando un ciclo práctico de mejora del catálogo visual.

La aplicación también administra el catálogo de sabores y precios, acciones de inventario, reservas y paneles de ventas. Los filtros por fecha y los resúmenes ayudan a revisar ingresos, ganancia bruta, unidades y ventas por sabor.

## 3. Enfoque técnico

El cliente móvil usa Flutter y el cliente web Next.js. Un servicio FastAPI procesa las fotos de empaques con OpenCV, extrae embeddings visuales de MobileNetV3 y un histograma de color HSV, y combina sus similitudes frente a referencias registradas. Los resultados con baja confianza o poca diferencia entre opciones pueden revisarse por el usuario.

Supabase proporciona autenticación, almacenamiento en Postgres, seguridad de filas por usuario, funciones RPC para los paneles y almacenamiento privado de fotos. Así el reconocimiento permanece separado del registro operativo y ambos clientes comparten una misma capa de datos.

## 4. Valor y alcance

SiriFruit conecta una tarea concreta de IA con todo el flujo del negocio: captura, revisión humana, registro de venta o inventario e informes. Está diseñado para las condiciones de una operación pequeña, incluido el uso en español, precios variables y reconocimiento imperfecto.

## 5. Enfoque de ingeniería

- Producto multiplataforma con Flutter móvil y Next.js web.
- Comparación visual con intervención humana, en lugar de una predicción imposible de revisar.
- Acceso a datos por usuario, fotos privadas e informes vinculados a los registros del negocio.

