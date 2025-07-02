# Consent Model

User consent is central to NeutralToken. Holders must present a clear interface showing what information will be shared and for how long.

Guidelines:

- Explain why the verifier is requesting each claim.
- Allow users to decline or select alternative profiles when available.
- Ensure credentials are short-lived to minimize exposure if compromised.

## User-facing Flow

1. When the verifier initiates a request, the holder displays a modal dialog summarizing the requested data and purpose. An example prompt:

   > *"ExampleShop would like to verify you are over 18 to complete this purchase."*

2. Users may inspect the claims to be asserted (`age_over: 18`, `purpose: purchase`) before consenting.
3. The UI should provide a one-time consent option for a single verification as well as a persistent option (e.g., "Remember this decision for 30 days").
4. After consent, the credential is generated and returned to the verifier.

Holders should make claims inspectable and describe how long the credential will remain valid. Persistent consent must be revocable at any time through wallet settings.
