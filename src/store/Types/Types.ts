import { ActionType } from 'typesafe-actions';
import * as actions from '../Actions/User';

export type UserActions = ActionType<typeof actions>;

export interface IUserInterface {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  salary: string;
}

export enum Constants {
  ADD_USER = 'ADD_USER',
}
