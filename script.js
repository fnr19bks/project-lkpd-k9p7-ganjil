/* =========================================================
   SPENLAS DIGITAL JOURNALIST — script.js
   LKPD Informatika Kelas 9 · CMS/Blog dan Etika Publikasi
   SMP Negeri 19 Kota Bekasi
   ========================================================= */

/* =========================================================
   1. CONFIG (⚙️ TUNABLE — ubah nilai di sini saja)
   ========================================================= */
const CONFIG = {
  // 🎮 Gameplay
  ENABLE_TIMER: true,
  TIMER_SECONDS: 120,
  ENABLE_SOUND: true,
  ENABLE_CONFETTI: true,
  MAX_SCORE_PER_LEVEL: 100,

  // 🌐 Bahasa
  DEFAULT_LANGUAGE: "id",
  ENABLE_LANGUAGE_TOGGLE: true,

  // 🎨 Tampilan
  DEFAULT_THEME: "light",
  ENABLE_DARK_MODE: true,
  PRIMARY_COLOR: "#1E3A8A",
  SECONDARY_COLOR: "#F59E0B",

  // 🏆 Medali
  MEDAL_GOLD: 360,
  MEDAL_SILVER: 280,
  MEDAL_BRONZE: 200,

  // 📊 Leaderboard
  ENABLE_LEADERBOARD: true,
  MAX_LEADERBOARD_ENTRIES: 10,

  // 📝 Exit Ticket
  ENABLE_EXIT_TICKET: true,
  EXIT_TICKET_MIN_LENGTH: 20,

  // 🖨️ Sertifikat
  ENABLE_CERTIFICATE: true,
  SCHOOL_NAME: "SMP Negeri 19 Kota Bekasi",
  TEACHER_NAME: "Tim MGMP Informatika",

  // 🏷️ Footer (JANGAN DIUBAH)
  FOOTER_TEXT: "LKPD Informatika Kelas 9 · CMS/Blog dan Etika Publikasi · © 2026 SMP Negeri 19 Kota Bekasi"
};

/* =========================================================
   2. KAMUS DWIBAHASA (I18N)
   ========================================================= */
const I18N = {
  id: {
    brandSub: "LKPD Interaktif · CMS/Blog & Etika Publikasi",
    score: "SKOR (SCORE)",
    level: "LEVEL",
    time: "WAKTU (TIME)",
    heroSub: "Misi: Menjadi Jurnalis Sekolah yang Beretika!",
    nameLabel: "Nama Jurnalis (Journalist Name) — opsional (optional)",
    namePlaceholder: "Contoh: Rani",
    btnStart: "MULAI MISI (START MISSION)",
    btnLearn: "📚 BELAJAR DULU (LEARN FIRST)",
    learnTitle: "📚 Ringkasan Materi (Material Summary)",
    briefTitle: "📖 Pengarahan Misi (Mission Briefing)",
    mi1: "Tulis (Write)",
    mi2: "Gambar (Image)",
    mi3: "Label (Tag)",
    btnReady: "SAYA SIAP! (I'M READY!)",
    mapTitle: "🗺️ Peta Misi (Mission Map)",
    mapSub: "Selesaikan setiap level secara berurutan untuk membuka level berikutnya.",
    btnBackMap: "← PETA MISI (MISSION MAP)",
    btnHint: "❓ PETUNJUK (HINT)",
    totalScore: "TOTAL SKOR (TOTAL SCORE)",
    exitTitle: "🎫 Exit Ticket (Tiket Keluar)",
    btnSaveReflection: "SIMPAN REFLEKSI (SAVE REFLECTION)",
    btnPrint: "🖨️ UNDUH SERTIFIKAT (PRINT CERTIFICATE)",
    btnPlayAgain: "🔄 MAINKAN LAGI (PLAY AGAIN)"
  },
  en: {
    brandSub: "Interactive Worksheet · CMS/Blog & Publication Ethics",
    score: "SCORE",
    level: "LEVEL",
    time: "TIME",
    heroSub: "Mission: Become an Ethical School Journalist!",
    nameLabel: "Journalist Name — optional",
    namePlaceholder: "e.g. Rani",
    btnStart: "START MISSION",
    btnLearn: "📚 LEARN FIRST",
    learnTitle: "📚 Material Summary",
    briefTitle: "📖 Mission Briefing",
    mi1: "Write",
    mi2: "Image",
    mi3: "Tag",
    btnReady: "I'M READY!",
    mapTitle: "🗺️ Mission Map",
    mapSub: "Complete each level in order to unlock the next one.",
    btnBackMap: "← MISSION MAP",
    btnHint: "❓ HINT",
    totalScore: "TOTAL SCORE",
    exitTitle: "🎫 Exit Ticket",
    btnSaveReflection: "SAVE REFLECTION",
    btnPrint: "🖨️ PRINT CERTIFICATE",
    btnPlayAgain: "🔄 PLAY AGAIN"
  }
};

/* =========================================================
   3. GAME DATA (PERSIS dari materi K9P7 Ganjil)
   ========================================================= */
const GAME_DATA = {
  /* ---------- LEVEL 1 ---------- */
  level1: {
    name: { id: "Kenali CMS-mu!", en: "Know Your CMS!" },
    instruction: {
      id: "Seret (drag) kartu istilah ke kotak definisi yang tepat. Di HP: ketuk istilah, lalu ketuk kotak definisinya. Percobaan pertama bernilai 20 poin; jika sempat salah, nilainya 10 poin.",
      en: "Drag each term card into the correct definition box. On mobile: tap the term, then tap the definition box. First attempt = 20 points; after a mistake = 10 points."
    },
    pairs: [
      {
        id: "cms",
        term: "CMS",
        def: "Perangkat lunak yang membantu membuat, mengelola, dan memodifikasi konten di situs web tanpa perlu menguasai bahasa pemrograman dari nol."
      },
      {
        id: "blogger",
        term: "Blogger",
        def: "Platform CMS yang dikelola Google dan cocok untuk pemula."
      },
      {
        id: "wordpress",
        term: "WordPress",
        def: "Platform CMS populer yang bisa digunakan untuk blog maupun website profesional."
      },
      {
        id: "gsites",
        term: "Google Sites",
        def: "Platform CMS milik Google untuk membuat situs web sederhana."
      },
      {
        id: "metadata",
        term: "Metadata",
        def: "Data yang memberikan informasi tentang data lain, sering berupa Label, Tag, atau Kategori."
      }
    ],
    analogy: "Memakai CMS itu seperti menempati rumah susun yang sudah jadi. Kalian tidak perlu mengaduk semen atau menyusun bata (koding); kalian hanya perlu membawa perabotan (tulisan, foto, video) dan menatanya agar terlihat indah."
  },

  /* ---------- LEVEL 2 ---------- */
  level2: {
    name: { id: "Label & Metadata Challenge", en: "Label & Metadata Challenge" },
    instruction: {
      id: "Blog sekolah SMPN 19 Bekasi membahas kegiatan sekolah. Seret setiap kata kunci ke keranjang yang tepat: 'Label Relevan' atau 'Label Tidak Relevan'. Di HP: ketuk kata, lalu ketuk keranjangnya.",
      en: "The SMPN 19 Bekasi school blog covers school activities. Drag each keyword into the right basket: 'Relevant Label' or 'Irrelevant Label'. On mobile: tap the word, then tap the basket."
    },
    items: [
      { id: "k1", word: "Olahraga", correct: "relevan", reason: "Relevan — Olahraga adalah kegiatan sekolah." },
      { id: "k2", word: "Basket", correct: "relevan", reason: "Relevan — Basket adalah ekstrakurikuler sekolah." },
      { id: "k3", word: "SMPN 19 Bekasi", correct: "relevan", reason: "Relevan — Ini identitas sekolah." },
      { id: "k4", word: "Resep Kue", correct: "tidak", reason: "Tidak relevan — Tidak berhubungan dengan kegiatan sekolah." },
      { id: "k5", word: "Matematika", correct: "relevan", reason: "Relevan — Matematika adalah mata pelajaran sekolah." },
      { id: "k6", word: "Ekstrakurikuler", correct: "relevan", reason: "Relevan — Ekstrakurikuler adalah program sekolah." },
      { id: "k7", word: "Pramuka", correct: "relevan", reason: "Relevan — Pramuka adalah ekstrakurikuler sekolah." },
      { id: "k8", word: "Teknologi", correct: "relevan", reason: "Relevan — Teknologi adalah topik pembelajaran TIK/Informatika." }
    ],
    note: "Metadata memudahkan pembaca dan mesin pencari (seperti Google) menemukan tulisan kita. Jika tidak ada label, informasi seperti tumpukan baju yang tidak dilipat di lemari — susah dicari!"
  },

  /* ---------- LEVEL 3 ---------- */
  level3: {
    name: { id: "Etika atau Pelanggaran?", en: "Ethical or Violation?" },
    instruction: {
      id: "Baca setiap skenario, lalu putuskan: apakah ini ETIS atau PELANGGARAN? Geser kartu ke kanan untuk ETIS, ke kiri untuk PELANGGARAN — atau gunakan tombol di bawah.",
      en: "Read each scenario, then decide: is it ETHICAL or a VIOLATION? Swipe the card right for ETHICAL, left for VIOLATION — or use the buttons below."
    },
    items: [
      {
        id: "s1",
        text: "Menyalin-tempel (copy-paste) seluruh teks dari blog orang lain tanpa menyebutkan sumber.",
        correct: "pelanggaran",
        explain: "Ini plagiarisme. Skor kemiripan bisa 100%."
      },
      {
        id: "s2",
        text: "Membaca informasi dari Wikipedia, lalu menulis ulang dengan bahasa sendiri (parafrasa) dan mencantumkan tautan sumber asli.",
        correct: "etis",
        explain: "Ini cara yang benar: parafrasa + cantumkan sumber."
      },
      {
        id: "s3",
        text: "Mengambil foto dari Google Images, lalu mempostingnya di blog sendiri tanpa izin dan tanpa menyebutkan sumber.",
        correct: "pelanggaran",
        explain: "Melanggar Hak Cipta (Copyright). Setiap foto ada pemiliknya."
      },
      {
        id: "s4",
        text: "Menggunakan gambar gratis berlisensi Creative Commons dari Pexels/Unsplash dan menuliskan sumbernya.",
        correct: "etis",
        explain: "Gambar berlisensi CC boleh dipakai dengan mencantumkan sumber."
      },
      {
        id: "s5",
        text: "Menulis opini/deskripsi minimal 2 paragraf dengan bahasa sendiri tentang kantin sekolah.",
        correct: "etis",
        explain: "Tulisan orisinal, tidak menjiplak."
      },
      {
        id: "s6",
        text: "Mengaku tulisan orang lain sebagai tulisan sendiri.",
        correct: "pelanggaran",
        explain: "Ini definisi plagiarisme."
      },
      {
        id: "s7",
        text: "Menambahkan minimal 2 label (Metadata) pada artikel blog.",
        correct: "etis",
        explain: "Membantu pembaca & mesin pencari menemukan tulisan."
      },
      {
        id: "s8",
        text: "Menyebarkan berita hoaks di grup WhatsApp keluarga tanpa memeriksa kebenarannya.",
        correct: "pelanggaran",
        explain: "Melanggar tanggung jawab warga digital — tidak menyebar kebohongan."
      }
    ]
  },

  /* ---------- LEVEL 4 ---------- */
  level4: {
    name: { id: "Jurnalis Sejati (BONUS)", en: "True Journalist (BONUS)" },
    instruction: {
      id: "Susun artikel blog sekolahmu! Pilih judul, isi paragraf, gambar, caption + sumber, dan 2 label. Sistem akan menilai berdasarkan rubrik etika publikasi.",
      en: "Build your school blog article! Choose a title, paragraph content, image, caption + source, and 2 labels. The system will grade it using the publication ethics rubric."
    },
    titles: [
      {
        id: "tA",
        text: "“Sejarah Stasiun Bekasi” (hasil copy-paste dari blog lain)",
        points: 0,
        note: "Plagiarisme — menyalin tulisan orang lain tanpa izin dan tanpa sumber."
      },
      {
        id: "tB",
        text: "“Eskul Paskibra SMPN 19 Bekasi yang Disiplin” (tulisan sendiri)",
        points: 25,
        note: "Judul orisinal tentang kegiatan sekolah. Hebat!"
      },
      {
        id: "tC",
        text: "“1 Hal Paling Menarik di Sekolah Kami: Kantin Sehat” (tulisan sendiri)",
        points: 25,
        note: "Judul orisinal dan relevan dengan lingkungan sekolah."
      }
    ],
    paragraphs: [
      {
        id: "pA",
        text: "Paragraf hasil salin-tempel dari Wikipedia tanpa sumber.",
        points: 0,
        note: "Copy-paste tanpa sumber = plagiarisme."
      },
      {
        id: "pB",
        text: "Paragraf orisinal hasil parafrasa + cantumkan sumber (tautan asli).",
        points: 25,
        note: "Parafrasa + cantumkan sumber adalah solusi etis yang benar."
      },
      {
        id: "pC",
        text: "Paragraf kosong / tidak diisi.",
        points: 0,
        note: "Artikel tanpa isi tidak layak dipublikasikan."
      }
    ],
    images: [
      {
        id: "iA",
        emoji: "🚫",
        text: "Foto dari Google Images tanpa izin.",
        points: 0,
        note: "Melanggar Hak Cipta (Copyright) — setiap foto ada pemiliknya."
      },
      {
        id: "iB",
        emoji: "📸",
        text: "Foto sendiri (dokumentasi pribadi).",
        points: 25,
        note: "Dokumentasi pribadi aman digunakan dan bebas hak cipta pihak lain."
      },
      {
        id: "iC",
        emoji: "🖼️",
        text: "Gambar gratis berlisensi Creative Commons dari Pexels.",
        points: 25,
        note: "Gambar berlisensi CC boleh dipakai dengan mencantumkan sumber."
      }
    ],
    labels: [
      { id: "l1", text: "Sekolah", points: 12.5 },
      { id: "l2", text: "Ekstrakurikuler", points: 12.5 },
      { id: "l3", text: "Resep Kue", points: 0 },
      { id: "l4", text: "Olahraga", points: 12.5 },
      { id: "l5", text: "Politik", points: 0 },
      { id: "l6", text: "SMPN 19 Bekasi", points: 12.5 }
    ]
  }
};

/* ---------- KAMUS MINI (GLOSSARY) ---------- */
const GLOSSARY = [
  ["CMS", "Content Management System / Sistem Manajemen Konten — perangkat lunak untuk membuat & mengelola konten web tanpa koding dari nol."],
  ["Metadata", "Data tentang data / Label — informasi tentang sebuah konten (label, tag, kategori)."],
  ["Copyright", "Hak Cipta — hak milik pembuat karya atas foto/tulisan/video."],
  ["Plagiarism", "Plagiarisme / Penjiplakan — menyalin karya orang lain dan mengakuinya sebagai milik sendiri."],
  ["Digital Footprint", "Jejak Digital — rekam jejak yang tertinggal selamanya dari aktivitas kita di internet."],
  ["Label", "Kategori / Tag — penanda topik pada artikel agar mudah ditemukan."],
  ["Post", "Entri / Tulisan — artikel yang diterbitkan di blog."],
  ["Publish", "Publikasikan — menerbitkan tulisan agar bisa dibaca publik."],
  ["Draft", "Draf / Rancangan — tulisan yang belum diterbitkan."],
  ["Creative Commons", "Lisensi Karya Bebas Pakai — izin pemakaian karya dengan mencantumkan sumber."],
  ["Parafrasa", "Paraphrase — menulis ulang gagasan orang lain dengan bahasa sendiri."],
  ["Hoaks", "Hoax — berita bohong yang tidak benar dan menyesatkan."]
];

/* =========================================================
   4. STATE & STORAGE
   ========================================================= */
const STORAGE_KEY = "spenlas_dj_state_v1";
const LEADERBOARD_KEY = "spenlas_dj_leaderboard_v1";

const state = {
  playerName: "",
  currentLevel: 0,
  unlocked: 1,
  scores: { 1: 0, 2: 0, 3: 0, 4: 0 },
  completed: { 1: false, 2: false, 3: false, 4: false },
  level3Correct: 0,
  badges: [],
  reflection: "",
  lang: CONFIG.DEFAULT_LANGUAGE,
  theme: CONFIG.DEFAULT_THEME,
  l1: null,
  l2: null,
  l3: null,
  l4: null,
  timerId: null,
  timeLeft: 0,
  levelActive: false,
  levelStartScore: 0,
  pendingNextLevel: null
};

/* =========================================================
   5. UTILITAS
   ========================================================= */
function $(sel, root) { return (root || document).querySelector(sel); }
function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function fmt(n) {
  const r = Math.round(n * 100) / 100;
  return Number.isInteger(r) ? String(r) : String(r);
}

function totalScore() {
  return state.scores[1] + state.scores[2] + state.scores[3] + state.scores[4];
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ---------- LOGO FALLBACK (SVG data-URI, agar jalan tanpa logo.png) ---------- */
const LOGO_FALLBACK = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">' +
  '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
  '<stop offset="0" stop-color="#1E3A8A"/><stop offset="1" stop-color="#2B4FBF"/></linearGradient></defs>' +
  '<rect width="200" height="200" rx="34" fill="url(#g)"/>' +
  '<rect x="40" y="50" width="120" height="76" rx="9" fill="#F8FAFC"/>' +
  '<rect x="50" y="60" width="100" height="56" rx="6" fill="#1E3A8A"/>' +
  '<rect x="28" y="128" width="144" height="14" rx="7" fill="#F59E0B"/>' +
  '<path d="M124 136 l34-34 16 16 -34 34 -22 6z" fill="#F59E0B" stroke="#F8FAFC" stroke-width="4" stroke-linejoin="round"/>' +
  '<circle cx="100" cy="34" r="10" fill="#F59E0B"/>' +
  '</svg>'
);

function attachLogoFallback() {
  $$("img[data-logo]").forEach(function (img) {
    img.addEventListener("error", function () { img.src = LOGO_FALLBACK; }, { once: true });
    if (img.complete && img.naturalWidth === 0) { img.src = LOGO_FALLBACK; }
  });
}

/* ---------- SUARA (Web Audio API — tanpa file eksternal) ---------- */
let audioCtx = null;
function ensureAudio() {
  if (!CONFIG.ENABLE_SOUND) return null;
  try {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      audioCtx = new AC();
    }
    if (audioCtx.state === "suspended") { audioCtx.resume(); }
    return audioCtx;
  } catch (e) { return null; }
}

function beep(kind) {
  const ctx = ensureAudio();
  if (!ctx) return;
  const now = ctx.currentTime;
  try {
    if (kind === "correct") {
      const osc = ctx.createOscillator(); const g = ctx.createGain();
      osc.connect(g); g.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(660, now);
      osc.frequency.setValueAtTime(990, now + 0.09);
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(0.16, now + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
      osc.start(now); osc.stop(now + 0.3);
    } else if (kind === "wrong") {
      const osc = ctx.createOscillator(); const g = ctx.createGain();
      osc.connect(g); g.connect(ctx.destination);
      osc.type = "square";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.24);
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(0.10, now + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
      osc.start(now); osc.stop(now + 0.32);
    } else {
      const notes = [523, 659, 784, 1046];
      notes.forEach(function (f, i) {
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = "triangle"; o.frequency.value = f;
        const t = now + i * 0.12;
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.14, t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
        o.start(t); o.stop(t + 0.32);
      });
    }
  } catch (e) { /* diamkan bila audio tidak tersedia */ }
}

/* ---------- KONFETI ---------- */
function launchConfetti() {
  if (!CONFIG.ENABLE_CONFETTI) return;
  const colors = ["#1E3A8A", "#F59E0B", "#10B981", "#EF4444", "#3B82F6", "#FBBF24"];
  const total = 70;
  for (let i = 0; i < total; i++) {
    const p = document.createElement("div");
    p.className = "confetti-piece";
    p.style.left = Math.random() * 100 + "vw";
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDuration = (2.4 + Math.random() * 2.2) + "s";
    p.style.animationDelay = (Math.random() * 0.9) + "s";
    p.style.width = (7 + Math.random() * 8) + "px";
    p.style.height = (10 + Math.random() * 10) + "px";
    document.body.appendChild(p);
    (function (el) {
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 5600);
    })(p);
  }
}

/* ---------- TOAST ---------- */
let toastTimer = null;
function showToast(msg, ms) {
  const t = $("#toast");
  t.textContent = msg;
  t.hidden = false;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.hidden = true; }, ms || 2400);
}

/* =========================================================
   6. MODAL
   ========================================================= */
let modalOnClose = null;
function openModal(title, bodyHtml, footHtml, onClose) {
  $("#modalTitle").textContent = title;
  $("#modalBody").innerHTML = bodyHtml;
  $("#modalFoot").innerHTML = footHtml || "";
  $("#modalBackdrop").hidden = false;
  modalOnClose = onClose || null;
  const focusTarget = $("#modalFoot button") || $("#modalClose");
  if (focusTarget) focusTarget.focus();
}
function closeModal() {
  $("#modalBackdrop").hidden = true;
  if (typeof modalOnClose === "function") { const cb = modalOnClose; modalOnClose = null; cb(); }
}

/* =========================================================
   7. BAHASA & TEMA
   ========================================================= */
function applyLanguage() {
  const dict = I18N[state.lang] || I18N.id;
  $$("[data-i18n]").forEach(function (el) {
    const k = el.getAttribute("data-i18n");
    if (dict[k] !== undefined) el.textContent = dict[k];
  });
  $$("[data-i18n-ph]").forEach(function (el) {
    const k = el.getAttribute("data-i18n-ph");
    if (dict[k] !== undefined) el.setAttribute("placeholder", dict[k]);
  });
  document.documentElement.setAttribute("lang", state.lang);
  $("#btnLang").textContent = state.lang === "id" ? "🇮🇩 ID" : "🇬🇧 EN";
}

function toggleLanguage() {
  state.lang = state.lang === "id" ? "en" : "id";
  applyLanguage();
  saveState();
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  $("#btnTheme").textContent = state.theme === "dark" ? "☀️" : "🌙";
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  applyTheme();
  saveState();
}

/* =========================================================
   8. NAVIGASI SCREEN
   ========================================================= */
function showScreen(id) {
  $$(".screen").forEach(function (s) { s.classList.remove("is-active"); });
  const target = document.getElementById(id);
  if (target) target.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================================
   9. HUD
   ========================================================= */
function updateHUD() {
  $("#headerScore").textContent = fmt(totalScore());
  $("#headerLevel").textContent = state.currentLevel ? String(state.currentLevel) : "–";
  const pct = Math.min(100, (totalScore() / 400) * 100);
  $("#globalProgress").style.width = pct + "%";
}

function updateTimerUI() {
  const el = $("#headerTimer");
  el.textContent = state.timeLeft + "s";
  const chip = $("#timerChip");
  if (state.timeLeft <= 20) chip.classList.add("warn"); else chip.classList.remove("warn");
}

function startLevelTimer() {
  stopLevelTimer();
  const chip = $("#timerChip");
  if (!CONFIG.ENABLE_TIMER) { chip.hidden = true; return; }
  state.timeLeft = CONFIG.TIMER_SECONDS;
  chip.hidden = false;
  updateTimerUI();
  state.timerId = setInterval(function () {
    state.timeLeft -= 1;
    updateTimerUI();
    if (state.timeLeft <= 0) {
      stopLevelTimer();
      onTimeUp();
    }
  }, 1000);
}

function stopLevelTimer() {
  if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
  $("#timerChip").hidden = true;
}

function onTimeUp() {
  if (!state.levelActive) return;
  state.levelActive = false;
  beep("wrong");
  const lvl = state.currentLevel;
  completeLevel(lvl, "⏰ Waktu Habis! (Time's Up!)",
    "Waktu untuk level ini sudah habis. Skor yang kamu kumpulkan tetap dihitung. Waktu is up for this level. Your collected score is still counted.");
}

/* =========================================================
   10. FEEDBACK BAR
   ========================================================= */
function showFeedback(ok, title, body) {
  const bar = $("#feedbackBar");
  bar.className = "feedback-bar " + (ok ? "ok" : "no");
  bar.innerHTML = "<strong>" + title + "</strong>" + body;
  bar.hidden = false;
}
function clearFeedback() {
  const bar = $("#feedbackBar");
  bar.hidden = true;
  bar.innerHTML = "";
}

/* =========================================================
   11. LEVEL 1 — DRAG & DROP MATCHING
   ========================================================= */
let l1SelectedChip = null;

function renderLevel1() {
  state.l1 = { placed: {}, wrongFirst: {}, correctCount: 0 };
  state.scores[1] = 0;

  const pairs = GAME_DATA.level1.pairs;
  const terms = shuffle(pairs.map(function (p) { return { id: p.id, term: p.term }; }));
  const defs = shuffle(pairs.map(function (p) { return { id: p.id, def: p.def }; }));

  $("#gameArea").innerHTML =
    '<div class="game-head">' +
      '<h2 class="game-title">🧩 Level 1 — ' + GAME_DATA.level1.name.id + '</h2>' +
      '<p class="game-instr">' + GAME_DATA.level1.instruction.id + '</p>' +
      '<p class="game-instr-en">' + GAME_DATA.level1.instruction.en + '</p>' +
    '</div>' +
    '<div class="pool" id="l1Pool">' +
      terms.map(function (t) {
        return '<button type="button" class="chip" draggable="true" data-term="' + t.id + '">' + escapeHtml(t.term) + '</button>';
      }).join("") +
    '</div>' +
    '<div class="match-grid" id="l1Grid">' +
      defs.map(function (d) {
        return '<article class="match-card" data-target="' + d.id + '">' +
                 '<div class="drop-zone" data-drop="' + d.id + '">⬇️ Letakkan istilah di sini<br>(Drop the term here)</div>' +
                 '<p class="def-text">' + escapeHtml(d.def) + '</p>' +
               '</article>';
      }).join("") +
    '</div>';

  wireLevel1();
}

function wireLevel1() {
  const pool = $("#l1Pool");
  const grid = $("#l1Grid");

  /* --- Drag & Drop --- */
  $$(".chip", pool).forEach(function (chip) {
    chip.addEventListener("dragstart", function (e) {
      if (chip.disabled) { e.preventDefault(); return; }
      chip.classList.add("dragging");
      try { e.dataTransfer.setData("text/plain", chip.dataset.term); } catch (err) { /* fallback */ }
      e.dataTransfer.effectAllowed = "move";
    });
    chip.addEventListener("dragend", function () { chip.classList.remove("dragging"); });
  });

  $$(".match-card", grid).forEach(function (card) {
    card.addEventListener("dragover", function (e) {
      if (state.l1.placed[card.dataset.target]) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      card.classList.add("over");
    });
    card.addEventListener("dragleave", function () { card.classList.remove("over"); });
    card.addEventListener("drop", function (e) {
      e.preventDefault();
      card.classList.remove("over");
      let termId = "";
      try { termId = e.dataTransfer.getData("text/plain"); } catch (err) { termId = ""; }
      if (!termId) return;
      const chipEl = pool.querySelector('.chip[data-term="' + termId + '"]');
      if (!chipEl) return;
      attemptPlaceL1(termId, card.dataset.target, chipEl, card);
    });
  });

  /* --- Mode Klik (untuk HP / keyboard) --- */
  $$(".chip", pool).forEach(function (chip) {
    chip.addEventListener("click", function () {
      if (chip.disabled) return;
      if (l1SelectedChip === chip) {
        chip.classList.remove("selected");
        l1SelectedChip = null;
        return;
      }
      if (l1SelectedChip) l1SelectedChip.classList.remove("selected");
      l1SelectedChip = chip;
      chip.classList.add("selected");
    });
  });

  $$(".match-card", grid).forEach(function (card) {
    card.addEventListener("click", function () {
      if (!l1SelectedChip) return;
      if (state.l1.placed[card.dataset.target]) return;
      const chipEl = l1SelectedChip;
      const termId = chipEl.dataset.term;
      chipEl.classList.remove("selected");
      l1SelectedChip = null;
      attemptPlaceL1(termId, card.dataset.target, chipEl, card);
    });
  });
}

function attemptPlaceL1(termId, targetId, chipEl, cardEl) {
  if (state.l1.placed[targetId]) return;
  const pool = $("#l1Pool");
  const grid = $("#l1Grid");

  if (termId === targetId) {
    const pts = state.l1.wrongFirst[termId] ? 10 : 20;
    state.l1.placed[targetId] = true;
    state.l1.correctCount += 1;
    state.scores[1] += pts;

    const dz = cardEl.querySelector(".drop-zone");
    dz.innerHTML = "";
    dz.classList.add("filled", "correct");
    chipEl.classList.add("correct");
    chipEl.classList.remove("selected");
    chipEl.disabled = true;
    chipEl.draggable = false;
    dz.appendChild(chipEl);
    cardEl.classList.add("correct", "bounce");
    setTimeout(function () { cardEl.classList.remove("bounce"); }, 520);

    beep("correct");
    showFeedback(true,
      "BENAR (CORRECT)! +" + pts + " poin",
      "<strong>" + escapeHtml(getTermById(termId)) + "</strong> — " +
      escapeHtml(getDefById(termId)) +
      (pts === 10 ? " <em>(Percobaan kedua, jadi 10 poin / second attempt, 10 points.)</em>" : "")
    );
    updateHUD();

    if (state.l1.correctCount === 5) {
      showFeedback(true, "🎉 Level 1 Selesai! (Level 1 Complete!)",
        "<strong>Analogi CMS:</strong> " + escapeHtml(GAME_DATA.level1.analogy));
      setTimeout(function () { completeLevel(1); }, 900);
    }
  } else {
    state.l1.wrongFirst[termId] = true;
    cardEl.classList.add("shake", "wrong");
    setTimeout(function () { cardEl.classList.remove("shake", "wrong"); }, 560);
    beep("wrong");
    showFeedback(false,
      "SALAH (WRONG) — coba lagi!",
      "Istilah <strong>" + escapeHtml(getTermById(termId)) + "</strong> belum cocok dengan definisi itu. Baca kembali definisinya dengan teliti. " +
      "<em>(This term does not match that definition yet. Read the definition carefully.)</em> Percobaan berikutnya bernilai 10 poin."
    );
  }
}

function getTermById(id) {
  const p = GAME_DATA.level1.pairs.filter(function (x) { return x.id === id; })[0];
  return p ? p.term : id;
}
function getDefById(id) {
  const p = GAME_DATA.level1.pairs.filter(function (x) { return x.id === id; })[0];
  return p ? p.def : "";
}

/* =========================================================
   12. LEVEL 2 — SORTING / KLASIFIKASI
   ========================================================= */
let l2SelectedChip = null;

function renderLevel2() {
  state.l2 = { placed: {}, wrongFirst: {}, correctCount: 0 };
  state.scores[2] = 0;

  const items = shuffle(GAME_DATA.level2.items);

  $("#gameArea").innerHTML =
    '<div class="game-head">' +
      '<h2 class="game-title">🏷️ Level 2 — ' + GAME_DATA.level2.name.id + '</h2>' +
      '<p class="game-instr">' + GAME_DATA.level2.instruction.id + '</p>' +
      '<p class="game-instr-en">' + GAME_DATA.level2.instruction.en + '</p>' +
    '</div>' +
    '<div class="pool" id="l2Pool">' +
      items.map(function (it) {
        return '<button type="button" class="chip" draggable="true" data-key="' + it.id + '">' + escapeHtml(it.word) + '</button>';
      }).join("") +
    '</div>' +
    '<div class="l2-baskets">' +
      '<div class="basket" data-cat="relevan">' +
        '<h3>✅ LABEL RELEVAN<br>untuk Blog Sekolah (Relevant Label)</h3>' +
        '<div class="basket-drop" data-drop="relevan"></div>' +
      '</div>' +
      '<div class="basket" data-cat="tidak">' +
        '<h3>❌ LABEL TIDAK RELEVAN<br>(Irrelevant Label)</h3>' +
        '<div class="basket-drop" data-drop="tidak"></div>' +
      '</div>' +
    '</div>';

  wireLevel2();
}

function wireLevel2() {
  const pool = $("#l2Pool");

  $$(".chip", pool).forEach(function (chip) {
    chip.addEventListener("dragstart", function (e) {
      if (chip.disabled) { e.preventDefault(); return; }
      chip.classList.add("dragging");
      try { e.dataTransfer.setData("text/plain", chip.dataset.key); } catch (err) { /* fallback */ }
      e.dataTransfer.effectAllowed = "move";
    });
    chip.addEventListener("dragend", function () { chip.classList.remove("dragging"); });
    chip.addEventListener("click", function () {
      if (chip.disabled) return;
      if (l2SelectedChip === chip) { chip.classList.remove("selected"); l2SelectedChip = null; return; }
      if (l2SelectedChip) l2SelectedChip.classList.remove("selected");
      l2SelectedChip = chip;
      chip.classList.add("selected");
    });
  });

  $$(".basket").forEach(function (basket) {
    basket.addEventListener("dragover", function (e) {
      e.preventDefault();
      basket.classList.add("over");
    });
    basket.addEventListener("dragleave", function () { basket.classList.remove("over"); });
    basket.addEventListener("drop", function (e) {
      e.preventDefault();
      basket.classList.remove("over");
      let key = "";
      try { key = e.dataTransfer.getData("text/plain"); } catch (err) { key = ""; }
      if (!key) return;
      const chipEl = pool.querySelector('.chip[data-key="' + key + '"]');
      if (!chipEl) return;
      attemptPlaceL2(key, basket.dataset.cat, chipEl, basket);
    });
    basket.addEventListener("click", function () {
      if (!l2SelectedChip) return;
      const chipEl = l2SelectedChip;
      const key = chipEl.dataset.key;
      chipEl.classList.remove("selected");
      l2SelectedChip = null;
      attemptPlaceL2(key, basket.dataset.cat, chipEl, basket);
    });
  });
}

function attemptPlaceL2(key, cat, chipEl, basketEl) {
  if (state.l2.placed[key]) return;
  const item = GAME_DATA.level2.items.filter(function (x) { return x.id === key; })[0];
  if (!item) return;

  if (item.correct === cat) {
    const pts = state.l2.wrongFirst[key] ? 6.25 : 12.5;
    state.l2.placed[key] = true;
    state.l2.correctCount += 1;
    state.scores[2] += pts;

    chipEl.classList.remove("selected");
    chipEl.classList.add("correct");
    chipEl.disabled = true;
    chipEl.draggable = false;
    basketEl.querySelector(".basket-drop").appendChild(chipEl);

    beep("correct");
    showFeedback(true, "BENAR (CORRECT)! +" + fmt(pts) + " poin",
      escapeHtml(item.reason) + (pts < 12.5 ? " <em>(Percobaan kedua / second attempt.)</em>" : ""));
    updateHUD();

    if (state.l2.correctCount === 8) {
      showFeedback(true, "🎉 Level 2 Selesai! (Level 2 Complete!)",
        "<strong>Fungsi Metadata:</strong> " + escapeHtml(GAME_DATA.level2.note));
      setTimeout(function () { completeLevel(2); }, 900);
    }
  } else {
    state.l2.wrongFirst[key] = true;
    chipEl.classList.add("shake");
    setTimeout(function () { chipEl.classList.remove("shake"); }, 560);
    basketEl.classList.add("shake");
    setTimeout(function () { basketEl.classList.remove("shake"); }, 560);
    beep("wrong");
    showFeedback(false, "SALAH (WRONG) — coba lagi!",
      escapeHtml(item.reason) + " <em>(Try again — put it in the correct basket.)</em> Percobaan berikutnya bernilai 6,25 poin.");
  }
}

/* =========================================================
   13. LEVEL 3 — SWIPE DECISION
   ========================================================= */
function renderLevel3() {
  state.l3 = { order: shuffle(GAME_DATA.level3.items.slice()), index: 0, correct: 0, locked: false };
  state.scores[3] = 0;
  state.level3Correct = 0;

  $("#gameArea").innerHTML =
    '<div class="game-head">' +
      '<h2 class="game-title">⚖️ Level 3 — ' + GAME_DATA.level3.name.id + '</h2>' +
      '<p class="game-instr">' + GAME_DATA.level3.instruction.id + '</p>' +
      '<p class="game-instr-en">' + GAME_DATA.level3.instruction.en + '</p>' +
    '</div>' +
    '<div class="swipe-stage">' +
      '<p class="swipe-counter" id="swipeCounter">Skenario (Scenario) 1 / 8</p>' +
      '<div class="swipe-card" id="swipeCard" tabindex="0" aria-label="Kartu skenario (Scenario card)">' +
        '<span class="stamp right">✅ ETIS</span>' +
        '<span class="stamp left">❌ PELANGGARAN</span>' +
        '<p id="swipeText"></p>' +
      '</div>' +
      '<div class="swipe-actions" id="swipeActions">' +
        '<button type="button" class="btn btn-violation" id="btnViolation" aria-label="Tandai sebagai pelanggaran (Mark as violation)">❌ PELANGGARAN (VIOLATION)</button>' +
        '<button type="button" class="btn btn-ethical" id="btnEthical" aria-label="Tandai sebagai etis (Mark as ethical)">✅ ETIS (ETHICAL)</button>' +
      '</div>' +
      '<div id="swipeExplain"></div>' +
    '</div>';

  $("#btnEthical").addEventListener("click", function () { answerLevel3("etis"); });
  $("#btnViolation").addEventListener("click", function () { answerLevel3("pelanggaran"); });

  wireSwipeGestures();
  renderSwipeCard();
}

function renderSwipeCard() {
  const card = $("#swipeCard");
  const item = state.l3.order[state.l3.index];
  if (!item) return;
  card.classList.remove("gone-left", "gone-right", "show-left", "show-right", "good", "bad");
  card.style.transform = "";
  card.style.opacity = "";
  $("#swipeText").textContent = item.text;
  $("#swipeCounter").textContent = "Skenario (Scenario) " + (state.l3.index + 1) + " / " + state.l3.order.length;
  $("#swipeExplain").innerHTML = "";
  state.l3.locked = false;
}

function wireSwipeGestures() {
  const card = $("#swipeCard");
  let startX = 0, dx = 0, dragging = false;

  card.addEventListener("pointerdown", function (e) {
    if (state.l3.locked) return;
    dragging = true;
    startX = e.clientX;
    dx = 0;
    card.setPointerCapture(e.pointerId);
    card.style.transition = "none";
  });

  card.addEventListener("pointermove", function (e) {
    if (!dragging || state.l3.locked) return;
    dx = e.clientX - startX;
    card.style.transform = "translateX(" + dx + "px) rotate(" + (dx / 22) + "deg)";
    card.classList.toggle("show-right", dx > 40);
    card.classList.toggle("show-left", dx < -40);
  });

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    card.style.transition = "";
    if (dx > 80) { answerLevel3("etis"); }
    else if (dx < -80) { answerLevel3("pelanggaran"); }
    else {
      card.style.transform = "";
      card.classList.remove("show-left", "show-right");
    }
    dx = 0;
  }

  card.addEventListener("pointerup", endDrag);
  card.addEventListener("pointercancel", endDrag);
  card.addEventListener("pointerleave", function () { if (dragging) endDrag(); });

  /* Keyboard aksesibilitas */
  card.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") { e.preventDefault(); answerLevel3("etis"); }
    if (e.key === "ArrowLeft") { e.preventDefault(); answerLevel3("pelanggaran"); }
  });
}

function answerLevel3(choice) {
  if (state.l3.locked) return;
  state.l3.locked = true;

  const item = state.l3.order[state.l3.index];
  const card = $("#swipeCard");
  const isCorrect = choice === item.correct;
  const pts = isCorrect ? 12.5 : 0;

  if (isCorrect) { state.l3.correct += 1; state.level3Correct += 1; }
  state.scores[3] += pts;

  card.classList.add(choice === "etis" ? "gone-right" : "gone-left");
  card.classList.add(isCorrect ? "good" : "bad");
  beep(isCorrect ? "correct" : "wrong");

  const label = choice === "etis" ? "ETIS (ETHICAL)" : "PELANGGARAN (VIOLATION)";
  const correctLabel = item.correct === "etis" ? "ETIS (ETHICAL)" : "PELANGGARAN (VIOLATION)";

  $("#swipeExplain").innerHTML =
    '<div class="explain-box ' + (isCorrect ? "ok" : "no") + '">' +
      '<h4>' + (isCorrect ? "✅ BENAR (CORRECT)! +12,5 poin" : "❌ SALAH (WRONG). Jawaban benar: " + correctLabel) + '</h4>' +
      '<p><strong>Pilihanmu (Your choice):</strong> ' + label + '</p>' +
      '<p><strong>Penjelasan (Explanation):</strong> ' + escapeHtml(item.explain) + '</p>' +
      '<div style="margin-top:12px;text-align:right">' +
        '<button type="button" class="btn btn-primary btn-sm" id="btnNextSwipe">LANJUT (NEXT) →</button>' +
      '</div>' +
    '</div>';

  updateHUD();

  $("#btnNextSwipe").addEventListener("click", function () {
    state.l3.index += 1;
    if (state.l3.index >= state.l3.order.length) {
      const perfect = state.l3.correct === state.l3.order.length;
      showFeedback(perfect, perfect ? "🏅 Sempurna! Semua jawaban benar!" : "Level 3 Selesai (Level 3 Complete)",
        perfect
          ? "Kamu menjawab seluruh soal etika dengan benar. Badge <strong>🏅 Anti-Plagiasi (Anti-Plagiarism)</strong> terbuka!"
          : "Kamu menjawab benar " + state.l3.correct + " dari " + state.l3.order.length + " skenario. Baca kembali penjelasannya, ya!");
      completeLevel(3);
    } else {
      clearFeedback();
      renderSwipeCard();
    }
  });
}

/* =========================================================
   14. LEVEL 4 — SIMULASI BLOG
   ========================================================= */
function renderLevel4() {
  state.l4 = { title: null, paragraph: null, image: null, labels: [], caption: "", source: "" };
  state.scores[4] = 0;

  const L4 = GAME_DATA.level4;

  $("#gameArea").innerHTML =
    '<div class="game-head">' +
      '<h2 class="game-title">✍️ Level 4 — ' + L4.name.id + '</h2>' +
      '<p class="game-instr">' + L4.instruction.id + '</p>' +
      '<p class="game-instr-en">' + L4.instruction.en + '</p>' +
    '</div>' +

    /* Judul */
    '<section class="l4-section">' +
      '<h3>1️⃣ Pilih Judul Artikel (Choose the Article Title) — maks 25 poin</h3>' +
      '<div class="l4-options" id="l4Titles">' +
        L4.titles.map(function (t) {
          return '<label class="l4-option" data-pick="title" data-id="' + t.id + '">' +
                   '<input type="radio" name="l4Title" value="' + t.id + '" />' +
                   '<span>' + escapeHtml(t.text) + '</span>' +
                 '</label>';
        }).join("") +
      '</div>' +
    '</section>' +

    /* Paragraf */
    '<section class="l4-section">' +
      '<h3>2️⃣ Pilih Isi Artikel / 2 Paragraf (Choose the 2-Paragraph Content) — maks 25 poin</h3>' +
      '<div class="l4-options" id="l4Paragraphs">' +
        L4.paragraphs.map(function (p) {
          return '<label class="l4-option" data-pick="paragraph" data-id="' + p.id + '">' +
                   '<input type="radio" name="l4Paragraph" value="' + p.id + '" />' +
                   '<span>' + escapeHtml(p.text) + '</span>' +
                 '</label>';
        }).join("") +
      '</div>' +
    '</section>' +

    /* Gambar */
    '<section class="l4-section">' +
      '<h3>3️⃣ Pilih Gambar (Choose the Image) — maks 25 poin</h3>' +
      '<div class="l4-options" id="l4Images">' +
        L4.images.map(function (im) {
          return '<label class="l4-option" data-pick="image" data-id="' + im.id + '">' +
                   '<input type="radio" name="l4Image" value="' + im.id + '" />' +
                   '<span class="l4-thumb">' + im.emoji + '</span>' +
                   '<span>' + escapeHtml(im.text) + '</span>' +
                 '</label>';
        }).join("") +
      '</div>' +
      '<div class="caption-row">' +
        '<div>' +
          '<label for="l4Caption">Caption (Keterangan Gambar)</label>' +
          '<input class="l4-input" id="l4Caption" type="text" maxlength="90" placeholder="Contoh: Latihan Paskibra setiap Jumat" />' +
        '</div>' +
        '<div>' +
          '<label for="l4Source">Sumber Gambar (Image Source)</label>' +
          '<input class="l4-input" id="l4Source" type="text" maxlength="90" placeholder="Contoh: Dokumentasi pribadi / https://www.pexels.com/..." />' +
        '</div>' +
      '</div>' +
      '<p style="font-size:12.5px;color:var(--muted);margin-top:8px">Isi caption &amp; sumber secara lengkap agar memperoleh 25 poin penuh (Fill in caption &amp; source completely to earn the full 25 points).</p>' +
    '</section>' +

    /* Label */
    '<section class="l4-section">' +
      '<h3>4️⃣ Pilih TEPAT 2 Label (Choose EXACTLY 2 Labels) — maks 25 poin</h3>' +
      '<div class="l4-labels" id="l4Labels">' +
        L4.labels.map(function (l) {
          return '<div class="l4-label" data-label="' + l.id + '" role="button" tabindex="0">' + escapeHtml(l.text) + '</div>';
        }).join("") +
      '</div>' +
      '<p id="l4LabelInfo" style="font-size:13px;color:var(--muted);margin-top:10px">Terpilih: 0 / 2</p>' +
    '</section>' +

    '<div style="text-align:center;margin-top:6px">' +
      '<button type="button" class="btn btn-primary" id="btnPublish">🚀 PUBLIKASIKAN (PUBLISH)</button>' +
    '</div>' +

    '<div id="l4Result"></div>';

  wireLevel4();
}

function wireLevel4() {
  /* Pilihan judul/paragraf/gambar */
  $$("[data-pick]").forEach(function (opt) {
    opt.addEventListener("click", function () {
      const group = opt.dataset.pick;
      $$('[data-pick="' + group + '"]').forEach(function (o) { o.classList.remove("selected"); });
      opt.classList.add("selected");
      const radio = opt.querySelector("input");
      if (radio) radio.checked = true;
      state.l4[group] = opt.dataset.id;
      updateHUD();
    });
  });

  /* Label — pilih tepat 2 */
  $$("#l4Labels .l4-label").forEach(function (chip) {
    chip.addEventListener("click", function () { toggleL4Label(chip); });
    chip.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleL4Label(chip); }
    });
  });

  /* Caption & sumber */
  $("#l4Caption").addEventListener("input", function (e) { state.l4.caption = e.target.value; });
  $("#l4Source").addEventListener("input", function (e) { state.l4.source = e.target.value; });

  $("#btnPublish").addEventListener("click", evaluateLevel4);
}

function toggleL4Label(chip) {
  const id = chip.dataset.label;
  const idx = state.l4.labels.indexOf(id);

  if (idx >= 0) {
    state.l4.labels.splice(idx, 1);
    chip.classList.remove("selected");
  } else {
    if (state.l4.labels.length >= 2) {
      showToast("Maksimal 2 label (Maximum 2 labels).");
      return;
    }
    state.l4.labels.push(id);
    chip.classList.add("selected");
  }

  const count = state.l4.labels.length;
  $("#l4LabelInfo").textContent = "Terpilih (Selected): " + count + " / 2";

  const full = count >= 2;
  $$("#l4Labels .l4-label").forEach(function (c) {
    if (full && !c.classList.contains("selected")) c.classList.add("disabled");
    else c.classList.remove("disabled");
  });
}

function evaluateLevel4() {
  const L4 = GAME_DATA.level4;
  const sel = state.l4;

  if (!sel.title || !sel.paragraph || !sel.image) {
    showToast("Lengkapi judul, paragraf, dan gambar dulu! (Complete title, paragraph, and image first!)");
    return;
  }
  if (sel.labels.length !== 2) {
    showToast("Pilih tepat 2 label. (Choose exactly 2 labels.)");
    return;
  }

  let score = 0;
  const rows = [];

  /* 1. Judul */
  const t = L4.titles.filter(function (x) { return x.id === sel.title; })[0];
  score += t.points;
  rows.push({ label: "Judul (Title)", pts: t.points, max: 25, note: t.note, ok: t.points > 0 });

  /* 2. Paragraf */
  const p = L4.paragraphs.filter(function (x) { return x.id === sel.paragraph; })[0];
  score += p.points;
  rows.push({ label: "Isi 2 Paragraf (Paragraph Content)", pts: p.points, max: 25, note: p.note, ok: p.points > 0 });

  /* 3. Gambar + Caption + Sumber */
  const im = L4.images.filter(function (x) { return x.id === sel.image; })[0];
  const capOk = (sel.caption || "").trim().length >= 5;
  const srcOk = (sel.source || "").trim().length >= 3;
  let imgPts = 0;
  let imgNote = im.note;
  if (im.points > 0) {
    if (capOk && srcOk) { imgPts = 25; imgNote += " Caption & sumber lengkap — sempurna!"; }
    else { imgPts = 12.5; imgNote += " Namun caption/sumber belum lengkap (-12,5 poin)."; }
  } else {
    imgNote += " Caption dan sumber tidak dapat menyelamatkan gambar yang melanggar hak cipta.";
  }
  score += imgPts;
  rows.push({ label: "Gambar + Caption + Sumber (Image + Caption + Source)", pts: imgPts, max: 25, note: imgNote, ok: im.points > 0 });

  /* 4. Label */
  let lblPts = 0;
  const lblNotes = [];
  sel.labels.forEach(function (id) {
    const l = L4.labels.filter(function (x) { return x.id === id; })[0];
    if (!l) return;
    if (l.points > 0) { lblPts += l.points; lblNotes.push("“" + l.text + "” relevan (+12,5)."); }
    else { lblNotes.push("“" + l.text + "” tidak relevan untuk blog sekolah (0 poin)."); }
  });
  lblPts = Math.min(25, lblPts);
  score += lblPts;
  rows.push({
    label: "2 Label / Metadata",
    pts: lblPts, max: 25,
    note: lblNotes.join(" "),
    ok: lblPts === 25
  });

  state.scores[4] = score;
  updateHUD();

  const passed = score >= 75;
  beep(passed ? "correct" : "wrong");
  if (passed) launchConfetti();

  $("#l4Result").innerHTML =
    '<section class="l4-section" style="margin-top:14px">' +
      '<h3>📋 Hasil Penilaian Artikel (Article Evaluation Result)</h3>' +
      '<p style="font-size:20px;font-weight:900;color:var(--primary);text-align:center;margin:8px 0">' +
        fmt(score) + ' / 100' +
      '</p>' +
      '<div class="rubric">' +
        rows.map(function (r) {
          return '<div class="rubric-row ' + (r.ok ? "ok" : "no") + '">' +
                   '<span><strong>' + r.label + '</strong><br><span style="font-size:12.5px;color:var(--muted)">' + escapeHtml(r.note) + '</span></span>' +
                   '<span style="font-weight:900;white-space:nowrap">' + fmt(r.pts) + ' / ' + r.max + '</span>' +
                 '</div>';
        }).join("") +
      '</div>' +
      '<div style="text-align:center;margin-top:16px">' +
        '<button type="button" class="btn btn-primary" id="btnFinishL4">SELESAIKAN MISI (FINISH MISSION) →</button>' +
      '</div>' +
    '</section>';

  $("#btnFinishL4").addEventListener("click", function () {
    $("#l4Result").innerHTML = "";
    completeLevel(4);
  });

  $("#l4Result").scrollIntoView({ behavior: "smooth", block: "start" });
}

/* =========================================================
   15. LEVEL CONTROL & COMPLETE
   ========================================================= */
function startLevel(n) {
  state.currentLevel = n;
  state.levelActive = true;
  clearFeedback();
  updateHUD();
  startLevelTimer();

  if (n === 1) renderLevel1();
  else if (n === 2) renderLevel2();
  else if (n === 3) renderLevel3();
  else if (n === 4) renderLevel4();

  showScreen("screen-game");
}

function completeLevel(n, customTitle, customBody) {
  if (!state.levelActive && !customTitle) return;
  state.levelActive = false;
  stopLevelTimer();

  const isReplay = state.completed[n];
  state.completed[n] = true;
  if (n + 1 <= 4 && state.unlocked < n + 1) state.unlocked = n + 1;

  const score = state.scores[n];
  const perfect = score >= 100;

  if (perfect) beep("win");
  if (score >= 100) launchConfetti();

  const earnedBadges = computeBadges();
  const newBadges = earnedBadges.filter(function (b) { return state.badges.indexOf(b.id) === -1; });
  state.badges = state.badges.concat(newBadges.map(function (b) { return b.id; }));

  let badgeHtml = "";
  if (newBadges.length) {
    badgeHtml = '<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:8px;justify-content:center">' +
      newBadges.map(function (b) { return '<span class="badge-pill">' + b.icon + " " + b.label + '</span>'; }).join("") +
      '</div>';
  }

  const title = customTitle || ("🎉 Level " + n + " Selesai! (Level " + n + " Complete!)");
  const body =
    '<p class="modal-score">' + fmt(score) + ' / 100</p>' +
    '<p style="text-align:center">' + (customBody || "Kerja bagus, Jurnalis! (Great job, Journalist!)") + '</p>' +
    badgeHtml;

  const isLast = n === 4;
  const foot =
    '<button type="button" class="btn btn-ghost" id="modalMapBtn">PETA MISI (MISSION MAP)</button>' +
    (isLast
      ? '<button type="button" class="btn btn-primary" id="modalNextBtn">LIHAT HASIL (SEE RESULT) →</button>'
      : '<button type="button" class="btn btn-primary" id="modalNextBtn">LEVEL ' + (n + 1) + ' →</button>');

  openModal(title, body, foot, null);

  const nextBtn = $("#modalNextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      closeModal();
      if (isLast) { goToResult(); }
      else { renderMap(); startLevel(n + 1); }
    });
  }
  const mapBtn = $("#modalMapBtn");
  if (mapBtn) {
    mapBtn.addEventListener("click", function () {
      closeModal();
      renderMap();
      showScreen("screen-map");
    });
  }

  saveState();
  updateHUD();
  if (isReplay) showToast("Level diulang — skor level ini diperbarui. (Level replayed — this level's score is updated.)");
}

/* =========================================================
   16. BADGES
   ========================================================= */
function computeBadges() {
  const list = [];
  if (state.scores[1] >= 100) list.push({ id: "cms_expert", icon: "🏅", label: "CMS Expert" });
  if (state.scores[2] >= 100) list.push({ id: "label_master", icon: "🏅", label: "Label Master" });
  if (state.level3Correct >= GAME_DATA.level3.items.length) list.push({ id: "anti_plagiasi", icon: "🏅", label: "Anti-Plagiasi (Anti-Plagiarism)" });
  if (state.scores[4] >= 75) list.push({ id: "jurnalis_sejati", icon: "🏅", label: "Jurnalis Sejati (True Journalist)" });
  if (totalScore() >= CONFIG.MEDAL_GOLD) list.push({ id: "integritas_digital", icon: "🏅", label: "Integritas Digital (Digital Integrity)" });
  return list;
}

function allBadgeDefinitions() {
  return [
    { id: "cms_expert", icon: "🏅", label: "CMS Expert" },
    { id: "label_master", icon: "🏅", label: "Label Master" },
    { id: "anti_plagiasi", icon: "🏅", label: "Anti-Plagiasi (Anti-Plagiarism)" },
    { id: "jurnalis_sejati", icon: "🏅", label: "Jurnalis Sejati (True Journalist)" },
    { id: "integritas_digital", icon: "🏅", label: "Integritas Digital (Digital Integrity)" }
  ];
}

/* =========================================================
   17. MISSION MAP
   ========================================================= */
function renderMap() {
  const levels = [
    { n: 1, icon: "🧩", name: "Kenali CMS-mu!", type: "Drag & Drop Matching", topic: "Fungsi CMS & jenis-jenisnya" },
    { n: 2, icon: "🏷️", name: "Label & Metadata Challenge", type: "Sorting / Klasifikasi", topic: "Metadata, Label, Kategori" },
    { n: 3, icon: "⚖️", name: "Etika atau Pelanggaran?", type: "Swipe / Pilih Kiri-Kanan", topic: "Hak Cipta, Plagiarisme, Etika Publikasi" },
    { n: 4, icon: "✍️", name: "Jurnalis Sejati (BONUS)", type: "Simulasi Menulis Blog", topic: "Gabungan semua materi" }
  ];

  $("#mapLevels").innerHTML = levels.map(function (l) {
    const locked = l.n > state.unlocked;
    const done = state.completed[l.n];
    return '<article class="level-card ' + (locked ? "locked" : "") + " " + (done ? "done" : "") + '">' +
      '<div class="level-badge">' + (locked ? "🔒" : l.icon) + '</div>' +
      '<h3>Level ' + l.n + ' — ' + escapeHtml(l.name) + '</h3>' +
      '<p class="level-type">' + escapeHtml(l.type) + '</p>' +
      '<p class="level-topic">' + escapeHtml(l.topic) + '</p>' +
      '<p class="level-score">' +
        (done
          ? "✅ " + fmt(state.scores[l.n]) + " / 100"
          : (locked ? "🔒 Terkunci (Locked)" : "▶️ Siap dimainkan (Ready)")) +
      '</p>' +
      '<button type="button" class="btn ' + (locked ? "btn-disabled" : "btn-primary") + '" data-level="' + l.n + '"' + (locked ? " disabled" : "") + '>' +
        (done ? "MAINKAN ULANG (REPLAY)" : "MULAI (START)") +
      '</button>' +
    '</article>';
  }).join("");

  $$("#mapLevels button[data-level]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const n = parseInt(btn.dataset.level, 10);
      ensureAudio();
      startLevel(n);
    });
  });
}

/* =========================================================
   18. HINT
   ========================================================= */
function showHint() {
  const n = state.currentLevel;
  let html = "";
  if (n === 1) {
    html = "<ul>" +
      "<li><strong>CMS (Content Management System)</strong> = alat pembuat website tanpa koding.</li>" +
      "<li><strong>Blogger</strong> &amp; <strong>Google Sites</strong> dikelola Google — perhatikan kata 'Google' pada definisinya.</li>" +
      "<li><strong>WordPress</strong> = untuk blog maupun website profesional.</li>" +
      "<li><strong>Metadata (Data tentang data)</strong> = label/tag/kategori.</li>" +
      "</ul>";
  } else if (n === 2) {
    html = "<ul>" +
      "<li>Blog ini tentang <strong>kegiatan &amp; pelajaran SMPN 19 Bekasi</strong>.</li>" +
      "<li>Jika kata kunci berhubungan dengan sekolah, pelajaran, atau ekstrakurikuler → <strong>Relevan</strong>.</li>" +
      "<li>Jika tidak berhubungan sama sekali dengan sekolah → <strong>Tidak Relevan</strong>.</li>" +
      "</ul>";
  } else if (n === 3) {
    html = "<ul>" +
      "<li><strong>ETIS</strong> = menulis sendiri / parafrasa + cantumkan sumber / memakai lisensi <em>Creative Commons</em>.</li>" +
      "<li><strong>PELANGGARAN</strong> = copy-paste tanpa sumber, mengambil foto tanpa izin, mengaku karya orang lain, menyebar hoaks.</li>" +
      "</ul>";
  } else if (n === 4) {
    html = "<ul>" +
      "<li>Pilih judul &amp; paragraf <strong>tulisan sendiri</strong> (bukan copy-paste).</li>" +
      "<li>Gambar: pilih <strong>dokumentasi pribadi</strong> atau <strong>Creative Commons</strong> — jangan ambil dari Google Images.</li>" +
      "<li>Isi <strong>caption + sumber</strong> gambar secara lengkap.</li>" +
      "<li>Label harus relevan dengan sekolah, dan pilih tepat 2.</li>" +
      "</ul>";
  } else {
    html = "<p>Mulailah dari Peta Misi dan pilih Level 1. (Start from the Mission Map and pick Level 1.)</p>";
  }
  openModal("❓ Petunjuk (Hint)", html,
    '<button type="button" class="btn btn-primary" id="modalOk">MENGERTI (GOT IT)</button>');
  $("#modalOk").addEventListener("click", closeModal);
}

/* =========================================================
   19. KAMUS MINI
   ========================================================= */
function showGlossary() {
  const html = "<ul>" + GLOSSARY.map(function (g) {
    return "<li><strong>" + escapeHtml(g[0]) + "</strong> — " + escapeHtml(g[1]) + "</li>";
  }).join("") + "</ul>";
  openModal("📖 Kamus Mini (Mini Dictionary)", html,
    '<button type="button" class="btn btn-primary" id="modalOk">TUTUP (CLOSE)</button>');
  $("#modalOk").addEventListener("click", closeModal);
}

/* =========================================================
   20. RESULT SCREEN
   ========================================================= */
function goToResult() {
  state.levelActive = false;
  stopLevelTimer();

  const total = totalScore();
  let medal = "📜", medalText = "Terus Berlatih (Keep Practicing)";
  if (total >= CONFIG.MEDAL_GOLD) { medal = "🥇"; medalText = "Medali Emas (Gold Medal)"; }
  else if (total >= CONFIG.MEDAL_SILVER) { medal = "🥈"; medalText = "Medali Perak (Silver Medal)"; }
  else if (total >= CONFIG.MEDAL_BRONZE) { medal = "🥉"; medalText = "Medali Perunggu (Bronze Medal)"; }

  $("#resultMedal").textContent = medal;
  $("#resultScore").textContent = fmt(total);
  $("#resultName").textContent =
    (state.playerName ? "🎖️ " + state.playerName + " — " : "") + medalText;

  $("#scoreBreakdown").innerHTML = [1, 2, 3, 4].map(function (n) {
    return '<div class="score-cell">' +
      '<span class="sc-label">LEVEL ' + n + '</span>' +
      '<span class="sc-value">' + fmt(state.scores[n]) + '</span>' +
      '<span class="sc-label">/ 100</span>' +
    '</div>';
  }).join("");

  const earned = computeBadges();
  state.badges = earned.map(function (b) { return b.id; });
  $("#badgeWrap").innerHTML = allBadgeDefinitions().map(function (b) {
    const has = state.badges.indexOf(b.id) >= 0;
    return '<span class="badge-pill ' + (has ? "" : "locked") + '">' + b.icon + " " + b.label + '</span>';
  }).join("");

  /* Exit Ticket */
  const et = $(".exit-ticket");
  if (!CONFIG.ENABLE_EXIT_TICKET) {
    et.hidden = true;
  } else {
    et.hidden = false;
    const ta = $("#reflectionInput");
    if (state.reflection) { ta.value = state.reflection; $("#reflectionSaved").hidden = false; }
  }

  renderLeaderboard();
  saveLeaderboardEntry(total);

  showScreen("screen-result");

  if (total >= CONFIG.MEDAL_GOLD) { launchConfetti(); beep("win"); }

  saveState();
  updateHUD();
}

function renderLeaderboard() {
  const box = $("#leaderboardBox");
  if (!CONFIG.ENABLE_LEADERBOARD) { box.hidden = true; return; }
  box.hidden = false;

  let list = [];
  try { list = JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || "[]"); } catch (e) { list = []; }
  if (!Array.isArray(list)) list = [];
  list.sort(function (a, b) { return b.score - a.score; });
  list = list.slice(0, CONFIG.MAX_LEADERBOARD_ENTRIES);

  let html = "<h3>🏆 Papan Skor Kelas (Class Leaderboard)</h3>";
  if (!list.length) {
    html += '<p class="lb-empty">Belum ada skor tercatat di komputer ini. (No scores recorded on this computer yet.)</p>';
  } else {
    html += '<table class="lb-table"><thead><tr><th>#</th><th>Nama (Name)</th><th>Skor (Score)</th></tr></thead><tbody>' +
      list.map(function (e, i) {
        const isMe = state.playerName && e.name === state.playerName && e.score === totalScore();
        return '<tr class="' + (isMe ? "me" : "") + '">' +
          '<td>' + (i + 1) + '</td>' +
          '<td>' + escapeHtml(e.name || "Anonim (Anonymous)") + '</td>' +
          '<td>' + fmt(e.score) + ' / 400</td>' +
        '</tr>';
      }).join("") + "</tbody></table>";
  }
  box.innerHTML = html;
}

function saveLeaderboardEntry(total) {
  if (!CONFIG.ENABLE_LEADERBOARD) return;
  let list = [];
  try { list = JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || "[]"); } catch (e) { list = []; }
  if (!Array.isArray(list)) list = [];

  const name = state.playerName || "Anonim (Anonymous)";
  const entry = { name: name, score: total, date: new Date().toISOString().slice(0, 10) };

  /* Hindari duplikasi entri identik */
  const dup = list.some(function (e) { return e.name === entry.name && e.score === entry.score && e.date === entry.date; });
  if (!dup) list.push(entry);

  list.sort(function (a, b) { return b.score - a.score; });
  list = list.slice(0, CONFIG.MAX_LEADERBOARD_ENTRIES);

  try { localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(list)); } catch (e) { /* storage penuh */ }
}

/* =========================================================
   21. SERTIFIKAT (PRINT)
   ========================================================= */
function printCertificate() {
  if (!CONFIG.ENABLE_CERTIFICATE) { showToast("Sertifikat dinonaktifkan (Certificate disabled)."); return; }

  const total = totalScore();
  let medal = "📜", medalText = "Peserta (Participant)";
  if (total >= CONFIG.MEDAL_GOLD) { medal = "🥇"; medalText = "Medali Emas (Gold Medal)"; }
  else if (total >= CONFIG.MEDAL_SILVER) { medal = "🥈"; medalText = "Medali Perak (Silver Medal)"; }
  else if (total >= CONFIG.MEDAL_BRONZE) { medal = "🥉"; medalText = "Medali Perunggu (Bronze Medal)"; }

  const today = new Date();
  const tanggal = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  const name = state.playerName || "Jurnalis Muda (Young Journalist)";

  const cert = "" +
    '<div class="cert">' +
      '<img class="cert-logo" data-logo src="logo.png" alt="Logo SMP Negeri 19 Kota Bekasi" />' +
      '<p class="cert-school">' + escapeHtml(CONFIG.SCHOOL_NAME) + '</p>' +
      '<div class="cert-line"></div>' +
      '<h1 class="cert-title">SERTIFIKAT PENGHARGAAN</h1>' +
      '<p class="cert-sub">Certificate of Achievement</p>' +
      '<p class="cert-award">Diberikan dengan bangga kepada (Proudly awarded to):</p>' +
      '<p class="cert-name">' + escapeHtml(name) + '</p>' +
      '<p class="cert-body">' +
        'atas keberhasilan menyelesaikan LKPD Digital Interaktif <strong>“SPENLAS DIGITAL JOURNALIST”</strong> ' +
        'pada materi <strong>CMS/Blog dan Etika Publikasi</strong> — Informatika Kelas 9.<br>' +
        '<em>for successfully completing the interactive digital worksheet “SPENLAS DIGITAL JOURNALIST” ' +
        'on CMS/Blog and Publication Ethics — Grade 9 Informatics.</em>' +
      '</p>' +
      '<p class="cert-medal">' + medal + '</p>' +
      '<p class="cert-score">TOTAL SKOR (TOTAL SCORE): ' + fmt(total) + ' / 400 — ' + medalText + '</p>' +
      '<p class="cert-body" style="font-size:12.5px">' +
        'Total skor Level 1: ' + fmt(state.scores[1]) + ' · Level 2: ' + fmt(state.scores[2]) +
        ' · Level 3: ' + fmt(state.scores[3]) + ' · Level 4: ' + fmt(state.scores[4]) +
      '</p>' +
      '<div class="cert-foot">' +
        '<div class="cert-sign">' +
          '<div class="line">' + escapeHtml(CONFIG.TEACHER_NAME) + '</div>' +
          '<div>Guru Informatika (Informatics Teacher)</div>' +
        '</div>' +
        '<div class="cert-sign">' +
          '<div class="line">' + tanggal + '</div>' +
          '<div>Tanggal (Date)</div>' +
        '</div>' +
      '</div>' +
    '</div>';

  const area = $("#printArea");
  area.innerHTML = cert;

  /* Fallback logo untuk area cetak */
  $$("img[data-logo]", area).forEach(function (img) {
    img.addEventListener("error", function () { img.src = LOGO_FALLBACK; }, { once: true });
    if (img.complete && img.naturalWidth === 0) img.src = LOGO_FALLBACK;
  });

  setTimeout(function () { window.print(); }, 120);
}

/* =========================================================
   22. LOCAL STORAGE
   ========================================================= */
function saveState() {
  try {
    const data = {
      playerName: state.playerName,
      unlocked: state.unlocked,
      scores: state.scores,
      completed: state.completed,
      level3Correct: state.level3Correct,
      badges: state.badges,
      reflection: state.reflection,
      lang: state.lang,
      theme: state.theme
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) { /* storage tidak tersedia */ }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (!data || typeof data !== "object") return;

    if (typeof data.playerName === "string") state.playerName = data.playerName;
    if (typeof data.unlocked === "number") state.unlocked = Math.min(4, Math.max(1, data.unlocked));
    if (data.scores && typeof data.scores === "object") {
      [1, 2, 3, 4].forEach(function (n) {
        const v = Number(data.scores[n]);
        state.scores[n] = isFinite(v) ? v : 0;
      });
    }
    if (data.completed && typeof data.completed === "object") {
      [1, 2, 3, 4].forEach(function (n) { state.completed[n] = !!data.completed[n]; });
    }
    if (typeof data.level3Correct === "number") state.level3Correct = data.level3Correct;
    if (Array.isArray(data.badges)) state.badges = data.badges;
    if (typeof data.reflection === "string") state.reflection = data.reflection;
    if (data.lang === "id" || data.lang === "en") state.lang = data.lang;
    if (data.theme === "light" || data.theme === "dark") state.theme = data.theme;
  } catch (e) { /* data korup — abaikan */ }
}

function resetGame() {
  state.currentLevel = 0;
  state.unlocked = 1;
  state.scores = { 1: 0, 2: 0, 3: 0, 4: 0 };
  state.completed = { 1: false, 2: false, 3: false, 4: false };
  state.level3Correct = 0;
  state.badges = [];
  state.reflection = "";
  state.l1 = state.l2 = state.l3 = state.l4 = null;
  state.levelActive = false;
  stopLevelTimer();
  clearFeedback();

  $("#reflectionInput").value = "";
  $("#reflectionSaved").hidden = true;
  $("#l4Result").innerHTML = "";

  saveState();
  updateHUD();
  renderMap();
  showScreen("screen-start");
}

/* =========================================================
   23. INIT & EVENT LISTENERS
   ========================================================= */
function init() {
  loadState();
  applyTheme();
  applyLanguage();
  attachLogoFallback();

  /* Footer wajib (dipaksa dari CONFIG) */
  $("#appFooter").textContent = CONFIG.FOOTER_TEXT;

  /* Toggle bahasa & tema */
  if (!CONFIG.ENABLE_LANGUAGE_TOGGLE) $("#btnLang").hidden = true;
  if (!CONFIG.ENABLE_DARK_MODE) $("#btnTheme").hidden = true;

  $("#btnLang").addEventListener("click", function () { ensureAudio(); toggleLanguage(); });
  $("#btnTheme").addEventListener("click", toggleTheme);
  $("#btnGlossary").addEventListener("click", function () { ensureAudio(); showGlossary(); });

  /* Nama pemain */
  const nameInput = $("#playerName");
  if (state.playerName) nameInput.value = state.playerName;
  nameInput.addEventListener("input", function () {
    state.playerName = nameInput.value.trim().slice(0, 15);
    saveState();
  });

  /* Start screen */
  $("#btnStart").addEventListener("click", function () {
    ensureAudio();
    state.playerName = nameInput.value.trim().slice(0, 15);
    saveState();
    showScreen("screen-briefing");
  });

  $("#btnLearnFirst").addEventListener("click", function () {
    const panel = $("#learnPanel");
    panel.hidden = !panel.hidden;
    if (!panel.hidden) panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  /* Briefing */
  $("#btnReady").addEventListener("click", function () {
    ensureAudio();
    renderMap();
    showScreen("screen-map");
  });

  /* Game toolbar */
  $("#btnBackToMap").addEventListener("click", function () {
    state.levelActive = false;
    stopLevelTimer();
    renderMap();
    showScreen("screen-map");
  });
  $("#btnHint").addEventListener("click", showHint);

  /* Result */
  $("#btnPlayAgain").addEventListener("click", function () {
    ensureAudio();
    resetGame();
  });
  $("#btnPrintCert").addEventListener("click", printCertificate);

  /* Exit Ticket */
  $("#btnSaveReflection").addEventListener("click", function () {
    const val = $("#reflectionInput").value.trim();
    if (val.length < CONFIG.EXIT_TICKET_MIN_LENGTH) {
      showToast("Tulis minimal " + CONFIG.EXIT_TICKET_MIN_LENGTH + " karakter. (Write at least " + CONFIG.EXIT_TICKET_MIN_LENGTH + " characters.)");
      return;
    }
    state.reflection = val;
    saveState();
    $("#reflectionSaved").hidden = false;
    showToast("✅ Terima kasih, Jurnalis! Refleksimu sudah tercatat.");
    beep("correct");
  });

  /* Modal */
  $("#modalClose").addEventListener("click", closeModal);
  $("#modalBackdrop").addEventListener("click", function (e) {
    if (e.target === $("#modalBackdrop")) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !$("#modalBackdrop").hidden) closeModal();
  });

  /* Cegah drag default gambar */
  document.addEventListener("dragstart", function (e) {
    if (e.target && e.target.tagName === "IMG") e.preventDefault();
  });

  updateHUD();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}