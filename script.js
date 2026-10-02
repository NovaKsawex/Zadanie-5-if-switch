document.writeln("<p>");

// Zadanie 1
let a = parseFloat(prompt("Podaj liczbę a"));
let b = parseFloat(prompt("Podaj liczbę b"));

let wyn1 = 0;
if(b!=0) {
    wyn1 = a/b;
    document.writeln(`Wynik ${a}/${b} = ${wyn1}<br>`);
}
else {
    wyn1 = 0;
    document.writeln("Nie wolno dzielić przez 0<br>");
}

// Zadanie 2
let c = parseFloat(prompt("Podaj liczbę c"));
let d = parseFloat(prompt("Podaj liczbę d"));

let wyn2 = 0;
if (d!=0) {
    wyn2 = c/d;
    document.writeln(`Wynik ${a}/${b} + ${c}/${d} = ${wyn1 + wyn2}<br>`);
}
else {
    wyn2 = 0;
    document.writeln("Nie wolno dzielić przez 0<br>");
}

document.writeln("</p>");