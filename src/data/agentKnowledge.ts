export interface AgentPromptOption {
  id: string
  label: string
  query: string
  response: {
    title: string
    summary: string
    stack: string[]
    keyHighlights: string[]
    recommendedProject: string
  }
}

export const AGENT_PROMPTS: AgentPromptOption[] = [
  {
    id: 'mcp-agent',
    label: 'How does your DevX MCP Agent work?',
    query: 'Can you explain how you implemented the Model Context Protocol (MCP) in your job agent?',
    response: {
      title: 'Model Context Protocol (MCP) Client Architecture',
      summary: 'I implemented a native JSON-RPC 2.0 client that negotiates directly with DevX hiring core servers. It uses bidirectional tool calling to dynamically retrieve screening questions, stream candidate PDFs to AWS S3 via time-delimited presigned URLs, and log cryptographically traceable audit logs.',
      stack: ['Python 3.11', 'MCP JSON-RPC', 'AWS S3 Streaming', 'Rich CLI', 'FastAPI'],
      keyHighlights: [
        'Decoupled tool execution loop handling unpredictable tool payloads dynamically',
        'Direct streaming to cloud storage avoiding server disk exhaustion',
        'Idempotent submission checks preventing duplicate applications'
      ],
      recommendedProject: 'devx-job-agent'
    }
  },
  {
    id: 'rag-architecture',
    label: 'What is your approach to Enterprise RAG?',
    query: 'How do you prevent hallucinations and ensure low-latency retrieval in production RAG?',
    response: {
      title: 'Hybrid Retrieval + Cross-Encoder Reranking Framework',
      summary: 'Standard vector search often fails on specific acronyms and IDs. My architecture combines dense semantic embeddings with BM25 keyword indices via Reciprocal Rank Fusion (RRF), followed by a cross-encoder reranker. Hard source verification ensures every sentence has verifiable citation offsets.',
      stack: ['Azure OpenAI', 'Azure AI Search', 'Cross-Encoder Rerankers', 'LangChain', 'Python'],
      keyHighlights: [
        '34% higher recall@3 compared to dense-only embeddings',
        '< 0.8% hallucination rate through strict citation boundary enforcement',
        'Sub-850ms multi-turn query execution with semantic caching'
      ],
      recommendedProject: 'azure-rag-assistant'
    }
  },
  {
    id: 'signtranslate-tech',
    label: 'How does SignTranslateAI achieve 35ms latency?',
    query: 'How did you build real-time sign language translation in the browser?',
    response: {
      title: 'Edge Spatial-Temporal Neural Pipeline',
      summary: 'SignTranslateAI runs MediaPipe directly in the browser to extract 21 3D hand landmarks per frame without uploading video to a server. Only normalized joint vectors are processed through a spatial-temporal recurrent classifier, dropping inference latency to ~35ms at 98.4% accuracy.',
      stack: ['MediaPipe Vision', 'PyTorch / ONNX', 'React 19', 'TypeScript', 'WebSockets'],
      keyHighlights: [
        'Zero raw video transmission ensuring complete user privacy',
        'Normalization pipeline invariant to hand distance and camera angles',
        'Synthesized audio speech stream updated in real time'
      ],
      recommendedProject: 'signtranslate-ai'
    }
  },
  {
    id: 'core-stack',
    label: 'What is your core tech stack for AI/ML?',
    query: 'What technologies and frameworks do you specialize in for Generative AI and ML?',
    response: {
      title: 'Full-Spectrum AI & Engineering Stack',
      summary: 'My expertise spans the entire lifecycle from deep learning model design and fine-tuning to distributed cloud inference and modern responsive web clients.',
      stack: ['PyTorch', 'TensorFlow', 'LangChain/MCP', 'Azure OpenAI', 'BigQuery', 'FastAPI', 'React 19/TS'],
      keyHighlights: [
        'GenAI: MCP protocols, Agentic workflows, LoRA/QLoRA fine-tuning, RAG with hybrid search',
        'Vision: Spatial-temporal LRCN, MediaPipe 3D tracking, YOLOv8 pose estimation',
        'Cloud & Systems: Google BigQuery high-throughput streaming, AWS S3, Docker, microservices'
      ],
      recommendedProject: 'devx-job-agent'
    }
  }
]
