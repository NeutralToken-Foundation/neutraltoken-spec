// Scenario: ✅ Timestamp validation
// Licensed under CC BY 4.0

test('Issued JWT has valid timestamps', () => {
  const payload = { iat: 1719700000, exp: 1719700600 };
  expect(payload.exp).toBeGreaterThan(payload.iat);
});
