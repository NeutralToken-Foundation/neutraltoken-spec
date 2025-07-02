# Threat Model
Licensed under CC BY 4.0


This section outlines potential threats to the NeutralToken ecosystem and the mitigations built into the protocol.

## Threats

- **Replay** – previously issued credentials might be reused by an attacker.
- **Token Theft** – malware or physical compromise could expose stored credentials.
- **Forgery** – adversaries may attempt to forge or tamper with tokens.

## Mitigation Strategies

| Profile    | Mitigations                                                                 |
|------------|------------------------------------------------------------------------------|
| jwt-basic  | Short expiration times, nonce binding, HTTPS transport.                      |
| jwt-blind  | Same as jwt-basic plus unlinkability through blind signatures.               |
| vc-w3c     | Signed proofs with DIDs and optional ZK proofs for selective disclosure.     |

### Transport Considerations

- **iframe/redirect** – use TLS and origin checks to prevent interception.
- **QR code** – pair with single-use nonce and confirm domain in wallet before sending the credential.

Regular key rotation and issuer attestation further reduce the impact of compromised issuers.
