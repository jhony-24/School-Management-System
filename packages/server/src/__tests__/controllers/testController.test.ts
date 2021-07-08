import testController from '@controllers/testController';

describe('test controller', () => {
  test('should get a text', () => {
    const informationController = testController();

    expect(informationController).not.toBe('');
  });
});
