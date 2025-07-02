# Credential Profile: jwt-blind
Licensed under CC BY 4.0

## Format Overview
JWT signed with a blind signature (e.g., Blind RSA) to prevent the issuer from correlating issuance and presentation.

## Example Payload
```json
{
  "age_verified": true,
  "credential_profile": "jwt-blind@1.0",
  "exp": 1719700600,
  "iss": "https://issuer.example.com"
}
```

## Verification Steps
1. Holder unblinds the issuer's signature to obtain the final JWT.
2. Verifier checks the JWT signature and expiration.

## Privacy Notes
Because the signature was generated over a blinded token, the issuer cannot link a presented badge back to a specific issuance event.
