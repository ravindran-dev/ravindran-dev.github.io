const terminal = document.getElementById("terminal");

const script = [
  {
    cmd: "whoami",
    out: "ML Engineer | Rust | Linux | Open Source",
    animate: true
  },
  {
    cmd: "fastfetch",
    out: `
OS: Arch Linux x86_64
Kernel: 6.x
Shell: zsh
WM: Hyprland
Editor: Neovim
Languages: C++, Python, Rust, Golang, Java, JavaScript, HTML, CSS
Machine Learning: PyTorch, TensorFlow, Scikit-learn, Pandas
Web: React, Node.js
Database: PostgreSQL, MongoDB, Sqlite
`,
    pre: true
  },
  {
    cmd: "ls",
    out: "about.md  skills/  projects/  contact.sh",
    animate: true
  },
  {
    cmd: "cat about.md",
    out: `
I am Ravindran, an AIML undergraduate passionate about Linux,
Machine Learning, Rust systems programming, and open-source development.
I build efficient, minimal, production-ready software.
`,
    animate: true
  },
  {
    cmd: "tree skills/",
    out: `
skills
├── machine-learning.txt
├── Deep Learning.txt
├── python.txt
├── rust.txt
├── Golang.txt
├── linux.txt
└── web development.txt
`,
    pre: true
  },
  {
    cmd: "tree projects/",
    out: `
projects
├── GenuineGate (Golang) (Real-time anti-scalping bot protection)
├── todo-tui (Rust)
├── Microdet (drone-object-detection) (CV + ML + DL)
├── Mining LCA tool (SIH) (RAG + Python + React)
├── Linux Config tools (NVIM, TMUX, dotfiles)
├── SmartSpend (React + Flask + ML)
└── SpamZero (spam-detection-webapp) (ML + React)
`,
    pre: true
  },
  {
    cmd: "./contact.sh",
    out: `
<span class="label">Resume</span>    : <a href="https://drive.google.com/file/d/1Y80nu3vjU-frqBjsiXBHTfU7BrL0pwFP/view?usp=sharing" target="_blank">Click here...</a>
<span class="label">GitHub</span>     : <a href="https://github.com/ravindran-dev" target="_blank">profile</a>
<span class="label">LinkedIn</span>   : <a href="https://www.linkedin.com/in/ravindran-s-982702327" target="_blank">For more details...</a>
<span class="label">Email</span>      : <a href="mailto:ravindrans.dev@gmail.com">Mail me</a>
`,
    pre: true,
    html: true,
    animate: false
  }
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

const getTime = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

async function typeCommand(command) {
  const line = document.createElement("p");

  line.innerHTML = `
    <span class="prompt">
      <span class="segment os">
        <i class="fa-brands fa-linux nf-icon" style="color: #38bdf8; text-shadow: 0 0 10px rgba(56, 189, 248, 0.8);"></i> Arch Linux
      </span>
      <span class="segment time">
        <i class="fa-regular fa-clock nf-icon" style="color: #a78bfa; text-shadow: 0 0 10px rgba(167, 139, 250, 0.8);"></i> ${getTime()}
      </span>
      <span class="segment user">
        <i class="fa-solid fa-user nf-icon" style="color: #22c55e; text-shadow: 0 0 10px rgba(34, 197, 94, 0.8);"></i> ravindran@s
      </span>
      <span class="segment cwd">
        <i class="fa-solid fa-folder nf-icon" style="color: #facc15; text-shadow: 0 0 10px rgba(250, 204, 21, 0.8);"></i> ~
      </span>
      <span class="prompt-symbol">❯</span>
    </span>
  `;

  terminal.appendChild(line);

  for (const char of command) {
    line.innerHTML += char;
    await sleep(40);
  }
}

async function printOutput(text, animate, pre, html = false) {
  const el = document.createElement(pre ? "pre" : "p");
  el.className = "output";
  terminal.appendChild(el);

  if (html) {
    el.innerHTML = text.trim();
    terminal.scrollTop = terminal.scrollHeight;
    return;
  }

  if (animate && !pre) {
    const words = text.trim().split(/\s+/);
    for (const w of words) {
      el.innerText += w + " ";
      await sleep(120);
      terminal.scrollTop = terminal.scrollHeight;
    }
  } else {
    el.innerText = text.trim();
  }

  terminal.scrollTop = terminal.scrollHeight;
}

async function runTerminal() {
  for (const step of script) {
    await typeCommand(step.cmd);
    await sleep(300);
    await printOutput(step.out, step.animate, step.pre, step.html);
    await sleep(600);
  }
}

runTerminal();
