const nome = prompt("Inserisci il tuo nome:");
const cognome = prompt("Inserisci il tuo cognome:");
const colore = prompt("Inserisci il tuo colore preferito");
const numero = 21;


let passwordgenerator = `
--------- password generator --------------
> Informazioni generiche
Nome: ${nome}
Cognome: ${cognome}
Colore preferito: ${colore}
Numero: ${numero}

---------------------------------------------
`;

console.log(passwordgenerator);

document.getElementById("p-password-generator").innerHTML = passwordgenerator; 






