const output=document.getElementById("output");
const first=document.getElementById("first");
const second=document.getElementById("second");
const third=document.getElementById("third");
const node=document.getElementById("node");
const sign=document.getElementById("sign");

function blank() {
btn.innerHTML="1";
}

function timesTables() {
const btnCall=document.getElementById("btn");
const btn = document.getElementById("btn").innerHTML;
const array=[btn];

if (node.innerHTML==="0" && sign.innerHTML==="+"){}
else if (node.innerHTML==="1" && sign.innerHTML==="+") {
btnCall.innerHTML++;}
else if (node.innerHTML==="2" && sign.innerHTML==="+") {
btnCall.innerHTML++;
btnCall.innerHTML++;}
else if (node.innerHTML==="3" && sign.innerHTML==="+") {
btnCall.innerHTML++;
btnCall.innerHTML++;  
btnCall.innerHTML++;}
else if (node.innerHTML==="4" && sign.innerHTML==="+") {
btnCall.innerHTML++;
btnCall.innerHTML++;  
btnCall.innerHTML++;
btnCall.innerHTML++;  }
else if (node.innerHTML==="5" && sign.innerHTML==="+") {
btnCall.innerHTML++;
btnCall.innerHTML++;  
btnCall.innerHTML++;
btnCall.innerHTML++;  
btnCall.innerHTML++;}
else if (node.innerHTML==="6" && sign.innerHTML==="+") {
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;}
else if (node.innerHTML==="7" && sign.innerHTML==="+") {
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;}
else if (node.innerHTML==="8" && sign.innerHTML==="+") {
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;}
else if (node.innerHTML==="9" && sign.innerHTML==="+") {
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;}
else if (node.innerHTML==="10" && sign.innerHTML==="+") {
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;
btnCall.innerHTML++;}

else if (node.innerHTML==="0" && sign.innerHTML==="/"){
const arrayList=array.map(element => element / 0);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="1" && sign.innerHTML==="/"){
const arrayList=array.map(element => element / 1);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="2" && sign.innerHTML==="/"){
const arrayList=array.map(element => element / 2);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="3" && sign.innerHTML==="/"){
const arrayList=array.map(element => element / 3);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="4" && sign.innerHTML==="/"){
const arrayList=array.map(element => element / 4);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="5" && sign.innerHTML==="/"){
const arrayList=array.map(element => element / 5);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="6" && sign.innerHTML==="/"){
const arrayList=array.map(element => element / 6);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="7" && sign.innerHTML==="/"){
const arrayList=array.map(element => element / 7);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="8" && sign.innerHTML==="/"){
const arrayList=array.map(element => element / 8);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;} 
else if (node.innerHTML==="9" && sign.innerHTML==="/"){
const arrayList=array.map(element => element / 9);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="10" && sign.innerHTML==="/"){
const arrayList=array.map(element => element / 10);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}

else if (node.innerHTML==="0" && sign.innerHTML==="-"){
const arrayList=array.map(element => element - 0);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="1" && sign.innerHTML==="-"){
const arrayList=array.map(element => element - 1);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="2" && sign.innerHTML==="-"){
const arrayList=array.map(element => element - 2);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="3" && sign.innerHTML==="-"){
const arrayList=array.map(element => element - 3);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="4" && sign.innerHTML==="-"){
const arrayList=array.map(element => element - 4);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="5" && sign.innerHTML==="-"){
const arrayList=array.map(element => element - 5);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="6" && sign.innerHTML==="-"){
const arrayList=array.map(element => element - 6);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="7" && sign.innerHTML==="-"){
const arrayList=array.map(element => element - 7);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="8" && sign.innerHTML==="-"){
const arrayList=array.map(element => element - 8);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;} 
else if (node.innerHTML==="9" && sign.innerHTML==="-"){
const arrayList=array.map(element => element - 9);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="10" && sign.innerHTML==="-"){
const arrayList=array.map(element => element - 10);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}

else if (node.innerHTML==="0" && sign.innerHTML==="*"){
const arrayList=array.map(element => element * 0);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="1" && sign.innerHTML==="*"){
const arrayList=array.map(element => element * 1);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="2" && sign.innerHTML==="*"){
const arrayList=array.map(element => element * 2);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="3" && sign.innerHTML==="*"){
const arrayList=array.map(element => element * 3);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="4" && sign.innerHTML==="*"){
const arrayList=array.map(element => element * 4);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="5" && sign.innerHTML==="*"){
const arrayList=array.map(element => element * 5);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="6" && sign.innerHTML==="*"){
const arrayList=array.map(element => element * 6);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="7" && sign.innerHTML==="*"){
const arrayList=array.map(element => element * 7);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="8" && sign.innerHTML==="*"){
const arrayList=array.map(element => element * 8);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;} 
else if (node.innerHTML==="9" && sign.innerHTML==="*"){
const arrayList=array.map(element => element * 9);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}
else if (node.innerHTML==="10" && sign.innerHTML==="*"){
const arrayList=array.map(element => element * 10);
array.pop();
array.push(arrayList);
document.getElementById("btn").innerHTML=array;}}

function method() {
if (sign.innerHTML==="+") {
sign.innerHTML="-";}
else if (sign.innerHTML==="-") {
sign.innerHTML="/";}
else if (sign.innerHTML==="/") {
sign.innerHTML="*";}
else if (sign.innerHTML==="*") {
sign.innerHTML="+";}}

function timesTablesNode(element) {
if (element.innerHTML==="1") {
element.innerHTML="2";}
else if (element.innerHTML==="2") {
element.innerHTML="3";}
else if (element.innerHTML==="3") {
element.innerHTML="4";}
else if (element.innerHTML==="4") {
element.innerHTML="5";}
else if (element.innerHTML==="5") {
element.innerHTML="6";}
else if (element.innerHTML==="6") {
element.innerHTML="7";}
else if (element.innerHTML==="7") {
element.innerHTML="8";}
else if (element.innerHTML==="8") {
element.innerHTML="9";}
else if (element.innerHTML==="9") {
element.innerHTML="10";}
else if (element.innerHTML==="10") {
element.innerHTML="0";}
else if (element.innerHTML==="0") {
element.innerHTML="1";}
}
function calculate(){
let array = [1];
let arrayTwo = [2];
let arrayThree = [3];
let arrayFour = [4];
let arrayFive = [5];
let arraySix = [6];
let arraySeven = [7];
let arrayEight = [8];
let arrayNine = [9];
if (first.innerHTML==="1" && third.innerHTML==="1"){
if(second.innerHTML==="+") {
const arrayList= array.map(element => element + 1);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="-") {
const arrayList= array.map(element => element - 1);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="*") {
const arrayList= array.map(element => element * 1);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="/") {
const arrayList= array.map(element => element / 1);
output.innerHTML=arrayList[0];};}

else if (first.innerHTML==="1" && third.innerHTML==="2"){
if(second.innerHTML==="+") {
const arrayList= array.map(element => element + 2);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="-") {
const arrayList= array.map(element => element - 2);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="*") {
const arrayList= array.map(element => element * 2);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="/") {
const arrayList= array.map(element => element / 2);
output.innerHTML=arrayList[0];};}

else if (first.innerHTML==="1" && third.innerHTML==="3"){
if(second.innerHTML==="+") {
const arrayList= array.map(element => element + 3);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="-") {
const arrayList= array.map(element => element - 3);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="*") {
const arrayList= array.map(element => element * 3);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="/") {
const arrayList= array.map(element => element / 3);
output.innerHTML=arrayList[0];};}

else if (first.innerHTML==="1" && third.innerHTML==="4"){
if(second.innerHTML==="+") {
const arrayList= array.map(element => element + 4);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="-") {
const arrayList= array.map(element => element - 4);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="*") {
const arrayList= array.map(element => element * 4);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="/") {
const arrayList= array.map(element => element / 4);
output.innerHTML=arrayList[0];};}

else if (first.innerHTML==="1" && third.innerHTML==="5"){
if(second.innerHTML==="+") {
const arrayList= array.map(element => element + 5);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="-") {
const arrayList= array.map(element => element - 5);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="*") {
const arrayList= array.map(element => element * 5);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="/") {
const arrayList= array.map(element => element / 5);
output.innerHTML=arrayList[0];};}

else if (first.innerHTML==="1" && third.innerHTML==="6"){
if(second.innerHTML==="+") {
const arrayList= array.map(element => element + 6);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="-") {
const arrayList= array.map(element => element - 6);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="*") {
const arrayList= array.map(element => element * 6);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="/") {
const arrayList= array.map(element => element / 6);
output.innerHTML=arrayList[0];};}  
  
else if (first.innerHTML==="1" && third.innerHTML==="7"){
if(second.innerHTML==="+") {
const arrayList= array.map(element => element + 7);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="-") {
const arrayList= array.map(element => element - 7);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="*") {
const arrayList= array.map(element => element * 7);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="/") {
const arrayList= array.map(element => element / 7);
output.innerHTML=arrayList[0];};}  

else if (first.innerHTML==="1" && third.innerHTML==="8"){
if(second.innerHTML==="+") {
const arrayList= array.map(element => element + 8);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="-") {
const arrayList= array.map(element => element - 8);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="*") {
const arrayList= array.map(element => element * 8);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="/") {
const arrayList= array.map(element => element / 8);
output.innerHTML=arrayList[0];};}  
  
else if (first.innerHTML==="1" && third.innerHTML==="9"){
if(second.innerHTML==="+") {
const arrayList= array.map(element => element + 9);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="-") {
const arrayList= array.map(element => element - 9);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="*") {
const arrayList= array.map(element => element * 9);
output.innerHTML=arrayList[0];}
else if(second.innerHTML==="/") {
const arrayList= array.map(element => element / 9);
output.innerHTML=arrayList[0];};} 

else if (first.innerHTML==="2" && third.innerHTML==="1"){
if(second.innerHTML==="+") {
const arrayTwoList= arrayTwo.map(element => element + 1);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="-") {
const arrayTwoList= arrayTwo.map(element => element - 1);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="*") {
const arrayTwoList= arrayTwo.map(element => element * 1);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="/") {
const arrayTwoList= arrayTwo.map(element => element / 1);
output.innerHTML=arrayTwoList[0];};}

else if (first.innerHTML==="2" && third.innerHTML==="2"){
if(second.innerHTML==="+") {
const arrayTwoList= arrayTwo.map(element => element + 2);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="-") {
const arrayTwoList= arrayTwo.map(element => element - 2);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="*") {
const arrayTwoList= arrayTwo.map(element => element * 2);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="/") {
const arrayTwoList= arrayTwo.map(element => element / 2);
output.innerHTML=arrayTwoList[0];};}

else if (first.innerHTML==="2" && third.innerHTML==="3"){
if(second.innerHTML==="+") {
const arrayTwoList= arrayTwo.map(element => element + 3);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="-") {
const arrayTwoList= arrayTwo.map(element => element - 3);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="*") {
const arrayTwoList= arrayTwo.map(element => element * 3);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="/") {
const arrayTwoList= arrayTwo.map(element => element / 3);
output.innerHTML=arrayTwoList[0];};}

else if (first.innerHTML==="2" && third.innerHTML==="4"){
if(second.innerHTML==="+") {
const arrayTwoList= arrayTwo.map(element => element + 4);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="-") {
const arrayTwoList= arrayTwo.map(element => element - 4);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="*") {
const arrayTwoList= arrayTwo.map(element => element * 4);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="/") {
const arrayTwoList= arrayTwo.map(element => element / 4);
output.innerHTML=arrayTwoList[0];};}

else if (first.innerHTML==="2" && third.innerHTML==="5"){
if(second.innerHTML==="+") {
const arrayTwoList= arrayTwo.map(element => element + 5);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="-") {
const arrayTwoList= arrayTwo.map(element => element - 5);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="*") {
const arrayTwoList= arrayTwo.map(element => element * 5);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="/") {
const arrayTwoList= arrayTwo.map(element => element / 5);
output.innerHTML=arrayTwoList[0];};}

else if (first.innerHTML==="2" && third.innerHTML==="6"){
if(second.innerHTML==="+") {
const arrayTwoList= arrayTwo.map(element => element + 6);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="-") {
const arrayTwoList= arrayTwo.map(element => element - 6);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="*") {
const arrayTwoList= arrayTwo.map(element => element * 6);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="/") {
const arrayTwoList= arrayTwo.map(element => element / 6);
output.innerHTML=arrayTwoList[0];};}  
  
else if (first.innerHTML==="2" && third.innerHTML==="7"){
if(second.innerHTML==="+") {
const arrayTwoList= arrayTwo.map(element => element + 7);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="-") {
const arrayTwoList= arrayTwo.map(element => element - 7);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="*") {
const arrayTwoList= arrayTwo.map(element => element * 7);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="/") {
const arrayTwoList= arrayTwo.map(element => element / 7);
output.innerHTML=arrayTwoList[0];};}  

else if (first.innerHTML==="2" && third.innerHTML==="8"){
if(second.innerHTML==="+") {
const arrayTwoList= arrayTwo.map(element => element + 8);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="-") {
const arrayTwoList= arrayTwo.map(element => element - 8);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="*") {
const arrayTwoList= arrayTwo.map(element => element * 8);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="/") {
const arrayTwoList= arrayTwo.map(element => element / 8);
output.innerHTML=arrayTwoList[0];};}  
  
else if (first.innerHTML==="2" && third.innerHTML==="9"){
if(second.innerHTML==="+") {
const arrayTwoList= arrayTwo.map(element => element + 9);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="-") {
const arrayTwoList= arrayTwo.map(element => element - 9);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="*") {
const arrayTwoList= arrayTwo.map(element => element * 9);
output.innerHTML=arrayTwoList[0];}
else if(second.innerHTML==="/") {
const arrayTwoList= arrayTwo.map(element => element / 9);
output.innerHTML=arrayTwoList[0];};}
 
else if (first.innerHTML==="3" && third.innerHTML==="1"){
if(second.innerHTML==="+") {
const arrayThreeList= arrayThree.map(element => element + 1);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="-") {
const arrayThreeList= arrayThree.map(element => element - 1);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="*") {
const arrayThreeList= arrayThree.map(element => element * 1);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="/") {
const arrayThreeList= arrayThree.map(element => element / 1);
output.innerHTML=arrayThreeList[0];};}

else if (first.innerHTML==="3" && third.innerHTML==="2"){
if(second.innerHTML==="+") {
const arrayThreeList= arrayThree.map(element => element + 2);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="-") {
const arrayThreeList= arrayThree.map(element => element - 2);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="*") {
const arrayThreeList= arrayThree.map(element => element * 2);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="/") {
const arrayThreeList= arrayThree.map(element => element / 2);
output.innerHTML=arrayThreeList[0];};}

else if (first.innerHTML==="3" && third.innerHTML==="3"){
if(second.innerHTML==="+") {
const arrayThreeList= arrayThree.map(element => element + 3);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="-") {
const arrayThreeList= arrayThree.map(element => element - 3);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="*") {
const arrayThreeList= arrayThree.map(element => element * 3);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="/") {
const arrayThreeList= arrayThree.map(element => element / 3);
output.innerHTML=arrayThreeList[0];};}

else if (first.innerHTML==="3" && third.innerHTML==="4"){
if(second.innerHTML==="+") {
const arrayThreeList= arrayThree.map(element => element + 4);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="-") {
const arrayThreeList= arrayThree.map(element => element - 4);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="*") {
const arrayThreeList= arrayThree.map(element => element * 4);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="/") {
const arrayThreeList= arrayThree.map(element => element / 4);
output.innerHTML=arrayThreeList[0];};}

else if (first.innerHTML==="3" && third.innerHTML==="5"){
if(second.innerHTML==="+") {
const arrayThreeList= arrayThree.map(element => element + 5);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="-") {
const arrayThreeList= arrayThree.map(element => element - 5);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="*") {
const arrayThreeList= arrayThree.map(element => element * 5);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="/") {
const arrayThreeList= arrayThree.map(element => element / 5);
output.innerHTML=arrayThreeList[0];};}

else if (first.innerHTML==="3" && third.innerHTML==="6"){
if(second.innerHTML==="+") {
const arrayThreeList= arrayThree.map(element => element + 6);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="-") {
const arrayThreeList= arrayThree.map(element => element - 6);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="*") {
const arrayThreeList= arrayThree.map(element => element * 6);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="/") {
const arrayThreeList= arrayThree.map(element => element / 6);
output.innerHTML=arrayThreeList[0];};}  
  
else if (first.innerHTML==="3" && third.innerHTML==="7"){
if(second.innerHTML==="+") {
const arrayThreeList= arrayThree.map(element => element + 7);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="-") {
const arrayThreeList= arrayThree.map(element => element - 7);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="*") {
const arrayThreeList= arrayThree.map(element => element * 7);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="/") {
const arrayThreeList= arrayThree.map(element => element / 7);
output.innerHTML=arrayThreeList[0];};}  

else if (first.innerHTML==="3" && third.innerHTML==="8"){
if(second.innerHTML==="+") {
const arrayThreeList= arrayThree.map(element => element + 8);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="-") {
const arrayThreeList= arrayThree.map(element => element - 8);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="*") {
const arrayThreeList= arrayThree.map(element => element * 8);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="/") {
const arrayThreeList= arrayThree.map(element => element / 8);
output.innerHTML=arrayThreeList[0];};}  
  
else if (first.innerHTML==="3" && third.innerHTML==="9"){
if(second.innerHTML==="+") {
const arrayThreeList= arrayThree.map(element => element + 9);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="-") {
const arrayThreeList= arrayThree.map(element => element - 9);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="*") {
const arrayThreeList= arrayThree.map(element => element * 9);
output.innerHTML=arrayThreeList[0];}
else if(second.innerHTML==="/") {
const arrayThreeList= arrayThree.map(element => element / 9);
output.innerHTML=arrayThreeList[0];};}  

else if (first.innerHTML==="4" && third.innerHTML==="1"){
if(second.innerHTML==="+") {
const arrayFourList= arrayFour.map(element => element + 1);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="-") {
const arrayFourList= arrayFour.map(element => element - 1);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="*") {
const arrayFourList= arrayFour.map(element => element * 1);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="/") {
const arrayFourList= arrayFour.map(element => element / 1);
output.innerHTML=arrayFourList[0];};}

else if (first.innerHTML==="4" && third.innerHTML==="2"){
if(second.innerHTML==="+") {
const arrayFourList= arrayFour.map(element => element + 2);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="-") {
const arrayFourList= arrayFour.map(element => element - 2);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="*") {
const arrayFourList= arrayFour.map(element => element * 2);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="/") {
const arrayFourList= arrayFour.map(element => element / 2);
output.innerHTML=arrayFourList[0];};}

else if (first.innerHTML==="4" && third.innerHTML==="3"){
if(second.innerHTML==="+") {
const arrayFourList= arrayFour.map(element => element + 3);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="-") {
const arrayFourList= arrayFour.map(element => element - 3);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="*") {
const arrayFourList= arrayFour.map(element => element * 3);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="/") {
const arrayFourList= arrayFour.map(element => element / 3);
output.innerHTML=arrayFourList[0];};}

else if (first.innerHTML==="4" && third.innerHTML==="4"){
if(second.innerHTML==="+") {
const arrayFourList= arrayFour.map(element => element + 4);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="-") {
const arrayFourList= arrayFour.map(element => element - 4);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="*") {
const arrayFourList= arrayFour.map(element => element * 4);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="/") {
const arrayFourList= arrayFour.map(element => element / 4);
output.innerHTML=arrayFourList[0];};}

else if (first.innerHTML==="4" && third.innerHTML==="5"){
if(second.innerHTML==="+") {
const arrayFourList= arrayFour.map(element => element + 5);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="-") {
const arrayFourList= arrayFour.map(element => element - 5);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="*") {
const arrayFourList= arrayFour.map(element => element * 5);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="/") {
const arrayFourList= arrayFour.map(element => element / 5);
output.innerHTML=arrayFourList[0];};}

else if (first.innerHTML==="4" && third.innerHTML==="6"){
if(second.innerHTML==="+") {
const arrayFourList= arrayFour.map(element => element + 6);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="-") {
const arrayFourList= arrayFour.map(element => element - 6);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="*") {
const arrayFourList= arrayFour.map(element => element * 6);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="/") {
const arrayFourList= arrayFour.map(element => element / 6);
output.innerHTML=arrayFourList[0];};}  
  
else if (first.innerHTML==="4" && third.innerHTML==="7"){
if(second.innerHTML==="+") {
const arrayFourList= arrayFour.map(element => element + 7);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="-") {
const arrayFourList= arrayFour.map(element => element - 7);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="*") {
const arrayFourList= arrayFour.map(element => element * 7);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="/") {
const arrayFourList= arrayFour.map(element => element / 7);
output.innerHTML=arrayFourList[0];};}  

else if (first.innerHTML==="4" && third.innerHTML==="8"){
if(second.innerHTML==="+") {
const arrayFourList= arrayFour.map(element => element + 8);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="-") {
const arrayFourList= arrayFour.map(element => element - 8);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="*") {
const arrayFourList= arrayFour.map(element => element * 8);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="/") {
const arrayFourList= arrayFour.map(element => element / 8);
output.innerHTML=arrayFourList[0];};}  
  
else if (first.innerHTML==="4" && third.innerHTML==="9"){
if(second.innerHTML==="+") {
const arrayFourList= arrayFour.map(element => element + 9);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="-") {
const arrayFourList= arrayFour.map(element => element - 9);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="*") {
const arrayFourList= arrayFour.map(element => element * 9);
output.innerHTML=arrayFourList[0];}
else if(second.innerHTML==="/") {
const arrayFourList= arrayFour.map(element => element / 9);
output.innerHTML=arrayFourList[0];};}  

else if (first.innerHTML==="5" && third.innerHTML==="1"){
if(second.innerHTML==="+") {
const arrayFiveList= arrayFive.map(element => element + 1);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="-") {
const arrayFiveList= arrayFive.map(element => element - 1);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="*") {
const arrayFiveList= arrayFive.map(element => element * 1);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="/") {
const arrayFiveList= arrayFive.map(element => element / 1);
output.innerHTML=arrayFiveList[0];};}

else if (first.innerHTML==="5" && third.innerHTML==="2"){
if(second.innerHTML==="+") {
const arrayFiveList= arrayFive.map(element => element + 2);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="-") {
const arrayFiveList= arrayFive.map(element => element - 2);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="*") {
const arrayFiveList= arrayFive.map(element => element * 2);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="/") {
const arrayFiveList= arrayFive.map(element => element / 2);
output.innerHTML=arrayFiveList[0];};}

else if (first.innerHTML==="5" && third.innerHTML==="3"){
if(second.innerHTML==="+") {
const arrayFiveList= arrayFive.map(element => element + 3);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="-") {
const arrayFiveList= arrayFive.map(element => element - 3);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="*") {
const arrayFiveList= arrayFive.map(element => element * 3);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="/") {
const arrayFiveList= arrayFive.map(element => element / 3);
output.innerHTML=arrayFiveList[0];};}

else if (first.innerHTML==="5" && third.innerHTML==="4"){
if(second.innerHTML==="+") {
const arrayFiveList= arrayFive.map(element => element + 4);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="-") {
const arrayFiveList= arrayFive.map(element => element - 4);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="*") {
const arrayFiveList= arrayFive.map(element => element * 4);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="/") {
const arrayFiveList= arrayFive.map(element => element / 4);
output.innerHTML=arrayFiveList[0];};}

else if (first.innerHTML==="5" && third.innerHTML==="5"){
if(second.innerHTML==="+") {
const arrayFiveList= arrayFive.map(element => element + 5);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="-") {
const arrayFiveList= arrayFive.map(element => element - 5);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="*") {
const arrayFiveList= arrayFive.map(element => element * 5);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="/") {
const arrayFiveList= arrayFive.map(element => element / 5);
output.innerHTML=arrayFiveList[0];};}

else if (first.innerHTML==="5" && third.innerHTML==="6"){
if(second.innerHTML==="+") {
const arrayFiveList= arrayFive.map(element => element + 6);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="-") {
const arrayFiveList= arrayFive.map(element => element - 6);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="*") {
const arrayFiveList= arrayFive.map(element => element * 6);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="/") {
const arrayFiveList= arrayFive.map(element => element / 6);
output.innerHTML=arrayFiveList[0];};}  
  
else if (first.innerHTML==="5" && third.innerHTML==="7"){
if(second.innerHTML==="+") {
const arrayFiveList= arrayFive.map(element => element + 7);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="-") {
const arrayFiveList= arrayFive.map(element => element - 7);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="*") {
const arrayFiveList= arrayFive.map(element => element * 7);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="/") {
const arrayFiveList= arrayFive.map(element => element / 7);
output.innerHTML=arrayFiveList[0];};}  

else if (first.innerHTML==="5" && third.innerHTML==="8"){
if(second.innerHTML==="+") {
const arrayFiveList= arrayFive.map(element => element + 8);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="-") {
const arrayFiveList= arrayFive.map(element => element - 8);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="*") {
const arrayFiveList= arrayFive.map(element => element * 8);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="/") {
const arrayFiveList= arrayFive.map(element => element / 8);
output.innerHTML=arrayFiveList[0];};}  
  
else if (first.innerHTML==="5" && third.innerHTML==="9"){
if(second.innerHTML==="+") {
const arrayFiveList= arrayFive.map(element => element + 9);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="-") {
const arrayFiveList= arrayFive.map(element => element - 9);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="*") {
const arrayFiveList= arrayFive.map(element => element * 9);
output.innerHTML=arrayFiveList[0];}
else if(second.innerHTML==="/") {
const arrayFiveList= arrayFive.map(element => element / 9);
output.innerHTML=arrayFiveList[0];};}

else if (first.innerHTML==="6" && third.innerHTML==="1"){
if(second.innerHTML==="+") {
const arraySixList= arraySix.map(element => element + 1);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="-") {
const arraySixList= arraySix.map(element => element - 1);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="*") {
const arraySixList= arraySix.map(element => element * 1);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="/") {
const arraySixList= arraySix.map(element => element / 1);
output.innerHTML=arraySixList[0];};}

else if (first.innerHTML==="6" && third.innerHTML==="2"){
if(second.innerHTML==="+") {
const arraySixList= arraySix.map(element => element + 2);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="-") {
const arraySixList= arraySix.map(element => element - 2);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="*") {
const arraySixList= arraySix.map(element => element * 2);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="/") {
const arraySixList= arraySix.map(element => element / 2);
output.innerHTML=arraySixList[0];};}

else if (first.innerHTML==="6" && third.innerHTML==="3"){
if(second.innerHTML==="+") {
const arraySixList= arraySix.map(element => element + 3);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="-") {
const arraySixList= arraySix.map(element => element - 3);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="*") {
const arraySixList= arraySix.map(element => element * 3);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="/") {
const arraySixList= arraySix.map(element => element / 3);
output.innerHTML=arraySixList[0];};}

else if (first.innerHTML==="6" && third.innerHTML==="4"){
if(second.innerHTML==="+") {
const arraySixList= arraySix.map(element => element + 4);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="-") {
const arraySixList= arraySix.map(element => element - 4);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="*") {
const arraySixList= arraySix.map(element => element * 4);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="/") {
const arraySixList= arraySix.map(element => element / 4);
output.innerHTML=arraySixList[0];};}

else if (first.innerHTML==="6" && third.innerHTML==="5"){
if(second.innerHTML==="+") {
const arraySixList= arraySix.map(element => element + 5);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="-") {
const arraySixList= arraySix.map(element => element - 5);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="*") {
const arraySixList= arraySix.map(element => element * 5);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="/") {
const arraySixList= arraySix.map(element => element / 5);
output.innerHTML=arraySixList[0];};}

else if (first.innerHTML==="6" && third.innerHTML==="6"){
if(second.innerHTML==="+") {
const arraySixList= arraySix.map(element => element + 6);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="-") {
const arraySixList= arraySix.map(element => element - 6);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="*") {
const arraySixList= arraySix.map(element => element * 6);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="/") {
const arraySixList= arraySix.map(element => element / 6);
output.innerHTML=arraySixList[0];};}  
  
else if (first.innerHTML==="6" && third.innerHTML==="7"){
if(second.innerHTML==="+") {
const arraySixList= arraySix.map(element => element + 7);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="-") {
const arraySixList= arraySix.map(element => element - 7);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="*") {
const arraySixList= arraySix.map(element => element * 7);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="/") {
const arraySixList= arraySix.map(element => element / 7);
output.innerHTML=arraySixList[0];};}  

else if (first.innerHTML==="6" && third.innerHTML==="8"){
if(second.innerHTML==="+") {
const arraySixList= arraySix.map(element => element + 8);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="-") {
const arraySixList= arraySix.map(element => element - 8);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="*") {
const arraySixList= arraySix.map(element => element * 8);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="/") {
const arraySixList= arraySix.map(element => element / 8);
output.innerHTML=arraySixList[0];};}  
  
else if (first.innerHTML==="6" && third.innerHTML==="9"){
if(second.innerHTML==="+") {
const arraySixList= arraySix.map(element => element + 9);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="-") {
const arraySixList= arraySix.map(element => element - 9);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="*") {
const arraySixList= arraySix.map(element => element * 9);
output.innerHTML=arraySixList[0];}
else if(second.innerHTML==="/") {
const arraySixList= arraySix.map(element => element / 9);
output.innerHTML=arraySixList[0];};}

else if (first.innerHTML==="7" && third.innerHTML==="1"){
if(second.innerHTML==="+") {
const arraySevenList= arraySeven.map(element => element + 1);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="-") {
const arraySevenList= arraySeven.map(element => element - 1);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="*") {
const arraySevenList= arraySeven.map(element => element * 1);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="/") {
const arraySevenList= arraySeven.map(element => element / 1);
output.innerHTML=arraySevenList[0];};}

else if (first.innerHTML==="7" && third.innerHTML==="2"){
if(second.innerHTML==="+") {
const arraySevenList= arraySeven.map(element => element + 2);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="-") {
const arraySevenList= arraySeven.map(element => element - 2);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="*") {
const arraySevenList= arraySeven.map(element => element * 2);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="/") {
const arraySevenList= arraySeven.map(element => element / 2);
output.innerHTML=arraySevenList[0];};}

else if (first.innerHTML==="7" && third.innerHTML==="3"){
if(second.innerHTML==="+") {
const arraySevenList= arraySeven.map(element => element + 3);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="-") {
const arraySevenList= arraySeven.map(element => element - 3);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="*") {
const arraySevenList= arraySeven.map(element => element * 3);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="/") {
const arraySevenList= arraySeven.map(element => element / 3);
output.innerHTML=arraySevenList[0];};}

else if (first.innerHTML==="7" && third.innerHTML==="4"){
if(second.innerHTML==="+") {
const arraySevenList= arraySeven.map(element => element + 4);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="-") {
const arraySevenList= arraySeven.map(element => element - 4);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="*") {
const arraySevenList= arraySeven.map(element => element * 4);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="/") {
const arraySevenList= arraySeven.map(element => element / 4);
output.innerHTML=arraySevenList[0];};}

else if (first.innerHTML==="7" && third.innerHTML==="5"){
if(second.innerHTML==="+") {
const arraySevenList= arraySeven.map(element => element + 5);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="-") {
const arraySevenList= arraySeven.map(element => element - 5);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="*") {
const arraySevenList= arraySeven.map(element => element * 5);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="/") {
const arraySevenList= arraySeven.map(element => element / 5);
output.innerHTML=arraySevenList[0];};}

else if (first.innerHTML==="7" && third.innerHTML==="6"){
if(second.innerHTML==="+") {
const arraySevenList= arraySeven.map(element => element + 6);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="-") {
const arraySevenList= arraySeven.map(element => element - 6);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="*") {
const arraySevenList= arraySeven.map(element => element * 6);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="/") {
const arraySevenList= arraySeven.map(element => element / 6);
output.innerHTML=arraySevenList[0];};}  
  
else if (first.innerHTML==="7" && third.innerHTML==="7"){
if(second.innerHTML==="+") {
const arraySevenList= arraySeven.map(element => element + 7);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="-") {
const arraySevenList= arraySeven.map(element => element - 7);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="*") {
const arraySevenList= arraySeven.map(element => element * 7);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="/") {
const arraySevenList= arraySeven.map(element => element / 7);
output.innerHTML=arraySevenList[0];};}  

else if (first.innerHTML==="7" && third.innerHTML==="8"){
if(second.innerHTML==="+") {
const arraySevenList= arraySeven.map(element => element + 8);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="-") {
const arraySevenList= arraySeven.map(element => element - 8);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="*") {
const arraySevenList= arraySeven.map(element => element * 8);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="/") {
const arraySevenList= arraySeven.map(element => element / 8);
output.innerHTML=arraySevenList[0];};}  
  
else if (first.innerHTML==="7" && third.innerHTML==="9"){
if(second.innerHTML==="+") {
const arraySevenList= arraySeven.map(element => element + 9);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="-") {
const arraySevenList= arraySeven.map(element => element - 9);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="*") {
const arraySevenList= arraySeven.map(element => element * 9);
output.innerHTML=arraySevenList[0];}
else if(second.innerHTML==="/") {
const arraySevenList= arraySeven.map(element => element / 9);
output.innerHTML=arraySevenList[0];};}

else if (first.innerHTML==="8" && third.innerHTML==="1"){
if(second.innerHTML==="+") {
const arrayEightList= arrayEight.map(element => element + 1);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="-") {
const arrayEightList= arrayEight.map(element => element - 1);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="*") {
const arrayEightList= arrayEight.map(element => element * 1);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="/") {
const arrayEightList= arrayEight.map(element => element / 1);
output.innerHTML=arrayEightList[0];};}

else if (first.innerHTML==="8" && third.innerHTML==="2"){
if(second.innerHTML==="+") {
const arrayEightList= arrayEight.map(element => element + 2);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="-") {
const arrayEightList= arrayEight.map(element => element - 2);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="*") {
const arrayEightList= arrayEight.map(element => element * 2);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="/") {
const arrayEightList= arrayEight.map(element => element / 2);
output.innerHTML=arrayEightList[0];};}

else if (first.innerHTML==="8" && third.innerHTML==="3"){
if(second.innerHTML==="+") {
const arrayEightList= arrayEight.map(element => element + 3);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="-") {
const arrayEightList= arrayEight.map(element => element - 3);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="*") {
const arrayEightList= arrayEight.map(element => element * 3);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="/") {
const arrayEightList= arrayEight.map(element => element / 3);
output.innerHTML=arrayEightList[0];};}

else if (first.innerHTML==="8" && third.innerHTML==="4"){
if(second.innerHTML==="+") {
const arrayEightList= arrayEight.map(element => element + 4);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="-") {
const arrayEightList= arrayEight.map(element => element - 4);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="*") {
const arrayEightList= arrayEight.map(element => element * 4);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="/") {
const arrayEightList= arrayEight.map(element => element / 4);
output.innerHTML=arrayEightList[0];};}

else if (first.innerHTML==="8" && third.innerHTML==="5"){
if(second.innerHTML==="+") {
const arrayEightList= arrayEight.map(element => element + 5);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="-") {
const arrayEightList= arrayEight.map(element => element - 5);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="*") {
const arrayEightList= arrayEight.map(element => element * 5);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="/") {
const arrayEightList= arrayEight.map(element => element / 5);
output.innerHTML=arrayEightList[0];};}

else if (first.innerHTML==="8" && third.innerHTML==="6"){
if(second.innerHTML==="+") {
const arrayEightList= arrayEight.map(element => element + 6);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="-") {
const arrayEightList= arrayEight.map(element => element - 6);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="*") {
const arrayEightList= arrayEight.map(element => element * 6);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="/") {
const arrayEightList= arrayEight.map(element => element / 6);
output.innerHTML=arrayEightList[0];};}  
  
else if (first.innerHTML==="8" && third.innerHTML==="7"){
if(second.innerHTML==="+") {
const arrayEightList= arrayEight.map(element => element + 7);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="-") {
const arrayEightList= arrayEight.map(element => element - 7);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="*") {
const arrayEightList= arrayEight.map(element => element * 7);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="/") {
const arrayEightList= arrayEight.map(element => element / 7);
output.innerHTML=arrayEightList[0];};}  

else if (first.innerHTML==="8" && third.innerHTML==="8"){
if(second.innerHTML==="+") {
const arrayEightList= arrayEight.map(element => element + 8);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="-") {
const arrayEightList= arrayEight.map(element => element - 8);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="*") {
const arrayEightList= arrayEight.map(element => element * 8);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="/") {
const arrayEightList= arrayEight.map(element => element / 8);
output.innerHTML=arrayEightList[0];};}  
  
else if (first.innerHTML==="8" && third.innerHTML==="9"){
if(second.innerHTML==="+") {
const arrayEightList= arrayEight.map(element => element + 9);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="-") {
const arrayEightList= arrayEight.map(element => element - 9);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="*") {
const arrayEightList= arrayEight.map(element => element * 9);
output.innerHTML=arrayEightList[0];}
else if(second.innerHTML==="/") {
const arrayEightList= arrayEight.map(element => element / 9);
output.innerHTML=arrayEightList[0];};}

else if (first.innerHTML==="9" && third.innerHTML==="1"){
if(second.innerHTML==="+") {
const arrayNineList= arrayNine.map(element => element + 1);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="-") {
const arrayNineList= arrayNine.map(element => element - 1);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="*") {
const arrayNineList= arrayNine.map(element => element * 1);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="/") {
const arrayNineList= arrayNine.map(element => element / 1);
output.innerHTML=arrayNineList[0];};}

else if (first.innerHTML==="9" && third.innerHTML==="2"){
if(second.innerHTML==="+") {
const arrayNineList= arrayNine.map(element => element + 2);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="-") {
const arrayNineList= arrayNine.map(element => element - 2);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="*") {
const arrayNineList= arrayNine.map(element => element * 2);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="/") {
const arrayNineList= arrayNine.map(element => element / 2);
output.innerHTML=arrayNineList[0];};}

else if (first.innerHTML==="9" && third.innerHTML==="3"){
if(second.innerHTML==="+") {
const arrayNineList= arrayNine.map(element => element + 3);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="-") {
const arrayNineList= arrayNine.map(element => element - 3);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="*") {
const arrayNineList= arrayNine.map(element => element * 3);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="/") {
const arrayNineList= arrayNine.map(element => element / 3);
output.innerHTML=arrayNineList[0];};}

else if (first.innerHTML==="9" && third.innerHTML==="4"){
if(second.innerHTML==="+") {
const arrayNineList= arrayNine.map(element => element + 4);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="-") {
const arrayNineList= arrayNine.map(element => element - 4);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="*") {
const arrayNineList= arrayNine.map(element => element * 4);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="/") {
const arrayNineList= arrayNine.map(element => element / 4);
output.innerHTML=arrayNineList[0];};}

else if (first.innerHTML==="9" && third.innerHTML==="5"){
if(second.innerHTML==="+") {
const arrayNineList= arrayNine.map(element => element + 5);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="-") {
const arrayNineList= arrayNine.map(element => element - 5);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="*") {
const arrayNineList= arrayNine.map(element => element * 5);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="/") {
const arrayNineList= arrayNine.map(element => element / 5);
output.innerHTML=arrayNineList[0];};}

else if (first.innerHTML==="9" && third.innerHTML==="6"){
if(second.innerHTML==="+") {
const arrayNineList= arrayNine.map(element => element + 6);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="-") {
const arrayNineList= arrayNine.map(element => element - 6);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="*") {
const arrayNineList= arrayNine.map(element => element * 6);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="/") {
const arrayNineList= arrayNine.map(element => element / 6);
output.innerHTML=arrayNineList[0];};}  
  
else if (first.innerHTML==="9" && third.innerHTML==="7"){
if(second.innerHTML==="+") {
const arrayNineList= arrayNine.map(element => element + 7);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="-") {
const arrayNineList= arrayNine.map(element => element - 7);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="*") {
const arrayNineList= arrayNine.map(element => element * 7);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="/") {
const arrayNineList= arrayNine.map(element => element / 7);
output.innerHTML=arrayNineList[0];};}  

else if (first.innerHTML==="9" && third.innerHTML==="8"){
if(second.innerHTML==="+") {
const arrayNineList= arrayNine.map(element => element + 8);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="-") {
const arrayNineList= arrayNine.map(element => element - 8);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="*") {
const arrayNineList= arrayNine.map(element => element * 8);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="/") {
const arrayNineList= arrayNine.map(element => element / 8);
output.innerHTML=arrayNineList[0];};}  
  
else if (first.innerHTML==="9" && third.innerHTML==="9"){
if(second.innerHTML==="+") {
const arrayNineList= arrayNine.map(element => element + 9);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="-") {
const arrayNineList= arrayNine.map(element => element - 9);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="*") {
const arrayNineList= arrayNine.map(element => element * 9);
output.innerHTML=arrayNineList[0];}
else if(second.innerHTML==="/") {
const arrayNineList= arrayNine.map(element => element / 9);
output.innerHTML=arrayNineList[0];};}}

function valueOne() {
if (third.innerHTML==="" && first.innerHTML==="") {
first.innerHTML="1";}
else if(first.innerHTML!=="" && third.innerHTML!=="") {
first.innerHTML="1";
third.innerHTML="";}
else {
third.innerHTML="1";}}

function valueTwo() {
if (third.innerHTML==="" && first.innerHTML==="") {
first.innerHTML="2";}
else if(first.innerHTML!=="" && third.innerHTML!=="") {
first.innerHTML="2";
third.innerHTML="";}
else {
third.innerHTML="2";}}

function valueThree() {
if (third.innerHTML==="" && first.innerHTML==="") {
first.innerHTML="3";}
else if(first.innerHTML!=="" && third.innerHTML!=="") {
first.innerHTML="3";
third.innerHTML="";}
else {
third.innerHTML="3";}}

function valueFour() {
if (third.innerHTML==="" && first.innerHTML==="") {
first.innerHTML="4";}
else if(first.innerHTML!=="" && third.innerHTML!=="") {
first.innerHTML="4";
third.innerHTML="";}
else {
third.innerHTML="4";}}

function valueFive() {
if (third.innerHTML==="" && first.innerHTML==="") {
first.innerHTML="5";}
else if(first.innerHTML!=="" && third.innerHTML!=="") {
first.innerHTML="5";
third.innerHTML="";}
else {
third.innerHTML="5";}}

function valueSix() {
if (third.innerHTML==="" && first.innerHTML==="") {
first.innerHTML="6";}
else if(first.innerHTML!=="" && third.innerHTML!=="") {
first.innerHTML="6";
third.innerHTML="";}
else {
third.innerHTML="6";}}

function valueSeven() {
if (third.innerHTML==="" && first.innerHTML==="") {
first.innerHTML="7";}
else if(first.innerHTML!=="" && third.innerHTML!=="") {
first.innerHTML="7";
third.innerHTML="";}
else {
third.innerHTML="7";}}

function valueEight() {
if (third.innerHTML==="" && first.innerHTML==="") {
first.innerHTML="8";}
else if(first.innerHTML!=="" && third.innerHTML!=="") {
first.innerHTML="8";
third.innerHTML="";}
else {
third.innerHTML="8";}}

function valueNine() {
if (third.innerHTML==="" && first.innerHTML==="") {
first.innerHTML="9";}
else if(first.innerHTML!=="" && third.innerHTML!=="") {
first.innerHTML="9";
third.innerHTML="";}
else {
third.innerHTML="9";}}

function useMethod(element) {
if (element.innerHTML==="+") {
second.innerHTML="+";}
else if (element.innerHTML==="/"){
second.innerHTML="/";}
else if (element.innerHTML==="*"){
second.innerHTML="*";} 
else if (element.innerHTML==="-"){
second.innerHTML="-";}}
