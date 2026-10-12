# Bahan Presentasi Analisis Data Statistika dan Probabilitas

Dokumen ini disusun sebagai panduan bahan tayang dan naskah presentasi analisis data faktor risiko serangan jantung. Penjelasan disajikan secara ringkas, padat, terstruktur, profesional, dan berbasis data empiris populasi 79.583 pasien.

---

## 1. Judul atau Topik Analisis Data
* **Topik Utama**: Analisis Statistik Deskriptif dan Teori Probabilitas pada Faktor Risiko Penyakit Serangan Jantung (*Heart Attack Risk Factors Analysis*).
* **Fokus Kajian**: Eksplorasi karakteristik data klinis, distribusi frekuensi berkelompok Aturan Sturges, evaluasi peluang bersyarat faktor komorbiditas, penerapan Teorema Bayes, pemodelan peubah acak, serta simulasi konvergensi Teorema Limit Pusat (CLT).

---

## 2. Nama dan NIM Mahasiswa

| No | Nama Mahasiswa | NIM |
| :---: | :--- | :---: |
| 1 | Muhamad Nur Akbar | 250111019 |
| 2 | Taufan Nur Saffarudin | 250111033 |
| 3 | Fathul Nur Hidayat | 250111011 |

* **Tingkat / Semester**: Semester 3
* **Mata Kuliah**: Statistika dan Probabilitas

---

## 3. Sumber Dataset (Data Sekunder atau Primer)
* **Klasifikasi Sumber**: **Data Sekunder**
* **Penjelasan Singkat**: Data dihimpun dari pangkalan data publik Kaggle yang bersumber dari catatan rekam medis observasional klinis terdahulu, bukan diperoleh melalui pengukuran, kuesioner, atau eksperimen langsung di lapangan oleh penyusun (*data primer*).

---

## 4. Alasan Memilih Topik
* **Urgensi Kesehatan Global**: Penyakit kardiovaskular, khususnya serangan jantung (*infark miokard*), merupakan penyebab morbiditas dan mortalitas utama di dunia.
* **Relevansi Materi Statistika**: Hubungan antarvariabel gaya hidup (merokok), hemodinamik (tekanan darah), dan komorbiditas (diabetes, ginjal) sangat relevan untuk dievaluasi menggunakan metode statistik deskriptif dan teori probabilitas.
* **Kekuatan Ukuran Data**: Dataset memiliki skala besar (79.583 observasi pasien) sehingga representatif untuk menguji teori distribusi frekuensi, aturan empiris, hukum probabilitas, dan simulasi penarikan sampel.

---

## 5. Permasalahan yang Ingin Dipahami
* Bagaimana profil karakteristik pemusatan (mean, median, modus) serta variabilitas usia dan tekanan darah pada pasien?
* Bagaimana distribusi frekuensi kelompok usia jika diatur menggunakan Aturan Sturges?
* Seberapa besar peningkatan peluang serangan jantung pada pasien dengan faktor komorbiditas tertentu (diabetes, hipertensi, perokok)?
* Berapa peluang posterior seorang pasien memiliki riwayat penyakit tertentu jika ia telah terdiagnosis serangan jantung (pendekatan Teorema Bayes)?
* Bagaimana perilaku rata-rata sampel ketika ukuran sampel diperbesar sesuai prinsip Teorema Limit Pusat (CLT)?

---

## 6. Manfaat Analisis Data
* **Manfaat Akademis**: Mempraktikkan konsep silabus statistika semester 3 (ukuran pemusatan dan penyebaran, peluang bersyarat, Teorema Bayes, distribusi Binomial, Poisson, Normal, hingga CLT) menggunakan data empiris nyata.
* **Manfaat Praktis / Klinis**: Menyajikan informasi kuantitatif berbasis bukti (*evidence-based*) mengenai besaran risiko relatif komorbiditas yang dapat dimanfaatkan untuk edukasi dan skrining kesehatan preventif.

---

## 7. Asal Dataset dan Tautan Sumber
* **Platform**: Kaggle Datasets
* **Nama Dataset**: *Heart Attack CSV Dataset*
* **Pengunggah**: `headsetbagus12`
* **Tautan Sumber**: https://www.kaggle.com/datasets/headsetbagus12/heart-attack-csv-dataset
* **Lokasi Berkas Lokal**: `dataset/dataset_serangan_jantung.csv`

---

## 8. Jumlah Baris dan Kolom
* **Jumlah Baris**: 79.583 baris data observasi pasien
* **Jumlah Kolom**: 16 kolom atribut rekam medis

---

## 9. Gambaran Umum Isi Data
Dataset memuat catatan medis pasien yang mencakup:
* Identitas unik rekam medis (`patient_id`).
* Karakteristik demografi dasar (jenis kelamin dan usia).
* Pemeriksaan fisik dan hemodinamik (BMI, tekanan darah sistolik, kapasitas paru FEV1).
* Pola gaya hidup (kebiasaan merokok).
* Riwayat diagnosis komorbiditas kronis (hipertensi tertangani, riwayat keluarga, fibrilasi atrium, ginjal kronis, artritis reumatoid, diabetes, PPOK).
* Durasi masa pemantauan (`time_to_event_or_censoring`) dan luaran klinis akhir kejadian serangan jantung (`heart_attack`).

---

## 10. Nama dan Pengertian Variabel

| No | Nama Variabel | Pengertian / Definisi Operasional |
| :---: | :--- | :--- |
| 1 | `patient_id` | Nomor identitas unik rekam medis pasien |
| 2 | `gender` | Jenis kelamin pasien (M = Laki-laki, F = Perempuan) |
| 3 | `age` | Usia pasien dalam satuan tahun bulat (18 s.d. 79 tahun) |
| 4 | `body_mass_index` | Indeks Massa Tubuh / BMI pasien dalam satuan kg/m^2 |
| 5 | `smoker` | Status kebiasaan merokok aktif (0 = Tidak, 1 = Ya) |
| 6 | `systolic_blood_pressure` | Tekanan darah sistolik dalam satuan mmHg |
| 7 | `hypertension_treated` | Status penanganan medis untuk hipertensi (0 = Tidak, 1 = Ya) |
| 8 | `family_history_of_cardiovascular_disease` | Riwayat penyakit kardiovaskular pada keluarga kandung (0 = Tidak, 1 = Ya) |
| 9 | `atrial_fibrillation` | Diagnosis fibrilasi atrium / gangguan irama bilik jantung (0 = Tidak, 1 = Ya) |
| 10 | `chronic_kidney_disease` | Riwayat diagnosis penyakit ginjal kronis (0 = Tidak, 1 = Ya) |
| 11 | `rheumatoid_arthritis` | Riwayat penyakit radang sendi autoimun / artritis reumatoid (0 = Tidak, 1 = Ya) |
| 12 | `diabetes` | Riwayat diagnosis penyakit kencing manis / diabetes melitus (0 = Tidak, 1 = Ya) |
| 13 | `chronic_obstructive_pulmonary_disorder` | Riwayat penyakit paru obstruktif kronis / PPOK (0 = Tidak, 1 = Ya) |
| 14 | `forced_expiratory_volume_1` | Volume hembusan napas paksa pada detik pertama / FEV1 (liter) |
| 15 | `time_to_event_or_censoring` | Durasi waktu pemantauan hingga serangan jantung atau penyensoran (tahun) |
| 16 | `heart_attack` | Label target kejadian serangan jantung (0 = Tidak Mengalami, 1 = Mengalami) |

---

## 11. Jenis Data: Kategorikal, Numerik Diskret, atau Numerik Kontinu

1. **Kategorikal (Skala Nominal)**:
   * Pengenal data: `patient_id` (kode teks alfanumerik unik).
   * Kualitatif biner: `gender` (kategori M dan F).
   * Indikator status klinis biner (nilai 0 / 1): `smoker`, `hypertension_treated`, `family_history_of_cardiovascular_disease`, `atrial_fibrillation`, `chronic_kidney_disease`, `rheumatoid_arthritis`, `diabetes`, `chronic_obstructive_pulmonary_disorder`, dan `heart_attack`.
2. **Numerik Diskret (Skala Rasio)**:
   * `age`: Usia pasien dalam bilangan bulat hasil pencacahan (rentang 18 s.d. 79 tahun).
   * `time_to_event_or_censoring`: Lama observasi tahunan bulat (rentang 1 s.d. 10 tahun).
3. **Numerik Kontinu (Skala Rasio)**:
   * `body_mass_index`: Nilai BMI riil hasil pengukuran fisik (rentang 15,2 s.d. 55,3 kg/m^2).
   * `systolic_blood_pressure`: Pengukuran tekanan darah kontinu (rentang 50 s.d. 208 mmHg).
   * `forced_expiratory_volume_1`: Pengukuran kapasitas paru kontinu (satuan liter).

---

## 12. Variabel yang Berpotensi Dianalisis
* **Variabel Numerik Utama**: `age` dan `systolic_blood_pressure` (dianalisis ukuran pemusatan, penyebaran, aturan Sturges, distribusi normal, dan Central Limit Theorem).
* **Variabel Komorbiditas Utama**: `diabetes`, `atrial_fibrillation`, `chronic_kidney_disease`, `smoker`, dan `family_history_of_cardiovascular_disease` (dianalisis peluang bersyarat, Relative Risk, dan Teorema Bayes).
* **Variabel Luaran Target**: `heart_attack` (sebagai variabel dependen pembanding kelompok dan target probabilitas).

---

## 13. Pertanyaan yang Ingin Dijawab
1. Berapa nilai rata-rata, median, dan modus dari usia serta tekanan darah sistolik pasien?
2. Bagaimana pola sebaran data usia jika dikelompokkan dalam kelas interval Aturan Sturges?
3. Berapa probabilitas dasar (*prior probability*) kejadian serangan jantung di seluruh populasi?
4. Apakah pasien dengan riwayat diabetes, fibrilasi atrium, atau ginjal kronis memiliki peluang serangan jantung yang lebih tinggi dibandingkan pasien tanpa riwayat tersebut?
5. Jika seorang pasien diketahui mengalami serangan jantung, berapa probabilitas bahwa pasien tersebut memiliki riwayat diabetes atau perokok (Teorema Bayes)?
6. Apakah tekanan darah sistolik mematuhi Aturan Empiris Distribusi Normal (68-95-99.7%) dan berapa probabilitas pasien mengalami hipertensi tahap lanjut ($SBP \ge 140$ mmHg)?
7. Bagaimana pengaruh pertambahan ukuran sampel ($n = 5, 30, 100, 500$) terhadap bentuk distribusi rata-rata sampel usia sesuai Teorema Limit Pusat (CLT)?

---

## 14. Statistik Deskriptif yang Akan Digunakan
* **Ukuran Pemusatan Data (*Central Tendency*)**:
  * Mean (Rata-rata hitung), Median (Nilai tengah), Modus (Nilai terbanyak).
* **Ukuran Letak Data**:
  * Kuartil 1 ($Q_1$), Median ($Q_2$), Kuartil 3 ($Q_3$), serta Jangkauan Antarkuartil ($IQR = Q_3 - Q_1$).
* **Ukuran Penyebaran Data (*Dispersion*)**:
  * Jangkauan (*Range*), Varians Sampel ($s^2$), Standar Deviasi ($s$), Standar Galat Rata-rata ($SE_{\bar{x}}$), Deviasi Rata-rata Absolut (*MAD*), dan Koefisien Variasi ($CV$).
* **Ukuran Bentuk Distribusi**:
  * Kemencengan (*Skewness*) dan Keruncingan (*Kurtosis*).
* **Distribusi Frekuensi Berkelompok**:
  * Formula Aturan Sturges: $k = 1 + 3{,}322 \log_{10}(n)$ menghasilkan 18 kelas interval usia dengan lebar kelas $c = 4$ tahun.
* **Deteksi Pencilan (*Outliers*)**:
  * Metode Pagar Tukey (*Tukey's Fences*): Batas Bawah = $Q_1 - 1{,}5 \times IQR$, Batas Atas = $Q_3 + 1{,}5 \times IQR$.

---

## 15. Rencana Visualisasi Data
* **Histogram dan Garis KDE**: Menampilkan bentuk kurva frekuensi usia dan tekanan darah serta garis penanda posisi mean, median, dan modus.
* **Kurva Ogive (Positif dan Negatif)**: Memperlihatkan akumulasi frekuensi kumulatif usia pasien ("kurang dari" dan "lebih dari").
* **Diagram Batang (*Bar Chart*)**: Menyajikan perbandingan frekuensi kejadian serangan jantung, proporsi gender, dan prevalensi komorbiditas.
* **Boxplot Komparatif**: Membandingkan sebaran usia dan tekanan darah antara kelompok pasien serangan jantung vs bukan serangan jantung untuk mendeteksi pencilan dan disparitas nilai.
* **Kurva PMF & CDF Distribusi Binomial & Poisson**: Visualisasi sebaran peluang jumlah kasus serangan jantung pada kelompok sampel $n = 30$.
* **Kurva Distribusi Normal & Arsir Skor Z**: Memvisualisasikan kurva lonceng Gauss tekanan darah sistolik dan area probabilitas hipertensi tahap lanjut.
* **Grafik Konvergensi Teorema Limit Pusat (CLT)**: Menampilkan 4 panel histogram distribusi sampling rata-rata usia pada sampel $n = 5, 30, 100, 500$.

---

## 16. Konsep Probabilitas yang Berpotensi Diterapkan
* **Aksioma Probabilitas Kolmogorov & Komplemen**: Pengujian ruang sampel dan verifikasi $P(A^c) = 1 - P(A)$.
* **Aturan Penjumlahan Peluang**: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
* **Peluang Bersyarat (*Conditional Probability*)**: $P(\text{HA} \mid B) = \frac{P(\text{HA} \cap B)}{P(B)}$ untuk mengukur risiko bersyarat.
* **Risiko Relatif (*Relative Risk* / RR)**: Rasio risiko kelompok dengan komorbid dibandingkan kelompok tanpa komorbid.
* **Uji Independensi Stokastik**: Membandingkan $P(\text{HA} \cap B)$ dengan $P(\text{HA}) \times P(B)$.
* **Teorema Bayes & Probabilitas Total**: Menghitung probabilitas posterior faktor risiko jika diketahui pasien menderita serangan jantung:
  $$P(B_i \mid \text{HA}) = \frac{P(\text{HA} \mid B_i) \cdot P(B_i)}{P(\text{HA})}$$
* **Distribusi Peubah Acak Diskrit**: Distribusi Binomial ($B(n, p)$) dan aproksimasi Poisson ($\text{Pois}(\lambda)$).
* **Distribusi Peubah Acak Kontinu & Standarisasi Skor Z**: Distribusi Normal Gauss dan perhitungan $Z = \frac{X - \mu}{\sigma}$.
* **Central Limit Theorem (CLT) & Selang Kepercayaan**: Distribusi sampling rata-rata dan perhitungan Selang Kepercayaan 95% ($CI_{95\%}$).

---

## 17. Hasil Pemeriksaan Kesiapan Dataset
* **Integritas Struktur**: Data terbaca utuh sebanyak 79.583 baris dan 16 kolom tanpa anomali pemisah atau baris korup.
* **Kelengkapan Kolom**:
  * 13 kolom berkondisi lengkap 100% (0 missing values), meliputi variabel vital target `heart_attack`, usia `age`, gender, status merokok, dan komorbiditas klinis.
  * 3 kolom memiliki nilai kosong:
    * `body_mass_index`: 23.832 data kosong (29,95%)
    * `systolic_blood_pressure`: 7.815 data kosong (9,82%)
    * `forced_expiratory_volume_1`: 55.253 data kosong (69,43%)
* **Status Kesiapan**: **Sangat Siap dan Layak Digunakan**. Seluruh variabel inti analisis memiliki catatan lengkap dan valid.

---

## 18. Kendala yang Ditemukan dan Solusi
* **Kendala 1: Nilai Kosong pada Variabel Klinis Tertentu**:
  * Variabel FEV1 (69,43%) dan BMI (29,95%) memiliki missing values yang cukup besar.
  * *Solusi yang Diterapkan*: Menerapkan metode *Complete-Case Analysis per Variabel*. Analisis dilakukan pada data yang valid untuk variabel bersangkutan tanpa menghapus baris observasi secara keseluruhan, sehingga keutuhan populasi (79.583 pasien) tetap terjaga.
* **Kendala 2: Ketimpangan Proporsi Kejadian Target (*Class Imbalance*)**:
  * Pasien serangan jantung hanya mencakup 6,64% (5.288 pasien), sedangkan pasien non-serangan jantung mencapai 93,36% (74.295 pasien).
  * *Solusi yang Diterapkan*: Evaluasi risiko dilakukan menggunakan metrik relatif seperti *Relative Risk* (RR), peluang bersyarat, dan pembalikan probabilitas Teorema Bayes, bukan sekadar membandingkan frekuensi absolut.

---

## 19. Rencana Analisis Selanjutnya
* **Pemodelan Regresi Logistik Multivariat**: Memodelkan interaksi simultan seluruh faktor risiko untuk menakar kontribusi independen masing-masing variabel komorbiditas.
* **Pengujian Hipotesis Inferensial Formal**: Melakukan uji beda rata-rata (Two-Sample Welch t-test untuk usia), uji independensi Chi-square, dan ANOVA satu arah pada tekanan darah.
* **Pengembangan Stratifikasi Risiko Klinis**: Menyusun matriks skoring risiko berbasis Teorema Bayes untuk mendukung klasifikasi dini kelompok berisiko tinggi.
* **Validasi Silang Model (Cross-Validation)**: Menguji ketepatan dan kestabilan parameter penduga pada subsampel independen guna mencegah overfitting.
