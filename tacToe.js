const counter=document.getElementById("node");
const text=document.getElementById("words");
const btn=document.getElementById("btn1");
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const four=document.getElementById("four");
const five=document.getElementById("five");
const six=document.getElementById("six");
const seven=document.getElementById("seven");
const eight=document.getElementById("eight");
const nine=document.getElementById("nine");
const winnerTxt=document.getElementById("win");

function func(element) {
if (text.innerHTML==="Player X") {
element.style.background="teal";
counter.style.background="plum";
text.innerHTML="Player O";
element.innerHTML="X";
btn.style.background="hotpink";
btn.innerHTML="Turn Toggle";}
else if (text.innerHTML==="Player O") {
element.style.background="plum";
counter.style.background="teal";
text.innerHTML="Player X";
element.innerHTML="O";
btn.style.background="hotpink";
btn.innerHTML="Turn Toggle";}
else if (element.style.background==="hotpink") {}}

function sqaureOne() {
if (two.style.background==="teal" && three.style.background==="teal") {
winnerTxt.innerHTML="X Wins";
one.innerHTML="X";}
else if (five.style.background==="teal" && nine.style.background==="teal") {
winnerTxt.innerHTML="X Wins";
one.innerHTML="X";}
else if (four.style.background==="teal" && seven.style.background==="teal") {
winnerTxt.innerHTML="X Wins";
one.innerHTML="X";}
else if (two.style.background==="plum" && three.style.background==="plum") {
winnerTxt.innerHTML="O Wins";
one.innerHTML="O";}
else if (five.style.background==="plum" && nine.style.background==="plum") {
winnerTxt.innerHTML="O Wins";
one.innerHTML="O";}
else if (four.style.background==="plum" && seven.style.background==="plum") {
winnerTxt.innerHTML="O Wins";
one.innerHTML="O";}}

function sqaureTwo() {
if (five.style.background==="teal" && eight.style.background==="teal") {
winnerTxt.innerHTML="X Wins";
two.innerHTML="X";}
else if (one.style.background==="teal" && three.style.background==="teal") {
winnerTxt.innerHTML="X Wins";
two.innerHTML="X";}
else if (five.style.background==="plum" && eight.style.background==="plum") {
winnerTxt.innerHTML="O Wins";
two.innerHTML="O";}
else if (one.style.background==="plum" && three.style.background==="plum") {
winnerTxt.innerHTML="O Wins";
two.innerHTML="O";}}

function sqaureThree() {
if (one.style.background==="teal" && two.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (seven.style.background==="teal" && five.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (six.style.background==="teal" && nine.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (one.style.background==="plum" && two.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}
else if (five.style.background==="plum" && seven.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}
else if (nine.style.background==="plum" && six.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}}

function sqaureFour() {
if (one.style.background==="teal" && seven.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (five.style.background==="teal" && six.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (one.style.background==="plum" && seven.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}
else if (five.style.background==="plum" && six.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}}

function middle() {
if (one.style.background==="teal" && nine.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (three.style.background==="teal" && seven.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (four.style.background==="teal" && six.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (two.style.background==="teal" && eight.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
if (one.style.background==="plum" && nine.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}
else if (three.style.background==="plum" && seven.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}
else if (four.style.background==="plum" && six.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}
else if (two.style.background==="plum" && eight.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}}

function sqaureSix() {
if (three.style.background==="teal" && nine.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (five.style.background==="teal" && four.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (three.style.background==="plum" && nine.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}
else if (five.style.background==="plum" && four.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}}

function sqaureSeven() {
if (four.style.background==="teal" && one.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (five.style.background==="teal" && seven.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (eight.style.background==="teal" && nine.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (four.style.background==="plum" && one.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}
else if (five.style.background==="plum" && seven.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}
else if (eight.style.background==="plum" && nine.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}}

function sqaureEight() {
if (seven.style.background==="teal" && nine.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (five.style.background==="teal" && two.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (seven.style.background==="plum" && nine.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}
else if (five.style.background==="plum" && two.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}}

function sqaureNine() {
if (eight.style.background==="teal" && seven.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (five.style.background==="teal" && one.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (three.style.background==="teal" && four.style.background==="teal") {
winnerTxt.innerHTML="X Wins";}
else if (seven.style.background==="plum" && eight.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}
else if (five.style.background==="plum" && one.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}
else if (three.style.background==="plum" && four.style.background==="plum") {
winnerTxt.innerHTML="O Wins";}}

one.addEventListener("click", sqaureOne);
two.addEventListener("click", sqaureTwo);
three.addEventListener("click", sqaureThree);
four.addEventListener("click", sqaureFour);
five.addEventListener("click", middle);
six.addEventListener("click", sqaureSix);
seven.addEventListener("click", sqaureSeven);
eight.addEventListener("click", sqaureEight);
nine.addEventListener("click", sqaureNine);
