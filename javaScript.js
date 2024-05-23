const tile1=document.getElementById("tile1");
const tile2=document.getElementById("tile2");
const tile3=document.getElementById("tile3");
const tile4=document.getElementById("tile4");
const tile5=document.getElementById("tile5");
const tile6=document.getElementById("tile6");
const tile7=document.getElementById("tile7");
const tile8=document.getElementById("tile8");
const tile9=document.getElementById("tile9");
const tile10=document.getElementById("tile10");
const tile11=document.getElementById("tile11");
const tile12=document.getElementById("tile12");
const tile13=document.getElementById("tile13");
const tile14=document.getElementById("tile14");
const tile15=document.getElementById("tile15");
const tile16=document.getElementById("tile16");
const tile17=document.getElementById("tile17");
const tile18=document.getElementById("tile18");
const tile19=document.getElementById("tile19");
const tile20=document.getElementById("tile20");
const tile21=document.getElementById("tile21");
const tile22=document.getElementById("tile22");
const tile23=document.getElementById("tile23");
const tile24=document.getElementById("tile24");
const tile25=document.getElementById("tile25");
const tile26=document.getElementById("tile26");
const tile27=document.getElementById("tile27");
const tile28=document.getElementById("tile28");
const tile29=document.getElementById("tile29");
const tile30=document.getElementById("tile30");
const tile31=document.getElementById("tile31");
const tile32=document.getElementById("tile32");
const tile33=document.getElementById("tile33");
const tile34=document.getElementById("tile34");
const tile35=document.getElementById("tile35");
const tile36=document.getElementById("tile36");
const tile37=document.getElementById("tile37");
const tile38=document.getElementById("tile38");
const tile39=document.getElementById("tile39");
const tile40=document.getElementById("tile40");
const tile41=document.getElementById("tile41");
const tile42=document.getElementById("tile42");
const tile43=document.getElementById("tile43");
const tile44=document.getElementById("tile44");
const tile45=document.getElementById("tile45");
const tile46=document.getElementById("tile46");
const tile47=document.getElementById("tile47");
const tile48=document.getElementById("tile48");
const tile49=document.getElementById("tile49");
const tile50=document.getElementById("tile50");
const tile51=document.getElementById("tile51");
const tile52=document.getElementById("tile52");
const tile53=document.getElementById("tile53");
const tile54=document.getElementById("tile54");
const tile55=document.getElementById("tile55");
const tile56=document.getElementById("tile56");
const tile57=document.getElementById("tile57");
const tile58=document.getElementById("tile58");
const tile59=document.getElementById("tile59");
const tile60=document.getElementById("tile60");
const tile61=document.getElementById("tile61");
const tile62=document.getElementById("tile62");
const tile63=document.getElementById("tile63");
const tile64=document.getElementById("tile64");
const wpawn=document.getElementById("wpawn");
const wking=document.getElementById("wking");
const wqueen=document.getElementById("wqueen");
const wrook=document.getElementById("wrook");
const wknight=document.getElementById("wknight");
const wbishop=document.getElementById("wbishop");
const bpawn=document.getElementById("bpawn");
const bking=document.getElementById("bking");
const bqueen=document.getElementById("bqueen");
const brook=document.getElementById("brook");
const bknight=document.getElementById("bknight");
const bbishop=document.getElementById("bbishop");
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const four=document.getElementById("four");
const five=document.getElementById("five");
const six=document.getElementById("six");
const seven=document.getElementById("seven");
const eight=document.getElementById("eight");
const aone=document.getElementById("aone");
const btwo=document.getElementById("btwo");
const cthree=document.getElementById("cthree");
const dfour=document.getElementById("dfour");
const efive=document.getElementById("efive");
const fsix=document.getElementById("fsix");
const gseven=document.getElementById("gseven");
const height=document.getElementById("height");
const turn=document.getElementById("turnButton");

function boardSet() {
tile1.innerHTML="Black Rook";
tile2.innerHTML="Black Knight";
tile3.innerHTML="Black Bishop";
tile4.innerHTML="Black King";
tile5.innerHTML="Black Queen";
tile6.innerHTML="Black Bishop";
tile7.innerHTML="Black Knight";
tile8.innerHTML="Black Rook";
tile9.innerHTML="Black Pawn";
tile10.innerHTML="Black Pawn";
tile11.innerHTML="Black Pawn";
tile12.innerHTML="Black Pawn";
tile13.innerHTML="Black Pawn";
tile14.innerHTML="Black Pawn";
tile15.innerHTML="Black Pawn";
tile16.innerHTML="Black Pawn";
tile17.innerHTML="";
tile18.innerHTML="";
tile19.innerHTML="";
tile20.innerHTML="";
tile21.innerHTML="";
tile22.innerHTML="";
tile23.innerHTML="";
tile24.innerHTML="";
tile25.innerHTML="";
tile26.innerHTML="";
tile27.innerHTML="";
tile28.innerHTML="";
tile29.innerHTML="";
tile30.innerHTML="";
tile31.innerHTML="";
tile32.innerHTML="";
tile33.innerHTML="";
tile34.innerHTML="";
tile35.innerHTML="";
tile36.innerHTML="";
tile37.innerHTML="";
tile38.innerHTML="";
tile39.innerHTML="";
tile40.innerHTML="";
tile41.innerHTML="";
tile42.innerHTML="";
tile43.innerHTML="";
tile44.innerHTML="";
tile45.innerHTML="";
tile46.innerHTML="";
tile47.innerHTML="";
tile48.innerHTML="";
tile49.innerHTML="White Pawn";
tile50.innerHTML="White Pawn";
tile51.innerHTML="White Pawn";
tile52.innerHTML="White Pawn";
tile53.innerHTML="White Pawn";
tile54.innerHTML="White Pawn";
tile55.innerHTML="White Pawn";
tile56.innerHTML="White Pawn";
tile57.innerHTML="White Rook";
tile58.innerHTML="White Knight";
tile59.innerHTML="White Bishop";
tile60.innerHTML="White Queen";
tile61.innerHTML="White King";
tile62.innerHTML="White Bishop";
tile63.innerHTML="White Knight";
tile64.innerHTML="White Rook";}

function boardSetToggle() {
if (tile1.style.background==="plum") {
tile1.style.background="silver";
tile1.style.color="deeppink";
tile2.style.background="gold";
tile2.style.color="deeppink";
tile3.style.background="silver";
tile3.style.color="deeppink";
tile4.style.background="gold";
tile4.style.color="deeppink";
tile5.style.background="silver";
tile5.style.color="deeppink";
tile6.style.background="gold";
tile6.style.color="deeppink";
tile7.style.background="silver";
tile7.style.color="deeppink";
tile8.style.background="gold";
tile8.style.color="deeppink";
tile9.style.background="gold";
tile9.style.color="deeppink";
tile10.style.background="silver";
tile10.style.color="deeppink";
tile11.style.background="gold";
tile11.style.color="deeppink";
tile12.style.background="silver";
tile12.style.color="deeppink";
tile13.style.background="gold";
tile13.style.color="deeppink";
tile14.style.background="silver";
tile14.style.color="deeppink";
tile15.style.background="gold";
tile15.style.color="deeppink";
tile16.style.background="silver";
tile16.style.color="deeppink"
tile17.style.background="silver";
tile17.style.color="deeppink";
tile18.style.background="gold";
tile18.style.color="deeppink";
tile19.style.background="silver";
tile19.style.color="deeppink";
tile20.style.background="gold";
tile20.style.color="deeppink";
tile21.style.background="silver";
tile21.style.color="deeppink";
tile22.style.background="gold";
tile22.style.color="deeppink";
tile23.style.background="silver";
tile23.style.color="deeppink";
tile24.style.background="gold";
tile24.style.color="deeppink";
tile25.style.background="gold";
tile25.style.color="deeppink";
tile26.style.background="silver";
tile26.style.color="deeppink";
tile27.style.background="gold";
tile27.style.color="deeppink";
tile28.style.background="silver";
tile28.style.color="deeppink";
tile29.style.background="gold";
tile29.style.color="deeppink";
tile30.style.background="silver";
tile30.style.color="deeppink";
tile31.style.background="gold";
tile31.style.color="deeppink";
tile32.style.background="silver";
tile32.style.color="deeppink"
tile33.style.background="silver";
tile33.style.color="deeppink";
tile34.style.background="gold";
tile34.style.color="deeppink";
tile35.style.background="silver";
tile35.style.color="deeppink";
tile36.style.background="gold";
tile36.style.color="deeppink";
tile37.style.background="silver";
tile37.style.color="deeppink";
tile38.style.background="gold";
tile38.style.color="deeppink";
tile39.style.background="silver";
tile39.style.color="deeppink";
tile40.style.background="gold";
tile40.style.color="deeppink";
tile41.style.background="gold";
tile41.style.color="deeppink";
tile42.style.background="silver";
tile42.style.color="deeppink";
tile43.style.background="gold";
tile43.style.color="deeppink";
tile44.style.background="silver";
tile44.style.color="deeppink";
tile45.style.background="gold";
tile45.style.color="deeppink";
tile46.style.background="silver";
tile46.style.color="deeppink";
tile47.style.background="gold";
tile47.style.color="deeppink";
tile48.style.background="silver";
tile48.style.color="deeppink";
tile49.style.background="silver";
tile49.style.color="deeppink";
tile50.style.background="gold";
tile50.style.color="deeppink";
tile51.style.background="silver";
tile51.style.color="deeppink";
tile52.style.background="gold";
tile52.style.color="deeppink";
tile53.style.background="silver";
tile53.style.color="deeppink";
tile54.style.background="gold";
tile54.style.color="deeppink";
tile55.style.background="silver";
tile55.style.color="deeppink";
tile56.style.background="gold";
tile56.style.color="deeppink";
tile57.style.background="gold";
tile57.style.color="deeppink";
tile58.style.background="silver";
tile58.style.color="deeppink";
tile59.style.background="gold";
tile59.style.color="deeppink";
tile60.style.background="silver";
tile60.style.color="deeppink";
tile61.style.background="gold";
tile61.style.color="deeppink";
tile62.style.background="silver";
tile62.style.color="deeppink";
tile63.style.background="gold";
tile63.style.color="deeppink";
tile64.style.background="silver";
tile64.style.color="deeppink";}
else {tile1.style.background="plum";
tile2.style.background="darkcyan";
tile3.style.background="plum";
tile4.style.background="darkcyan";
tile5.style.background="plum";
tile6.style.background="darkcyan";
tile7.style.background="plum";
tile8.style.background="darkcyan";
tile9.style.background="darkcyan";
tile10.style.background="plum";
tile11.style.background="darkcyan";
tile12.style.background="plum";
tile13.style.background="darkcyan";
tile14.style.background="plum";
tile15.style.background="darkcyan";
tile16.style.background="plum";
tile17.style.background="plum";
tile18.style.background="darkcyan";
tile19.style.background="plum";
tile20.style.background="darkcyan";
tile21.style.background="plum";
tile22.style.background="darkcyan";
tile23.style.background="plum";
tile24.style.background="darkcyan";
tile25.style.background="darkcyan";
tile26.style.background="plum";
tile27.style.background="darkcyan";
tile28.style.background="plum";
tile29.style.background="darkcyan";
tile30.style.background="plum";
tile31.style.background="darkcyan";
tile32.style.background="plum";
tile33.style.background="plum";
tile34.style.background="darkcyan";
tile35.style.background="plum";
tile36.style.background="darkcyan";
tile37.style.background="plum";
tile38.style.background="darkcyan";
tile39.style.background="plum";
tile40.style.background="darkcyan";
tile41.style.background="darkcyan";
tile42.style.background="plum";
tile43.style.background="darkcyan";
tile44.style.background="plum";
tile45.style.background="darkcyan";
tile46.style.background="plum";
tile47.style.background="darkcyan";
tile48.style.background="plum";
tile49.style.background="plum";
tile50.style.background="darkcyan";
tile51.style.background="plum";
tile52.style.background="darkcyan";
tile53.style.background="plum";
tile54.style.background="darkcyan";
tile55.style.background="plum";
tile56.style.background="darkcyan";
tile57.style.background="darkcyan";
tile58.style.background="plum";
tile59.style.background="darkcyan";
tile60.style.background="plum";
tile61.style.background="darkcyan";
tile62.style.background="plum";
tile63.style.background="darkcyan";
tile64.style.background="plum";
tile1.style.color="black";
tile2.style.color="black";
tile3.style.color="black";
tile4.style.color="black";
tile5.style.color="black";
tile6.style.color="black";
tile7.style.color="black";
tile8.style.color="black";
tile9.style.color="black";
tile10.style.color="black";
tile11.style.color="black";
tile12.style.color="black";
tile13.style.color="black";
tile14.style.color="black";
tile15.style.color="black";
tile16.style.color="black";
tile17.style.color="black";
tile18.style.color="black";
tile19.style.color="black";
tile20.style.color="black";
tile21.style.color="black";
tile22.style.color="black";
tile23.style.color="black";
tile24.style.color="black";
tile25.style.color="black";
tile26.style.color="black";
tile27.style.color="black";
tile28.style.color="black";
tile29.style.color="black";
tile30.style.color="black";
tile31.style.color="black";
tile32.style.color="black";
tile33.style.color="black";
tile34.style.color="black";
tile35.style.color="black";
tile36.style.color="black";
tile37.style.color="black";
tile38.style.color="black";
tile39.style.color="black";
tile40.style.color="black";
tile41.style.color="black";
tile42.style.color="black";
tile43.style.color="black";
tile44.style.color="black";
tile45.style.color="black";
tile46.style.color="black";
tile47.style.color="black";
tile48.style.color="black";
tile49.style.color="black";
tile50.style.color="black";
tile51.style.color="black";
tile52.style.color="black";
tile53.style.color="black";
tile54.style.color="black";
tile55.style.color="black";
tile56.style.color="black";
tile57.style.color="black";
tile58.style.color="black";
tile59.style.color="black";
tile60.style.color="black";
tile61.style.color="black";
tile62.style.color="black";
tile63.style.color="black";
tile64.style.color="black";}}

function notation(element) {
if(element.style.background==="red") {
element.style.background="forestgreen";}
else if (one.style.background==="red") {
one.style.background="forestgreen";
element.style.background="red";}
else if (two.style.background==="red") {
two.style.background="forestgreen";
element.style.background="red";}
else if (three.style.background==="red") {
three.style.background="forestgreen";
element.style.background="red";}
else if (four.style.background==="red") {
four.style.background="forestgreen";
element.style.background="red";}
else if (five.style.background==="red") {
five.style.background="forestgreen";
element.style.background="red";}
else if (six.style.background==="red") {
six.style.background="forestgreen";
element.style.background="red";}
else if (seven.style.background==="red") {
seven.style.background="forestgreen";
element.style.background="red";}
else if (eight.style.background==="red") {
eight.style.background="forestgreen";
element.style.background="red";}
else if(element.style.background==="red") {
element.style.background="forestgreen";}
else if (aone.style.background==="red") {
aone.style.background="forestgreen";
element.style.background='red';}
else if (btwo.style.background==="red") {
btwo.style.background="forestgreen";
element.style.background='red';}
else if (cthree.style.background==="red") {
cthree.style.background="forestgreen";
element.style.background='red';}
else if (dfour.style.background==="red") {
dfour.style.background="forestgreen";
element.style.background='red';}
else if (efive.style.background==="red") {
efive.style.background="forestgreen";
element.style.background='red';}
else if (fsix.style.background==="red") {
fsix.style.background="forestgreen";
element.style.background='red';}
else if (gseven.style.background==="red") {
gseven.style.background="forestgreen";
element.style.background='red';}
else if (height.style.background==="red") {
height.style.background="forestgreen";
element.style.background='red';}
else {element.style.background="red";}}

function selectTile(element) {
if (wpawn.style.background==="black") {
wpawn.style.background="forestgreen";
element.innerHTML="White Pawn";
turn.innerHTML="Blacks Turn";}
else if (wking.style.background==="black") {
wking.style.background="forestgreen";
element.innerHTML="White King";
turn.innerHTML="Blacks Turn";}
else if (wqueen.style.background==="black") {
wqueen.style.background="forestgreen";
element.innerHTML="White Queen";
turn.innerHTML="Blacks Turn";}
else if (wrook.style.background==="black") {
wrook.style.background="forestgreen";
element.innerHTML="White Rook";
turn.innerHTML="Blacks Turn";}
else if (wknight.style.background==="black") {
wknight.style.background="forestgreen";
element.innerHTML="White Knight";
turn.innerHTML="Blacks Turn";}
else if (wbishop.style.background==="black") {
wbishop.style.background="forestgreen";
element.innerHTML="White Bishop";
turn.innerHTML="Blacks Turn";}
else if (bpawn.style.background==="black") {
bpawn.style.background="forestgreen";
element.innerHTML="Black Pawn";
turn.innerHTML="Whites Turn";}
else if (bking.style.background==="black") {
bking.style.background="forestgreen";
element.innerHTML="Black King";
turn.innerHTML="Whites Turn";}
else if (bqueen.style.background==="black") {
bqueen.style.background="forestgreen";
element.innerHTML="Black Queen";
turn.innerHTML="Whites Turn";}
else if (brook.style.background==="black") {
brook.style.background="forestgreen";
element.innerHTML="Black Rook";
turn.innerHTML="Whites Turn";}
else if (bknight.style.background==="black") {
bknight.style.background="forestgreen";
element.innerHTML="Black Knight";
turn.innerHTML="Whites Turn";}
else if (bbishop.style.background==="black") {
bbishop.style.background="forestgreen";
element.innerHTML="Black Bishop";
turn.innerHTML="Whites Turn";}
else if (element.innerHTML==="White Pawn") {
wpawn.style.background="black";
element.innerHTML="";}
else if (element.innerHTML==="White King") {
wking.style.background="black";
element.innerHTML="";}
else if (element.innerHTML==="White Queen") {
wqueen.style.background="black";
element.innerHTML="";}
else if (element.innerHTML==="White Rook") {
wrook.style.background="black";
element.innerHTML="";}
else if (element.innerHTML==="White Knight") {
wknight.style.background="black";
element.innerHTML="";}
else if (element.innerHTML==="White Bishop") {
wbishop.style.background="black";
element.innerHTML="";}
else if (element.innerHTML==="Black Pawn") {
bpawn.style.background="black";
element.innerHTML="";}
else if (element.innerHTML==="Black King") {
bking.style.background="black";
element.innerHTML="";}
else if (element.innerHTML==="Black Queen") {
bqueen.style.background="black";
element.innerHTML="";}
else if (element.innerHTML==="Black Rook") {
brook.style.background="black";
element.innerHTML="";}
else if (element.innerHTML==="Black Knight") {
bknight.style.background="black";
element.innerHTML="";}
else if (element.innerHTML==="Black Bishop") {
bbishop.style.background="black";
element.innerHTML="";}}

function graveYard(element) {
if (bpawn.style.background==="black") {
bpawn.style.background="forestgreen";
element.style.background="black";}
else if (wking.style.background==="black") {
wking.style.background="forestgreen";
element.style.background="black";}
else if (wqueen.style.background==="black") {
wqueen.style.background="forestgreen";
element.style.background="black";}
else if (wrook.style.background==="black") {
wrook.style.background="forestgreen";
element.style.background="black";}
else if (wknight.style.background==="black") {
wknight.style.background="forestgreen";
element.style.background="black";}
else if (wbishop.style.background==="black") {
wbishop.style.background="forestgreen";
element.style.background="black";}
else if (bpawn.style.background==="black") {
bpawn.style.background="forestgreen";
element.style.background="black";}
else if (bking.style.background==="black") {
bking.style.background="forestgreen";
element.style.background="black";}
else if (bqueen.style.background==="black") {
bqueen.style.background="forestgreen";
element.style.background="black";}
else if (brook.style.background==="black") {
brook.style.background="forestgreen";
element.style.background="black";}
else if (bbishop.style.background==="black") {
bbishop.style.background="forestgreen";
element.style.background="black";}
else {element.style.background="black";}}
