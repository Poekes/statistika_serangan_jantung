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
├── AGENTS.md                          # Panduan operasional asisten AI
├── README.md                          # Dokumentasi utama proyek dan dataset
└── dataset/
    └── dataset_serangan_jantung.csv   # Berkas dataset utama (Kaggle)
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

## 5. Ketentuan Dokumentasi
- Setiap kali terdapat **perubahan besar** pada proyek (penambahan skrip analisis, perubahan alur, transformasi dataset, dll.), berkas `README.md` ini wajib diperbarui agar selalu mencerminkan kondisi terkini proyek.
- Seluruh isi dokumentasi wajib menggunakan Bahasa Indonesia dan tidak memuat emoji sesuai pedoman pada `AGENTS.md`.
