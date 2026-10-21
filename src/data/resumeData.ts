export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  description: string
  techCategory: string
  technologies: string[]
}

export interface EducationItem {
  id: string
  degree: string
  institution: string
  period: string
  grade: string
  description: string
  certificateUrl?: string
}

export interface AchievementItem {
  id: string
  title: string
  subtitle: string
  period: string
  description: string
  linkText: string
  linkUrl: string
  category: 'publication' | 'github' | 'youtube' | 'certification' | 'competitive'
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Generative AI & Machine Learning Engineer',
    company: 'Independent & Production Systems',
    period: '2023 – Present',
    description: 'Architecting and deploying end-to-end Generative AI, Agentic Workflows, and Computer Vision systems. Designed multi-agent architectures adhering to the Model Context Protocol (MCP), optimized hybrid RAG pipelines with Reciprocal Rank Fusion and cross-encoder reranking, and built edge-capable deep learning models with sub-50ms latency.',
    techCategory: 'Technologies and Areas of Focus:',
    technologies: [
      'Agentic AI – Multi-Agent Systems (MAS), Model Context Protocol (MCP), LangChain, DSPy',
      'Generative AI – Azure OpenAI, RAG, Hybrid Retrieval, LoRA / QLoRA Fine-Tuning, Hugging Face',
      'Computer Vision – PyTorch, MediaPipe 3D Landmark Tracking, Spatial-Temporal LRCN, YOLOv8',
      'Cloud & Data – Google Cloud BigQuery, AWS S3 Streaming, FastAPI, Docker, WebSockets'
    ]
  },
  {
    id: 'exp-2',
    role: 'Autonomous Agent Architect & MCP Developer',
    company: 'DevX Systems & Research',
    period: '2024 – Present',
    description: 'Engineered an autonomous multi-step candidate application agent strictly conforming to the Model Context Protocol (MCP) JSON-RPC standard. Built resilient cloud streaming pipelines negotiating time-limited pre-signed S3 tokens, dynamic tool dispatching for screening questionnaires, and reproducible cryptographic audit trails.',
    techCategory: 'Technologies and Areas of Focus:',
    technologies: [
      'Protocol – Model Context Protocol (MCP v1), JSON-RPC 2.0 tool execution and handshakes',
      'Cloud & Storage – Direct-to-S3 pre-signed binary streaming, multipart verification',
      'Backend – Python 3.11, FastAPI, AsyncIO, Rich Terminal telemetry, Pydantic v2',
      'Reliability – Exponential backoff retry policies, idempotent submission checks'
    ]
  },
  {
    id: 'exp-3',
    role: 'Computer Vision & Deep Learning Researcher',
    company: 'SignTranslateAI & Neural Vision Lab',
    period: '2023 – 2024',
    description: 'Researched and built SignTranslateAI, a real-time sign language neural translation platform capturing 21 3D spatial hand coordinates via MediaPipe. Trained dual-stream spatial-temporal LSTM/GRU networks classifying continuous multi-gesture sentences with 98.4% accuracy and sub-40ms client-side inference.',
    techCategory: 'Technologies and Areas of Focus:',
    technologies: [
      'Deep Learning – PyTorch, TensorFlow, Spatial-Temporal LSTM/GRU, CNN-LSTM (LRCN)',
      'Vision Pipeline – MediaPipe 21 3D hand coordinates, OpenCV, WebRTC optical stream capture',
      'Frontend – React 19, TypeScript, WebGL/Canvas 2D landmark rendering, WebSockets',
      'Metrics – 98.4% benchmark gesture recognition accuracy, ~35ms end-to-end latency'
    ]
  },
  {
    id: 'exp-4',
    role: 'High-Throughput IoT & Urban Systems Engineer',
    company: 'City Digital Twin & Telemetry Platform',
    period: '2022 – 2023',
    description: 'Designed a large-scale municipal digital twin platform streaming 10,000+ IoT telemetry records per second into Google Cloud BigQuery. Engineered spatio-temporal graph neural models predicting urban congestion bottlenecks 45 minutes ahead, partitioned using H3 hexagonal hierarchical spatial indices.',
    techCategory: 'Technologies and Areas of Focus:',
    technologies: [
      'Data Warehouse – Google Cloud BigQuery high-throughput streaming and partitioning',
      'Spatial ML – Spatio-Temporal Graph Convolutions, H3 Hexagonal Spatial Indexing (Res 9)',
      'Backend & Pipelines – Cloud Pub/Sub, Python, FastAPI, Docker, PostgreSQL',
      'Visualization – Interactive WebGL municipal digital twin dashboard layers'
    ]
  }
]

export const EDUCATIONS: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Engineering / Technology in Computer Engineering',
    institution: 'Gujarat Technological University (GTU)',
    period: '2019 – 2023',
    grade: 'First Class with Distinction',
    description: 'Rigorous coursework focused on Artificial Intelligence, Machine Learning, Data Structures & Algorithms, Computer Vision, Distributed Cloud Computing, and Operating Systems. Completed capstone research on neural gesture recognition and intelligent telemetry systems.',
    certificateUrl: 'https://github.com/parmarjh'
  },
  {
    id: 'edu-2',
    degree: 'Higher Secondary Certificate (HSC) – Science Stream',
    institution: 'Gujarat Secondary and Higher Secondary Education Board (GSEB)',
    period: '2017 – 2019',
    grade: 'Distinction (Mathematics, Physics, Chemistry & Computer Science)',
    description: 'Core foundation in Advanced Mathematics, Calculus, Linear Algebra, Probability & Statistics, Physics, and foundational Computer Science with C++ and Algorithms.',
    certificateUrl: 'https://github.com/parmarjh'
  },
  {
    id: 'edu-3',
    degree: 'Specialized Generative AI & Deep Learning Certifications',
    institution: 'DeepLearning.AI & Cloud Platforms',
    period: '2023 – 2024',
    grade: 'Certified',
    description: 'Advanced certifications in Large Language Models (LLMs), LangChain, Model Context Protocol (MCP), RAG architectures, Deep Learning Specialization with PyTorch, and BigQuery Data Engineering.',
    certificateUrl: 'https://github.com/parmarjh'
  }
]

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Technical Author & Architecture Publisher',
    subtitle: 'Medium & Dev.to Tech Blogs',
    period: '2023 – Present',
    description: 'Regularly author in-depth architectural guides on Model Context Protocol (MCP), zero-hallucination enterprise RAG with hybrid reranking, MediaPipe gesture neural pipelines, and high-throughput BigQuery streaming. Read by thousands of AI practitioners globally.',
    linkText: 'Read Publications on Medium',
    linkUrl: 'https://jhparmar.medium.com',
    category: 'publication'
  },
  {
    id: 'ach-2',
    title: 'Open Source AI Systems & Repositories',
    subtitle: 'GitHub @parmarjh',
    period: '2022 – Present',
    description: 'Published 8+ production-ready open-source Generative AI and Computer Vision codebases, including MCP client-server engines, spatial-temporal gesture classifiers, and clinical decision support telemetry pipelines.',
    linkText: 'Explore GitHub Repositories',
    linkUrl: 'https://github.com/parmarjh',
    category: 'github'
  },
  {
    id: 'ach-3',
    title: 'AI & Data Insights YouTube Channel',
    subtitle: 'Educational Video Tutorials & Walkthroughs',
    period: '2023 – Present',
    description: 'Created educational video walkthroughs demonstrating real-time AI implementations, Model Context Protocol integration, deep learning debugging, and modern full-stack AI system deployment.',
    linkText: 'Visit YouTube Channel',
    linkUrl: 'https://www.youtube.com/channel/UCSLMS3odjPxesH02jnhWMnA',
    category: 'youtube'
  },
  {
    id: 'ach-4',
    title: 'Hugging Face AI Models & Datasets',
    subtitle: 'Hugging Face @jhparmar',
    period: '2023 – Present',
    description: 'Published fine-tuned bio-medical question-answering checkpoints and gesture classification dataset weights for the open AI research community.',
    linkText: 'View Hugging Face Profile',
    linkUrl: 'https://huggingface.co/jhparmar',
    category: 'certification'
  },
  {
    id: 'ach-5',
    title: 'Algorithmic Problem Solving & System Design',
    subtitle: 'LeetCode & Competitive Coding',
    period: '2021 – Present',
    description: 'Consistently solve Data Structures & Algorithms challenges spanning Dynamic Programming, Graph Theory, Sliding Window, Trees, and Two-Pointer paradigms to uphold high-performance code standards and low-latency system design.',
    linkText: 'View GitHub Code Portfolio',
    linkUrl: 'https://github.com/parmarjh',
    category: 'competitive'
  }
]
