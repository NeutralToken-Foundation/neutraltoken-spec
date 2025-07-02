# NeutralToken Protocol Specification
Licensed under CC BY 4.0


**NeutralToken** is an open, privacy-preserving protocol for verifying user eligibility — such as age, jurisdiction, or membership — across digital services. It enables publishers, platforms, and merchants to verify user attributes without collecting or storing sensitive personal data.

## 🌐 Why NeutralToken?

- ✅ **Privacy-first**: No cross-site identifiers or persistent user profiles
- 🔒 **Consent-driven**: Users control what is shared and with whom
- ⚙️ **Interoperable**: Simple to implement on websites, apps, and embedded platforms
- 🧩 **Modular**: Can support a variety of credentials — age, location, ID type, etc.

## 🧾 Specification Contents

The full specification is organized under [spec.md](spec.md). Key sections include:
- Protocol architecture overview
- Credential format and token schema
- Issuer/verifier handshake and validation flow
- Integration guide for implementers
- Security and threat model
- [Security docs](security/README.md)
- Test cases and edge scenarios

## 🚀 Getting Started

To start building with NeutralToken:

1. Read [core/overview.md](core/overview.md) to understand the architecture and roles.
2. Choose a credential profile from [profiles/](profiles/) — start with:
   - [`jwt-basic`](profiles/jwt-basic.md)
   - [`jwt-blind`](profiles/jwt-blind.md)
   - [`vc-w3c`](profiles/vc-w3c.md)
3. For verifiers, follow [flows/verifier_flow.md](flows/verifier_flow.md) to issue badge requests and validate credentials.
4. For issuers, use [flows/issuer_flow.md](flows/issuer_flow.md) to implement a compliant badge issuance service.
5. Learn how trust is established between issuers and verifiers in [core/trust_model.md](core/trust_model.md).

6. Review our governance policies in [governance/README.md](governance/README.md) before contributing.
Need help? Explore our community resources or contact the Foundation for support.

## 📖 Who Should Use This?

- **Merchants & publishers** verifying legal access to products or content
- **Wallet providers** issuing cryptographically verifiable attributes
- **Developers** building plugins, widgets, or server integrations
- **Regulators** seeking a transparent and auditable trust framework

## 🔓 License

- Specification: [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)
- Reference implementations: MIT (see each respective repo)

## 🛠 Reference Implementations

- [neutraltoken-core](https://github.com/NeutralToken-Foundation/neutraltoken)
- [neutraltoken-api](https://github.com/NeutralToken-Foundation/neutraltoken-api) *(optional)*

## 📬 Contributions

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) and open a PR to suggest changes or additions to the spec.

- See [governance/ISSUER_REGISTRY_TEMPLATE.md](governance/ISSUER_REGISTRY_TEMPLATE.md) for listing issuers.
- Test scenarios are listed in [test/TEST_CASES.md](test/TEST_CASES.md).

## 🧑‍💻 Sample Projects

- [demo-issuer](https://github.com/NeutralToken-Foundation/demo-issuer): A sample/test NeutralToken Issuer for development and integration testing.
- [demo-verifier](https://github.com/NeutralToken-Foundation/demo-verifier): A sample/test NeutralToken Verifier for development and integration testing.

---
*This repository defines the canonical specification for the NeutralToken protocol.*
