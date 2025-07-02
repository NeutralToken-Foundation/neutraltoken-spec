# RFC-0002: Issuer Attestation Metadata
Licensed under CC BY 4.0


## Summary
Standardize optional metadata fields for issuers in the registry, including `trust_level` and `certification`.

## Motivation
Ecosystem participants want clarity on which issuers are certified or audited.

## Proposal
Define:
- `trust_level`: one of "self-declared", "foundation-certified", "third-party-audited"
- `certification_url`: optional link to audit or cert

## Example

```json
{
  "trust_level": "foundation-certified",
  "certification_url": "https://certs.neutraltoken.org/issuer123"
}
```

## Status: Draft
