# Sistema de Gestión de Salud - TODO

## Base de Datos y Backend
- [x] Diseñar esquema de base de datos (pacientes, registros, seguimientos, medicación, archivos)
- [x] Implementar modelos Drizzle ORM
- [x] Crear procedimientos tRPC para CRUD de pacientes
- [x] Crear procedimientos tRPC para registros iniciales
- [x] Crear procedimientos tRPC para seguimientos clínicos
- [x] Crear procedimientos tRPC para gestión de medicación
- [x] Implementar búsqueda y filtrado de pacientes
- [x] Crear procedimientos para obtener estadísticas del dashboard
- [ ] Implementar sistema de alertas por email
- [ ] Integrar generación de reportes con IA (LLM)
- [ ] Configurar almacenamiento seguro de archivos (S3)
- [ ] Crear procedimientos para carga y descarga de archivos médicos

## Frontend - Autenticación y Navegación
- [x] Configurar autenticación OAuth con Manus
- [x] Crear DashboardLayout con navegación lateral
- [x] Implementar menú de navegación principal
- [ ] Crear página de perfil de usuario

## Frontend - Dashboard
- [x] Crear dashboard principal con estadísticas
- [x] Mostrar resumen de pacientes activos
- [x] Mostrar seguimientos pendientes
- [x] Mostrar estadísticas generales
- [ ] Implementar gráficos y visualizaciones

## Frontend - Gestión de Pacientes
- [x] Crear página de listado de pacientes
- [x] Implementar búsqueda y filtrado de pacientes
- [x] Crear formulario de registro de nuevo paciente
- [x] Crear página de detalle de paciente
- [ ] Implementar edición de datos demográficos
- [x] Mostrar historial completo del paciente

## Frontend - Registros Iniciales
- [x] Crear formulario de registro inicial
- [x] Capturar datos demográficos
- [x] Capturar historial médico
- [x] Capturar motivo de consulta
- [x] Validar y guardar registros

## Frontend - Seguimientos Clínicos
- [x] Crear formulario de seguimiento
- [x] Capturar evolución del paciente
- [x] Capturar observaciones clínicas
- [x] Registrar fechas de consulta
- [x] Mostrar cronología de seguimientos

## Frontend - Gestión de Medicación
- [x] Crear formulario de pauta de medicación
- [x] Capturar dosificación
- [x] Capturar frecuencia
- [x] Capturar duración
- [x] Capturar notas especiales
- [x] Mostrar listado de medicaciones activas

## Frontend - Archivos Médicos
- [x] Crear interfaz de carga de archivos
- [x] Permitir carga de imágenes médicas
- [x] Permitir carga de análisis de laboratorio
- [x] Permitir carga de documentos adjuntos
- [x] Mostrar galería de archivos por paciente
- [ ] Implementar descarga segura de archivos

## Frontend - Reportes y Alertas
- [x] Crear página de reportes
- [x] Implementar generación de resúmenes clínicos con IA
- [x] Implementar generación de reportes médicos con IA
- [x] Crear interfaz de alertas
- [ ] Mostrar notificaciones de nuevos pacientes
- [ ] Mostrar alertas de medicación vencida
- [ ] Mostrar alertas de seguimientos pendientes

## Pruebas y Optimización
- [x] Escribir pruebas unitarias para procedimientos tRPC
- [x] Escribir pruebas de integración
- [x] Optimizar rendimiento de consultas
- [x] Validar seguridad de datos
- [ ] Pruebas de carga

## Módulo de LEADS y CRM ATC
- [x] Crear tabla de LEADS en base de datos
- [x] Crear procedimientos tRPC para CRUD de LEADS
- [ ] Crear interfaz de importación de CSV/Excel
- [x] Crear página de gestión de LEADS
- [x] Implementar edición de LEADS
- [x] Agregar pipeline de ventas (Nuevo, Contactado, Propuesta, Cerrado)
- [ ] Agregar seguimiento de LEADS
- [ ] Hacer editable la información de pacientes
- [ ] Integrar LEADS con pacientes (conversión)
- [ ] Crear reportes de LEADS

## Despliegue
- [x] Crear checkpoint final
- [x] Preparar documentación
- [ ] Validar en producción
