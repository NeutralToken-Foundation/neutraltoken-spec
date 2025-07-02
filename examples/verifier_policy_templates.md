# Verifier Policy Templates
Licensed under CC BY 4.0

These templates demonstrate common policy rules that verifiers can apply when evaluating presented badges.

## Require 18+ and US jurisdiction

```json
{
  "min_age": 18,
  "jurisdiction": "US"
}
```

## Accept any badge from Foundation-certified issuers

```json
{
  "trusted_issuers": "foundation-certified",
  "profiles": ["jwt-basic@1.0", "jwt-blind@1.0"]
}
```
