// Dato un array di nomi, usa map per creare un nuovo array con tutti i nomi in maiuscolo.
// Usa map per trasformare ogni nome in maiuscolo
// OUTPUT ATTESO: ['GINO', 'PINO', 'LUCA']

const nomi = ['gino', 'pino', 'luca'];
const nomiMaiusc = nomi.map((nome)=>{
  return nome.toUpperCase()
})
console.log(nomiMaiusc)
