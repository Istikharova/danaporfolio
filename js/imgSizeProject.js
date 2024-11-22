document.addEventListener("DOMContentLoaded", () => {
    // Create modal element
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <button class="modal-close">&times;</button>
      <img src="" alt="Fullscreen Image">
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector("img");

    // Event delegation for opening the modal
    document.body.addEventListener("click", (event) => {
        const card = event.target.closest(".img-card");
        if (card) {
            const bgImage = getComputedStyle(card).backgroundImage;
            const imgUrl = bgImage.slice(5, -2);
            modalImg.src = imgUrl;
            modal.classList.add("active");
        }
    });

    // Close modal when clicking close button or outside the image
    modal.addEventListener("click", (event) => {
        if (
            event.target.classList.contains("modal-close") || 
            event.target === modal
        ) {
            modal.classList.remove("active");
        }
    });
});

  