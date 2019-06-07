let imageActuelle = 1; 
affichageImage(imageActuelle); //fonction

function btnChangementImage(bla) {
  affichageImage(imageActuelle += bla); 
}

function affichageImage(slide){
  let images= document.querySelectorAll(".slide img");
  
  if(slide > images.length){
    imageActuelle = 1
  }
  if (slide < 1){
    imageActuelle = images.length
  }
  for(let i=0; i<images.length; i++ ){
  images[i].style.display = "none";
  }
  images[imageActuelle-1].style.display = "block";
}
