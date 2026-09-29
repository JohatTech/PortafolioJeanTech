export const PROJECTS_EN = [
  {
    id: "tender-analyzer",
    title: "TenderAnalyzer AI",
    category: "NLP & LLM Agents",
    tagline: "Enterprise Autonomous Contract & Public Bidding Analysis Agent",
    formerName: "AgentLicitaciones",
    featured: true,
    impactMetric: "94% Reduction in Tender Evaluation Time",
    description: "An end-to-end intelligent agentic pipeline designed to automatically parse, summarize, and cross-reference multi-hundred-page public tender documents, technical specifications, and legal requirements. Utilizes domain-adapted LLMs with structured output extraction and vector search to flag compliance risks and automated proposal requirement checklists.",
    techStack: ["Python", "FastAPI", "LangChain / LlamaIndex", "Qdrant Vector DB", "React", "Docker", "PyMuPDF"],
    architecture: {
      ingestion: "OCR & PyMuPDF layout-aware PDF chunking with section hierarchy preservation.",
      vectorStore: "Hybrid search (Dense Embeddings + BM25 Sparse Search) in Qdrant.",
      agenticLogic: "Multi-step reasoning agent with auto-verification against strict compliance rulesets.",
      frontend: "React dashboard with interactive side-by-side document highlight and query assistant."
    },
    metrics: [
      { label: "Processing Speed", value: "< 45s per 200-page doc" },
      { label: "Extraction Precision", value: "98.4% F1 Score" },
      { label: "Clause Recall", value: "99.1% Compliance Detection" }
    ],
    highlights: [
      "Layout-aware document chunking preserving tables, headers, and annex references.",
      "Multi-agent verification loop to eliminate LLM hallucinations on strict clause conditions.",
      "Automated risk scoring matrix and requirement extraction exported directly to structured CSV/Excel."
    ],
    diagramType: "pipeline",
    diagramSteps: ["Document Ingestion", "Layout-Aware Parsing", "Hybrid Vector Indexing", "Multi-Agent Reasoner", "Compliance Matrix Output"]
  },
  {
    id: "enterprise-vision-suite",
    title: "Enterprise Vision Suite",
    category: "Computer Vision & Edge",
    tagline: "Power Transmission & Energy Infrastructure Edge Inspection Pipeline",
    formerName: "ApplusVision",
    featured: true,
    hasArticle: true,
    impactMetric: "90%+ Inspection Turnaround (60 min ➔ 5 min)",
    description: "Industrial edge computer-vision and multi-spectral processing platform designed for power transmission inspection. Evaluates YOLO and RT-DETR models for asset localization, structural defects, and thermal hotspot classification, while computing 3D catenary clearances and generating auditable engineering PDFs.",
    techStack: ["Python", "PyTorch", "YOLO", "RT-DETR", "OpenCV", "FLIR Atlas SDK", "PyQt5", "Geospatial/GIS"],
    architecture: {
      multiSensor: "Concurrent RGB 4K video and radiometric FLIR thermal stream capture via async socket bridge.",
      edgeInference: "Multi-threaded YOLO and RT-DETR inference routines running concurrent asset and defect passes.",
      radiometricFusion: "Two-sigma statistical anomaly model calibrated against GPS and ambient weather telemetry.",
      reporting: "Decoupled background worker queues synthesizing georeferenced spreadsheets and engineering PDFs."
    },
    metrics: [
      { label: "Turnaround Time", value: "60m ➔ 5m (90%+ cut)" },
      { label: "Thermal Analysis", value: "2σ Anomaly Model" },
      { label: "Spatial Safety", value: "3D Catenary Clearance" }
    ],
    highlights: [
      "Real-time multi-threaded inference evaluating YOLO & RT-DETR models on edge hardware.",
      "Asynchronous socket bridge to FLIR Atlas SDK for calibrated 16-bit radiometric thermal frames.",
      "Automated deliverable generation for catenary geometry, pole verticality, and radiometric audit PDFs."
    ],
    diagramType: "vision-pipeline",
    diagramSteps: ["RGB & FLIR Feeds", "Multi-Threaded Inference", "2σ Thermal & 3D Catenary", "Worker Queues", "Auditable PDFs"]
  },
  {
    id: "auto-label-ml",
    title: "AutoLabel ML",
    category: "MLOps & Data Engine",
    tagline: "Self-Supervised & Foundation-Model Automated Data Annotation Tooling",
    formerName: "AutoAnnotator",
    featured: false,
    impactMetric: "10x Annotation Acceleration",
    description: "An MLOps annotation acceleration system combining Segment Anything Model (SAM) and zero-shot object detectors (Grounding DINO) with custom fine-tuned classifiers. Enables rapid dataset bootstrapping for computer vision models with automated bounding box, polygon mask, and semantic tag suggestions.",
    techStack: ["PyTorch", "SAM (Segment Anything)", "Grounding DINO", "FastAPI", "React Canvas", "ONNX Runtime"],
    architecture: {
      modelServer: "ONNX Runtime server with WebGL acceleration for interactive point-to-mask segmenting.",
      activeLearning: "Uncertainty sampling highlighting low-confidence annotations for human-in-the-loop review."
    },
    metrics: [
      { label: "Time Saved", value: "85% Less Manual Click" },
      { label: "Mask Accuracy", value: "0.92 IoU against Ground Truth" }
    ],
    highlights: [
      "Zero-shot promptable annotation using natural language text prompts.",
      "Interactive React Canvas interface with sub-10ms response times for SAM embeddings.",
      "Direct export to COCO, YOLO, and Pascal VOC formats with automated validation split generation."
    ],
    diagramType: "flow",
    diagramSteps: ["Raw Image Batch", "Foundation Model Pre-label", "Active Learning Sampler", "Human Review UI", "Export Dataset"]
  },
  {
    id: "hr-insight-bot",
    title: "HR Insight Bot",
    category: "NLP & LLM Agents",
    tagline: "Enterprise RAG Assistant with Strict Role-Based Access & Policy Verification",
    formerName: "ChatBotRRHH",
    featured: false,
    impactMetric: "88% Instant Resolution Rate",
    description: "Secure, context-aware conversational AI assistant designed to answer complex employee policy, benefits, and administrative inquiries. Powered by a RAG framework with semantic chunk re-ranking, source citation verification, and strict role-based access control.",
    techStack: ["Python", "LangChain", "OpenAI / Local Llama 3", "Pinecone", "Streamlit / React", "PostgreSQL"],
    architecture: {
      retrieval: "Two-stage retrieval using Cohere Rerank to select top-k relevant policy snippets.",
      guardrails: "NeMo Guardrails enforcing strict PII protection and out-of-scope question rejection."
    },
    metrics: [
      { label: "Query Speed", value: "1.2s Median Response" },
      { label: "Citation Accuracy", value: "99.4% Verifiable Sources" }
    ],
    highlights: [
      "Direct page-level citation linking back to authoritative HR PDF manuals.",
      "Fine-grained ACL mapping user directory groups to document visibility levels.",
      "Continuous feedback logging for low-confidence queries to train support teams."
    ],
    diagramType: "rag",
    diagramSteps: ["Employee Query", "ACL Guardrail Filter", "Semantic Vector Search", "Cohere Re-Ranker", "Grounded LLM Response"]
  },
  {
    id: "grid-expert-agent",
    title: "GridExpert AI Agent",
    category: "NLP & LLM Agents",
    tagline: "Specialized LLM Technical Assistant for Electrical Infrastructure Engineering",
    formerName: "ClaudiaElectricAgentExpert",
    featured: true,
    impactMetric: "300+ Electrical Standard Specs Indexed",
    description: "An expert AI agent engineered for electrical distribution and grid maintenance domain tasks. Capable of parsing complex electrical single-line diagrams (SLD metadata), cross-referencing technical safety standards (IEEE, IEC), and generating step-by-step equipment inspection procedures.",
    techStack: ["Python", "Instructor / Pydantic", "LangGraph", "ChromaDB", "FastAPI", "React Flow"],
    architecture: {
      graphWorkflow: "LangGraph state machine defining structured planning, tool execution, and verification states.",
      toolRegistry: "Custom tools for calculating transformer load factors and cable drop tolerance formulas."
    },
    metrics: [
      { label: "Domain Accuracy", value: "96.2% IEEE / IEC Benchmark" },
      { label: "Procedure Speedup", value: "5x Faster Field Reports" }
    ],
    highlights: [
      "Structured output enforcement ensuring JSON compliance for field engineering tool ingestion.",
      "Stateful agent memory keeping track of multi-step electrical grid diagnostics.",
      "Interactive React Flow graph visualizer showing agent reasoning steps live."
    ],
    diagramType: "agent-graph",
    diagramSteps: ["Technical Query", "Intent Router", "Safety Standard Tool", "Calculation Engine", "Verified Field Checklist"]
  },
  {
    id: "eco-vision",
    title: "EcoVision Spatial AI",
    category: "Geospatial & 3D Analytics",
    tagline: "High-Resolution Satellite & Aerial Imagery Vegetation Detection System",
    formerName: "TreeDetection",
    featured: true,
    impactMetric: "Over 500k Trees Mapped per Flight Sector",
    description: "Geospatial computer vision pipeline that processes multi-spectral satellite and drone orthomosaics to automatically segment individual tree crowns, compute NDVI health indices, and detect vegetation encroachment near critical utility powerlines.",
    techStack: ["PyTorch", "U-Net / Faster R-CNN", "GDAL / Rasterio", "Shapely", "PostGIS", "Leaflet / Mapbox GL"],
    architecture: {
      tiling: "Sliding window GeoTIFF raster chunking with spatial overlap buffer handling.",
      geospatialDB: "PostGIS integration mapping polygon geometry centroids with EPSG projection support."
    },
    metrics: [
      { label: "Detection F1", value: "0.93 Precision" },
      { label: "Area Throughput", value: "100 km² / hour" }
    ],
    highlights: [
      "Sub-meter resolution individual tree crown isolation using multi-spectral bands.",
      "Vegetation-to-powerline proximity risk scoring with automated GIS shapefile export.",
      "Web GIS interface supporting interactive tile rendering and density heatmaps."
    ],
    diagramType: "gis-pipeline",
    diagramSteps: ["GeoTIFF Ingestion", "Spectral Tiling", "Deep Segmentation", "PostGIS Vectorization", "Web GIS Map Layer"]
  },
  {
    id: "cloud-storage-monitor",
    title: "CloudStorage Event Monitor",
    category: "MLOps & Data Engine",
    tagline: "Event-Driven Storage Monitoring & Automated Reporting Pipeline",
    formerName: "BlobWatcher / blob-watcher-report-generator",
    featured: false,
    impactMetric: "100k+ Storage Events Processed Daily",
    description: "An event-driven serverless pipeline monitoring object storage buckets for incoming field data, triggers automated payload validation, executes data normalization routines, and generates dynamic executive PDF reports with zero human intervention.",
    techStack: ["Python", "Azure Blob / AWS S3", "Serverless Functions", "Pandas", "ReportLab", "Docker"],
    architecture: {
      eventTrigger: "Webhooks and Blob Storage Event Grid firing lightweight serverless triggers.",
      processing: "Distributed batch worker processing incoming binary logs and formatting tabular summaries."
    },
    metrics: [
      { label: "Uptime", value: "99.99% Reliability" },
      { label: "Latency", value: "< 2s Trigger-to-Process" }
    ],
    highlights: [
      "Resilient retry queue mechanism with dead-letter queue (DLQ) alert routing.",
      "Automated PDF executive report generation with interactive chart embedding.",
      "Infrastructure as Code deployment for easy multi-environment orchestration."
    ],
    diagramType: "cloud",
    diagramSteps: ["Storage Event Trigger", "Event Queue Worker", "Validation & ETL", "Report Generator", "Notification & Storage"]
  },
  {
    id: "therma-data-engine",
    title: "ThermaData Engine",
    category: "Computer Vision & Edge",
    tagline: "End-to-End Thermal Dataset Curation & Augmentation Platform",
    formerName: "ThermalDatasetGenerator / ThermalImageDatabase",
    featured: false,
    impactMetric: "50k+ Calibrated Thermal Frames Managed",
    description: "A specialized dataset management and synthetic augmentation engine designed for thermal infrared images. Standardizes raw radiometric FLIR temperature arrays, applies thermal-specific radiometric augmentations, and prepares balanced training splits for predictive maintenance ML models.",
    techStack: ["Python", "OpenCV", "NumPy", "FLIR Atlas SDK", "FastAPI", "React", "SQLite / PostgreSQL"],
    architecture: {
      radiometricParser: "Extracts 16-bit raw temperature arrays directly from thermal camera metadata.",
      augPipeline: "Temperature color map shifts, thermal noise addition, and emissivity variations."
    },
    metrics: [
      { label: "Augment Speed", value: "500 imgs / second" },
      { label: "Data Quality", value: "100% Calibrated Temp" }
    ],
    highlights: [
      "Radiometric temperature lookup enabling pixel-level point temperature extraction.",
      "Automated thermal anomaly synthesis for training outlier detection models.",
      "Full dataset version control and train/val/test leak-proof splitting."
    ],
    diagramType: "data-engine",
    diagramSteps: ["Raw Thermal Stream", "16-Bit Radiometric Extractor", "Thermal Augmenter", "Quality Audit Engine", "ML Ready Export"]
  },
  {
    id: "vector-ai-engine",
    title: "VectorAI Engine",
    category: "Computer Vision & Edge",
    tagline: "Deep Learning Automated Raster-to-Vector Conversion Engine",
    formerName: "VectorizerEngine",
    featured: false,
    impactMetric: "Precision SVG Vector Generation",
    description: "An advanced graphics vectorization pipeline combining deep contour extraction and curve fitting algorithms to convert pixel-based raster diagrams and technical schematics into crisp, editable SVG bezier curve vectors.",
    techStack: ["Python", "C++", "PyTorch", "OpenCV", "Potrace / Custom Bezier Fitter", "FastAPI"],
    architecture: {
      segmentation: "Deep edge refinement neural network isolating line work from textured backgrounds.",
      vectorizer: "Sub-pixel corner detection and iterative Bezier curve error minimization."
    },
    metrics: [
      { label: "Precision", value: "99.1% Fidelity" },
      { label: "Compression", value: "70% File Size Reduction" }
    ],
    highlights: [
      "Lossless conversion of hand-drawn schematics into production CAD/SVG formats.",
      "Noise-resilient line smoothing that preserves sharp geometric corners.",
      "Scalable REST API with WebSocket progress streaming for large high-res raster batches."
    ],
    diagramType: "graphics",
    diagramSteps: ["High-Res Raster", "Edge Refinement Neural Net", "Sub-pixel Contouring", "Bezier Curve Optimizer", "Clean SVG Output"]
  },
  {
    id: "point-cloud-lab-3d",
    title: "PointCloud Lab 3D",
    category: "Geospatial & 3D Analytics",
    tagline: "High-Performance Browser LiDAR Point Cloud Processing Platform",
    formerName: "PointLab / Potree_project",
    featured: true,
    impactMetric: "100M+ Point Render Capacity in Browser",
    description: "Web-based 3D point cloud visualization and spatial measurement workbench. Converts raw LAS/LAZ LiDAR datasets into spatial octree hierarchies, enabling fluid 60 FPS rendering and interactive distance, elevation, and volumetric spatial analysis directly in WebGL.",
    techStack: ["JavaScript / Three.js", "Potree Converter", "C++ / WASM", "WebGL", "Python", "Docker"],
    architecture: {
      spatialOctree: "Multiresolution octree spatial indexing stream dynamically loading point LOD based on camera frustum.",
      wasmEngine: "WebAssembly compiled fast distance and point proximity calculations in browser."
    },
    metrics: [
      { label: "Framerate", value: "60 FPS @ 50M Points" },
      { label: "Load Speed", value: "Fast LOD Streaming" }
    ],
    highlights: [
      "Interactive 3D spatial measurement tools (point-to-point, height profile, area polygon).",
      "Dynamic point classification color coding (elevation, intensity, return number, RGB).",
      "Seamless integration with cloud storage for streaming multi-gigabyte LiDAR files."
    ],
    diagramType: "3d-pipeline",
    diagramSteps: ["LAS/LAZ Input", "Octree Spatial Converter", "LOD Stream Server", "Three.js / WebGL Render", "Interactive Measurement UI"]
  }
];

export const PROJECTS_ES = [
  {
    id: "tender-analyzer",
    title: "TenderAnalyzer AI",
    category: "NLP y Agentes LLM",
    tagline: "Agente Autónomo Empresarial para Análisis de Contratos y Licitaciones Públicas",
    formerName: "AgentLicitaciones",
    featured: true,
    impactMetric: "94% de Reducción en Tiempo de Evaluación de Pliegos",
    description: "Pipeline inteligente de agentes autónomos diseñado para analizar, resumir y correlacionar automáticamente pliegos de licitación pública de cientos de páginas, especificaciones técnicas y requisitos legales. Utiliza LLMs adaptados al dominio con extracción estructurada y búsqueda vectorial para detectar riesgos de cumplimiento y generar listas de verificación de propuestas.",
    techStack: ["Python", "FastAPI", "LangChain / LlamaIndex", "Qdrant Vector DB", "React", "Docker", "PyMuPDF"],
    architecture: {
      ingestion: "OCR y segmentación de PDFs preservando la jerarquía de secciones, tablas y estructura con PyMuPDF.",
      vectorStore: "Búsqueda híbrida (Embeddings densos + Búsqueda dispersa BM25) en Qdrant.",
      agenticLogic: "Agente con razonamiento multi-paso y bucle de auto-verificación contra reglas estrictas de cumplimiento.",
      frontend: "Dashboard interactivo en React con resaltado de documentos lado a lado y asistente de consultas."
    },
    metrics: [
      { label: "Velocidad de Procesamiento", value: "< 45s por doc de 200 págs" },
      { label: "Precisión de Extracción", value: "98.4% F1 Score" },
      { label: "Detección de Cláusulas", value: "99.1% Recall de Cumplimiento" }
    ],
    highlights: [
      "Segmentación de documentos sensible al diseño que preserva tablas, encabezados y anexos normativos.",
      "Bucle de verificación multi-agente para erradicar alucinaciones en condiciones contractuales estrictas.",
      "Matriz automatizada de puntuación de riesgos y exportación directa a formatos estructurados CSV/Excel."
    ],
    diagramType: "pipeline",
    diagramSteps: ["Ingesta de Documentos", "Parseo con Detección de Estructura", "Indexación Vectorial Híbrida", "Razonador Multi-Agente", "Matriz de Cumplimiento"]
  },
  {
    id: "enterprise-vision-suite",
    title: "Enterprise Vision Suite",
    category: "Visión Computacional y Edge",
    tagline: "Pipeline de Inspección Edge para Redes de Transmisión e Infraestructura Energética",
    formerName: "ApplusVision",
    featured: true,
    hasArticle: true,
    impactMetric: "Reducción de Tiempo de Inspección del 90%+ (60 min ➔ 5 min)",
    description: "Plataforma industrial de visión computacional en el edge y procesamiento multi-espectral para la inspección de líneas de transmisión eléctrica. Evalúa modelos YOLO y RT-DETR para localización de activos, detección de defectos estructurales y clasificación de anomalías térmicas, calculando distancias de catenaria 3D y generando reportes de ingeniería auditables.",
    techStack: ["Python", "PyTorch", "YOLO", "RT-DETR", "OpenCV", "FLIR Atlas SDK", "PyQt5", "Geospatial/GIS"],
    architecture: {
      multiSensor: "Captura concurrente de video RGB 4K y flujos térmicos radiométricos FLIR mediante socket asíncrono.",
      edgeInference: "Rutinas de inferencia multi-hilo con modelos YOLO y RT-DETR ejecutando pasadas paralelas de activos y fallas.",
      radiometricFusion: "Modelo estadístico de dispersión de dos sigmas calibrado con GPS y telemetría climática ambiental.",
      reporting: "Colas de trabajadores desacopladas en segundo plano generando hojas de cálculo georreferenciadas y PDFs de auditoría."
    },
    metrics: [
      { label: "Tiempo de Revisión", value: "60m ➔ 5m (Corte del 90%+)" },
      { label: "Análisis Térmico", value: "Modelo de Anomalía 2σ" },
      { label: "Seguridad Espacial", value: "Holgura de Catenaria 3D" }
    ],
    highlights: [
      "Inferencia multi-hilo en tiempo real ejecutando modelos YOLO y RT-DETR en hardware de borde (edge).",
      "Puente de sockets asíncrono con el SDK FLIR Atlas para fotogramas radiométricos calibrados de 16 bits.",
      "Generación automatizada de entregables: geometría de catenaria, verticalidad de postes e informes radiométricos."
    ],
    diagramType: "vision-pipeline",
    diagramSteps: ["Streams RGB y FLIR", "Inferencia Multi-Hilo", "Térmica 2σ y Catenaria 3D", "Colas Asíncronas", "PDFs Auditables"]
  },
  {
    id: "auto-label-ml",
    title: "AutoLabel ML",
    category: "MLOps y Motor de Datos",
    tagline: "Herramienta de Anotación Automatizada con Modelos Fundacionales y Auto-Supervisión",
    formerName: "AutoAnnotator",
    featured: false,
    impactMetric: "Aceleración de Anotación de 10x",
    description: "Sistema MLOps para acelerar el etiquetado de datos que integra el modelo Segment Anything (SAM) y detectores zero-shot (Grounding DINO) con clasificadores personalizados. Facilita el inicio rápido de datasets para visión computacional con sugerencias automáticas de bounding boxes, polígonos y etiquetas semánticas.",
    techStack: ["PyTorch", "SAM (Segment Anything)", "Grounding DINO", "FastAPI", "React Canvas", "ONNX Runtime"],
    architecture: {
      modelServer: "Servidor ONNX Runtime con aceleración WebGL para segmentación interactiva punto-a-máscara.",
      activeLearning: "Muestreo por incertidumbre que resalta anotaciones de baja confianza para revisión con humano en el bucle."
    },
    metrics: [
      { label: "Tiempo Ahorrado", value: "85% Menos Clics Manuales" },
      { label: "Precisión de Máscara", value: "0.92 IoU vs Ground Truth" }
    ],
    highlights: [
      "Anotación interactiva mediante prompts en lenguaje natural usando modelos fundacionales.",
      "Interfaz reactiva con React Canvas y tiempos de respuesta sub-10ms para embeddings de SAM.",
      "Exportación directa a formatos COCO, YOLO y Pascal VOC con particionado validado train/test."
    ],
    diagramType: "flow",
    diagramSteps: ["Lote de Imágenes", "Pre-etiquetado Fundacional", "Muestreo Activo", "Interfaz de Revisión", "Exportación de Dataset"]
  },
  {
    id: "hr-insight-bot",
    title: "HR Insight Bot",
    category: "NLP y Agentes LLM",
    tagline: "Asistente RAG Empresarial con Control de Acceso Estricto y Verificación Normativa",
    formerName: "ChatBotRRHH",
    featured: false,
    impactMetric: "88% de Resolución Instantánea",
    description: "Asistente conversacional de IA seguro y consciente del contexto diseñado para responder consultas complejas sobre normativas, beneficios y políticas laborales. Construido sobre arquitectura RAG con reordenamiento semántico, citas verificables de fuentes y control de acceso basado en roles.",
    techStack: ["Python", "LangChain", "OpenAI / Local Llama 3", "Pinecone", "Streamlit / React", "PostgreSQL"],
    architecture: {
      retrieval: "Recuperación en dos etapas usando Cohere Rerank para seleccionar los fragmentos normativos más relevantes.",
      guardrails: "NeMo Guardrails para garantizar protección estricta de datos personales y rechazo de preguntas fuera de alcance."
    },
    metrics: [
      { label: "Velocidad de Respuesta", value: "1.2s Mediana de Respuesta" },
      { label: "Precisión de Citas", value: "99.4% Fuentes Verificables" }
    ],
    highlights: [
      "Citas directas a nivel de página enlazadas con los manuales normativos y políticas oficiales en PDF.",
      "Listas de control de acceso (ACL) que restringen la visibilidad según los grupos y roles de usuario.",
      "Registro continuo de retroalimentación para consultas de baja confianza y entrenamiento de soporte."
    ],
    diagramType: "rag",
    diagramSteps: ["Consulta del Empleado", "Filtro ACL y Guardrails", "Búsqueda Vectorial", "Re-Ranker Cohere", "Respuesta Fundamentada"]
  },
  {
    id: "grid-expert-agent",
    title: "GridExpert AI Agent",
    category: "NLP y Agentes LLM",
    tagline: "Asistente Técnico Especializado en Ingeniería y Mantenimiento de Redes Eléctricas",
    formerName: "ClaudiaElectricAgentExpert",
    featured: true,
    impactMetric: "Más de 300 Normas y Estándares Eléctricos Indexados",
    description: "Agente de IA especializado en tareas de distribución eléctrica y mantenimiento de subestaciones. Capaz de interpretar esquemas unifilares (metadatos SLD), contrastar normativas técnicas internacionales de seguridad (IEEE, IEC) y generar procedimientos de inspección paso a paso para personal técnico.",
    techStack: ["Python", "Instructor / Pydantic", "LangGraph", "ChromaDB", "FastAPI", "React Flow"],
    architecture: {
      graphWorkflow: "Máquina de estados en LangGraph que define planificación estructurada, ejecución de herramientas y verificación.",
      toolRegistry: "Herramientas de cálculo personalizadas para factores de carga de transformadores y caída de tensión."
    },
    metrics: [
      { label: "Precisión en Dominio", value: "96.2% Benchmark IEEE / IEC" },
      { label: "Velocidad de Reportes", value: "5x Más Rápido en Campo" }
    ],
    highlights: [
      "Salidas estrictamente estructuradas con esquemas JSON validados para ingesta en software de ingeniería.",
      "Memoria de agente con estado para diagnósticos secuenciales complejos de redes de potencia.",
      "Visualizador dinámico con React Flow para monitorizar los pasos de razonamiento del agente en vivo."
    ],
    diagramType: "agent-graph",
    diagramSteps: ["Consulta Técnica", "Enrutador de Intención", "Consulta de Normativa", "Motor de Cálculo", "Checklist de Campo Verificado"]
  },
  {
    id: "eco-vision",
    title: "EcoVision Spatial AI",
    category: "Analítica Geoespacial y 3D",
    tagline: "Sistema de Detección de Vegetación en Imágenes Satelitales y Aéreas de Alta Resolución",
    formerName: "TreeDetection",
    featured: true,
    impactMetric: "Más de 500k Árboles Mapeados por Sector de Vuelo",
    description: "Pipeline geoespacial de visión computacional que procesa ortomosaicos satelitales y de drones multi-espectrales para segmentar copas individuales de árboles, calcular índices de salud vegetal NDVI y detectar invasiones de vegetación próximas a líneas de alta tensión.",
    techStack: ["PyTorch", "U-Net / Faster R-CNN", "GDAL / Rasterio", "Shapely", "PostGIS", "Leaflet / Mapbox GL"],
    architecture: {
      tiling: "Fragmentación de rásteres GeoTIFF en ventana deslizante con buffers de solapamiento espacial.",
      geospatialDB: "Integración con PostGIS mapeando centroides geométricos con soporte de proyecciones EPSG."
    },
    metrics: [
      { label: "F1 de Detección", value: "0.93 Precisión" },
      { label: "Rendimiento Espacial", value: "100 km² / hora" }
    ],
    highlights: [
      "Aislamiento de copas individuales a resolución sub-métrica mediante bandas multi-espectrales.",
      "Evaluación de riesgo de proximidad vegetación-cableado con exportación automática a capas Shapefile de GIS.",
      "Interfaz Web GIS con renderizado dinámico de mosaicos y mapas de calor de densidad."
    ],
    diagramType: "gis-pipeline",
    diagramSteps: ["Ingesta GeoTIFF", "Fragmentación Espectral", "Segmentación Profunda", "Vectorización PostGIS", "Capa Web GIS"]
  },
  {
    id: "cloud-storage-monitor",
    title: "CloudStorage Event Monitor",
    category: "MLOps y Motor de Datos",
    tagline: "Pipeline Orientado a Eventos para Monitoreo de Almacenamiento y Reportes Automáticos",
    formerName: "BlobWatcher / blob-watcher-report-generator",
    featured: false,
    impactMetric: "Más de 100k Eventos de Almacenamiento Procesados al Día",
    description: "Pipeline serverless guiado por eventos que monitorea buckets de almacenamiento en la nube ante la llegada de nuevos datos de campo, ejecuta validación automática de payloads, procesos de normalización ETL y genera reportes ejecutivos en PDF sin intervención humana.",
    techStack: ["Python", "Azure Blob / AWS S3", "Funciones Serverless", "Pandas", "ReportLab", "Docker"],
    architecture: {
      eventTrigger: "Webhooks y Event Grid de Azure Blob Storage activando funciones serverless ultraligeras.",
      processing: "Trabajador distribuido por lotes que procesa registros binarios y sintetiza resúmenes tabulares."
    },
    metrics: [
      { label: "Disponibilidad", value: "99.99% Confiabilidad" },
      { label: "Latencia", value: "< 2s de Disparo a Proceso" }
    ],
    highlights: [
      "Mecanismo resiliente con colas de reintento y enrutamiento a Dead-Letter Queue (DLQ).",
      "Generación automática de reportes ejecutivos en PDF con gráficos vectoriales incrustados.",
      "Despliegue como Infraestructura como Código (IaC) para orquestación multi-entorno."
    ],
    diagramType: "cloud",
    diagramSteps: ["Evento de Almacenamiento", "Cola de Mensajería", "Validación y ETL", "Generador de PDFs", "Notificación y Archivo"]
  },
  {
    id: "therma-data-engine",
    title: "ThermaData Engine",
    category: "Visión Computacional y Edge",
    tagline: "Plataforma Integral de Curación y Aumento Sintético de Datasets Térmicos",
    formerName: "ThermalDatasetGenerator / ThermalImageDatabase",
    featured: false,
    impactMetric: "Más de 50k Fotogramas Térmicos Calibrados Gestionados",
    description: "Motor especializado en la gestión y aumento sintético de datos para imágenes infrarrojas térmicas. Estandariza matrices radiométricas brutas de sensores FLIR, aplica transformaciones térmicas específicas y genera particiones balanceadas para entrenar modelos de mantenimiento predictivo.",
    techStack: ["Python", "OpenCV", "NumPy", "FLIR Atlas SDK", "FastAPI", "React", "SQLite / PostgreSQL"],
    architecture: {
      radiometricParser: "Extracción directa de matrices de temperatura crudas de 16 bits de los metadatos térmicos.",
      augPipeline: "Variaciones de mapas de calor, inyección de ruido térmico y alteraciones de emisividad física."
    },
    metrics: [
      { label: "Velocidad de Aumento", value: "500 imgs / segundo" },
      { label: "Calidad de Datos", value: "100% Temperatura Calibrada" }
    ],
    highlights: [
      "Extracción precisa de temperatura píxel a píxel mediante calibración radiométrica.",
      "Síntesis automatizada de anomalías térmicas para entrenar detectores de fallas incipientes.",
      "Control de versiones de datasets y particionado hermético train/val/test sin fuga de datos."
    ],
    diagramType: "data-engine",
    diagramSteps: ["Stream Térmico Crudo", "Extractor Radiométrico 16-Bit", "Aumentador Térmico", "Motor de Calidad", "Exportación para ML"]
  },
  {
    id: "vector-ai-engine",
    title: "VectorAI Engine",
    category: "Visión Computacional y Edge",
    tagline: "Motor de Conversión Automatizada de Ráster a Vector con Deep Learning",
    formerName: "VectorizerEngine",
    featured: false,
    impactMetric: "Generación de Vectores SVG de Alta Fidelidad",
    description: "Pipeline avanzado de vectorización gráfica que combina extracción de contornos mediante deep learning y algoritmos de ajuste de curvas para convertir diagramas técnicos y esquemas en mapas de bits en curvas Bézier SVG editables y nítidas.",
    techStack: ["Python", "C++", "PyTorch", "OpenCV", "Potrace / Custom Bezier Fitter", "FastAPI"],
    architecture: {
      segmentation: "Red neuronal de refinamiento de bordes para aislar trazos de fondos texturizados.",
      vectorizer: "Detección sub-píxel de esquinas y minimización iterativa del error en curvas de Bézier."
    },
    metrics: [
      { label: "Fidelidad", value: "99.1% Precisión Geométrica" },
      { label: "Compresión", value: "70% Reducción de Tamaño" }
    ],
    highlights: [
      "Conversión sin pérdida de bocetos y planos escaneados a formatos vectoriales para CAD/SVG.",
      "Suavizado de líneas resistente al ruido que preserva ángulos y esquinas geométricas nítidas.",
      "API REST escalable con streaming por WebSockets para lotes masivos de alta resolución."
    ],
    diagramType: "graphics",
    diagramSteps: ["Ráster de Alta Resolución", "Red de Refinamiento", "Contorneado Sub-Píxel", "Optimizador Bézier", "Salida SVG Limpia"]
  },
  {
    id: "point-cloud-lab-3d",
    title: "PointCloud Lab 3D",
    category: "Analítica Geoespacial y 3D",
    tagline: "Plataforma de Alto Rendimiento para Procesamiento de Nubes de Puntos LiDAR en Navegador",
    formerName: "PointLab / Potree_project",
    featured: true,
    impactMetric: "Capacidad de Renderizado de +100M de Puntos en Navegador",
    description: "Entorno interactivo en web para visualización y medición espacial de nubes de puntos 3D. Convierte datasets LiDAR en formatos LAS/LAZ a estructuras espaciales Octree, permitiendo renderizado fluido a 60 FPS y herramientas interactivas de medición de distancias, perfiles de elevación y volúmenes en WebGL.",
    techStack: ["JavaScript / Three.js", "Potree Converter", "C++ / WASM", "WebGL", "Python", "Docker"],
    architecture: {
      spatialOctree: "Indexación espacial Octree multinivel que transmite dinámicamente el nivel de detalle (LOD) según la cámara.",
      wasmEngine: "Módulos WebAssembly compilados para cálculos de distancia y proximidad espacial a máxima velocidad."
    },
    metrics: [
      { label: "Tasa de Cuadros", value: "60 FPS con 50M de Puntos" },
      { label: "Velocidad de Carga", value: "Streaming LOD Inmediato" }
    ],
    highlights: [
      "Herramientas interactivas de medición espacial 3D (punto a punto, perfil altimétrico, polígono de área).",
      "Codificación por colores según clasificaciones LiDAR (elevación, intensidad, número de retorno, RGB).",
      "Integración fluida con almacenamiento cloud para transmitir archivos LiDAR de múltiples gigabytes."
    ],
    diagramType: "3d-pipeline",
    diagramSteps: ["Ingesta LAS/LAZ", "Convertidor Octree 3D", "Servidor de Streaming LOD", "Render WebGL / Three.js", "Interfaz de Medición"]
  }
];

export const SKILL_DOMAINS_EN = [
  {
    title: "Full-Stack System Architecture",
    icon: "Cpu",
    skills: ["FastAPI / REST / WebSockets", "React / Vite / Modular CSS", "Docker / Containerization", "Microservices & Serverless", "PostgreSQL / Qdrant / Redis"]
  },
  {
    title: "Machine Learning & AI Engineering",
    icon: "Brain",
    skills: ["PyTorch / Deep Learning", "LLM Agentic Frameworks (LangChain, LangGraph)", "Retrieval-Augmented Generation (RAG)", "YOLOv8 & Computer Vision", "TensorRT Engine Optimization"]
  },
  {
    title: "Geospatial & 3D Analytics",
    icon: "Layers",
    skills: ["PostGIS / GDAL / Rasterio", "LiDAR Octree Spatial Indexing", "WebGL / Three.js 3D Rendering", "Satellite & UAV Orthomosaic AI", "Multi-spectral Imaging"]
  },
  {
    title: "MLOps & Data Engineering",
    icon: "Database",
    skills: ["Data Pipeline Orchestration", "Radiometric & Thermal Processing", "Foundation Model Pre-labeling (SAM)", "Active Learning & Model Audit", "Continuous Deployment for ML"]
  }
];

export const SKILL_DOMAINS_ES = [
  {
    title: "Arquitectura de Sistemas Full-Stack",
    icon: "Cpu",
    skills: ["FastAPI / REST / WebSockets", "React / Vite / CSS Modular", "Docker / Contenedores", "Microservicios y Serverless", "PostgreSQL / Qdrant / Redis"]
  },
  {
    title: "Ingeniería de Machine Learning e IA",
    icon: "Brain",
    skills: ["PyTorch / Deep Learning", "Frameworks de Agentes LLM (LangChain, LangGraph)", "Generación Aumentada por Recuperación (RAG)", "YOLOv8 y Visión Computacional", "Optimización con TensorRT"]
  },
  {
    title: "Analítica Geoespacial y 3D",
    icon: "Layers",
    skills: ["PostGIS / GDAL / Rasterio", "Indexación Octree para LiDAR", "Renderizado 3D con WebGL / Three.js", "IA para Ortomosaicos Satelitales y UAV", "Procesamiento Multi-Espectral"]
  },
  {
    title: "MLOps e Ingeniería de Datos",
    icon: "Database",
    skills: ["Orquestación de Pipelines de Datos", "Procesamiento Radiométrico y Térmico", "Pre-etiquetado con Modelos Fundacionales (SAM)", "Active Learning y Auditoría de Modelos", "Despliegue Continuo (CI/CD) para ML"]
  }
];

export function getProjects(lang = 'en') {
  return lang === 'es' ? PROJECTS_ES : PROJECTS_EN;
}

export function getSkillDomains(lang = 'en') {
  return lang === 'es' ? SKILL_DOMAINS_ES : SKILL_DOMAINS_EN;
}

// Backward compatibility default exports
export const PROJECTS = PROJECTS_EN;
export const SKILL_DOMAINS = SKILL_DOMAINS_EN;
