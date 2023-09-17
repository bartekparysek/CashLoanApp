import { ChangeEvent } from 'react';
export type nullNumberUnion = null | number;

export type onInputChangeEvent = ChangeEvent<HTMLInputElement>;

export type Values<T> = T[keyof T];

export type Keys<T> = keyof T;
