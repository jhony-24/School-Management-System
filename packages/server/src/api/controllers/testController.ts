import TestFeature from '@services/TestFeature';

const testController = () => {
  const userService = new TestFeature();

  return userService.getInformation();
};

export default testController;
