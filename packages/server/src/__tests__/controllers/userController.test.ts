import userController from '@controllers/userController';

describe('user controller', () => {
  test('should get a text', () => {
    const informationController = userController();

    expect(informationController).not.toBe('');
  });
});
