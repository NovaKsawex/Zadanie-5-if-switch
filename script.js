document.writeln("<p>");

// Zadanie 1
let a = parseFloat(prompt("Podaj liczbę a"));
let b = parseFloat(prompt("Podaj liczbę b"));

if(b!=0)
    document.writeln(`Wynik ${a}/${b} = ${a/b}`);
else
    document.writeln("Nie wolno dzielić przez 0");




document.writeln("</p>");