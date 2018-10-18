

function random1 () {
	return Math.floor(Math.random() * 4) + 1;
}


function deplacementennemi (ennemi) {

		var rand1 = random1();
		var topEnnemi = parseFloat(ennemi.style.top.replace("px",""));
   		var leftEnnemi = parseFloat(ennemi.style.left.replace("px",""));

			switch(rand1){
				case 1 :
				if(leftEnnemi < 580) {
						var inter = 0;
						var abc = setInterval(function() {
						leftEnnemi++;
						inter++;
						ennemi.style.left = leftEnnemi +"px";
						colision("personnage","mechants");
						if (inter === 50) {clearInterval(abc);}
		                },5);	
		                
					}
				break;

				case 2 :
				if(leftEnnemi > 70) {
						var inter = 0;
						var abc = setInterval(function() {
						leftEnnemi--;
						inter++;
						ennemi.style.left = leftEnnemi +"px";
						colision("personnage","mechants");
						if (inter === 50) {clearInterval(abc);}
		                },5);
		                	
					}
				break;

				case 3 :
				if(topEnnemi < 580) {
						var inter = 0;
						var abc = setInterval(function() {
						topEnnemi++;
						inter++;
						ennemi.style.top = topEnnemi +"px";
						colision("personnage","mechants");
						if (inter === 50) {clearInterval(abc);}
		                },5);
		                
					}
				break;

				case 4 :
				if(topEnnemi > 70) {
						var inter = 0;
						var abc = setInterval(function() {
						topEnnemi--;
						inter++;
						ennemi.style.top = topEnnemi +"px";
						colision("personnage","mechants");
						if (inter === 50) {clearInterval(abc);}
		                },5);
		                	
					}
				break;
			}
	 

}


window.addEventListener("keydown",function(e) {
    if(e.keyCode === 13) {
    	setInterval(function() {

    		var ennemi = document.getElementsByClassName("mechants");
        for (var i=1; i<=ennemi.length; i++) {
			var bowser = document.getElementById('ennemi'+[i]);
			deplacementennemi(bowser);
		}
			
		},600);
	}
})





  



