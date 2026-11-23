# Latihan React Hooks: `useState` & `useEffect`

Proyek latihan React berbasis **Vite** untuk mempelajari pengelolaan *state* lokal dengan `useState` serta *side-effect* dan *lifecycle* komponen dengan `useEffect`.

## Struktur Komponen

Aplikasi ini terbagi ke dalam tiga komponen utama dan satu halaman utama:

1. **Counter (`useState`)** — Mengatur nilai angka (tambah `+1`, kurang `-1` dengan batas minimum `0`, dan *reset* ke `0`).
2. **To-Do List (`useState` Array)** — Menambah tugas baru, menandai tugas selesai (*checkbox*), dan menghapus item tugas dari daftar.
3. **Fetch Data Dummy (`useEffect`)** — Menampilkan status *loading* singkat lalu memuat daftar data dummy saat komponen pertama kali dipasang (*mount*) menggunakan *dependency array* `[]`.

## Cara Menjalankan Proyek Secara Lokal

1. *Clone* repositori ini:
   ```bash
   git clone [https://github.com/Fahmi123098/latihan-usestate-useeffect.git](https://github.com/Fahmi123098/latihan-usestate-useeffect.git)