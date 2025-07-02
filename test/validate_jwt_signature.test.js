// Scenario: ✅ Valid Age-Verified JWT
// Licensed under CC BY 4.0
// Validates that a given RS256 JWT is signed by a known JWK
const jwt = require('jsonwebtoken');
const fs = require('fs');
const jwks = JSON.parse(fs.readFileSync('./test/test_issuer_jwks.json'));

test('Valid JWT signature using RS256', () => {
  const token = '[INSERT_VALID_JWT_HERE]';
  const pubkey = jwks.keys[0]; // Load appropriate key
  expect(() => jwt.verify(token, pubkey)).not.toThrow();
});
