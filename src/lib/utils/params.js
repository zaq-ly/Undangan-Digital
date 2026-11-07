export function getGuestName() {
  if (typeof window === 'undefined') return 'Tamu Undangan';
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('to') || urlParams.get('u') || urlParams.get('nama');
  return name ? name.trim() : 'Tamu Undangan';
}

