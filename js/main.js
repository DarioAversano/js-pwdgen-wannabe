const nome = prompt("Inserisci il tuo nome:");
const cognome = prompt("Inserisci il tuo cognome:");
const colore = prompt("Inserisci il tuo colore preferito");
const numero1 = prompt("Inserisci il primo numero");
const numero2 = prompt("Inserisci il secondo numero");
const animale = prompt("Inserisci il nome del tuo animale domestico");

let numerofinale = numero1 / numero2;


let passwordgenerator = `
Password Generator:
> Casual Password: ${nome}${cognome}${colore}${numerofinale}${animale}

---------------------------------------------
`;

console.log(passwordgenerator);

document.getElementById("p-password-generator").innerHTML = passwordgenerator; 






