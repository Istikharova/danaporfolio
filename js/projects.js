// Finde alle Listenelemente
const listItems = document.querySelectorAll('#filter-nav li');

// Initialisierung des zuletzt ausgewählten Elements
let lastSelectedElement = null;

// Funktion zum Hinzufügen des Punktes und Entfernen des vorherigen Punktes
function toggleDot(element) {
  // Überprüfen, ob das letzte ausgewählte Element existiert und unterschiedlich zum aktuellen Element ist
  if (lastSelectedElement && lastSelectedElement !== element) {
    // Wenn ja, entferne den Punkt vom letzten ausgewählten Element
    if (lastSelectedElement.querySelector('.dot')) {
      lastSelectedElement.removeChild(lastSelectedElement.querySelector('.dot'));
    }
  }

  // Füge den Punkt zum aktuellen Element hinzu
  if (!element.querySelector('.dot')) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    element.appendChild(dot);
  }

  // Setze das aktuelle Element als das zuletzt ausgewählte Element
  lastSelectedElement = element;
}

// Füge Eventlistener für jedes Listenelement hinzu
listItems.forEach(item => {
  item.addEventListener('click', () => {
    toggleDot(item);
    // Zeige die entsprechende Projekt-Kategorie basierend auf dem geklickten Listenelement an
    const category = item.classList[1]; // Die zweite Klasse des Listenelements gibt die Kategorie an
    showProjects(category);
  });
});

// Funktion, um die Projekte basierend auf der Kategorie anzuzeigen
function showProjects(category) {
  // Verstecke alle Projektcontainer
  const allProjects = document.querySelectorAll('.containerProjects');
  allProjects.forEach(project => {
    project.style.display = 'none';
  });

  // Zeige nur den Projektcontainer für die ausgewählte Kategorie an
  const selectedProjects = document.querySelector(`.containerProjects.${category}`);
  if (selectedProjects) {
    selectedProjects.style.display = 'block';
  }
}