'use strict'

const pKm = document.getElementById('km');
const pAge = document.getElementById('age');
const pGen = document.getElementById('gen');
const pCanc = document.getElementById('canc');

console.log(pKm);
console.log(pAge);
console.log(pGen);

pGen.addEventListener('click', function () {
    console.log('button click');
    console.log(pKm);
    console.log(pAge);

});
pCanc.addEventListener('click', function () {
    pKm = 'null'
    pAge = 'null'

});


