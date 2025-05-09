import { writable } from 'svelte/store';

export const theme = writable('light');

export const toggleTheme = () => {
  theme.update(current => current === 'light' ? 'dark' : 'light');
};