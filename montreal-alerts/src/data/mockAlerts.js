// src/data/mockAlerts.js
// Arrays to build unique and varied titles
const titleAdjectives = [
  "Urgent",
  "Important",
  "Critique",
  "Rappel",
  "Notification",
  "Mise à jour",
  "Alerte"
];
const titleSubjects = [
  "ébullition d'eau",
  "fermeture de piscine",
  "travaux sur la voirie",
  "interruption d'électricité",
  "détérioration du réseau",
  "perturbation des transports",
  "mise à jour municipal"
];
const districts = [
  "Ville-Marie",
  "Plateau-Mont-Royal",
  "Rosemont–La Petite-Patrie",
  "Hochelaga-Maisonneuve",
  "Mercier-Hochelaga-Maisonneuve",
  "Villeray–Saint-Michel–Parc-Extension",
  "Lachine",
  "Outremont"
];
const sujets = [
  "Eau potable",
  "Loisirs",
  "Infrastructure",
  "Sécurité",
  "Transport public",
  "Événement public",
  "Environnement",
  "Culture"
];
// Additional phrases for content variations
const contentPhrases = [
  "Veuillez noter que cette situation est temporaire.",
  "Des mesures seront prises pour résoudre le problème.",
  "Nous vous prions de bien vouloir nous excuser pour la gêne occasionnée.",
  "Plus d’informations seront communiquées ultérieurement.",
  "Restez à l’écoute pour les mises à jour.",
  "La situation devrait s’améliorer dans les prochaines heures.",
  "Nous vous remercions de votre compréhension."
];
// Helper function to return a random element from an array
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// Helper function to generate a random date string between two dates (YYYY-MM-DD)
function randomDate(start, end) {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Month starts at 0!
  let dd = date.getDate();
  if (mm < 10) mm = '0' + mm;
  if (dd < 10) dd = '0' + dd;
  return `${yyyy}-${mm}-${dd}`;
}
// Generate thousands of alerts with varied data (for example, 5000 entries)
const numberOfAlerts = 5000;
const alerts = [];
for (let i = 1; i <= numberOfAlerts; i++) {
  // Create a more unique title combining a random adjective & subject and including the id
  const title =
    `${randomItem(titleAdjectives)}: ${randomItem(titleSubjects)} #${i}`;
  // Generate content by combining a fixed sentence with several random phrases
  const content =
    `Détails de l'alerte ${i}. ` +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    randomItem(contentPhrases) + " " +
    randomItem(contentPhrases);
  alerts.push({
    id: i,
    title: title,
    arrondissement: randomItem(districts),
    date: randomDate(new Date(2022, 0, 1), new Date(2023, 11, 31)),
    sujet: randomItem(sujets),
    content: content
  });
}
export default alerts;
