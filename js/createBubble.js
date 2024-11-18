const bubbleContainer = document.getElementById('container-bubble');

// Arrays von Links und Icons für GitHub und LinkedIn
const links = [
  { href: "https://github.com/Istikharova", icon: "img/icons/github.svg", alt: "GitHub" },
  { href: "https://www.linkedin.com/in/dana-istikharova-a420211a5/", icon: "img/icons/mdi_linkedin.svg", alt: "LinkedIn" },
];

// Funktion, um Bubbles zu erzeugen
function createBubbles() {
  const totalBubbles = 15; // Anzahl der Bubbles insgesamt
  const githubCount = 3; // Anzahl der GitHub verlinkten Bubbles
  const linkedinCount = 3; // Anzahl der LinkedIn verlinkten Bubbles

  for (let i = 0; i < totalBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Zufällige Größe und Position
    const size = Math.random() * (12 - 3) + 3; // Random size between 3rem and 12rem
    const left = Math.random() * 100; // Random horizontal position (0% to 100%)
    const bottom = Math.random() * 100; // Random vertical position (0% to 100%)
    
    bubble.style.width = `${size}rem`;
    bubble.style.height = `${size}rem`;
    bubble.style.left = `${left}%`;
    bubble.style.bottom = `${bottom}%`;

    // Jede zweite Bubble ist verlinkt
    if ((i % 6 === 0) || (i % 6 === 1)) { // GitHub links
      const link = links[0]; // Nur GitHub Link verwenden
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      
      const img = document.createElement('img');
      img.src = link.icon;
      img.alt = link.alt;
      img.title = link.alt;
      
      anchor.appendChild(img);
      bubble.appendChild(anchor);
    } else if (i % 6 === 2) { // LinkedIn link
      const link = links[1]; // Nur LinkedIn Link verwenden
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      
      const img = document.createElement('img');
      img.src = link.icon;
      img.alt = link.alt;
      img.title = link.alt;
      
      anchor.appendChild(img);
      bubble.appendChild(anchor);
    }

    // Die Bubble wird in den Container eingefügt
    bubbleContainer.appendChild(bubble);
  }
}

// Bubbles erstellen
createBubbles();
