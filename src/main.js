import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <!-- ==================== LOADING ==================== -->
  <div class="loading-screen" id="loadingScreen">
    <div class="loading-heart">♡</div>
    <p>Satu kejutan kecil sedang disiapkan...</p>
  </div>

  <!-- ==================== MUSIC ==================== -->
  <audio
    id="backgroundMusic"
    loop
    autoplay
    preload="auto"
    src="/music/song.mp3">
</audio>

  <main class="website">

    <!-- Floating decorations -->
    <div class="floating-decorations" aria-hidden="true">
      <span>♡</span>
      <span>✦</span>
      <span>♡</span>
      <span>✧</span>
      <span>♡</span>
      <span>✦</span>
    </div>

    <!-- ==================== NAVBAR ==================== -->
    <nav class="navbar">
      <a href="#" class="brand">for <span>abang</span> ♡</a>

      <button class="music-button" id="musicButton">
        <span class="music-icon">♫</span>
        <span id="musicLabel">Music</span>
      </button>
    </nav>

    <!-- ==================== HERO / OPENING ==================== -->
    <section class="hero" id="home">
      <div class="hero-content">

        <p class="eyebrow">a little surprise from adek</p>

        <h1>
          Happy Birthday,
          <span>Abang.</span>
        </h1>

        <p class="hero-description">
          Hari ini adalah hari spesial untuk seseorang yang sangat berarti
          buat adek. Jadi, adek bikin sesuatu kecil untuk abang.
        </p>

        <button class="primary-button" id="openLetterButton">
          Buka kejutan
          <span>→</span>
        </button>

      </div>

      <div class="hero-visual">

        <div class="sparkle sparkle-one">✦</div>
        <div class="sparkle sparkle-two">✧</div>

        <div class="main-photo-frame">
          <img
            src="/photos/photo1.jpg"
            alt="Foto abang dan adek"
            onerror="this.src='https://placehold.co/700x850/e9dcf5/745487?text=Foto+Abang+%26+Adek+♡'"
          />
        </div>

        <div class="photo-note">
          <span>my favorite</span>
          <strong>person ♡</strong>
        </div>

      </div>
    </section>

    <!-- ==================== LETTER ==================== -->
    <section class="letter-section section" id="letter">

      <div class="section-intro center">
        <p class="section-label">a letter for abang</p>

        <h2>
          Untuk abang,
          <em>yang selalu adek pilih.</em>
        </h2>
      </div>

      <div class="letter-card">

        <div class="paper-tape"></div>

        <p class="letter-greeting">Abang,</p>

        <p>
          Selamat ulang tahun yaaa, abang. ♡
          Hari ini adek cuma mau bilang kalau adek bersyukur banget
          bisa kenal, bisa dekat, dan bisa punya banyak cerita sama abang.
        </p>

        <p>
          Terima kasih sudah hadir di kehidupan adek. Terima kasih untuk
          semua perhatian kecil, obrolan random, candaan, cerita,
          dan semua momen yang mungkin sederhana, tapi selalu berhasil
          jadi sesuatu yang berarti buat adek.
        </p>

        <p>
          Adek mungkin nggak selalu pandai mengungkapkan perasaan,
          kadang malah suka gengsi atau bikin abang kesel hehe.
          Tapi satu hal yang adek harap abang tahu:
          abang itu penting banget buat adek.
        </p>

        <p>
          Di umur abang yang baru ini, adek doakan semoga semua urusan
          abang dimudahkan, rezeki abang dilancarkan, kesehatan abang
          selalu dijaga, dan semua hal yang abang perjuangkan dan usahakan
          perlahan-lahan bisa tercapai.
        </p>

        <p>
          Semoga abang selalu punya alasan untuk tersenyum.
          Dan kalau boleh adek egois sedikit...
          semoga adek masih boleh nemenin abang di banyak cerita
          dan banyak ulang tahun abang selanjutnya yaa♡
        </p>

        <p class="letter-signature">
          with lots of love,<br />
          <strong>Rifdah Asyliyah ♡</strong>
        </p>

      </div>
    </section>

    <!-- ==================== MEMORIES ==================== -->
    <section class="memories-section section" id="memories">

      <div class="section-heading">
        <div>
          <p class="section-label">our little memories</p>

          <h2>
            Potongan kecil
            <em>tentang kita.</em>
          </h2>
        </div>

        <p class="section-note">
          Some moments are small,<br />
          but the memories stay forever.
        </p>
      </div>

      <div class="memory-grid">
        <!-- ==================== PHOTO 2 ==================== -->
        <figure class="memory-card">
          <img
            src="/photos/photo2.jpg"
            alt="Kenangan abang dan adek - foto 2"
            onerror="this.src='https://placehold.co/700x650/f0e5f7/745487?text=Memory+02'"
          />
          <figcaption>just us, being us.</figcaption>
        </figure>


        <!-- ==================== PHOTO 3 ==================== -->
        <figure class="memory-card">
          <img
            src="/photos/photo3.jpg"
            alt="Kenangan abang dan adek - foto 3"
            onerror="this.src='https://placehold.co/700x650/dfcdea/745487?text=Memory+03'"
          />
          <figcaption>little moments, big feelings.</figcaption>
        </figure>


        <!-- ==================== PHOTO 4 ==================== -->
        <figure class="memory-card memory-wide">
          <img
            src="/photos/photo11.jpg"
            alt="Kenangan abang dan adek - foto 4"
            onerror="this.src='https://placehold.co/1000x650/eadff2/745487?text=Memory+04'"
          />
          <figcaption>and adek would choose this story again.</figcaption>
        </figure>


        <!-- ==================== PHOTO 5 ==================== -->
        <figure class="memory-card">
          <img
            src="/photos/photo5.jpg"
            alt="Kenangan abang dan adek - foto 5"
            onerror="this.src='https://placehold.co/700x650/e7d8f0/745487?text=Memory+05'"
          />
          <figcaption>another little memory ♡</figcaption>
        </figure>


        <!-- ==================== PHOTO 6 ==================== -->
        <figure class="memory-card">
          <img
            src="/photos/photo6.jpg"
            alt="Kenangan abang dan adek - foto 6"
            onerror="this.src='https://placehold.co/700x650/f1e5f7/745487?text=Memory+06'"
          />
          <figcaption>one more moment to keep.</figcaption>
        </figure>


        <!-- ==================== PHOTO 7 ==================== -->
        <figure class="memory-card memory-tall">
          <img
            src="/photos/photo12.jpg"
            alt="Kenangan abang dan adek - foto 7"
            onerror="this.src='https://placehold.co/650x900/e3d1ed/745487?text=Memory+07'"
          />
          <figcaption>you make ordinary days special.</figcaption>
        </figure>


        <!-- ==================== PHOTO 8 ==================== -->
        <figure class="memory-card">
          <img
            src="/photos/photo8.jpg"
            alt="Kenangan abang dan adek - foto 8"
            onerror="this.src='https://placehold.co/700x650/eee1f5/745487?text=Memory+08'"
          />
          <figcaption>still one of my favorites ♡</figcaption>
        </figure>


        <!-- ==================== PHOTO 9 ==================== -->
        <figure class="memory-card">
          <img
            src="/photos/photo9.jpg"
            alt="Kenangan abang dan adek - foto 9"
            onerror="this.src='https://placehold.co/700x650/e0ccea/745487?text=Memory+09'"
          />
          <figcaption>just another reason to smile.</figcaption>
        </figure>


        <!-- ==================== PHOTO 10 ==================== -->
        <figure class="memory-card memory-wide">
          <img
            src="/photos/photo10.jpg"
            alt="Kenangan abang dan adek - foto 10"
            onerror="this.src='https://placehold.co/1000x650/eadff2/745487?text=Memory+10'"
          />
          <figcaption>
            ten little memories, one very special person. ♡
          </figcaption>
        </figure>

      </div>

      <p class="gallery-hint">
        ✦ Klik fotonya untuk melihat lebih dekat ✦
      </p>
    </section>

    <!-- ==================== REASONS ==================== -->
    <section class="reasons-section section">

      <div class="section-intro center">
        <p class="section-label">just because</p>

        <h2>
          Hal-hal kecil yang
          <em>adek suka dari abang.</em>
        </h2>
      </div>

      <div class="reason-grid">

        <article class="reason-card">
          <span class="reason-number">01</span>
          <div class="reason-icon">♡</div>
          <h3>Your laugh</h3>
          <p>
            Karena ketawa abang kadang bisa bikin adek
            ikut ketawa walaupun awalnya nggak lucu.
          </p>
        </article>

        <article class="reason-card">
          <span class="reason-number">02</span>
          <div class="reason-icon">✦</div>
          <h3>Your heart</h3>
          <p>
            Karena ada sisi abang yang mungkin nggak semua orang lihat,
            tapi justru itu yang paling adek kagumi.
          </p>
        </article>

        <article class="reason-card">
          <span class="reason-number">03</span>
          <div class="reason-icon">♡</div>
          <h3>Your presence</h3>
          <p>
            Karena hari biasa pun terasa sedikit lebih spesial
            kalau ada abang di dalamnya.
          </p>
        </article>

      </div>
    </section>

    <!-- ==================== FINAL SURPRISE ==================== -->
    <section class="final-section section" id="final">

      <div class="final-card">

        <div class="final-decoration final-decoration-one">♡</div>
        <div class="final-decoration final-decoration-two">✦</div>

        <div class="mini-hearts">♡ &nbsp; ♡ &nbsp; ♡</div>

        <p class="section-label">one last thing</p>

        <h2>
          Semoga tahun ini
          <em>lebih indah.</em>
        </h2>

        <p class="final-message">
          Semoga abang tumbuh menjadi versi terbaik dari diri abang,
          mengejar semua yang abang mau, dan selalu punya alasan
          untuk tersenyum.
        </p>

        <p class="final-message">
          Terima kasih sudah menjadi bagian dari cerita adek.
          Selamat ulang tahun, abang. ♡
        </p>

        <div class="big-heart">♥</div>

        <button class="surprise-button" id="surpriseButton">
          Ada satu kejutan lagi...
        </button>

        <div class="final-secret" id="finalSecret">
          <p>
            Adek sayang abang.
          </p>
          <span>♡</span>
        </div>

      </div>
    </section>

    <!-- ==================== FOOTER ==================== -->
    <footer class="footer">
      <p>made with love by Rifdah Asyliyah♡</p>
    </footer>

  </main>

  <!-- Confetti container -->
  <div class="confetti-container" id="confettiContainer"></div>
`;


// ============================================================
// LOADING
// ============================================================

const loadingScreen = document.querySelector("#loadingScreen");

window.addEventListener("load", () => {
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
  }, 900);
});


// ============================================================
// OPEN LETTER
// ============================================================

const openLetterButton = document.querySelector("#openLetterButton");
const letterSection = document.querySelector("#letter");

openLetterButton.addEventListener("click", () => {
  letterSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  createConfetti();
});


/* =========================================================
   MUSIC
========================================================= */

const music = document.querySelector("#backgroundMusic");
const musicBtn = document.querySelector("#musicButton");
const musicLabel = document.querySelector("#musicLabel");


function setMusicButton(isPlaying) {
  if (isPlaying) {
    musicBtn.classList.add("playing");
    musicLabel.textContent = "Music On";
  } else {
    musicBtn.classList.remove("playing");
    musicLabel.textContent = "Music";
  }
}


/* =========================================================
   AUTO PLAY
========================================================= */

async function startMusic() {
  try {
    await music.play();
    setMusicButton(true);
  } catch (error) {
    console.log(
      "Autoplay diblokir browser. Musik akan aktif setelah interaksi pengguna."
    );
  }
}


/*
   Setelah halaman selesai loading,
   tunggu sedikit lalu coba putar musik.
*/

window.addEventListener("load", () => {
  setTimeout(() => {
    startMusic();
  }, 1000);
});


/* =========================================================
   FALLBACK
   Kalau browser memblokir autoplay,
   klik pertama pada halaman akan mencoba memutar musik.
========================================================= */

document.addEventListener(
  "click",
  () => {
    if (music.paused) {
      music.play()
        .then(() => {
          setMusicButton(true);
        })
        .catch(() => {});
    }
  },
  { once: true }
);


/* =========================================================
   MUSIC BUTTON
========================================================= */

musicBtn.addEventListener("click", (event) => {

  // Mencegah fallback click ikut bekerja
  event.stopPropagation();

  if (music.paused) {

    music.play()
      .then(() => {
        setMusicButton(true);
      })
      .catch(() => {});

  } else {

    music.pause();
    setMusicButton(false);

  }

});


// ============================================================
// FINAL SURPRISE
// ============================================================

const surpriseButton = document.querySelector("#surpriseButton");
const finalSecret = document.querySelector("#finalSecret");

surpriseButton.addEventListener("click", () => {
  finalSecret.classList.add("show");
  surpriseButton.textContent = "♡ for abang, always ♡";

  createConfetti();
  createFloatingHearts();
});


// ============================================================
// MEMORY IMAGE ZOOM
// ============================================================

const memoryCards = document.querySelectorAll(".memory-card");

memoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("zoomed");
  });
});


// ============================================================
// CONFETTI
// ============================================================

function createConfetti() {
  const container = document.querySelector("#confettiContainer");

  const symbols = ["♡", "♥", "✦", "✧", "·"];

  for (let index = 0; index < 35; index++) {
    const particle = document.createElement("span");

    particle.className = "confetti-particle";
    particle.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 0.5}s`;
    particle.style.fontSize = `${12 + Math.random() * 18}px`;

    container.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 2500);
  }
}


// ============================================================
// FLOATING HEARTS
// ============================================================

function createFloatingHearts() {
  const container = document.querySelector("#confettiContainer");

  for (let index = 0; index < 12; index++) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = "♡";

    heart.style.left = `${20 + Math.random() * 60}%`;
    heart.style.animationDelay = `${Math.random() * 0.6}s`;

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3500);
  }
}

/* =========================================================
   FALLING FLOWER PETALS
========================================================= */

function createPetal() {
    const petal = document.createElement("div");

    petal.className = "petal";

    const flowers = ["🌸", "🌷", "✿", "❀", "♡"];

    petal.textContent =
        flowers[Math.floor(Math.random() * flowers.length)];

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize =
        (12 + Math.random() * 13) + "px";

    petal.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 12000);
}

setInterval(createPetal, 900);