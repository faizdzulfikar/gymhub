# Gym Hub

Ruang kerja untuk personal trainer: catat member, asesmen awal, check-in progres, log sesi latihan, template pesan, dan kalkulator fitness.

Situs ini statis (satu file `index.html`, tanpa server). Semua data tersimpan di browser perangkat yang dipakai, jadi buat cadangan secara rutin lewat menu **Pengaturan → Unduh cadangan**.

## Fitur

- **Member**: daftar aktif/arsip, asesmen awal (BB, TB, body fat, tensi, HR istirahat, skrining kesehatan), BMI/BMR/TDEE otomatis.
- **Profil member**: check-in berat badan dengan grafik, log sesi (set × rep × kg, volume, RPE), sisa paket PT.
- **Template pesan**: kode seperti `[NAMA_MEMBER]` dan `[SISA_SESI]` terisi otomatis, siap disalin ke WhatsApp.
- **Kalkulator**: BMI (Asia-Pasifik), kalori harian, 1RM, susun plate, zona detak jantung, protein, body fat US Navy.
- **Pengaturan**: profil coach, backup/restore JSON, tema terang/gelap.

## Deploy

GitHub Pages: Settings → Pages → Deploy from a branch → `main` / root.
