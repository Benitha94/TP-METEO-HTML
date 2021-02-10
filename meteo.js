function showCity() 
{
	// 1. Récupérer la valeur courante du menu 
	// Pour ça on va faire :
	let nomVilleSelectionnee = document.getElementById("menuVille").value;
	//console.log("nomVilleSelectionnee", nomVilleSelectionnee);
	// 2. Récupérer la liste de toutes les div correspondant à une div de météo 
	// Pour ça on va faire :
	let cities = document.getElementsByClassName("city");
	//console.log("cities", cities);
	// 3. Parcourir la liste des div et cacher celles qui ne sont pas sélectionnées.
	// TODO : definir l : la taille max de votre tableau cities
	let l = cities.length;
	for (i=0; i<l; i++) {
		if (cities[i].id == nomVilleSelectionnee) {
			// garder l'element visible -> ELEMENT.style.display= "none";
				document.getElementById(nomVilleSelectionnee).style.display = "block";
		} else {
			// cacher l'element -> ELEMENT.style.display= "";
			document.getElementById(cities[i].id).style.display = "none";
		}
	}
}