ScrollReveal().reveal('.bubble',{
    duration: 1500,
    origin:'top',
    distance:'10px',
    reset: true,
    easing: 'ease-in' 
});
ScrollReveal().reveal('.b-one',{
    delay:500

});
ScrollReveal().reveal('.b-two',{
    delay:200

});

/* creage bubble */
const bubbleContainer = document.getElementById('container-bubble');

// Array von Links und Icons
const links = [
  { href: "https://github.com/Istikharova", icon: "img/icons/github.svg", alt: "GitHub" },
  { href: "https://www.linkedin.com/in/dana-istikharova-a420211a5/", icon: "img/icons/mdi_linkedin.svg", alt: "LinkedIn" },
  // Füge hier weitere Links und Icons hinzu
];

// Funktion, um Bubbles zu erzeugen
function createBubbles() {
  links.forEach(() => {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Zufällige Position und Größe für jede Bubble
    const size = Math.random() * (12 - 3) + 3; // Random size between 3rem and 12rem
    const left = Math.random() * 100; // Random horizontal position (0% to 100%)
    const bottom = Math.random() * 100; // Random vertical position (0% to 100%)
    
    bubble.style.width = `${size}rem`;
    bubble.style.height = `${size}rem`;
    bubble.style.left = `${left}%`;
    bubble.style.bottom = `${bottom}%`;
    
    const anchor = document.createElement('a');
    anchor.href = links[Math.floor(Math.random() * links.length)].href; // Random link selection
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    
    const img = document.createElement('img');
    img.src = links[Math.floor(Math.random() * links.length)].icon; // Random icon selection
    img.alt = links[Math.floor(Math.random() * links.length)].alt;
    img.title = links[Math.floor(Math.random() * links.length)].alt;
    
    anchor.appendChild(img);
    bubble.appendChild(anchor);
    bubbleContainer.appendChild(bubble);
  });
}

// Bubbles erstellen
createBubbles();

