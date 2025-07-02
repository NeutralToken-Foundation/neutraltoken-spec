# Issuer Flow

Issuers create and sign credentials that conform to one or more supported profiles. Partners can operate their own issuance infrastructure or integrate with third-party providers that implement the NeutralToken specification. No approval from the Foundation is required to start issuing tokens.

Steps:

1. Verify user attributes (e.g., age, jurisdiction) through trusted methods.
2. Sign a short-lived credential using the selected profile.
3. Expose public keys for verifiers to validate signatures.

## Getting Started as an Issuer

Partners may self-host the issuance workflow or rely on a commercial provider. A minimal self-hosted service exposes an HTTP API for creating credentials:

```
POST /issue
{
  "subject_id": "<user identifier>",
  "profile": "jwt-basic",
  "claims": { ... }
}
```

The response returns the signed credential as defined by the selected profile. Hosted SaaS offerings may provide similar endpoints while abstracting key management and signing operations. Using such services is optional; any entity can implement the API directly to remain in full control of issuance.
