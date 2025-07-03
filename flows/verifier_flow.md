# Verifier Integration Flow

This guide explains how a website or service can act as a NeutralToken verifier. Verification is issuer-agnostic: the same steps apply regardless of which compliant entity issued a token.

1. Advertise supported credential profiles to potential holders.
2. Construct a request containing metadata such as `min_age` or jurisdiction requirements.
3. Send the request using the handshake protocol via iframe, redirect, or QR code.
4. Receive the signed credential on the configured callback endpoint.
5. Validate the signature, issuer and expiration before granting access.
6. Delete or short-term cache the credential to respect user privacy.

Credentials are validated offline by checking the token signature against trusted issuer keys. Verifiers should maintain a local cache of allowed issuer public keys or DID documents. If using the optional issuer registry, fetch and store the key list periodically so no real-time lookup is needed during verification.

## Verifier Request Structure
> 🔐 Note: The verifier's request MUST NOT include fields like 'purpose' or service-specific identifiers that could leak user context. The issuer is not contacted during verification, and no metadata should leak about the service the user is accessing.

A typical request object sent to the holder looks like this:

```json
{
  "request_id": "<unique string>",
  "credential_profiles": ["jwt-basic@1.0"],
  "claims": {
    "min_age": 18
  },
  "callback": "https://yourapp.example/callback"
}
```

- `request_id`: (optional) Unique identifier for correlating the response.
- `credential_profiles`: Array of supported credential profiles (e.g., `jwt-basic@1.0`).
- `claims`: Object with requested attributes (e.g., `min_age`, `jurisdiction`).
- `callback`: (optional) URL or endpoint for the holder to send the response to.

The verifier includes this object when initiating the handshake so the holder can display a meaningful consent prompt.

