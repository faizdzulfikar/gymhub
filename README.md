# Gym Hub

Tracker latihan pribadi untuk HP. Dibuat untuk latihan yang mencampur angkat beban di gym dengan floor work atau strength conditioning di mat, termasuk alat yang tidak ada di katalog Hevy atau Strava.

## Tahap 1 (sekarang)

- **Latihan**: mulai sesi, tambah gerakan, centang set sekali ketuk, angka sesi sebelumnya terisi otomatis, timer istirahat.
- **Sesi campuran**: set biasa, superset, circuit, EMOM, AMRAP, dan Tabata dalam satu sesi.
- **Gerakan dan alat kustom**: lima cara catat (beban × rep, rep saja, waktu, beban × waktu, jarak × waktu), gabung duplikat.
- **Riwayat dan progres** per gerakan, dengan grafik.
- **Impor CSV Hevy** dengan pencocokan nama gerakan.
- **Offline**: PWA dengan service worker. Data tersimpan di IndexedDB di perangkat, dengan cadangan JSON.

Buka di Safari iPhone, lalu pilih Bagikan → Tambah ke Layar Utama.

## Rencana

1. Login Google dan sinkron antar perangkat (Firebase).
2. Sinkron ke Strava, mengisi aktivitas Coros yang sudah ada.
3. Simpan ke Apple Health lewat Shortcuts.

## Deploy

GitHub Pages: Settings → Pages → Deploy from a branch → `main` / root.
