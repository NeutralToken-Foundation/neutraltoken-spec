# Trust Model
Licensed under CC BY 4.0


Issuers are responsible for signing credentials. Verifiers maintain a list of trusted issuer public keys, typically published as JWK sets or DID documents. Verification occurs offline by checking the credential signature against these keys; no live interaction with the issuer is required. Key rotation must be supported without breaking existing credentials.

- **Issuer Discovery** – Issuers advertise their public keys and profile support via JWK sets or DID documents.
- **Key Management** – Keys should use standard algorithms (e.g., RSA or EdDSA) and include expiration.
- **Revocation** – Short credential lifetimes reduce the need for complex revocation infrastructure.

## Issuer Authentication

Verifiers SHOULD verify issuer keys through published JWK URLs or DID resolution. Each credential includes an `iss` field that links to these keys.

Issuers MAY register their public keys and metadata with the Foundation-maintained registry to aid discovery. Registration is optional and simply publishes key fingerprints or DID references; issuers retain full control of their infrastructure.

Verifiers may consult this registry to bootstrap trust or rely on direct configuration of known issuer keys.

## Establishing Verifier Trust

Holders display the requesting origin during consent so users can decide whether to share a credential. Issuers may restrict credential use to registered verifiers by domain or DID.

## Security References
- [security/privacy_considerations.md](../security/privacy_considerations.md)
- [security/replay_protection.md](../security/replay_protection.md)
- [security/threat_model.md](../security/threat_model.md)
