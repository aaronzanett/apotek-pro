// Translates hard-coded Indonesian demo text in the owner workspace into English at render time.
const D: Record<string, string> = {
  "Aging": "Aging", "Aksi": "Actions", "Aksi cepat": "Quick actions", "Aktif": "Active", "Aktif 30 hari": "Active 30 days", "Aktif hari ini": "Active today",
  "Aktifkan opsi yang ingin diterima di POS dan atur biaya per metode.": "Enable the options accepted at POS and set fees per method.",
  "Aktivitas terakhir": "Recent activity", "Akurasi stok": "Stock accuracy", "Alat kesehatan": "Medical devices", "Alergi & gatal": "Allergy & itch", "Alkes": "Medical devices",
  "Aman": "Safe", "Anggota aktif": "Active members", "Antibiotik": "Antibiotics", "Antihistamin": "Antihistamines", "Antrean": "Queue", "Antrean resep": "Prescription queue", "Antri": "Queued",
  "Apoteker": "Pharmacist", "Apoteker Penanggung Jawab": "Responsible Pharmacist", "Apoteker SIPA": "Licensed pharmacist (SIPA)", "Area": "Area", "Asal": "Origin", "Asisten": "Assistant",
  "Asisten Apoteker": "Pharmacy Assistant", "Asuransi": "Insurance", "Asuransi swasta": "Private insurance",
  "Atur satuan dasar dan konversi (mis. 1 Box = 10 Strip = 100 Tablet).": "Set base units and conversions (e.g. 1 Box = 10 Strips = 100 Tablets).",
  "Bahasa": "Language", "Bahasa & wilayah": "Language & region", "Bahasa antarmuka, mata uang, format tanggal, dan zona waktu.": "Interface language, currency, date format, and time zone.",
  "Batal": "Cancel", "Belakang": "Back", "Bergabung": "Joined", "Berita Acara Narkotika": "Narcotics Report", "Berlaku hingga 18 Des 2027": "Valid until Dec 18, 2027", "Berlaku hingga 22 Nov 2026": "Valid until Nov 22, 2026",
  "Bertugas": "On duty", "Biaya transaksi": "Transaction fee", "Botol": "Bottle", "Buat PO baru": "New PO", "Buat PO dari pilihan": "Create PO from selection",
  "Buat PO ke distributor, pantau pengiriman, dan rekonsiliasi penerimaan.": "Create POs to distributors, track deliveries, and reconcile receipts.",
  "Buat berita acara": "Create report", "Buat laporan": "Create report", "Buat, tinjau, dan unduh laporan bisnis apotek.": "Create, review, and download pharmacy business reports.",
  "Buka POS": "Open POS", "Buku kas": "Cash book", "Cabang": "Branch", "Cabang aktif": "Active branches", "Cabang Pusat": "Head Office", "Cari data…": "Search data…",
  "Cari deskripsi atau referensi…": "Search description or reference…", "Cari kategori…": "Search categories…", "Cari kode atau area rak…": "Search shelf code or area…", "Cari metode…": "Search methods…",
  "Cari modul…": "Search modules…", "Cari nama atau email…": "Search name or email…", "Cari nama atau nomor telepon…": "Search name or phone…", "Cari nama atau peran…": "Search name or role…",
  "Cari nama pemasok…": "Search supplier name…", "Cari nama, SKU, atau barcode…": "Search name, SKU, or barcode…", "Cari nomor PO atau pemasok…": "Search PO number or supplier…",
  "Cari nomor atau lingkup…": "Search number or scope…", "Cari nomor atau pemasok…": "Search number or supplier…", "Cari nomor invoice atau kasir…": "Search invoice or cashier…",
  "Cari nomor resep atau pasien…": "Search prescription or patient…", "Cari pelanggan atau invoice…": "Search customer or invoice…", "Cari pemasok atau PO…": "Search supplier or PO…",
  "Cari produk atau batch…": "Search product or batch…", "Cari produk…": "Search products…", "Cari satuan…": "Search units…", "Cari…": "Search…",
  "Catat goods receipt dari pemasok dan transfer stok antar cabang.": "Record goods receipts from suppliers and stock transfers between branches.",
  "Catat pembayaran": "Record payment", "Catat transaksi": "Record transaction", "Catatan arus kas masuk dan keluar dari semua aktivitas apotek.": "Cash inflows and outflows from all pharmacy activity.",
  "Catatan medis": "Medical notes", "Contoh penggunaan": "Usage", "Daftar barang yang perlu dipesan ulang berdasarkan stok minimum & laju penjualan.": "Items to reorder based on minimum stock & sales velocity.",
  "Daftar defecta": "Defecta list", "Daftar outlet": "Outlet list", "Daftar pengguna": "User list", "Daftar produk": "Product list", "Dalam perjalanan": "In transit", "Dasar": "Base",
  "Data berhasil diekspor": "Data exported", "Dengan riwayat kronis": "With chronic history", "Deskripsi": "Description", "Detail transaksi": "Transaction details", "Diabetes": "Diabetes",
  "Digital": "Digital", "Dijadwalkan": "Scheduled", "Dikirim": "Sent", "Diproses": "Processing", "Direktori distributor dan principal yang Anda gunakan.": "Directory of your distributors and principals.",
  "Direktori kontak dan penempatan tim Anda.": "Your team's contacts and assignments.", "Disetujui": "Approved", "Disiapkan": "Preparing", "Diskon": "Discount",
  "Diskon Rp 10.000 diterapkan": "Discount applied", "Diskon dihapus": "Discount removed", "Diterima": "Received", "Ditinjau": "Reviewed", "Diundang": "Invited", "Diundang 2 jam lalu": "Invited 2 hours ago",
  "Dokter": "Doctor", "Dokumen aktif": "Active documents", "Dokumen izin": "License documents", "Draft": "Draft", "E-wallet": "E-wallet", "Email harian": "Daily email", "Estimasi PO": "Estimated PO",
  "Etalase Depan": "Front Display", "Filter": "Filter", "Format invoice": "Invoice format", "Gula darah & insulin": "Blood sugar & insulin", "Habis": "Out of stock", "Hampir penuh": "Nearly full",
  "Harga jual": "Selling price", "Header & footer struk": "Receipt header & footer", "Hitung fisik berkala dan rekonsiliasi dengan stok sistem.": "Periodic physical counts reconciled with system stock.",
  "Hutang ke pemasok": "Owed to suppliers", "Hutang terbuka": "Open payables", "Identitas apotek": "Pharmacy identity", "Informasi": "Information", "Insulin & vaksin": "Insulin & vaccines",
  "Inventaris": "Inventory", "Item": "Items", "Item perlu order": "Items to order", "Item terjual": "Items sold", "Jalankan pemeriksaan kelengkapan otomatis": "Run automatic completeness checks",
  "Jantung & pembuluh darah": "Heart & blood vessels", "Jatuh tempo": "Due date", "Kapasitas": "Capacity", "Kardiovaskular": "Cardiovascular", "Kartu debit": "Debit card", "Kartu kredit": "Credit card",
  "Karyawan apotek": "Pharmacy employees", "Kas": "Cash", "Kasir": "Cashier", "Kasir (POS)": "Cashier (POS)", "Kasir Andi memulai shift": "Cashier Andi started shift", "Kata sandi & 2FA": "Password & 2FA",
  "Kategori": "Category", "Kategori produk": "Product categories", "Kategori utama": "Top category", "Keamanan": "Security", "Kedaluwarsa": "Expiry",
  "Kelola anggota tim, jadwal, dan akses kerja di seluruh cabang.": "Manage team members, schedules, and access across branches.",
  "Kelola cabang apotek Anda — alamat, staf, dan kinerja per outlet.": "Manage your branches — address, staff, and performance per outlet.",
  "Kelola katalog obat & alkes apotek Anda.": "Manage your medicine & device catalog.", "Kelola pemasok, pemesanan ulang, dan performa pengiriman.": "Manage suppliers, reorders, and delivery performance.",
  "Kelola peringatan stok, kedaluwarsa, dan ringkasan harian.": "Manage stock, expiry alerts, and daily summaries.", "Kelola siapa yang dapat masuk ke sistem dan apa perannya.": "Manage who can sign in and their roles.",
  "Kelompokkan produk untuk pencarian & laporan yang lebih rapi.": "Group products for cleaner search & reports.", "Keluar": "Out", "Kemarin": "Yesterday", "Ketersediaan": "Availability", "Keuangan": "Finance",
  "Kode": "Code", "Kolesterol": "Cholesterol", "Konfigurasi metode pembayaran dan perangkat printer.": "Configure payment methods and printers.",
  "Konfigurasi sistem yang berlaku untuk seluruh akun Anda.": "System configuration for your whole account.", "Konseling": "Counseling", "Kontak": "Contact", "Konversi": "Conversion", "Korporat": "Corporate",
  "Kritis": "Critical", "Kunjungan": "Visits", "Kunjungan terakhir": "Last visit", "Laba kotor": "Gross profit", "Laba rugi": "Profit & loss", "Laporan": "Reports", "Laporan terjadwal": "Scheduled reports",
  "Lemari Terkunci": "Locked Cabinet", "Lengkap": "Complete", "Lengkapi informasi untuk melanjutkan.": "Complete the details to continue.", "Lewat": "Overdue", "Lewat jatuh tempo": "Overdue", "Lingkup": "Scope",
  "Log aktivitas": "Activity log", "Lunas": "Paid", "Margin rata-rata": "Avg margin", "Masuk": "In", "Masukkan keterangan…": "Enter a note…", "Mata uang & format angka": "Currency & number format",
  "Mendekati": "Approaching", "Mendekati ED": "Near expiry", "Menipis": "Low", "Menunggu kirim": "Awaiting delivery", "Metode": "Method", "Metode pembayaran": "Payment methods", "Mililiter": "Milliliter",
  "Min.": "Min.", "Modul": "Module", "Mulai opname baru": "Start new stock count", "Mulai sesi konter dalam satu klik.": "Start a counter session in one click.", "Nama": "Name", "Nama produk": "Product name",
  "Nama, logo, alamat, dan informasi izin (SIA, SIPA).": "Name, logo, address, and license info (SIA, SIPA).", "Narkotika": "Narcotics", "Net minggu ini": "Net this week", "Nilai": "Value",
  "Nilai inventaris": "Inventory value", "No.": "No.", "No. opname": "Count no.", "No. resep": "Rx no.", "Nonaktif": "Inactive", "Notifikasi": "Notifications", "Notifikasi WhatsApp": "WhatsApp notifications",
  "Obat bebas": "OTC medicines", "Obat infeksi bakteri": "Bacterial infection drugs", "Obat resep": "Prescription drugs", "Omzet bulan ini": "Revenue this month", "Opname": "Stock count",
  "Opname Cabang Menteng selesai": "Menteng branch stock count completed", "Otentikasi dua langkah, kebijakan kata sandi, dan log audit.": "Two-factor auth, password policy, and audit logs.",
  "Outlet & pengaturan": "Outlets & settings", "Outlet aktif": "Active outlets", "Owner · Semua cabang": "Owner · All branches", "PO aktif": "Active POs", "PO berjalan": "Open POs", "PO bulan ini": "POs this month",
  "PO-2026-0118 telah diterima": "PO-2026-0118 has been received", "PPN, PPh, dan format penomoran invoice.": "VAT, income tax, and invoice numbering.", "Pajak & faktur": "Tax & invoices",
  "Pantau alur dari penerimaan, peracikan, sampai konseling pasien.": "Track the flow from intake and compounding to patient counseling.",
  "Pantau jendela kedaluwarsa untuk diskon, retur, atau pemusnahan.": "Monitor expiry windows for discounts, returns, or disposal.",
  "Pantau performa dan kesiapan operasional setiap cabang.": "Monitor performance and readiness of every branch.", "Pantau perizinan, dokumen wajib, dan jejak audit apotek.": "Track licenses, required documents, and audit trails.",
  "Pantau tagihan pemasok yang belum dibayar dan jadwalkan pembayaran.": "Track unpaid supplier bills and schedule payments.", "Pasien": "Patient", "Pelacakan FEFO per batch dan rak.": "FEFO tracking per batch and shelf.",
  "Pelanggan": "Customer", "Pelanggan umum": "Walk-in customer", "Pemanfaatan": "Utilization", "Pemantauan kedaluwarsa": "Expiry monitoring", "Pemasok": "Supplier", "Pemasok aktif": "Active suppliers",
  "Pemasok utama": "Main supplier", "Pemasok · termin 30 hari": "Supplier · 30-day terms", "Pemasukan hari ini": "Income today", "Pembayaran": "Payment", "Pembayaran & POS": "Payments & POS",
  "Pembayaran berhasil": "Payment successful", "Pembelian": "Purchasing", "Pembelian · menunggu barang": "Purchasing · awaiting goods", "Pembelian, penjualan, stok": "Purchasing, sales, stock",
  "Penanggung jawab": "Person in charge", "Penerimaan & transfer": "Receipts & transfers", "Penerimaan dari PT Kimia Farma berhasil dicatat.": "Receipt from PT Kimia Farma recorded.",
  "Penerimaan minggu ini": "Receipts this week", "Pengaturan apotek": "Pharmacy settings", "Pengaturan diskon": "Discount settings", "Pengaturan pajak": "Tax settings", "Pengeluaran hari ini": "Expenses today",
  "Pengguna": "Users", "Pengguna & peran": "Users & roles", "Penjualan": "Sales", "Penjualan bulan ini": "Sales this month", "Penjualan hari ini": "Sales today", "Penjualan harian": "Daily sales",
  "Penuh": "Full", "Penyesuaian stok": "Stock adjustment", "Peran": "Role", "Peran & hak akses": "Roles & permissions", "Pereda nyeri & demam": "Pain & fever relief", "Pergerakan stok": "Stock movement",
  "Periksa pekerjaan tertunda": "Check pending work", "Peringatan operasional": "Operational alerts", "Periode Agustus 2026": "August 2026 period", "Perlu tindakan": "Needs action",
  "Pernapasan & inhaler": "Respiratory & inhalers", "Perpanjang": "Renew", "Persiapan": "Preparation", "Pertumbuhan": "Growth", "Perubahan tersimpan di data demo perangkat ini.": "Changes saved to this device's demo data.",
  "Petakan lokasi fisik rak untuk pengambilan barang yang lebih cepat.": "Map shelf locations for faster picking.", "Pindai barcode atau cari produk…": "Scan barcode or search products…",
  "Piutang pelanggan": "Customer receivables", "Posisi": "Position", "Potensi kerugian": "Potential loss", "Printer & laci kas": "Printer & cash drawer", "Prioritas": "Priority", "Prioritas tinggi": "High priority",
  "Produk": "Product", "Profil apotek": "Pharmacy profile", "Profil pelanggan dan riwayat untuk pelayanan yang lebih personal.": "Customer profiles and history for personal service.",
  "Psikotropika": "Psychotropics", "Pusat bantuan demo": "Demo help center", "Rak": "Shelf", "Rak penyimpanan": "Storage shelves", "Rata-rata transaksi": "Avg basket", "Referensi": "Reference",
  "Referensi PO": "PO reference", "Referensi invoice": "Invoice reference", "Rendah": "Low", "Resep": "Prescription", "Resep Rx-0091 diserahkan ke pasien": "Rx-0091 dispensed to patient",
  "Resep racikan": "Compounded prescription", "Respirasi": "Respiratory", "Ringkasan nilai stok, ketersediaan, dan kesehatan inventaris seluruh cabang.": "Stock value, availability, and inventory health across branches.",
  "Ringkasan operasional": "Operational summary", "Riwayat penjualan": "Sales history", "SIA Cabang Menteng": "SIA Menteng Branch", "Saldo": "Balance", "Saldo kas": "Cash balance", "Saran order": "Suggested order",
  "Satuan": "Unit", "Satuan dasar": "Base unit", "Satuan produk": "Product units", "Sebagian": "Partial", "Sedang": "Medium", "Sedang bertugas": "On duty", "Sedang disiapkan": "Being prepared",
  "Segera berakhir": "Expiring soon", "Sehat": "Healthy", "Sekarang": "Now", "Selesai": "Completed", "Selesai hari ini": "Completed today", "Selisih": "Variance",
  "Selisih 2 item menunggu persetujuan pemilik.": "2 item variances awaiting owner approval.", "Selisih bersih": "Net variance", "Selisih hari": "Days left", "Selisih terbuka": "Open variances",
  "Seluruh data demo berhasil divalidasi": "All demo data validated", "Semua": "All", "Semua notifikasi ditandai dibaca": "All notifications marked as read",
  "Semua transaksi POS dan resep yang dilayani hari ini.": "All POS transactions and prescriptions served today.", "Sesi bulan ini": "Sessions this month", "Sesi login aktif": "Active login sessions",
  "Sesi stok opname": "Stock count sessions", "Simpan": "Save", "Sisa": "Remaining", "Skor kepatuhan": "Compliance score", "Staf": "Staff", "Stok": "Stock", "Stok Amoxicillin menipis": "Amoxicillin stock low",
  "Stok menipis": "Low stock", "Stok per batch": "Stock per batch", "Stok rendah": "Low stock", "Sudah ED": "Expired", "Suplemen": "Supplements",
  "Tagihan yang belum diterima dari klinik, rumah sakit, atau asuransi.": "Unpaid bills from clinics, hospitals, or insurers.", "Tahap berikutnya": "Next step", "Tambah cabang": "Add branch",
  "Tambah karyawan": "Add employee", "Tambah kategori": "Add category", "Tambah metode": "Add method", "Tambah pelanggan": "Add customer", "Tambah pemasok": "Add supplier", "Tambah peran": "Add role",
  "Tambah produk": "Add product", "Tambah rak": "Add shelf", "Tambah satuan": "Add unit", "Tampil di POS": "Show in POS", "Tanda resep dihapus": "Prescription flag removed", "Tandai semua": "Mark all",
  "Tanggal": "Date", "Telepon": "Phone", "Tentukan modul apa saja yang bisa diakses oleh setiap peran.": "Choose which modules each role can access.", "Terakhir aktif sekarang": "Last active now",
  "Terbuka": "Open", "Terima barang": "Receive goods", "Terima pembayaran": "Receive payment", "Terima resep": "Accept prescription", "Terkirim": "Submitted", "Terlambat": "Late",
  "Terlaris bulan ini": "Best seller this month", "Termin": "Terms", "Tersedia": "Available", "Tersisa 12 strip, di bawah batas reorder 20.": "12 strips left, below reorder level 20.",
  "Tertunda undangan": "Pending invites", "Tidak ada proses yang tertunda lebih dari 24 jam": "No process pending over 24 hours",
  "Tim dukungan tersedia Senin–Jumat, 08.00–17.00 WIB.": "Support is available Mon–Fri, 08:00–17:00 WIB.", "Tinggi": "High",
  "Tinjau batch dengan masa simpan kurang dari 30 hari.": "Review batches with under 30 days of shelf life.", "Tipe": "Type", "Total hutang": "Total payables", "Total karyawan": "Total employees",
  "Total pelanggan": "Total customers", "Total pemasok": "Total suppliers", "Total pembelian": "Total purchases", "Total pengguna": "Total users", "Total piutang": "Total receivables",
  "Total produk": "Total products", "Total staf": "Total staff", "Total stok": "Total stock", "Transaksi": "Transactions", "Transaksi demo tercatat dan pembayaran telah terverifikasi.": "Demo transaction recorded and payment verified.",
  "Transaksi ditandai sebagai resep": "Transaction marked as prescription", "Transaksi ditunda": "Transaction on hold", "Tren penjualan": "Sales trend", "Tunai": "Cash", "Tunda": "Hold", "Turunan": "Derived",
  "Undang anggota": "Invite member", "Undang pengguna": "Invite user", "Undangan": "Invitations", "Unggah dokumen": "Upload document", "Utama": "Primary", "Valid": "Valid",
  "Validasi aktivitas yang memerlukan tindak lanjut": "Validate activities needing follow-up", "Validasi data": "Validate data", "Vitamin & mineral": "Vitamins & minerals", "Waktu": "Time",
  "Waktu layanan": "Service time", "Zona waktu": "Time zone", "berdasarkan harga terakhir": "based on latest price", "perlu tinjauan": "needs review", "Lina": "Lina",
  "Hutang": "Payables", "Piutang": "Receivables", "Tim": "Team", "Pengaturan": "Settings", "Dasbor": "Dashboard", "Suplai": "Supply", "Stok Opname": "Stock Count", "Stok Produk": "Product Stock",
  "Stok Kedaluwarsa": "Expired Stock", "Buku Kas": "Cash Book", "Karyawan": "Employees", "Kepatuhan": "Compliance", "Metode Pembayaran": "Payment Methods", "Peran & Akses": "Roles & Access",
  "Satuan dasar ": "Base unit", "Shift 08.00–16.00": "Shift 08:00–16:00", "Semua cabang · Hari ini": "All branches · Today", "Semua cabang · September": "All branches · September",
  "Cabang Menteng · September": "Menteng Branch · September", "Tunai · 18 produk": "Cash · 18 products", "Termin 21 hari · 31 produk": "21-day terms · 31 products", "Termin 30 hari · 42 produk": "30-day terms · 42 products",
  "Transfer stok 12 item ke Cabang Kemang": "Stock transfer of 12 items to Kemang branch", "Transfer cabang": "Branch transfer", "Seluruh apotek": "Entire pharmacy",
  "Rak B-01 (Antibiotik)": "Shelf B-01 (Antibiotics)", "Hari ini": "Today", "hari": "days", "Lihat": "View", "Hapus": "Delete", "Ubah": "Edit", "Tutup": "Close", "Konfirmasi": "Confirm", "Bayar": "Pay",
  "Baru": "New", "Siap": "Ready", "Diserahkan": "Dispensed", "Diracik": "Compounded", "Verifikasi": "Verification", "Racik": "Compound", "Serahkan": "Dispense",
};

Object.assign(D, { "Cari manual": "Manual search", "Akses cepat": "Quick access", "Bayar sekarang": "Pay now", "Ekspor": "Export", "Analgesik": "Analgesics", "PPN 11%": "VAT 11%", "Masker 5pc": "Mask 5pc", "+ Tambah outlet": "+ Add outlet", "Tambah outlet": "Add outlet", "Semua beroperasi": "All operational", "Stok dan opname": "Stock and counts" });
const WORDS: Array<[RegExp, string]> = [
  [/\bJatuh tempo\b/g, "Due"], [/\bTransaksi\b/g, "Transaction"], [/\bhari\b/g, "days"], [/\bunit\b/g, "units"], [/\bstaf\b/g, "staff"], [/\bproduk\b/g, "products"], [/\bterjual\b/g, "sold"], [/\bdari kemarin\b/g, "from yesterday"],
  [/\bjam lalu\b/g, "hours ago"], [/\bmenit lalu\b/g, "minutes ago"], [/\bCabang (\w+)/g, "$1 Branch"], [/\bSemua cabang\b/g, "All branches"], [/\bdalam (\d+) hari/g, "within $1 days"],
  [/\baktif di katalog\b/g, "active in catalog"], [/\brata-rata\b/g, "average"], [/\bkritis\b/g, "critical"], [/\brendah\b/g, "low"], [/\bpemasok utama\b/g, "main suppliers"],
  [/\bcabang\b/g, "branches"], [/\bTarget\b/g, "Target"], [/\bBaik\b/g, "Good"], [/\bBerikutnya besok\b/g, "Next tomorrow"], [/\bMenunggu diterima\b/g, "Awaiting acceptance"],
  [/\bShift pagi\b/g, "Morning shift"], [/\bPerlu tindak lanjut\b/g, "Needs follow-up"], [/\btepat waktu\b/g, "on time"], [/\bterlambat\b/g, "late"], [/\bmutasi\b/g, "movements"], [/\bbutuh klarifikasi\b/g, "needs clarification"],
  [/\bitem\b/g, "items"], [/\bstrip\b/g, "strips"], [/\bberhasil\b/g, "successfully"], [/\bditambahkan\b/g, "added"], [/\bdisimpan\b/g, "saved"], [/\bdiperbarui\b/g, "updated"],
];

function rupiahToUsd(text: string) {
  return text.replace(/([+-]?)Rp\s?([\d.]+(?:,\d+)?)\s?(jt|rb|k)?/g, (_m, sign, num, suf) => {
    let v = parseFloat(num.replace(/\./g, "").replace(",", "."));
    if (suf === "jt") v *= 1e6; else if (suf === "rb" || suf === "k") v *= 1e3;
    const usd = v / 16000;
    const s = usd >= 1000 ? `$${(usd / 1000).toFixed(1)}k` : `$${usd < 10 ? usd.toFixed(2) : Math.round(usd).toLocaleString("en-US")}`;
    return sign + s;
  });
}

export function translateId(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return raw;
  const lead = raw.slice(0, raw.indexOf(trimmed)); const trail = raw.slice(raw.indexOf(trimmed) + trimmed.length);
  const base = trimmed.replace(/ — Apotek Pro$/, "");
  let out: string;
  if (D[trimmed]) out = D[trimmed];
  else if (D[base]) out = `${D[base]} — Apotek Pro`;
  else {
    out = trimmed.split(/( · | — )/).map((part) => D[part] ?? part).join("");
    if (out === trimmed) for (const [re, rep] of WORDS) out = out.replace(re, rep);
  }
  out = rupiahToUsd(out).replace(/(\d)\.(\d{3})\b/g, "$1,$2");
  return lead + out + trail;
}

const ATTRS = ["placeholder", "aria-label", "title"];
type Orig = { text?: string; attrs?: Record<string, string> };

export function startAutoTranslate(root: HTMLElement) {
  const orig = new WeakMap<Node, Orig>();
  let busy = false;
  const doText = (node: Text) => {
    const cur = node.data; const o = orig.get(node);
    if (o?.text !== undefined && translateId(o.text) === cur) return;
    const tr = translateId(cur);
    if (tr !== cur) { orig.set(node, { text: cur }); node.data = tr; }
  };
  const doEl = (el: Element) => {
    for (const a of ATTRS) {
      const v = el.getAttribute(a); if (!v) continue;
      const o = orig.get(el) ?? { attrs: {} }; o.attrs ??= {};
      if (o.attrs[a] !== undefined && translateId(o.attrs[a]) === v) continue;
      const tr = translateId(v);
      if (tr !== v) { o.attrs[a] = v; orig.set(el, o); el.setAttribute(a, tr); }
    }
  };
  const walk = (n: Node) => {
    if (n.nodeType === 3) return doText(n as Text);
    if (n.nodeType !== 1) return;
    const el = n as Element; if (el.tagName === "SCRIPT" || el.tagName === "STYLE") return;
    doEl(el); el.childNodes.forEach(walk);
  };
  const run = (fn: () => void) => { if (busy) return; busy = true; try { fn(); } finally { busy = false; } };
  run(() => walk(root));
  const obs = new MutationObserver((muts) => run(() => {
    for (const m of muts) {
      if (m.type === "characterData") doText(m.target as Text);
      else if (m.type === "attributes") doEl(m.target as Element);
      else m.addedNodes.forEach(walk);
    }
  }));
  obs.observe(root, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  return () => {
    obs.disconnect();
    const restore = (n: Node) => {
      const o = orig.get(n);
      if (n.nodeType === 3 && o?.text !== undefined) (n as Text).data = o.text;
      if (n.nodeType === 1) { if (o?.attrs) for (const [a, v] of Object.entries(o.attrs)) (n as Element).setAttribute(a, v); n.childNodes.forEach(restore); }
    };
    restore(root);
  };
}
