# False Positive Registry

This document tracks known benign patterns that triggered analysis flags and how we handled them.

## Resolved Patterns

### 1. Frontend SVG Data URIs
- **Symptom**: Flagged as "Obfuscated Base64" or "High Entropy."
- **Context**: Inline SVGs in React components (e.g., `path d="..."`).
- **Solution**: Implemented SVG heuristic check. If a long high-entropy string follows SVG path patterns, it is ignored in the Obfuscation Analyzer.

### 2. Minified Production Bundles
- **Symptom**: Flagged as "Highly minified code."
- **Context**: Files in `/dist`, `/build`, or named `.min.js`.
- **Solution**: Added automatic folder exclusion for standard build outputs. These folders are now treated as "Low Risk" and standard minification is expected.

### 3. Long React Class Names (Tailwind)
- **Symptom**: Flagged as "High entropy secret."
- **Context**: Very long, complex Tailwind class lists in JSX.
- **Solution**: Increased the entropy threshold for JavaScript files in and added path-aware confidence penalties for UI component directories.

### 4. Test API Keys
- **Symptom**: Flagged as "Potential Secrets."
- **Context**: Hardcoded mock keys in `setupTests.js` or `__tests__` folders.
- **Solution**: Enhanced suppression logic to detect non-production paths and heavily penalize finding confidence (0.2), effectively muting the risk score impact.
