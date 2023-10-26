let userName = prompt("Inserisci il tuo nome");
let userSurname = prompt("Inserisci il tuo cognome");
let userColor = prompt("Inserisci il tuo colore preferito");
let userPassword = userName + userSurname + userColor + "#23";

// debug calcolo

console.log(userPassword);
document.getElementById('risultato').innerHTML = `La tua magnifica password anti haking &egrave 🙀; ${userPassword}`;