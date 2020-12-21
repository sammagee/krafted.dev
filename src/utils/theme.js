export function toggleTheme() {
  const root = document.querySelector('html')
  // root.classList.add('disable-transitions')
  if (root.classList.contains('dark')) {
    root.classList.remove('dark')
    try {
      window.localStorage.setItem('theme', 'light')
    } catch (_) {}
  } else {
    root.classList.add('dark')
    try {
      window.localStorage.setItem('theme', 'dark')
    } catch (_) {}
  }
  // window.setTimeout(() => {
  //   root.classList.remove('disable-transitions')
  // }, 0)
}

export function getTheme() {
  return document.querySelector('html').classList.contains('dark')
    ? 'dark'
    : 'light'
}
