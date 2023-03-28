const nome = prompt("Inserisci il tuo nome:");
const cognome = prompt("Inserisci il tuo cognome:");
const colore = prompt("Inserisci il tuo colore preferito");
const numero1 = prompt("Inserisci il primo numero");
const numero2 = prompt("Inserisci il secondo numero");

let numerofinale = numero1 / numero2;


let passwordgenerator = `
--------- password generator --------------
> Informazioni generiche
Nome: ${nome}
Cognome: ${cognome}
Colore preferito: ${colore}
Numero finale: ${numerofinale}

---------------------------------------------
`;

console.log(passwordgenerator);

document.getElementById("p-password-generator").innerHTML = passwordgenerator; 






