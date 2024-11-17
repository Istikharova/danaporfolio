// Finde alle .point-li Elemente
const pointItems = document.querySelectorAll('.point-li');

// Initialisiere das zuletzt ausgewählte Element
let lastSelectedElement = null;

// Funktion zum Hinzufügen des Punktes und Entfernen des vorherigen Punktes
function toggleDot(element) {
  // Setze alle Punkte zurück (mache sie weiß)
  pointItems.forEach(item => {
    item.querySelector('.point').classList.remove('full');
    item.querySelector('.point').classList.add('ghost');
  });

  // Setze den angeklickten Punkt auf grün (full)
  const point = element.querySelector('.point');
  point.classList.remove('ghost');
  point.classList.add('full');
}

// Füge Eventlistener für jedes point-li Element hinzu
pointItems.forEach(item => {
  item.addEventListener('click', () => {
    // Färbe den Punkt entsprechend ein
    toggleDot(item);

    // Hole die zugehörige Kategorie aus dem li-Element (z.B. 'all', 'webdesign', etc.)
    const category = item.querySelector('.list-category').classList[2]; // Die zweite Klasse des li-Elements gibt die Kategorie an

    // Zeige die entsprechende Projekt-Kategorie an
    showProjects(category);
  });
});

// Funktion, um die Projekte basierend auf der Kategorie anzuzeigen
function showProjects(category) {
  // Verstecke alle Projektcontainer
  const allProjects = document.querySelectorAll('.container-projects');
  allProjects.forEach(project => {
    project.style.display = 'none';
  });

  // Zeige nur den Projektcontainer für die ausgewählte Kategorie an
  const selectedProjects = document.querySelector(`.container-projects.${category}`);
  if (selectedProjects) {
    selectedProjects.style.display = 'block';
  }
}




