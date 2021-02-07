import { Constants, IUserInterface, UserActions } from '../Types/Types';

const init: IUserInterface = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  salary: '',
};

export function userReducer(state: IUserInterface = init, action: UserActions): IUserInterface {
  switch (action.type) {
    case Constants.ADD_USER:
      return action.payload;
    default:
      return state;
  }
}
