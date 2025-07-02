# Credential Profiles
Licensed under CC BY 4.0


The NeutralToken protocol supports multiple credential profiles. The table below compares key capabilities of each profile.

| Feature                | jwt-basic | jwt-blind | vc-w3c |
|------------------------|----------|-----------|--------|
| Signature Type         | JWT (RS256) | Blind JWT (RSA) | Linked Data Proof |
| Unlinkable Issuance    | ❌ | ✅ | ✅ (with ZK proofs) |
| W3C VC Compatible      | ❌ | ❌ | ✅ |
| Selective Disclosure   | ❌ | ❌ | Optional |
| Recommended Use        | Simple integrations | Privacy-preserving JWT | Standards-based ecosystems |

Implementers can choose the profile that best matches their security and interoperability requirements.

## Available Profiles

- [jwt-basic.md](jwt-basic.md) – simple RS256 JWT (Status: Draft)
- [jwt-blind.md](jwt-blind.md) – blind-signed JWT for unlinkability (Status: Draft)
- [vc-w3c.md](vc-w3c.md) – W3C Verifiable Credential format (Status: Proposed)

