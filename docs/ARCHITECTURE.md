# Architecture Overview

`multi-repo-analyzer` is a deterministic, static security analysis engine
designed to assess repository risk without executing code.

## Core Principles

- No code execution
- No machine learning
- No heuristics without explanation
- Deterministic output
- Analyzer isolation

## High-Level Flow

1. Repository ingestion
2. File classification by language and context
3. Analyzer execution (isolated)
4. Finding aggregation
5. Signal correlation
6. Benign suppression
7. Risk scoring
8. Report generation
9. CLI exit code decision

## Analyzer Isolation

Each analyzer:
- Receives a read-only `ScanContext`
- Cannot access global state
- Cannot affect other analyzers
- Is sandboxed via exception isolation

Failures are converted into low-confidence findings.

## Immutability

All findings are immutable facts.
Post-processing (correlation, suppression) produces new findings.

This prevents analyzers from influencing final risk directly.
