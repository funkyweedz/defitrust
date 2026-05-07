const STORAGE_KEY = "defitrust-submissions";

const baseProjects = [
  {
    name: "Aave V3",
    initials: "AV",
    category: "Lending",
    network: "ETH",
    reports: 2,
    tvl: "$1.8B",
    verified: true,
    score: 96,
    avatar: "mint",
    website: "https://aave.com",
    hash: "QmAave91c3...7d42",
    summary:
      "Coverage across lending contracts, liquidations, oracles, and governance modules. Critical fixes were confirmed before publication.",
    audits: [
      {
        auditor: "Certora",
        date: "April 12, 2026",
        severity: "Critical: 0 · High: 1 resolved",
        scope: "Pool, incentives, oracle adapters",
        certificate: "Audit-Certora-AaveV3.pdf",
      },
      {
        auditor: "OpenZeppelin",
        date: "January 21, 2026",
        severity: "Critical: 0 · High: 0",
        scope: "Governance payloads and upgrade review",
        certificate: "Audit-OZ-AaveV3.pdf",
      },
    ],
  },
  {
    name: "Uniswap V4",
    initials: "UV",
    category: "DEX",
    network: "ETH/ARB",
    reports: 2,
    tvl: "$3.1B",
    verified: true,
    score: 98,
    avatar: "blue",
    website: "https://uniswap.org",
    hash: "Qm91ab4e...7fA2",
    summary:
      "Audits for the core AMM, hooks, and pool permissions. Certificates include a public hash and auditor signature.",
    audits: [
      {
        auditor: "Trail of Bits",
        date: "May 7, 2026",
        severity: "Critical: 0 · High: 0",
        scope: "Hooks, pool manager, accounting",
        certificate: "Trail-of-Bits-UniswapV4.pdf",
      },
      {
        auditor: "Spearbit",
        date: "March 18, 2026",
        severity: "Critical: 0 · High: 2 resolved",
        scope: "Peripheral contracts and integrations",
        certificate: "Spearbit-UniswapV4.pdf",
      },
    ],
  },
  {
    name: "Curve Finance",
    initials: "CF",
    category: "DEX",
    network: "Multi",
    reports: 1,
    tvl: "$2.2B",
    verified: true,
    score: 92,
    avatar: "rose",
    website: "https://curve.fi",
    hash: "QmCurve8f...229b",
    summary:
      "Certificate focused on stable pools, oracle exposure, and multi-chain admin parameters.",
    audits: [
      {
        auditor: "ChainSecurity",
        date: "February 2, 2026",
        severity: "Critical: 0 · High: 1 resolved",
        scope: "Stable pools, gauges, admin controls",
        certificate: "ChainSecurity-Curve.pdf",
      },
    ],
  },
  {
    name: "LayerGate",
    initials: "LG",
    category: "Bridge",
    network: "Base",
    reports: 1,
    tvl: "$420M",
    verified: false,
    score: 73,
    avatar: "amber",
    website: "https://layergate.example",
    hash: "Pending",
    summary:
      "Audit currently under DeFiTrust review. Remediation evidence and the auditor's final signature are still pending.",
    audits: [
      {
        auditor: "Quantstamp",
        date: "Under review",
        severity: "Critical: 1 open · High: 2 in remediation",
        scope: "Bridge messenger, relayer, withdrawals",
        certificate: "LayerGate-Draft.pdf",
      },
    ],
  },
  {
    name: "Ethena",
    initials: "EN",
    category: "Stablecoin",
    network: "ETH",
    reports: 3,
    tvl: "$890M",
    verified: true,
    score: 94,
    avatar: "mint",
    website: "https://ethena.fi",
    hash: "QmEthena55...ad11",
    summary:
      "Multiple audits cover minting mechanics, reserves, operational roles, and DeFi integrations.",
    audits: [
      {
        auditor: "Pashov Audit Group",
        date: "April 28, 2026",
        severity: "Critical: 0 · High: 0",
        scope: "Minting, custody, role controls",
        certificate: "Pashov-Ethena.pdf",
      },
      {
        auditor: "Zellic",
        date: "December 15, 2025",
        severity: "Critical: 0 · High: 1 resolved",
        scope: "Protocol integrations",
        certificate: "Zellic-Ethena.pdf",
      },
      {
        auditor: "Code4rena",
        date: "November 2, 2025",
        severity: "Critical: 0 · High: 2 resolved",
        scope: "Public contest findings",
        certificate: "C4-Ethena.pdf",
      },
    ],
  },
  {
    name: "Morpho Blue",
    initials: "MB",
    category: "Lending",
    network: "ETH/Base",
    reports: 2,
    tvl: "$760M",
    verified: true,
    score: 95,
    avatar: "blue",
    website: "https://morpho.org",
    hash: "QmMorpho08...c88e",
    summary:
      "Verification of isolated markets, risk parameters, and oracle adapters before certificate publication.",
    audits: [
      {
        auditor: "Spearbit",
        date: "April 4, 2026",
        severity: "Critical: 0 · High: 0",
        scope: "Markets, liquidation, oracle adapters",
        certificate: "Spearbit-MorphoBlue.pdf",
      },
      {
        auditor: "Cantina",
        date: "February 17, 2026",
        severity: "Critical: 0 · High: 1 resolved",
        scope: "Vault integrations",
        certificate: "Cantina-MorphoBlue.pdf",
      },
    ],
  },
];

const projectGrid = document.querySelector("#projectGrid");
const projectSearch = document.querySelector("#projectSearch");
const categoryFilter = document.querySelector("#categoryFilter");
const verifiedToggle = document.querySelector("#verifiedToggle");
const auditDetail = document.querySelector("#auditDetail");
const auditForm = document.querySelector("#auditForm");
const formStatus = document.querySelector("#formStatus");
const reviewBoard = document.querySelector("#reviewBoard");
const resetDemo = document.querySelector("#resetDemo");
const certifiedCount = document.querySelector("#certifiedCount");
const auditorCount = document.querySelector("#auditorCount");
const securedTvl = document.querySelector("#securedTvl");

let onlyVerified = true;
let submissions = loadSubmissions();
let projects = buildProjectList();
let selectedProject = projects[1];

function loadSubmissions() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveSubmissions() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
}

function buildProjectList() {
  const approved = submissions.filter((submission) => submission.status === "approved").map(toProject);
  const pending = submissions.filter((submission) => submission.status !== "approved").map(toProject);
  return [...baseProjects, ...approved, ...pending];
}

function toProject(submission) {
  const isApproved = submission.status === "approved";
  return {
    name: submission.project,
    initials: getInitials(submission.project),
    category: submission.category,
    network: submission.network,
    reports: 1,
    tvl: submission.tvl || "N/A",
    verified: isApproved,
    score: calculateScore(submission.critical, submission.high, isApproved),
    avatar: isApproved ? "mint" : "amber",
    website: submission.website,
    hash: submission.hash,
    summary: submission.summary || "Certificate submitted by the project team and currently under DeFiTrust verification.",
    audits: [
      {
        auditor: submission.auditor,
        date: submission.status === "approved" ? submission.reviewedAt : submission.submittedAt,
        severity: `Critical: ${submission.critical} · Open high: ${submission.high}`,
        scope: submission.summary || "Scope provided in the certificate.",
        certificate: submission.fileName,
      },
    ],
  };
}

function calculateScore(critical, high, approved) {
  const base = approved ? 92 : 76;
  return Math.max(35, base - Number(critical || 0) * 18 - Number(high || 0) * 8);
}

function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function compactHash(value) {
  if (!value) return "Hash generated after upload";
  if (value.length < 18) return value;
  return `${value.slice(0, 8)}...${value.slice(-6)}`;
}

function generateHash(seed) {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(index);
    hash |= 0;
  }
  return `dft_${Math.abs(hash).toString(16).padStart(8, "0")}_${Date.now().toString(36)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function refreshState() {
  projects = buildProjectList();
  renderStats();
  renderProjects();
  renderReviewBoard();

  const updatedSelection = projects.find((project) => project.name === selectedProject?.name) || projects[1];
  renderAuditDetail(updatedSelection);
}

function renderStats() {
  const certified = projects.filter((project) => project.verified).length;
  const auditors = new Set(projects.flatMap((project) => project.audits.map((audit) => audit.auditor))).size;

  certifiedCount.textContent = String(209 + certified);
  auditorCount.textContent = String(auditors);
  securedTvl.textContent = "$4.2B";
}

function renderProjects() {
  const search = projectSearch.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const filtered = projects.filter((project) => {
    const matchesSearch = [project.name, project.category, project.network, project.website, ...project.audits.map((audit) => audit.auditor)]
      .join(" ")
      .toLowerCase()
      .includes(search);
    const matchesCategory = category === "all" || project.category === category;
    const matchesVerified = !onlyVerified || project.verified;

    return matchesSearch && matchesCategory && matchesVerified;
  });

  projectGrid.innerHTML = filtered
    .map(
      (project) => {
        const projectKey = encodeURIComponent(project.name);
        return `
        <article class="project-card" data-verified="${project.verified}">
          <div class="project-meta">
            <span class="avatar ${project.avatar}">${escapeHtml(project.initials)}</span>
            <div>
              <h3>${escapeHtml(project.name)}</h3>
              <p>${escapeHtml(project.category)} · ${escapeHtml(project.network)}</p>
            </div>
          </div>
          <span class="status-pill ${project.verified ? "" : "pending"}">
            ${project.verified ? "Certified" : "Under review"}
          </span>
          <div>
            <div class="score-line">
              <span>Trust score</span>
              <strong>${project.score}/100</strong>
            </div>
            <div class="risk-bar" aria-label="Trust score ${project.score} out of 100">
              <span style="width: ${project.score}%"></span>
            </div>
          </div>
          <div class="project-footer">
            <span>${project.reports} ${project.reports > 1 ? "reports" : "report"}</span>
            <span>${escapeHtml(project.tvl)} TVL</span>
          </div>
          <button class="button secondary view-audits" type="button" data-project="${projectKey}">
            View audits
          </button>
        </article>
      `;
      }
    )
    .join("");

  if (!filtered.length) {
    projectGrid.innerHTML = '<p class="empty-results">No project matches this search.</p>';
  }
}

function renderAuditDetail(project) {
  selectedProject = project;
  auditDetail.innerHTML = `
    <div class="audit-layout">
      <div class="audit-summary">
        <p class="eyebrow">${project.verified ? "Verified file" : "File under review"}</p>
        <h2>${escapeHtml(project.name)}</h2>
        <p>${escapeHtml(project.summary)}</p>
        <div class="certificate-meta">
          <span>Official website</span>
          <a href="${escapeHtml(project.website)}" target="_blank" rel="noreferrer">${escapeHtml(project.website)}</a>
          <span>Certificate hash</span>
          <code>${escapeHtml(compactHash(project.hash))}</code>
          <span>Score</span>
          <strong>${project.score}/100</strong>
        </div>
      </div>
      <div class="audit-list">
        ${project.audits
          .map(
            (audit) => `
              <article class="audit-card">
                <div class="audit-card-header">
                  <h3>${escapeHtml(audit.auditor)}</h3>
                  <span class="status-pill ${project.verified ? "" : "pending"}">${project.verified ? "Validated" : "Under review"}</span>
                </div>
                <p><strong>Date:</strong> ${escapeHtml(audit.date)}</p>
                <p><strong>Result:</strong> ${escapeHtml(audit.severity)}</p>
                <p><strong>Scope:</strong> ${escapeHtml(audit.scope)}</p>
                <p><strong>Certificate:</strong> ${escapeHtml(audit.certificate)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderReviewBoard() {
  if (!submissions.length) {
    reviewBoard.innerHTML = `
      <div class="empty-review">
        <h3>No submissions yet</h3>
        <p>Certificates sent by projects will appear here with their hash, risk profile, and status.</p>
      </div>
    `;
    return;
  }

  reviewBoard.innerHTML = submissions
    .map(
      (submission) => `
        <article class="review-item">
          <div>
            <span class="status-pill ${submission.status === "approved" ? "" : "pending"}">
              ${submission.status === "approved" ? "Approved" : "Needs review"}
            </span>
            <h3>${escapeHtml(submission.project)}</h3>
            <p>${escapeHtml(submission.auditor)} · ${escapeHtml(submission.category)} · ${escapeHtml(submission.network)}</p>
          </div>
          <div class="review-meta">
            <span>Certificate</span>
            <strong>${escapeHtml(submission.fileName)}</strong>
            <span>Hash</span>
            <code>${escapeHtml(compactHash(submission.hash))}</code>
            <span>Open risks</span>
            <strong>${submission.critical} critical · ${submission.high} high</strong>
          </div>
          <div class="review-actions">
            <button class="button primary compact" type="button" data-approve="${submission.id}" ${submission.status === "approved" ? "disabled" : ""}>
              Approve
            </button>
            <button class="button secondary compact" type="button" data-reject="${submission.id}">
              Remove
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

projectGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-project]");
  if (!button) return;

  const project = projects.find((item) => item.name === decodeURIComponent(button.dataset.project));
  renderAuditDetail(project);
  auditDetail.scrollIntoView({ behavior: "smooth", block: "start" });
});

projectSearch.addEventListener("input", renderProjects);
categoryFilter.addEventListener("change", renderProjects);

verifiedToggle.addEventListener("click", () => {
  onlyVerified = !onlyVerified;
  verifiedToggle.setAttribute("aria-pressed", String(onlyVerified));
  verifiedToggle.textContent = onlyVerified ? "Certified only" : "All statuses";
  renderProjects();
});

auditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(auditForm);
  const file = data.get("certificate");
  const projectName = String(data.get("project")).trim();

  const submission = {
    id: crypto.randomUUID(),
    project: projectName,
    website: String(data.get("website")).trim(),
    auditor: String(data.get("auditor")).trim(),
    category: String(data.get("category")),
    network: String(data.get("network")),
    tvl: String(data.get("tvl")).trim() || "N/A",
    critical: Number(data.get("critical") || 0),
    high: Number(data.get("high") || 0),
    hash: String(data.get("hash")).trim() || generateHash(`${projectName}-${file.name}`),
    summary: String(data.get("summary")).trim(),
    fileName: file?.name || "Unnamed certificate",
    submittedAt: new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }),
    reviewedAt: "",
    status: "pending",
  };

  submissions = [submission, ...submissions];
  saveSubmissions();
  formStatus.textContent = `${projectName} is now in the DeFiTrust verification queue.`;
  auditForm.reset();
  refreshState();
  document.querySelector("#review").scrollIntoView({ behavior: "smooth", block: "start" });
});

reviewBoard.addEventListener("click", (event) => {
  const approveButton = event.target.closest("[data-approve]");
  const rejectButton = event.target.closest("[data-reject]");

  if (approveButton) {
    submissions = submissions.map((submission) =>
      submission.id === approveButton.dataset.approve
        ? {
            ...submission,
            status: "approved",
            reviewedAt: new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }),
          }
        : submission
    );
  }

  if (rejectButton) {
    submissions = submissions.filter((submission) => submission.id !== rejectButton.dataset.reject);
  }

  saveSubmissions();
  refreshState();
});

resetDemo.addEventListener("click", () => {
  submissions = [];
  saveSubmissions();
  refreshState();
  formStatus.textContent = "Demo reset.";
});

refreshState();
