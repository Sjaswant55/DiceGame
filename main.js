let n1=Math.random();
n1=n1*6;
let n11=Math.floor(n1)+1;

let n2=Math.random();
n2=n2*6;
let n22=Math.floor(n2)+1;


let randomNumber1="images/dice"+ n11 + ".png";
let randomNumber2="images/dice"+ n22 + ".png";

 

document.querySelectorAll("img")[0].setAttribute("src",randomNumber1);
document.querySelectorAll("img")[1].setAttribute("src",randomNumber2);
if(n11>n22)
document.getElementById("result").innerHTML="Player "+1+" win";
else if(n11<n22)
document.getElementById("result").innerHTML="Player "+2+" win";
else 
document.getElementById("result").innerHTML="Tied";
 