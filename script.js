
let noList = ["Tudtam", "Naaa...", "biztooos??", "Légysziiiiiiii..."];
let noButtonTextIndex = 0;
let YesButtonClick = false;
let noFontSize =35;
let noClick = 0;
let firstClick = 0;

function no() {
    noButtonTextIndex++;
    noFontSize += 10;
    noClick++;

    if (noButtonTextIndex === noList.length) {
      noButtonTextIndex = Math.floor(Math.random() * noList.length-1)+1;
    }

    if (noClick == 18) {
        document.body.style.overflowX = "auto";
    }
  
    document.getElementById("no").textContent = noList[noButtonTextIndex];


    document.getElementById("yes").style.fontSize= (noFontSize +"px") ;

    firstClick = 1;
  }


function yes() {

    document.getElementById("div1").style.display = 'none';
    document.getElementById("bkgif").style.display = "flex";
    document.getElementById("centerText").style.display = 'flex';



  }
  