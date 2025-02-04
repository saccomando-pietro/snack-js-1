// Dato un array di prodotti, ottenere solo quelli con prezzo inferiore a 100€.
// Usa filter per ottenere solo i prodotti che costano meno di 100€
const prodotti = [
  { nome: 'Smartphone', prezzo: 800 },
  { nome: 'Cuffie', prezzo: 50 },
  { nome: 'Mouse', prezzo: 30 },
  { nome: 'Monitor', prezzo: 120 }
];

let prodottiCento = prodotti.filter((prodotto) =>{
  return prodotto.prezzo <= 100
})

console.log(prodottiCento)