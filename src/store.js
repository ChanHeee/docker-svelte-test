import { writable } from 'svelte/store';

export const transaction = writable([
  { mode: 'income', value: 15 },
  { mode: 'income', value: 7 },
  { mode: 'expenses', value: -12 },
]);

export const income = writable(22);
export const expenses = writable(-12);
export const balance = writable(0);
