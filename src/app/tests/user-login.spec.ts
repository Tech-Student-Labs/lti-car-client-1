/* tslint:disable:no-unused-variable */

import { UserLogin } from "../models/user-login";

describe('Service: GetAllVehicleMakes', () => {
  let userLogin: UserLogin;

  beforeEach(() => {
    userLogin = new UserLogin('username', 'password');
  });

  it('should create userLogin', () => {
    expect(userLogin).toBeTruthy();
  });
});
