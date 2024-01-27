import { routes } from '@/routes';
import { atom } from 'jotai';
import Router from 'next/router';

export const step = atom(1);

export const nextStepAtom = atom(null, (get, set) => {
  set(step, get(step) + 1);
});

export const prevStepAtom = atom(null, (get, set) => {
  if (get(step) === 1) {
    void Router.push(routes.home());
  } else {
    set(step, get(step) - 1);
  }
});
