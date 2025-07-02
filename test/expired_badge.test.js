// Scenario: ⛔ Expired Credential
// Licensed under CC BY 4.0
// Tests that a badge with expired 'exp' field is rejected
const jwt = require('jsonwebtoken');

test('Reject expired JWT badge', () => {
  const expiredToken = '[EXPIRED_JWT_HERE]';
  expect(() => jwt.verify(expiredToken, '[PUBLIC_KEY]')).toThrow(/jwt expired/);
});
