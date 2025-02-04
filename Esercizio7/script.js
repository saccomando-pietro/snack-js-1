// Dato un array di oggetti che rappresenta una lista di cani, stampare in pagina una card, per ognuno di essi.

const dogs = [
  {
    name: 'Buddy',
    breed: 'Golden Retriever',
    image: 'https://placedog.net/640/480?random',
  },
  {
    name: 'Luna',
    breed: 'Siberian Husky',
    image: 'https://placedog.net/640/480?random',
  },
  {
    name: 'Rocky',
    breed: 'Bulldog',
    image: 'https://placedog.net/640/480?random',
  },
  {
    name: 'Molly',
    breed: 'Dachshund',
    image: 'https://placedog.net/640/480?random',
  },
  {
    name: 'Max',
    breed: 'Border Collie',
    image: 'https://placedog.net/640/480?random',
  },
  {
    name: 'Daisy',
    breed: 'Poodle',
    image: 'https://placedog.net/640/480?random',
  },
];

dogs.forEach((dog) => {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${dog.name}</h3>
    <p>${dog.breed}</p>
    <img src="${dog.image}" alt="${dog.name}" />
  `;
  document.body.appendChild(card);
});

