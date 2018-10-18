var objetTerrain;
var newObjet;


function ajoutObjet(nom,className,position,width,height,y,x,display,couleur,nompng) {
			//création de l'objet
			newObjet = document.createElement('div');
			newObjet.setAttribute("id",nom);
			newObjet.setAttribute("class",className);
			newObjet.style.position=position;
			newObjet.style.width = width+"px";
			newObjet.style.height = height+"px";
			newObjet.style.top =  y+"px";
			newObjet.style.left = x+"px";
			newObjet.style.display = display;
			newObjet.style.background = couleur;
			if(nompng === undefined){
			}
			else{
			newObjet.style.backgroundImage ="url(images/"+nompng+")" ;
			newObjet.style.backgroundRepeat = "no-repeat";
			newObjet.style.backgroundSize = "contain";

			}

			// ajout dans son parent

		 objetTerrain = document.getElementById("terrain");	
		 if(objetTerrain === null){// si le parent n existe pas
		 	document.body.appendChild(newObjet);
		 }
		 else{
		 objetTerrain.appendChild(newObjet);
		}
						
}
