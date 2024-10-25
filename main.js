var div_1   = document.getElementById('div9'); 
var div_2   = document.getElementById('div10');
var div_3   = document.getElementById('div11');
var div_4   = document.getElementById('div5');
var div_5   = document.getElementById('div6');
var div_6   = document.getElementById('div7');
var div_7   = document.getElementById('div1');
var div_8   = document.getElementById('div2');
var div_9   = document.getElementById('div3');
var div_10  = document.getElementById('div4');
var div_11  = document.getElementById('div8');
var div_12  = document.getElementById('div12');
var div_13  = document.getElementById('div16');
var div_14  = document.getElementById('div15');
var div_15  = document.getElementById('div14');
var div_16  = document.getElementById('div13');
var div_17  = document.getElementById('div17');
var div_18  = document.getElementById('div18');

var btn_1    = div_1  . ariaValueText;
var btn_2    = div_2  . ariaValueText;
var btn_3    = div_3  . ariaValueText;
var btn_4    = div_4  . ariaValueText;
var btn_5    = div_5  . ariaValueText;
var btn_6    = div_6  . ariaValueText;
var btn_7    = div_7  . ariaValueText;
var btn_8    = div_8  . ariaValueText;
var btn_9    = div_9  . ariaValueText;
var del      = div_10 . ariaValueText;
var plus     = div_11 . ariaValueText;
var moins    = div_12 . ariaValueText;
var times    = div_13 . ariaValueText;
var divide   = div_14 . ariaValueText;
var btn_0    = div_15 . ariaValueText;
var  decimal = div_16 . ariaValueText;
var reset    = div_17 . ariaValueText;
var equal    = div_18 . ariaValueText;

var input = document.getElementById("input");
var text = document.getElementById("text");
var element_1;
var element_2;
var signe;

var float = true;


div_1.addEventListener("click", function(){
  if(input.value === ""){
  input.value = btn_1;
}else{
  input.value = input.value + "1";
}
})
div_2.addEventListener("click", function(){
  if(input.value === ""){
  input.value = btn_2;
}else{
  input.value = input.value + "2";
}
})
div_3.addEventListener("click", function(){
  if(input.value === ""){
  input.value = btn_3;
}else{
  input.value = input.value + "3";
}
})
div_4.addEventListener("click", function(){
  if(input.value === ""){
  input.value = btn_4;
}else{
  input.value = input.value + "4";
}
})
div_5.addEventListener("click", function(){
  if(input.value === ""){
  input.value = btn_5;
}else{
  input.value = input.value + "5";
}
})
div_6.addEventListener("click", function(){
  if(input.value === ""){
  input.value = btn_6;
}else{
  input.value = input.value + "6";
}
})
div_7.addEventListener("click", function(){
  if(input.value === ""){
  input.value = btn_7;
}else{
  input.value = input.value + "7";
}
})
div_8.addEventListener("click", function(){
  if(input.value === ""){
  input.value = btn_8;
}else{
  input.value = input.value + "8";
}
})
div_9.addEventListener("click", function(){
  if(input.value === ""){
  input.value = btn_9;
}else{
  input.value = input.value + "9";
}
})
div_15.addEventListener("click", function(){
  if(input.value === ""){
    input.value = 0;
  }else{
    input.value = input.value + "0";
  } 
})


  div_16.addEventListener("click", function(){
  
    if(input.value === ""){
  
      input.value = "0.";
    
    }else{
  
      input.value = input.value + ".";
      
    }
  })


div_11.addEventListener("click", function(){

  if(input.value === ""){

  }else{
    text.innerText = input.value + " + ";
    element_1 = input.value;
    input.value = ""; 
    signe = "+";
  }
})
div_13.addEventListener("click", function(){
  if(input.value === ""){

  }else{
    text.innerText = input.value + " x ";
    element_1 = input.value;
    input.value = ""; 
    signe = "*";
  }
})
div_14.addEventListener("click", function(){
  if(input.value === ""){

  }else{
    text.innerText = input.value + " / ";
    element_1 = input.value;
    input.value = ""; 
    signe = "/";
  }
})
div_12.addEventListener("click", function(){
  if(input.value === ""){
   input.value = "-";
  }else{
    text.innerText = input.value + " - ";

    element_1 = input.value;
    input.value = ""; 
    signe = "-";
  }
})



div_18.addEventListener("click", function(){
  if(input.value === "0"){
    input.value = "impossible";
    text.innerText = "impossible";
  }else{
    
    if(signe === "+"){
    element_2 = input.value;
    text.innerText = element_1 + " " + signe + " " + element_2;
    input.value = parseFloat(element_1) + parseFloat(element_2);
    }else if(signe === "-"){
      element_2 = input.value;
      text.innerText = element_1 + " " + signe + " " + element_2;
      input.value = parseFloat(element_1) - parseFloat(element_2);
    }else if(signe === "*"){
      element_2 = input.value;
      text.innerText = element_1 + " x " + element_2;
      input.value = parseFloat(element_1) * parseFloat(element_2);
    }else if(signe === "/"){
      element_2 = input.value;
      text.innerText = element_1 + " / " + element_2;
      input.value = parseFloat(element_1) / parseFloat(element_2);
    }
  
  }
})

div_17.addEventListener("click", function(){
  text.innerText = "";
  input.value = "";
})

div_10.addEventListener("click", function(){
  input.value =  input.value / 10;
  input.value = parseInt(input.value, 10);

  if(input.value === "0"){
    input.value = "";
  }
})

document.getElementById("themechoice1").addEventListener("click", function(){
   
  document.getElementById("body").style.setProperty("--clr-first-main"     ,"#3a4764")
  document.getElementById("body").style.setProperty("--clr-first-key"      ,"#232c43")
  document.getElementById("body").style.setProperty("--clr-first-screen"   ,"#182034")
  document.getElementById("body").style.setProperty("--clr-first-del"      ,"#637097")
  document.getElementById("body").style.setProperty("--clr-first-delshadow","#404e72")
  document.getElementById("body").style.setProperty("--clr-first-red"      ,"#d03f2f")
  document.getElementById("body").style.setProperty("--clr-first-redshadow","#93261a")
  document.getElementById("body").style.setProperty("--clr-first-back"     ,"#eae3dc")
  document.getElementById("body").style.setProperty("--clr-first-delactive","#b4a597")
  document.getElementById("body").style.setProperty("--clr-first-text"     ,"#444b5a")
  document.getElementById("body").style.setProperty("--clr-first"          ,"#ffffff")

})

document.getElementById("themechoice2").addEventListener("click", function(){
  
  document.getElementById("body").style.setProperty("--clr-first-main"     , "#e6e6e6  ");
  document.getElementById("body").style.setProperty("--clr-first-key"      , "#1b5f65  ");
  document.getElementById("body").style.setProperty("--clr-first-screen"   , "#ededed  ");
  document.getElementById("body").style.setProperty("--clr-first-del"      , "#ca5502  ");
  document.getElementById("body").style.setProperty("--clr-first-delshadow", "#893901  ");
  document.getElementById("body").style.setProperty("--clr-first-red"      , "#e5e4e1  ");
  document.getElementById("body").style.setProperty("--clr-first-redshadow", "#a69d91  ");
  document.getElementById("body").style.setProperty("--clr-first-back"     , "#eae3dc  ");
  document.getElementById("body").style.setProperty("--clr-first-delactive", "#b4a597  ");
  document.getElementById("body").style.setProperty("--clr-first-text"     , "#35352c  ");
  document.getElementById("body").style.setProperty("--clr-first"          , "#000  ");

})

document.getElementById("themechoice3").addEventListener("click", function(){
   
  document.getElementById("body").style.setProperty("--clr-first-main"     ,"#160628")
  document.getElementById("body").style.setProperty("--clr-first-key"      ,"#1d0934")
  document.getElementById("body").style.setProperty("--clr-first-screen"   ,"#ffffff")
  document.getElementById("body").style.setProperty("--clr-first-del"      ,"#58077d")
  document.getElementById("body").style.setProperty("--clr-first-delshadow","#bc15f4")
  document.getElementById("body").style.setProperty("--clr-first-red"      ,"#00e0d1")
  document.getElementById("body").style.setProperty("--clr-first-redshadow","#6cf9f2")
  document.getElementById("body").style.setProperty("--clr-first-back"     ,"#341c4f")
  document.getElementById("body").style.setProperty("--clr-first-delactive","#871c9c")
  document.getElementById("body").style.setProperty("--clr-first","#ffe53d")
  document.getElementById("body").style.setProperty("--clr-first-text","#ffe53d")

})