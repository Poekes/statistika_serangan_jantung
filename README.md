# Analisis Data Statistik Serangan Jantung

Direktori ini memuat data dan dokumentasi untuk keperluan eksplorasi, pembersihan, serta analisis statistik deskriptif dan inferensial terhadap dataset kesehatan terkait risiko serangan jantung.

---

## 1. Tujuan Proyek
- Menyimpan dan mengelola dataset kesehatan risiko serangan jantung secara terstruktur.
- Melakukan analisis statistik (seperti ukuran pemusatan data, penyebaran data, korelasi, serta visualisasi data) terhadap faktor-faktor risiko serangan jantung.
- Menyediakan dokumentasi yang terstruktur dan terpadu untuk setiap tahapan analisis.

---

## 2. Sumber Dataset
Dataset yang digunakan dalam proyek ini bersumber dari Kaggle:
- **Nama Dataset**: Heart Attack CSV Dataset
- **Penyedia**: headsetbagus12
- **Tautan Kaggle**: https://www.kaggle.com/datasets/headsetbagus12/heart-attack-csv-dataset
- **Lokasi File Lokal**: `dataset/dataset_serangan_jantung.csv`

---

## 3. Struktur Direktori
```text
statistic_data/
├── AGENTS.md                                             # Panduan operasional asisten AI
├── README.md                                             # Dokumentasi utama proyek dan dataset
├── dataset/
│   └── dataset_serangan_jantung.csv                      # Berkas dataset utama (Kaggle)
├── notebooks/
│   ├── analisis_statistika_dan_probabilitas.ipynb        # Jupyter Notebook analisis statistik versi 1 (11 modul)
│   └── v2/
│       ├── BAHAN_PRESENTASI.md                           # Bahan presentasi UTS (19 poin evaluasi data & probabilitas)
│       ├── RANGKUMAN_MATERI.md                           # Dokumen rangkuman konsep & teori 7 modul statistika
│       ├── analisis_statistika_probabilitas.ipynb        # Jupyter Notebook analisis statistik versi 2 (7 modul kurikulum)
│       ├── presentasi/ -> ../../presentasi               # Tautan simbolik ke aplikasi slide presentasi umum
│       └── presentasi2/ -> ../../presentasi2             # Tautan simbolik ke slide presentasi khusus 19 poin (alias presensi2)
├── presentasi/
│   ├── app.js                                            # Logika interaktif slide, keyboard handler, dan Chart.js
│   ├── index.html                                        # Aplikasi slide tayang presentasi interaktif (20 slide)
│   └── style.css                                         # Gaya desain modern dark theme & visualisasi responsif
└── presentasi2/ (alias: presensi2)
    ├── app.js                                            # Logika interaktif slide 19 poin dan integrasi Chart.js
    ├── generate_pptx.py                                  # Skrip otomasi tangkapan layar slide ke format PowerPoint (PPTX)
    ├── index.html                                        # Aplikasi slide tayang khusus 19 poin persis penugasan UTS
    ├── presentasi.pptx                                   # Berkas presentasi PPTX widescreen 16:9 siap tayang
    ├── presentasi_analisis_faktor_risiko_serangan_jantung.pptx # Salinan berkas presentasi PPTX (nama deskriptif)
    ├── screenshots/                                      # Direktori tangkapan layar 19 slide format PNG (resolusi 1920x1080)
    └── style.css                                         # Desain tata letak visual modern & responsif
```

---

## 4. Deskripsi Kolom Dataset
Dataset memiliki 79.584 baris data pasien dengan rincian kolom sebagai berikut:

| Nama Kolom | Keterangan |
| :--- | :--- |
| `patient_id` | Identitas unik pasien |
| `gender` | Jenis kelamin pasien (M = Laki-laki, F = Perempuan) |
| `age` | Usia pasien dalam satuan tahun |
| `body_mass_index` | Indeks Massa Tubuh (BMI) |
| `smoker` | Status kebiasaan merokok (0 = Tidak, 1 = Ya) |
| `systolic_blood_pressure` | Tekanan darah sistolik (mmHg) |
| `hypertension_treated` | Status penanganan hipertensi (0 = Tidak, 1 = Ya) |
| `family_history_of_cardiovascular_disease` | Riwayat penyakit kardiovaskular pada keluarga (0 = Tidak, 1 = Ya) |
| `atrial_fibrillation` | Kondisi fibrilasi atrium (0 = Tidak, 1 = Ya) |
| `chronic_kidney_disease` | Penyakit ginjal kronis (0 = Tidak, 1 = Ya) |
| `rheumatoid_arthritis` | Penyakit artritis reumatoid (0 = Tidak, 1 = Ya) |
| `diabetes` | Riwayat diabetes (0 = Tidak, 1 = Ya) |
| `chronic_obstructive_pulmonary_disorder` | Penyakit paru obstruktif kronis / PPOK (0 = Tidak, 1 = Ya) |
| `forced_expiratory_volume_1` | Nilai Forced Expiratory Volume in 1 second (FEV1) |
| `time_to_event_or_censoring` | Durasi waktu observasi hingga kejadian atau penyensoran |
| `heart_attack` | Kejadian serangan jantung (0 = Tidak mengalami, 1 = Mengalami) |

---

## 5. Cakupan Materi Statistika dan Probabilitas (Semester 3)
Berkas `notebooks/analisis_statistika_dan_probabilitas.ipynb` memuat implementasi topik perkuliahan tingkat semester 3 yang terbagi secara komprehensif ke dalam 11 modul:

1. **Modul 1: Persiapan Lingkungan dan Pemuatan Dataset**
   - Penanganan nilai kosong (*missing values*) dan inspeksi tipe data.
2. **Modul 2: Distribusi Frekuensi Berkelompok & Kurva Ogive**
   - Penentuan jumlah kelas ($k$) menggunakan Aturan Sturges ($k = 1 + 3{,}322 \log_{10} n$).
   - Perhitungan interval kelas ($c$), batas kelas, tepi kelas ($TB, TA$), titik tengah ($x_i$), frekuensi relatif, dan frekuensi kumulatif.
   - Visualisasi kurva Ogive Positif ("kurang dari") dan Ogive Negatif ("lebih dari").
3. **Modul 3: Statistika Deskriptif Komprehensif**
   - Ukuran Pemusatan: Mean, Median, Modus.
   - Ukuran Letak: Kuartil ($Q_1, Q_2, Q_3$), Interquartile Range ($IQR$), dan deteksi pencilan (*outliers*) metode Tukey.
   - Ukuran Penyebaran: Jangkauan (*Range*), Varians Sampel ($s^2$), Standar Deviasi ($s$), Standar Galat Rata-rata ($SE_{\bar{x}}$), Deviasi Rata-rata (*Mean Absolute Deviation* / MAD), dan Koefisien Variasi ($CV$).
   - Ukuran Bentuk Distribusi: Skewness (kemencengan) dan Kurtosis (keruncingan).
4. **Modul 4: Evaluasi Asumsi Normalitas**
   - Analisis grafik melalui Quantile-Quantile Plot (Q-Q Plot) terhadap kurva normal baku.
   - Pengujian formal statistik menggunakan Uji D'Agostino-Pearson Omnibus.
5. **Modul 5: Teori Probabilitas Dasar, Peluang Bersyarat, dan Teorema Bayes**
   - Probabilitas Marginal/Prior: $P(\text{Heart Attack})$, $P(\text{Diabetes})$, $P(\text{Smoker})$.
   - Peluang Bersyarat: $P(\text{Heart Attack} \mid \text{Diabetes})$, Risiko Relatif (*Relative Risk*).
   - Uji Independensi Probabilistik: Evaluasi $P(A \cap B)$ terhadap $P(A) \times P(B)$.
   - Teorema Bayes: Estimasi probabilitas posterior kondisi komorbid pada penderita serangan jantung.
6. **Modul 6: Distribusi Probabilitas Teoretis (Diskrit & Kontinu)**
   - Distribusi Diskrit: Pemodelan Binomial dan Poisson untuk jumlah kasus serangan jantung pada kelompok pasien ($n=30$).
   - Distribusi Kontinu: Pemodelan Distribusi Normal pada Tekanan Darah Sistolik dan standarisasi skor $Z$ untuk estimasi probabilitas hipertensi ($SBP \ge 140$).
7. **Modul 7: Teori Penarikan Sampel, Teorema Limit Pusat (CLT), dan Estimasi Parameter**
   - Eksperimen simulasi CLT dengan 1.500 pengulangan sampel pada ukuran $n = 5, 30, 100$.
   - Estimasi Selang Kepercayaan (*Confidence Interval* 95%) untuk rata-rata usia ($t$-distribution) dan proporsi kejadian serangan jantung.
8. **Modul 8: Pengujian Hipotesis Parametrik**
   - Uji Homogenitas Varians (Uji Levene).
   - Uji Beda Rata-rata Dua Populasi Independen (*Two-Sample Independent Welch $t$-Test*) untuk variabel usia.
   - Uji Beda Dua Proporsi (*Two-Sample $Z$-Test for Proportions*) antara kelompok laki-laki dan perempuan.
   - Analisis Varians Satu Arah (*One-Way ANOVA / $F$-Test*) untuk membandingkan tekanan darah sistolik antarkelompok usia.
9. **Modul 9: Pengujian Hipotesis Non-Parametrik**
   - Uji Kesesuaian Chi-Square (*Chi-Square Goodness-of-Fit Test*) untuk menguji keseimbangan rasio gender 50:50.
   - Uji Independensi Chi-Square ($\chi^2$) untuk tabel kontingensi status diabetes terhadap kejadian serangan jantung.
   - Uji Mann-Whitney $U$ sebagai alternatif non-parametrik uji beda dua kelompok usia.
10. **Modul 10: Analisis Kovarians, Korelasi, dan Regresi Linier Sederhana**
    - Perhitungan Kovarians Sampel $\operatorname{Cov}(X, Y)$.
    - Koefisien Korelasi Pearson ($r$) dan Spearman ($\rho$) antara Usia dan Tekanan Darah Sistolik.
    - Pembangunan model regresi linier OLS $\hat{Y} = \beta_0 + \beta_1 X$, perhitungan $R^2$, RMSE, serta plot residual.
11. **Modul 11: Ringkasan Eksekutif dan Kesimpulan Analisis**
    - Sintesis temuan statistik deskriptif dan inferensial.

---

## 6. Cakupan Materi Analisis Notebook Versi 2 (`notebooks/v2/analisis_statistika_probabilitas.ipynb`)
Berkas notebook pada folder `notebooks/v2/` disusun khusus mengikuti silabus perkuliahan kampus yang berfokus pada 7 topik inti dan mengevaluasi seluruh data populasi (79.583 pasien):

1. **Pengantar Statistika dan Jenis Data**
   - Definisi statistika deskriptif dan inferensial.
   - Taksonomi skala pengukuran data (Kualitatif: Nominal, Ordinal; Kuantitatif: Interval, Rasio) serta sifat data (Diskrit vs Kontinu).
   - Identifikasi metadata ke-16 variabel dataset dan strategi penanganan data hilang tanpa pemotongan baris data.
2. **STATISTIKA DESKRIPTIF: Pemusatan Data & Visualisasi**
   - Ukuran pemusatan: Mean, Median, Modus, dan analisis asimetri kurva.
   - Distribusi frekuensi berkelompok menggunakan Aturan Sturges ($k = 1 + 3{,}322 \log_{10} n$).
   - Visualisasi: Histogram dengan kurva KDE dan garis penanda pemusatan, kurva Ogive Positif dan Ogive Negatif, serta grafik batang frekuensi kejadian serangan jantung.
3. **STATISTIKA DESKRIPTIF: Penyebaran Data & Dasar Probabilitas**
   - Ukuran penyebaran: Jangkauan (*Range*), Kuartil ($Q_1, Q_2, Q_3$), $IQR$, deteksi pencilan metode Tukey, Varians sampel ($s^2$), Standar Deviasi ($s$), Standar Galat ($SE$), MAD, Koefisien Variasi ($CV$), Skewness, dan Kurtosis.
   - Visualisasi boxplot komparatif antarkelompok status serangan jantung.
   - Dasar probabilitas empiris, ruang sampel, titik sampel, aksioma Kolmogorov, peluang komplemen, dan verifikasi aturan penjumlahan peluang $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
4. **PROBABILITAS LANJUTAN: Peluang Bersyarat, Independensi, dan Teorema Bayes**
   - Peluang bersyarat $P(A \mid B)$ pada berbagai faktor risiko komorbid (merokok, diabetes, hipertensi).
   - Ukuran asosiasi epidemiologi: Risiko Relatif (*Relative Risk* / RR).
   - Uji independensi stokastik empiris: Evaluasi selisih antara $P(A \cap B)$ dan $P(A) \times P(B)$.
   - Teorema Bayes dan hukum probabilitas total: Evaluasi probabilitas prior, likelihood, dan posterior faktor komorbiditas pada pasien serangan jantung, beserta visualisasi komparatifnya.
5. **Peubah Acak Diskrit, Nilai Harapan, Distribusi Binomial & Poisson**
   - Konsep peubah acak diskrit, Fungsi Massa Probabilitas (PMF), Nilai Harapan $E[X]$, dan Varians $\operatorname{Var}(X)$.
   - Distribusi Binomial: Pemodelan jumlah pasien serangan jantung pada kelompok $n = 30$ orang dengan parameter $p$ dari populasi.
   - Distribusi Poisson: Pemodelan laju kejadian peristiwa langka dengan $\lambda = n \times p$.
   - Komparasi kurva PMF dan CDF antara Distribusi Binomial dan Poisson.
6. **Peubah Acak Kontinu: PMF, PDF, dan CDF, Distribusi Normal, Z-Score & Aplikasi**
   - Perbedaan fundamental matematis antara PMF (diskrit), PDF (kontinu), dan CDF.
   - Pemodelan variabel kontinu Tekanan Darah Sistolik (SBP) dengan Distribusi Normal Gauss.
   - Transformasi standardisasi skor Z ($Z = \frac{X - \mu}{\sigma}$) dan evaluasi empiris Aturan 68-95-99.7.
   - Aplikasi klinis skor Z: Estimasi probabilitas teoretis vs aktual hipertensi tahap lanjut ($SBP \ge 140$ mmHg).
7. **Populasi & Sampel, Teknik Sampling, Distribusi Sampling, dan Central Limit Theorem (CLT)**
   - Konseptual: Perbedaan populasi vs sampel serta parameter vs statistik.
   - Teknik sampling: Implementasi dan perbandingan *Simple Random Sampling* (SRS) vs *Stratified Random Sampling* ($n = 200$) terhadap parameter populasi sejati.
   - Distribusi sampling: Konsep variasi rata-rata sampel antarkelompok dan penyusutan standar galat ($\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$).
   - Central Limit Theorem (CLT): Simulasi komputasi dengan 1.000 replikasi pada ukuran sampel $n = 5, 30, 100, 500$, membuktikan konvergensi rata-rata sampel menuju kurva normal baku.
   - Penerapan kasus nyata: Estimasi parameter rata-rata populasi menggunakan Selang Kepercayaan (*Confidence Interval* 95%).

---

## 7. Petunjuk Menjalankan Notebook
Untuk membuka dan mengeksekusi analisis pada Jupyter Notebook:

1. Pastikan dependensi Python telah terpasang:
   ```bash
   pip install pandas numpy scipy matplotlib seaborn scikit-learn notebook
   ```
2. Buka salah satu berkas notebook menggunakan Jupyter Notebook atau VS Code:
   - Untuk versi 1 (11 modul analisis):
     ```bash
     jupyter notebook notebooks/analisis_statistika_dan_probabilitas.ipynb
     ```
   - Untuk versi 2 (7 modul kurikulum silabus):
     ```bash
     jupyter notebook notebooks/v2/analisis_statistika_probabilitas.ipynb
     ```
3. Seluruh sel pada kedua notebook telah dieksekusi sebelumnya sehingga grafik, tabel perhitungan, dan luaran visualisasi dapat langsung dipelajari tanpa harus menjalankan ulang.

---

## 8. Petunjuk Menjalankan Slide Presentasi Interaktif
Slide presentasi dibangun menggunakan HTML, CSS, dan JavaScript interaktif murni (tanpa ketergantungan server khusus). Anda dapat membukanya secara langsung:

1. Melalui browser web:
   - Slide Umum (20 slide): Buka berkas `presentasi/index.html`.
   - Slide Khusus 19 Poin Penugasan: Buka berkas `presentasi2/index.html` (atau melalui folder alias `presensi2/index.html`).
2. Melalui server lokal (opsional):
   ```bash
   python3 -m http.server 8000
   ```
   Buka peramban pada alamat `http://localhost:8000/presentasi2/` atau `http://localhost:8000/presentasi/`.

Tombol pintasan keyboard selama presentasi:
- `Panah Kanan` / `Spasi` / `Page Down`: Berpindah ke slide berikutnya.
- `Panah Kiri` / `Page Up` / `Backspace`: Berpindah ke slide sebelumnya.
- `F`: Mengaktifkan atau menonaktifkan mode layar penuh (*fullscreen*).
- `O`: Membuka laci ringkasan seluruh slide (*grid overview*) untuk berpindah ke slide mana pun.
- `Home` / `End`: Menuju ke slide pertama atau terakhir.

### Presentasi PowerPoint (.pptx)
Tersedia berkas presentasi PowerPoint siap tayang dalam rasio layar lebar 16:9 yang dibuat dari tangkapan layar beresolusi tinggi (Full HD 1080p) seluruh 19 slide:
- `presentasi2/presentasi.pptx` (atau `presentasi2/presentasi_analisis_faktor_risiko_serangan_jantung.pptx`).

Jika ingin memperbarui tangkapan layar dan meregenerasi berkas PowerPoint secara otomatis:
```bash
python3 presentasi2/generate_pptx.py
```
Skrip ini akan membuka Chrome secara otomatis (headless), mengambil tangkapan layar 19 slide secara berurutan, dan menyimpannya ke dalam berkas presentasi PPTX.

---

## 9. Ketentuan Dokumentasi
- Setiap kali terdapat **perubahan besar** pada proyek (penambahan skrip analisis, perubahan alur, transformasi dataset, dll.), berkas `README.md` ini wajib diperbarui agar selalu mencerminkan kondisi terkini proyek.
- Seluruh isi dokumentasi wajib menggunakan Bahasa Indonesia dan tidak memuat emoji sesuai pedoman pada `AGENTS.md`.

