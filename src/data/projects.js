export const PROJECTS = [
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
    tagline: "Scalable Real-Time Video Stream Analysis & Defect Detection Engine",
    formerName: "ApplusVision",
    featured: true,
    impactMetric: "Real-time 60 FPS Multi-Stream Inference",
    description: "Industrial-grade computer vision platform built for automated visual inspection and anomaly detection across high-throughput industrial environments. Integrates custom YOLOv8 object detection, TensorRT optimization, and async video stream pipelines to detect micro-defects in real-time.",
    techStack: ["PyTorch", "YOLOv8", "TensorRT", "C++ / Python", "FastAPI", "GStreamer", "React", "WebSockets"],
    architecture: {
      ingestion: "Multi-camera RTSP ingestion via GStreamer hardware-accelerated pipelines.",
      inference: "TensorRT GPU engine batching frames with dynamic batch sizes for zero frame drops.",
      streaming: "WebSocket event bus broadcasting high-confidence detection boxes to web client."
    },
    metrics: [
      { label: "Latency", value: "12ms / Frame" },
      { label: "Accuracy", value: "97.8% mAP@50" },
      { label: "Concurrency", value: "16 RTSP Streams / GPU" }
    ],
    highlights: [
      "Dynamic ROI masking to eliminate background noise in industrial environments.",
      "TensorRT FP16 quantization reducing model footprint while retaining high precision.",
      "Full-stack telemetry dashboard for anomaly tracking and automated alert triggers."
    ],
    diagramType: "vision-pipeline",
    diagramSteps: ["RTSP Stream", "Frame Buffer & Preprocess", "TensorRT GPU Inference", "Post-process & Tracker", "WebSocket Telemetry"]
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
    category: "NLP & Conversational AI",
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
    category: "Autonomous Agents & Domain AI",
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
    category: "Geospatial & Computer Vision",
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
    category: "Cloud Engineering & ETL",
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
    category: "Thermal Imaging & ML Data",
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
    category: "Computer Vision & Graphics",
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
    category: "3D Visualization & LiDAR",
    tagline: "High-Performance Browser LiDAR Point Cloud Processing Platform",
    formerName: "PointLab / Potree_project",
    featured: true,
    impactMetric: "100M+ Point Render Capacity in Browser",
    description: "Web-based 3D point cloud visualization and spatial measurement workbench. Converts raw LAS/LAZ LiDAR datasets into spatial octree hierarchies, enabling fluid 60 FPS rendering and interactive distance, elevation, and volumetric spatial analysis directly in WebGL.",
    techStack: ["JavaScript / Three.js", "Potree Converter", "C++ / WASM", "WebGL", "Python", "Docker"],
    architecture: {
      spatialOctree: "Multoresolution octree spatial indexing stream dynamically loading point LOD based on camera frustum.",
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

export const SKILL_DOMAINS = [
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
