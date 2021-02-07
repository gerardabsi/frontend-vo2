import { action } from 'typesafe-actions';
import { Constants, IUserInterface } from '../Types/Types';

export type AddUserTypes = { type: string; payload: IUserInterface };

export const addUser = (item: IUserInterface): AddUserTypes => action(Constants.ADD_USER, item);
