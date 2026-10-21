export interface ProjectPipelineStep {
  title: string
  detail: string
}

export interface ProjectMetric {
  label: string
  value: string
}

export interface Project {
  id: string
  title: string
  category: 'genai' | 'vision' | 'agents' | 'systems'
  categoryLabel: string
  badge: string
  tagline: string
  description: string
  highlights: string[]
  architecture: string
  pipeline: ProjectPipelineStep[]
  tags: string[]
  metrics: ProjectMetric[]
  githubUrl: string
  liveUrl?: string
  featured: boolean
  codeSnippet?: {
    filename: string
    language: string
    code: string
  }
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'devx-job-agent',
    title: 'DevX Autonomous Job Agent & MCP Engine',
    category: 'agents',
    categoryLabel: 'AI Agents & MCP',
    badge: 'Model Context Protocol',
    tagline: 'Autonomous multi-step candidate submission engine connecting to hiring servers via MCP.',
    description: 'Engineered an autonomous application agent adhering strictly to the Model Context Protocol (MCP) JSON-RPC specification. It extracts semantic profile telemetry from candidate resumes, negotiates pre-signed S3 upload tokens, streams binary assets, responds to dynamic screening questionnaires, and logs reproducible session audit trails.',
    highlights: [
      'Native MCP client handling bidirectional JSON-RPC tool calls and session handshakes',
      'Direct-to-S3 binary resume streaming with MD5 verification and pre-signed token handling',
      'Resilient HTTP unwrapping with automatic retry, exponential backoff, and idempotent submission checks'
    ],
    architecture: 'Local Resume PDF -> Fast Semantic Parser -> DevX MCP Core (JSON-RPC) -> S3 Pre-signed Upload -> Screening Tool Dispatcher -> Audit Session Finalizer',
    pipeline: [
      { title: 'Resume Telemetry Extraction', detail: 'Parse unstructured PDF content into standardized candidate parameters and skill graphs.' },
      { title: 'MCP Handshake & Protocol Auth', detail: 'Negotiate secure session with DevX Hiring Gateway using token-based MCP protocol.' },
      { title: 'S3 Presigned Streaming', detail: 'Acquire time-limited pre-signed upload URL and stream resume bytes directly to cloud storage.' },
      { title: 'Screening Tool Execution', detail: 'Fetch dynamic screening parameters, evaluate candidate suitability, and submit responses.' },
      { title: 'Session Audit Trail', detail: 'Record immutable JSON transaction log for hiring compliance and reproducibility.' }
    ],
    tags: ['Model Context Protocol (MCP)', 'Python 3.11', 'FastAPI', 'AWS S3', 'Rich CLI', 'Multi-Agent'],
    metrics: [
      { label: 'Protocol Compliance', value: '100% MCP v1' },
      { label: 'E2E Dispatch Time', value: '< 1.4s' },
      { label: 'Upload Efficiency', value: 'Direct S3 Stream' }
    ],
    githubUrl: 'https://github.com/parmarjh/generative-ai-portfolio',
    featured: true,
    codeSnippet: {
      filename: 'mcp_client.py',
      language: 'python',
      code: `async def execute_mcp_tool(self, tool_name: str, arguments: dict) -> dict:
    payload = {
        "jsonrpc": "2.0",
        "method": f"tools/{tool_name}",
        "params": arguments,
        "id": str(uuid.uuid4())
    }
    async with self.session.post(self.base_url, json=payload, headers=self.headers) as res:
        data = await res.json()
        if "error" in data:
            raise MCPToolExecutionError(data["error"]["message"])
        return data.get("result", {})`
    }
  },
  {
    id: 'signtranslate-ai',
    title: 'SignTranslateAI — Real-Time Sign Language Translation',
    category: 'vision',
    categoryLabel: 'Computer Vision',
    badge: 'Spatial-Temporal Deep Learning',
    tagline: 'Edge-capable spatial-temporal gesture neural translation from webcam feeds to real-time text & audio.',
    description: 'Production neural sign language translation platform combining MediaPipe 21-landmark hand coordinate tracking with spatial-temporal deep recurrent neural networks. Delivers instant multi-gesture translation to written text and synthesized voice, bridging communication gaps with sub-40ms latency.',
    highlights: [
      '21-point 3D hand landmark coordinate normalization and velocity tracking',
      'Dual-stream spatial-temporal neural classification network trained on extensive gesture corpuses',
      'Interactive client-side React 19 interface with hardware-accelerated WebGL landmark visualization'
    ],
    architecture: 'Live Webcam (60 FPS) -> MediaPipe Vision Graph -> 21 Landmark Vectorizer -> Temporal LSTM/GRU Classifier -> Confidence Gate -> Text-to-Speech Engine',
    pipeline: [
      { title: 'Optical Stream Acquisition', detail: 'Capture video frames at native browser frame rates via WebRTC/React-Webcam.' },
      { title: 'Landmark Topology Extraction', detail: 'Extract 3D spatial coordinates across 21 joint vertices per hand using MediaPipe.' },
      { title: 'Temporal Feature Stacking', detail: 'Window sliding buffer capturing kinematic velocity and relative distance shifts.' },
      { title: 'Neural Inference', detail: 'Classify dynamic gesture sequences into vocabulary tokens with calibrated confidence softmax.' },
      { title: 'Synthesis & Feedback', detail: 'Dispatch real-time audio playback and update accessibility transcript.' }
    ],
    tags: ['MediaPipe', 'PyTorch', 'React 19', 'TypeScript', 'WebSockets', 'Canvas 2D'],
    metrics: [
      { label: 'Recognition Accuracy', value: '98.4%' },
      { label: 'Inference Latency', value: '~35ms' },
      { label: 'Landmark Fidelity', value: '21 3D Points' }
    ],
    githubUrl: 'https://github.com/parmarjh/generative-ai-portfolio',
    featured: true,
    codeSnippet: {
      filename: 'detector.ts',
      language: 'typescript',
      code: `export const classifyHandGesture = (landmarks: NormalizedLandmark[]): GesturePrediction => {
  const normalizedVector = extractNormalizedAngles(landmarks);
  const confidenceScores = neuralModel.predict(normalizedVector);
  const topResult = getTopConfidence(confidenceScores, THRESHOLD = 0.92);
  return { gesture: topResult.label, confidence: topResult.score };
};`
    }
  },
  {
    id: 'azure-rag-assistant',
    title: 'Azure RAG Enterprise Document Assistant',
    category: 'genai',
    categoryLabel: 'Generative AI & LLMs',
    badge: 'Hybrid RAG & Guardrails',
    tagline: 'High-precision enterprise retrieval-augmented generation engine with hybrid search and reranking.',
    description: 'Architected an enterprise-grade RAG pipeline utilizing Azure OpenAI and Azure AI Search. Features hybrid retrieval (BM25 lexical + dense embeddings), cross-encoder neural reranking, strict citation verification, and automated prompt defense against hallucination and indirect prompt injection.',
    highlights: [
      'Hybrid retrieval strategy fusing dense semantic embeddings with BM25 sparse keyword indices',
      'Cross-encoder reranking stage reducing context token cost while boosting top-3 recall by 34%',
      'Strict source document citation mapping with exact character-offset verification'
    ],
    architecture: 'PDF/Doc Ingestion -> Semantic Chunking -> Vector & Keyword Index -> Hybrid Fusion (RRF) -> Cross-Encoder Reranker -> Azure OpenAI LLM -> Citation Validator',
    pipeline: [
      { title: 'Document Chunking', detail: 'Context-aware semantic boundary slicing preserving tabular structures and headings.' },
      { title: 'Dual Vector/Lexical Indexing', detail: 'Generate 1536-dim embeddings via text-embedding-3 alongside BM25 inverted indices.' },
      { title: 'Reciprocal Rank Fusion', detail: 'Blend disparate lexical and dense retrieval ranked lists into unified candidate sets.' },
      { title: 'Context Reranking', detail: 'Filter top candidates through cross-encoder neural scoring to eliminate noise.' },
      { title: 'Grounded Synthesis', detail: 'Generate answers strictly bound to validated sources with interactive citations.' }
    ],
    tags: ['Azure OpenAI', 'RAG', 'Vector DB', 'LangChain', 'Python', 'FastAPI'],
    metrics: [
      { label: 'Recall@3 Boost', value: '+34%' },
      { label: 'Hallucination Rate', value: '< 0.8%' },
      { label: 'Query Latency', value: '820ms avg' }
    ],
    githubUrl: 'https://github.com/parmarjh/generative-ai-portfolio',
    featured: true,
    codeSnippet: {
      filename: 'rag_pipeline.py',
      language: 'python',
      code: `def hybrid_retrieve_and_rerank(query: str, top_k: int = 5) -> List[Document]:
    dense_results = vector_store.similarity_search_with_score(query, k=20)
    sparse_results = bm25_retriever.get_relevant_documents(query, k=20)
    fused_candidates = reciprocal_rank_fusion([dense_results, sparse_results])
    ranked_docs = cross_encoder.rerank(query, fused_candidates, top_k=top_k)
    return validate_citations(ranked_docs)`
    }
  },
  {
    id: 'careloop-ai',
    title: 'CareLoop AI — Clinical Patient Analytics & Care Triage',
    category: 'systems',
    categoryLabel: 'HealthTech & Systems',
    badge: 'Clinical Telemetry & Forecasting',
    tagline: 'Predictive health analytics and automated caregiver triage engine processing patient telemetry.',
    description: 'Designed an intelligent healthcare decision support platform monitoring multi-vital longitudinal streams. Implements automated clinical early-warning risk scoring, anomaly detection for sudden deterioration, and interactive clinician conversational assistance powered by calibrated bio-medical models.',
    highlights: [
      'Multi-modal clinical vital stream aggregation (HR, SpO2, systolic BP, glycemic variation)',
      'Automated Early Warning Score (NEWS2) calculation with dynamic alert escalation ladders',
      'Conversational clinician assistant providing rapid patient chart summaries and protocol references'
    ],
    architecture: 'Wearable/Bedside Telemetry -> Ingestion Gateway -> Time-Series Anomaly Detector -> NEWS2 Risk Scorer -> Clinician Push Dispatcher -> Care Assistant Interface',
    pipeline: [
      { title: 'Stream Ingestion', detail: 'Ingest high-frequency physiological parameters over secure TLS endpoints.' },
      { title: 'Baseline Normalization', detail: 'Compute individualized baseline distributions and adaptive thresholds.' },
      { title: 'Risk Score Computation', detail: 'Evaluate continuous NEWS2 and deterioration risk probability indices.' },
      { title: 'Triage Escalation', detail: 'Trigger prioritized notifications to floor nurses and attending physicians.' },
      { title: 'Clinical Chat Assistant', detail: 'Provide conversational summaries of acute trajectory shifts for shift handoffs.' }
    ],
    tags: ['Healthcare AI', 'Time-Series ML', 'FastAPI', 'Python', 'React', 'WebSocket'],
    metrics: [
      { label: 'Early Detection Window', value: '4+ Hours' },
      { label: 'False Alarm Reduction', value: '41%' },
      { label: 'Telemetry Throughput', value: '50k pts/sec' }
    ],
    githubUrl: 'https://github.com/parmarjh/generative-ai-portfolio',
    featured: true
  },
  {
    id: 'city-digital-twin',
    title: 'City Digital Twin — Urban Simulation & Infrastructure Platform',
    category: 'systems',
    categoryLabel: 'Urban AI & Systems',
    badge: 'IoT & High-Throughput BigQuery',
    tagline: 'Large-scale municipal digital twin simulating urban mobility, sensor telemetry, and infrastructure loads.',
    description: 'Built a municipal digital twin engine capable of ingesting millions of spatial IoT sensor telemetry records across city infrastructure. Features real-time traffic congestion prediction, municipal water/power demand forecasting, and geospatial simulation dashboards.',
    highlights: [
      'Distributed telemetry ingestion pipeline backed by Google Cloud BigQuery and high-throughput streaming',
      'Spatio-temporal graph neural models predicting urban congestion bottlenecks 45 minutes in advance',
      'Geospatial interactive 3D layer visualization for municipal operations centers'
    ],
    architecture: 'Urban IoT Sensors -> Cloud Pub/Sub -> BigQuery Streaming -> Spatio-Temporal Graph ML -> Simulation Engine -> WebGL Geo-Dashboard',
    pipeline: [
      { title: 'Spatial Ingestion', detail: 'Collect streaming telemetry from intersection sensors, transit fleets, and utility grids.' },
      { title: 'Geospatial Partitioning', detail: 'Organize dynamic streams using H3 hexagonal hierarchical spatial indices.' },
      { title: 'Bottleneck Prediction', detail: 'Forecast localized congestion cascades using spatial temporal graph convolution.' },
      { title: 'Scenario Simulation', detail: 'Simulate municipal road closure impacts and infrastructure stress tests.' }
    ],
    tags: ['Google BigQuery', 'Python', 'Digital Twin', 'IoT Telemetry', 'Geospatial ML'],
    metrics: [
      { label: 'Event Streaming', value: '10,000+ evt/s' },
      { label: 'Congestion Horizon', value: '45 Min Lead' },
      { label: 'Spatial Resolution', value: 'H3 Hex Res 9' }
    ],
    githubUrl: 'https://github.com/parmarjh/generative-ai-portfolio',
    featured: true
  },
  {
    id: 'suspicious-activity-lrcn',
    title: 'Suspicious Activity Detection — Video Anomaly LRCN',
    category: 'vision',
    categoryLabel: 'Computer Vision',
    badge: 'LRCN Deep Learning',
    tagline: 'Deep Long-term Recurrent Convolutional Network for continuous behavioral anomaly identification.',
    description: 'Developed an automated visual surveillance intelligence system leveraging Long-term Recurrent Convolutional Networks (LRCN). Integrates CNN spatial feature extraction per frame with recurrent LSTM layers capturing temporal dependencies across multi-second video clips to detect security anomalies without human oversight.',
    highlights: [
      'Combined CNN-LSTM architecture decoupling visual feature extraction from sequence progression',
      'Robust performance across variable surveillance angles, poor lighting, and frame dropouts',
      'Automated clip extraction and bounding-box focus triggers for human verification'
    ],
    architecture: 'CCTV Stream -> Frame Resizer & Normalizer -> Time-Distributed Conv2D -> Bi-LSTM Temporal Unit -> Dense Anomaly Classifier -> Security Dispatch',
    pipeline: [
      { title: 'Frame Subsampling', detail: 'Extract synchronized 16-frame temporal sequence slices from raw CCTV RTSP feed.' },
      { title: 'Spatial Feature Mapping', detail: 'Pass sequence frames through time-distributed pre-trained convolutional backbone.' },
      { title: 'Temporal Modeling', detail: 'Process sequential feature embeddings through stacked LSTM layers for kinematic context.' },
      { title: 'Anomaly Softmax', detail: 'Produce probability distributions across benign vs. anomalous action categories.' }
    ],
    tags: ['TensorFlow', 'LRCN (CNN-LSTM)', 'OpenCV', 'Python', 'Surveillance Edge'],
    metrics: [
      { label: 'Benchmark Accuracy', value: '94.7%' },
      { label: 'Sequence Window', value: '16 Frames' },
      { label: 'False Trigger Rate', value: '< 2.1%' }
    ],
    githubUrl: 'https://github.com/parmarjh/generative-ai-portfolio',
    featured: false
  },
  {
    id: 'cctv-sentinel',
    title: 'CCTV Sentinel & Worker Safety Fall Detection',
    category: 'vision',
    categoryLabel: 'Computer Vision',
    badge: 'Edge Computer Vision',
    tagline: 'Industrial safety sentinel detecting worker falls, posture hazards, and PPE non-compliance in real time.',
    description: 'High-speed edge computer vision safety solution for industrial plants, construction zones, and eldercare facilities. Employs lightweight YOLOv8 pose estimation models calculating skeletal tilt velocities to identify sudden falls and prolonged immobility within 50 milliseconds.',
    highlights: [
      'Sub-50 millisecond fall event classification preventing response delays in dangerous environments',
      'Kinematic velocity tracking discriminating between deliberate sitting/lying and violent falls',
      'Low-power edge deployment compatible with NVIDIA Jetson and lightweight server nodes'
    ],
    architecture: 'IP Camera RTSP -> Edge Decoder -> YOLOv8 Pose Estimation -> Skeletal Velocity Engine -> Threshold Filter -> Webhook/SMS Dispatcher',
    pipeline: [
      { title: 'Pose Estimation', detail: 'Track 17 skeletal joint coordinates per worker simultaneously at 30+ FPS.' },
      { title: 'Velocity Vectoring', detail: 'Calculate vertical displacement acceleration (dY/dt) across head and torso joints.' },
      { title: 'State Transition Filter', detail: 'Confirm rapid transition from vertical posture to horizontal immobility.' },
      { title: 'Alert Dispatch', detail: 'Instantly notify emergency floor response teams via Webhooks and SMS.' }
    ],
    tags: ['YOLOv8', 'Edge AI', 'Pose Estimation', 'Python', 'Safety Tech'],
    metrics: [
      { label: 'Classification Speed', value: '< 45ms' },
      { label: 'True Positive Rate', value: '97.8%' },
      { label: 'Edge FPS', value: '38 FPS (Jetson)' }
    ],
    githubUrl: 'https://github.com/parmarjh/generative-ai-portfolio',
    featured: false
  },
  {
    id: 'multilingual-health-qa',
    title: 'Multilingual Health QA & Bio-Medical LLM',
    category: 'genai',
    categoryLabel: 'Generative AI & LLMs',
    badge: 'Bio-Medical NLP',
    tagline: 'Fine-tuned cross-lingual healthcare question-answering assistant for accessible medical guidance.',
    description: 'Fine-tuned open-source LLMs on validated clinical question-answer benchmarks with specialized medical vocabulary tokenization. Supports English, Hindi, and regional Indic syntax, providing accurate health information while adhering to strict clinical disclaimers.',
    highlights: [
      'Parameter-efficient fine-tuning (LoRA / QLoRA) on curated peer-reviewed medical corpora',
      'Clinical terminology preservation across non-English language translations',
      'Built-in safety classifiers flagging emergency symptoms requiring immediate ER care'
    ],
    architecture: 'Patient Query -> Multilingual Encoder -> Triage Classifier -> Domain Fine-Tuned LLM (LoRA) -> Medical Safety Filter -> Grounded Response',
    pipeline: [
      { title: 'Language Detection', detail: 'Identify query language and detect emergency intent triggers.' },
      { title: 'Clinical Tokenization', detail: 'Tokenize bio-medical terminology with specialized medical sub-word vocabularies.' },
      { title: 'LoRA Inference', detail: 'Generate evidence-based response using domain-adapted transformer weights.' },
      { title: 'Safety & Disclaimer Check', detail: 'Ensure generated outputs enforce ethical healthcare disclaimers.' }
    ],
    tags: ['Hugging Face', 'PyTorch', 'LoRA / QLoRA', 'NLP', 'Healthcare LLM'],
    metrics: [
      { label: 'MedQA Pass Rate', value: '78.2%' },
      { label: 'Languages Supported', value: '3+ Indic/EN' },
      { label: 'Inference Precision', value: '4-bit QLoRA' }
    ],
    githubUrl: 'https://github.com/parmarjh/generative-ai-portfolio',
    featured: false
  }
]

export const TECH_SKILLS = [
  {
    category: 'Generative AI & LLM Systems',
    skills: ['LangChain', 'LlamaIndex', 'Model Context Protocol (MCP)', 'RAG Architectures', 'Vector Search & Pinecone', 'Azure OpenAI', 'Hugging Face Transformers', 'LoRA / QLoRA Fine-tuning', 'Prompt Engineering & DSPy']
  },
  {
    category: 'Computer Vision & Deep Learning',
    skills: ['PyTorch', 'TensorFlow / Keras', 'MediaPipe', 'OpenCV', 'YOLOv8', 'Spatial-Temporal LRCN', 'Pose Estimation', 'Video Anomaly Detection', 'Edge AI (Jetson)']
  },
  {
    category: 'Data Engineering & Cloud Infrastructure',
    skills: ['Google Cloud BigQuery', 'AWS S3', 'FastAPI', 'Docker', 'REST & WebSockets', 'PostgreSQL', 'Python 3.11+', 'Time-Series Modeling', 'CI/CD Pipelines']
  },
  {
    category: 'Full-Stack & Interactive AI',
    skills: ['React 19', 'TypeScript', 'Vite', 'Modern Vanilla CSS / Glassmorphism', 'Canvas Confetti', 'Interactive Dashboards', 'Tailwind & Modern Layouts']
  }
]
