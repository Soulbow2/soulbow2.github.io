const black=document.getElementById("black");
const red=document.getElementById("red");
const purple=document.getElementById("purple");
const orange= document.getElementById("orange");

function tile(element) {
if (document.getElementById("id1").style.background=="black") {element.style.background="orange";}
else if (document.getElementById("id2").style.background=="black") {element.style.background="orange";}
else if (document.getElementById("id3").style.background=="black") {element.style.background="orange";}
else if (document.getElementById("id4").style.background=="black") {element.style.background="orange";}
else if (document.getElementById("id29").style.background=="red") {element.style.background="purple";}
else if (document.getElementById("id30").style.background=="red") {element.style.background="purple"; }
else if (document.getElementById("id31").style.background=="red") {element.style.background="purple";}
else if (document.getElementById("id32").style.background=="red") {element.style.background="purple";}
else if (element.style.background==="orange" && purple.style.background==="purple") {
element.style.background="deeppink";
element.style.border="solid deeppink";}
else if (element.style.background==="purple" && orange.style.background==="orange") {
element.style.background="deeppink";
element.style.border="solid deeppink";}
else if (element.style.background==="orange" && red.style.background==="red") {
element.style.background="deeppink";
element.style.border="solid deeppink";}
else if (element.style.background==="purple" && black.style.background==="black") {
element.style.background="deeppink";
element.style.border="solid deeppink";}
else if (element.style.background === "deeppink" && orange.style.background==="orange") {
element.style.background="orange";
element.style.border="solid black";
orange.style.background="green";}
else if (element.style.background === "deeppink" && purple.style.background==="purple") {
element.style.background="purple";
element.style.border="solid black";
purple.style.background="green";}
else if (element.style.background=== "deeppink" && black.style.background==="black") {
element.style.background="black";
element.style.border="solid black";
black.style.background="green";}
else if (element.style.background=== "deeppink" && red.style.background==="red") {
element.style.background="red";
element.style.border="solid black";
red.style.background="green";}
else if (element.style.background=== "red" && orange.style.background === "orange") {
element.style.background="deeppink";
element.style.border="solid deeppink";}
else if (element.style.background=== "black" && purple.style.background === "purple") {
element.style.background="deeppink";
element.style.border="solid deeppink";}
else if (element.style.background=== "black" && red.style.background==="red") {
element.style.background="deeppink";
element.style.border="solid deeppink";}
else if (element.style.background=== "red" && black.style.background==="black") {
element.style.background="deeppink";
element.style.border="solid deeppink";}
else if (element.style.background=== "black" && orange.style.background==="orange") {
element.style.background="deeppink";
element.style.border="solid deeppink";}
else if (element.style.background=== "red" && purple.style.background==="purple") {
element.style.background="deeppink";
element.style.border="solid deeppink";}
else if (element.style.background=== "orange" && black.style.background==="black") {
element.style.background="deeppink";
element.style.border="solid deeppink";}
else if (element.style.background=== "purple" && red.style.background==="red") {
element.style.background="deeppink";
element.style.border="solid deeppink";}
else if (element.style.background=== "black") {
element.style.background="deeppink";
element.style.border="solid deeppink";
black.style.background="black";}
else if (element.style.background=== "red") {
element.style.background="deeppink";
element.style.border="solid deeppink";
red.style.background="red";}
else if (element.style.background==="purple") {
element.style.background="deeppink";
element.style.border="solid deeppink";
purple.style.background="purple";}
else if (element.style.background==="orange") {
element.style.background="deeppink";
element.style.border="solid deeppink";
orange.style.background="orange";}}

function one() {
if (black.style.background==="green") {
black.style.background="black";}
else {black.style.background="green";}}

function two() {
if (red.style.background==="green") {
red.style.background="red";}
else {red.style.background="green";}}

function three() {
if (orange.style.background==="green") {
orange.style.background="orange";}
else {orange.style.background="green";}}

function four() {
if (purple.style.background==="green") {
purple.style.background="purple";}
else {purple.style.background="green";}}

function reset() {
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
