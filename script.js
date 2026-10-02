document.writeln("<p>");

// Zadanie 1
let a = parseFloat(prompt("Podaj liczbę a"));
let b = parseFloat(prompt("Podaj liczbę b"));

document.writeln(`a = ${a}<br>`);
document.writeln(`b = ${b}<br>`);

let wyn1 = 0;
if(b!=0) {
    wyn1 = a/b;
    document.writeln(`Wynik a/b = ${wyn1}<br>`);
}
else {
    document.writeln(`a/b: Nie wolno dzielić przez 0<br>`);
}

// Zadanie 2
let c = parseFloat(prompt("Podaj liczbę c"));
let d = parseFloat(prompt("Podaj liczbę d"));

document.writeln(`c = ${c}<br>`);
document.writeln(`d = ${d}<br>`);

let wyn2 = 0;
if (d!=0) {
    wyn2 = c/d;
    document.writeln(`Wynik a/b + c/d = ${wyn1 + wyn2}<br>`);
}
else {
    document.writeln(`c/d: Nie wolno dzielić przez 0<br>`);
}

document.writeln("</p>");

// Zadanie 3
let a2 = a + 6;
let b2 = b - 4;

let wyn3 = 0;
if (b2 != 0) {
    wyn3 = a2/b2;
    document.writeln(`Wynik (a + 6) / (b - 4) = ${wyn3}<br>`);
} else {
    document.writeln(`(a + 6)/(b - 4): Nie wolno dzielić przez 0<br>`);
}

// Zadanie 4
if (a == 0) {
    document.writeln(`${a} to zero, ani parzysta ani nie parzysta`);
} else if (a % 2 == 0) {
    document.writeln(`${a} to liczba parzysta`);
} else {
    document.writeln(`${a} to liczba nie parzysta`);
}
