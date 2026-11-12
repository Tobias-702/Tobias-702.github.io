

let penger = 100; 
let pris = 9;
let antall = 0;

while (penger >= pris) {
    penger = penger - pris;
    antall = antall + 1;
    
}
console.log(`jeg har kjøpt ${antall} brus`);
console.log(`jeg har ${penger} kroner igjen`);