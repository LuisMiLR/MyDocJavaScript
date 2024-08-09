//More string method

//String .split(separator)
/*
La .split(separator)méthode divise la chaîne en un tableau de sous-chaînes en fonction des informations que separatorvous fournissez. Par exemple :
*/

let apps = "Calculator,Phone,Contacts";
let appsArray = apps.split(",");
console.log(appsArray); // ["Calculator", "Phone", "Contacts"]

//String.replace(search, replace)

/*
La .replace(search, replace)méthode renvoie une nouvelle chaîne où la première occurrence du search paramètre que vous fournissez est remplacée par le replace paramètre, par exemple :
*/

const message = "You are welcome.";
message.replace(" ", "_"); // "You_are welcome."; (only the first occurrence has been replaced)
console.log(message); // "You are welcome." (original string is not changed)