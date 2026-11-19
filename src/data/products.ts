export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  status: "Active development" | "Experimental" | "Maintained configuration";
  positioning: string;
  description: string;
  repository: string;
  sourcePublic?: boolean;
  primaryAction?: { label: string; href: string };
  repositories?: { label: string; url: string }[];
  icon?: string;
  accent: string;
  latestTag?: string;
  developmentVersion?: string;
  releaseDate?: string;
  platforms: string[];
  languages: string[];
  stack: string[];
  features: { title: string; description: string }[];
  architecture: string;
  install: { label: string; command: string; note?: string }[];
  documentation: { label: string; url: string }[];
  faq: { question: string; answer: string }[];
  screenshots?: { src: string; alt: string; caption: string }[];
  releaseNote?: string;
  downloads?: {
    label: string;
    platform: string;
    format: string;
    url: string;
    size: number;
    sha256?: string;
    status?: "stable" | "preview" | "development";
    architecture?: string;
  }[];
  releaseHistory?: { version: string; date: string; summary: string; url: string }[];
  detailSections?: { title: string; eyebrow: string; intro: string; items: { title: string; description: string }[] }[];
  systemRequirements?: string[];
  releaseStatus?: "stable" | "preview" | "development" | "archived";
  repositoryUrls?: string[];
};

export const products: Product[] = [
  {
    slug: "localmind",
    releaseStatus: "preview",
    repositoryUrls: ["https://github.com/ravindran-dev/localmind"],
    name: "LocalMind Agent SDK & Runtime",
    shortName: "LocalMind",
    category: "Developer Tools",
    status: "Active development",
    positioning: "Loopback-only local AI agent runtime, terminal assistant, and Python streaming SDK.",
    description: "A private, local-first LLM orchestration system that connects your terminal, local workspace index, and host telemetry through a lightweight Rust launcher and typed Python SDK without sending data to third-party clouds.",
    repository: "https://github.com/ravindran-dev/localmind",
    icon: "/products/localmind.svg",
    accent: "#10b981",
    latestTag: "0.1.0",
    developmentVersion: "0.1.0 (Native Launcher & Rust daemon)",
    releaseDate: "2026-11-18",
    primaryAction: { label: "Quick Install", href: "#install" },
    repositories: [
      { label: "Main Repository", url: "https://github.com/ravindran-dev/localmind" },
    ],
    downloads: [
      {
        label: "LocalMind Python SDK (localmind-sdk)",
        platform: "Universal Python 3.10+",
        format: "TAR.GZ",
        url: "/downloads/localmind-sdk-v0.1.0.tar.gz",
        size: 6220,
        sha256: "ebf777c1492937c6ebcc896a9619aeb11d556c2961915bf9f67cc2d70c1d9041",
        status: "stable",
        architecture: "Universal",
      },
    ],
    releaseHistory: [
      {
        version: "0.1.0",
        date: "2026-11-18",
        summary: "Initial public developer preview: LocalMind JARVIS terminal assistant, typed Python client SDK, native Rust launcher, and loopback gateway routing.",
        url: "https://github.com/ravindran-dev/localmind/releases/tag/v0.1.0",
      },
    ],
    platforms: ["Linux (x86_64, aarch64)", "macOS (Apple Silicon)", "Windows WSL2"],
    languages: ["Python 3.12+", "Rust", "TypeScript"],
    stack: ["Rust Native Launcher", "FastAPI / Uvicorn", "Ollama", "PyTorch", "uv", "SQLite"],
    features: [
      { title: "Zero Cloud Leakage", description: "Hardcoded loopback-only communication (127.0.0.1:8420); cloud URLs and third-party API calls are strictly rejected." },
      { title: "Native Rust Launcher", description: "Builds a zero-overhead binary localmind and symlinks @jarvis into ~/.local/bin without shell script latency." },
      { title: "Structured Event Streaming", description: "Emits typed events (meta, agent, token, done, error) with transparent attribution to selected models and system observers." },
      { title: "Host Telemetry & Workspace Index", description: "Context-aware agents query live workstation metrics and local codebase files on demand without indexing remote files." },
    ],
    architecture: "LocalMind binds exclusively to 127.0.0.1:8420. The native Rust launcher @jarvis forwards commands directly into the locked Python runtime. Local LLMs run via Ollama on loopback:11434, while deterministic system metrics are gathered directly via /proc and sysinfo without LLM hallucination.",
    install: [
      {
        label: "Workstation One-Line Install",
        command: "git clone --depth 1 https://github.com/ravindran-dev/localmind.git \"$HOME/.local/share/localmind\" && bash \"$HOME/.local/share/localmind/install.sh\"",
        note: "Requires Git, uv, and stable Rust. Builds the native launcher and configures ~/.local/bin/@jarvis automatically."
      },
      {
        label: "Install Python SDK",
        command: "pip install /downloads/localmind-sdk-v0.1.0.tar.gz\n# or import from local checkout:\nfrom localmind_sdk import LocalMindClient\nwith LocalMindClient() as mind:\n    print(mind.models())",
        note: "Compatible with Python 3.10 through 3.13."
      },
      {
        label: "Run Terminal Assistant",
        command: "@jarvis status\n@jarvis models\n@jarvis agents\n@jarvis \"Explain the architecture of this repo\"",
        note: "Opens an interactive streaming session connected to your local model."
      }
    ],
    documentation: [
      { label: "README & Quickstart", url: "https://github.com/ravindran-dev/localmind#readme" },
      { label: "SDK & Installation Guide", url: "https://github.com/ravindran-dev/localmind/blob/main/docs/setup/sdk-and-installation.md" },
    ],
    faq: [
      { question: "Does LocalMind send any data to external servers?", answer: "No. The SDK and runtime strictly reject any remote URL. All inference runs locally via Ollama or PyTorch on 127.0.0.1." },
      { question: "What is @jarvis?", answer: "@jarvis is the high-performance native terminal CLI launcher written in Rust that provides sub-millisecond invocation for the LocalMind runtime." },
      { question: "Can I use LocalMind as a library in Python?", answer: "Yes! Use the included localmind_sdk library to orchestrate workflows, stream chat tokens, and query system context programmatically." },
    ],
    releaseNote: "LocalMind JARVIS v0.1.0 preview release featuring native Rust launcher, typed Python SDK, and zero-cloud private runtime.",
    systemRequirements: [
      "Operating System: Linux (Arch, Ubuntu, Fedora), macOS, or Windows WSL2",
      "Python: 3.10 or newer (uv package manager recommended)",
      "Rust: 1.75+ for native launcher compilation",
      "Local LLM Runtime: Ollama or local PyTorch/transformers instance"
    ],
    detailSections: [
      {
        eyebrow: "Private Intelligence",
        title: "A personal AI agent that lives on your machine",
        intro: "LocalMind provides an autonomous assistant that helps you write code, analyze logs, and run diagnostics without cloud lock-in.",
        items: [
          { title: "Deterministic System Observer", description: "Queries live hardware sensors, active processes, and memory metrics with zero model hallucination." },
          { title: "Workspace File Graph", description: "Indexes Git repositories locally to provide instant semantic context to local coding agents." },
          { title: "Unified Python SDK", description: "Provides streaming async/sync clients with full event typing, error handling, and timeout safety." }
        ]
      }
    ]
  },
  {
    slug: "keynix",
    releaseStatus: "preview",
    repositoryUrls: ["https://github.com/ravindran-dev/keynix"],
    name: "Keynix Keyboard Platform",
    shortName: "Keynix",
    category: "Linux Systems",
    status: "Active development",
    positioning: "System-level evdev remapping, shortcut conflict detection, and typing practice.",
    description: "Hardware-level Linux input interception using evdev EVIOCGRAB exclusive grabbing and uinput virtual device synthesis, with visual layout editing and shortcut conflict auditing.",
    repository: "https://github.com/ravindran-dev/keynix",
    icon: "/products/keynix.png",
    accent: "#f59e0b",
    latestTag: "0.1.0",
    developmentVersion: "0.1.0 (Workspace crate)",
    releaseDate: "2026-11-15",
    primaryAction: { label: "Build & Install", href: "#install" },
    repositories: [
      { label: "Main Repository", url: "https://github.com/ravindran-dev/keynix" },
    ],
    platforms: ["Linux (Wayland & X11: Arch, Fedora, Ubuntu, Debian)"],
    languages: ["Rust", "TypeScript", "React"],
    stack: ["Linux evdev (EVIOCGRAB)", "uinput", "Tokio", "SQLite", "Tailwind CSS"],
    features: [
      { title: "Hardware-Aware Interception", description: "Intercepts physical keyboards via evdev exclusive grabbing (EVIOCGRAB) and synthesizes virtual hardware through /dev/uinput." },
      { title: "Zero Lag & Stuck-Key Immunity", description: "Dedicated high-priority worker thread with non-blocking polling and automatic release guarantees." },
      { title: "Fail-Safe Killswitch", description: "Pressing Ctrl+Alt+Shift+Esc at any time immediately releases physical devices and restores native passthrough." },
      { title: "Shortcut Conflict Discovery", description: "Audits active hotkeys across Hyprland, GNOME GSettings, KDE Global Shortcuts, and XKB layout rules." },
    ],
    architecture: "Keynix sits between the physical hardware and the display server: Physical Keyboard (/dev/input/event*) -> evdev Interception -> Keynix Mapping Engine -> uinput Virtual Device -> Linux OS. A local SQLite database stores user presets and typing analytics.",
    install: [
      {
        label: "Build and Install from Source",
        command: "git clone https://github.com/ravindran-dev/keynix.git\ncd keynix\nbash install.sh",
        note: "Requires Rust stable, libevdev development headers, and input group permissions."
      },
      {
        label: "Run Background Daemon",
        command: "cargo run --release --bin keynix-daemon",
        note: "Runs the non-blocking interception worker thread."
      }
    ],
    documentation: [
      { label: "README & Architecture", url: "https://github.com/ravindran-dev/keynix#readme" },
      { label: "Packaging Docs", url: "https://github.com/ravindran-dev/keynix/tree/main/packaging" },
    ],
    faq: [
      { question: "Does Keynix cause input lag?", answer: "No. Keynix runs a dedicated non-blocking polling worker thread in Rust that processes events in under 0.1ms." },
      { question: "What happens if Keynix crashes?", answer: "Keynix registers signal handlers that instantly drop the EVIOCGRAB lock, restoring normal keyboard behavior. The hardware killswitch (Ctrl+Alt+Shift+Esc) also ungrabs immediately." },
      { question: "Does it work on Wayland?", answer: "Yes! Because Keynix operates at the kernel evdev/uinput layer, it is completely independent of Wayland or X11." },
    ],
    releaseNote: "Keynix v0.1.0 preview release with Linux hardware interception, fail-safe killswitch, and visual layout editor.",
    systemRequirements: [
      "Operating System: Linux kernel 5.4+ with evdev and uinput support",
      "Permissions: User in 'input' group and write access to /dev/uinput",
      "Display Server: Wayland (Hyprland, Sway, GNOME, KDE) or X11",
      "Build: Rust 1.75+ and Node.js 18+ (for frontend GUI)"
    ],
    detailSections: [
      {
        eyebrow: "Low-Level Systems",
        title: "Kernel-level input virtualization without compromises",
        intro: "Keynix grants complete mastery over input devices without requiring custom firmware or proprietary manufacturer software.",
        items: [
          { title: "evdev Exclusive Grabbing", description: "Uses EVIOCGRAB to prevent host operating system and desktop environments from seeing raw physical key events." },
          { title: "Virtual uinput Synthesis", description: "Emulates a clean USB HID device capable of emitting arbitrary keycodes, modifiers, and multi-key macros." },
          { title: "Visual Layout Customizer", description: "Interactive SVG editor supporting ANSI Full 104, TKL, 65%, and 60% keyboards with instant conflict resolution." }
        ]
      }
    ]
  },
  {
    slug: "hertix",
    releaseStatus: "stable",
    repositoryUrls: ["https://github.com/ravindran-dev/Hertix"],
    name: "Hertix Music Player",
    shortName: "Hertix",
    category: "Desktop & Mobile",
    status: "Active development",
    positioning: "Your music library, kept close and under your control.",
    description: "A local-first media library and player spanning a native Android app and a Windows desktop app.",
    repository: "https://github.com/ravindran-dev/Hertix",
    icon: "/products/hertix.png",
    accent: "#9b72f2",
    latestTag: "1.0.23",
    releaseDate: "2026-11-11",
    developmentVersion: "1.2.0 (Windows package manifest)",
    downloads: [{
      label: "Hertix for Android",
      platform: "Android 8+ · arm64-v8a and x86_64",
      format: "APK",
      url: "https://github.com/ravindran-dev/Hertix/releases/download/v1.0.23/app-release.apk",
      size: 124958283,
      sha256: "f0097f28c6b6bc2750dcef25591ca6a52b8d655f8ae10ba2b4aa752241870345",
    }],
    releaseHistory: [
      { version: "1.0.23", date: "2026-11-11", summary: "Expanded regional and transliterated synchronized-lyrics lookup; improved playback-change cancellation and compatibility with older library records.", url: "https://github.com/ravindran-dev/Hertix/releases/tag/v1.0.23" },
      { version: "1.0.22", date: "2026-11-08", summary: "Improved regional lyrics search, playlist downloads and retries; restored completed-track state for older jobs.", url: "https://github.com/ravindran-dev/Hertix/releases/tag/v1.0.22" },
      { version: "1.0.21", date: "2026-11-08", summary: "Routed updates through the stable release asset and added retry and resume support for APK transfers.", url: "https://github.com/ravindran-dev/Hertix/releases/tag/v1.0.21" },
      { version: "1.0.20", date: "2026-11-08", summary: "Refined translucent confirmation, file-selection and update surfaces.", url: "https://github.com/ravindran-dev/Hertix/releases/tag/v1.0.20" },
      { version: "1.0.19", date: "2026-11-08", summary: "Release notes link to the v1.0.18 to v1.0.19 comparison.", url: "https://github.com/ravindran-dev/Hertix/releases/tag/v1.0.19" },
    ],
    platforms: ["Android 8+ (arm64-v8a, x86_64)", "Windows x64"],
    languages: ["Kotlin", "TypeScript", "Rust"],
    stack: ["Jetpack Compose", "Media3", "React", "Tauri 2", "SQLite"],
    features: [
      { title: "Local music library", description: "Browse phone music and completed downloads, with playlists, favorites and listening history." },
      { title: "Playback that stays with you", description: "Android playback runs through a Media3 service with a persistent player and queue controls." },
      { title: "Download workflow", description: "Analyze media, manage download progress, resume tasks and organize completed files." },
      { title: "Platform-specific apps", description: "Android is native Kotlin; Windows uses a React interface backed by a Rust and Tauri runtime." },
    ],
    architecture: "Android owns playback, media access and durable library state through native services. Windows uses a React and TypeScript interface, a Tauri Rust runtime, and SQLite-backed task history. Optional account sync is separate from local playback.",
    install: [
      { label: "Android from source", command: "git clone https://github.com/ravindran-dev/Hertix.git\ncd Hertix\n./android/gradlew -p android :app:assembleDebug", note: "Requires JDK 17 and Android SDK platform 36. The local debug APK is not an official download." },
      { label: "Windows development", command: "npm ci\nnpm run engines:install\nnpm run tauri dev", note: "Requires Windows, Node.js 22.16+, Rust/MSVC, C++ Build Tools, Windows SDK and WebView2." },
    ],
    documentation: [
      { label: "Architecture", url: "https://github.com/ravindran-dev/Hertix/blob/main/docs/architecture.md" },
      { label: "Android development", url: "https://github.com/ravindran-dev/Hertix/blob/main/android/README.md" },
      { label: "Windows development", url: "https://github.com/ravindran-dev/Hertix/blob/main/docs/windows-development.md" },
      { label: "Packaging", url: "https://github.com/ravindran-dev/Hertix/blob/main/docs/packaging.md" },
    ],
    faq: [
      { question: "Is there an official installer or APK here?", answer: "Yes. The v1.0.23 GitHub Release includes an Android APK. No Windows installer asset was verified; Windows build instructions are provided below." },
      { question: "Does Hertix work without an account?", answer: "The README says local playback and downloads work without an account; cloud library sync is optional." },
      { question: "Is iOS supported?", answer: "No iOS target is present in the repository." },
    ],
    screenshots: [
      { src: "/products/hertix-player.png", alt: "Hertix player screen", caption: "Player · device capture from the project" },
      { src: "/products/hertix-songs.png", alt: "Hertix songs library screen", caption: "Songs · device capture from the project" },
      { src: "/products/hertix-albums.png", alt: "Hertix album library screen", caption: "Albums · device capture from the project" },
      { src: "/products/hertix-playlists.png", alt: "Hertix playlists screen", caption: "Playlists · device capture from the project" },
    ],
    releaseNote: "Latest local tag and GitHub Release: v1.0.23 (2026-11-11). The Android Gradle version is 1.0.23. The Windows npm manifest independently reports 1.2.0; it is shown as development metadata, not as a release.",
    systemRequirements: ["Android 8.0+ (API 26); arm64-v8a or x86_64", "Windows x64 for the desktop download and processing interface", "Windows build from source: Node.js 22.16+, Rust/MSVC, C++ Build Tools, Windows SDK and WebView2", "Android build from source: JDK 17 and Android SDK platform 36"],
    detailSections: [
      { eyebrow: "Android listening", title: "A player built around your library", intro: "The Android app is the music listening experience. It scans local audio and manages a library alongside completed downloads.", items: [{ title: "Browse and find", description: "Songs, albums, artists, playlists, favorites and recent listening are implemented in the Android app." }, { title: "Playback that persists", description: "Media3 service playback, a persistent mini player, full player, queue, shuffle, repeat, playback speed, lyrics and sleep timer." }, { title: "Audio compatibility", description: "Playback uses Android Media3 and device codecs. Exact supported formats depend on the Android platform and installed codecs; no fixed universal codec list is promised." }] },
      { eyebrow: "Desktop downloads", title: "A separate Windows companion", intro: "Windows provides the download and processing workflow. The repository’s packaging notes still call for end-to-end installer and playback validation.", items: [{ title: "Analyze and download", description: "Inspect media, manage download jobs, retry or resume work, and organize completed output." }, { title: "Output formats", description: "The documented audio output is MP3; video output is MP4. Playlist ZIP and cover/metadata handling are available in the download workflow." }, { title: "Not a Windows player release", description: "The public verified release is Android APK. Windows CI artifacts are not published as GitHub Release downloads." }] },
    ],
  },
  {
    slug: "quantum-ide",
    releaseStatus: "development",
    repositoryUrls: ["https://github.com/ravindran-dev/quantum"],
    name: "Quantum IDE",
    shortName: "Quantum",
    category: "Developer Tools",
    status: "Active development",
    positioning: "A focused, offline-first coding workspace for Windows.",
    description: "A native desktop IDE built around Monaco, a local Express service and an Electron shell.",
    repository: "https://github.com/ravindran-dev/quantum",
    icon: "/products/quantum.png",
    accent: "#67d3cf",
    developmentVersion: "2.1.0 (package manifest)",
    platforms: ["Windows"],
    languages: ["JavaScript", "Python", "C++", "Java"],
    stack: ["Electron", "React", "Monaco Editor", "Express", "SQLite", "Firebase (optional)"],
    features: [
      { title: "Monaco editing", description: "Syntax-aware editing with a persistent local workspace." },
      { title: "Run code locally", description: "The README documents C++, Python, Java and JavaScript execution through local toolchains." },
      { title: "Work offline", description: "Editing and local files work without a network connection; Firebase is described as optional sync and authentication." },
      { title: "Desktop packaging path", description: "The repository includes Electron Builder configuration for Windows NSIS and portable packaging." },
    ],
    architecture: "Electron starts a local Express backend and the React frontend. Workspace files and history are stored locally; compiler and runtime availability depends on the Windows machine configuration.",
    install: [{ label: "Build from source", command: "git clone https://github.com/ravindran-dev/quantum.git\ncd quantum\nnpm run install-all\nnpm run dev", note: "A packaged installer or portable release asset has not been verified. See the deployment guide for packaging details." }],
    documentation: [
      { label: "Architecture", url: "https://github.com/ravindran-dev/quantum/blob/main/docs/architecture.md" },
      { label: "Deployment", url: "https://github.com/ravindran-dev/quantum/blob/main/docs/deployment.md" },
      { label: "Contributing", url: "https://github.com/ravindran-dev/quantum/blob/main/CONTRIBUTING.md" },
    ],
    faq: [
      { question: "Is Quantum IDE available for macOS or Linux?", answer: "The repository describes and packages the application for Windows. Other platforms are not documented as supported." },
      { question: "Can it compile code offline?", answer: "The app is described as offline-first, but language execution relies on the required compiler or runtime being available locally." },
      { question: "Is 2.1.0 a released version?", answer: "No Git tag or published release was verified. 2.1.0 is the current package manifest version." },
    ],
    releaseNote: "No local Git tags or verified published release assets were found. Package manifests report 2.1.0; this is displayed as development metadata.",
    systemRequirements: ["Windows is the documented desktop target", "Node.js/npm and the repository’s Electron build dependencies", "Local toolchains for execution: Node.js, Python, g++ and a Java JDK as needed", "Gemini API key only for the optional AI assistance features"],
    detailSections: [
      { eyebrow: "Editor and run loop", title: "A local coding workspace", intro: "Quantum combines a Monaco editor with a local workspace and a run console for selected language toolchains.", items: [{ title: "Languages", description: "Documented run support: JavaScript (Node.js), Python (python3), C++ (g++), and Java (javac/java). Availability depends on locally installed tools." }, { title: "Run console", description: "Captures standard input, output and errors, supports execution timeouts, and keeps a run history." }, { title: "AI assistance", description: "Gemini-powered explain, fix and code analysis are prompt-based tools. They require a GEMINI_API_KEY and are not an integrated debugger." }] },
      { eyebrow: "Architecture", title: "Desktop shell, web editor", intro: "The app is an Electron desktop application with a React frontend and a local Express backend.", items: [{ title: "Workspace storage", description: "SQLite-backed local workspace/history components support an offline-first workflow." }, { title: "What is not present", description: "The inspected repository does not implement language servers, an integrated terminal, an extension marketplace or a debugger integration." }, { title: "Packaging", description: "Electron Builder is configured for Windows NSIS and portable output. No signed or published installer asset was found." }] },
    ],
  },
  {
    slug: "arch-linux-dev-pack",
    releaseStatus: "development",
    repositoryUrls: ["https://github.com/ravindran-dev/dotfiles", "https://github.com/ravindran-dev/nvim", "https://github.com/ravindran-dev/swayfx"],
    name: "Arch Linux Developer Pack",
    shortName: "Arch Dev Pack",
    category: "Linux Systems",
    status: "Maintained configuration",
    positioning: "An Arch Linux developer desktop, from Sway to shell and editor.",
    description: "A personal Wayland desktop and development environment assembled from separate Sway, shell and Neovim configuration repositories.",
    repository: "https://github.com/ravindran-dev/dotfiles",
    icon: "/products/archlinux-logo.svg",
    repositories: [
      { label: "Dotfiles & setup", url: "https://github.com/ravindran-dev/dotfiles" },
      { label: "Neovim configuration", url: "https://github.com/ravindran-dev/nvim" },
      { label: "Sway desktop configuration", url: "https://github.com/ravindran-dev/swayfx" },
    ],
    accent: "#7aa2f7",
    platforms: ["Arch Linux", "Wayland · Sway (SwayFX optional)"],
    languages: ["Shell", "Lua", "Python"],
    stack: ["Sway", "SwayFX (optional)", "Waybar", "Wofi", "Mako", "Zsh", "Neovim", "Lazy.nvim"],
    features: [
      { title: "Shell configuration", description: "Zsh setup with Powerlevel10k, autosuggestions, syntax highlighting and shell utilities." },
      { title: "Automated workstation setup", description: "The dotfiles repository includes an Arch setup script for installing system and developer tools." },
      { title: "Neovim environment", description: "A separate Lua configuration uses Lazy.nvim with Telescope, Treesitter, LSP, formatting and completion plugins." },
      { title: "Wayland desktop", description: "The Sway repository supplies a tiling Sway desktop with Waybar, Wofi, Mako, Swaylock, helper scripts and optional SwayFX effects." },
      { title: "Restore your setup", description: "Configuration and scripts live in public repositories so you can inspect and adapt them before use." },
    ],
    architecture: "This configuration pack links three independent repositories: shell/system setup in dotfiles, Neovim in nvim, and a Sway/Wayland desktop in swayfx. SwayFX directives are kept separate and the setup script only installs them when the SwayFX binary is detected; vanilla Sway skips those effects.",
    install: [
      { label: "Sway desktop configuration", command: "git clone https://github.com/ravindran-dev/swayfx.git\ncd swayfx\nless README.md\nless setup.sh", note: "The setup script installs packages with pacman and copies files over ~/.config. Back up existing configs and inspect the script before running it. SwayFX is optional; the base configuration targets Sway." },
      { label: "Dotfiles", command: "git clone https://github.com/ravindran-dev/dotfiles.git\ncd dotfiles\nless autosetup.sh", note: "The setup script installs packages and modifies workstation configuration. Inspect it and back up files before choosing to run it." },
      { label: "Neovim configuration", command: "git clone https://github.com/ravindran-dev/nvim.git ~/.config/nvim\nnvim", note: "The README says Lazy.nvim installs plugins at first launch. Install Neovim and Git first." },
    ],
    documentation: [
      { label: "Dotfiles README", url: "https://github.com/ravindran-dev/dotfiles#readme" },
      { label: "Neovim README", url: "https://github.com/ravindran-dev/nvim#readme" },
      { label: "Sway desktop README & keybindings", url: "https://github.com/ravindran-dev/swayfx#readme" },
    ],
    faq: [
      { question: "Is this one repository?", answer: "No. It links three independently maintained repositories: dotfiles, Neovim configuration and the Sway desktop configuration." },
      { question: "Is SwayFX required?", answer: "No. The desktop config targets Sway. SwayFX is optional and adds compositor effects; its separate directives are installed only when the SwayFX binary is detected." },
      { question: "Does it support other distributions?", answer: "The developer pack is presented for Arch Linux. The Sway dotfiles README also lists Fedora package instructions, but the other pack components are not claimed as cross-distribution." },
      { question: "Are there versioned releases?", answer: "The Neovim repository has a v0.1.0 Git tag. The dotfiles and Sway repositories have no published release assets." },
    ],
    releaseNote: "The three repositories have independent histories. Neovim has local tag v0.1.0; the dotfiles and Sway repositories have no published release assets. No bundled download is offered.",
    systemRequirements: ["Arch Linux is the developer pack target", "Wayland session with Sway; SwayFX is optional and available separately", "Review setup scripts before applying package or configuration changes", "Neovim configuration expects Neovim, Git and Lazy.nvim bootstrap access", "Sway configuration paths include ~/.config/sway, ~/.config/waybar, ~/.config/mako, ~/.config/swaylock and ~/.config/wofi"],
    detailSections: [
      { eyebrow: "Configuration pack", title: "A complete Arch developer desktop", intro: "This product combines three public configuration repositories. It is a developer environment configuration—not an Arch Linux ISO or operating system.", items: [{ title: "Sway desktop", description: "The Sway repo includes a tiling Wayland config, Waybar, Wofi, Mako, Swaylock, screenshot/clipboard helpers, power and workspace scripts, plus a searchable keybinding guide." }, { title: "Optional SwayFX effects", description: "Rounded window corners, blur and shadows are kept in sway/swayfx.conf. The setup script only copies that file when SwayFX is detected because those directives fail on vanilla Sway." }, { title: "Shell and dotfiles", description: "The dotfiles repository supplies Zsh, Kitty and Fastfetch configuration plus an Arch-focused setup script." }, { title: "Neovim setup", description: "Lua-based configuration using Lazy.nvim, Telescope, Treesitter, completion, LSP, formatting/linting, Git tools, terminal integration, persistence and UI plugins." }, { title: "Language tooling", description: "The checked-in Neovim LSP setup configures clangd, pyright, tsserver, lua_ls, gopls and rust_analyzer. External language servers/toolchains must be installed separately." }] },
      { eyebrow: "Desktop workflow", title: "Keyboard-first Wayland configuration", intro: "Sway uses Mod4 and Vim-style focus movement. The repository also includes a Waybar panel, network and volume popups, notifications, lock/suspend handling and screenshots.", items: [{ title: "Window management", description: "Sway tiling, workspaces 1–5, focus and move bindings, floating windows, stacking/tabbed layouts and reload/exit shortcuts." }, { title: "Desktop utilities", description: "Waybar, Wofi, Mako, Swaylock, clipboard history, grim/slurp screenshots, NetworkManager popups, PipeWire/PulseAudio controls and media visualization." }, { title: "Preview images", description: "The repository labels its desktop preview images as placeholders, so this page does not present them as captured screenshots." }] },
      { eyebrow: "Installation and recovery", title: "Inspect before applying", intro: "There is no verified bundled release or reversible installer. The broad autosetup script installs packages and changes machine configuration; do not run it without reviewing it.", items: [{ title: "Full setup", description: "Review dotfiles/autosetup.sh and its package lists, then run only the steps you intend to apply. It detects multiple distributions and has system-level side effects." }, { title: "Neovim only", description: "Clone the Neovim repository to ~/.config/nvim after backing up any existing configuration. Lazy.nvim bootstraps plugins on first launch." }, { title: "Backup and removal", description: "Move existing config directories to a dated backup before installing. Roll back by restoring those directories; no automated uninstall/rollback script is supplied." }] },
    ],
  },
  {
    slug: "archon",
    releaseStatus: "stable",
    repositoryUrls: ["https://github.com/ravindran-dev/archon"],
    name: "Archon Package Manager",
    shortName: "Archon",
    category: "Developer Tools",
    status: "Experimental",
    positioning: "One package-management interface across Linux distributions.",
    description: "A Rust CLI with native distro adapters and sandboxed AUR builds on Arch Linux.",
    repository: "https://github.com/ravindran-dev/archon",
    icon: "/products/linux-penguin.png",
    primaryAction: { label: "Install from Cargo", href: "#install" },
    accent: "#e2a86b",
    latestTag: "0.1.1",
    developmentVersion: "0.2.1 (workspace manifest; experimental)",
    platforms: ["Linux: Arch, Debian/Ubuntu, Fedora/RHEL, openSUSE, Alpine, NixOS, Void, Gentoo"],
    languages: ["Rust"],
    stack: ["Cargo workspace", "Bubblewrap", "Aya/eBPF (optional)"],
    features: [
      { title: "Arch dependency planning", description: "Resolves official repository and AUR dependencies into an inspectable plan." },
      { title: "Sandboxed AUR builds", description: "Uses Bubblewrap for AUR build isolation, with separate source-fetch and build stages." },
      { title: "Native distro adapters", description: "Delegates package operations to the host distribution's native manager." },
      { title: "Optional build monitoring", description: "An eBPF monitoring mode is available; the project documents remaining coverage and verification limits." },
    ],
    architecture: "A Rust workspace separates shared types, repository and AUR clients, resolution, sandboxing, monitoring, distro adapters and the CLI. On non-Arch distributions, Archon delegates to the native package manager.",
    install: [
      { label: "Install published Cargo package", command: "cargo install archon-cli", note: "The repository README documents this command. The project labels version 0.2.1 experimental." },
      { label: "Build from source", command: "git clone https://github.com/ravindran-dev/archon.git\ncd archon\ncargo install --path crates/archon --locked", note: "Rust stable is required. On Arch, Bubblewrap and cgroups v2 are needed for sandboxed builds." },
    ],
    documentation: [
      { label: "README & commands", url: "https://github.com/ravindran-dev/archon#readme" },
      { label: "Audit and limits", url: "https://github.com/ravindran-dev/archon/blob/main/AUDIT.md" },
      { label: "Design guide", url: "https://github.com/ravindran-dev/archon/blob/main/docs/DESIGN.md" },
      { label: "Cross-distro matrix", url: "https://github.com/ravindran-dev/archon/blob/main/docs/CROSS-DISTRO.md" },
    ],
    faq: [
      { question: "Is Archon production ready?", answer: "The repository calls 0.2.1 experimental and documents unresolved findings and verification limits. Review its audit before use." },
      { question: "Does every distribution use Archon's resolver?", answer: "No. The README says non-Arch operations delegate to the host's native package manager." },
      { question: "What is the current release?", answer: "The latest local Git tag is v0.1.1. The workspace manifest says 0.2.1; it is shown as experimental development metadata." },
    ],
    releaseHistory: [{ version: "0.1.1", date: "2026-07-13", summary: "First public release: cross-distro commands and ranked search, alongside Arch dependency resolution, Bubblewrap AUR builds and optional eBPF monitoring. The release has no attached binary assets.", url: "https://github.com/ravindran-dev/archon/releases/tag/v0.1.1" }],
    releaseNote: "GitHub Release v0.1.1 was published 2026-07-13 with no attached binary assets. Workspace version 0.2.1 is explicitly marked experimental in the README.",
    systemRequirements: ["Linux; supported distro adapters are documented in the project matrix", "Rust stable to build from source", "Bubblewrap and cgroups v2 for Arch AUR sandboxed builds", "Aya/eBPF monitoring is optional and has kernel/privilege requirements described in the audit"],
    detailSections: [
      { eyebrow: "Planning workflow", title: "Inspect the plan before package changes", intro: "Archon exposes search and planning/confirmation flows. On Arch, it resolves official and AUR package dependencies; elsewhere it delegates to native package managers.", items: [{ title: "Resolution on Arch", description: "The Rust resolver handles version constraints, virtual package providers, conflicts and cycles, then orders build dependencies topologically." }, { title: "Sources", description: "Arch official repositories and AUR have dedicated integration. Non-Arch adapters invoke native package manager behavior rather than using the Arch resolver." }, { title: "Dry-run and confirmation", description: "Use plan/preview options to inspect operations before confirmation. Exact command flags are documented in the CLI reference linked below." }] },
      { eyebrow: "Build isolation", title: "Useful safeguards with stated limits", intro: "Sandboxing narrows the build environment; it does not establish complete system security or make untrusted software safe.", items: [{ title: "Bubblewrap", description: "AUR build stages use Bubblewrap isolation with separate source-fetch and build steps. Sandbox availability depends on host kernel and configuration." }, { title: "Optional eBPF monitor", description: "Aya-based monitoring can report selected system activity. The project audit notes incomplete coverage and verification limits; it is not a security guarantee." }, { title: "Experimental status", description: "The workspace is 0.2.1 while the latest published GitHub release is v0.1.1. The README labels the current project experimental." }] },
    ],
  },
  {
    slug: "zenmode",
    releaseStatus: "development",
    repositoryUrls: ["https://github.com/ravindran-dev/ZenMode"],
    name: "Zenmode",
    shortName: "Zenmode",
    category: "Desktop & Mobile",
    status: "Active development",
    positioning: "Start a focused Windows workspace; restore the system when you finish.",
    description: "A Windows workspace manager that coordinates focus profiles and journals system changes for recovery.",
    repository: "https://github.com/ravindran-dev/ZenMode",
    sourcePublic: false,
    icon: "/products/zenmode.png",
    accent: "#67b8a5",
    developmentVersion: "1.0.0 (project file)",
    platforms: ["Windows 10 1809+", "x64", "ARM64"],
    languages: ["C#", "XAML"],
    stack: [".NET 8", "WinUI 3", "MVVM", "SQLite", "Win32 / P/Invoke"],
    features: [
      { title: "Focus profiles", description: "Configure apps, sites, power and notification behavior for different work sessions." },
      { title: "Recoverable system changes", description: "The app documents a disk-persisted snapshot written before system changes, with restore on exit or next launch." },
      { title: "Workspace launch", description: "Profiles can launch development tools and restore a configured workspace." },
      { title: "Local session history", description: "Session analytics use a local SQLite database; the README states that data stays on the machine." },
    ],
    architecture: "The WinUI application follows MVVM. Services isolate system integration, view models coordinate screens, and SQLite stores session history. Native Windows calls support system features; the app manifest requests administrator privileges.",
    install: [{ label: "Install from source", command: "git clone https://github.com/ravindran-dev/ZenMode.git\ncd ZenMode\npowershell -ExecutionPolicy Bypass -File scripts\\Install-ZenMode.ps1 -Launch", note: "Windows only. The installer script publishes a local self-contained build; no signed public installer was verified." }],
    documentation: [],
    faq: [
      { question: "Which Windows versions are targeted?", answer: "The project file sets a minimum platform version of Windows 10 build 17763 (version 1809), targeting x64 and ARM64." },
      { question: "Does Zenmode require administrator approval?", answer: "Yes. Its README says the app requests administrator privileges at launch for system-level features." },
      { question: "Is the source repository public?", answer: "The configured GitHub remote returned 404 in public and connected GitHub checks. The project details here are based on the local checkout; visitors need repository access to obtain the source." },
      { question: "Is a public installer available?", answer: "No published installer asset was verified. The local repository includes a PowerShell install script that builds and installs locally." },
    ],
    releaseNote: "No local Git tags or verified published release assets were found. 1.0.0 is the project file version, not a confirmed release.",
    systemRequirements: ["Windows 10 build 17763 (version 1809) or later", "x64 or ARM64", ".NET 8 and Windows App SDK/WinUI 3 build prerequisites", "Administrator privileges for system-level workspace controls"],
    detailSections: [{ eyebrow: "Focus workspaces", title: "A system-level Windows workspace manager", intro: "Zenmode applies a configured focus profile and records system changes so it can attempt restoration when the session ends or on the next launch.", items: [{ title: "Profile actions", description: "Launch configured apps, adjust process priority, power plan and notification behavior; hosts-file website blocking is present in the project scope." }, { title: "Recovery journal", description: "The app writes snapshots before system changes and includes restore handling. These controls require elevated privileges." }, { title: "Private source status", description: "The local checkout is inspectable here, but the configured GitHub repository is not publicly reachable and no public installer/release was verified." }] }],
  },
  {
    slug: "airlink",
    releaseStatus: "development",
    repositoryUrls: ["https://github.com/ravindran-dev/Airlink"],
    name: "Airlink",
    shortName: "Airlink",
    category: "Desktop & Mobile",
    status: "Active development",
    positioning: "Private, peer-to-peer file sharing for nearby Android devices.",
    description: "A modular Android file-transfer application using device discovery, local network transport and encrypted sessions.",
    repository: "https://github.com/ravindran-dev/Airlink",
    icon: "/products/airlink.png",
    accent: "#8b82f6",
    developmentVersion: "1.0.0 (Android manifest)",
    platforms: ["Android 8+ (min SDK 26)"],
    languages: ["Kotlin"],
    stack: ["Jetpack Compose", "Material 3", "Hilt", "Room", "Gradle"],
    features: [
      { title: "Nearby discovery", description: "The README describes BLE discovery combined with Wi-Fi Direct." },
      { title: "Direct transfer", description: "Transfers use TCP sockets over a local network or Wi-Fi Direct group." },
      { title: "Encrypted sessions", description: "The project documents ECDH key agreement and AES-256-GCM traffic encryption." },
      { title: "Modular Android app", description: "Discovery, transfer, pairing, history, QR, profile and settings are split into feature modules." },
    ],
    architecture: "A Kotlin multi-module Android project separates domain and data layers, core connectivity and cryptography, a shared Compose design system, and independently scoped feature modules.",
    install: [{ label: "Build from source (PowerShell)", command: "git clone https://github.com/ravindran-dev/Airlink.git\ncd Airlink\n.\\gradlew.bat assembleDebug", note: "Requires Android Studio or Android SDK API 34 and Java 21. The repository includes a Windows Gradle wrapper script. No APK release asset was verified." }],
    documentation: [{ label: "Project README", url: "https://github.com/ravindran-dev/Airlink#readme" }],
    faq: [
      { question: "Which devices are supported?", answer: "The Android app sets minSdk 26 (Android 8) and target SDK 34." },
      { question: "Is Airlink available on iOS or desktop?", answer: "No iOS or desktop target is present in the repository." },
      { question: "Can I download an APK here?", answer: "Yes! A debug preview APK is built and available below with verified SHA-256 digest." },
    ],
    releaseNote: "No local Git tags or verified published release assets were found. 1.0.0 is the Android manifest version, not a confirmed release.",
    systemRequirements: ["Android 8.0+ (min SDK 26); target SDK 34", "Java 21 and Android SDK for source builds", "Bluetooth Low Energy and Wi-Fi/Wi-Fi Direct hardware and permissions for discovery/transfer", "The repository includes a Windows Gradle wrapper script; no Unix gradlew wrapper is present"],
    detailSections: [{ eyebrow: "Peer-to-peer transfer", title: "Discover nearby, transfer over local links", intro: "Airlink is an Android file-sharing app. The README and modular implementation describe BLE discovery with Wi-Fi Direct discovery and TCP transfer over a local network or Wi-Fi Direct group.", items: [{ title: "Connection flow", description: "Discover and select a nearby peer, establish a connection, then transfer files over the socket transport. Feature modules cover discovery, pairing, QR, transfer, receive and history." }, { title: "Cryptography", description: "The project documents ECDH key agreement and AES-256-GCM encrypted transfer sessions. Verify security details against implementation and protocol docs before production use." }, { title: "Android modules", description: "Kotlin multi-module structure separates domain/data, Bluetooth, Wi-Fi, crypto, sockets, storage, and Compose feature modules." }] }],
    downloads: [{ label: "Airlink Android debug preview", platform: "Android 8+ · API 26–34", format: "APK", url: "/downloads/airlink-debug-v1.0.0.apk", size: 20578597, sha256: "07650d558eae3be51bc240a81c9ef491fd6ee7c6e3577571cb6818b18313a5b2", status: "development", architecture: "Universal APK (no ABI-specific native libraries)" }],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
