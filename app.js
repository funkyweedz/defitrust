const STORAGE_KEY = "defitrust-submissions";
const MAX_CERTIFICATE_SIZE = 2 * 1024 * 1024;

const baseProjects = [
  {
    name: "Aave V3",
    sortDate: "2025-01-22",
    panelAuditor: "Sherlock · Critical: 0",
    initials: "AV",
    category: "Lending",
    network: "ETH",
    reports: 9,
    tvl: "$15.5B",
    verified: true,
    score: 74,
    scoreBreakdown: "Base 100 · 1 no-PDF link −4 · 5 original reports outdated >36-48 months −22",
    avatar: "mint",
    website: "https://aave.com",
    hash: "Official audit registry",
    summary:
      "Trust score 74/100 — original V3 audits (Jan 2022) are 48+ months old; 3 PDF links had broken paths now corrected. Protocol actively re-audited in 2024-2025 by Sherlock, Certora and Pashov. Score: base 100 − 1 no-PDF (−4) − 5 reports outdated >36m (−22).",
    audits: [
      {
        auditor: "Aave Labs",
        date: "May 2026",
        severity: "Official security page — no direct PDF",
        scope: "All Aave public audit reports",
        certificate: "Aave Security Audit Registry",
        reportUrl: "https://aave.com/security",
        flags: ["no-pdf"],
      },
      {
        auditor: "Sherlock",
        date: "January 22, 2025",
        severity: "Aave V3.3 security contest — Critical: 0",
        scope: "Aave V3.3 protocol contracts",
        certificate: "2025-01-22_Sherlock_Aave-v3.3.0.pdf",
        reportUrl: "https://github.com/aave-dao/aave-v3-origin/blob/main/audits/2025-01-22_Sherlock_Aave-v3.3.0.pdf",
      },
      {
        auditor: "Certora",
        date: "November 7, 2024",
        severity: "Aave V3.3 formal verification",
        scope: "Aave V3.3 core contracts",
        certificate: "2024-11-07_Certora_Aave-v3.3.0.pdf",
        reportUrl: "https://github.com/aave-dao/aave-v3-origin/blob/main/audits/2024-11-07_Certora_Aave-v3.3.0.pdf",
      },
      {
        auditor: "Pashov Audit Group",
        date: "September 15, 2024",
        severity: "Aave V3.2 security review",
        scope: "Aave V3.2 contracts",
        certificate: "2024-09-15_Pashov_Aave-v3.2.pdf",
        reportUrl: "https://github.com/aave-dao/aave-v3-origin/blob/main/audits/2024-09-15_Pashov_Aave-v3.2.pdf",
      },
      {
        auditor: "OpenZeppelin",
        date: "October 2021",
        severity: "Aave V3 round 1 security audit — outdated 48+ months",
        scope: "Aave V3 core protocol contracts",
        certificate: "2021-11-01_OpenZeppelin_AaveV3.pdf",
        reportUrl: "https://github.com/aave-dao/aave-v3-origin/blob/main/audits/2021-11-01_OpenZeppelin_AaveV3.pdf",
        flags: ["outdated"],
      },
      {
        auditor: "Trail of Bits",
        date: "January 7, 2022",
        severity: "Aave V3 security assessment — outdated 48+ months",
        scope: "Aave V3 core protocol contracts",
        certificate: "2022-01-07_TrailOfBits_AaveV3.pdf",
        reportUrl: "https://github.com/aave-dao/aave-v3-origin/blob/main/audits/2022-01-07_TrailOfBits_AaveV3.pdf",
        flags: ["outdated"],
      },
      {
        auditor: "ABDK",
        date: "January 27, 2022",
        severity: "Aave V3 smart contract audit — outdated 48+ months",
        scope: "Aave V3 protocol math and smart contracts",
        certificate: "2022-01-27_ABDK_AaveV3.pdf",
        reportUrl: "https://github.com/aave-dao/aave-v3-origin/blob/main/audits/2022-01-27_ABDK_AaveV3.pdf",
        flags: ["outdated"],
      },
      {
        auditor: "Sigma Prime",
        date: "January 27, 2022",
        severity: "Aave V3 security assessment — outdated 48+ months",
        scope: "Aave V3 protocol contracts",
        certificate: "2022-01-27_SigmaPrime_AaveV3.pdf",
        reportUrl: "https://github.com/aave-dao/aave-v3-origin/blob/main/audits/2022-01-27_SigmaPrime_AaveV3.pdf",
        flags: ["outdated"],
      },
      {
        auditor: "Certora",
        date: "January 2022",
        severity: "Formal verification — outdated 48+ months",
        scope: "Aave Protocol V3 formal verification",
        certificate: "Aave_V3_Formal_Verification_Report_Jan2022.pdf",
        reportUrl: "https://github.com/aave/aave-v3-core/blob/master/certora/Aave_V3_Formal_Verification_Report_Jan2022.pdf",
        flags: ["outdated"],
      },
    ],
  },
  {
    name: "Uniswap V4",
    sortDate: "2024-08-30",
    panelAuditor: "OpenZeppelin · Critical: 1 resolved",
    initials: "UV",
    category: "DEX",
    network: "ETH/ARB",
    reports: 8,
    tvl: "$3.6B",
    verified: true,
    score: 96,
    scoreBreakdown: "Base 100 · 1 no-PDF link (official site) −4 · 7 reports all accessible, all from 2024",
    avatar: "blue",
    website: "https://uniswap.org",
    hash: "Official v4 audit folders",
    summary:
      "Trust score 96/100 — 7 of 8 audit PDFs directly accessible on GitHub, all from 2024. Minor deduction for the official site link (no direct PDF). Score: base 100 − 1 no-PDF (−4).",
    audits: [
      {
        auditor: "Uniswap Labs",
        date: "January 2025",
        severity: "Official v4 reports index — no direct PDF",
        scope: "Core and Periphery audit folders",
        certificate: "Uniswap v4 Audit Reports",
        reportUrl: "https://v4.uniswap.org/",
        flags: ["no-pdf"],
      },
      {
        auditor: "OpenZeppelin",
        date: "August 27, 2024",
        severity: "Core audit · 1 critical resolved · 0 high",
        scope: "Uniswap v4 core contracts",
        certificate: "OpenZeppelin_audit_core.pdf",
        reportUrl: "https://github.com/Uniswap/v4-core/blob/main/docs/security/audits/OpenZeppelin_audit_core.pdf",
      },
      {
        auditor: "Trail of Bits",
        date: "2024",
        severity: "Core security review · Critical: 0",
        scope: "Uniswap v4 core contracts",
        certificate: "TrailOfBits_audit_core.pdf",
        reportUrl: "https://github.com/Uniswap/v4-core/blob/main/docs/security/audits/TrailOfBits_audit_core.pdf",
      },
      {
        auditor: "Spearbit",
        date: "2024",
        severity: "Core security review",
        scope: "Uniswap v4 core contracts",
        certificate: "DRAFT_Spearbit_audit_core.pdf",
        reportUrl: "https://github.com/Uniswap/v4-core/blob/main/docs/security/audits/DRAFT_Spearbit_audit_core.pdf",
      },
      {
        auditor: "Certora",
        date: "2024",
        severity: "Core audit and formal verification",
        scope: "Uniswap v4 core contracts",
        certificate: "DRAFT_Certora_audit_core.pdf",
        reportUrl: "https://github.com/Uniswap/v4-core/blob/main/docs/security/audits/DRAFT_Certora_audit_core.pdf",
      },
      {
        auditor: "ABDK",
        date: "2024",
        severity: "Core audit",
        scope: "Uniswap v4 core contracts",
        certificate: "DRAFT_ABDK_audit_core.pdf",
        reportUrl: "https://github.com/Uniswap/v4-core/blob/main/docs/security/audits/DRAFT_ABDK_audit_core.pdf",
      },
      {
        auditor: "OpenZeppelin",
        date: "August 30, 2024",
        severity: "Periphery audit · 1 critical and 1 high resolved",
        scope: "Uniswap v4 Periphery and Universal Router",
        certificate: "OpenZeppelin_audit_periphery_universal_router.pdf",
        reportUrl: "https://github.com/Uniswap/v4-periphery/blob/main/audits/OpenZeppelin_audit_periphery_universal_router.pdf",
      },
      {
        auditor: "Spearbit",
        date: "2024",
        severity: "Periphery security review",
        scope: "Uniswap v4 Periphery contracts",
        certificate: "DRAFT_Spearbit_audit_periphery.pdf",
        reportUrl: "https://github.com/Uniswap/v4-periphery/blob/main/audits/DRAFT_Spearbit_audit_periphery.pdf",
      },
    ],
  },
  {
    name: "Curve Finance",
    sortDate: "2025-01-01",
    panelAuditor: "ChainSecurity · Fast Bridge",
    initials: "CF",
    category: "DEX",
    network: "Multi",
    reports: 5,
    tvl: "$1.7B",
    verified: true,
    score: 36,
    scoreBreakdown: "Base 100 · 3 broken links −45 · 2 no-PDF links −10 · 2 reports outdated >24 months −9",
    avatar: "rose",
    website: "https://curve.fi",
    hash: "Official Curve audit assets",
    summary:
      "Trust score 36/100 — 3 of 5 audit PDFs return 404, 2 reports have no direct PDF, and the crvUSD audits (June 2023) are over 24 months old. Score computed: base 100 − 3 broken links (−45) − 2 no-PDF pages (−10) − 2 outdated reports >24 months (−9).",
    audits: [
      {
        auditor: "Curve Finance",
        date: "2025",
        severity: "Official documentation index — no direct PDF",
        scope: "Curve technical documentation and audit assets",
        certificate: "Curve Technical Docs",
        reportUrl: "https://dev.curve.finance/",
        flags: ["no-pdf"],
      },
      {
        auditor: "MixBytes",
        date: "November 1, 2023",
        severity: "StableSwap NG security audit — report link broken (404)",
        scope: "Curve StableSwap NG contracts",
        certificate: "Curve StableSwapNG Security Audit Report",
        reportUrl: "https://docs.curve.finance/assets/pdf/audits/Curve%20Finance%20StableSwapNG%20Security%20Audit%20Report.pdf",
        flags: ["broken"],
      },
      {
        auditor: "ChainSecurity",
        date: "June 2023",
        severity: "crvUSD stablecoin assessment — report link broken (404) · outdated 24 months",
        scope: "Curve Stablecoin smart contracts",
        certificate: "ChainSecurity Curve Stablecoin Audit",
        reportUrl: "https://docs.curve.finance/assets/pdf/audits/ChainSecurity_Curve_Curve_Stablecoin_audit-1.pdf",
        flags: ["broken", "outdated"],
      },
      {
        auditor: "MixBytes",
        date: "June 5, 2023",
        severity: "crvUSD security audit — report link broken (404) · outdated 24 months",
        scope: "Curve Stablecoin smart contracts",
        certificate: "Curve crvUSD Security Audit Report",
        reportUrl: "https://docs.curve.finance/assets/pdf/audits/Curve%20Stablecoin%20%28crvUSD%29%20Security%20Audit%20Report.pdf",
        flags: ["broken", "outdated"],
      },
      {
        auditor: "ChainSecurity",
        date: "2025",
        severity: "Fast Bridge security audit — no direct PDF, webpage only",
        scope: "Curve Fast Bridge contracts",
        certificate: "ChainSecurity Curve Fast Bridge Audit",
        reportUrl: "https://www.chainsecurity.com/security-audit/curve-fast-bridge",
        flags: ["no-pdf"],
      },
    ],
  },
  {
    name: "LayerZero",
    sortDate: "2023-12-14",
    panelAuditor: "OtterSec · Critical: 0",
    initials: "LZ",
    category: "Bridge",
    network: "Multi-chain",
    reports: 6,
    tvl: "N/A",
    verified: true,
    score: 84,
    scoreBreakdown: "Base 100 · 1 no-PDF GitHub index −4 · 1 V1 report outdated >48 months −9 · 1 DVN report aged 21 months −3",
    avatar: "blue",
    website: "https://layerzero.network",
    hash: "Official LayerZero audit repository",
    summary:
      "Trust score 84/100 — all 5 PDFs accessible on GitHub. V2 reports from Dec 2023 are 17 months old. V1 Zellic report from June 2022 is outdated (>48 months). Score: base 100 − 1 no-PDF index (−4) − 1 V1 outdated >48m (−9) − 1 DVN aged 21m (−3).",
    audits: [
      {
        auditor: "LayerZero Labs",
        date: "2024",
        severity: "Official GitHub audit repository — no direct PDF",
        scope: "All LayerZero public audit reports",
        certificate: "LayerZero Audits Repository",
        reportUrl: "https://github.com/LayerZero-Labs/Audits",
        flags: ["no-pdf"],
      },
      {
        auditor: "Zellic",
        date: "December 13, 2023",
        severity: "Critical: 0 · High: 0",
        scope: "Endpoint V2 - EVM core contracts",
        certificate: "EndpointV2-Zellic-13DEC2023.pdf",
        reportUrl: "https://github.com/LayerZero-Labs/Audits/blob/main/audits/Endpoint%20V2%20-%20EVM/EndpointV2/EndpointV2-Zellic-13DEC2023.pdf",
      },
      {
        auditor: "Certora",
        date: "December 2023",
        severity: "Formal verification",
        scope: "Endpoint V2 - EVM core contracts",
        certificate: "EndpointV2-Certora-DEC2023.pdf",
        reportUrl: "https://github.com/LayerZero-Labs/Audits/blob/main/audits/Endpoint%20V2%20-%20EVM/EndpointV2/EndpointV2-Certora-DEDC2023.pdf",
      },
      {
        auditor: "OtterSec",
        date: "December 14, 2023",
        severity: "Critical: 0 · High: 0",
        scope: "Endpoint V2 - EVM core contracts",
        certificate: "EndpointV2-Ottersec-14DEC2023.pdf",
        reportUrl: "https://github.com/LayerZero-Labs/Audits/blob/main/audits/Endpoint%20V2%20-%20EVM/EndpointV2/EndpointV2-Ottersec%2014DEC2023.pdf",
      },
      {
        auditor: "Zellic",
        date: "August 25, 2023",
        severity: "Critical: 0 · High: 0 — DVN report aged 21 months",
        scope: "Decentralized Verifier Network (DVN)",
        certificate: "DVN-Zellic-25AUG2023.pdf",
        reportUrl: "https://github.com/LayerZero-Labs/Audits/blob/main/audits/DVN/DVN-Zellic-25AUG2023.pdf",
        flags: ["outdated"],
      },
      {
        auditor: "Zellic",
        date: "June 3, 2022",
        severity: "Critical: 0 · High: 0 — V1 report outdated >48 months",
        scope: "Endpoint V1 - EVM core contracts",
        certificate: "EndpointV1-Zellic-03JUN2022.pdf",
        reportUrl: "https://github.com/LayerZero-Labs/Audits/blob/main/audits/Endpoint%20V1%20-%20EVM/EndpointV1/EndpointV1-Zellic-03JUN2022.pdf",
        flags: ["outdated"],
      },
    ],
  },
  {
    name: "Ethena",
    sortDate: "2024-10-31",
    panelAuditor: "Cyfrin · Critical: 0",
    initials: "EN",
    category: "Stablecoin",
    network: "ETH",
    reports: 9,
    tvl: "$4.6B",
    verified: true,
    score: 79,
    scoreBreakdown: "Base 100 · 3 no-PDF links −12 · 4 reports aged 18-25 months −9",
    avatar: "mint",
    website: "https://ethena.fi",
    hash: "Official Ethena audit registry",
    summary:
      "Trust score 79/100 — all PDFs accessible; 3 entries link to the same docs index (no direct PDF). V1 audits from mid-2023 are 22-25 months old. Score: base 100 − 3 no-PDF (−12) − 4 reports aged >18 months (−9).",
    audits: [
      {
        auditor: "Ethena Labs",
        date: "2024",
        severity: "Official audit registry — no direct PDF",
        scope: "All Ethena public audit reports",
        certificate: "Ethena Audits Registry",
        reportUrl: "https://docs.ethena.fi/resources/audits",
        flags: ["no-pdf"],
      },
      {
        auditor: "Zellic",
        date: "July 5, 2023",
        severity: "Critical: 0 · High: 0 — report aged 22 months",
        scope: "Ethena v1 contracts",
        certificate: "Ethena x Zellic Audit Report",
        reportUrl: "https://596495599-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsBsPyff5ft3inFy9jyjt%2Fuploads%2FGZbd1DrrG3YmnTlJnTHa%2FEthena%20-%20Zellic%20Audit%20Report%20Draft.pdf?alt=media&token=2e65890c-6724-49b7-97f4-6d2223ba086e",
        flags: ["outdated"],
      },
      {
        auditor: "Quantstamp",
        date: "October 18, 2023",
        severity: "Critical: 0 · High: 0 — report aged 19 months",
        scope: "Ethena v1 contracts",
        certificate: "Ethena x Quantstamp Audit Report",
        reportUrl: "https://596495599-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsBsPyff5ft3inFy9jyjt%2Fuploads%2F17Ucep7IYMBZ6mAHGLyw%2FEthena%20Final%20Report%20%281%29.pdf?alt=media&token=51a6a101-516e-4984-8360-14daf860a961",
        flags: ["outdated"],
      },
      {
        auditor: "Spearbit",
        date: "October 18, 2023",
        severity: "Critical: 0 · High: 0 — report aged 19 months",
        scope: "Ethena v1 contracts",
        certificate: "Spearbit x Ethena Audit Report",
        reportUrl: "https://596495599-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsBsPyff5ft3inFy9jyjt%2Fuploads%2FsX7xO54StGnS6RlZM0Qa%2FSpearbit%20_Ethena_v2_Final_report-ethena__1_.pdf?alt=media&token=d0968065-7e4d-4661-b53f-a1d5181c30bd",
        flags: ["outdated"],
      },
      {
        auditor: "Pashov Audit Group",
        date: "May 23, 2024",
        severity: "Independent v2 audit · Critical: 0",
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
        severity: "Public audit contest · Critical: 0 · High: 0 — aged 18 months",
        scope: "Ethena Labs public contest",
        certificate: "Ethena Labs Code4rena Audit",
        reportUrl: "https://code4rena.com/reports/2023-10-ethena",
        flags: ["outdated"],
      },
      {
        auditor: "Chaos Labs",
        date: "2024",
        severity: "Economic and financial risk audit — no direct PDF",
        scope: "Ethena system design and market risk",
        certificate: "Chaos Labs Ethena Risk Analysis",
        reportUrl: "https://docs.ethena.fi/resources/audits",
        flags: ["no-pdf"],
      },
      {
        auditor: "Cyfrin",
        date: "October 31, 2024",
        severity: "Critical: 0 · High: 0 — no direct PDF",
        scope: "USDTB contracts",
        certificate: "Ethena x Cyfrin USDTB Audit",
        reportUrl: "https://docs.ethena.fi/resources/audits",
        flags: ["no-pdf"],
      },
    ],
  },
  {
    name: "Morpho Blue",
    sortDate: "2024-01-05",
    panelAuditor: "Cantina · Critical: 0",
    initials: "MB",
    category: "Lending",
    network: "ETH/Base",
    reports: 5,
    tvl: "$7.6B",
    verified: true,
    score: 88,
    scoreBreakdown: "Base 100 · 2 no-PDF links −8 · 3 reports aged 18-22 months −4",
    avatar: "blue",
    website: "https://morpho.org",
    hash: "Official Morpho audit folder",
    summary:
      "Trust score 88/100 — 3 of 5 PDFs directly accessible on GitHub. GitHub folder and Certora blog post lack direct PDFs. Oct–Nov 2023 reports are 18-22 months old. Score: base 100 − 2 no-PDF (−8) − 3 reports aged 18-22 months (−4).",
    audits: [
      {
        auditor: "Morpho Labs",
        date: "2024",
        severity: "Official GitHub audits folder — no direct PDF",
        scope: "Morpho Blue public audit reports",
        certificate: "Morpho Blue Audits Registry",
        reportUrl: "https://github.com/morpho-org/morpho-blue/tree/main/audits",
        flags: ["no-pdf"],
      },
      {
        auditor: "OpenZeppelin",
        date: "October 13, 2023",
        severity: "Morpho Blue and Speed Jump IRM audit — aged 19 months",
        scope: "Morpho Blue core and interest rate model",
        certificate: "2023-10-13-morpho-blue-and-speed-jump-irm-open-zeppelin.pdf",
        reportUrl: "https://github.com/morpho-org/morpho-blue/blob/main/audits/2023-10-13-morpho-blue-and-speed-jump-irm-open-zeppelin.pdf",
        flags: ["outdated"],
      },
      {
        auditor: "Cantina",
        date: "November 13, 2023",
        severity: "Managed security review — aged 18 months",
        scope: "Morpho Blue protocol contracts",
        certificate: "2023-11-13-morpho-blue-cantina-managed-review.pdf",
        reportUrl: "https://github.com/morpho-org/morpho-blue/blob/main/audits/2023-11-13-morpho-blue-cantina-managed-review.pdf",
        flags: ["outdated"],
      },
      {
        auditor: "Cantina",
        date: "January 5, 2024",
        severity: "Security competition report — aged 16 months",
        scope: "Morpho Blue protocol contracts",
        certificate: "2024-01-05-morpho-blue-cantina-competition.pdf",
        reportUrl: "https://github.com/morpho-org/morpho-blue/blob/main/audits/2024-01-05-morpho-blue-cantina-competition.pdf",
        flags: ["outdated"],
      },
      {
        auditor: "Certora",
        date: "December 2023",
        severity: "Formal verification — blog post, no direct PDF",
        scope: "Morpho Blue invariants and core properties",
        certificate: "Morpho Blue Formal Verification",
        reportUrl: "https://morpho.org/blog/formally-verifying-morpho-blue-with-certorav/",
        flags: ["no-pdf"],
      },
    ],
  },
  {
    name: "Jupiter Exchange",
    sortDate: "2025-11-20",
    panelAuditor: "OtterSec · Critical: 0",
    initials: "JX",
    category: "DEX",
    network: "Solana",
    reports: 9,
    tvl: "$1.9B",
    verified: true,
    score: 92,
    scoreBreakdown: "Base 100 · 1 no-PDF docs link −4 · 2 undated reports −4 · 7 reports all accessible, 2024-2025",
    avatar: "blue",
    website: "https://jup.ag",
    hash: "Official Jupiter audit documentation",
    summary:
      "Trust score 92/100 — 9 key audit PDFs all accessible on GitHub covering Swap v6, Perpetuals, and Lend. Most reports from 2024-2025, actively maintained. Score: base 100 − 1 no-PDF (−4) − 2 undated reports (−4).",
    audits: [
      {
        auditor: "Jupiter Labs",
        date: "2025",
        severity: "Official audit documentation — no direct PDF",
        scope: "All Jupiter public audit reports",
        certificate: "Jupiter Audits Docs",
        reportUrl: "https://developers.jup.ag/docs/resources/audits",
        flags: ["no-pdf"],
      },
      {
        auditor: "Offside Labs",
        date: "October 2025",
        severity: "Swap v6 security audit · Critical: 0",
        scope: "Jupiter Swap v6",
        certificate: "swap-v6-offside-october-2025.pdf",
        reportUrl: "https://github.com/jup-ag/docs/blob/main/static/files/audits/swap-v6-offside-october-2025.pdf",
      },
      {
        auditor: "Offside Labs",
        date: "April 2024",
        severity: "Swap v6 security audit",
        scope: "Jupiter Swap v6",
        certificate: "swap-v6-offside-april-2024.pdf",
        reportUrl: "https://github.com/jup-ag/docs/blob/main/static/files/audits/swap-v6-offside-april-2024.pdf",
      },
      {
        auditor: "Sec3",
        date: "Undated",
        severity: "Swap v3 security audit — no date provided",
        scope: "Jupiter Swap v3",
        certificate: "swap-v3-sec3.pdf",
        reportUrl: "https://github.com/jup-ag/docs/blob/main/static/files/audits/swap-v3-sec3.pdf",
        flags: ["outdated"],
      },
      {
        auditor: "OtterSec",
        date: "Undated",
        severity: "Perpetuals security audit — no date provided",
        scope: "Jupiter Perpetuals",
        certificate: "perpetual-ottersec.pdf",
        reportUrl: "https://github.com/jup-ag/docs/blob/main/static/files/audits/perpetual-ottersec.pdf",
        flags: ["outdated"],
      },
      {
        auditor: "Offside Labs",
        date: "November 12–20, 2025",
        severity: "Lend security audit report 2 · Critical: 0",
        scope: "Jupiter Lend",
        certificate: "lend-ottersec-2.pdf",
        reportUrl: "https://github.com/jup-ag/docs/blob/main/static/files/audits/lend-ottersec-2.pdf",
      },
      {
        auditor: "OtterSec",
        date: "August 20 – November 1, 2025",
        severity: "Lend main security audit · Critical: 0",
        scope: "Jupiter Lend",
        certificate: "lend-ottersec.pdf",
        reportUrl: "https://github.com/jup-ag/docs/blob/main/static/files/audits/lend-ottersec.pdf",
      },
      {
        auditor: "Offside Labs",
        date: "October 13–19, 2025",
        severity: "Lend Oracle & Flashloan audit",
        scope: "Jupiter Lend — Oracle and Flashloan modules",
        certificate: "lend-oracle-and-flashloan-offside.pdf",
        reportUrl: "https://github.com/jup-ag/docs/blob/main/static/files/audits/lend-oracle-and-flashloan-offside.pdf",
      },
      {
        auditor: "MixBytes",
        date: "July 28 – October 14, 2025",
        severity: "Lend Vault security audit",
        scope: "Jupiter Lend Vault",
        certificate: "lend-vault-mixbytes.pdf",
        reportUrl: "https://github.com/jup-ag/docs/blob/main/static/files/audits/lend-vault-mixbytes.pdf",
      },
    ],
  },
  {
    name: "Meteora",
    sortDate: "2025-06-30",
    panelAuditor: "Offside Labs · DAMM v2",
    initials: "MT",
    category: "DEX",
    network: "Solana",
    reports: 10,
    tvl: "$340M",
    verified: true,
    score: 82,
    scoreBreakdown: "Base 100 · 1 no-PDF GitHub index −4 · 2 Halborn reports from Jul 2022 outdated >36 months −14",
    avatar: "amber",
    website: "https://meteora.ag",
    hash: "Official Meteora audit repository",
    summary:
      "Trust score 82/100 — 10 key PDFs all accessible across DAMM v1/v2, DLMM, Dynamic Vault, and Alpha Vault. Most reports from 2024-2025. Two Halborn reports from July 2022 are 46 months old. Score: base 100 − 1 no-PDF (−4) − 2 outdated >36m (−14).",
    audits: [
      {
        auditor: "Meteora",
        date: "2025",
        severity: "Official GitHub audit repository — no direct PDF",
        scope: "All Meteora public audit reports",
        certificate: "Meteora Audits Repository",
        reportUrl: "https://github.com/MeteoraAg/audits",
        flags: ["no-pdf"],
      },
      {
        auditor: "OtterSec",
        date: "April 2025",
        severity: "DAMM v2 security audit · Critical: 0",
        scope: "Meteora DAMM v2",
        certificate: "ottersec-damm-v2-audit-apr-2025.pdf",
        reportUrl: "https://github.com/MeteoraAg/audits/blob/main/damm-v2/ottersec-damm-v2-audit-apr-2025.pdf",
      },
      {
        auditor: "Offside Labs",
        date: "June 2025",
        severity: "DAMM v2 security audit",
        scope: "Meteora DAMM v2",
        certificate: "offside-labs-damm-v2-audit-jun-2025.pdf",
        reportUrl: "https://github.com/MeteoraAg/audits/blob/main/damm-v2/offside-labs-damm-v2-audit-jun-2025.pdf",
      },
      {
        auditor: "Zenith",
        date: "June 2025",
        severity: "DAMM v2 security audit",
        scope: "Meteora DAMM v2",
        certificate: "zenith-damm-v2-audit-june-2025-1.pdf",
        reportUrl: "https://github.com/MeteoraAg/audits/blob/main/damm-v2/zenith-damm-v2-audit-june-2025-1.pdf",
      },
      {
        auditor: "OtterSec",
        date: "February 2024",
        severity: "DLMM security audit · Critical: 0",
        scope: "Meteora DLMM",
        certificate: "ottersec-dlmm-audit-feb-2024.pdf",
        reportUrl: "https://github.com/MeteoraAg/audits/blob/main/dlmm/ottersec-dlmm-audit-feb-2024.pdf",
      },
      {
        auditor: "Offside Labs",
        date: "January 2024",
        severity: "DLMM security audit",
        scope: "Meteora DLMM",
        certificate: "offside-labs-dlmm-audit-jan-2024.pdf",
        reportUrl: "https://github.com/MeteoraAg/audits/blob/main/dlmm/offside-labs-dlmm-audit-jan-2024.pdf",
      },
      {
        auditor: "Sec3",
        date: "February 2024",
        severity: "DLMM security audit",
        scope: "Meteora DLMM",
        certificate: "sec3-dlmm-audit-feb-2024.pdf",
        reportUrl: "https://github.com/MeteoraAg/audits/blob/main/dlmm/sec3-dlmm-audit-feb-2024.pdf",
      },
      {
        auditor: "Sherlock",
        date: "2024",
        severity: "Dynamic Vault security audit · Critical: 0",
        scope: "Meteora Dynamic Vault",
        certificate: "sherlock-dynamic-vault-audit-0.9.4.pdf",
        reportUrl: "https://github.com/MeteoraAg/audits/blob/main/dynamic-vault/sherlock-dynamic-vault-audit-0.9.4.pdf",
      },
      {
        auditor: "Offside Labs",
        date: "May 2024",
        severity: "Alpha Vault security audit",
        scope: "Meteora Alpha Vault",
        certificate: "offside-labs-alpha-vault-may-2024.pdf",
        reportUrl: "https://github.com/MeteoraAg/audits/blob/main/alpha-vault/offside-labs-alpha-vault-may-2024.pdf",
      },
      {
        auditor: "Halborn",
        date: "July 2022",
        severity: "Dynamic Vault security audit — outdated 46 months",
        scope: "Meteora Dynamic Vault",
        certificate: "halborn-dynamic-vault-audit-jul-2022.pdf",
        reportUrl: "https://github.com/MeteoraAg/audits/blob/main/dynamic-vault/halborn-dynamic-vault-audit-jul-2022.pdf",
        flags: ["outdated"],
      },
      {
        auditor: "Halborn",
        date: "July 2022",
        severity: "DAMM v1 security audit — outdated 46 months",
        scope: "Meteora DAMM v1",
        certificate: "halborn-damm-v1-jul-2022-audit.pdf",
        reportUrl: "https://github.com/MeteoraAg/audits/blob/main/damm-v1/halborn-damm-v1-jul-2022-audit.pdf",
        flags: ["outdated"],
      },
    ],
  },
  {
    name: "Phoenix Trade",
    sortDate: "2024-01-01",
    panelAuditor: "OtterSec · Critical: 0",
    initials: "PT",
    category: "DEX",
    network: "Solana",
    reports: 1,
    tvl: "$1.7M",
    verified: true,
    score: 88,
    scoreBreakdown: "Base 100 · 1 audit report via temporary Notion link −12 · host on IPFS or GitHub for a higher score",
    avatar: "rose",
    website: "https://ellipsis.trade",
    hash: "ellipsis_phoenix_audit_final.pdf — OtterSec",
    summary:
      "Trust score 88/100 — 1 audit by OtterSec covering the Phoenix on-chain CLOB. No critical issues found. The certificate is currently hosted via a temporary Notion link — uploading to IPFS or GitHub would raise the score to 100.",
    audits: [
      {
        auditor: "OtterSec",
        date: "2024",
        severity: "Phoenix CLOB security audit · Critical: 0",
        scope: "Phoenix on-chain central limit order book (Solana)",
        certificate: "ellipsis_phoenix_audit_final.pdf",
        reportUrl: "https://file.notion.so/f/f/97ab6450-64d1-4350-a5cf-a0c0c607f5c4/d490abb1-acff-4638-973f-203664bccf1c/ellipsis_phoenix_audit_final.pdf?table=block&id=9888c291-939f-4def-bbb3-77a165bd9230&spaceId=97ab6450-64d1-4350-a5cf-a0c0c607f5c4&expirationTimestamp=1778627597131&signature=2Ftvamv4CmJ07ujrBmpC5UY8bkdzpc-uLHkfBhN65-s&downloadName=ellipsis_phoenix_audit_final.pdf",
        flags: ["no-pdf"],
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

function renderLatestAttestation() {
  const latest = baseProjects
    .filter((p) => p.sortDate)
    .reduce((a, b) => (a.sortDate > b.sortDate ? a : b));

  document.querySelector("#latestProject").textContent = latest.name;
  document.querySelector("#latestAuditor").textContent = latest.panelAuditor;
  document.querySelector("#latestHash").textContent = compactHash(latest.hash);
  document.querySelector("#latestDate").textContent = new Date(latest.sortDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function refreshState() {
  projects = buildProjectList();
  renderStats();
  renderProjects();
  renderLatestAttestation();
  renderReviewBoard();

  const updatedSelection = projects.find((project) => project.name === selectedProject?.name) || projects[1];
  renderAuditDetail(updatedSelection);
}

const PROJECT_TEAM_NAMES = new Set([
  "Aave Labs", "Uniswap Labs", "Curve Finance", "LayerZero Labs",
  "Ethena Labs", "Morpho Labs", "Jupiter Labs", "Meteora", "Phoenix Trade",
]);

function renderStats() {
  const certified = projects.filter((project) => project.verified).length;
  const auditors = new Set(
    projects
      .flatMap((project) => project.audits.map((audit) => audit.auditor))
      .filter((name) => !PROJECT_TEAM_NAMES.has(name))
  ).size;

  certifiedCount.textContent = String(certified);
  auditorCount.textContent = String(auditors);
  securedTvl.textContent = "$35.2B";
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
              <span style="width: ${project.score}%; background: ${scoreColor(project.score)}"></span>
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

function scoreColor(score) {
  if (score >= 80) return "var(--mint)";
  if (score >= 55) return "var(--amber)";
  return "var(--rose)";
}

function renderAuditFlags(flags) {
  if (!flags || !flags.length) return "";
  const labels = { broken: "Broken link", outdated: "Outdated", "no-pdf": "No direct PDF" };
  return `<div class="audit-flags">${flags.map((f) => `<span class="audit-flag flag-${f}">${labels[f] ?? f}</span>`).join("")}</div>`;
}

function renderAuditDetail(project) {
  selectedProject = project;
  const color = scoreColor(project.score);
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
          <span>Trust score</span>
          <strong style="color:${color}">${project.score}/100</strong>
          ${project.scoreBreakdown ? `<span>Score breakdown</span><span style="color:var(--muted);font-size:0.88rem">${escapeHtml(project.scoreBreakdown)}</span>` : ""}
        </div>
      </div>
      <div class="audit-list">
        ${project.audits
          .map(
            (audit, index) => `
              <article class="audit-card ${audit.flags && audit.flags.includes("broken") ? "audit-card--broken" : ""}">
                <div class="audit-card-header">
                  <h3>${escapeHtml(audit.auditor)}</h3>
                  <span class="status-pill ${project.verified ? "" : "pending"}">${project.verified ? "Validated" : "Under review"}</span>
                </div>
                ${renderAuditFlags(audit.flags)}
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
