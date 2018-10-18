 function init() {
      //nom,className,position,width,height,y,x,display,couleur,nompng
      //Création du terrain
      ajoutObjet("terrain","","relative",650,650,0,0,"block","grey",);

      //Creation du personnage
      ajoutObjet("personnage","","absolute",50,50,0,0,"block","","mario.gif");
      ajoutObjet("laBombe","","absolute",50,50,0,0,"none","","bomb2.png");
      //Création des méchants
      ajoutObjet("ennemi1","mechants","absolute",50,50,50,100,"block","","bowser.gif");
      ajoutObjet("ennemi2","mechants","absolute",50,50,350,500,"block","","donkeykong.gif");
      ajoutObjet("ennemi3","mechants","absolute",50,50,290,150,"block","","yoshi.gif");
      ajoutObjet("ennemi4","mechants","absolute",50,50,500,280,"block","","champignon.gif");
 }

 window.addEventListener("keydown", function (event) {

    if (event.defaultPrevented) {
      return;
    }
    deplacement(event);
    afficheBombe(event);
    event.preventDefault();
}, true); 




function deplacement(event){
    //donnée enfant
    var terrain = document.getElementById("terrain");
    var perso = document.getElementById("personnage"); 
    var topPerso = parseFloat(perso.style.top.replace("px",""));  
    var leftPerso = parseFloat(perso.style.left.replace("px",""));    
    var heightPerso = parseFloat(perso.style.height.replace("px",""));    
    var widthPerso = parseFloat(perso.style.width.replace("px", "")); 

    //donnée parent
    var widthTerrain = parseFloat(terrain.style.width.replace("px",""));
    var heightTerrain = parseFloat(terrain.style.height.replace("px",""));
    
    //chercher le code de la touche
    var touche = event.keyCode;
    
    if (touche === 39) {
      if (leftPerso === (widthTerrain-widthPerso)) {
        perso.style.left = leftPerso +"px";
      }
      else
      {        
        perso.style.left = leftPerso + widthPerso/5 + "px";
        colision("personnage","mechants");
      }
    }

    if (touche === 37) {
      if (leftPerso === 0) {
        perso.style.left = leftPerso +"px";
      }
      else
      {
        perso.style.left = leftPerso - widthPerso/5 +"px" ;
        colision("personnage","mechants");
      }
    }

    if (touche === 40) {
      if (topPerso === (heightTerrain - widthPerso)){
        perso.style.top = topPerso+"px";
      }
      else
      {
        perso.style.top = topPerso + widthPerso/5 +"px" ;
        colision("personnage","mechants");
      }
    }

    if (touche === 38) {
      if (topPerso === 0) {
        perso.style.top = 0+"px";
      }

      else
      {
        perso.style.top = topPerso - widthPerso/5 +"px" ;
        colision("personnage","mechants");
      }
    }
}


var positionXEnfant;
var positionYEnfant;
var bool = true;

  function afficheBombe(event){

    if (event.keyCode === 32) {
      if (bool === true) {
      bool = false;
      positionXEnfant = parseFloat(personnage.style.left.replace("px",""));
      positionYEnfant = parseFloat(personnage.style.top.replace("px",""));
      laBombe.style.top = positionYEnfant+"px";
      laBombe.style.left = positionXEnfant+"px";
      laBombe.style.display = "block";

      setTimeout(function(){
        bool = true;
        laBombe.style.display = "none";
        if (positionXEnfant === 0) {

        }
        else
        {
          // nom,className,position,width,height,top,left,display,couleur
            ajoutObjet("boumGauche","explosion","absolute",50,50,positionYEnfant,positionXEnfant-50,"block","","explosion.png");
            colisionBoum("boumGauche","mechants");
          // colision(1,"div-enfant","boum-Gauche");
        }

        if (positionXEnfant === 600) {
      
        }
        else
        {
          ajoutObjet("boumDroit","explosion","absolute",50,50,positionYEnfant,positionXEnfant+50,"block","","explosion.png");
          colisionBoum("boumDroit","mechants");
          // colision(1,"div-enfant","boum-Droit");
        }

        
        if (positionYEnfant === 600) {
          
        }
        else 
        {
          ajoutObjet("boumBas","explosion","absolute",50,50,positionYEnfant+50,positionXEnfant,"block","","explosion.png");
          colisionBoum("boumBas","mechants");
          // colision(1,"div-enfant","boum-Bas");
          }

          if (positionYEnfant === 0) 
          {
            
          }
          else
          {
          
          ajoutObjet("boumHaut","explosion","absolute",50,50,positionYEnfant-50,positionXEnfant,"block","","explosion.png");
          colisionBoum("boumHaut","mechants");
          // colision(1,"div-enfant","boum-haut");
        }
        ajoutObjet("boumCentre","explosion","absolute",50,50,positionYEnfant,positionXEnfant,"block","","explosion.png");
         colisionBoum("boumCentre","mechants");
          // colision(1,"div-enfant","boum-Centre");

        
        setTimeout(function(){
              var elements = document.getElementsByClassName("explosion")
              while(elements.length > 0)
              {
                   elements[0].parentNode.removeChild(elements[0]);
              }


        },500);


       },1200);

    } 
  }  
}

