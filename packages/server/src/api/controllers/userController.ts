import UserService from '@services/UserService';

export default function userController() {
  const userService = new UserService();
  console.log(userService.getInformation());

  return userService.getInformation();
}
