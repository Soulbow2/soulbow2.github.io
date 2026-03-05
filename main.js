const node=document.getElementById("node");
const node2=document.getElementById("node2");
const black=document.getElementById("black");
const one= document.getElementById("id1");
const two= document.getElementById("id2");
const three= document.getElementById("id3");
const four= document.getElementById("id4");
const five= document.getElementById("id5");
const six= document.getElementById("id6");
const seven= document.getElementById("id7");
const eight= document.getElementById("id8");
const nine= document.getElementById("id9");
const ten= document.getElementById("id10");
const eleven= document.getElementById("id11");
const twelve= document.getElementById("id12");
const thirteen= document.getElementById("id13");
const fourteen= document.getElementById("id14");
const fifteen= document.getElementById("id15");
const sixteen= document.getElementById("id16");
const seventeen= document.getElementById("id17");
const eighteen= document.getElementById("id18");
const nineteen= document.getElementById("id19");
const twenty= document.getElementById("id20");
const twentyone= document.getElementById("id21");
const twentytwo= document.getElementById("id22");
const twentythree= document.getElementById("id23");
const twentyfour= document.getElementById("id24");
const twentyfive= document.getElementById("id25");
const twentysix= document.getElementById("id26");
const twentyseven= document.getElementById("id27");
const twentyeight= document.getElementById("id28");
const twentynine= document.getElementById("id29");
const thirty= document.getElementById("id30");
const thirtyone= document.getElementById("id31");
const thirtytwo= document.getElementById("id32");

function tile(element) {
var val = Math.floor(Math.random() * 4);

switch(true) {
case element.style.background=="deeppink" && black.style.background=="black":
  
if (node.innerHTML=="move") {
node.innerHTML="moved";}
break;}

if (black.style.background!="black" && element.style.background=="black") {
element.style.background="skyblue";
element.style.border="solid black";
black.style.background="black";
node2.innerHTML="new";
node.innerHTML="moved";}

else if (element.style.background=="skyblue") {
element.style.background="black";
element.style.border="solid black";
node.innerHTML="moved";
black.style.background="green";
node2.innerHTML="";}

else if (node2.innerHTML=="new" && element.style.background=="black") {
node.innerHTML="moved";}

else if (element.style.background=="deeppink" && node.innerHTML=="moved") {
node.innerHTML="move";
element.style.background="black";
element.style.border="solid black";
node2.innerHTML="";
black.style.background="green";}

else if (black.style.background=="black" && element.style.background=="deeppink") {
element.style.background="black";
element.style.border="solid black";
black.style.background="green";
node.innerHTML="moved";}


else if (black.style.background=="black" && element.style.background=="red") {
element.style.background="deeppink";
element.style.border="solid deeppink";}

else if (black.style.background=="black" && element.style.background=="black") {
node.innerHTML="moved";
node2.innerHTML="";}
  
switch(true) {
case element.style.background == "black" && node2.innerHTML !="new":
  
switch(true) {
case element.style.background!="deeppink" && element.style.background!="red":

switch(true) {
case five.style.background=="black" && one.style.background=="red":
if (ten.style.background=="deeppink" && node.innerHTML!="moved"){
one.style.background="deeppink";
one.style.border="solid deeppink";
five.style.background="deeppink";
five.style.border="solid deeppink";
ten.style.background="red";
ten.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case five.style.background=="black" && two.style.background=="red":  
if (nine.style.background=="deeppink" && node.innerHTML!="moved"){
two.style.background="deeppink";
two.style.border="solid deeppink";
five.style.background="deeppink";
five.style.border="solid deeppink";
nine.style.background="red";
nine.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case six.style.background=="black" && two.style.background=="red":  
if (eleven.style.background=="deeppink" && node.innerHTML!="moved"){
two.style.background="deeppink";
two.style.border="solid deeppink";
six.style.background="deeppink";
six.style.border="solid deeppink";
eleven.style.background="red";
eleven.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case six.style.background=="black" && three.style.background=="red":
if (ten.style.background=="deeppink" && node.innerHTML!="moved"){
three.style.background="deeppink";
three.style.border="solid deeppink";
six.style.background="deeppink";
six.style.border="solid deeppink";
ten.style.background="red";
ten.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case seven.style.background=="black" && three.style.background=="red":
if (twelve.style.background=="deeppink" && node.innerHTML!="moved"){
three.style.background="deeppink";
three.style.border="solid deeppink";
seven.style.background="deeppink";
seven.style.border="solid deeppink";
twelve.style.background="red";
twelve.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case seven.style.background=="black" && four.style.background=="red":
if (eleven.style.background=="deeppink" && node.innerHTML!="moved"){
four.style.background="deeppink";
four.style.border="solid deeppink";
seven.style.background="deeppink";
seven.style.border="solid deeppink";
eleven.style.background="red";
eleven.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case ten.style.background=="black" && five.style.background=="red":
if (fourteen.style.background=="deeppink" && node.innerHTML!="moved"){
five.style.background="deeppink";
five.style.border="solid deeppink";
ten.style.background="deeppink";
ten.style.border="solid deeppink";
fourteen.style.background="red";
fourteen.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case ten.style.background=="black" && six.style.background=="red":
if (thirteen.style.background=="deeppink" && node.innerHTML!="moved"){
six.style.background="deeppink";
six.style.border="solid deeppink";
ten.style.background="deeppink";
ten.style.border="solid deeppink";
thirteen.style.background="red";
thirteen.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case eleven.style.background=="black" && six.style.background=="red":
if (fifteen.style.background=="deeppink" && node.innerHTML!="moved"){
six.style.background="deeppink";
six.style.border="solid deeppink";
eleven.style.background="deeppink";
eleven.style.border="solid deeppink";
fifteen.style.background="red";
fifteen.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case eleven.style.background=="black" && seven.style.background=="red":
if (fourteen.style.background=="deeppink" && node.innerHTML!="moved"){
seven.style.background="deeppink";
seven.style.border="solid deeppink";
eleven.style.background="deeppink";
eleven.style.border="solid deeppink";
fourteen.style.background="red";
fourteen.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case twelve.style.background=="black" && seven.style.background=="red":
if (sixteen.style.background=="deeppink" && node.innerHTML!="moved"){
seven.style.background="deeppink";
seven.style.border="solid deeppink";
twelve.style.background="deeppink";
twelve.style.border="solid deeppink";
sixteen.style.background="red";
sixteen.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case twelve.style.background=="black" && eight.style.background=="red":
if (fifteen.style.background=="deeppink" && node.innerHTML!="moved"){
eight.style.background="deeppink";
eight.style.border="solid deeppink";
twelve.style.background="deeppink";
twelve.style.border="solid deeppink";
fifteen.style.background="red";
fifteen.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case thirteen.style.background=="black" && nine.style.background=="red":
if (eighteen.style.background=="deeppink" && node.innerHTML!="moved"){
nine.style.background="deeppink";
nine.style.border="solid deeppink";
thirteen.style.background="deeppink";
thirteen.style.border="solid deeppink";
eighteen.style.background="red";
eighteen.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case thirteen.style.background=="black" && ten.style.background=="red":
if (seventeen.style.background=="deeppink" && node.innerHTML!="moved"){
ten.style.background="deeppink";
ten.style.border="solid deeppink";
thirteen.style.background="deeppink";
thirteen.style.border="solid deeppink";
seventeen.style.background="red";
seventeen.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case fourteen.style.background=="black" && ten.style.background=="red":
if (nineteen.style.background=="deeppink" && node.innerHTML!="moved"){
ten.style.background="deeppink";
ten.style.border="solid deeppink";
fourteen.style.background="deeppink";
fourteen.style.border="solid deeppink";
nineteen.style.background="red";
nineteen.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case fourteen.style.background=="black" && eleven.style.background=="red":
if (eighteen.style.background=="deeppink" && node.innerHTML!="moved"){
eleven.style.background="deeppink";
eleven.style.border="solid deeppink";
fourteen.style.background="deeppink";
fourteen.style.border="solid deeppink";
eighteen.style.background="red";
eighteen.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case fifteen.style.background=="black" && eleven.style.background=="red":
if (twenty.style.background=="deeppink" && node.innerHTML!="moved"){
eleven.style.background="deeppink";
eleven.style.border="solid deeppink";
fifteen.style.background="deeppink";
fifteen.style.border="solid deeppink";
twenty.style.background="red";
twenty.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case fifteen.style.background=="black" && twelve.style.background=="red":
if (nineteen.style.background=="deeppink" && node.innerHTML!="moved"){
twelve.style.background="deeppink";
twelve.style.border="solid deeppink";
fifteen.style.background="deeppink";
fifteen.style.border="solid deeppink";
nineteen.style.background="red";
nineteen.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case eighteen.style.background=="black" && thirteen.style.background=="red":
if (twentytwo.style.background=="deeppink" && node.innerHTML!="moved"){
thirteen.style.background="deeppink";
thirteen.style.border="solid deeppink";
eighteen.style.background="deeppink";
eighteen.style.border="solid deeppink";
twentytwo.style.background="red";
twentytwo.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case eighteen.style.background=="black" && fourteen.style.background=="red":
if (twentyone.style.background=="deeppink" && node.innerHTML!="moved"){
fourteen.style.background="deeppink";
fourteen.style.border="solid deeppink";
eighteen.style.background="deeppink";
eighteen.style.border="solid deeppink";
twentyone.style.background="red";
twentyone.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case nineteen.style.background=="black" && fourteen.style.background=="red":
if (twentythree.style.background=="deeppink" && node.innerHTML!="moved"){
fourteen.style.background="deeppink";
fourteen.style.border="solid deeppink";
nineteen.style.background="deeppink";
nineteen.style.border="solid deeppink";
twentythree.style.background="red";
twentythree.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case nineteen.style.background=="black" && fifteen.style.background=="red":
if (twentytwo.style.background=="deeppink" && node.innerHTML!="moved"){
fifteen.style.background="deeppink";
fifteen.style.border="solid deeppink";
nineteen.style.background="deeppink";
nineteen.style.border="solid deeppink";
twentytwo.style.background="red";
twentytwo.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case twenty.style.background=="black" && fifteen.style.background=="red":
if (twentyfour.style.background=="deeppink" && node.innerHTML!="moved"){
fifteen.style.background="deeppink";
fifteen.style.border="solid deeppink";
twenty.style.background="deeppink";
twenty.style.border="solid deeppink";
twentyfour.style.background="red";
twentyfour.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case twenty.style.background=="black" && sixteen.style.background=="red":
if (twentythree.style.background=="deeppink" && node.innerHTML!="moved"){
sixteen.style.background="deeppink";
sixteen.style.border="solid deeppink";
twenty.style.background="deeppink";
twenty.style.border="solid deeppink";
twentythree.style.background="red";
twentythree.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case twentyone.style.background=="black" && seventeen.style.background=="red":
if (twentysix.style.background=="deeppink" && node.innerHTML!="moved"){
seventeen.style.background="deeppink";
seventeen.style.border="solid deeppink";
twentyone.style.background="deeppink";
twentyone.style.border="solid deeppink";
twentysix.style.background="red";
twentysix.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case twentyone.style.background=="black" && eighteen.style.background=="red":
if (twentyfive.style.background=="deeppink" && node.innerHTML!="moved"){
eighteen.style.background="deeppink";
eighteen.style.border="solid deeppink";
twentyone.style.background="deeppink";
twentyone.style.border="solid deeppink";
twentyfive.style.background="red";
twentyfive.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case twentytwo.style.background=="black" && eighteen.style.background=="red":
if (twentyseven.style.background=="deeppink" && node.innerHTML!="moved"){
eighteen.style.background="deeppink";
eighteen.style.border="solid deeppink";
twentytwo.style.background="deeppink";
twentytwo.style.border="solid deeppink";
twentyseven.style.background="red";
twentyseven.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case twentytwo.style.background=="black" && nineteen.style.background=="red":
if (twentysix.style.background=="deeppink" && node.innerHTML!="moved"){
nineteen.style.background="deeppink";
nineteen.style.border="solid deeppink";
twentytwo.style.background="deeppink";
twentytwo.style.border="solid deeppink";
twentysix.style.background="red";
twentysix.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case twentythree.style.background=="black" && nineteen.style.background=="red":
if (twentyeight.style.background=="deeppink" && node.innerHTML!="moved"){
nineteen.style.background="deeppink";
nineteen.style.border="solid deeppink";
twentythree.style.background="deeppink";
twentythree.style.border="solid deeppink";
twentyeight.style.background="red";
twentyeight.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case twentythree.style.background=="black" && twenty.style.background=="red":
if (twentyseven.style.background=="deeppink" && node.innerHTML!="moved"){
twenty.style.background="deeppink";
twenty.style.border="solid deeppink";
twentythree.style.background="deeppink";
twentythree.style.border="solid deeppink";
twentyseven.style.background="red";
twentyseven.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case twentysix.style.background=="black" && twentyone.style.background=="red":
if (thirty.style.background=="deeppink" && node.innerHTML!="moved"){
twentyone.style.background="deeppink";
twentyone.style.border="solid deeppink";
twentysix.style.background="deeppink";
twentysix.style.border="solid deeppink";
thirty.style.background="red";
thirty.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case twentysix.style.background=="black" && twentytwo.style.background=="red":
if (twentynine.style.background=="deeppink" && node.innerHTML!="moved"){
twentytwo.style.background="deeppink";
twentytwo.style.border="solid deeppink";
twentysix.style.background="deeppink";
twentysix.style.border="solid deeppink";
twentynine.style.background="red";
twentynine.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case twentyseven.style.background=="black" && twentytwo.style.background=="red":
if (thirtyone.style.background=="deeppink" && node.innerHTML!="moved"){
twentytwo.style.background="deeppink";
twentytwo.style.border="solid deeppink";
twentyseven.style.background="deeppink";
twentyseven.style.border="solid deeppink";
thirtyone.style.background="red";
thirtyone.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case twentyseven.style.background=="black" && twentythree.style.background=="red":
if (thirty.style.background=="deeppink" && node.innerHTML!="moved"){
twentythree.style.background="deeppink";
twentythree.style.border="solid deeppink";
twentyseven.style.background="deeppink";
twentyseven.style.border="solid deeppink";
thirty.style.background="red";
thirty.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case twentyeight.style.background=="black" && twentythree.style.background=="red":
if (thirtytwo.style.background=="deeppink" && node.innerHTML!="moved"){
twentythree.style.background="deeppink";
twentythree.style.border="solid deeppink";
twentyeight.style.background="deeppink";
twentyeight.style.border="solid deeppink";
thirtytwo.style.background="red";
thirtytwo.style.border="solid black";
node.innerHTML="moved";}
break;}
switch(true) {
case twentyeight.style.background=="black" && twentyfour.style.background=="red":
if (thirtyone.style.background=="deeppink" && node.innerHTML!="moved"){
twentyfour.style.background="deeppink";
twentyfour.style.border="solid deeppink";
twentyeight.style.background="deeppink";
twentyeight.style.border="solid deeppink";
thirtyone.style.background="red";
thirtyone.style.border="solid black";
node.innerHTML="moved";}
break;}

switch(true) {
case node.innerHTML != "moved":
switch(true) {
case val == 0:
if (one.style.background=="red" && five.style.background=="deeppink") {
one.style.background="deeppink";
one.style.border="solid deeppink";
five.style.background="red";
five.style.border="solid black";}
else if (five.style.background=="red" && nine.style.background=="deeppink") {
five.style.background="deeppink";
five.style.border="solid deeppink";
nine.style.background="red";
nine.style.border="solid black";}
else if (five.style.background=="red" && ten.style.background=="deeppink") {
five.style.background="deeppink";
five.style.border="solid deeppink";
ten.style.background="red";
ten.style.border="solid black";}
else if (nine.style.background=="red" && thirteen.style.background=="deeppink") {
nine.style.background="deeppink";
nine.style.border="solid deeppink";
thirteen.style.background="red";
thirteen.style.border="solid black";}
else if (thirteen.style.background=="red" && seventeen.style.background=="deeppink") {
thirteen.style.background="deeppink";
thirteen.style.border="solid deeppink";
seventeen.style.background="red";
seventeen.style.border="solid black";}
else if (thirteen.style.background=="red" && eighteen.style.background=="deeppink") {
thirteen.style.background="deeppink";
thirteen.style.border="solid deeppink";
eighteen.style.background="red";
eighteen.style.border="solid black";}
else if (seventeen.style.background=="red" && twentyone.style.background=="deeppink") {
seventeen.style.background="deeppink";
seventeen.style.border="solid deeppink";
twentyone.style.background="red";
twentyone.style.border="solid black";}
else if (twentyone.style.background=="red" && twentyfive.style.background=="deeppink") {
twentyone.style.background="deeppink";
twentyone.style.border="solid deeppink";
twentyfive.style.background="red";
twentyfive.style.border="solid black";}
else if (twentyone.style.background=="red" && twentysix.style.background=="deeppink") {
twentyone.style.background="deeppink";
twentyone.style.border="solid deeppink";
twentysix.style.background="red";
twentysix.style.border="solid black";}
else if (twentyfive.style.background=="red" && twentynine.style.background=="deeppink") {
twentyfive.style.background="deeppink";
twentyfive.style.border="solid deeppink";
twentynine.style.background="red";
twentynine.style.border="solid black";}

else if (two.style.background=="red" && five.style.background=="deeppink") {
two.style.background="deeppink";
two.style.border="solid deeppink";
five.style.background="red";
five.style.border="solid black";}
else if (two.style.background=="red" && six.style.background=="deeppink") {
two.style.background="deeppink";
two.style.border="solid deeppink";
six.style.background="red";
six.style.border="solid black";}
else if (six.style.background=="red" && ten.style.background=="deeppink") {
six.style.background="deeppink";
six.style.border="solid deeppink";
ten.style.background="red";
ten.style.border="solid black";}
else if (six.style.background=="red" && eleven.style.background=="deeppink") {
six.style.background="deeppink";
six.style.border="solid deeppink";
eleven.style.background="red";
eleven.style.border="solid black";}
else if (ten.style.background=="red" && thirteen.style.background=="deeppink") {
ten.style.background="deeppink";
ten.style.border="solid deeppink";
thirteen.style.background="red";
thirteen.style.border="solid black";}
else if (ten.style.background=="red" && fourteen.style.background=="deeppink") {
ten.style.background="deeppink";
ten.style.border="solid deeppink";
fourteen.style.background="red";
fourteen.style.border="solid black";}
else if (fourteen.style.background=="red" && eighteen.style.background=="deeppink") {
fourteen.style.background="deeppink";
fourteen.style.border="solid deeppink";
eighteen.style.background="red";
eighteen.style.border="solid black";}
else if (fourteen.style.background=="red" && nineteen.style.background=="deeppink") {
fourteen.style.background="deeppink";
fourteen.style.border="solid deeppink";
nineteen.style.background="red";
nineteen.style.border="solid black";}
else if (eighteen.style.background=="red" && twentyone.style.background=="deeppink") {
eighteen.style.background="deeppink";
eighteen.style.border="solid deeppink";
twentyone.style.background="red";
twentyone.style.border="solid black";}
else if (eighteen.style.background=="red" && twentytwo.style.background=="deeppink") {
eighteen.style.background="deeppink";
eighteen.style.border="solid deeppink";
twentytwo.style.background="red";
twentytwo.style.border="solid black";}
else if (twentytwo.style.background=="red" && twentysix.style.background=="deeppink") {
twentytwo.style.background="deeppink";
twentytwo.style.border="solid deeppink";
twentysix.style.background="red";
twentysix.style.border="solid black";}
else if (twentytwo.style.background=="red" && twentyseven.style.background=="deeppink") {
twentytwo.style.background="deeppink";
twentytwo.style.border="solid deeppink";
twentyseven.style.background="red";
twentyseven.style.border="solid black";}
else if (twentysix.style.background=="red" && twentynine.style.background=="deeppink") {
twentysix.style.background="deeppink";
twentysix.style.border="solid deeppink";
twentynine.style.background="red";
twentynine.style.border="solid black";}
else if (twentysix.style.background=="red" && thirty.style.background=="deeppink") {
twentysix.style.background="deeppink";
twentysix.style.border="solid deeppink";
thirty.style.background="red";
thirty.style.border="solid black";}

else if (three.style.background=="red" && six.style.background=="deeppink") {
three.style.background="deeppink";
three.style.border="solid deeppink";
six.style.background="red";
six.style.border="solid black";}
else if (three.style.background=="red" && seven.style.background=="deeppink") {
three.style.background="deeppink";
three.style.border="solid deeppink";
seven.style.background="red";
seven.style.border="solid black";}
else if (seven.style.background=="red" && eleven.style.background=="deeppink") {
seven.style.background="deeppink";
seven.style.border="solid deeppink";
eleven.style.background="red";
eleven.style.border="solid black";}
else if (seven.style.background=="red" && twelve.style.background=="deeppink") {
seven.style.background="deeppink";
seven.style.border="solid deeppink";
twelve.style.background="red";
twelve.style.border="solid black";}
else if (eleven.style.background=="red" && fourteen.style.background=="deeppink") {
eleven.style.background="deeppink";
eleven.style.border="solid deeppink";
fourteen.style.background="red";
fourteen.style.border="solid black";}
else if (eleven.style.background=="red" && fifteen.style.background=="deeppink") {
eleven.style.background="deeppink";
eleven.style.border="solid deeppink";
fifteen.style.background="red";
fifteen.style.border="solid black";}
else if (fifteen.style.background=="red" && nineteen.style.background=="deeppink") {
fifteen.style.background="deeppink";
fifteen.style.border="solid deeppink";
nineteen.style.background="red";
nineteen.style.border="solid black";}
else if (fifteen.style.background=="red" && twenty.style.background=="deeppink") {
fifteen.style.background="deeppink";
fifteen.style.border="solid deeppink";
twenty.style.background="red";
twenty.style.border="solid black";}
else if (nineteen.style.background=="red" && twentytwo.style.background=="deeppink") {
nineteen.style.background="deeppink";
nineteen.style.border="solid deeppink";
twentytwo.style.background="red";
twentytwo.style.border="solid black";}
else if (nineteen.style.background=="red" && twentythree.style.background=="deeppink") {
nineteen.style.background="deeppink";
nineteen.style.border="solid deeppink";
twentythree.style.background="red";
twentythree.style.border="solid black";}
else if (twentythree.style.background=="red" && twentyseven.style.background=="deeppink") {
twentythree.style.background="deeppink";
twentythree.style.border="solid deeppink";
twentyseven.style.background="red";
twentyseven.style.border="solid black";}
else if (twentythree.style.background=="red" && twentyeight.style.background=="deeppink") {
twentythree.style.background="deeppink";
twentythree.style.border="solid deeppink";
twentyeight.style.background="red";
twentyeight.style.border="solid black";}
else if (twentyseven.style.background=="red" && thirty.style.background=="deeppink") {
twentyseven.style.background="deeppink";
twentyseven.style.border="solid deeppink";
thirty.style.background="red";
thirty.style.border="solid black";}
else if (twentyseven.style.background=="red" && thirtyone.style.background=="deeppink") {
twentyseven.style.background="deeppink";
twentyseven.style.border="solid deeppink";
thirtyone.style.background="red";
thirtyone.style.border="solid black";}

else if (four.style.background=="red" && seven.style.background=="deeppink") {
four.style.background="deeppink";
four.style.border="solid deeppink";
seven.style.background="red";
seven.style.border="solid black";}
else if (four.style.background=="red" && eight.style.background=="deeppink") {
four.style.background="deeppink";
four.style.border="solid deeppink";
eight.style.background="red";
eight.style.border="solid black";}
else if (eight.style.background=="red" && twelve.style.background=="deeppink") {
eight.style.background="deeppink";
eight.style.border="solid deeppink";
twelve.style.background="red";
twelve.style.border="solid black";}
else if (twelve.style.background=="red" && fifteen.style.background=="deeppink") {
twelve.style.background="deeppink";
twelve.style.border="solid deeppink";
fifteen.style.background="red";
fifteen.style.border="solid black";}
else if (twelve.style.background=="red" && sixteen.style.background=="deeppink") {
twelve.style.background="deeppink";
twelve.style.border="solid deeppink";
sixteen.style.background="red";
sixteen.style.border="solid black";}
else if (sixteen.style.background=="red" && twenty.style.background=="deeppink") {
sixteen.style.background="deeppink";
sixteen.style.border="solid deeppink";
twenty.style.background="red";
twenty.style.border="solid black";}
else if (twenty.style.background=="red" && twentythree.style.background=="deeppink") {
twenty.style.background="deeppink";
twenty.style.border="solid deeppink";
twentythree.style.background="red";
twentythree.style.border="solid black";}
else if (twenty.style.background=="red" && twentyfour.style.background=="deeppink") {
twenty.style.background="deeppink";
twenty.style.border="solid deeppink";
twentyfour.style.background="red";
twentyfour.style.border="solid black";}
else if (twentyfour.style.background=="red" && twentyeight.style.background=="deeppink") {
twentyfour.style.background="deeppink";
twentyfour.style.border="solid deeppink";
twentyeight.style.background="red";
twentyeight.style.border="solid black";}
else if (twentyeight.style.background=="red" && thirtyone.style.background=="deeppink") {
twentyeight.style.background="deeppink";
twentyeight.style.border="solid deeppink";
thirtyone.style.background="red";
thirtyone.style.border="solid black";}
else if (twentyeight.style.background=="red" && thirtytwo.style.background=="deeppink") {
twentyeight.style.background="deeppink";
twentyeight.style.border="solid deeppink";
thirtytwo.style.background="red";
thirtytwo.style.border="solid black";}
break;}
switch(true) {
case val == 1:
if (two.style.background=="red" && five.style.background=="deeppink") {
two.style.background="deeppink";
two.style.border="solid deeppink";
five.style.background="red";
five.style.border="solid black";}
else if (two.style.background=="red" && six.style.background=="deeppink") {
two.style.background="deeppink";
two.style.border="solid deeppink";
six.style.background="red";
six.style.border="solid black";}
else if (six.style.background=="red" && ten.style.background=="deeppink") {
six.style.background="deeppink";
six.style.border="solid deeppink";
ten.style.background="red";
ten.style.border="solid black";}
else if (six.style.background=="red" && eleven.style.background=="deeppink") {
six.style.background="deeppink";
six.style.border="solid deeppink";
eleven.style.background="red";
eleven.style.border="solid black";}
else if (ten.style.background=="red" && thirteen.style.background=="deeppink") {
ten.style.background="deeppink";
ten.style.border="solid deeppink";
thirteen.style.background="red";
thirteen.style.border="solid black";}
else if (ten.style.background=="red" && fourteen.style.background=="deeppink") {
ten.style.background="deeppink";
ten.style.border="solid deeppink";
fourteen.style.background="red";
fourteen.style.border="solid black";}
else if (fourteen.style.background=="red" && eighteen.style.background=="deeppink") {
fourteen.style.background="deeppink";
fourteen.style.border="solid deeppink";
eighteen.style.background="red";
eighteen.style.border="solid black";}
else if (fourteen.style.background=="red" && nineteen.style.background=="deeppink") {
fourteen.style.background="deeppink";
fourteen.style.border="solid deeppink";
nineteen.style.background="red";
nineteen.style.border="solid black";}
else if (eighteen.style.background=="red" && twentyone.style.background=="deeppink") {
eighteen.style.background="deeppink";
eighteen.style.border="solid deeppink";
twentyone.style.background="red";
twentyone.style.border="solid black";}
else if (eighteen.style.background=="red" && twentytwo.style.background=="deeppink") {
eighteen.style.background="deeppink";
eighteen.style.border="solid deeppink";
twentytwo.style.background="red";
twentytwo.style.border="solid black";}
else if (twentytwo.style.background=="red" && twentysix.style.background=="deeppink") {
twentytwo.style.background="deeppink";
twentytwo.style.border="solid deeppink";
twentysix.style.background="red";
twentysix.style.border="solid black";}
else if (twentytwo.style.background=="red" && twentyseven.style.background=="deeppink") {
twentytwo.style.background="deeppink";
twentytwo.style.border="solid deeppink";
twentyseven.style.background="red";
twentyseven.style.border="solid black";}
else if (twentysix.style.background=="red" && twentynine.style.background=="deeppink") {
twentysix.style.background="deeppink";
twentysix.style.border="solid deeppink";
twentynine.style.background="red";
twentynine.style.border="solid black";}
else if (twentysix.style.background=="red" && thirty.style.background=="deeppink") {
twentysix.style.background="deeppink";
twentysix.style.border="solid deeppink";
thirty.style.background="red";
thirty.style.border="solid black";}

else if (one.style.background=="red" && five.style.background=="deeppink") {
one.style.background="deeppink";
one.style.border="solid deeppink";
five.style.background="red";
five.style.border="solid black";}
else if (five.style.background=="red" && nine.style.background=="deeppink") {
five.style.background="deeppink";
five.style.border="solid deeppink";
nine.style.background="red";
nine.style.border="solid black";}
else if (five.style.background=="red" && ten.style.background=="deeppink") {
five.style.background="deeppink";
five.style.border="solid deeppink";
ten.style.background="red";
ten.style.border="solid black";}
else if (nine.style.background=="red" && thirteen.style.background=="deeppink") {
nine.style.background="deeppink";
nine.style.border="solid deeppink";
thirteen.style.background="red";
thirteen.style.border="solid black";}
else if (thirteen.style.background=="red" && seventeen.style.background=="deeppink") {
thirteen.style.background="deeppink";
thirteen.style.border="solid deeppink";
seventeen.style.background="red";
seventeen.style.border="solid black";}
else if (thirteen.style.background=="red" && eighteen.style.background=="deeppink") {
thirteen.style.background="deeppink";
thirteen.style.border="solid deeppink";
eighteen.style.background="red";
eighteen.style.border="solid black";}
else if (seventeen.style.background=="red" && twentyone.style.background=="deeppink") {
seventeen.style.background="deeppink";
seventeen.style.border="solid deeppink";
twentyone.style.background="red";
twentyone.style.border="solid black";}
else if (twentyone.style.background=="red" && twentyfive.style.background=="deeppink") {
twentyone.style.background="deeppink";
twentyone.style.border="solid deeppink";
twentyfive.style.background="red";
twentyfive.style.border="solid black";}
else if (twentyone.style.background=="red" && twentysix.style.background=="deeppink") {
twentyone.style.background="deeppink";
twentyone.style.border="solid deeppink";
twentysix.style.background="red";
twentysix.style.border="solid black";}
else if (twentyfive.style.background=="red" && twentynine.style.background=="deeppink") {
twentyfive.style.background="deeppink";
twentyfive.style.border="solid deeppink";
twentynine.style.background="red";
twentynine.style.border="solid black";}

else if (three.style.background=="red" && six.style.background=="deeppink") {
three.style.background="deeppink";
three.style.border="solid deeppink";
six.style.background="red";
six.style.border="solid black";}
else if (three.style.background=="red" && seven.style.background=="deeppink") {
three.style.background="deeppink";
three.style.border="solid deeppink";
seven.style.background="red";
seven.style.border="solid black";}
else if (seven.style.background=="red" && eleven.style.background=="deeppink") {
seven.style.background="deeppink";
seven.style.border="solid deeppink";
eleven.style.background="red";
eleven.style.border="solid black";}
else if (seven.style.background=="red" && twelve.style.background=="deeppink") {
seven.style.background="deeppink";
seven.style.border="solid deeppink";
twelve.style.background="red";
twelve.style.border="solid black";}
else if (eleven.style.background=="red" && fourteen.style.background=="deeppink") {
eleven.style.background="deeppink";
eleven.style.border="solid deeppink";
fourteen.style.background="red";
fourteen.style.border="solid black";}
else if (eleven.style.background=="red" && fifteen.style.background=="deeppink") {
eleven.style.background="deeppink";
eleven.style.border="solid deeppink";
fifteen.style.background="red";
fifteen.style.border="solid black";}
else if (fifteen.style.background=="red" && nineteen.style.background=="deeppink") {
fifteen.style.background="deeppink";
fifteen.style.border="solid deeppink";
nineteen.style.background="red";
nineteen.style.border="solid black";}
else if (fifteen.style.background=="red" && twenty.style.background=="deeppink") {
fifteen.style.background="deeppink";
fifteen.style.border="solid deeppink";
twenty.style.background="red";
twenty.style.border="solid black";}
else if (nineteen.style.background=="red" && twentytwo.style.background=="deeppink") {
nineteen.style.background="deeppink";
nineteen.style.border="solid deeppink";
twentytwo.style.background="red";
twentytwo.style.border="solid black";}
else if (nineteen.style.background=="red" && twentythree.style.background=="deeppink") {
nineteen.style.background="deeppink";
nineteen.style.border="solid deeppink";
twentythree.style.background="red";
twentythree.style.border="solid black";}
else if (twentythree.style.background=="red" && twentyseven.style.background=="deeppink") {
twentythree.style.background="deeppink";
twentythree.style.border="solid deeppink";
twentyseven.style.background="red";
twentyseven.style.border="solid black";}
else if (twentythree.style.background=="red" && twentyeight.style.background=="deeppink") {
twentythree.style.background="deeppink";
twentythree.style.border="solid deeppink";
twentyeight.style.background="red";
twentyeight.style.border="solid black";}
else if (twentyseven.style.background=="red" && thirty.style.background=="deeppink") {
twentyseven.style.background="deeppink";
twentyseven.style.border="solid deeppink";
thirty.style.background="red";
thirty.style.border="solid black";}
else if (twentyseven.style.background=="red" && thirtyone.style.background=="deeppink") {
twentyseven.style.background="deeppink";
twentyseven.style.border="solid deeppink";
thirtyone.style.background="red";
thirtyone.style.border="solid black";}

else if (four.style.background=="red" && seven.style.background=="deeppink") {
four.style.background="deeppink";
four.style.border="solid deeppink";
seven.style.background="red";
seven.style.border="solid black";}
else if (four.style.background=="red" && eight.style.background=="deeppink") {
four.style.background="deeppink";
four.style.border="solid deeppink";
eight.style.background="red";
eight.style.border="solid black";}
else if (eight.style.background=="red" && twelve.style.background=="deeppink") {
eight.style.background="deeppink";
eight.style.border="solid deeppink";
twelve.style.background="red";
twelve.style.border="solid black";}
else if (twelve.style.background=="red" && fifteen.style.background=="deeppink") {
twelve.style.background="deeppink";
twelve.style.border="solid deeppink";
fifteen.style.background="red";
fifteen.style.border="solid black";}
else if (twelve.style.background=="red" && sixteen.style.background=="deeppink") {
twelve.style.background="deeppink";
twelve.style.border="solid deeppink";
sixteen.style.background="red";
sixteen.style.border="solid black";}
else if (sixteen.style.background=="red" && twenty.style.background=="deeppink") {
sixteen.style.background="deeppink";
sixteen.style.border="solid deeppink";
twenty.style.background="red";
twenty.style.border="solid black";}
else if (twenty.style.background=="red" && twentythree.style.background=="deeppink") {
twenty.style.background="deeppink";
twenty.style.border="solid deeppink";
twentythree.style.background="red";
twentythree.style.border="solid black";}
else if (twenty.style.background=="red" && twentyfour.style.background=="deeppink") {
twenty.style.background="deeppink";
twenty.style.border="solid deeppink";
twentyfour.style.background="red";
twentyfour.style.border="solid black";}
else if (twentyfour.style.background=="red" && twentyeight.style.background=="deeppink") {
twentyfour.style.background="deeppink";
twentyfour.style.border="solid deeppink";
twentyeight.style.background="red";
twentyeight.style.border="solid black";}
else if (twentyeight.style.background=="red" && thirtyone.style.background=="deeppink") {
twentyeight.style.background="deeppink";
twentyeight.style.border="solid deeppink";
thirtyone.style.background="red";
thirtyone.style.border="solid black";}
else if (twentyeight.style.background=="red" && thirtytwo.style.background=="deeppink") {
twentyeight.style.background="deeppink";
twentyeight.style.border="solid deeppink";
thirtytwo.style.background="red";
thirtytwo.style.border="solid black";}
break;}

switch(true) {
case val == 2:
if (three.style.background=="red" && six.style.background=="deeppink") {
three.style.background="deeppink";
three.style.border="solid deeppink";
six.style.background="red";
six.style.border="solid black";}
else if (three.style.background=="red" && seven.style.background=="deeppink") {
three.style.background="deeppink";
three.style.border="solid deeppink";
seven.style.background="red";
seven.style.border="solid black";}
else if (seven.style.background=="red" && eleven.style.background=="deeppink") {
seven.style.background="deeppink";
seven.style.border="solid deeppink";
eleven.style.background="red";
eleven.style.border="solid black";}
else if (seven.style.background=="red" && twelve.style.background=="deeppink") {
seven.style.background="deeppink";
seven.style.border="solid deeppink";
twelve.style.background="red";
twelve.style.border="solid black";}
else if (eleven.style.background=="red" && fourteen.style.background=="deeppink") {
eleven.style.background="deeppink";
eleven.style.border="solid deeppink";
fourteen.style.background="red";
fourteen.style.border="solid black";}
else if (eleven.style.background=="red" && fifteen.style.background=="deeppink") {
eleven.style.background="deeppink";
eleven.style.border="solid deeppink";
fifteen.style.background="red";
fifteen.style.border="solid black";}
else if (fifteen.style.background=="red" && nineteen.style.background=="deeppink") {
fifteen.style.background="deeppink";
fifteen.style.border="solid deeppink";
nineteen.style.background="red";
nineteen.style.border="solid black";}
else if (fifteen.style.background=="red" && twenty.style.background=="deeppink") {
fifteen.style.background="deeppink";
fifteen.style.border="solid deeppink";
twenty.style.background="red";
twenty.style.border="solid black";}
else if (nineteen.style.background=="red" && twentytwo.style.background=="deeppink") {
nineteen.style.background="deeppink";
nineteen.style.border="solid deeppink";
twentytwo.style.background="red";
twentytwo.style.border="solid black";}
else if (nineteen.style.background=="red" && twentythree.style.background=="deeppink") {
nineteen.style.background="deeppink";
nineteen.style.border="solid deeppink";
twentythree.style.background="red";
twentythree.style.border="solid black";}
else if (twentythree.style.background=="red" && twentyseven.style.background=="deeppink") {
twentythree.style.background="deeppink";
twentythree.style.border="solid deeppink";
twentyseven.style.background="red";
twentyseven.style.border="solid black";}
else if (twentythree.style.background=="red" && twentyeight.style.background=="deeppink") {
twentythree.style.background="deeppink";
twentythree.style.border="solid deeppink";
twentyeight.style.background="red";
twentyeight.style.border="solid black";}
else if (twentyseven.style.background=="red" && thirty.style.background=="deeppink") {
twentyseven.style.background="deeppink";
twentyseven.style.border="solid deeppink";
thirty.style.background="red";
thirty.style.border="solid black";}
else if (twentyseven.style.background=="red" && thirtyone.style.background=="deeppink") {
twentyseven.style.background="deeppink";
twentyseven.style.border="solid deeppink";
thirtyone.style.background="red";
thirtyone.style.border="solid black";}

else if (four.style.background=="red" && seven.style.background=="deeppink") {
four.style.background="deeppink";
four.style.border="solid deeppink";
seven.style.background="red";
seven.style.border="solid black";}
else if (four.style.background=="red" && eight.style.background=="deeppink") {
four.style.background="deeppink";
four.style.border="solid deeppink";
eight.style.background="red";
eight.style.border="solid black";}
else if (eight.style.background=="red" && twelve.style.background=="deeppink") {
eight.style.background="deeppink";
eight.style.border="solid deeppink";
twelve.style.background="red";
twelve.style.border="solid black";}
else if (twelve.style.background=="red" && fifteen.style.background=="deeppink") {
twelve.style.background="deeppink";
twelve.style.border="solid deeppink";
fifteen.style.background="red";
fifteen.style.border="solid black";}
else if (twelve.style.background=="red" && sixteen.style.background=="deeppink") {
twelve.style.background="deeppink";
twelve.style.border="solid deeppink";
sixteen.style.background="red";
sixteen.style.border="solid black";}
else if (sixteen.style.background=="red" && twenty.style.background=="deeppink") {
sixteen.style.background="deeppink";
sixteen.style.border="solid deeppink";
twenty.style.background="red";
twenty.style.border="solid black";}
else if (twenty.style.background=="red" && twentythree.style.background=="deeppink") {
twenty.style.background="deeppink";
twenty.style.border="solid deeppink";
twentythree.style.background="red";
twentythree.style.border="solid black";}
else if (twenty.style.background=="red" && twentyfour.style.background=="deeppink") {
twenty.style.background="deeppink";
twenty.style.border="solid deeppink";
twentyfour.style.background="red";
twentyfour.style.border="solid black";}
else if (twentyfour.style.background=="red" && twentyeight.style.background=="deeppink") {
twentyfour.style.background="deeppink";
twentyfour.style.border="solid deeppink";
twentyeight.style.background="red";
twentyeight.style.border="solid black";}
else if (twentyeight.style.background=="red" && thirtyone.style.background=="deeppink") {
twentyeight.style.background="deeppink";
twentyeight.style.border="solid deeppink";
thirtyone.style.background="red";
thirtyone.style.border="solid black";}
else if (twentyeight.style.background=="red" && thirtytwo.style.background=="deeppink") {
twentyeight.style.background="deeppink";
twentyeight.style.border="solid deeppink";
thirtytwo.style.background="red";
thirtytwo.style.border="solid black";}

else if (two.style.background=="red" && five.style.background=="deeppink") {
two.style.background="deeppink";
two.style.border="solid deeppink";
five.style.background="red";
five.style.border="solid black";}
else if (two.style.background=="red" && six.style.background=="deeppink") {
two.style.background="deeppink";
two.style.border="solid deeppink";
six.style.background="red";
six.style.border="solid black";}
else if (six.style.background=="red" && ten.style.background=="deeppink") {
six.style.background="deeppink";
six.style.border="solid deeppink";
ten.style.background="red";
ten.style.border="solid black";}
else if (six.style.background=="red" && eleven.style.background=="deeppink") {
six.style.background="deeppink";
six.style.border="solid deeppink";
eleven.style.background="red";
eleven.style.border="solid black";}
else if (ten.style.background=="red" && thirteen.style.background=="deeppink") {
ten.style.background="deeppink";
ten.style.border="solid deeppink";
thirteen.style.background="red";
thirteen.style.border="solid black";}
else if (ten.style.background=="red" && fourteen.style.background=="deeppink") {
ten.style.background="deeppink";
ten.style.border="solid deeppink";
fourteen.style.background="red";
fourteen.style.border="solid black";}
else if (fourteen.style.background=="red" && eighteen.style.background=="deeppink") {
fourteen.style.background="deeppink";
fourteen.style.border="solid deeppink";
eighteen.style.background="red";
eighteen.style.border="solid black";}
else if (fourteen.style.background=="red" && nineteen.style.background=="deeppink") {
fourteen.style.background="deeppink";
fourteen.style.border="solid deeppink";
nineteen.style.background="red";
nineteen.style.border="solid black";}
else if (eighteen.style.background=="red" && twentyone.style.background=="deeppink") {
eighteen.style.background="deeppink";
eighteen.style.border="solid deeppink";
twentyone.style.background="red";
twentyone.style.border="solid black";}
else if (eighteen.style.background=="red" && twentytwo.style.background=="deeppink") {
eighteen.style.background="deeppink";
eighteen.style.border="solid deeppink";
twentytwo.style.background="red";
twentytwo.style.border="solid black";}
else if (twentytwo.style.background=="red" && twentysix.style.background=="deeppink") {
twentytwo.style.background="deeppink";
twentytwo.style.border="solid deeppink";
twentysix.style.background="red";
twentysix.style.border="solid black";}
else if (twentytwo.style.background=="red" && twentyseven.style.background=="deeppink") {
twentytwo.style.background="deeppink";
twentytwo.style.border="solid deeppink";
twentyseven.style.background="red";
twentyseven.style.border="solid black";}
else if (twentysix.style.background=="red" && twentynine.style.background=="deeppink") {
twentysix.style.background="deeppink";
twentysix.style.border="solid deeppink";
twentynine.style.background="red";
twentynine.style.border="solid black";}
else if (twentysix.style.background=="red" && thirty.style.background=="deeppink") {
twentysix.style.background="deeppink";
twentysix.style.border="solid deeppink";
thirty.style.background="red";
thirty.style.border="solid black";}

else if (one.style.background=="red" && five.style.background=="deeppink") {
one.style.background="deeppink";
one.style.border="solid deeppink";
five.style.background="red";
five.style.border="solid black";}
else if (five.style.background=="red" && nine.style.background=="deeppink") {
five.style.background="deeppink";
five.style.border="solid deeppink";
nine.style.background="red";
nine.style.border="solid black";}
else if (five.style.background=="red" && ten.style.background=="deeppink") {
five.style.background="deeppink";
five.style.border="solid deeppink";
ten.style.background="red";
ten.style.border="solid black";}
else if (nine.style.background=="red" && thirteen.style.background=="deeppink") {
nine.style.background="deeppink";
nine.style.border="solid deeppink";
thirteen.style.background="red";
thirteen.style.border="solid black";}
else if (thirteen.style.background=="red" && seventeen.style.background=="deeppink") {
thirteen.style.background="deeppink";
thirteen.style.border="solid deeppink";
seventeen.style.background="red";
seventeen.style.border="solid black";}
else if (thirteen.style.background=="red" && eighteen.style.background=="deeppink") {
thirteen.style.background="deeppink";
thirteen.style.border="solid deeppink";
eighteen.style.background="red";
eighteen.style.border="solid black";}
else if (seventeen.style.background=="red" && twentyone.style.background=="deeppink") {
seventeen.style.background="deeppink";
seventeen.style.border="solid deeppink";
twentyone.style.background="red";
twentyone.style.border="solid black";}
else if (twentyone.style.background=="red" && twentyfive.style.background=="deeppink") {
twentyone.style.background="deeppink";
twentyone.style.border="solid deeppink";
twentyfive.style.background="red";
twentyfive.style.border="solid black";}
else if (twentyone.style.background=="red" && twentysix.style.background=="deeppink") {
twentyone.style.background="deeppink";
twentyone.style.border="solid deeppink";
twentysix.style.background="red";
twentysix.style.border="solid black";}
else if (twentyfive.style.background=="red" && twentynine.style.background=="deeppink") {
twentyfive.style.background="deeppink";
twentyfive.style.border="solid deeppink";
twentynine.style.background="red";
twentynine.style.border="solid black";}
break;}

switch(true) {
case val == 3:
if (four.style.background=="red" && seven.style.background=="deeppink") {
four.style.background="deeppink";
four.style.border="solid deeppink";
seven.style.background="red";
seven.style.border="solid black";}
else if (four.style.background=="red" && eight.style.background=="deeppink") {
four.style.background="deeppink";
four.style.border="solid deeppink";
eight.style.background="red";
eight.style.border="solid black";}
else if (eight.style.background=="red" && twelve.style.background=="deeppink") {
eight.style.background="deeppink";
eight.style.border="solid deeppink";
twelve.style.background="red";
twelve.style.border="solid black";}
else if (twelve.style.background=="red" && fifteen.style.background=="deeppink") {
twelve.style.background="deeppink";
twelve.style.border="solid deeppink";
fifteen.style.background="red";
fifteen.style.border="solid black";}
else if (twelve.style.background=="red" && sixteen.style.background=="deeppink") {
twelve.style.background="deeppink";
twelve.style.border="solid deeppink";
sixteen.style.background="red";
sixteen.style.border="solid black";}
else if (sixteen.style.background=="red" && twenty.style.background=="deeppink") {
sixteen.style.background="deeppink";
sixteen.style.border="solid deeppink";
twenty.style.background="red";
twenty.style.border="solid black";}
else if (twenty.style.background=="red" && twentythree.style.background=="deeppink") {
twenty.style.background="deeppink";
twenty.style.border="solid deeppink";
twentythree.style.background="red";
twentythree.style.border="solid black";}
else if (twenty.style.background=="red" && twentyfour.style.background=="deeppink") {
twenty.style.background="deeppink";
twenty.style.border="solid deeppink";
twentyfour.style.background="red";
twentyfour.style.border="solid black";}
else if (twentyfour.style.background=="red" && twentyeight.style.background=="deeppink") {
twentyfour.style.background="deeppink";
twentyfour.style.border="solid deeppink";
twentyeight.style.background="red";
twentyeight.style.border="solid black";}
else if (twentyeight.style.background=="red" && thirtyone.style.background=="deeppink") {
twentyeight.style.background="deeppink";
twentyeight.style.border="solid deeppink";
thirtyone.style.background="red";
thirtyone.style.border="solid black";}
else if (twentyeight.style.background=="red" && thirtytwo.style.background=="deeppink") {
twentyeight.style.background="deeppink";
twentyeight.style.border="solid deeppink";
thirtytwo.style.background="red";
thirtytwo.style.border="solid black";}

else if (three.style.background=="red" && six.style.background=="deeppink") {
three.style.background="deeppink";
three.style.border="solid deeppink";
six.style.background="red";
six.style.border="solid black";}
else if (three.style.background=="red" && seven.style.background=="deeppink") {
three.style.background="deeppink";
three.style.border="solid deeppink";
seven.style.background="red";
seven.style.border="solid black";}
else if (seven.style.background=="red" && eleven.style.background=="deeppink") {
seven.style.background="deeppink";
seven.style.border="solid deeppink";
eleven.style.background="red";
eleven.style.border="solid black";}
else if (seven.style.background=="red" && twelve.style.background=="deeppink") {
seven.style.background="deeppink";
seven.style.border="solid deeppink";
twelve.style.background="red";
twelve.style.border="solid black";}
else if (eleven.style.background=="red" && fourteen.style.background=="deeppink") {
eleven.style.background="deeppink";
eleven.style.border="solid deeppink";
fourteen.style.background="red";
fourteen.style.border="solid black";}
else if (eleven.style.background=="red" && fifteen.style.background=="deeppink") {
eleven.style.background="deeppink";
eleven.style.border="solid deeppink";
fifteen.style.background="red";
fifteen.style.border="solid black";}
else if (fifteen.style.background=="red" && nineteen.style.background=="deeppink") {
fifteen.style.background="deeppink";
fifteen.style.border="solid deeppink";
nineteen.style.background="red";
nineteen.style.border="solid black";}
else if (fifteen.style.background=="red" && twenty.style.background=="deeppink") {
fifteen.style.background="deeppink";
fifteen.style.border="solid deeppink";
twenty.style.background="red";
twenty.style.border="solid black";}
else if (nineteen.style.background=="red" && twentytwo.style.background=="deeppink") {
nineteen.style.background="deeppink";
nineteen.style.border="solid deeppink";
twentytwo.style.background="red";
twentytwo.style.border="solid black";}
else if (nineteen.style.background=="red" && twentythree.style.background=="deeppink") {
nineteen.style.background="deeppink";
nineteen.style.border="solid deeppink";
twentythree.style.background="red";
twentythree.style.border="solid black";}
else if (twentythree.style.background=="red" && twentyseven.style.background=="deeppink") {
twentythree.style.background="deeppink";
twentythree.style.border="solid deeppink";
twentyseven.style.background="red";
twentyseven.style.border="solid black";}
else if (twentythree.style.background=="red" && twentyeight.style.background=="deeppink") {
twentythree.style.background="deeppink";
twentythree.style.border="solid deeppink";
twentyeight.style.background="red";
twentyeight.style.border="solid black";}
else if (twentyseven.style.background=="red" && thirty.style.background=="deeppink") {
twentyseven.style.background="deeppink";
twentyseven.style.border="solid deeppink";
thirty.style.background="red";
thirty.style.border="solid black";}
else if (twentyseven.style.background=="red" && thirtyone.style.background=="deeppink") {
twentyseven.style.background="deeppink";
twentyseven.style.border="solid deeppink";
thirtyone.style.background="red";
thirtyone.style.border="solid black";}

else if (two.style.background=="red" && five.style.background=="deeppink") {
two.style.background="deeppink";
two.style.border="solid deeppink";
five.style.background="red";
five.style.border="solid black";}
else if (two.style.background=="red" && six.style.background=="deeppink") {
two.style.background="deeppink";
two.style.border="solid deeppink";
six.style.background="red";
six.style.border="solid black";}
else if (six.style.background=="red" && ten.style.background=="deeppink") {
six.style.background="deeppink";
six.style.border="solid deeppink";
ten.style.background="red";
ten.style.border="solid black";}
else if (six.style.background=="red" && eleven.style.background=="deeppink") {
six.style.background="deeppink";
six.style.border="solid deeppink";
eleven.style.background="red";
eleven.style.border="solid black";}
else if (ten.style.background=="red" && thirteen.style.background=="deeppink") {
ten.style.background="deeppink";
ten.style.border="solid deeppink";
thirteen.style.background="red";
thirteen.style.border="solid black";}
else if (ten.style.background=="red" && fourteen.style.background=="deeppink") {
ten.style.background="deeppink";
ten.style.border="solid deeppink";
fourteen.style.background="red";
fourteen.style.border="solid black";}
else if (fourteen.style.background=="red" && eighteen.style.background=="deeppink") {
fourteen.style.background="deeppink";
fourteen.style.border="solid deeppink";
eighteen.style.background="red";
eighteen.style.border="solid black";}
else if (fourteen.style.background=="red" && nineteen.style.background=="deeppink") {
fourteen.style.background="deeppink";
fourteen.style.border="solid deeppink";
nineteen.style.background="red";
nineteen.style.border="solid black";}
else if (eighteen.style.background=="red" && twentyone.style.background=="deeppink") {
eighteen.style.background="deeppink";
eighteen.style.border="solid deeppink";
twentyone.style.background="red";
twentyone.style.border="solid black";}
else if (eighteen.style.background=="red" && twentytwo.style.background=="deeppink") {
eighteen.style.background="deeppink";
eighteen.style.border="solid deeppink";
twentytwo.style.background="red";
twentytwo.style.border="solid black";}
else if (twentytwo.style.background=="red" && twentysix.style.background=="deeppink") {
twentytwo.style.background="deeppink";
twentytwo.style.border="solid deeppink";
twentysix.style.background="red";
twentysix.style.border="solid black";}
else if (twentytwo.style.background=="red" && twentyseven.style.background=="deeppink") {
twentytwo.style.background="deeppink";
twentytwo.style.border="solid deeppink";
twentyseven.style.background="red";
twentyseven.style.border="solid black";}
else if (twentysix.style.background=="red" && twentynine.style.background=="deeppink") {
twentysix.style.background="deeppink";
twentysix.style.border="solid deeppink";
twentynine.style.background="red";
twentynine.style.border="solid black";}
else if (twentysix.style.background=="red" && thirty.style.background=="deeppink") {
twentysix.style.background="deeppink";
twentysix.style.border="solid deeppink";
thirty.style.background="red";
thirty.style.border="solid black";}
else if (one.style.background=="red" && five.style.background=="deeppink") {
one.style.background="deeppink";
one.style.border="solid deeppink";
five.style.background="red";
five.style.border="solid black";}
else if (five.style.background=="red" && nine.style.background=="deeppink") {
five.style.background="deeppink";
five.style.border="solid deeppink";
nine.style.background="red";
nine.style.border="solid black";}
else if (five.style.background=="red" && ten.style.background=="deeppink") {
five.style.background="deeppink";
five.style.border="solid deeppink";
ten.style.background="red";
ten.style.border="solid black";}
else if (nine.style.background=="red" && thirteen.style.background=="deeppink") {
nine.style.background="deeppink";
nine.style.border="solid deeppink";
thirteen.style.background="red";
thirteen.style.border="solid black";}
else if (thirteen.style.background=="red" && seventeen.style.background=="deeppink") {
thirteen.style.background="deeppink";
thirteen.style.border="solid deeppink";
seventeen.style.background="red";
seventeen.style.border="solid black";}
else if (thirteen.style.background=="red" && eighteen.style.background=="deeppink") {
thirteen.style.background="deeppink";
thirteen.style.border="solid deeppink";
eighteen.style.background="red";
eighteen.style.border="solid black";}
else if (seventeen.style.background=="red" && twentyone.style.background=="deeppink") {
seventeen.style.background="deeppink";
seventeen.style.border="solid deeppink";
twentyone.style.background="red";
twentyone.style.border="solid black";}
else if (twentyone.style.background=="red" && twentyfive.style.background=="deeppink") {
twentyone.style.background="deeppink";
twentyone.style.border="solid deeppink";
twentyfive.style.background="red";
twentyfive.style.border="solid black";}
else if (twentyone.style.background=="red" && twentysix.style.background=="deeppink") {
twentyone.style.background="deeppink";
twentyone.style.border="solid deeppink";
twentysix.style.background="red";
twentysix.style.border="solid black";}
else if (twentyfive.style.background=="red" && twentynine.style.background=="deeppink") {
twentyfive.style.background="deeppink";
twentyfive.style.border="solid deeppink";
twentynine.style.background="red";
twentynine.style.border="solid black";}
break;}
break;}
break;}
break;}


switch(true) {
case one.style.background=="skyblue" && node2.innerHTML!="new":
one.style.background="deeppink";
one.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case two.style.background=="skyblue" && node2.innerHTML!="new":
two.style.background="deeppink";
two.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case three.style.background=="skyblue" && node2.innerHTML!="new":
three.style.background="deeppink";
three.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case four.style.background=="skyblue" && node2.innerHTML!="new":
four.style.background="deeppink";
four.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case five.style.background=="skyblue" && node2.innerHTML!="new":
five.style.background="deeppink";
five.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case six.style.background=="skyblue" && node2.innerHTML!="new":
six.style.background="deeppink";
six.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case seven.style.background=="skyblue" && node2.innerHTML!="new":
seven.style.background="deeppink";
seven.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case eight.style.background=="skyblue" && node2.innerHTML!="new":
eight.style.background="deeppink";
eight.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case nine.style.background=="skyblue" && node2.innerHTML!="new":
nine.style.background="deeppink";
nine.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case ten.style.background=="skyblue" && node2.innerHTML!="new":
ten.style.background="deeppink";
ten.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case eleven.style.background=="skyblue" && node2.innerHTML!="new":
eleven.style.background="deeppink";
eleven.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case twelve.style.background=="skyblue" && node2.innerHTML!="new":
twelve.style.background="deeppink";
twelve.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case thirteen.style.background=="skyblue" && node2.innerHTML!="new":
thirteen.style.background="deeppink";
thirteen.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case fourteen.style.background=="skyblue" && node2.innerHTML!="new":
fourteen.style.background="deeppink";
fourteen.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case fifteen.style.background=="skyblue" && node2.innerHTML!="new":
fifteen.style.background="deeppink";
fifteen.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case sixteen.style.background=="skyblue" && node2.innerHTML!="new":
sixteen.style.background="deeppink";
sixteen.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case seventeen.style.background=="skyblue" && node2.innerHTML!="new":
seventeen.style.background="deeppink";
seventeen.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case eighteen.style.background=="skyblue" && node2.innerHTML!="new":
eighteen.style.background="deeppink";
eighteen.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case nineteen.style.background=="skyblue" && node2.innerHTML!="new":
nineteen.style.background="deeppink";
nineteen.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case twenty.style.background=="skyblue" && node2.innerHTML!="new":
twenty.style.background="deeppink";
twenty.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case twentyone.style.background=="skyblue" && node2.innerHTML!="new":
twentyone.style.background="deeppink";
twentyone.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case twentytwo.style.background=="skyblue" && node2.innerHTML!="new":
twentytwo.style.background="deeppink";
twentytwo.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case twentythree.style.background=="skyblue" && node2.innerHTML!="new":
twentythree.style.background="deeppink";
twentythree.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case twentyfour.style.background=="skyblue" && node2.innerHTML!="new":
twentyfour.style.background="deeppink";
twentyfour.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case twentyfive.style.background=="skyblue" && node2.innerHTML!="new":
twentyfive.style.background="deeppink";
twentyfive.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case twentysix.style.background=="skyblue" && node2.innerHTML!="new":
twentysix.style.background="deeppink";
twentysiz.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case twentyseven.style.background=="skyblue" && node2.innerHTML!="new":
twentyseven.style.background="deeppink";
twentyseven.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case twentyeight.style.background=="skyblue" && node2.innerHTML!="new":
twentyeight.style.background="deeppink";
twentyeight.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case twentynine.style.background=="skyblue" && node2.innerHTML!="new":
twentynine.style.background="deeppink";
twentynine.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case thirty.style.background=="skyblue" && node2.innerHTML!="new":
thirty.style.background="deeppink";
thirty.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case thirtyone.style.background=="skyblue" && node2.innerHTML!="new":
thirtyone.style.background="deeppink";
thirtyone.style.border="solid deeppink";
node.innerHTML="move";
break;}
switch(true) {
case thirtytwo.style.background=="skyblue" && node2.innerHTML!="new":
thirtytwo.style.background="deeppink";
thirtytwo.style.border="solid deeppink";
node.innerHTML="move";
break;}}
  


function pressone() {
if (black.style.background==="green") {
black.style.background="black";}
else {black.style.background="green";}}


function reset() {
node2.innerHTML="";
node.innerHTML="move";
black.style.background="green";
document.getElementById("id1").style.background="red";
document.getElementById("id1").style.border="solid black";
document.getElementById("id2").style.background="red";
document.getElementById("id2").style.border="solid black";
document.getElementById("id3").style.background="red";
document.getElementById("id3").style.border="solid black";
document.getElementById("id4").style.background="red";
document.getElementById("id4").style.border="solid black";
document.getElementById("id5").style.background="red";
document.getElementById("id5").style.border="solid black";
document.getElementById("id6").style.background="red";
document.getElementById("id6").style.border="solid black";
document.getElementById("id7").style.background="red";
document.getElementById("id7").style.border="solid black";
document.getElementById("id8").style.background="red";
document.getElementById("id8").style.border="solid black";
document.getElementById("id9").style.background="red";
document.getElementById("id9").style.border="solid black";
document.getElementById("id10").style.background="red";
document.getElementById("id10").style.border="solid black";
document.getElementById("id11").style.background="red";
document.getElementById("id11").style.border="solid black";
document.getElementById("id12").style.background="red";
document.getElementById("id12").style.border="solid black";
document.getElementById("id21").style.background="black";
document.getElementById("id21").style.border="solid black";
document.getElementById("id22").style.background="black";
document.getElementById("id22").style.border="solid black";
document.getElementById("id23").style.background="black";
document.getElementById("id23").style.border="solid black";
document.getElementById("id24").style.background="black";
document.getElementById("id24").style.border="solid black";
document.getElementById("id25").style.background="black";
document.getElementById("id25").style.border="solid black";
document.getElementById("id26").style.background="black";
document.getElementById("id26").style.border="solid black";
document.getElementById("id27").style.background="black";
document.getElementById("id27").style.border="solid black";
document.getElementById("id28").style.background="black";
document.getElementById("id28").style.border="solid black";
document.getElementById("id29").style.background="black";
document.getElementById("id29").style.border="solid black";
document.getElementById("id30").style.background="black";
document.getElementById("id30").style.border="solid black";
document.getElementById("id31").style.background="black";
document.getElementById("id31").style.border="solid black";
document.getElementById("id32").style.background="black";
document.getElementById("id32").style.border="solid black";
document.getElementById("id13").style.background="deeppink";
document.getElementById("id13").style.border="deeppink";
document.getElementById("id14").style.background="deeppink";
document.getElementById("id14").style.border="deeppink";
document.getElementById("id15").style.background="deeppink";
document.getElementById("id15").style.border="deeppink";
document.getElementById("id16").style.background="deeppink";
document.getElementById("id16").style.border="deeppink";
document.getElementById("id17").style.background="deeppink";
document.getElementById("id17").style.border="deeppink";
document.getElementById("id18").style.background="deeppink";
document.getElementById("id18").style.border="deeppink";
document.getElementById("id19").style.background="deeppink";
document.getElementById("id19").style.border="deeppink";
document.getElementById("id20").style.background="deeppink";
document.getElementById("id20").style.border="deeppink";}