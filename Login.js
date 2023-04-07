
const burgernav = document.getElementById('burgernav');
const navoverlay = document.getElementById('navoverlay');
let menuOpen = false;
burgernav.addEventListener('click', () =>{
  if(!menuOpen){
    burgernav.classList.add('open');
    navoverlay.style.width = "100%";
    menuOpen = true;
  } else {
    burgernav.classList.remove('open');
    navoverlay.style.width = "0%";
    menuOpen = false;
  }
});


function Slide(){
    var container00 = document.createDocumentFragment();
  
    for(var i=0; i< 50;i++){
      var mar = document.createElement('div');
      var mar1 = document.createElement('div');
          for(var k=0; k<5; k++){
            mar.textContent = mar.textContent + "Coffee_Is_Good_Coffee_Is_Great_";
            mar1.textContent = mar.textContent + "Coffee_Is_Good_Coffee_Is_Great_";
  
            mar1.style.fontSize = "20px";
            mar.style.fontSize = "20px";
          }
      if(i%2 == 0){
          mar.classList.add("left");
          mar1.classList.add("left");
          mar1.style.float= "left";
          mar.style.float= "left";
          mar.style.width= "50%";
          mar1.style.width= "50%";
          
        }else{
          mar.classList.add("right");
          mar1.classList.add("right");
          mar1.style.float= "left";
          mar.style.float= "left";
          mar.style.width= "50%";
          mar1.style.width= "50%";
        }

        mar.style.color = "#453C38";
        mar1.style.color = "#453C38";
        mar1.style.fontFamily = "Vejlikan";
        mar.style.fontFamily = "Vejlikan";
        mar1.style.opacity = ".5";
        mar.style.opacity = ".5";
        
      container00.appendChild(mar);
      container00.appendChild(mar1);
    }
    
    document.getElementById("sliders").appendChild(container00);
  }
  
  Slide();
  

