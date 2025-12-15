# False Positive Register

## STATIC-OS_SYSTEM (Regex)
Status: NEEDS TUNING
Reason:
- Fires in test utilities
- Fires in CLI tools
Proposed Action:
- Lower confidence when in /tests/
- Boost confidence only when correlated

---

## OBFUSCATION-BASE64
Status: ACCEPTABLE
Reason:
- Common malware technique
- Weak signal alone, strong when correlated

---

## SECRETS-HIGH-ENTROPY
Status: NEEDS TUNING
Reason:
- Example keys trigger
- Needs allowlist for test data
