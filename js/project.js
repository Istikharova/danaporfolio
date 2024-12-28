const pointItems = document.querySelectorAll('.point-li');
let lastSelectedElement = null;

// Funktion zum Hinzufügen des Punktes und Entfernen des vorherigen Punktes
function toggleDot(element) {
  pointItems.forEach(item => {
    item.querySelector('.point').classList.remove('full');
    item.querySelector('.point').classList.add('ghost');
  });

  const point = element.querySelector('.point');
  point.classList.remove('ghost');
  point.classList.add('full');
}

// Füge Eventlistener für jedes point-li Element hinzu
pointItems.forEach(item => {
  item.addEventListener('click', () => {
    if (lastSelectedElement === item) return;

    toggleDot(item);

    const category = item.querySelector('.list-category').getAttribute('data-category');

    showProjects(category);

    lastSelectedElement = item;
  });
});

// Funktion, um die Projekte basierend auf der Kategorie anzuzeigen
function showProjects(category) {
  const allProjects = document.querySelectorAll('.container-projects');
  allProjects.forEach(project => {
    project.style.display = 'none';
  });

  // Wenn die Kategorie 'all' ausgewählt wird, zeige alle Projekte an, ohne sie doppelt anzuzeigen
  if (category === 'all') {
    const allProjectContainers = document.querySelectorAll('.container-projects');
    allProjectContainers.forEach(project => {
      project.style.display = 'block'; 
    });
  } else {
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
  allCategoryText.setAttribute('data-category', 'all');
  allCategoryText.innerText = 'Alle Projekte';
  

  allCategoryElement.appendChild(allCategoryText);
  document.querySelector('.point-list').prepend(allCategoryElement);

  allCategoryElement.addEventListener('click', () => {
    toggleDot(allCategoryElement);
    showProjects('all');
  });
}

createAllProjectsCategory();
