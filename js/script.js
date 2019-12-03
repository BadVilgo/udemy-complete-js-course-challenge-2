//case - zwróć średnią z wyników Johna i Mike'a, powiedz która osoba ma średnio lepszy wynik

//case2 - dodać Mary

let John = [89, 120, 103];
let Mike = [116, 94, 123];
let Mary = [97, 134, 105];

let sumJ = John.reduce((previous, current) => current += previous); // użycie metody z reduce
let avgJ = sumJ / John.length;

let total=0; // użycie for in
for(let i in Mike) { 
    total += Mike[i]; 
    avgM = total/Mike.length;
}

let total2=0; // użycie for in
for(let x in Mary) { 
    total2 += Mary[x]; 
    avgMr = total2/Mary.length;
}

if (avgJ>avgM && avgJ>avgMr) {
    document.write('John has best average score');
}  
else if (avgJ<avgM && avgM>avgMr) {
    document.write('Mike has best average score');
}  
else if (avgJ<avgMr && avgM<avgMr) {
    document.write('Mary has best average score');
}   
else{
    document.write('Ther is a draw!');
}

document.write('<br><br>John '+avgJ+'<br>Mike '+avgM+'<br>Mary '+avgMr);



