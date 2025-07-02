# Partner Issuer Guide

This guide outlines how partners can become issuers under the PrivateBadge protocol.

## Issuer Requirements
- Generate a signing keypair and publish the public key as a JWK or DID.
- Provide an `/issue` endpoint that returns credentials conforming to a supported profile.
- Use short credential lifetimes (TTL) to minimize revocation needs.

## Issuance Flow
1. Receive a request containing profile and claim information.
2. Validate the subject's attributes through approved methods.
3. Issue a signed credential using the standard payload and token format.

## Optional Infrastructure
- Partners may deploy their own servers or leverage hosted SaaS platforms and SDKs.
- Commercial providers may handle signing, key management and scaling, but use of such services is entirely optional.

## Registering with the Foundation
If you choose to appear in the public issuer registry, submit your public key fingerprint and metadata to the Foundation. Registration is not required for issuing credentials.
