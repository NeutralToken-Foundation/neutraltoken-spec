# Widget Transport Flows
Licensed under CC BY 4.0

These examples illustrate how verifiers can exchange NeutralToken credentials using different transport layers. Implementers may choose the mechanism that best fits their environment.

## iframe postMessage example

```html
<!-- Embed wallet flow in an iframe -->
<iframe src="https://wallet.example.com/verify?req=abc" id="pb-widget"></iframe>
<script>
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://wallet.example.com') return;
  console.log('Received credential:', event.data);
});
</script>
```

## Deep link for mobile

```
pbwallet://request?data=<BASE64URL_PAYLOAD>
```

The verifier redirects mobile users to the wallet app via a custom URI scheme. The wallet returns to the verifier's callback once the credential is issued.

## QR code handshake for offline clients

Generate a QR code containing the request payload:

```
https://wallet.example.com/qr?request=<BASE64URL_PAYLOAD>
```

Offline clients scan the code, complete the flow on another device, and display the resulting credential for the verifier to validate.
