import { create } from "zustand";

export type ClientInfo = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
};

export type ClientInfoActions = {
  updateClientInfo: (clientInfo: ClientInfo) => void;
};

export type ClientInfoStore = { clientInfo: ClientInfo } & ClientInfoActions;

const clientInfoDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
};

export const useClientInfo = create<ClientInfoStore>((set) => ({
  clientInfo: clientInfoDefaultValues,
  updateClientInfo: (clientInfo: ClientInfo) => set({ clientInfo }),
}));
