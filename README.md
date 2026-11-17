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

## Tambahan

- **Pustaka 873 gerakan** dengan gambar posisi awal/akhir dan instruksi, dari [Free Exercise DB](https://github.com/yuhonas/free-exercise-db) (Unlicense, domain publik).
- Edit jam mulai, tanggal, dan durasi sesi; ubah urutan gerakan; edit set sesi lama.
- Timer istirahat, countdown/stopwatch untuk set berbasis waktu, timer EMOM, AMRAP, dan Tabata.
- Catatan rasa setelah latihan (RPE, energi, pegal) dan cek pegal keesokan harinya.
- Beranda: beban latihan 7 hari (durasi × RPE sesi), set per otot, tren energi.
- Ambil aktivitas Strava langsung dari browser. Client ID dan Secret hanya disimpan di perangkat.

## Desain dan fitur Hevy-style

- Tampilan Graphite dengan mode terang, gelap, atau ikut HP.
- Beranda: total volume, sesi, jam, dan set minggu ini; heatmap otot depan dan belakang; daftar Personal Record.
- Layar latihan padat: durasi, volume, set, PR, dan kolom RPE per set. Set yang memecahkan rekor langsung ditandai.
- Heatmap otot per gerakan: figur depan dan belakang, otot utama dan pendukung, plus alat.
- Kartu ringkasan 1080 × 1350 untuk dibagikan dari halaman sesi.

## Rencana

1. Login Google dan sinkron antar perangkat (Firebase).
2. Kirim sesi ke Strava, mengisi aktivitas Coros yang sudah ada.
3. Simpan ke Apple Health lewat Shortcuts.

## Deploy

GitHub Pages: Settings → Pages → Deploy from a branch → `main` / root.
