# Credential Schemas

This section illustrates full example payloads for each supported credential profile. Field descriptions explain how verifiers and holders interpret the values.

## jwt-basic

```json
{
  "credential_profile": "jwt-basic@1.0",
  "iss": "https://issuer.example",
  "exp": 1685577622,
  "age_verified": true,
  "nonce": "<request nonce>"
}
```

- `credential_profile` – profile identifier.
- `iss` – issuer URL or identifier.
- `exp` – expiration as a Unix timestamp.
- `age_verified` – boolean assertion that minimum age has been met.
- `nonce` – mirrors the value provided by the verifier to prevent replay.

## jwt-blind

```json
{
  "credential_profile": "jwt-blind@1.0",
  "iss": "https://issuer.example",
  "exp": 1685577622,
  "age_verified": true,
  "blind_sig": "<blinded signature>",
  "nonce": "<request nonce>"
}
```

- `blind_sig` – issuer's blind signature returned to the holder.
- Other fields match those in `jwt-basic`.

## vc-w3c

```json
{
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  "type": ["VerifiableCredential", "AgeOver"],
  "issuer": "did:web:issuer.example",
  "issuanceDate": "2023-05-31T12:00:00Z",
  "expirationDate": "2023-05-31T13:00:00Z",
  "credentialSubject": {
    "ageOver": 18
  },
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2023-05-31T12:00:00Z",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "did:web:issuer.example#keys-1",
    "jws": "<signature>"
  },
  "nonce": "<request nonce>"
}
```

- Standard VC fields (`@context`, `type`, `issuer`, etc.) follow the W3C specification.
- `credentialSubject.ageOver` – claim value requested by the verifier.
- `proof` – cryptographic proof of issuance.
- `nonce` – optional verifier-provided value for replay protection.

