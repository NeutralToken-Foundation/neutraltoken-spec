# Verifier ↔ Holder Handshake

This document describes the interaction sequence between a verifier and a holder when requesting and presenting a NeutralToken credential.

1. **Initiate** – The verifier specifies the credential profile(s) it accepts and sends a request to the holder.
2. **Consent** – The holder UI displays requested claims and seeks user approval.
3. **Respond** – Upon approval, the holder returns a signed credential appropriate for the selected profile.
4. **Validate** – The verifier checks the signature, expiration, and issuer trust chain.

## Request Format

Verifiers send an HTTP `POST` or `GET` request to the holder depending on the transport option. Each request contains a JSON body describing the credential requirements.

```json
{
  "request_id": "string",
  "credential_profiles": ["jwt-basic", "jwt-blind"],
  "claims": {
    "age_over": 18,
    "purpose": "purchase"
  },
  "callback": "https://merchant.example/cb"
}
```

- `request_id` – a unique identifier used to correlate the response.
- `credential_profiles` – ordered list of supported profiles.
- `claims` – requested attributes or constraints.
- `callback` – endpoint or URI the holder should send the response to.

### Transport Options

| Method     | HTTP Verb | Notes                                 |
|------------|-----------|---------------------------------------|
| iframe     | `POST`    | Embedded widget on verifier page      |
| redirect   | `GET`     | Browser redirect to wallet            |
| QR code    | `GET`     | For cross-device handoff              |

### Response Format

The holder replies with a JSON document containing the signed credential. The exact payload depends on the chosen profile.

```json
{
  "request_id": "string",
  "profile": "jwt-basic",
  "credential": "<signed token>"
}
```

### Example Flow

1. The verifier loads an iframe pointing to the holder application with the above request body.
2. The holder prompts the user for consent.
3. After approval the holder `POST`s the response to the verifier's `callback` URL.
4. The verifier validates the credential and completes the transaction.
