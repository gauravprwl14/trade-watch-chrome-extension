## GitHub Copilot Chat

- Extension Version: 0.22.4 (prod)
- VS Code: vscode/1.95.3
- OS: Mac

## Network

User Settings:

```json
  "github.copilot.advanced": {
    "debug.useElectronFetcher": true,
    "debug.useNodeFetcher": false
  }
```

Connecting to https://api.github.com:

- DNS ipv4 Lookup: 20.207.73.85 (52 ms)
- DNS ipv6 Lookup: ::ffff:20.207.73.85 (1 ms)
- Electron Fetcher (configured): HTTP 200 (393 ms)
- Node Fetcher: HTTP 200 (110 ms)
- Helix Fetcher: HTTP 200 (466 ms)

Connecting to https://api.business.githubcopilot.com/_ping:

- DNS ipv4 Lookup: 140.82.112.22 (36 ms)
- DNS ipv6 Lookup: ::ffff:140.82.112.22 (1 ms)
- Electron Fetcher (configured): HTTP 200 (827 ms)
- Node Fetcher: HTTP 200 (784 ms)
- Helix Fetcher:
