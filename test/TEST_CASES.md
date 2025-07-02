# Test Cases – NeutralToken Protocol
Licensed under CC BY 4.0


This file outlines example test scenarios to validate protocol conformance for both issuers and verifiers.

## 🧪 Core Scenarios

### ✅ Valid Age-Verified JWT
- Issuer signs badge with correct RS256 key
- Verifier validates signature, checks `exp`, `age_verified: true`
- Result: badge accepted

### ⛔ Expired Credential
- Badge with `exp` in the past
- Verifier rejects due to expiration

### ⛔ Wrong Signature
- JWT signed with unrecognized key
- Verifier fails signature check

### ✅ Blind-Signed Credential (for jwt-blind)
- Issuer issues blind token
- User unblinds and presents valid token
- Verifier accepts

### ⛔ Replayed Badge
- Same badge reused after expiration
- Verifier rejects due to stale timestamp

## 📦 Suggested Test Fixtures
See `examples/` folder for JSON badge samples for these tests.
