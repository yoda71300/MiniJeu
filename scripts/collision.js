function colision(idHero,nomclassEnnemis) { 

        var ennemi = document.getElementsByClassName(nomclassEnnemis);
        for (var i=0; i<ennemi.length; i++) {

            var hero = document.getElementById(idHero);
            var heroTop = parseFloat(hero.style.top.replace("px",""));
            var heroLeft = parseFloat(hero.style.left.replace("px",""));
            var heroWhidth = parseFloat(hero.style.width.replace("px",""));
            var heroHeight = parseFloat(hero.style.height.replace("px",""));
            var ennemisTop = parseFloat(ennemi[i].style.top.replace("px",""));
            var ennemisLeft = parseFloat(ennemi[i].style.left.replace("px",""));
            var ennemisWhidth = parseFloat(ennemi[i].style.width.replace("px",""));
            var ennemisHeight = parseFloat(ennemi[i].style.height.replace("px",""));


            if (heroLeft < ennemisLeft + ennemisWhidth -25 &&
                heroLeft + heroWhidth-28 > ennemisLeft &&
                heroTop <ennemisTop + ennemisHeight -20 &&
                heroHeight -15  +heroTop>ennemisTop)  {
                //les chiffres s'est pour corriger le bug sinon collision sans collision 
                
                alert("perdu");
                document.getElementById("terrain").removeChild(hero);
                location.reload();
            }
             else
            {
            
            }
    // }
    }
}


function colisionBoum(idBombe,nomclassEnnemis){


        var ennemi = document.getElementsByClassName(nomclassEnnemis);

    for (var i=0; i<ennemi.length; i++) {
          
           
            var hero = document.getElementById(idBombe);
            var heroTop = parseFloat(hero.style.top.replace("px",""));
            var heroLeft = parseFloat(hero.style.left.replace("px",""));
            var heroWhidth = parseFloat(hero.style.width.replace("px",""));
            var heroHeight = parseFloat(hero.style.height.replace("px",""));
            var ennemieTop = parseFloat(ennemi[i].style.top.replace("px",""));
            var ennemieLeft = parseFloat(ennemi[i].style.left.replace("px",""));
            var ennemieWhidth = parseFloat(ennemi[i].style.width.replace("px",""));
            var ennemieHeight = parseFloat(ennemi[i].style.height.replace("px",""));
           

        if (heroLeft < ennemieLeft + ennemieWhidth &&
                heroLeft + heroWhidth > ennemieLeft &&
                heroTop <ennemieTop + ennemieHeight &&
                heroHeight+heroTop>ennemieTop){
                

                 document.getElementById("terrain").removeChild(ennemi[i]);
             var ennemi = document.getElementsByClassName(nomclassEnnemis);
             console.log(ennemi.length);
                        // if(ennemi.length < ennemi.length){///////petite verif manip pour permettre le deplacement aléatoire des monstres si le monstre avec id ennemi1 est détruit
                                var ennemi = document.getElementsByClassName(nomclassEnnemis);
                                var comparaison = "ennemi1"
                                for (var i=0; i<ennemi.length; i++) {
                                    var ckeckId = ennemi[i].getAttribute("id");
                                
                                    if(ckeckId != comparaison){
                                        
                                        ennemi[i].setAttribute("id","ennemi"+[i+1]);
                                      
                                    }
                                }
                        // }
                        //  else
                        // {
                        
                        // }            
        }
    }

}