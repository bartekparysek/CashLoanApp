import { atom } from 'jotai';

export type ClientInfo = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
};

const ClientInfoDefaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
};

export const clientInfoAtom = atom(ClientInfoDefaultValues);
