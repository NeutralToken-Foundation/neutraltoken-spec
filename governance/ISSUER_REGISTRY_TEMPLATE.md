# Issuer Registry Template
Licensed under CC BY 4.0


This file outlines the structure for listing trusted NeutralToken credential issuers in a public or consortium-managed registry.

## 📌 Purpose

To allow wallets and verifiers to discover and validate issuer public keys without compromising user privacy.

## 📄 Issuer Entry Format (JSON)

```json
{
  "id": "https://issuer.example.com",
  "name": "Example Telecom",
  "profiles": ["jwt-basic@1.0", "jwt-blind@1.0"],
  "public_keys": "https://issuer.example.com/.well-known/jwks.json",
  "jurisdictions": ["US", "CA"],
  "trust_level": "self-declared",
  "contact": "security@example.com",
  "registered_at": "2025-06-01"
}
```

## ✅ Guidelines for Listing

- Issuer must publish and maintain their JWKs or DID endpoint
- Issuer must conform to a supported credential profile
- Optionally, issuers may undergo certification from the Foundation

## 🔐 Privacy Note

No verifier should make live calls to the issuer during credential verification. This registry is used solely to bootstrap trust via public key distribution.
