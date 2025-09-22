// Isi dropdown tahun secara dinamis
const tahunSelect = document.getElementById('tahun');
const tahunSekarang = new Date().getFullYear();
for (let i = tahunSekarang; i >= tahunSekarang - 20; i--) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = i;
  tahunSelect.appendChild(option);
}

// Ambil bulan & tahun hari ini
const today = new Date();
const bulanSekarang = today.toLocaleString('id-ID', { month: 'long' });
const tahunNow = today.getFullYear();

// Set bulan sekarang ke select
document.getElementById('bulan').value =
  bulanSekarang.charAt(0).toUpperCase() + bulanSekarang.slice(1);

// Set tahun sekarang ke select
document.getElementById('tahun').value = tahunNow;

// Tombol batal
document.getElementById('batal-btn').addEventListener('click', function () {
  window.location.href = 'index.html';
});

// Tombol lanjut
document.getElementById('lanjut-btn').addEventListener('click', function () {
  const bulan = document.getElementById('bulan').value;
  const tahun = document.getElementById('tahun').value;

  if (!bulan || !tahun) {
    alert('Pilih bulan dan tahun!');
    return;
  }

  const data = JSON.parse(localStorage.getItem('catatanBulan')) || [];
  data.push({ bulan, tahun });
  localStorage.setItem('catatanBulan', JSON.stringify(data));
  window.location.href = 'index.html';
});
