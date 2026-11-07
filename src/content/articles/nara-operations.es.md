---
id: nara-operations
projectId: nara-operations
title: "Nara: espacio de operaciones para propietarios de alojamientos"
subtitle: "Un espacio privado para reservas, operaciones de propiedades y registros financieros."
domain: "Operaciones de alquileres de corta estancia"
role: "Ingeniería de producto con Flutter, FastAPI y Supabase"
stack: ["Flutter", "Dart", "FastAPI", "Python", "Supabase", "PostgreSQL"]
impact: "Reúne los flujos de reservas, huéspedes, pagos, gastos e insumos en un solo espacio."
readTime: "3 min de lectura"
date: "2026"
summary:
  speed: "Un panel compartido y acciones rápidas mantienen juntos los flujos habituales de cada propiedad."
  accuracy: "Las reglas del servidor y la base de datos validan fechas, saldos y cambios de inventario."
  compliance: "El acceso autenticado del propietario y las políticas de base de datos protegen los registros privados."
---

## 1. La necesidad del usuario

Los propietarios independientes de alojamientos suelen coordinar calendarios, datos de huéspedes, pagos, gastos e insumos en herramientas separadas. Nara reúne estas tareas recurrentes en un panel privado organizado alrededor de las propiedades del propietario.

## 2. Flujo del producto

Los propietarios pueden administrar propiedades, huéspedes, reservas, pagos, gastos e inventario de insumos, y luego revisar resúmenes y vistas de calendario. Las guías para cuentas nuevas y las acciones en estados vacíos ayudan a crear los registros que necesita una reserva o un artículo de inventario.

Las reservas se pueden exportar como una fuente iCalendar. Cuando se configuran credenciales de calendario, el backend también puede sincronizar las reservas con Google Calendar. Así la integración es opcional y sus requisitos de configuración quedan claros.

## 3. Enfoque técnico

El cliente es una aplicación Flutter para web y móvil. Un servicio FastAPI en Python gestiona las API operativas, mientras Supabase Auth y Postgres proporcionan identidad y persistencia. El backend valida que la salida ocurra después de la llegada y convierte conflictos de base de datos en errores útiles para las reservas.

El registro de pagos está limitado al monto de la reserva. Los ajustes de inventario son atómicos, rechazan existencias negativas, conservan el historial de movimientos y pueden registrar los costos de reposición como gastos. Estas reglas mantienen las invariantes importantes cerca de los datos que protegen.

## 4. Valor y alcance

Nara es una aplicación de negocio full-stack y no solo una pantalla de panel: su valor proviene de conectar los registros diarios con validaciones, resúmenes y flujos de calendario. El modelo privado por propietario resulta útil para operadores individuales que necesitan una vista coherente de cada propiedad.

## 5. Enfoque de ingeniería

- Aplicación Flutter multiplataforma respaldada por un servicio FastAPI propio.
- Reglas explícitas para conflictos de reservas, límites de pago y movimientos de inventario.
- Exportación y sincronización opcional de calendario junto con los flujos centrales de propiedades.

