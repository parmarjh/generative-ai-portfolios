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
  category: 'agents' | 'genai' | 'vision' | 'systems'
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
    title: 'DevX Autonomous Job Calling & MCP Agent',
    category: 'agents',
    categoryLabel: 'AI Agents & MCP',
    badge: 'Model Context Protocol',
    tagline: 'Autonomous multi-step candidate application & interview screening agent connecting via MCP JSON-RPC.',
    description: 'Engineered an autonomous application agent adhering strictly to the Model Context Protocol (MCP) JSON-RPC specification. It extracts semantic profile telemetry from candidate resumes, negotiates pre-signed S3 upload tokens, streams binary assets, responds to dynamic screening questionnaires, and logs reproducible session audit trails.',
    highlights: [
      'Native MCP client handling bidirectional JSON-RPC tool calls and session handshakes',
      'Direct-to-S3 binary resume streaming with MD5 verification and pre-signed token handling',
      'Resilient HTTP unwrapping with automatic retry, exponential backoff, and idempotent submission checks'
    ],
    architecture: 'Local Resume PDF -> Fast Semantic Parser -> DevX MCP Core (JSON-RPC) -> S3 Pre-signed Upload -> Screening Tool Dispatcher -> Audit Session Finalizer',
    pipeline: [
      { title: 'Resume Telemetry Extraction', detail: 'Parse unstructured PDF content into standardized candidate parameters and skill graphs.' },
      { title: 'MCP Handshake & Protocol Auth', detail: 'Negotiate secure session with DevX Gateway using token-based MCP protocol.' },
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
    githubUrl: 'https://github.com/parmarjh/AI-JOB-AGENT-',
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
    id: 'real-time-voice-agents',
    title: 'Real-Time Voice Agents with Deepgram & Vonage',
    category: 'agents',
    categoryLabel: 'Voice & Agents',
    badge: 'Low-Latency Audio AI',
    tagline: 'Sub-300ms bidirectional conversational voice agents with live telephony integration via Vonage and Deepgram Nova.',
    description: 'Designed a real-time voice intelligence pipeline streaming audio buffers directly through Deepgram Nova-2 speech-to-text, an LLM reasoning engine, and low-latency neural text-to-speech. Connects to enterprise telephony over Vonage WebSockets with full turn-taking interruption handling.',
    highlights: [
      'Sub-300 millisecond voice-to-voice response pipeline with streaming STT and TTS',
      'Full-duplex audio over WebSockets with barge-in voice activity detection (VAD)',
      'Vonage Telephony SIP gateway bridging web AI agents with standard phone networks'
    ],
    architecture: 'Inbound Call -> Vonage SIP/WebSocket -> Deepgram Nova STT -> Streaming LLM Reasoner -> Neural TTS -> Outbound Audio Stream',
    pipeline: [
      { title: 'Audio Stream Ingestion', detail: 'Capture 16kHz PCM audio buffers via Vonage WebSocket with low jitter buffering.' },
      { title: 'Streaming STT', detail: 'Convert acoustic frames to interim transcript tokens via Deepgram Nova-2 in under 120ms.' },
      { title: 'Turn-Taking Gate', detail: 'Detect speaker pauses and handle barge-in interruptions instantaneously.' },
      { title: 'LLM Generation & TTS', detail: 'Stream generative response tokens directly into neural speech synthesizers.' }
    ],
    tags: ['Deepgram', 'Vonage API', 'Python', 'WebSockets', 'Voice AI', 'FastAPI'],
    metrics: [
      { label: 'End-to-End Latency', value: '< 290ms' },
      { label: 'WER Benchmark', value: '4.8%' },
      { label: 'Concurrent Channels', value: '50+ Streams' }
    ],
    githubUrl: 'https://github.com/parmarjh/-Build-Real-time-Voice-Agents',
    featured: true
  },
  {
    id: 'hand-gesture-pc-control',
    title: 'AI Hand Gesture PC Control & Gesture Navigation',
    category: 'vision',
    categoryLabel: 'Computer Vision',
    badge: 'Spatial Hand Tracking',
    tagline: 'Real-time contactless human-computer interface tracking 21 3D finger landmarks to control desktop interfaces.',
    description: 'Production edge computer vision system mapping 21 normalized 3D hand landmarks via MediaPipe to translate physical air gestures into mouse clicks, window navigation, and volume adjustments at 60 FPS without specialized hardware.',
    highlights: [
      '21 3D skeletal landmark coordinate normalization invariant to camera distance and tilt',
      'Dynamic gesture velocity smoothing preventing cursor jitter and false trigger states',
      'Ultra-lightweight edge inference running at 60 FPS on standard consumer webcams'
    ],
    architecture: 'Webcam Stream (60 FPS) -> MediaPipe Hands -> 3D Coordinate Normalizer -> Kinematic Kalman Filter -> OS Event Dispatcher',
    pipeline: [
      { title: 'Optical Stream', detail: 'Capture live video frames with WebRTC/OpenCV at native camera frame rates.' },
      { title: 'Landmark Extraction', detail: 'Extract 21 3D coordinates per hand in real-time using lightweight neural backbones.' },
      { title: 'Velocity Smoothing', detail: 'Apply exponential Kalman filtering to eliminate hand tremor and camera noise.' },
      { title: 'Gesture Trigger', detail: 'Calculate euclidean finger distances to trigger drag, click, and scroll events.' }
    ],
    tags: ['MediaPipe', 'OpenCV', 'Python', 'PyAutoGUI', 'Edge Vision', 'NumPy'],
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Inference Time', value: '14ms' },
      { label: 'Control Precision', value: '99.1%' }
    ],
    githubUrl: 'https://github.com/parmarjh/AI-Hand-Gesture-PC-Control-System',
    featured: true
  },
  {
    id: 'contra-ai',
    title: 'Contra.AI — Cultural Language Model Interface',
    category: 'genai',
    categoryLabel: 'Generative AI',
    badge: 'Cultural LLM Tuning',
    tagline: 'Multi-lingual culturally-grounded interface adapting generative LLM context across diverse regional Indic dialects.',
    description: 'Engineered an interactive cultural language model interface that bridges regional nuance, localized idioms, and Indic dialect translation. Combines cultural context embedding layers with dynamic guardrails to ensure cultural sensitivity and accurate dialect transfer.',
    highlights: [
      'Regional dialect alignment preserving linguistic nuance and idioms across Indic languages',
      'Dynamic guardrail filters checking cultural context and vernacular sentiment',
      'Clean interactive UI built for frictionless multilingual query exploration'
    ],
    architecture: 'User Query -> Cultural Tokenizer -> Regional Context Injector -> Domain Fine-Tuned Transformer -> Cultural Guardrail -> Localized Response',
    pipeline: [
      { title: 'Dialect Recognition', detail: 'Classify regional language roots and informal vernacular expressions.' },
      { title: 'Context Grounding', detail: 'Augment prompt representations with regional cultural knowledge vectors.' },
      { title: 'Synthesized Response', detail: 'Generate localized, respectful dialect responses with high semantic fidelity.' }
    ],
    tags: ['NLP', 'Transformers', 'HTML5', 'Indic NLP', 'Cultural AI', 'FastAPI'],
    metrics: [
      { label: 'Dialect Coverage', value: '6+ Indic Regions' },
      { label: 'Sentiment Precision', value: '96.2%' },
      { label: 'Latency', value: '480ms' }
    ],
    githubUrl: 'https://github.com/parmarjh/-Contra.AI-',
    featured: true
  },
  {
    id: 'ai-agent-control-plane',
    title: 'AI Agent Control Plane & Multi-Agent Orchestrator',
    category: 'agents',
    categoryLabel: 'AI Agents & MCP',
    badge: 'Distributed Orchestration',
    tagline: 'Production control plane managing lifecycle, health monitoring, tool routing, and state persistence for multi-agent fleets.',
    description: 'Architected a distributed control plane designed to manage, monitor, and route tasks across heterogeneous AI agents. Includes real-time health telemetry, circuit-breaker fault isolation, distributed session state in Redis/PostgreSQL, and policy-driven tool access control.',
    highlights: [
      'Centralized control plane managing agent registry, health status, and state persistence',
      'Dynamic tool routing with circuit breakers isolating faulty tool APIs without crashing workflows',
      'Audit logging and replay capabilities for regulatory compliance and debugging'
    ],
    architecture: 'Task Gateway -> Agent Router -> State Manager (Redis/PostgreSQL) -> Tool Execution Sandbox -> Telemetry Stream',
    pipeline: [
      { title: 'Job Dispatch', detail: 'Receive complex user requests and decompose them into directed acyclic task graphs.' },
      { title: 'Agent Assignment', detail: 'Route sub-tasks to specialized worker agents based on capability tags and load.' },
      { title: 'Tool Execution', detail: 'Run tools inside sandboxed execution runners with strict timeout and access controls.' },
      { title: 'Result Synthesis', detail: 'Aggregate multi-agent outputs into a validated consensus response.' }
    ],
    tags: ['Python 3.11', 'FastAPI', 'Redis', 'PostgreSQL', 'Multi-Agent', 'Docker'],
    metrics: [
      { label: 'Task Throughput', value: '250 jobs/sec' },
      { label: 'Fault Recovery', value: '< 200ms' },
      { label: 'Tool Success Rate', value: '99.7%' }
    ],
    githubUrl: 'https://github.com/parmarjh/AI-Agent-Control-Plane',
    featured: true
  },
  {
    id: 'ai-vision-sentinel',
    title: 'AI Vision Sentinel — Intelligent Facial & Security Sentinel',
    category: 'vision',
    categoryLabel: 'Computer Vision',
    badge: 'Real-Time Edge CV',
    tagline: 'Real-time facial identification, web knowledge enrichment, and visual surveillance sentinel.',
    description: 'Built a real-time computer vision security platform combining facial recognition with Wikipedia knowledge graph retrieval. Tracks multiple identities across surveillance cameras, detects unauthorized visitors, and streams alert webhooks to security operation centers.',
    highlights: [
      'Deep embedding facial recognition with cosine similarity matching against high-scale galleries',
      'Dynamic web scraping integration fetching verified contextual metadata on identified subjects',
      'Sub-50ms inference optimized for deployment on edge security nodes and Jetson devices'
    ],
    architecture: 'RTSP Video Feed -> Face Detector (RetinaFace) -> 512-dim ArcFace Embedder -> FAISS Vector Gallery -> Context Enricher -> Webhook Alert',
    pipeline: [
      { title: 'Video Ingestion', detail: 'Decode RTSP security streams at 30 FPS with GPU hardware acceleration.' },
      { title: 'Face Localization', detail: 'Detect face bounding boxes and facial keypoints under varying illumination.' },
      { title: 'Embedding Search', detail: 'Search 512-dimensional facial representations across FAISS indices in under 8ms.' },
      { title: 'Alert Dispatch', detail: 'Trigger prioritized security alerts when unregistered individuals enter restricted zones.' }
    ],
    tags: ['Python', 'OpenCV', 'PyTorch', 'FAISS', 'RetinaFace', 'Security Tech'],
    metrics: [
      { label: 'Identification Acc', value: '99.2%' },
      { label: 'Inference Latency', value: '38ms' },
      { label: 'Edge FPS', value: '45 FPS' }
    ],
    githubUrl: 'https://github.com/parmarjh/AI-Vision-Sentinel',
    featured: true
  },
  {
    id: 'ai-irctc-chatbot',
    title: 'AI IRCTC Chatbot & Railway Passenger Assistant',
    category: 'agents',
    categoryLabel: 'Generative AI & LLMs',
    badge: 'Conversational Agent',
    tagline: 'Intelligent multi-lingual conversational agent providing PNR status, live train tracking, and seat availability.',
    description: 'Architected an AI-powered conversational agent tailored for Indian Railways (IRCTC). Processes natural language passenger queries in Hindi, English, and regional languages, integrating with live train schedules, PNR status APIs, and booking guidance.',
    highlights: [
      'Multi-lingual natural language understanding for complex Indian passenger travel queries',
      'Live tool integration fetching real-time PNR status, platform numbers, and train delays',
      'Context-aware multi-turn conversation memory handling itinerary changes smoothly'
    ],
    architecture: 'Passenger Query -> Intent Classifier -> Tool Dispatcher (IRCTC API Gateway) -> Generative Synthesizer -> Multilingual Response',
    pipeline: [
      { title: 'Query Parsing', detail: 'Extract PNR numbers, station codes, and journey dates from conversational input.' },
      { title: 'Live Data Fetch', detail: 'Call railway operational endpoints for live telemetry and schedule status.' },
      { title: 'Friendly Synthesis', detail: 'Format technical train status into clear, reassuring natural language updates.' }
    ],
    tags: ['Python', 'FastAPI', 'LangChain', 'NLP', 'Multilingual AI', 'APIs'],
    metrics: [
      { label: 'Intent Accuracy', value: '97.5%' },
      { label: 'Response Time', value: '620ms' },
      { label: 'Languages', value: 'Hindi & English' }
    ],
    githubUrl: 'https://github.com/parmarjh/AI-IRCTC-CHATBOT',
    featured: false
  },
  {
    id: 'meeting-focus-assistant',
    title: 'Meeting Focus Assistant & Interruption Filter',
    category: 'agents',
    categoryLabel: 'Productivity AI',
    badge: 'TypeScript & Audio',
    tagline: 'Real-time meeting copilot prioritizing urgent communications and filtering non-essential interruptions during calls.',
    description: 'Built a smart meeting focus assistant application in TypeScript. Analyzes incoming call messages, meeting transcripts, and chat alerts to surface high-priority action items while muting distracting background notifications.',
    highlights: [
      'Semantic urgency classification scoring incoming notifications during high-focus calls',
      'Real-time meeting transcript summarization extracting agreed action items automatically',
      'Cross-platform web application deployed on Vercel with clean responsive controls'
    ],
    architecture: 'Meeting Audio/Chat -> Web Speech API -> Semantic Priority Classifier -> Real-Time Notification Gate -> Focus Dashboard',
    pipeline: [
      { title: 'Stream Monitoring', detail: 'Track active meeting state and monitor incoming notification streams.' },
      { title: 'Urgency Scoring', detail: 'Evaluate sender importance and semantic message intent.' },
      { title: 'Focus Guard', detail: 'Deliver immediate alerts only for mission-critical team emergencies.' }
    ],
    tags: ['TypeScript', 'React', 'Vercel', 'Web Speech API', 'Productivity AI'],
    metrics: [
      { label: 'Interruption Reduction', value: '68%' },
      { label: 'Urgency Recall', value: '99.1%' },
      { label: 'Deployment', value: 'Vercel Edge' }
    ],
    githubUrl: 'https://github.com/parmarjh/-Meeting-Focus-Assistant',
    featured: false
  },
  {
    id: 'resume-analyzer-summary',
    title: 'Autonomous Resume Analyzer & Candidate Scoring Agent',
    category: 'agents',
    categoryLabel: 'HR Tech & LLMs',
    badge: 'Document Intelligence',
    tagline: 'Automated candidate resume parsing, semantic competency mapping, and structured interview summary generation.',
    description: 'Engineered an automated document intelligence pipeline that digests multi-format candidate resumes (PDF, DOCX). Extracts skill ontologies, assesses candidate fit against specific job descriptions, and generates structured executive evaluation summaries.',
    highlights: [
      'Multi-format resume ingestion with OCR fallback for scanned applications',
      'Semantic skill graph matching quantifying candidate experience against role requirements',
      'Automated interview question generation targeting specific candidate resume gaps'
    ],
    architecture: 'Resume File -> Textract/PyPDF Parser -> Entity Extraction (NER) -> Skill Vector Matcher -> LLM Interview Generator',
    pipeline: [
      { title: 'Document Parsing', detail: 'Extract clean markdown and structural sections from unstructured PDF resumes.' },
      { title: 'Entity Extraction', detail: 'Identify years of experience, programming languages, cloud stacks, and degrees.' },
      { title: 'Match Scoring', detail: 'Compute cosine similarity and semantic overlap against job specification vectors.' }
    ],
    tags: ['Python', 'LLM Agents', 'PyPDF', 'Vector Search', 'NLP', 'FastAPI'],
    metrics: [
      { label: 'Parsing Speed', value: '1.2s / resume' },
      { label: 'Skill Match Precision', value: '94.8%' },
      { label: 'Formats Supported', value: 'PDF, DOCX, TXT' }
    ],
    githubUrl: 'https://github.com/parmarjh/Analyzes-each-resume-and-creates-a-summary',
    featured: false
  },
  {
    id: '3d-city-million-cars',
    title: '3D City Digital Twin — 100,000 GPU-Instanced Vehicles',
    category: 'systems',
    categoryLabel: 'Urban AI & Systems',
    badge: 'WebGL & GPU Instancing',
    tagline: 'Large-scale web-based 3D city digital twin with 100,000 GPU-instanced moving vehicles and dynamic traffic simulation.',
    description: 'Interactive high-performance urban digital twin simulating 100,000 moving vehicles in 3D. Employs MapLibre GL, custom Three.js layers, OGC 3D Tiles, and GPU hardware instancing to render dynamic municipal mobility patterns at 60 FPS in standard browsers.',
    highlights: [
      'GPU hardware instancing rendering 100,000 independent vehicles at smooth 60 FPS',
      'Integration of MapLibre GL geospatial tiles with Three.js custom depth and shadow rendering',
      'Runtime Level-of-Detail (LOD) management optimizing render budgets across camera zoom levels'
    ],
    architecture: 'Urban Road Graph -> Agent Traffic Simulation -> GPU Vertex Shader Buffers -> Three.js Custom Layer -> MapLibre GL Canvas',
    pipeline: [
      { title: 'Road Network Ingestion', detail: 'Load OpenStreetMap vector road graphs and spatial intersection nodes.' },
      { title: 'Instanced Buffer Generation', detail: 'Pack vehicle matrices (position, orientation, velocity) into GPU instanced buffers.' },
      { title: 'Dynamic Simulation', detail: 'Update vehicle positions in Web Workers to prevent main thread frame drops.' }
    ],
    tags: ['Three.js', 'MapLibre GL', 'WebGL', 'GPU Instancing', 'Urban Digital Twin', 'TypeScript'],
    metrics: [
      { label: 'Active Vehicles', value: '100,000 Cars' },
      { label: 'Browser FPS', value: '60 FPS' },
      { label: 'Memory Footprint', value: '< 180MB' }
    ],
    githubUrl: 'https://github.com/parmarjh/3d-city-million-cars',
    featured: true
  },
  {
    id: 'adas-collision-avoidance',
    title: 'ADAS Collision Avoidance System for Indian Roads',
    category: 'vision',
    categoryLabel: 'Computer Vision',
    badge: 'Automotive Edge AI',
    tagline: 'Deep learning collision warning system calibrated for high-density, heterogeneous Indian roadway conditions.',
    description: 'Automotive computer vision solution addressing challenging road environments (auto-rickshaws, stray cattle, pedestrians, lane-less traffic). Implements forward collision warning (FCW) and time-to-collision (TTC) estimation using monocular depth estimation and YOLO detection.',
    highlights: [
      'Trained on extensive Indian driving datasets covering unstandardized vehicle types and pedestrians',
      'Monocular depth estimation calculating relative object distance without expensive LiDAR sensors',
      'Time-to-Collision (TTC) mathematical modeling triggering audible driver alerts within 35ms'
    ],
    architecture: 'Dashcam Feed -> YOLO Object Detector -> Monocular Depth Estimator -> TTC Kalman Tracker -> Audio Alert Engine',
    pipeline: [
      { title: 'Video Ingestion', detail: 'Stream 1080p vehicle front camera frames at 30 FPS.' },
      { title: 'Heterogeneous Detection', detail: 'Detect vehicles, rickshaws, pedestrians, and animals simultaneously.' },
      { title: 'Distance & TTC Vectoring', detail: 'Calculate distance rate of change (dZ/dt) and trigger progressive collision warnings.' }
    ],
    tags: ['PyTorch', 'YOLO', 'OpenCV', 'Python', 'ADAS', 'Edge AI'],
    metrics: [
      { label: 'Collision Warning Lead', value: '2.5 Seconds' },
      { label: 'Detection Accuracy', value: '95.4%' },
      { label: 'Inference Speed', value: '32ms (Jetson)' }
    ],
    githubUrl: 'https://github.com/parmarjh/ADAS-Collision-Avoidance-System-on-Indian-Roads',
    featured: true
  },
  {
    id: '3rd-umpire-drs',
    title: 'Cricket 3rd Umpire Decision Review System (DRS)',
    category: 'vision',
    categoryLabel: 'Computer Vision',
    badge: 'Sports Analytics',
    tagline: 'Automated video analytics system for cricket run-out, stump, and ball-tracking review decisions.',
    description: 'Designed a computer vision sports analytics tool that automates cricket third-umpire decisions. Features sub-frame crease crossing detection, ball trajectory tracking, and bail displacement verification using optical flow and high-speed frame interpolation.',
    highlights: [
      'Sub-pixel crease line detection and bat tip localization under extreme angles',
      'Automated bail displacement trigger synchronization with crease crossing timestamps',
      'Slow-motion frame interpolation assisting match officials with definitive visual proof'
    ],
    architecture: 'Broadcast RTSP Feed -> Crease Detector -> Bat/Foot Tracker -> Bail Displacement Detector -> Decision Frame Synchronizer',
    pipeline: [
      { title: 'Crease Calibration', detail: 'Calibrate pitch perspective and establish virtual crease boundary planes.' },
      { title: 'Object Tracking', detail: 'Track bat tip, batsman foot, and ball coordinates frame-by-frame.' },
      { title: 'Impact Verification', detail: 'Confirm wicket-keeper glove contact and bail removal time offsets.' }
    ],
    tags: ['Python', 'OpenCV', 'PyTorch', 'Sports AI', 'Optical Flow'],
    metrics: [
      { label: 'Decision Accuracy', value: '99.4%' },
      { label: 'Frame Analysis', value: '120 FPS' },
      { label: 'Processing Delay', value: '< 1.8s' }
    ],
    githubUrl: 'https://github.com/parmarjh/3RD-UMPIRE-DECISION-REVIEW-SYSTEM',
    featured: false
  },
  {
    id: 'ai-avatar-digital-human',
    title: 'AI Avatar & Real-Time Lip-Sync Digital Human',
    category: 'genai',
    categoryLabel: 'Generative AI',
    badge: 'Digital Human AI',
    tagline: 'Real-time conversational digital human: upload a portrait, clone a voice, and interact with synchronized facial animation.',
    description: 'Full-stack open-source digital human avatar system combining Claude language models, Whisper speech recognition, voice cloning, and MuseTalk neural lip-sync video generation to converse in real time.',
    highlights: [
      'Photo-to-avatar generation animating static portrait images into speaking digital humans',
      'Sub-second voice cloning synthesizing personalized vocal characteristics from audio samples',
      'Real-time lip synchronization with frame-accurate phoneme-to-viseme mapping'
    ],
    architecture: 'User Voice -> Whisper STT -> Claude LLM -> Voice Clone TTS -> MuseTalk Lip-Sync -> WebRTC Video Stream',
    pipeline: [
      { title: 'Acoustic Processing', detail: 'Transcribe user speech in real time with Whisper.' },
      { title: 'Dialogue Generation', detail: 'Generate conversational personality responses via Claude.' },
      { title: 'Neural Lip-Sync', detail: 'Synthesize synchronized video frames matching audio phonemes with MuseTalk.' }
    ],
    tags: ['Whisper', 'Claude', 'MuseTalk', 'Python', 'WebRTC', 'Generative Vision'],
    metrics: [
      { label: 'Lip-Sync Accuracy', value: '98.1%' },
      { label: 'Video FPS', value: '30 FPS' },
      { label: 'Response Latency', value: '~850ms' }
    ],
    githubUrl: 'https://github.com/parmarjh/ai-avatar-system',
    featured: true
  },
  {
    id: 'ai-weather-pdf-qa-naura',
    title: 'AI Weather PDF Insights QA Agent (Naura)',
    category: 'genai',
    categoryLabel: 'RAG & Agents',
    badge: 'Meteorological AI',
    tagline: 'Autonomous document research agent analyzing complex meteorological reports and climate weather PDFs.',
    description: 'Specialized document question-answering agent focused on meteorological reports, weather radar PDFs, and climate datasets. Employs tabular data extraction, meteorological terminology tokenization, and strict source citation grounding.',
    highlights: [
      'Meteorological chart and tabular data parsing preserving spatial atmospheric indices',
      'Hybrid dense-lexical retrieval querying complex climate bulletins and radar reports',
      'Precise numerical grounding eliminating hallucination on rainfall and temperature metrics'
    ],
    architecture: 'Climate PDF -> Tabular Parser -> Meteorological Vector DB -> RAG Reasoner -> Grounded Climate Report',
    pipeline: [
      { title: 'PDF Ingestion', detail: 'Extract tables, charts, and narrative weather bulletins.' },
      { title: 'Domain Indexing', detail: 'Generate embeddings specialized for meteorological parameters.' },
      { title: 'Verified Answering', detail: 'Provide answers strictly referencing source page and table indices.' }
    ],
    tags: ['Python', 'RAG', 'Meteorology', 'FastAPI', 'LangChain', 'PDF Intelligence'],
    metrics: [
      { label: 'Citation Grounding', value: '100%' },
      { label: 'Table Extraction Acc', value: '96.8%' },
      { label: 'Query Time', value: '540ms' }
    ],
    githubUrl: 'https://github.com/parmarjh/AI_Weather-PDF-QA-Agent-Naura',
    featured: false
  },
  {
    id: 'ai-fitness-rep-counter',
    title: 'AI Fitness Pose Estimator & Workout Repetition Counter',
    category: 'vision',
    categoryLabel: 'Computer Vision',
    badge: 'Human Pose AI',
    tagline: 'Automated workout repetition counter and posture defect corrector utilizing real-time skeletal angle kinematics.',
    description: 'High-speed computer vision workout trainer tracking 33 skeletal joint landmarks. Computes real-time angular kinematics across elbows, knees, and hips to accurately count exercise repetitions and provide vocal posture correction.',
    highlights: [
      '33-point body skeletal tracking evaluating anatomical joint flexion and extension angles',
      'State-machine repetition counter rejecting partial or defective form movements',
      'Audio-visual feedback providing immediate posture adjustments for injury prevention'
    ],
    architecture: 'Camera Stream -> Pose Landmark Network -> Joint Angle Calculator -> Exercise State Machine -> Repetition Voice Counter',
    pipeline: [
      { title: 'Skeletal Detection', detail: 'Extract 33 3D body vertices simultaneously at 45 FPS.' },
      { title: 'Kinematic Angle Math', detail: 'Compute geometric angles across joint triplets (e.g. hip-knee-ankle).' },
      { title: 'Repetition Validation', detail: 'Increment count only when full range of motion criteria is verified.' }
    ],
    tags: ['MediaPipe', 'OpenCV', 'Python', 'Fitness Tech', 'Pose Estimation'],
    metrics: [
      { label: 'Rep Count Accuracy', value: '98.7%' },
      { label: 'Frame Rate', value: '45+ FPS' },
      { label: 'Angle Resolution', value: '0.5 Degrees' }
    ],
    githubUrl: 'https://github.com/parmarjh/AI-Fitness',
    featured: false
  },
  {
    id: 'analyze-github-code',
    title: 'Analyze GitHub Code — AI Repository Inspector',
    category: 'agents',
    categoryLabel: 'Developer Tools',
    badge: 'Code Intelligence',
    tagline: 'Static AST analysis and LLM explanation agent inspecting remote GitHub repositories for security and architecture.',
    description: 'Developer productivity tool that clones and parses GitHub repositories into Abstract Syntax Trees (AST). Automatically identifies architectural bottlenecks, missing error handlers, security vulnerabilities, and generates modular documentation.',
    highlights: [
      'Automated repository cloning and multi-language Abstract Syntax Tree parsing',
      'Static security vulnerability scanning combined with contextual LLM remediation guides',
      'Interactive terminal and web summary report generation for engineering teams'
    ],
    architecture: 'GitHub Repo URL -> Git Cloner -> Tree-Sitter AST Parser -> Vulnerability Scanner -> LLM Explainer -> Markdown Report',
    pipeline: [
      { title: 'Repo Clone', detail: 'Perform shallow git clone and build directory tree structure.' },
      { title: 'AST Parse', detail: 'Extract functions, classes, dependencies, and cyclomatic complexity.' },
      { title: 'AI Audit', detail: 'Highlight security issues, performance hot-spots, and generate fixes.' }
    ],
    tags: ['Python', 'Tree-Sitter', 'GitHub API', 'Code LLM', 'AST Analysis'],
    metrics: [
      { label: 'Scan Time', value: '< 15s / 10k LOC' },
      { label: 'Vulnerability Recall', value: '96.1%' },
      { label: 'Languages Supported', value: 'Python, TS, JS, C++' }
    ],
    githubUrl: 'https://github.com/parmarjh/Analyze-Github-Code',
    featured: false
  }
]
