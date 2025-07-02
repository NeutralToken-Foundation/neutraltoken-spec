# FAQ – NeutralToken Protocol
Licensed under CC BY 4.0


### ❓ Who maintains the NeutralToken protocol?

The NeutralToken Foundation maintains the open specification. Commercial providers may offer infrastructure, SDKs, or credential issuance services based on the spec.

---

### ❓ Can anyone become an issuer?

Yes. Any organization that follows the spec and publishes a trusted key (e.g. via JWK or DID) can issue NeutralToken credentials. Self-hosting or using a third-party issuer is allowed.

---

### ❓ Does the issuer know where a badge is being used?

No. Verifiers validate credentials offline using issuer public keys. This ensures the issuer never sees or tracks credential presentation.

---

### ❓ Is this protocol compliant with privacy laws?

NeutralToken is designed to minimize data collection and enable user consent, aligning well with GDPR and similar frameworks. Implementers are still responsible for local legal compliance.

---

### ❓ Can the badge be revoked?

By default, badges are short-lived and self-expire (e.g., 5–15 minutes). Advanced revocation models (e.g., ZK revocation or refresh denial) are optional in extended profiles.

---

### ❓ How do I integrate NeutralToken into my website?

Use the [neutraltoken-core](https://github.com/NeutralToken-Foundation/neutraltoken) SDK or follow the [flows/verifier_flow.md](../flows/verifier_flow.md) guide to issue requests and verify credentials.

---

### ❓ Is NeutralToken open source?

Yes. The spec is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), and reference implementations use MIT unless otherwise noted.

---

### ❓ How do verifiers validate badges offline?

Verifiers download and cache issuer public keys. A presented badge is verified locally without contacting the issuer, ensuring no usage tracking.

---

### ❓ What personal data is included in a badge?

Only the claims required for the specific verification (e.g., `age_verified`) are included. No names or persistent identifiers are needed.

### ❓ Are there sample Issuer or Verifier projects?

Yes! See [demo-issuer](https://github.com/NeutralToken-Foundation/demo-issuer) for a sample Issuer and [demo-verifier](https://github.com/NeutralToken-Foundation/demo-verifier) for a sample Verifier.

