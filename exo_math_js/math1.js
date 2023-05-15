let variable1 = 3;
let variable2 = 10;
let variable3 = 16;
let variable4 = 14;

let addition = variable1 + variable2; //13
let soustraction = variable3 - variable4; //2 
let finalResult = addition * soustraction; //26
let evenOddResult = finalResult % 2;

document.getElementById('finalResult').textContent += finalResult;
document.getElementById('evenOddResult').textContent += evenOddResult;