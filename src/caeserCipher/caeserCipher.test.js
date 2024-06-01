const caeserCipher = require('./caeserCipher');

test('Encrypt a message using caeser cipher', () => {
  expect(caeserCipher("Hidden message.", 40)).toBe("Vwrrsb asggous.");
});