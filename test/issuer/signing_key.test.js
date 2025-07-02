// Scenario: ✅ Issuer exposes signing key
// Licensed under CC BY 4.0
const fs = require('fs');

test('Issuer signing key has required fields', () => {
  const jwk = JSON.parse(fs.readFileSync('./test/issuer/test_signing_key.json'));
  expect(jwk.kty).toBeDefined();
  expect(jwk.use).toBe('sig');
});
