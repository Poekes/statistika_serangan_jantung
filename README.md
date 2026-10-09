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
└── notebooks/
    └── analisis_statistika_dan_probabilitas.ipynb        # Jupyter Notebook analisis statistika semester 3
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
Berkas `notebooks/analisis_statistika_dan_probabilitas.ipynb` memuat implementasi topik perkuliahan tingkat semester 3 yang terbagi ke dalam modul-modul berikut:

1. **Modul 1: Persiapan Lingkungan dan Pemuatan Dataset**
   - Penanganan nilai kosong (*missing values*) dan inspeksi tipe data.
2. **Modul 2: Statistika Deskriptif**
   - Ukuran Pemusatan: Mean, Median, Modus.
   - Ukuran Letak: Kuartil ($Q_1, Q_2, Q_3$), Interquartile Range ($IQR$), dan deteksi pencilan (*outliers*).
   - Ukuran Penyebaran: Jangkauan (*Range*), Varians Sampel ($s^2$), Standar Deviasi ($s$), dan Koefisien Variasi ($CV$).
   - Ukuran Bentuk Distribusi: Skewness (kemencengan) dan Kurtosis (keruncingan).
   - Visualisasi: Histogram, kurva KDE, dan Boxplot komparatif.
3. **Modul 3: Teori Probabilitas Dasar, Peluang Bersyarat, dan Teorema Bayes**
   - Probabilitas Marginal/Prior: $P(\text{Heart Attack})$, $P(\text{Diabetes})$, $P(\text{Smoker})$.
   - Peluang Bersyarat: $P(\text{Heart Attack} \mid \text{Diabetes})$, Risiko Relatif (*Relative Risk*).
   - Uji Independensi Probabilistik: Evaluasi $P(A \cap B)$ terhadap $P(A) \times P(B)$.
   - Teorema Bayes: Estimasi probabilitas posterior kondisi komorbid pada penderita serangan jantung.
4. **Modul 4: Distribusi Probabilitas Teoretis (Diskrit & Kontinu)**
   - Distribusi Diskrit: Pemodelan Binomial dan Poisson untuk jumlah kasus serangan jantung pada kelompok pasien ($n=30$).
   - Distribusi Kontinu: Pemodelan Distribusi Normal pada Tekanan Darah Sistolik dan standarisasi skor $Z$ untuk estimasi probabilitas hipertensi ($SBP \ge 140$).
5. **Modul 5: Teori Penarikan Sampel, Teorema Limit Pusat (CLT), dan Estimasi Parameter**
   - Eksperimen simulasi CLT dengan 1.500 pengulangan sampel pada ukuran $n = 5, 30, 100$.
   - Estimasi Selang Kepercayaan (*Confidence Interval* 95%) untuk rata-rata usia ($t$-distribution) dan proporsi kejadian serangan jantung.
6. **Modul 6: Pengujian Hipotesis Statistik**
   - Uji Homogenitas Varians (Uji Levene).
   - Uji Beda Rata-rata Dua Populasi Independen (*Two-Sample Independent $t$-Test*) untuk variabel usia pasien.
   - Uji Independensi Chi-Square ($\chi^2$) untuk tabel kontingensi status komorbid terhadap kejadian serangan jantung.
7. **Modul 7: Analisis Korelasi & Regresi Linier Sederhana**
   - Koefisien Korelasi Pearson ($r$) dan Spearman ($\rho$) antara Usia dan Tekanan Darah Sistolik.
   - Pembangunan model regresi linier $\hat{Y} = \beta_0 + \beta_1 X$, perhitungan $R^2$, RMSE, serta plot residual.
8. **Modul 8: Ringkasan dan Kesimpulan Analisis**
   - Sintesis temuan statistik deskriptif dan inferensial.

---

## 6. Petunjuk Menjalankan Notebook
Untuk membuka dan mengeksekusi analisis pada Jupyter Notebook:

1. Pastikan dependensi Python telah terpasang:
   ```bash
   pip install pandas numpy scipy matplotlib seaborn scikit-learn notebook
   ```
2. Buka berkas notebook menggunakan Jupyter Notebook atau VS Code:
   ```bash
   jupyter notebook notebooks/analisis_statistika_dan_probabilitas.ipynb
   ```
3. Seluruh sel telah dieksekusi sebelumnya sehingga grafik dan luaran tabel dapat langsung dipelajari tanpa harus menjalankan ulang.

---

## 7. Ketentuan Dokumentasi
- Setiap kali terdapat **perubahan besar** pada proyek (penambahan skrip analisis, perubahan alur, transformasi dataset, dll.), berkas `README.md` ini wajib diperbarui agar selalu mencerminkan kondisi terkini proyek.
- Seluruh isi dokumentasi wajib menggunakan Bahasa Indonesia dan tidak memuat emoji sesuai pedoman pada `AGENTS.md`.
