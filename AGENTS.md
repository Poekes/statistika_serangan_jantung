# Instruksi Proyek & Panduan Agen

Dokumen ini memuat aturan operasional dan gaya bahasa yang wajib dipatuhi oleh asisten/agen AI di repositori ini.

## 1. Bahasa Komunikasi
- Selalu gunakan **Bahasa Indonesia** dalam semua respons, penjelasan, ringkasan, dan interaksi dengan pengguna.
- Istilah teknis atau nama fungsi/pustaka dapat tetap dipertahankan dalam format aslinya jika tidak umum diterjemahkan.

## 2. Larangan Penggunaan Emoji
- **Dilarang keras menggunakan emoji apa pun** di seluruh teks output (respons chat, ringkasan, catatan perubahan, maupun artefak).
- Hindari penggunaan simbol-simbol dekoratif yang menyerupai emoji. Format teks harus bersih, profesional, dan to the point.

## 3. Pesan Commit Git (Git Commit Messages)
- Seluruh pesan commit git **wajib ditulis dalam Bahasa Indonesia**.
- Tidak boleh memuat emoji di dalam pesan commit (misalnya jangan gunakan Gitmoji).
- Gunakan format yang jelas dan deskriptif. Jika menggunakan *Conventional Commits*, deskripsi setelah tipe commit harus berbahasa Indonesia.
  - Contoh yang benar:
    - `feat: menambahkan analisis statistik deskriptif pada dataset`
    - `fix: memperbaiki perhitungan nilai rata-rata dan deviasi standar`
    - `docs: memperbarui panduan analisis di README`
  - Contoh yang salah:
    - `feat: ✨ add new feature`
    - `fix: fix data loading bug`

## 4. Pembaruan README.md pada Perubahan Besar
- Setiap kali terjadi **perubahan besar** (seperti perubahan tujuan analisis, penambahan fitur/skrip utama, perubahan struktur direktori, atau penambahan dataset baru), file `README.md` **wajib diperbarui**.
- Pembaruan `README.md` harus mencakup pembaruan tujuan direktori, ringkasan struktur berkas, petunjuk penggunaan terkini, dan informasi sumber data terkait.
- Seluruh isi `README.md` harus ditulis dalam Bahasa Indonesia dan tidak boleh memuat emoji.
