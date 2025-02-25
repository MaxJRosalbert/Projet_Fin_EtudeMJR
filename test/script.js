document.addEventListener("DOMContentLoaded", () => {
  // Action du bouton principal
  const bouton = document.querySelector(".bouton-principal");
  if (bouton) {
      bouton.addEventListener("click", () => {
          alert("Merci de votre intérêt ! Nous vous contacterons bientôt.");
      });
  }

  // Fonctionnalité interactive de la galerie
  const images = document.querySelectorAll(".grille-images img");

  images.forEach((img) => {
      img.addEventListener("click", () => {
          const overlay = document.createElement("div");
          overlay.classList.add("overlay");
          overlay.innerHTML = `<div class="popup"><img src="${img.src}" alt="${img.alt}"></div>`;
          
          document.body.appendChild(overlay);

          overlay.addEventListener("click", () => {
              document.body.removeChild(overlay);
          });
      });
  });
});
