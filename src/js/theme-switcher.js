import refs from './refs.js';

export function changeTheme() {
  document.body.classList.toggle('theme-dark');
  document.body.classList.toggle('theme-light');
}