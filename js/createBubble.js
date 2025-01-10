const bubbleContainer = document.getElementById('container-bubble');

const links = [
  { href: "https://github.com/Istikharova", icon: "img/icons/github.svg", alt: "GitHub" },
  { href: "https://www.linkedin.com/in/dana-istikharova-a420211a5/", icon: "img/icons/mdi_linkedin.svg", alt: "LinkedIn" },
];

function createBubbles() {
  const totalBubbles = 15; 

  for (let i = 0; i < totalBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Zufällige Größe und Position
    const size = Math.random() * (12 - 3) + 3; 
    const left = Math.random() * 100; 
    const bottom = Math.random() * 100;
    
    bubble.style.width = `${size}rem`;
    bubble.style.height = `${size}rem`;
    bubble.style.left = `${left}%`;
    bubble.style.bottom = `${bottom}%`;

    // Jede zweite Bubble ist verlinkt
    if ((i % 6 === 0) || (i % 6 === 1)) { 
      const link = links[0];
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
    } else if (i % 6 === 2) { 
      const link = links[1]; 
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

    bubbleContainer.appendChild(bubble);
  }
}


createBubbles();
