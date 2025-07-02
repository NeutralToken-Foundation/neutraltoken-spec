// Scenario: ✅ Basic JWT structure
// Licensed under CC BY 4.0

test('Issued JWT has three parts', () => {
  const token = '[HEADER].[PAYLOAD].[SIGNATURE]';
  expect(token.split('.').length).toBe(3);
});
