# Replay Protection
Licensed under CC BY 4.0


To prevent reuse of a credential outside the intended transaction, verifiers bind requests to a unique nonce and, optionally, the requesting domain.

## Nonce Usage

- The verifier generates a cryptographically random nonce and includes it in the handshake request.
- The holder copies the nonce into the issued credential so the verifier can confirm freshness.

## Domain Binding

Tokens may embed the verifier's domain or callback URL. Holders must check that the credential is only valid for that origin.

## Short-lived Credentials

All profiles recommend an expiration window of a few minutes. Short lifetimes reduce the value of stolen credentials and limit replay opportunities.

## Verifier-bound Assertions

When possible, credentials should specify the verifier identifier in the payload. This makes a captured token useless with a different verifier even before expiration.
