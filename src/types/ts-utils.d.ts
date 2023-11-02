import { ChangeEvent } from 'react';

export type NullNumberUnion = null | number;

export type OnInputChangeEvent = ChangeEvent<HTMLInputElement>;

export type Values<T> = T[keyof T];

export type Keys<T> = keyof T;
