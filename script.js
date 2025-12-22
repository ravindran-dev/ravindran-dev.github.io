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
WM: Wayland
Editor: Neovim
Languages: Rust, Python, C++
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
├── python.txt
├── rust.txt
├── linux.txt
└── web.txt
`,
    pre: true
  },
  {
    cmd: "tree projects/",
    out: `
projects
├── todo-tui (Rust)
├── drone-object-detection (CV)
├── Mining LCA tool (SIH)
├── Linux Config tools (NVIM, TMUX)
└── spam-detection-webapp (ML + React)
`,
    pre: true
  },
  {
  cmd: "./contact.sh",
  out: `
<span class="label">Resume</span>    : <a href="https://docs.google.com/document/d/1di_cFryoxW23Qo3KmBrAv0LM5KbTNyt0/edit?usp=drive_link&ouid=112067721562008961997&rtpof=true&sd=true" target="_blank">Click here...</a>
<span class="label">GitHub</span>    : <a href="https://github.com/ravindran-dev" target="_blank">profile</a>
<span class="label">LinkedIn</span>  : <a href="https://www.linkedin.com/in/ravindran-s-982702327" target="_blank">For more details...</a>
<span class="label">Email</span>     : <a href="mailto:ravindrans.dev@gmail.com">Mail me</a>
`,
  pre: true,
  html: true
}



];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeCommand(command) {
  const line = document.createElement("p");

  line.innerHTML = `
    <span class="prompt">
      <span class="arch-icon">
        <svg width="14" height="14" viewBox="0 0 128 128" fill="#1793d1" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 0C51 33 39 59 18 88c13-5 26-8 39-10 5 11 9 23 7 40 6-10 14-21 20-32 13 3 26 7 44 14C102 69 77 33 64 0z"/>
        </svg>
      </span>
      <span class="userhost">ravi@archlinux</span>
      <span class="cwd">~</span>
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
    // Render raw HTML (for contact.sh only)
    el.innerHTML = text.trim();
    return;
  }

  if (animate && !pre) {
    const words = text.trim().split(/\s+/);
    for (const w of words) {
      el.innerText += w + " ";
      await sleep(120);
    }
  } else {
    el.innerText = text.trim();
  }
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
