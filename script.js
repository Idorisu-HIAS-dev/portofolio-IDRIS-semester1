

const projectsLagi = [
  {
    title: "Kalkulator Zakat Emas",
    description:
      "Aplikasi Web untuk menghitung zakat emas dengan fitur riwayat penyimpanan menggunakan localStorage.kalau mau infaq emas gak usah tanya bank,takut ilang",
    image: "/goldzakat.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://idorisu-hias-dev.github.io/Kalkulator-zakat-emas_Idorisu/",
  },
  {
    title: "Lampu Merah",
    description:
      "Simulasi Lampu merah,Cocok untuk permainan Anak-anak TK Maupun SD.Sangat mengedukasi buat anak-anak.cobalah!!!Anak anda pasti akan sangat suka 👍",
    image: "/lalin.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: " https://idorisu-hias-dev.github.io/Lampu-lalin_idorisu/",
  },
  {
    title: "Kalkulator",
    description:
      "Membuat kalkulator sederhana, Yang bisa membuat anda cepat menghitung dan cermat dalam perhitungan anda.Dijamin Anda akan pintar habis pakai kalkulator ini",
    image: "/kalkulatorku.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: " https://idorisu-hias-dev.github.io/Projek-kalkulator-idorisu/",
  },
  {
    title: "My Presentation",
    description:
      "Ini adalah presentasi saya yg sebagiannya hanya pratinjau saja.karena aslinya emang disini. Makanya jgn ragu utk menghubungi kami utk presentasi ini",
    image: "/presentqu.png",
    tags: ["Canva"],
    link: " https://yukihanapresentation.my.canva.site/haidar-idris-asy-syafiq",
  },
    {
    title: "My Channel",
    description:
      "Ini adalah channel youtube saya yg berisi vlog keseharian saya.silahkan kunjungi dan subscribe yaa",
    image: "/idris sifqa studio.png",
    tags: ["Youtube"],
    link: " youtube.com/channel/UCYUhdT5LK-cqbgRrZ_MTImw",
  },
];

const gallery = document.getElementById("gallery");

for (let i = 0; i < projectsLagi.length; i++) {
  let project = projectsLagi[i];

  let card = document.createElement("div");
  card.className = "card";
  card.style.color = "black";
  card.style.backgroundColor = "aliceblue";
  card.style.padding = "20px";
  card.style.borderRadius = "20px";
  card.style.margin = "20px";
  card.style.marginBottom = "30px";

  let image = document.createElement("img");
  image.src = project.image;
  image.alt = project.title;
  image.style.width = "150px";
  image.style.borderRadius = "20px";
  image.style.margin = "auto";
  image.style.display = "flex";
  image.style.alignItems = "center";

  let title = document.createElement("h2");
  title.textContent = project.title;
  title.style.marginTop = "10px";
  title.style.color = "black";
  title.style.fontSize = "21px";

  let description = document.createElement("p");
  description.textContent = project.description;
  description.style.textAlign = "center";
  description.style.color = "grey";

  // === TAGS ===
  let tagsContainer = document.createElement("div");
  tagsContainer.style.marginTop = "10px";
  for (let j = 0; j < project.tags.length; j++) {
    let tag = project.tags[j];
    let tagBoxText = document.createElement("span");
    tagBoxText.textContent = tag;
    tagBoxText.style.padding = "5px 10px";
    tagBoxText.style.marginRight = "5px";
    tagBoxText.style.backgroundColor = "yellow";
    tagBoxText.style.color = "black";
    tagBoxText.style.borderRadius = "10px";
    tagBoxText.style.fontSize = "12px";
    tagBoxText.style.textAlign = "center";
    tagBoxText.style.alignItems = "center";
    tagsContainer.appendChild(tagBoxText);
  }
  let link = document.createElement("a");
  link.href = project.link;
  link.textContent = "View Project";
  link.style.textAlign = "center";
  link.style.backgroundColor = "grey";
  link.style.color = "white";
  link.style.padding = "10px 15px";
  link.style.margin = "auto";
  link.style.textDecoration = "none";
  link.style.borderRadius = "20px";
  link.style.display = "flex";
  link.style.alignItems = "center";
  link.style.justifyContent = "center";

  link.target = "_blank";
  link.style.transition = "all 0.3s ease";
  link.addEventListener("mouseover", () => {
    link.style.backgroundColor = "gold";
    link.style.transform = "scale(1.1)";
    link.style.color = "black";
  });
  link.addEventListener("mouseout", () => {
    link.style.backgroundColor = "grey";
    link.style.transform = "scale(1)";
    link.style.color = "white";
  });

  // Urutan append
  gallery.appendChild(card);
  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(tagsContainer);
  card.appendChild(description);
  card.appendChild(link);
}

// --------------------------------------------------------------------------------------------------------------------

///scripting loader
// PRELOADER
window.onload = function () {
  let preloader = document.getElementById("preloader");
  let content = document.querySelector(".page-content");

  setTimeout(() => {
    preloader.style.display = "none";
    content.classList.remove("hidden");
    content.classList.add("show");
  }, 500); // durasi loading
};

// TRANSISI KE HALAMAN LAIN
const links = document.querySelectorAll("a.link");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location = this.href;
    }, 500);
  });
});

//RESPONSIVE SLIDER navbar
function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  if (navbar.className === "navbar") {
    navbar.className += "respnsive";
  } else {
    navbar.className = "navbar";
  }
}
//project gallery animasiont

const cursor = document.querySelector(".cursor");

// posisi mouse
let mouseX = 0;
let mouseY = 0;

// posisi animasi cursor (smooth)
let cursorX = 0;
let cursorY = 0;

// update posisi mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// animasi delay cursor
function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.3;
  cursorY += (mouseY - cursorY) * 0.3;

  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";

  requestAnimationFrame(animateCursor);
}

animateCursor();

// efek hover saat menyentuh link atau button
const hovers = document.querySelectorAll("a, button");

hovers.forEach((el) => {
  el.addEventListener("mouseover", () => {
    cursor.style.width = "40px";
    cursor.style.height = "40px";
    cursor.style.backgroundColor = "rgba(255,255,255,0.2)";
  });

  el.addEventListener("mouseout", () => {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.backgroundColor = "transparent";
  });
});

// Disable custom cursor on mobile
if ("ontouchstart" in window) {
  document.querySelector(".cursor").style.display = "none";
}

let started = false;
const audio = document.getElementById("audio");
const micBtn = document.getElementById("micBtn");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function startMusic() {
  if (started) return;
  started = true;

  micBtn.classList.add("active");
  canvas.style.display = "block";

  audio.play();

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const source = audioContext.createMediaElementSource(audio);
  const analyser = audioContext.createAnalyser();

  analyser.fftSize = 2048;
  source.connect(analyser);
  analyser.connect(audioContext.destination);

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  function draw() {
    requestAnimationFrame(draw);
    analyser.getByteTimeDomainData(dataArray);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 3;
    ctx.strokeStyle = "gold";
    ctx.beginPath();

    let sliceWidth = canvas.width / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128;
      const y = (v * canvas.height) / 2;

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);

      x += sliceWidth;
    }

    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
  }
  draw();
}

micBtn.addEventListener("click", startMusic);
micBtn.addEventListener("touchstart", startMusic);

// --------------------------------------------------------------------------------------------------------------------
//Animasi angka
const counters = document.querySelectorAll(".counter");

const startCounter = (entry) => {
  if (!entry[0].isIntersecting) return;

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let current = 0;
    const speed = target / 100; // semakin kecil angka 100 semakin cepat

    const update = () => {
      if (current < target) {
        current += speed;
        counter.innerText = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target; // pastikan angka pas berhenti
      }
    };

    update();
  });

  observer.disconnect(); // supaya animasi hanya terjadi sekali
};

const observer = new IntersectionObserver(startCounter, {
  threshold: 0.5,
});

observer.observe(document.querySelector(".counter-box"));


// --------------------------------------------------------------------------------------------------------------------
        window.addEventListener("scroll", () => {
            const scrollTop = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / height) * 100;

            document.getElementById("scroll-progress").style.width = progress + "%";
        });



// --------------------------------------------------------------------------------------------------------------------


