# Architecture Overview

`multi-repo-analyzer` is a deterministic, static security analysis engine designed to assess repository risk without executing code.

## Core Principles

- **No Code Execution**: Analysis is strictly static to ensure the safety of the host machine.
- **Explainability**: Every finding includes a "Why it Matters" and "Recommendation."
- **Noise Reduction**: Built-in suppression logic handles common frontend and test suite noise.
- **Policy Driven**: Final decisions (Allow/Block/Warn) are decoupled from the scoring engine.

## High-Level Flow

1.  **Ingestion**: Shallow clone of the repository into a temporary workspace (Timeout: 300s).
2.  **Walking**: Recursive traversal using `ScanGuard` to enforce file limits (10,000 files max).
3.  **Classification**: Path and extension-based language detection.
4.  **Analyzer Registry**: Execution of specialized analyzers return immutable `Finding` objects.
5.  **Post-Processing**:
    - **Correlation**: Grouping related signals.
    - **Suppression**: Identifying and downgrading benign noise (e.g., SVGs, test data).
6.  **Scoring**: Calculation of the risk score based on severity, category, and squared confidence.
7.  **Policy Evaluation**: The `PolicyEngine` applies rules (Standard, Zero-Trust, etc.) to decide the final outcome.
8.  **Report Generation**: Production of the final JSON and AI-powered practical explanations.

## Safety Guards

- **Timeout**: Git clones are capped at 300s to prevent hanging on slow connections or massive repos.
- **Workspaces**: All scans happen in OS-specific temporary directories that are cleaned up on completion.
- **Resource Limits**: `ScanGuard` prevents the tool from walking deep directory structures (e.g., accidental recursive symlinks).

## Policy Layer

The `PolicyEngine` allows organizations to define different thresholds for different environments:
- **Standard**: Blocks on dangerous execution; warns on high risk scores.
- **Zero-Trust**: More aggressive blocking on suspicious signals.
- **Beginner**: Optimized for individuals with more informational alerts.
