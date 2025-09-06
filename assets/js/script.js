if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}


// --------------------------------- //
// ------> NAVBAR FUNCTIONS <--_---- //
// --------------------------------- //



function toggleMenu() {
  document.getElementById('navlinks').classList.toggle('show');
}

// Grab navbar and the trigger section
const nav = document.querySelector("nav");
const homeSection = document.querySelector("#home");
let lastScrollTop = 0;

// FIXED: Proper return for viewport check
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Handle scroll
window.addEventListener("scroll", () => {
  const homeTop = homeSection.getBoundingClientRect().top;

  // when NOT in #home → hide navbar
  if (homeTop < -100) {
    nav.classList.add("hide");
    nav.classList.remove("show");
  } else {
    // when inside/near #home → show navbar
    nav.classList.add("show");
    nav.classList.remove("hide");
  }
});

// EXTRA: Close menu when a nav link is clicked
document.querySelectorAll("#navlinks a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById('navlinks').classList.remove('show');
  });
});




// --------------------------------- //
// ------> LOADER FUNCTIONS <------- //
// --------------------------------- //



$(document).ready(function () {
  let switchOff = $('#star-02');
  let switchOn = $('#star-01');
  let bloom1 = $('#logo1');
  let bloom2 = $('#logo2');

  $('#init-loader').addClass('active');

  $('#load-sliders').on('input change', function () {
    let value = $(this).val();
    let scale2 = Math.min(5, 1 + value / 50);
    let scale3 = Math.min(5, 1 + value / 30);
    let opaci1 = Math.max(0.5, 1 - value / 100);

    if (value > 0) {
      switchOn.removeClass('blink');
      switchOn.hide();
      switchOff.show();
      bloom1.show();
      bloom2.show();
      $('#box-02').css('transform', `scale(${scale2})`);
      $('#box-03').css({ 'transform': `scale(${scale3})`, 'opacity': opaci1 });
    } else {
      switchOff.hide();
      switchOn.show();
      switchOn.addClass('blink');
      bloom1.hide();
      bloom2.hide();
    }

    if (value == 100) {
      $('#init-loader').removeClass('active');
      setTimeout(() => { $('#main').addClass('active'); }, 1200);
      $('#body-lock').removeClass('x-scroll');
      setTimeout(() => { $('#init-loader').hide(); }, 1000);
    } else {
      $('#main').removeClass('active');
      $('#init-loader').addClass('active');
    }


  });
});



// --------------------------------- //
// ------------> BIAS <------------- //
// --------------------------------- //



function flipCard(card) {
  card.classList.toggle('flipped');
}

// Front and Back image sources
const frontImages = Array(8).fill("./assets/images/cabinets/logo-noBg.png");

const backImages = [
  "./assets/images/bias/bini-aiah.webp",
  "./assets/images/bias/bini-colet.webp",
  "./assets/images/bias/bini-maloi.webp",
  "./assets/images/bias/bini-stacey.webp",
  "./assets/images/bias/bini-mikha.webp",
  "./assets/images/bias/bini-jhoanna.webp",
  "./assets/images/bias/bini-sheena.webp",
  "./assets/images/bias/bini-gwen.webp"
];
const names = [
  "AIAH", "COLET", "MALOI", "STACEY", "MIKHA", "JHOANNA", "SHEENA", "GWEN"
];
const fullNames = [
  "Mariah Queen Arceta<br>January 27, 2001",
  "Colet Vergara<br>September 14, 2001",
  "Maloi Ricalde<br>May 27, 2002",
  "Stacey Aubrey Sevilleja<br>July 13, 2003",
  "Mikha Lim<br>November 8, 2003",
  "Jhoanna Robles<br>January 26, 2004",
  "Sheena Catacutan<br>May 9, 2002",
  "Gwen Apuli<br>June 26, 2003"
];
const cardsBg = [
  "#7ccec8",
  "#6ad45c",
  "#e2ce3c",
  "#ff7fbc",
  "#d13434",
  "#37aad6",
  "#9332cf",
  "#e9a02e"
];
const cardAura = [
  "var(--bg-gradient-aiah)",
  "var(--bg-gradient-colet)",
  "var(--bg-gradient-maloi)",
  "var(--bg-gradient-stacey)",
  "var(--bg-gradient-mikha)",
  "var(--bg-gradient-jhoanna)",
  "var(--bg-gradient-sheena)",
  "var(--bg-gradient-gwen)",
];
const nameGlow = [
  "#dbf3ff",
  "#b9ff5f",
  "#fffa6c",
  "#ff06a5",
  "#ff5757",
  "#dbeeff",
  "#efceff",
  "#9d6500"
];
const cardShadows = [
  "2px 25px 20px -10px var(--bg-aiah)",
  "2px 25px 20px -10px var(--bg-colet)",
  "2px 25px 20px -10px var(--bg-maloi)",
  "2px 25px 20px -10px var(--bg-stacey)",
  "2px 25px 20px -10px var(--bg-mikha)",
  "2px 25px 20px -10px var(--bg-jhoanna)",
  "2px 25px 20px -10px var(--bg-sheena)",
  "2px 25px 20px -10px var(--bg-gwen)"
]

window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".cards-container");
  const baseCard = document.getElementById("card");
  // Clear out base card after cloning once
  for (let i = 0; i < frontImages.length; i++) {
    // Deep clone the card
    const clone = baseCard.cloneNode(true);
    // Set front image
    const frontImg = clone.querySelector(".card-front img");
    frontImg.src = frontImages[i];
    frontImg.alt = `${names[i]} Front Image`;
    // Set front BG color
    const frontImgContainer = clone.querySelector(".card-front");
    frontImgContainer.style.background = cardsBg[i];
    // Set back image
    const backImg = clone.querySelector(".card-back img");
    backImg.src = backImages[i];
    backImg.alt = `${names[i]} Back Image`;
    // Set auras
    const aura = clone.querySelector(".card-back .txt-box");
    aura.style.background = cardAura[i];
    // Set name texts
    const desc = clone.querySelector(".desc-txt");
    desc.innerHTML = `
      <p>BINI</p>
      <p class="artist-name">${names[i]}</p>
      <p>${fullNames[i]}</p>
    `;
    // Set card shadow
    const shadowFront = clone.querySelector(".card-front");
    shadowFront.style.boxShadow = cardShadows[i];
    const shadowBack = clone.querySelector(".card-back");
    shadowBack.style.boxShadow = cardShadows[i];
    // Set glowing text
    const glow = clone.querySelector(".artist-name");
    glow.style.color = nameGlow[i];

    container.appendChild(clone);
  }

  // Remove original template card
  container.removeChild(baseCard);
});



// --------------------------------- //
// ---------> BIAS ARROWS <--------- //
// --------------------------------- //



document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector('.bias-body');
  const leftArrow = document.querySelector('.circle-arrow.left');
  const rightArrow = document.querySelector('.circle-arrow.right');
  const cardWidth = document.querySelector('.card').offsetWidth + 16; // width + gap
  // Initial visibility check
  function fireRightArrowVisibility() {
    leftArrow.style.visibility = 'hidden';
    rightArrow.style.display = 'inline-flex';
  }
  // Helper to update arrow visibility
  function updateArrowVisibility() {
    const scrollLeft = wrapper.scrollLeft;
    const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
    // 1st State
    if (scrollLeft <= 0) {
      leftArrow.style.visibility = 'hidden';
    } else {
      leftArrow.style.visibility = 'visible';
      leftArrow.style.display = 'inline-flex';
    }
    // 2nd State
    rightArrow.style.display = scrollLeft >= maxScroll - 5 ? 'none' : 'inline-flex';
  }
  // Initial visibility check
  fireRightArrowVisibility();
  // Arrow click events
  rightArrow.addEventListener("click", () => {
    wrapper.scrollBy({ left: cardWidth, behavior: "smooth" });
    setTimeout(updateArrowVisibility, 300);
  });
  leftArrow.addEventListener("click", () => {
    wrapper.scrollBy({ left: -cardWidth, behavior: "smooth" });
    setTimeout(updateArrowVisibility, 300);
  });
  // If the user manually scrolls
  wrapper.addEventListener("scroll", updateArrowVisibility);
});



// --------------------------------- //
// ------------> MUSIC <------------ //
// --------------------------------- //



const releaseCard = [
  "./assets/images/music/karera-album.webp",
  "./assets/images/music/talaarawan-album.webp",
  "./assets/images/music/pantropiko-album.webp"
];
const albumTitle = [
  "Karera",
  "Talaarawan",
  "Pantropiko"
];
const albumDescriptions = [
  "Single &nbsp·&nbsp 2023 &nbsp·&nbsp 1 song",
  "Album &nbsp·&nbsp 2024 &nbsp·&nbsp 6 songs",
  "Single &nbsp·&nbsp 2023 &nbsp·&nbsp 1 song"
];
const appleLinks = [
  "https://music.apple.com/ph/album/karera/1705386707?i=1705386714",
  "https://music.apple.com/ca/album/talaarawan-ep/1733853209",
  "https://music.apple.com/ph/song/pantropiko/1716330571"
];
const spotifyLinks = [
  "https://open.spotify.com/album/6eG8V6yBx09xmexOLpcn9R",
  "https://open.spotify.com/album/2eT1XApzS0GmkJLMlCBdVv",
  "https://open.spotify.com/track/6Csrqur3IfnVp0EtHskjMw"
];

window.addEventListener("DOMContentLoaded", () => {
  const albumContainer = document.querySelector(".music-body");
  const albumCard = document.getElementById("albumCard");

  for (let x = 0; x < releaseCard.length; x++) {
    const cloneTwo = albumCard.cloneNode(true);
    cloneTwo.style.display = "block";

    // Set image
    const album = cloneTwo.querySelector(".release-card img");
    album.src = releaseCard[x];
    album.alt = `${albumTitle[x]} Album Cover`;

    // Set text and links
    const title = cloneTwo.querySelector("#albumTitle");
    title.innerHTML = albumTitle[x];

    const desc = cloneTwo.querySelector("#albumDescriptions");
    desc.innerHTML = albumDescriptions[x];

    const apple = cloneTwo.querySelector("#appleLinks");
    apple.href = appleLinks[x];

    const spotify = cloneTwo.querySelector("#spotifyLinks");
    spotify.href = spotifyLinks[x];

    // Append to DOM
    albumContainer.appendChild(cloneTwo);
  }
  albumContainer.removeChild(albumCard);
});



// ----------------------------------- //
// ------------> GALLERY <------------ //
// ----------------------------------- //



const photoCards = [
  "./assets/images/gallery/cm-aiah.webp",
  "./assets/images/gallery/cm-colet.webp",
  "./assets/images/gallery/cm-gwen.webp",
  "./assets/images/gallery/cm-jho.webp",
  "./assets/images/gallery/cm-maloi.webp",
  "./assets/images/gallery/cm-mikha.webp",
  "./assets/images/gallery/cm-sheena.webp",
  "./assets/images/gallery/cm-stacey.webp",
  "./assets/images/gallery/gp-1.webp",
  "./assets/images/gallery/gp-2.webp",
  "./assets/images/gallery/gp-3.webp",
  "./assets/images/gallery/gp-4.webp",
  "./assets/images/gallery/gp-5.webp",
  "./assets/images/gallery/gp-6.webp",
  "./assets/images/gallery/gp-7.webp",
  "./assets/images/gallery/gp-8.webp"
];

window.addEventListener("DOMContentLoaded", () => {
  const galleryBody = document.querySelector(".gallery-body");
  const galleryCard = document.querySelector(".gallery-card");
  const pageNum = document.querySelector(".page-num");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentPage = 1;
  const itemsPerPage = 8;
  const totalPages = Math.ceil(photoCards.length / itemsPerPage);

  // Function to render a page
  function renderPage(page) {
    galleryBody.innerHTML = ""; // Clear gallery
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const items = photoCards.slice(start, end);

    items.forEach(src => {
      const cloneThree = galleryCard.cloneNode(true);
      cloneThree.style.display = "block";
      const indivCard = cloneThree.querySelector("img");
      indivCard.src = src;
      indivCard.alt = "Bini Gallery Cards";
      galleryBody.appendChild(cloneThree);
    });

    // Update page number
    pageNum.textContent = `${page} of ${totalPages}`;

    // Disable prev/next when at limits
    prevBtn.style.opacity = (page === 1) ? "0.5" : "1";
    nextBtn.style.opacity = (page === totalPages) ? "0.5" : "1";
  }

  // Event listeners for navigation
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage(currentPage);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPage(currentPage);
    }
  });

  // Initialize first page
  renderPage(currentPage);
});



// ----------------------------------- //
// ---------> GALLERY MODAL <--------- //
// ----------------------------------- //



window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = modal.querySelector("button");

  const openModal = (src, alt) => {
    modalImg.src = src;
    modalImg.alt = alt || "Gallery Modal";
    modal.classList.add("show");
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
  };
  // Open on image click
  document.querySelector(".gallery-body").addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      openModal(e.target.src, e.target.alt);
    }
  });
  // Close on button
  closeBtn.addEventListener("click", closeModal);
  // Close when clicking outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});