const btnReset=document.getElementById("btnReset");
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

function boardSet() {
tile1.setattribute("src", "brook.png");
tile2.setattribute("src", "bknight.png");
tile3.setattribute("src", "bbishop.png");
tile4.setattribute("src", "bqueen.png");
tile5.setattribute("src", "bking.png");
tile6.setattribute("src", "bbishop.png");
tile7.setattribute("src", "bknight.png");
tile8.setattribute("src", "brook.png");
tile9.setattribute("src", "bpawn.png");
tile10.setattribute("src", "bpawn.png");
tile11.setattribute("src", "bpawn.png");
tile12.setattribute("src", "bpawn.png");
tile13.setattribute("src", "bpawn.png");
tile14.setattribute("src", "bpawn.png");
tile15.setattribute("src", "bpawn.png");
tile16.setattribute("src", "bpawn.png");
tile17.setattribute(src, blank.png);
tile18.setattribute(src, blank.png);
tile19.setattribute(src, blank.png);
tile20.setattribute(src, blank.png);
tile21.setattribute(src, blank.png);
tile22.setattribute(src, blank.png);
tile23.setattribute(src, blank.png);
tile24.setattribute(src, blank.png);
tile25.setattribute(src, blank.png);
tile26.setattribute(src, blank.png);
tile27.setattribute(src, blank.png);
tile28.setattribute(src, blank.png);
tile29.setattribute(src, blank.png);
tile30.setattribute(src, blank.png);
tile31.setattribute(src, blank.png);
tile32.setattribute(src, blank.png);
tile33.setattribute(src, blank.png);
tile34.setattribute(src, blank.png);
tile35.setattribute(src, blank.png);
tile36.setattribute(src, blank.png);
tile37.setattribute(src, blank.png);
tile38.setattribute(src, blank.png);
tile39.setattribute(src, blank.png);
tile40.setattribute(src, blank.png);
tile41.setattribute(src, blank.png);
tile42.setattribute(src, blank.png);
tile43.setattribute(src, blank.png);
tile44.setattribute(src, blank.png);
tile45.setattribute(src, blank.png);
tile46.setattribute(src, blank.png);
tile47.setattribute(src, blank.png);
tile48.setattribute(src, blank.png);
tile49.setattribute(src, wpawn.png);
tile50.setattribute(src, wpawn.png);
tile51.setattribute(src, wpawn.png);
tile52.setattribute(src, wpawn.png);
tile53.setattribute(src, wpawn.png);
tile54.setattribute(src, wpawn.png);
tile55.setattribute(src, wpawn.png);
tile56.setattribute(src, wpawn.png);
tile57.setattribute(src, wrook.png);
tile58.setattribute(src, wknight.png);
tile59.setattribute(src, wbishop.png);
tile60.setattribute(src, wking.png);
tile61.setattribute(src, wqueen.png);
tile62.setattribute(src, wbishop.png);
tile63.setattribute(src, wknight.png);
tile64.setattribute(src, wrook.png);}

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
else {element.style.background="red";}}

function notation2(element) {
if(element.style.background==="red") {
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
if (element.innerHTML==="White Pawn") {
wpawn.style.background="black";
element.innerHTML="";}
else if (element.style.background==="darkcyan" && wpawn.style.background==="black") {
element.setattribute(src, wpawn.png);
wpawn.style.background="forestgreen";}
else if (element.style.background==="darkcyan" && wking.style.background==="black") {
element.setattribute(src, wking.png);
wking.style.background="forestgreen";}
else if (element.style.background==="darkcyan" && wqueen.style.background==="black") {
element.setattribute(src, wqueen.png);
wqueen.style.background="forestgreen";}
else if (element.style.background==="darkcyan" && wrook.style.background==="black") {
element.setattribute(src, wrook.png);
wrook.style.background="forestgreen";}
else if (element.style.background==="darkcyan" && wknight.style.background==="black") {
element.setattribute(src, wknight.png);
wknight.style.background="forestgreen";}
else if (element.style.background==="darkcyan" && wbishop.style.background==="black") {
element.setattribute(src, wbishop.png);
wbishop.style.background="forestgreen";}
else if (element.style.background==="darkcyan" && bpawn.style.background==="black") {
element.setattribute(src, bpawn.png);
bpawn.style.background="forestgreen";}
else if (element.style.background==="darkcyan" && bking.style.background==="black") {
element.setattribute(src, bking.png);
bking.style.background="forestgreen";}
else if (element.style.background==="darkcyan" && bqueen.style.background==="black") {
element.setattribute(src, bqueen.png);
bqueen.style.background="forestgreen";}
else if (element.style.background==="darkcyan" && brook.style.background==="black") {
elementbrook.setattribute(src, brook.png);}
else if (element.style.background==="darkcyan" && bknight.style.background==="black") {
element.setattribute(src, bknight.png);
bknight.style.background="forestgreen";}
else if (element.style.background==="darkcyan" && bbishop.style.background==="black") {
element.setattribute(src, bbishop.png);
bbishop.style.background="forestgreen";}
else if (element.style.background==="darkcyan") {
element.setattribute(src, blank.png);}
else if (element.style.background==="plum" && wpawn.style.background==="black") {
element.setattribute(src, wpawn.png);
wpawn.style.background="forestgreen";}
else if (element.style.background==="plum" && wking.style.background==="black") {
element.setattribute(src, wking.png);
wking.style.background="forestgreen";}
else if (element.style.background==="plum" && wqueen.style.background==="black") {
element.setattribute(src, wqueen.png);
wqueen.style.background="forestgreen";}
else if (element.style.background==="plum" && wrook.style.background==="black") {
element.setattribute(src, wrook.png);
wrook.style.background="forestgreen";}
else if (element.style.background==="plum" && wknight.style.background==="black") {
element.setattribute(src, wknight.png);
wknight.style.background="forestgreen";}
else if (element.style.background==="plum" && wbishop.style.background==="black") {
element.setattribute(src, wbishop.png);
wbishop.style.background="forestgreen";}
else if (element.style.background==="plum" && bpawn.style.background==="black") {
element.setattribute(src, bpawn.png);
bpawn.style.background="forestgreen";}
else if (element.style.background==="plum" && bking.style.background==="black") {
element.setattribute(src, bking.png);
bking.style.background="forestgreen";}
else if (element.style.background==="plum" && bqueen.style.background==="black") {
element.setattribute(src, bqueen.png);
bqueen.style.background="forestgreen";}
else if (element.style.background==="plum" && brook.style.background==="black") {
elementbrook.setattribute(src, brook.png);}
else if (element.style.background==="plum" && bknight.style.background==="black") {
element.setattribute(src, bknight.png);
bknight.style.background="forestgreen";}
else if (element.style.background==="plum" && bbishop.style.background==="black") {
element.setattribute(src, bbishop.png);
bbishop.style.background="forestgreen";}
else if (element.style.background==="plum") {
element.setattribute(src, blank.png);}}

function funcwpawn() {
if (wking.style.background==="black") {
wpawn.style.background="black";
wking.style.background="forestgreen";}
else if (wqueen.style.background==="black") {
wpawn.style.background="black";
wqueen.style.background="forestgreen";}
else if (wrook.style.background==="black") {
wpawn.style.background="black";
wrook.style.background="forestgreen";}
else if (wknight.style.background==="black") {
wpawn.style.background="black";
wknight.style.background="forestgreen";}
else if (wbishop.style.background==="black") {
wpawn.style.background="black";
wbishop.style.background="forestgreen";}
else if (wpawn.style.background==="forestgreen") {
wpawn.style.background="black";
bpawn.style.background="forestgreen";
bking.style.background="forestgreen";
bqueen.style.background="forestgreen";
brook.style.background="forestgreen";
bknight.style.background="forestgreen";
bbishop.style.background="forestgreen";}
else {wpawn.style.background="forestgreen";}}

function funcwking() {
if (wpawn.style.background==="black") {
wpawn.style.background="forestgreen";
wking.style.background="black";}
else if (wqueen.style.background==="black") {
wking.style.background="black";
wqueen.style.background="forestgreen";}
else if (wrook.style.background==="black") {
wking.style.background="black";
wrook.style.background="forestgreen";}
else if (wknight.style.background==="black") {
wking.style.background="black";
wknight.style.background="forestgreen";}
else if (wbishop.style.background==="black") {
wking.style.background="black";
wbishop.style.background="forestgreen";}
else if (wking.style.background==="forestgreen") {
wking.style.background="black";
bpawn.style.background="forestgreen";
bking.style.background="forestgreen";
bqueen.style.background="forestgreen";
brook.style.background="forestgreen";
bknight.style.background="forestgreen";
bbishop.style.background="forestgreen";}
else {wking.style.background="forestgreen";}}

function funcwqueen() {
if (wpawn.style.background==="black") {
wpawn.style.background="forestgreen";
wqueen.style.background="black";}
else if (wking.style.background==="black") {
wking.style.background="forestgreen";
wqueen.style.background="black";}
else if (wrook.style.background==="black") {
wqueen.style.background="black";
wrook.style.background="forestgreen";}
else if (wknight.style.background==="black") {
wqueen.style.background="black";
wknight.style.background="forestgreen";}
else if (wbishop.style.background==="black") {
wqueen.style.background="black";
wbishop.style.background="forestgreen";}
else if (wqueen.style.background==="forestgreen") {
wqueen.style.background="black";
bpawn.style.background="forestgreen";
bking.style.background="forestgreen";
bqueen.style.background="forestgreen";
brook.style.background="forestgreen";
bknight.style.background="forestgreen";
bbishop.style.background="forestgreen";}
else {wqueen.style.background="forestgreen";}}

function funcwrook() {
if (wpawn.style.background==="black") {
wpawn.style.background="forestgreen";
wrook.style.background="black";}
else if (wking.style.background==="black") {
wking.style.background="forestgreen";
wrook.style.background="black";}
else if (wqueen.style.background==="black") {
wqueen.style.background="forestgreen";
wrook.style.background="black";}
else if (wknight.style.background==="black") {
wrook.style.background="black";
wknight.style.background="forestgreen";}
else if (wbishop.style.background==="black") {
wrook.style.background="black";
wbishop.style.background="forestgreen";}
else if (wrook.style.background==="forestgreen") {
wrook.style.background="black";
bpawn.style.background="forestgreen";
bking.style.background="forestgreen";
bqueen.style.background="forestgreen";
brook.style.background="forestgreen";
bknight.style.background="forestgreen";
bbishop.style.background="forestgreen";}
else {wrook.style.background="forestgreen";}}

function funcwknight() {
if (wpawn.style.background==="black") {
wpawn.style.background="forestgreen";
wknight.style.background="black";}
else if (wking.style.background==="black") {
wking.style.background="forestgreen";
wknight.style.background="black";}
else if (wqueen.style.background==="black") {
wqueen.style.background="forestgreen";
wknight.style.background="black";}
else if (wrook.style.background==="black") {
wrook.style.background="forestgreen";
wknight.style.background="black";}
else if (wbishop.style.background==="black") {
wbishop.style.background="forestgreen";
wknight.style.background="black";}
else if (wknight.style.background==="forestgreen") {
wknight.style.background="black";
bpawn.style.background="forestgreen";
bking.style.background="forestgreen";
bqueen.style.background="forestgreen";
brook.style.background="forestgreen";
bknight.style.background="forestgreen";
bbishop.style.background="forestgreen";}
else {wknight.style.background="forestgreen";}}

function funcwbishop() {
if (wpawn.style.background==="black") {
wpawn.style.background="forestgreen";
wbishop.style.background="black";}
else if (wking.style.background==="black") {
wking.style.background="forestgreen";
wbishop.style.background="black";}
else if (wqueen.style.background==="black") {
wqueen.style.background="forestgreen";
wbishop.style.background="black";}
else if (wrook.style.background==="black") {
wrook.style.background="forestgreen";
wbishop.style.background="black";}
else if (wknight.style.background==="black") {
wknight.style.background="forestgreen";
wbishop.style.background="black";}
else if (wbishop.style.background==="forestgreen") {
wbishop.style.background="black";
bpawn.style.background="forestgreen";
bking.style.background="forestgreen";
bqueen.style.background="forestgreen";
brook.style.background="forestgreen";
bknight.style.background="forestgreen";
bbishop.style.background="forestgreen";}
else {wbishop.style.background="forestgreen";}}

function funcbpawn() {
if (bking.style.background==="black") {
bpawn.style.background="black";
bking.style.background="forestgreen";}
else if (bqueen.style.background==="black") {
bpawn.style.background="black";
bqueen.style.background="forestgreen";}
else if (brook.style.background==="black") {
bpawn.style.background="black";
brook.style.background="forestgreen";}
else if (bknight.style.background==="black") {
bpawn.style.background="black";
bknight.style.background="forestgreen";}
else if (bbishop.style.background==="black") {
bpawn.style.background="black";
bbishop.style.background="forestgreen";}
else if (bpawn.style.background==="forestgreen") {
bpawn.style.background="black";
wpawn.style.background="forestgreen";
wking.style.background="forestgreen";
wqueen.style.background="forestgreen";
wrook.style.background="forestgreen";
wknight.style.background="forestgreen";
wbishop.style.background="forestgreen";}
else {bpawn.style.background="forestgreen";}}

function funcbking() {
if (bpawn.style.background==="black") {
bking.style.background="black";
bpawn.style.background="forestgreen";}
else if (bqueen.style.background==="black") {
bking.style.background="black";
bqueen.style.background="forestgreen";}
else if (brook.style.background==="black") {
bking.style.background="black";
brook.style.background="forestgreen";}
else if (bknight.style.background==="black") {
bking.style.background="black";
bknight.style.background="forestgreen";}
else if (bbishop.style.background==="black") {
bking.style.background="black";
bbishop.style.background="forestgreen";}
else if (bking.style.background==="forestgreen") {
bking.style.background="black";
wpawn.style.background="forestgreen";
wking.style.background="forestgreen";
wqueen.style.background="forestgreen";
wrook.style.background="forestgreen";
wknight.style.background="forestgreen";
wbishop.style.background="forestgreen";}
else {bking.style.background="forestgreen";}}

function funcbqueen() {
if (bpawn.style.background==="black") {
bqueen.style.background="black";
bpawn.style.background="forestgreen";}
else if (bking.style.background==="black") {
bking.style.background="forestgreen";
bqueen.style.background="black";}
else if (brook.style.background==="black") {
bqueen.style.background="black";
brook.style.background="forestgreen";}
else if (bknight.style.background==="black") {
bqueen.style.background="black";
bknight.style.background="forestgreen";}
else if (bbishop.style.background==="black") {
bqueen.style.background="black";
bbishop.style.background="forestgreen";}
else if (bqueen.style.background==="forestgreen") {
bqueen.style.background="black";
wpawn.style.background="forestgreen";
wking.style.background="forestgreen";
wqueen.style.background="forestgreen";
wrook.style.background="forestgreen";
wknight.style.background="forestgreen";
wbishop.style.background="forestgreen";}
else {bqueen.style.background="forestgreen";}}

function funcbrook() {
if (bpawn.style.background==="black") {
bpawn.style.background="forestgreen";
brook.style.background="black";}
else if (bking.style.background==="black") {
bking.style.background="forestgreen";
brook.style.background="black";}
else if (bqueen.style.background==="black") {
bqueen.style.background="forestgreen";
brook.style.background="black";}
else if (bknight.style.background==="black") {
brook.style.background="black";
bknight.style.background="forestgreen";}
else if (bbishop.style.background==="black") {
brook.style.background="black";
bbishop.style.background="forestgreen";}
else if (brook.style.background==="forestgreen") {
brook.style.background="black";
wpawn.style.background="forestgreen";
wking.style.background="forestgreen";
wqueen.style.background="forestgreen";
wrook.style.background="forestgreen";
wknight.style.background="forestgreen";
wbishop.style.background="forestgreen";}
else {brook.style.background="forestgreen";}}

function funcbknight() {
if (bpawn.style.background==="black") {
bpawn.style.background="forestgreen";
bknight.style.background="black";}
else if (bking.style.background==="black") {
bking.style.background="forestgreen";
bknight.style.background="black";}
else if (bqueen.style.background==="black") {
bqueen.style.background="forestgreen";
bknight.style.background="black";}
else if (brook.style.background==="black") {
bknight.style.background="black";
brook.style.background="forestgreen";}
else if (bbishop.style.background==="black") {
bknight.style.background="black";
bbishop.style.background="forestgreen";}
else if (bknight.style.background==="forestgreen") {
bknight.style.background="black";
wpawn.style.background="forestgreen";
wking.style.background="forestgreen";
wqueen.style.background="forestgreen";
wrook.style.background="forestgreen";
wknight.style.background="forestgreen";
wbishop.style.background="forestgreen";}
else {bknight.style.background="forestgreen";}}

function funcbbishop() {
if (bpawn.style.background==="black") {
bpawn.style.background="forestgreen";
bbishop.style.background="black";}
else if (bking.style.background==="black") {
bking.style.background="forestgreen";
bbishop.style.background="black";}
else if (bqueen.style.background==="black") {
bqueen.style.background="forestgreen";
bbishop.style.background="black";}
else if (brook.style.background==="black") {
brook.style.background="forestgreen";
bbishop.style.background="black";}
else if (bknight.style.background==="black") {
bknight.style.background="forestgreen";
bbishop.style.background="black";}
else if (bbishop.style.background==="forestgreen") {
bbishop.style.background="black";
wpawn.style.background="forestgreen";
wking.style.background="forestgreen";
wqueen.style.background="forestgreen";
wrook.style.background="forestgreen";
wknight.style.background="forestgreen";
wbishop.style.background="forestgreen";}
else {bbishop.style.background="forestgreen";}}

btnReset.addEventListener("click", boardSet);


