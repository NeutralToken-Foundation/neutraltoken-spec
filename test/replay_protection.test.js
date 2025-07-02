// Scenario: ⛔ Replayed Badge
// Licensed under CC BY 4.0
// Simulate a badge reuse (replay) scenario
test('Badge cannot be reused after session timestamp window', () => {
  const badgeTimestamp = 1719700000;
  const now = Math.floor(Date.now() / 1000);
  expect(now - badgeTimestamp).toBeLessThan(300); // Should be fresh
});
