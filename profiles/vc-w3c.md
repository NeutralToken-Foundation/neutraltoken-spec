# Credential Profile: vc-w3c
Licensed under CC BY 4.0

## Format Overview
A W3C Verifiable Credential using Linked Data Proofs and DIDs for issuer identification.

## Example Payload
```json
{
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  "type": ["VerifiableCredential", "NeutralToken"],
  "issuer": "did:example:issuer123",
  "issuanceDate": "2025-01-01T00:00:00Z",
  "credentialSubject": {"age_verified": true}
}
```

## Verification Steps
1. Resolve the issuer DID and verify the linked data signature.
2. Check the credential schema and any disclosed attributes.

## Privacy Notes
Selective disclosure and zero-knowledge proofs may be used to minimize data exposure.
