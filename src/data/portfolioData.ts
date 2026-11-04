export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  type: string;
  description: string[];
  technologies: string[];
  highlight?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  metrics: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: "Edge AI & ML" | "Systems & Security" | "IoT & Full-Stack";
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: string;
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: "Competitive Programming" | "Hackathon" | "Certification" | "Open Source";
  organization: string;
  date?: string;
  metric: string;
  description: string;
  badgeText?: string;
  highlight?: boolean;
}

export const PERSONAL_INFO = {
  name: "Ravindran S",
  title: "Software Development Engineer",
  tagline: "Systems, Edge AI & Distributed Engineering",
  email: "ravindrans.dev@gmail.com",
  phone: "+91 82487 02358",
  location: "Chennai, India",
  github: "https://github.com/ravindran-dev",
  linkedin: "https://www.linkedin.com/in/ravindran-s-982702327",
  leetcode: "https://leetcode.com/u/ravindrans_dev/",
  terminalPortfolioUrl: "https://portfolio-ravindrans.vercel.app/",
  resumeUrl: "/resume.pdf",
  summary:
    "Computer Science undergraduate (AI & ML) at Chennai Institute of Technology specializing in Edge AI inference, low-level systems programming, and high-performance software. Engineered sub-1 GFLOP real-time object detection models for autonomous drones achieving 96% mAP with TensorRT INT8 quantization, built security-hardened package managers in Rust with eBPF syscall sandboxing, and contributed patches to Amazon's AWS s2n-tls core security library. LeetCode Knight (2085 peak rating) and 3x Hackathon Winner.",
  education: {
    institution: "Chennai Institute of Technology",
    degree: "B.E. Computer Science & Engineering (AI & ML)",
    period: "Sept 2024 – Present",
    gpa: "CGPA: 9.24 / 10",
    focus: "Data Structures & Algorithms, Computer Vision, Edge Computing, Systems Programming, Distributed Architectures",
  },
  stats: [
    { label: "LeetCode Peak Rating", value: "2085", detail: "Knight Badge (Top 1.5% globally)" },
    { label: "Academic Excellence", value: "9.24", detail: "CGPA at Chennai Institute of Technology" },
    { label: "Hackathon Wins", value: "3x", detail: "Ti Forge, AI for Sustainability, ServiceNow" },
    { label: "Edge Inference", value: "<1 GFLOP", detail: "30+ FPS INT8 Real-Time Drone Model" },
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Drone Technology Team — CIT (NIDAR Competition)",
    role: "Object Detection in Drones",
    period: "Oct 2025 – Dec 2025",
    location: "Chennai, India",
    type: "Edge AI & Autonomous Systems",
    highlight: "Engineered sub-1 GFLOP real-time detection achieving 96% mAP and 30+ FPS on-device via TensorRT INT8.",
    description: [
      "Engineered a sub-1 GFLOP real-time object detection model (NanoDet backbone, YOLO-style heads), achieving 96% mAP and 30+ FPS on-device inference via TensorRT INT8 quantization.",
      "Evaluated FP32 vs. INT8 and backbone trade-offs to meet strict compute constraints for autonomous drone payloads; presented results at NIDAR 2025.",
    ],
    technologies: ["Python", "PyTorch", "TensorRT", "CUDA", "Linux"],
  },
  {
    company: "AI/ML Virtual Internship — AICTE & EduSkills",
    role: "Full-Stack Development",
    period: "Apr 2025 – Jun 2025",
    location: "Virtual",
    type: "Full-Stack & ML Systems",
    highlight: "Built and deployed a full-stack web application serving ML model predictions to 100+ concurrent users.",
    description: [
      "Built and deployed a full-stack web application (React frontend, Flask/Python backend) serving ML model predictions via REST APIs, supporting 100+ concurrent user requests during testing.",
    ],
    technologies: ["React.js", "Python", "Flask", "REST APIs", "Machine Learning"],
  },
  {
    company: "Open Source Contributor — AWS s2n-tls",
    role: "Open Source Contributor",
    period: "2025 – Present",
    location: "Global / GitHub",
    type: "Systems & Security",
    highlight: "Contributed patches addressing correctness and documentation issues merged by AWS maintainers.",
    description: [
      "Contributed patches to AWS s2n-tls (C, TLS 1.3 implementation), addressing documentation gaps and correctness issues reviewed and merged by maintainers.",
    ],
    technologies: ["C", "TLS 1.3", "Linux", "Git", "Security Auditing"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "microdet",
    title: "MicroDet",
    subtitle: "Edge Object Detection for Drones",
    featured: true,
    category: "Edge AI & ML",
    githubUrl: "https://github.com/ravindran-dev/microdet_v2",
    description: [
      "Engineered an anchor-free person detector for drone imagery with a NanoDet-style backbone and YOLO-style heads.",
      "Optimized with DFL, QFL, GIoU losses, multi-scale strides, AMP, EMA, and NMS, achieving 96% mAP@0.5 and 30+ FPS at sub-1 GFLOP.",
      "Outperformed a MobileNetV2-SSD baseline (~89% mAP) via TensorRT INT8 quantized edge deployment.",
      "Evaluated FP32 vs. INT8 precision and backbone trade-offs to meet strict compute constraints for autonomous drone payloads; presented results at NIDAR 2025.",
    ],
    metrics: ["<1.0 GFLOP Budget", "96% mAP@0.5", "30+ FPS INT8 Inference", "vs 89% MobileNetV2 Baseline"],
    technologies: ["Python", "PyTorch", "OpenCV", "CUDA", "TensorRT"],
  },
  {
    id: "archon",
    title: "Archon",
    subtitle: "Security-Hardened Cross-Distro Package Manager",
    featured: true,
    category: "Systems & Security",
    githubUrl: "https://github.com/ravindran-dev/archon",
    description: [
      "Built a Rust package manager resolving official repo and AUR dependencies via a unified dependency graph.",
      "Implemented version constraints, conflict and cycle detection, topological build ordering, and dry-run planning.",
      "Sandboxed untrusted builds with Bubblewrap and Aya/eBPF syscall monitoring, validated by 171 tests catching 3 malicious attacks at <5% overhead.",
    ],
    metrics: ["171 Tests Validated", "3 Attacks Caught", "<5% Syscall Overhead", "Topological Build Ordering"],
    technologies: ["Rust", "Bubblewrap", "Aya/eBPF", "Linux"],
  },
  {
    id: "machine-guard",
    title: "Machine Guard",
    subtitle: "Edge IoT Anomaly Monitoring & Predictive Maintenance",
    featured: true,
    category: "IoT & Full-Stack",
    githubUrl: "https://github.com/ravindran-dev/Machine-Guard-AI",
    description: [
      "Developed an event-driven pipeline: ESP32 sensors to MQTT to Flask REST to ML inference to Firebase/React.",
      "Deployed a quantized TensorFlow Lite model at the edge, achieving 94% accuracy with low inference overhead.",
      "Built a distributed architecture handling 1000+ msgs/sec at <50 ms latency, with live dashboard alerts and a Kotlin app.",
      "Awarded 1st Place Grand Winner at Ti Forge National Hackathon (Rs. 50,000 cash prize).",
    ],
    metrics: ["1000+ msgs/sec", "<50 ms Latency", "94% Anomaly Accuracy", "Rs. 50,000 Hackathon Winner"],
    technologies: ["ESP32", "MQTT", "Flask", "TFLite", "PostgreSQL", "Firebase", "React", "Kotlin"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    description: "Systems programming, low-level efficiency, scripting, and modern typed languages",
    skills: [
      { name: "C", highlight: "AWS s2n-tls (TLS 1.3)" },
      { name: "C++", highlight: "Performance algorithms & models" },
      { name: "Python", highlight: "PyTorch & Computer Vision" },
      { name: "JavaScript", highlight: "Frontend & interactive tooling" },
      { name: "TypeScript", highlight: "Type-safe UI applications" },
      { name: "SQL", highlight: "Relational data & querying" },
      { name: "Rust", highlight: "Archon package manager & systems" },
    ],
  },
  {
    category: "ML / AI",
    description: "Deep learning frameworks, quantized edge inference runtimes, and agentic LLM pipelines",
    skills: [
      { name: "PyTorch", highlight: "MicroDet backbone & loss design" },
      { name: "TensorFlow Lite", highlight: "Machine Guard edge deployment" },
      { name: "TensorRT", highlight: "INT8 30+ FPS edge quantization" },
      { name: "LangChain", highlight: "RAG & agentic workflows" },
    ],
  },
  {
    category: "Systems & Infrastructure",
    description: "Linux OS internals, container virtualization, event brokers, and source control",
    skills: [
      { name: "Linux", highlight: "Kernel syscalls, Arch Linux & Ubuntu" },
      { name: "Docker", highlight: "Containerized environments" },
      { name: "Redis", highlight: "In-memory caching & queues" },
      { name: "MQTT", highlight: "1000+ msgs/sec sensor telemetry" },
      { name: "WebSockets", highlight: "Real-time bidirectional streams" },
      { name: "Git", highlight: "Version control & GitHub Actions CI" },
    ],
  },
  {
    category: "Web & Full-Stack",
    description: "Modern responsive web frameworks, microservices, and reactive cloud databases",
    skills: [
      { name: "React.js", highlight: "Interactive dashboard UI" },
      { name: "FastAPI", highlight: "High-performance async APIs" },
      { name: "Streamlit", highlight: "Rapid AI model prototyping" },
      { name: "Firebase", highlight: "Real-time state synchronization" },
    ],
  },
  {
    category: "Core Competencies",
    description: "Hardware-software boundary, edge acceleration, computer vision, and systems architecture",
    skills: [
      { name: "AOSP", highlight: "Android Open Source Platform internals" },
      { name: "Computer Vision", highlight: "Anchor-free object detection & NMS" },
      { name: "Edge Inference", highlight: "Sub-1 GFLOP real-time models" },
      { name: "LLM Systems (RAG/Agents)", highlight: "Vector search & autonomous agents" },
      { name: "Multithreading", highlight: "Concurrent event loops & safety" },
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "leetcode",
    title: "LeetCode Knight Badge",
    category: "Competitive Programming",
    organization: "LeetCode",
    metric: "2085 Peak Rating",
    badgeText: "Knight (Top 1.5%)",
    description: "Ranked among the top 1.5% of competitive programmers globally with consistent weekly contest problem-solving across advanced graph theory, dynamic programming, and data structures.",
    highlight: true,
  },
  {
    id: "codechef",
    title: "CodeChef 3-Star Competitor",
    category: "Competitive Programming",
    organization: "CodeChef",
    metric: "1716 Peak Rating",
    badgeText: "3★ Division",
    description: "Active Division 2/3 competitor tackling complex algorithmic and mathematical optimization problems under strict time constraints.",
  },
  {
    id: "codeforces",
    title: "Codeforces Competitor",
    category: "Competitive Programming",
    organization: "Codeforces",
    metric: "1135 Peak Rating",
    badgeText: "Active Contender",
    description: "Participating in global Div 2 / Div 3 rounds focusing on rapid problem analysis, edge-case mitigation, and mathematical implementations.",
  },
  {
    id: "icpc-2025",
    title: "ICPC 2025 Preliminary Contest",
    category: "Competitive Programming",
    organization: "International Collegiate Programming Contest",
    metric: "Global Rank 2605",
    badgeText: "ICPC 2025",
    description: "Competed in the world's premier collegiate algorithmic contest against top university teams, solving demanding graph and computational problems.",
    highlight: true,
  },
  {
    id: "ti-forge",
    title: "1st Place Winner — Ti Forge Hackathon",
    category: "Hackathon",
    organization: "Ti Forge National Hackathon",
    metric: "Rs. 50,000 Cash Prize",
    badgeText: "1st Place Grand Winner",
    description: "Won first prize for architecting Machine Guard: an end-to-end edge AI vibration anomaly detection IoT pipeline with <50ms latency and 94% on-device classification accuracy.",
    highlight: true,
  },
  {
    id: "ai-sustainability",
    title: "Winner — AI for Sustainability Hackathon",
    category: "Hackathon",
    organization: "AI for Sustainability International",
    metric: "$125 + 300 AED Vouchers",
    badgeText: "Winner",
    description: "Awarded top honors for designing autonomous compute-efficient vision models optimizing renewable power load distribution and real-time environmental monitoring.",
    highlight: true,
  },
  {
    id: "servicenow-bootcamp",
    title: "1st Place — ServiceNow Bootcamp Hackathon",
    category: "Hackathon",
    organization: "ServiceNow",
    metric: "1st of 20 Teams",
    badgeText: "1st Place Winner",
    description: "Secured 1st place among 20 finalist engineering teams at the ServiceNow Bootcamp Hackathon, recognized with ServiceNow prize packages and goodies.",
    highlight: true,
  },
  {
    id: "tgf-techsprint",
    title: "Finalist — TGF 2.0 TechSprint Hackathon",
    category: "Hackathon",
    organization: "TGF TechSprint",
    metric: "Top 10 of 300 Teams",
    badgeText: "Top 10 Finalist",
    description: "Selected as one of the top 10 finalist teams out of 300+ engineering groups nationwide for high-throughput distributed systems innovation.",
  },
  {
    id: "aws-s2n",
    title: "AWS s2n-tls Core Open Source Contributor",
    category: "Open Source",
    organization: "Amazon Web Services / GitHub",
    metric: "Merged Pull Requests",
    badgeText: "Core Contributor",
    description: "Contributed C patches addressing documentation gaps and TLS 1.3 correctness issues, thoroughly reviewed and merged into Amazon's official security library.",
  },
  {
    id: "swoc",
    title: "SWOC Open Source Contributor",
    category: "Open Source",
    organization: "Social Winter of Code",
    metric: "Active Contributor",
    badgeText: "Open Source",
    description: "Contributed to developer tools, systems libraries, and open-source infrastructure packages during Social Winter of Code.",
  },
  {
    id: "cisco-certs",
    title: "Cisco Certified Specialist (CCNA & AI)",
    category: "Certification",
    organization: "Cisco Networking Academy",
    metric: "90–100% Score",
    badgeText: "Multi-Certified",
    description: "Earned comprehensive credentials across Python Fundamentals, Cybersecurity, Modern AI, Data Science, and CCNA Network Infrastructure.",
  },
  {
    id: "nptel-iot",
    title: "Introduction to Internet of Things — Elite",
    category: "Certification",
    organization: "NPTEL (IIT Kharagpur)",
    date: "Jul–Oct 2025",
    metric: "Elite (75% Score)",
    badgeText: "12-week course",
    description: "Completed rigorous 12-week academic coursework on IoT network architecture, sensor protocols, edge telemetry, and embedded computing.",
  },
  {
    id: "nptel-data",
    title: "Data Analytics with Python — Elite",
    category: "Certification",
    organization: "NPTEL (IIT Roorkee)",
    date: "Jan–Apr 2026",
    metric: "Elite (70% Score)",
    badgeText: "12-week course",
    description: "Certified with Elite standing in Python-based statistical computing, exploratory data analysis, and predictive modeling.",
  },
  {
    id: "mongodb-certs",
    title: "MongoDB Specialized Accreditations",
    category: "Certification",
    organization: "MongoDB",
    metric: "5x Certified",
    badgeText: "Database & AI",
    description: "Earned certifications in RAG with MongoDB, AI Data Strategy with MongoDB, Vector Search Fundamentals, AI Agents with MongoDB, and MongoDB Basics for Students.",
  },
];
