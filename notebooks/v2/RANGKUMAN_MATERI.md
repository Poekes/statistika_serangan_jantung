# Ringkasan Materi Statistika dan Teori Probabilitas (Semester 3)

Dokumen ini memuat ringkasan konsep, definisi matematis, rumus utama, serta interpretasi praktis dari 7 topik materi perkuliahan statistika dan probabilitas tingkat semester 3. Ringkasan ini dirancang ringkas, padat, dan jelas sebagai rujukan pemahaman konseptual mandiri.

---

## 1. Pengantar Statistika dan Jenis Data

### 1.1 Definisi Statistika
* **Statistika**: Cabang ilmu matematika terapan yang mempelajari metode pengumpulan, pengorganisasian, penyajian, analisis, dan penarikan kesimpulan dari data dalam kondisi ketidakpastian.
* **Statistika Deskriptif**: Metode untuk merangkum, mengorganisasi, dan menyajikan karakteristik data sampel atau populasi secara informatif (melalui tabel, grafik, ukuran pemusatan, dan ukuran penyebaran) tanpa membuat generalisasi pada populasi yang lebih luas.
* **Statistika Inferensial**: Metode yang menggunakan data sampel untuk membuat estimasi parameter, menguji hipotesis, dan menarik generalisasi mengenai populasi yang lebih besar.

### 1.2 Taksonomi dan Skala Pengukuran Data
1. **Data Kualitatif (Kategorik)**: Berupa label, klasifikasi, atau atribut verbal/non-numerik.
   * **Skala Nominal**: Kategori yang tidak memiliki urutan atau tingkatan logis. Operasi matematika tidak bermakna selain menghitung frekuensi.
     * *Contoh*: Jenis kelamin (Laki-laki/Perempuan), status merokok (Ya/Tidak), diagnosis serangan jantung (0/1).
   * **Skala Ordinal**: Kategori yang memiliki tingkatan atau urutan alami, namun selisih/jarak antarperingkat tidak bernilai seragam atau tidak dapat diukur secara eksak.
     * *Contoh*: Stadium hipertensi (Pra-hipertensi, Stadium 1, Stadium 2), tingkat keparahan nyeri (Ringan, Sedang, Berat).
2. **Data Kuantitatif (Numerik)**: Berupa angka riil hasil perhitungan atau pengukuran instrumen.
   * **Skala Interval**: Angka memiliki interval jarak yang tetap dan seragam, tetapi **tidak memiliki nilai nol mutlak** (angka nol tidak berarti ketiadaan atribut).
     * *Contoh*: Suhu Celsius/Fahrenheit, tahun kalender.
   * **Skala Rasio**: Angka memiliki interval tetap dan **memiliki nilai nol mutlak** (*true zero*). Operasi perkalian dan rasio perbandingan bermakna penuh.
     * *Contoh*: Usia (tahun), tekanan darah sistolik (mmHg), indeks massa tubuh/BMI (kg/m^2), durasi observasi (tahun).

### 1.3 Sifat Data Numerik
* **Data Diskrit**: Nilai berupa bilangan bulat terhitung (*countable*) hasil pencacahan. Tidak ada nilai pecahan di antara dua bilangan bulat berurutan (contoh: jumlah pasien, jumlah serangan jantung).
* **Data Kontinu**: Nilai dapat menempati sembarang bilangan riil pada suatu selang tertentu (*uncountable*) hasil pengukuran (contoh: tinggi badan, tekanan darah, waktu observasi).

---

## 2. STATISTIKA DESKRIPTIF: Pemusatan Data & Visualisasi

### 2.1 Ukuran Pemusatan Data (*Measures of Central Tendency*)
Ukuran pemusatan menggambarkan nilai tunggal yang paling mewakili pusat sebaran data:
* **Rata-rata Hitung (*Mean* / $\bar{x}$)**:
  $$\bar{x} = \frac{1}{n} \sum_{i=1}^n x_i$$
  * *Sifat*: Mengikutsertakan seluruh nilai data. Sangat sensitif terhadap nilai pencilan (*outliers*).
* **Median ($Me$)**:
  Nilai tengah dari sekumpulan data yang telah diurutkan dari terkecil ke terbesar.
  * *Sifat*: Resistan (*robust*) terhadap nilai ekstrem. Ukuran pusat terbaik untuk data yang menceng (*skewed*).
* **Modus ($Mo$)**:
  Nilai pengamatan yang memiliki frekuensi kemunculan tertinggi.
  * *Sifat*: Dapat digunakan untuk data nominal, ordinal, maupun numerik. Sebuah data bisa tidak memiliki modus, unimodal, bimodal, atau multimodal.

### 2.2 Hubungan Pemusatan dan Bentuk Kemencengan Distribusi
* **Simetris (Normal)**: $\text{Mean} \approx \text{Median} \approx \text{Modus}$
* **Menceng Kanan (*Right-Skewed / Positif*)**: $\text{Mean} > \text{Median} > \text{Modus}$ (ekor kurva memanjang ke kanan)
* **Menceng Kiri (*Left-Skewed / Negatif*)**: $\text{Mean} < \text{Median} < \text{Modus}$ (ekor kurva memanjang ke kiri)

### 2.3 Distribusi Frekuensi Berkelompok & Aturan Sturges
Digunakan untuk meringkas data kontinu berukuran besar ke dalam kelas-kelas interval:
* **Banyaknya Kelas ($k$)**:
  $$k = 1 + 3{,}322 \log_{10}(n)$$
* **Jangkauan Data ($R$)**:
  $$R = x_{\max} - x_{\min}$$
* **Panjang Interval Kelas ($c$)**:
  $$c = \left\lceil \frac{R}{k} \right\rceil$$
* **Elemen Kelas**: Batas Bawah ($BB$), Batas Atas ($BA$), Tepi Bawah ($TB = BB - 0{,}5$), Tepi Atas ($TA = BA + 0{,}5$), dan Titik Tengah ($x_i = \frac{BB + BA}{2}$).

### 2.4 Teknik Visualisasi Data
* **Histogram**: Diagram batang rapat untuk melihat bentuk distribusi frekuensi data kontinu.
* **Kernel Density Estimation (KDE)**: Kurva estimasi halus untuk menggambarkan fungsi kepadatan probabilitas empiris data.
* **Kurva Ogive**:
  * *Ogive Positif*: Grafik garis yang menghubungkan tepi atas dengan frekuensi kumulatif "kurang dari".
  * *Ogive Negatif*: Grafik garis yang menghubungkan tepi bawah dengan frekuensi kumulatif "lebih dari".
* **Bar Chart (Diagram Batang)**: Visualisasi kategori diskrit/nominal yang memiliki celah antarpilar.

---

## 3. STATISTIKA DESKRIPTIF: Penyebaran Data & Dasar Probabilitas

### 3.1 Ukuran Penyebaran Data (*Measures of Dispersion*)
Ukuran penyebaran mendeskripsikan variabilitas atau tingkat homogenitas data di sekitar nilai rata-ratanya:
* **Jangkauan (*Range*)**:
  $$R = x_{\max} - x_{\min}$$
* **Kuartil & Jangkauan Antarkuartil ($IQR$)**:
  * Kuartil membagi data urut menjadi 4 bagian sama besar ($Q_1$ = persentil 25, $Q_2$ = median, $Q_3$ = persentil 75).
  * $$IQR = Q_3 - Q_1$$
* **Deteksi Pencilan Metode Tukey (*Tukey's Fences*)**:
  * Batas Bawah = $Q_1 - 1{,}5 \times IQR$
  * Batas Atas = $Q_3 + 1{,}5 \times IQR$
  * Data di luar batas ini dikategorikan sebagai pencilan (*outliers*).
* **Varians Sampel ($s^2$) dan Standar Deviasi ($s$)**:
  $$s^2 = \frac{1}{n - 1} \sum_{i=1}^n (x_i - \bar{x})^2, \quad s = \sqrt{s^2}$$
  Mengukur rata-rata penyimpangan kuadrat data terhadap mean (pembagi $n-1$ merupakan koreksi Bessel agar tidak bias).
* **Standar Galat Rata-rata (*Standard Error* / $SE_{\bar{x}}$)**:
  $$SE_{\bar{x}} = \frac{s}{\sqrt{n}}$$
  Mengukur tingkat presisi rata-rata sampel dalam menduga rata-rata populasi.
* **Deviasi Rata-rata (*Mean Absolute Deviation* / MAD)**:
  $$\text{MAD} = \frac{1}{n} \sum_{i=1}^n |x_i - \bar{x}|$$
* **Koefisien Variasi ($CV$)**:
  $$CV = \frac{s}{\bar{x}} \times 100\%$$
  Ukuran dispersi relatif bebas satuan untuk membandingkan variabilitas dua variabel yang berbeda skala.
* **Bentuk Distribusi**:
  * *Skewness*: Ukuran ketidaksimetrisan kurva (nilai 0 = simetris).
  * *Kurtosis*: Ukuran keruncingan puncak kurva (nilai 0 = mesokurtik/normal baku, positif = leptokurtik/runcing, negatif = platikurtik/landai).

### 3.2 Dasar Teori Probabilitas
* **Ruang Sampel ($S$)**: Kumpulan seluruh hasil yang mungkin terjadi dari suatu eksperimen acak.
* **Titik Sampel**: Elemen individual di dalam ruang sampel.
* **Peluang Empiris**:
  $$P(A) = \frac{n(A)}{N}$$
* **Aksioma Kolmogorov**:
  1. $0 \le P(A) \le 1$ untuk sembarang kejadian $A$.
  2. $P(S) = 1$.
  3. Untuk kejadian saling lepas ($A \cap B = \emptyset$), $P(A \cup B) = P(A) + P(B)$.
* **Aturan Komplemen**:
  $$P(A^c) = 1 - P(A)$$
* **Aturan Penjumlahan Peluang (Kejadian Tidak Saling Lepas)**:
  $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

---

## 4. PROBABILITAS LANJUTAN: Peluang Bersyarat, Independensi, dan Teorema Bayes

### 4.1 Peluang Bersyarat (*Conditional Probability*)
Peluang terjadinya peristiwa $A$ dengan syarat peristiwa $B$ telah terjadi terlebih dahulu:
$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}, \quad \text{dengan } P(B) > 0$$
* *Aturan Perkalian Peluang*:
  $$P(A \cap B) = P(B) \cdot P(A \mid B) = P(A) \cdot P(B \mid A)$$

### 4.2 Independensi Stokastik (Kejadian Saling Bebas)
Dua kejadian $A$ dan $B$ dikatakan saling independen jika terjadinya $B$ tidak memengaruhi peluang terjadinya $A$. Syarat matematis independensi:
$$P(A \cap B) = P(A) \times P(B) \quad \iff \quad P(A \mid B) = P(A)$$
Jika $P(A \mid B) \ne P(A)$, maka kejadian $A$ dan $B$ saling bergantung (*dependen*).

### 4.3 Risiko Relatif (*Relative Risk* / RR)
Ukuran epidemiologis untuk melihat perbandingan risiko penyakit antara kelompok terpapar (*exposed*) dan kelompok tidak terpapar (*unexposed*):
$$RR = \frac{P(\text{Penyakit} \mid \text{Terpapar})}{P(\text{Penyakit} \mid \text{Tidak Terpapar})}$$
* $RR > 1$: Paparan meningkatkan risiko (faktor risiko positif).
* $RR = 1$: Tidak ada asosiasi antara faktor paparan dan penyakit.
* $RR < 1$: Paparan menurunkan risiko (faktor protektif).

### 4.4 Hukum Probabilitas Total dan Teorema Bayes
Jika ruang sampel terpartisi menjadi kejadian-kejadian saling lepas $B_1, B_2, \dots, B_m$:
* **Hukum Probabilitas Total**:
  $$P(A) = \sum_{i=1}^m P(A \mid B_i) \cdot P(B_i)$$
* **Teorema Bayes**:
  $$P(B_k \mid A) = \frac{P(A \mid B_k) \cdot P(B_k)}{P(A)} = \frac{P(A \mid B_k) \cdot P(B_k)}{\sum_{i=1}^m P(A \mid B_i) \cdot P(B_i)}$$
  * **Prior $P(B_k)$**: Probabilitas awal kondisi sebelum data/bukti baru teramati.
  * **Likelihood $P(A \mid B_k)$**: Peluang bukti $A$ teramati jika kondisi $B_k$ benar.
  * **Posterior $P(B_k \mid A)$**: Probabilitas kondisi $B_k$ yang diperbarui setelah bukti $A$ teramati.

---

## 5. Peubah Acak Diskrit, Nilai Harapan, Distribusi Binomial & Poisson

### 5.1 Peubah Acak Diskrit dan PMF
* **Peubah Acak Diskrit ($X$)**: Variabel yang nilainya berupa bilangan bulat terhitung (*countable*) hasil dari proses stokastik.
* **Fungsi Massa Probabilitas (*Probability Mass Function* / PMF)**:
  $$p(x) = P(X = x)$$
  * *Sifat*: $p(x) \ge 0$ untuk seluruh $x$, dan $\sum_x p(x) = 1$.

### 5.2 Nilai Harapan dan Varians Peubah Acak Diskrit
* **Nilai Harapan ($E[X]$ / $\mu$)**: Rata-rata bobot jangka panjang peubah acak:
  $$E[X] = \mu = \sum_x x \cdot p(x)$$
* **Varians ($\operatorname{Var}(X)$ / $\sigma^2$)**: Tingkat penyebaran peubah acak terhadap nilai harapannya:
  $$\operatorname{Var}(X) = \sigma^2 = \sum_x (x - \mu)^2 \cdot p(x) = E[X^2] - (E[X])^2$$

### 5.3 Distribusi Binomial
Model probabilitas untuk menghitung banyaknya keberhasilan $k$ dari $n$ percobaan Bernoulli yang independen, dengan peluang sukses konstan $p$:
$$P(X = k) = \binom{n}{k} p^k (1 - p)^{n - k}, \quad k = 0, 1, 2, \dots, n$$
* **Nilai Harapan**: $E[X] = np$
* **Varians**: $\operatorname{Var}(X) = np(1 - p)$
* **Standar Deviasi**: $\sigma = \sqrt{np(1 - p)}$

### 5.4 Distribusi Poisson
Model probabilitas untuk menghitung banyaknya kemunculan peristiwa langka (*rare event*) dalam suatu selang interval tertentu (waktu, area, atau kelompok), atau aproksimasi Binomial saat $n$ besar dan $p$ kecil:
$$P(Y = k) = \frac{\lambda^k e^{-\lambda}}{k!}, \quad k = 0, 1, 2, \dots$$
* Parameter $\lambda = n \cdot p$ (rata-rata kejadian dalam interval).
* **Nilai Harapan**: $E[Y] = \lambda$
* **Varians**: $\operatorname{Var}(Y) = \lambda$ (pada Poisson, Mean selalu sama dengan Varians).

---

## 6. Peubah Acak Kontinu: PMF, PDF, dan CDF, Distribusi Normal, Z-Score & Aplikasi

### 6.1 Perbedaan Mendasar PMF vs PDF vs CDF
| Karakteristik | PMF (*Probability Mass Function*) | PDF (*Probability Density Function*) | CDF (*Cumulative Distribution Function*) |
| :--- | :--- | :--- | :--- |
| **Jenis Peubah** | Diskrit | Kontinu | Diskrit maupun Kontinu |
| **Nilai Titik Tunggal** | $P(X = x) = p(x) > 0$ | $P(X = c) = 0$ (selalu nol) | $F(x) = P(X \le x)$ |
| **Perhitungan Peluang** | Penjumlahan langsung: $\sum p(x)$ | Luas area integral: $\int_a^b f(x) dx$ | Selisih nilai CDF: $F(b) - F(a)$ |
| **Sifat Nilai Fungsi** | $0 \le p(x) \le 1$ | $f(x) \ge 0$ (bisa bernilai $> 1$) | Monoton naik: $0 \le F(x) \le 1$ |
| **Total Peluang** | $\sum_x p(x) = 1$ | $\int_{-\infty}^\infty f(x) dx = 1$ | $\lim_{x \to \infty} F(x) = 1$ |

### 6.2 Distribusi Normal (Gauss)
Distribusi probabilitas kontinu simetris berbentuk lonceng (*bell-shaped curve*):
$$f(x) = \frac{1}{\sigma \sqrt{2\pi}} \exp\left( -\frac{(x - \mu)^2}{2\sigma^2} \right), \quad -\infty < x < \infty$$
* Titik puncak berada tepat pada $x = \mu$.
* Lebar kurva ditentukan oleh standar deviasi $\sigma$.

### 6.3 Transformasi Skor Z (*Z-Score*) & Aturan Empiris
Transformasi untuk membakukan variabel $X \sim \mathcal{N}(\mu, \sigma^2)$ ke dalam Distribusi Normal Baku $Z \sim \mathcal{N}(0, 1)$:
$$Z = \frac{X - \mu}{\sigma}$$
* **Interpretasi Nilai Z**: Menyatakan jarak suatu nilai $X$ terhadap rata-rata $\mu$ dalam kelipatan satuan standar deviasi $\sigma$.
* **Aturan Empiris (*Empirical Rule / 68-95-99.7 Rule*)**:
  * Sekitar **68,27%** data berada dalam interval $[\mu - 1\sigma, \mu + 1\sigma]$ ($|Z| \le 1$).
  * Sekitar **95,45%** data berada dalam interval $[\mu - 2\sigma, \mu + 2\sigma]$ ($|Z| \le 2$).
  * Sekitar **99,73%** data berada dalam interval $[\mu - 3\sigma, \mu + 3\sigma]$ ($|Z| \le 3$).
* **Aplikasi Praktis**: Observasi dengan $|Z| > 3$ dikategorikan sebagai kejadian sangat jarang atau pencilan ekstrem. Peluang kumulatif batas klinis (misal hipertensi $SBP \ge 140$) dihitung melalui $1 - \Phi(Z_{140})$.

---

## 7. Populasi & Sampel, Teknik Sampling, Distribusi Sampling, dan Central Limit Theorem (CLT)

### 7.1 Populasi, Sampel, Parameter, dan Statistik
* **Populasi ($N$)**: Kumpulan seluruh elemen atau individu yang menjadi objek penarikan kesimpulan.
* **Sampel ($n$)**: Subhimpunan bagian dari populasi yang diobservasi secara langsung.
* **Parameter**: Ukuran numerik konstan yang mendeskripsikan populasi.
* **Statistik**: Ukuran numerik yang dihitung dari sampel dan berfungsi sebagai penduga (*estimator*) parameter populasi.

| Konsep Ukuran | Parameter Populasi (Konstan) | Statistik Sampel (Variabel Acak) |
| :--- | :---: | :---: |
| **Ukuran Data** | $N$ | $n$ |
| **Rata-rata (*Mean*)** | $\mu$ | $\bar{x}$ |
| **Varians** | $\sigma^2$ (pembagi $N$) | $s^2$ (pembagi $n-1$) |
| **Standar Deviasi** | $\sigma$ | $s$ |
| **Proporsi Sukses** | $p$ | $\hat{p}$ |

### 7.2 Teknik Sampling: Random Sampling vs Stratified Sampling
1. **Simple Random Sampling (SRS)**:
   * Setiap anggota populasi memiliki peluang yang sama persis ($P = 1/N$) untuk terpilih.
   * *Kelebihan*: Mudah diimplementasikan dan bebas dari bias subjektif.
   * *Kekurangan*: Risiko fluktuasi acak pada subkelompok minoritas (*sampling error* lebih tinggi jika populasi heterogen).
2. **Stratified Random Sampling**:
   * Populasi dipisahkan ke dalam subkelompok homogen (*strata*, misal berdasarkan jenis kelamin atau usia), kemudian sampel acak diambil secara proporsional dari tiap stratum:
     $$n_h = n \times \frac{N_h}{N}$$
   * *Kelebihan*: Menjamin keterwakilan seluruh strata dan memperkecil varians estimasi dibandingkan SRS.
   * *Kekurangan*: Memerlukan informasi struktur populasi sebelumnya.

### 7.3 Distribusi Sampling dan Standar Galat
* **Distribusi Sampling**: Distribusi probabilitas yang terbentuk dari seluruh nilai rata-rata sampel berukuran $n$ yang ditarik berulang kali secara independen dari populasi.
* **Nilai Harapan Distribusi Sampling**:
  $$E[\bar{X}] = \mu_{\bar{X}} = \mu$$
* **Standar Galat (*Standard Error* / $\sigma_{\bar{X}}$)**:
  $$\sigma_{\bar{X}} = \frac{\sigma}{\sqrt{n}}$$
  Semakin besar ukuran sampel $n$, penyebaran rata-rata sampel antar kelompok semakin menyempit, sehingga estimasi sampel semakin presisi mendekati parameter populasi $\mu$.

### 7.4 Central Limit Theorem (Teorema Limit Pusat / CLT)
* **Bunyi Teorema**: Jika sampel acak berukuran cukup besar ($n \ge 30$) ditarik dari sembarang populasi dengan rata-rata $\mu$ dan varians $\sigma^2$ berhingga, maka distribusi rata-rata sampel $\bar{X}$ akan mendekati **Distribusi Normal**:
  $$\bar{X} \sim \mathcal{N}\left(\mu, \frac{\sigma^2}{n}\right)$$
  **tanpa mempedulikan bentuk distribusi populasi asalnya** (meskipun distribusi populasinya miring, bimodal, seragam, atau diskrit).
* **Makna Praktis**: Memungkinkan peneliti dan tenaga medis melakukan inferensi statistik (uji hipotesis dan estimasi selang kepercayaan) dengan asumsi normalitas yang kuat meskipun karakteristik populasi sebenarnya tidak berdistribusi normal.

### 7.5 Estimasi Parameter: Selang Kepercayaan (*Confidence Interval* 95%)
Untuk mengestimasi rata-rata populasi $\mu$ dari sampel acak:
$$\text{CI}_{95\%} = \bar{x} \pm t_{\alpha/2, \, df} \times \left(\frac{s}{\sqrt{n}}\right)$$
* Selang kepercayaan 95% berarti jika proses sampling diulang sebanyak 100 kali secara independen, sebanyak 95 selang di antaranya dijamin memuat nilai parameter populasi $\mu$ yang sebenarnya.
