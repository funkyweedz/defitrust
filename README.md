# DeFiTrust

DeFiTrust is a static audit-certificate registry for DeFi projects. Projects can submit certificates, keep them in a local verification queue, approve submissions, and let users view or download uploaded certificates.

## Local Test

```bash
python3 -m http.server --bind 127.0.0.1 5173
```

Then open:

```text
http://127.0.0.1:5173
```

## Vercel Deployment

Import `funkyweedz/defitrust` on Vercel with these settings:

- Framework Preset: `Other`
- Root Directory: repository root
- Build Command: leave empty
- Output Directory: leave empty
- Install Command: leave empty

The app is fully static and does not require environment variables for the current demo version.

## Current Demo Limits

- Uploaded certificates are stored in the browser with `localStorage`.
- Certificate files are limited to 2 MB.
- Data can be exported/imported as JSON from the verification queue.
- A production version should use a backend database and durable file storage such as Vercel Blob, IPFS, Arweave, or S3-compatible storage.
