const STORAGE_KEY = 'wedding_guest_wishes';

const DEFAULT_WISHES = [
  {
    id: 1,
    name: 'Dimas & Keluarga',
    status: 'Hadir',
    message: 'Selamat menempuh hidup baru Fajar & Aisyah! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin.',
    createdAt: 'Baru saja'
  },
  {
    id: 2,
    name: 'Sarah Amelia',
    status: 'Hadir',
    message: 'Happy wedding! Lancar-lancar sampai hari H yaa, so happy for both of you ❤️',
    createdAt: '1 jam yang lalu'
  },
  {
    id: 3,
    name: 'Rian Pratama',
    status: 'Ragu-ragu',
    message: 'Barakallahu lakum wa baraka alaikum. Maaf kalau nanti berhalangan hadir, doa terbaik untuk kalian berdua!',
    createdAt: '3 jam yang lalu'
  }
];

export function getStoredWishes() {
  if (typeof window === 'undefined') return DEFAULT_WISHES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_WISHES));
      return DEFAULT_WISHES;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading localStorage:', e);
    return DEFAULT_WISHES;
  }
}

export function saveWish(newWish) {
  try {
    const current = getStoredWishes();
    const updated = [
      {
        id: Date.now(),
        ...newWish,
        createdAt: 'Baru saja'
      },
      ...current
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Error saving to localStorage:', e);
    return [];
  }
}

