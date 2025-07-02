# Credential Profile: jwt-basic
Licensed under CC BY 4.0

## Format Overview
A short-lived JWT signed with `RS256`. The token conveys a simple claim that the holder meets a minimum requirement.

## Example Payload
```json
{
  "age_verified": true,
  "credential_profile": "jwt-basic@1.0",
  "exp": 1719700300,
  "iss": "https://issuer.example.com"
}
```

## Verification Steps
1. Decode the JWT and verify the signature using the issuer's public key.
2. Ensure `exp` has not passed.
3. Confirm the `credential_profile` matches `jwt-basic@1.0`.

## Privacy Notes
No persistent identifiers are included and the issuer never sees credential presentation.
