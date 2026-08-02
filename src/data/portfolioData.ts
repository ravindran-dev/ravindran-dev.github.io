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
    icon?: string;
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
  location: "Chennai, India (Open to Relocation)",
  github: "https://github.com/ravindran-dev",
  linkedin: "https://www.linkedin.com/in/ravindran-s",
  terminalPortfolioUrl: "https://portfolio-ravindrans.vercel.app/",
  resumeUrl: "/resume.pdf",
  summary:
    "Computer Science undergraduate (AI & ML) with hands-on experience in edge inference, computer vision, and full-stack systems engineering. Built sub-1-GFLOP real-time object detection models for drone hardware and won 2 national hackathons. LeetCode Knight (2085 rating), ICPC 2025 participant. Proficient across AOSP, PyTorch, TensorRT, Go, Rust, CUDA, and distributed backend systems.",
  education: {
    institution: "Chennai Institute of Technology",
    degree: "B.E. Computer Science and Engineering (AI & ML)",
    period: "Sept 2024 – Present",
    gpa: "CGPA: 9.24 / 10",
    focus: "Artificial Intelligence, Machine Learning, Systems Programming, Computer Vision & Distributed Systems",
  },
  stats: [
    { label: "LeetCode Contest Rating", value: "2085", detail: "Knight Badge (Top 1.5% globally)" },
    { label: "Academic Excellence", value: "9.24", detail: "CGPA at Chennai Institute of Tech" },
    { label: "National Hackathons", value: "2x", detail: "Winner (Ti Forge & AI for Sustainability)" },
    { label: "Edge Inference", value: "<1 GFLOP", detail: "30+ FPS INT8 Real-Time Drone Model" },
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Drone Technology Team – CIT | NIDAR Competition",
    role: "Edge AI & Object Detection Lead",
    period: "Oct 2025 – Dec 2025",
    location: "Chennai, India",
    type: "Autonomous Hardware & AI",
    highlight: "Engineered sub-1 GFLOP 30+ FPS real-time detection on constrained drone payload hardware.",
    description: [
      "Engineered a sub-1 GFLOP real-time object detection model combining a NanoDet backbone with YOLO-style decoupled heads, achieving 96% mAP and 30+ FPS on-device inference via TensorRT INT8 quantization.",
      "Evaluated FP32 vs. INT8 precision and backbone architectural trade-offs to meet strict compute and thermal constraints for autonomous drone payloads.",
      "Presented benchmark results and live flight telemetry at NIDAR 2025.",
    ],
    technologies: ["TensorRT", "NanoDet", "PyTorch", "DeepStream SDK", "TinyGrad", "CUDA", "Linux"],
  },
  {
    company: "AI/ML Virtual Internship – AICTE & EduSkills",
    role: "Full-Stack & ML Systems Intern",
    period: "Apr 2025 – Jun 2025",
    location: "Remote",
    type: "Full-Stack Development",
    highlight: "Deployed production-grade ML inference APIs serving 100+ concurrent users.",
    description: [
      "Built and deployed a full-stack web application featuring a responsive React frontend and a robust Flask/Python backend.",
      "Served real-time ML model predictions via low-latency REST APIs, handling 100+ concurrent requests during load testing.",
      "Implemented structured error handling, request caching, and automated integration testing pipelines.",
    ],
    technologies: ["React.js", "Python", "Flask", "REST APIs", "Docker", "Machine Learning"],
  },
  {
    company: "Open Source Contributor – AWS s2n-tls",
    role: "Core Contributor",
    period: "2025 – Present",
    location: "Global Open Source",
    type: "Systems & Security",
    highlight: "Merged C TLS 1.3 implementation patches into Amazon Web Services core security library.",
    description: [
      "Contributed patches to AWS s2n-tls (Amazon's C implementation of the TLS/SSL protocols).",
      "Resolved correctness issues and addressed critical documentation gaps in TLS 1.3 handshakes, thoroughly reviewed and merged by AWS maintainers.",
      "Engaged in memory safety, fuzzing tests, and cross-platform verification across Linux architectures.",
    ],
    technologies: ["C", "TLS 1.3", "Cryptography", "Linux", "Git", "Security Auditing"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "microdet",
    title: "MicroDet",
    subtitle: "Sub-1 GFLOP Real-Time Drone Detection Pipeline",
    featured: true,
    category: "Edge AI & ML",
    githubUrl: "https://github.com/ravindran-dev/microdet_v2",
    description: [
      "Architected an ultra-lightweight object detection neural network designed specifically for compute-constrained drone hardware payloads.",
      "Coupled an optimized NanoDet backbone with custom YOLO decoupled heads, achieving 96% mAP@0.5 on target benchmarks.",
      "Applied TensorRT INT8 calibration and quantization, delivering 30+ FPS sustained on embedded accelerators, outperforming standard MobileNetV2-SSD baselines (~89% mAP) at equivalent FLOP budgets.",
      "Presented and demonstrated at NIDAR 2025 autonomous robotics symposium.",
    ],
    metrics: ["<1.0 GFLOP Budget", "96% mAP@0.5", "30+ FPS INT8 Inference", "vs 89% MobileNetV2 Baseline"],
    technologies: ["TinyGrad", "PyTorch", "TensorRT INT8", "DeepStream SDK", "CUDA", "C++", "Python"],
  },
  {
    id: "archon",
    title: "Archon",
    subtitle: "Security-Hardened AUR Package Manager with eBPF Sandboxing",
    featured: true,
    category: "Systems & Security",
    githubUrl: "https://github.com/ravindran-dev/archon",
    description: [
      "Engineered a high-performance, security-focused AUR (Arch User Repository) package manager in Rust.",
      "Implements dynamic dependency graph resolution reconciling official Arch repositories and untrusted AUR PKGBUILDs.",
      "Sandboxes unverified compilation scripts via Bubblewrap and attaches kernel-level eBPF probes (using Aya) to monitor syscalls (execve, openat, socket connect) in real-time.",
      "Detects malicious script injections and unauthorized exfiltration attempts with under 5% build-time overhead.",
    ],
    metrics: ["<5% Build-Time Overhead", "Kernel-level eBPF Probes", "Bubblewrap Isolated Jail", "Libalpm Graph Resolver"],
    technologies: ["Rust", "eBPF (Aya)", "Bubblewrap", "libalpm", "Linux Kernel", "Security Systems"],
  },
  {
    id: "machine-guard",
    title: "Machine Guard",
    subtitle: "End-to-End Industrial IoT Predictive Maintenance Pipeline",
    featured: true,
    category: "IoT & Full-Stack",
    githubUrl: "https://github.com/ravindran-dev/Machine-Guard-AI",
    description: [
      "Architected a distributed IoT telemetry pipeline for industrial machine vibration and acoustic anomaly detection.",
      "Embedded quantized TFLite models on edge sensor nodes achieving 94% anomaly detection accuracy.",
      "Streamed high-frequency sensor readings over MQTT to Firebase and synchronized to a high-density React operational dashboard with <200ms end-to-end alert latency.",
      "Official winning submission at Ti Forge 2026 Hackathon (awarded Rs. 50,000 cash prize).",
    ],
    metrics: ["<200ms Alert Latency", "94% Anomaly Accuracy", "Rs. 50,000 Hackathon Winner", "Real-Time MQTT Stream"],
    technologies: ["Kotlin", "Python", "TensorFlow Lite", "MQTT", "Firebase", "React.js", "IoT Sensors"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    description: "Systems, low-level, script, and modern strongly-typed languages",
    skills: [
      { name: "C / C++", level: "Advanced" },
      { name: "Rust", level: "Proficient" },
      { name: "Go (Golang)", level: "Proficient" },
      { name: "Python", level: "Advanced" },
      { name: "TypeScript", level: "Proficient" },
      { name: "JavaScript", level: "Proficient" },
      { name: "CUDA", level: "Intermediate" },
      { name: "SQL", level: "Proficient" },
    ],
  },
  {
    category: "Machine Learning & Edge AI",
    description: "Deep learning frameworks, inference engines, quantization & computer vision",
    skills: [
      { name: "PyTorch", level: "Advanced" },
      { name: "TensorRT (INT8/FP16)", level: "Advanced" },
      { name: "TensorFlow Lite", level: "Proficient" },
      { name: "TinyGrad", level: "Proficient" },
      { name: "DeepStream SDK", level: "Proficient" },
      { name: "Computer Vision (YOLO/NanoDet)", level: "Advanced" },
      { name: "LangChain / RAG", level: "Proficient" },
      { name: "Sentence Transformers", level: "Proficient" },
    ],
  },
  {
    category: "Systems & Infrastructure",
    description: "Operating systems internals, containerization, networks and telemetry",
    skills: [
      { name: "Linux Internals", level: "Advanced" },
      { name: "eBPF & Kernel Tracing", level: "Proficient" },
      { name: "AOSP (Android Open Source)", level: "Proficient" },
      { name: "Docker & Containerization", level: "Proficient" },
      { name: "Nginx", level: "Proficient" },
      { name: "Redis", level: "Proficient" },
      { name: "MQTT & WebSockets", level: "Advanced" },
      { name: "Git & CI/CD", level: "Advanced" },
    ],
  },
  {
    category: "Web & Full-Stack Systems",
    description: "Modern frontend frameworks, microservices and high-throughput APIs",
    skills: [
      { name: "React.js / Next.js", level: "Advanced" },
      { name: "FastAPI", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Flask", level: "Proficient" },
      { name: "Streamlit", level: "Proficient" },
      { name: "Firebase", level: "Proficient" },
      { name: "RESTful & gRPC APIs", level: "Advanced" },
    ],
  },
  {
    category: "Core Competencies",
    description: "Fundamental computer science, architectural patterns and hardware-level optimization",
    skills: [
      { name: "Data Structures & Algorithms", level: "Expert" },
      { name: "GPU Optimization", level: "Advanced" },
      { name: "Multithreading & Concurrency", level: "Advanced" },
      { name: "Distributed Systems Architecture", level: "Proficient" },
      { name: "Edge Inference & Quantization", level: "Expert" },
      { name: "Memory Safety & Sandboxing", level: "Proficient" },
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "leetcode",
    title: "LeetCode Knight Badge",
    category: "Competitive Programming",
    organization: "LeetCode",
    metric: "2085 Rating",
    badgeText: "Top 1.5% Worldwide",
    description: "Ranked among the top competitive programmers worldwide with consistent weekly and biweekly contest performances in advanced graph algorithms, dynamic programming, and data structures.",
    highlight: true,
  },
  {
    id: "ti-forge",
    title: "1st Place Winner — Ti Forge Hackathon",
    category: "Hackathon",
    organization: "Ti Forge National Hackathon",
    metric: "Rs. 50,000 Cash Prize",
    badgeText: "Grand Winner",
    description: "Won first prize for architecting Machine Guard: an edge AI vibration anomaly detection IoT ecosystem with <200ms latency and 94% on-device classification accuracy.",
    highlight: true,
  },
  {
    id: "ai-sustainability",
    title: "Winner — AI for Sustainability Hackathon",
    category: "Hackathon",
    organization: "AI for Sustainability International",
    metric: "$125 + 300 AED",
    badgeText: "Winner",
    description: "Awarded top honor for developing autonomous compute-efficient vision models optimizing renewable power load distribution and environmental monitoring.",
    highlight: true,
  },
  {
    id: "codechef",
    title: "CodeChef 3-Star Competitive Programmer",
    category: "Competitive Programming",
    organization: "CodeChef",
    metric: "1716 Peak Rating",
    badgeText: "3-Star Division",
    description: "Active division competitor solving algorithmic optimization and mathematical problems in timed contest environments.",
  },
  {
    id: "icpc-2025",
    title: "ICPC 2025 Preliminary Contest Participant",
    category: "Competitive Programming",
    organization: "International Collegiate Programming Contest",
    metric: "Global Rank 2605",
    badgeText: "ICPC 2025",
    description: "Competed in the world's most prestigious collegiate algorithmic problem-solving championship among top engineering university teams.",
  },
  {
    id: "tgf-techsprint",
    title: "Finalist — TGF 2.0 TechSprint Hackathon",
    category: "Hackathon",
    organization: "TGF TechSprint",
    metric: "Top 10 of 300+ Teams",
    badgeText: "Finalist",
    description: "Selected as one of the top 10 finalist teams out of 300+ competing engineering groups for high-throughput distributed systems innovation.",
  },
  {
    id: "cisco-certs",
    title: "Cisco Certified Specialist (CCNA & AI)",
    category: "Certification",
    organization: "Cisco Systems",
    metric: "90–100% Score",
    badgeText: "Multi-Certified",
    description: "Completed rigorous Cisco professional certifications across Python Fundamentals, Cybersecurity, Modern AI, Data Science, and CCNA Network Infrastructure.",
  },
  {
    id: "aws-s2n",
    title: "AWS s2n-tls Open Source Contributor",
    category: "Open Source",
    organization: "Amazon Web Services / GitHub",
    metric: "Merged Pull Requests",
    badgeText: "Core Contributor",
    description: "Contributed code and documentation corrections to Amazon's official TLS 1.3 implementation library in C.",
  },
  {
    id: "swoc",
    title: "SWOC Open Source Contributor",
    category: "Open Source",
    organization: "Social Winter of Code",
    metric: "Active Contributor",
    badgeText: "Open Source",
    description: "Contributed across developer tools, systems libraries, and community software repositories.",
  },
];
