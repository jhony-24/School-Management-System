import TokenDecode from '@services/TokenDecode';

describe('Token Decode', () => {
  test('Incorrect token format', () => {
    const jwt_saved = 'Bearer 1qw4eqewq1wqewq1e5621621';
    const token = new TokenDecode().decode(jwt_saved);

    expect(token).toBe('');
  });
});
