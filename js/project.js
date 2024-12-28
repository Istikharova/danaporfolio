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
    // Wenn derselbe Punkt erneut geklickt wird, mache nichts
    if (lastSelectedElement === item) return;

    // Färbe den Punkt entsprechend ein
    toggleDot(item);

    // Hole die zugehörige Kategorie aus dem data-category Attribut (z.B. 'all', 'webdesign', etc.)
    const category = item.querySelector('.list-category').getAttribute('data-category'); // Das data-category Attribut gibt die Kategorie an

    // Zeige die entsprechende Projekt-Kategorie an
    showProjects(category);

    // Speichere das zuletzt ausgewählte Element
    lastSelectedElement = item;
  });
});

// Funktion, um die Projekte basierend auf der Kategorie anzuzeigen
function showProjects(category) {
  // Verstecke alle Projektcontainer
  const allProjects = document.querySelectorAll('.container-projects');
  allProjects.forEach(project => {
    project.style.display = 'none';
  });

  // Wenn die Kategorie 'all' ausgewählt wird, zeige alle Projekte an, ohne sie doppelt anzuzeigen
  if (category === 'all') {
    const allProjectContainers = document.querySelectorAll('.container-projects');
    allProjectContainers.forEach(project => {
      project.style.display = 'block';  // Alle Projekte anzeigen
    });
  } else {
    // Zeige nur den Projektcontainer für die ausgewählte Kategorie an
    const selectedProjects = document.querySelector(`.container-projects[data-category="${category}"]`);
    if (selectedProjects) {
      selectedProjects.style.display = 'block';
    } else {
      console.error(`Keine Projekte gefunden für die Kategorie: ${category}`);
    }
  }
}

// Funktion zum Erstellen der "Alle Projekte"-Kategorie dynamisch
function createAllProjectsCategory() {
  const allProjectsContainer = document.querySelector('.container-projects[data-category="all"]');
  
  // Verhindere doppelte Anzeige
  if (allProjectsContainer) {
    // Hier wird der Container für "Alle Projekte" nur einmal angezeigt
    return;
  }

  // Dynamisch alle Projekte anzeigen (alle .container-projects)
  const allProjectElements = document.querySelectorAll('.container-projects');
  const allCategoryElement = document.createElement('li');
  allCategoryElement.classList.add('point-li');
  
  const allCategoryText = document.createElement('span');
  allCategoryText.classList.add('list-category');
  allCategoryText.setAttribute('data-category', 'all'); // Setze das data-category Attribut auf "all"
  allCategoryText.innerText = 'Alle Projekte';
  
  // Füge die "Alle Projekte"-Kategorie als ersten Punkt hinzu
  allCategoryElement.appendChild(allCategoryText);
  document.querySelector('.point-list').prepend(allCategoryElement);

  // Füge Eventlistener für das neue "Alle Projekte"-Element hinzu
  allCategoryElement.addEventListener('click', () => {
    toggleDot(allCategoryElement);
    showProjects('all');
  });
}

// Rufe die Funktion zum Erstellen der "Alle Projekte"-Kategorie auf
createAllProjectsCategory();
