const STORAGE_KEY = "defitrust-submissions";
const MAX_CERTIFICATE_SIZE = 2 * 1024 * 1024;

const baseProjects = [
  {
    name: "Aave V3",
    initials: "AV",
    category: "Lending",
    network: "ETH",
    reports: 6,
    tvl: "$1.8B",
    verified: true,
    score: 96,
    avatar: "mint",
    website: "https://aave.com",
    hash: "Official audit registry",
    summary:
      "Aave publishes a complete security page with audit reports for V4, V3.6, V3.5, V3.4, Aptos, Umbrella, GHO, Governance, V2 and V3.",
    audits: [
      {
        auditor: "Aave Labs",
        date: "May 7, 2026",
        severity: "Official audit registry",
        scope: "All Aave public audit reports",
        certificate: "Aave Security Audit Registry",
        reportUrl: "https://aave.com/security",
      },
      {
        auditor: "OpenZeppelin",
        date: "October 2021",
        severity: "Aave V3 round 1 security audit",
        scope: "Aave V3 core protocol contracts",
        certificate: "OpenZeppelin Aave V3 Audit",
        reportUrl: "https://github.com/aave/aave-v3-core/blob/master/audits/01-11-2021_OpenZeppelin_AaveV3.pdf",
      },
      {
        auditor: "Trail of Bits",
        date: "January 7, 2022",
        severity: "Aave V3 security assessment",
        scope: "Aave V3 core protocol contracts",
        certificate: "Trail of Bits Aave V3 Report",
        reportUrl: "https://github.com/aave-dao/aave-v3-origin/blob/main/audits/07-01-2022_TrailOfBits_AaveV3.pdf",
      },
      {
        auditor: "ABDK",
        date: "January 27, 2022",
        severity: "Aave V3 smart contract audit",
        scope: "Aave V3 protocol math and smart contracts",
        certificate: "ABDK Aave V3 Audit",
        reportUrl: "https://github.com/aave-dao/aave-v3-origin/blob/main/audits/27-01-2022_ABDK_AaveV3.pdf",
      },
      {
        auditor: "Sigma Prime",
        date: "January 27, 2022",
        severity: "Aave V3 security assessment",
        scope: "Aave V3 protocol contracts",
        certificate: "Sigma Prime Aave V3 Audit",
        reportUrl: "https://github.com/aave-dao/aave-v3-origin/blob/main/audits/27-01-2022_SigmaPrime_AaveV3.pdf",
      },
      {
        auditor: "Certora",
        date: "January 2022",
        severity: "Formal verification report",
        scope: "Aave Protocol V3 formal verification",
        certificate: "Certora Aave V3 Formal Verification",
        reportUrl: "https://github.com/aave/aave-v3-core/blob/master/certora/Aave_V3_Formal_Verification_Report_Jan2022.pdf",
      },
    ],
  },
  {
    name: "Uniswap V4",
    initials: "UV",
    category: "DEX",
    network: "ETH/ARB",
    reports: 8,
    tvl: "$3.1B",
    verified: true,
    score: 98,
    avatar: "blue",
    website: "https://uniswap.org",
    hash: "Official v4 audit folders",
    summary:
      "Uniswap v4 has public Core and Periphery audit folders with independent reviews from OpenZeppelin, Trail of Bits, Spearbit, Certora, ABDK and the v4 security competition.",
    audits: [
      {
        auditor: "Uniswap Labs",
        date: "January 2025",
        severity: "Official v4 reports index",
        scope: "Core and Periphery audit folders",
        certificate: "Uniswap v4 Audit Reports",
        reportUrl: "https://v4.uniswap.org/",
      },
      {
        auditor: "OpenZeppelin",
        date: "August 27, 2024",
        severity: "Core audit · 1 critical resolved · 0 high",
        scope: "Uniswap v4 core contracts",
        certificate: "OpenZeppelin v4 Core Audit",
        reportUrl: "https://github.com/Uniswap/v4-core/blob/main/docs/security/audits/OpenZeppelin_audit_core.pdf",
      },
      {
        auditor: "Trail of Bits",
        date: "2024",
        severity: "Core security review",
        scope: "Uniswap v4 core contracts",
        certificate: "Trail of Bits v4 Core Audit",
        reportUrl: "https://github.com/Uniswap/v4-core/blob/main/docs/security/audits/TrailOfBits_audit_core.pdf",
      },
      {
        auditor: "Spearbit",
        date: "2024",
        severity: "Core security review",
        scope: "Uniswap v4 core contracts",
        certificate: "Spearbit v4 Core Audit",
        reportUrl: "https://github.com/Uniswap/v4-core/blob/main/docs/security/audits/DRAFT_Spearbit_audit_core.pdf",
      },
      {
        auditor: "Certora",
        date: "2024",
        severity: "Core audit and formal verification",
        scope: "Uniswap v4 core contracts",
        certificate: "Certora v4 Core Audit",
        reportUrl: "https://github.com/Uniswap/v4-core/blob/main/docs/security/audits/DRAFT_Certora_audit_core.pdf",
      },
      {
        auditor: "ABDK",
        date: "2024",
        severity: "Core audit",
        scope: "Uniswap v4 core contracts",
        certificate: "ABDK v4 Core Audit",
        reportUrl: "https://github.com/Uniswap/v4-core/blob/main/docs/security/audits/DRAFT_ABDK_audit_core.pdf",
      },
      {
        auditor: "OpenZeppelin",
        date: "August 30, 2024",
        severity: "Periphery audit · 1 critical and 1 high resolved",
        scope: "Uniswap v4 Periphery and Universal Router",
        certificate: "OpenZeppelin v4 Periphery Audit",
        reportUrl: "https://github.com/Uniswap/v4-periphery/blob/main/audits/OpenZeppelin_audit_periphery_universal_router.pdf",
      },
      {
        auditor: "Spearbit",
        date: "2024",
        severity: "Periphery security review",
        scope: "Uniswap v4 Periphery contracts",
        certificate: "Spearbit v4 Periphery Audit",
        reportUrl: "https://github.com/Uniswap/v4-periphery/blob/main/audits/DRAFT_Spearbit_audit_periphery.pdf",
      },
    ],
  },
  {
    name: "Curve Finance",
    initials: "CF",
    category: "DEX",
    network: "Multi",
    reports: 5,
    tvl: "$2.2B",
    verified: true,
    score: 92,
    avatar: "rose",
    website: "https://curve.fi",
    hash: "Official Curve audit assets",
    summary:
      "Curve publishes protocol audit reports across StableSwap NG, crvUSD, DAO voting, Fee Splitter, and Fast Bridge modules.",
    audits: [
      {
        auditor: "Curve Finance",
        date: "2025",
        severity: "Official documentation index",
        scope: "Curve technical documentation and audit assets",
        certificate: "Curve Technical Docs",
        reportUrl: "https://dev.curve.finance/",
      },
      {
        auditor: "MixBytes",
        date: "November 1, 2023",
        severity: "StableSwap NG security audit",
        scope: "Curve StableSwap NG contracts",
        certificate: "Curve StableSwapNG Security Audit Report",
        reportUrl: "https://docs.curve.finance/assets/pdf/audits/Curve%20Finance%20StableSwapNG%20Security%20Audit%20Report.pdf",
      },
      {
        auditor: "ChainSecurity",
        date: "June 2023",
        severity: "crvUSD stablecoin assessment",
        scope: "Curve Stablecoin smart contracts",
        certificate: "ChainSecurity Curve Stablecoin Audit",
        reportUrl: "https://docs.curve.finance/assets/pdf/audits/ChainSecurity_Curve_Curve_Stablecoin_audit-1.pdf",
      },
      {
        auditor: "MixBytes",
        date: "June 5, 2023",
        severity: "crvUSD security audit",
        scope: "Curve Stablecoin smart contracts",
        certificate: "Curve crvUSD Security Audit Report",
        reportUrl: "https://docs.curve.finance/assets/pdf/audits/Curve%20Stablecoin%20%28crvUSD%29%20Security%20Audit%20Report.pdf",
      },
      {
        auditor: "ChainSecurity",
        date: "2025",
        severity: "Fast Bridge security audit",
        scope: "Curve Fast Bridge contracts",
        certificate: "ChainSecurity Curve Fast Bridge Audit",
        reportUrl: "https://www.chainsecurity.com/security-audit/curve-fast-bridge",
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
    reports: 9,
    tvl: "$890M",
    verified: true,
    score: 94,
    avatar: "mint",
    website: "https://ethena.fi",
    hash: "Official Ethena audit registry",
    summary:
      "Ethena publishes a multi-phase audit program covering v1, v2, ENA staking, sENA, USDTB, Code4rena competition reports, and economic risk analysis.",
    audits: [
      {
        auditor: "Ethena Labs",
        date: "2024",
        severity: "Official audit registry",
        scope: "All Ethena public audit reports",
        certificate: "Ethena Audits Registry",
        reportUrl: "https://docs.ethena.fi/resources/audits",
      },
      {
        auditor: "Zellic",
        date: "July 5, 2023",
        severity: "Critical: 0 · High: 0",
        scope: "Ethena v1 contracts",
        certificate: "Ethena x Zellic Audit Report",
        reportUrl: "https://596495599-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsBsPyff5ft3inFy9jyjt%2Fuploads%2FGZbd1DrrG3YmnTlJnTHa%2FEthena%20-%20Zellic%20Audit%20Report%20Draft.pdf?alt=media&token=2e65890c-6724-49b7-97f4-6d2223ba086e",
      },
      {
        auditor: "Quantstamp",
        date: "October 18, 2023",
        severity: "Critical: 0 · High: 0",
        scope: "Ethena v1 contracts",
        certificate: "Ethena x Quantstamp Audit Report",
        reportUrl: "https://596495599-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsBsPyff5ft3inFy9jyjt%2Fuploads%2F17Ucep7IYMBZ6mAHGLyw%2FEthena%20Final%20Report%20%281%29.pdf?alt=media&token=51a6a101-516e-4984-8360-14daf860a961",
      },
      {
        auditor: "Spearbit",
        date: "October 18, 2023",
        severity: "Critical: 0 · High: 0",
        scope: "Ethena v1 contracts",
        certificate: "Spearbit x Ethena Audit Report",
        reportUrl: "https://596495599-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsBsPyff5ft3inFy9jyjt%2Fuploads%2FsX7xO54StGnS6RlZM0Qa%2FSpearbit%20_Ethena_v2_Final_report-ethena__1_.pdf?alt=media&token=d0968065-7e4d-4661-b53f-a1d5181c30bd",
      },
      {
        auditor: "Pashov Audit Group",
        date: "May 23, 2024",
        severity: "Independent v2 audit",
        scope: "Ethena v2 contracts",
        certificate: "Ethena v2 Audit",
        reportUrl: "https://596495599-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsBsPyff5ft3inFy9jyjt%2Fuploads%2FJHbdthPqKCPoZFzrpryW%2Fv2-audit.pdf?alt=media&token=68bbdbae-4fcf-4e90-ad20-8c4d6a5a29a0",
      },
      {
        auditor: "Pashov Audit Group",
        date: "September 2, 2024",
        severity: "Critical: 0 · High: 0",
        scope: "Staked ENA (sENA)",
        certificate: "Ethena x Pashov sENA Audit",
        reportUrl: "https://596495599-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsBsPyff5ft3inFy9jyjt%2Fuploads%2FtqsJW7hPQMXv80sibsUK%2FEthena%20x%20Pashov%20-%20SENA%20Audit%20Report.pdf?alt=media&token=9b05cbba-cd3f-4252-9940-ba35b5408b9c",
      },
      {
        auditor: "Code4rena",
        date: "November 13, 2023",
        severity: "Public audit contest · Critical: 0 · High: 0",
        scope: "Ethena Labs public contest",
        certificate: "Ethena Labs Code4rena Audit",
        reportUrl: "https://code4rena.com/reports/2023-10-ethena",
      },
      {
        auditor: "Chaos Labs",
        date: "2024",
        severity: "Economic and financial risk audit",
        scope: "Ethena system design and market risk",
        certificate: "Chaos Labs Ethena Risk Analysis",
        reportUrl: "https://docs.ethena.fi/resources/audits",
      },
      {
        auditor: "Cyfrin",
        date: "October 31, 2024",
        severity: "Critical: 0 · High: 0",
        scope: "USDTB contracts",
        certificate: "Ethena x Cyfrin USDTB Audit",
        reportUrl: "https://docs.ethena.fi/resources/audits",
      },
    ],
  },
  {
    name: "Morpho Blue",
    initials: "MB",
    category: "Lending",
    network: "ETH/Base",
    reports: 5,
    tvl: "$760M",
    verified: true,
    score: 95,
    avatar: "blue",
    website: "https://morpho.org",
    hash: "Official Morpho audit folder",
    summary:
      "Morpho Blue is an immutable lending primitive with public audits stored in the protocol GitHub repository and formal verification resources.",
    audits: [
      {
        auditor: "Morpho Labs",
        date: "2024",
        severity: "Official audits folder",
        scope: "Morpho Blue public audit reports",
        certificate: "Morpho Blue Audits Registry",
        reportUrl: "https://github.com/morpho-org/morpho-blue/tree/main/audits",
      },
      {
        auditor: "OpenZeppelin",
        date: "October 13, 2023",
        severity: "Morpho Blue and Speed Jump IRM audit",
        scope: "Morpho Blue core and interest rate model",
        certificate: "OpenZeppelin Morpho Blue Audit",
        reportUrl: "https://github.com/morpho-org/morpho-blue/blob/main/audits/2023-10-13-morpho-blue-and-speed-jump-irm-open-zeppelin.pdf",
      },
      {
        auditor: "Cantina",
        date: "November 13, 2023",
        severity: "Managed security review",
        scope: "Morpho Blue protocol contracts",
        certificate: "Cantina Managed Review",
        reportUrl: "https://github.com/morpho-org/morpho-blue/blob/main/audits/2023-11-13-morpho-blue-cantina-managed-review.pdf",
      },
      {
        auditor: "Cantina",
        date: "January 5, 2024",
        severity: "Security competition report",
        scope: "Morpho Blue protocol contracts",
        certificate: "Morpho Blue Cantina Competition",
        reportUrl: "https://github.com/morpho-org/morpho-blue/blob/main/audits/2024-01-05-morpho-blue-cantina-competition.pdf",
      },
      {
        auditor: "Certora",
        date: "December 2023",
        severity: "Formal verification",
        scope: "Morpho Blue invariants and core properties",
        certificate: "Morpho Blue Formal Verification",
        reportUrl: "https://morpho.org/blog/formally-verifying-morpho-blue-with-certorav/",
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
const exportData = document.querySelector("#exportData");
const importData = document.querySelector("#importData");
const certificateFile = document.querySelector("#certificateFile");
const fileStatus = document.querySelector("#fileStatus");
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

function readCertificate(file) {
  return new Promise((resolve, reject) => {
    if (!file || !file.name) {
      reject(new Error("Please upload a certificate file."));
      return;
    }

    if (file.size > MAX_CERTIFICATE_SIZE) {
      reject(new Error("Certificate is too large. Please use a file under 2 MB for this browser demo."));
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      resolve({
        certificateData: reader.result,
        certificateType: file.type || "application/octet-stream",
        fileName: file.name,
        fileSize: file.size,
      });
    });
    reader.addEventListener("error", () => reject(new Error("Could not read the certificate file.")));
    reader.readAsDataURL(file);
  });
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
        certificateData: submission.certificateData || "",
        certificateType: submission.certificateType || "",
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

function formatBytes(bytes) {
  if (!bytes) return "0 KB";
  if (bytes < 1024 * 1024) return `${Math.ceil(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function makeDownload(name, data) {
  const link = document.createElement("a");
  link.href = data;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function makeJsonDownload(name, payload) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  makeDownload(name, url);
  URL.revokeObjectURL(url);
}

function openCertificate(data) {
  const win = window.open();
  if (!win) {
    formStatus.textContent = "Popup blocked. Use the download button instead.";
    return;
  }
  win.document.write(`<iframe src="${data}" title="Audit certificate" style="border:0;width:100%;height:100vh"></iframe>`);
  win.document.close();
}

function renderCertificateActions(audit, id) {
  if (audit.reportUrl) {
    return `
      <div class="certificate-actions">
        <button class="button secondary compact" type="button" data-view-certificate="${id}">Open report</button>
      </div>
    `;
  }

  if (!audit.certificateData) {
    return '<p class="certificate-note">Demo record only. No file attached.</p>';
  }

  return `
    <div class="certificate-actions">
      <button class="button secondary compact" type="button" data-view-certificate="${id}">View certificate</button>
      <button class="button secondary compact" type="button" data-download-certificate="${id}">Download</button>
    </div>
  `;
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
            (audit, index) => `
              <article class="audit-card">
                <div class="audit-card-header">
                  <h3>${escapeHtml(audit.auditor)}</h3>
                  <span class="status-pill ${project.verified ? "" : "pending"}">${project.verified ? "Validated" : "Under review"}</span>
                </div>
                <p><strong>Date:</strong> ${escapeHtml(audit.date)}</p>
                <p><strong>Result:</strong> ${escapeHtml(audit.severity)}</p>
                <p><strong>Scope:</strong> ${escapeHtml(audit.scope)}</p>
                <p><strong>Certificate:</strong> ${escapeHtml(audit.certificate)}</p>
                ${renderCertificateActions(audit, `${encodeURIComponent(project.name)}::${index}`)}
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
            <span>Size</span>
            <strong>${formatBytes(submission.fileSize)}</strong>
            <span>Hash</span>
            <code>${escapeHtml(compactHash(submission.hash))}</code>
            <span>Open risks</span>
            <strong>${submission.critical} critical · ${submission.high} high</strong>
          </div>
          <div class="review-actions">
            <button class="button secondary compact" type="button" data-view-submission="${submission.id}" ${submission.certificateData ? "" : "disabled"}>
              View
            </button>
            <button class="button secondary compact" type="button" data-download-submission="${submission.id}" ${submission.certificateData ? "" : "disabled"}>
              Download
            </button>
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

auditDetail.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view-certificate]");
  const downloadButton = event.target.closest("[data-download-certificate]");
  const actionId = viewButton?.dataset.viewCertificate || downloadButton?.dataset.downloadCertificate;
  if (!actionId) return;

  const [projectName, index] = actionId.split("::");
  const project = projects.find((item) => item.name === decodeURIComponent(projectName));
  const audit = project?.audits[Number(index)];
  if (!audit?.certificateData && !audit?.reportUrl) return;

  if (viewButton && audit.reportUrl) window.open(audit.reportUrl, "_blank", "noopener,noreferrer");
  if (viewButton && audit.certificateData) openCertificate(audit.certificateData);
  if (downloadButton) makeDownload(audit.certificate, audit.certificateData);
});

projectSearch.addEventListener("input", renderProjects);
categoryFilter.addEventListener("change", renderProjects);

verifiedToggle.addEventListener("click", () => {
  onlyVerified = !onlyVerified;
  verifiedToggle.setAttribute("aria-pressed", String(onlyVerified));
  verifiedToggle.textContent = onlyVerified ? "Certified only" : "All statuses";
  renderProjects();
});

certificateFile.addEventListener("change", () => {
  const file = certificateFile.files[0];
  fileStatus.textContent = file ? `${file.name} · ${formatBytes(file.size)}` : "No file selected";
  fileStatus.classList.toggle("file-error", Boolean(file && file.size > MAX_CERTIFICATE_SIZE));
});

auditForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(auditForm);
  const file = data.get("certificate");
  const projectName = String(data.get("project")).trim();

  formStatus.textContent = "";

  if (projects.some((project) => project.name.toLowerCase() === projectName.toLowerCase())) {
    formStatus.textContent = "A project with this name already exists in DeFiTrust.";
    return;
  }

  let filePayload;
  try {
    filePayload = await readCertificate(file);
  } catch (error) {
    formStatus.textContent = error.message;
    return;
  }

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
    fileName: filePayload.fileName,
    fileSize: filePayload.fileSize,
    certificateData: filePayload.certificateData,
    certificateType: filePayload.certificateType,
    submittedAt: new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }),
    reviewedAt: "",
    status: "pending",
  };

  submissions = [submission, ...submissions];
  saveSubmissions();
  formStatus.textContent = `${projectName} is now in the DeFiTrust verification queue.`;
  auditForm.reset();
  fileStatus.textContent = "No file selected";
  fileStatus.classList.remove("file-error");
  refreshState();
  document.querySelector("#review").scrollIntoView({ behavior: "smooth", block: "start" });
});

reviewBoard.addEventListener("click", (event) => {
  const approveButton = event.target.closest("[data-approve]");
  const rejectButton = event.target.closest("[data-reject]");
  const viewButton = event.target.closest("[data-view-submission]");
  const downloadButton = event.target.closest("[data-download-submission]");

  if (viewButton || downloadButton) {
    const id = viewButton?.dataset.viewSubmission || downloadButton?.dataset.downloadSubmission;
    const submission = submissions.find((item) => item.id === id);
    if (!submission?.certificateData) return;

    if (viewButton) openCertificate(submission.certificateData);
    if (downloadButton) makeDownload(submission.fileName, submission.certificateData);
    return;
  }

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

exportData.addEventListener("click", () => {
  const payload = {
    app: "DeFiTrust",
    version: 1,
    exportedAt: new Date().toISOString(),
    submissions,
  };
  makeJsonDownload("defitrust-data.json", payload);
});

importData.addEventListener("change", () => {
  const file = importData.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const payload = JSON.parse(reader.result);
      const imported = Array.isArray(payload) ? payload : payload.submissions;
      if (!Array.isArray(imported)) throw new Error("Invalid DeFiTrust data file.");

      submissions = imported.filter((item) => item.id && item.project && item.auditor && item.fileName);
      saveSubmissions();
      refreshState();
      formStatus.textContent = `${submissions.length} submissions imported.`;
    } catch (error) {
      formStatus.textContent = error.message;
    } finally {
      importData.value = "";
    }
  });
  reader.readAsText(file);
});

refreshState();
