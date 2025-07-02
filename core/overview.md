# Core Protocol Overview

The NeutralToken protocol establishes a privacy-first flow for verifying user eligibility without centralized tracking. **NeutralToken is an open, issuer-agnostic protocol** that any organization can implement. Compliant entities may operate as issuers, verifiers, or wallet providers without permission from the Foundation. Credential issuance is decentralized and does not require Foundation approval.

The protocol defines the following stages shared across all credential profiles:

1. **Request** – A verifier requests a badge from the holder.
2. **Consent** – The holder reviews the request and authorizes disclosure.
3. **Presentation** – The holder presents a short-lived signed credential.
4. **Verification** – The verifier checks the signature and issuer trust.

Core protocol versions (e.g., `v1.0`) remain stable even as new credential profiles are introduced.
