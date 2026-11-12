function siHei() {
    console.log("hei!");
    console.log("hei!");

}



siHei();

function siHeiTil(navn){
console.log(`hei, ${navn}!`);

}

siHeiTil("Jo Bjørnar");


function hils(navn, alder){
    console.log(`hei, ${navn}! Du er ${alder} år gammel.`);

}

hils("Halvard", 899);

function summer(tall1, tall2){
    let sum = tall1 + tall2;
    return sum;
}

let svar = summer(3, 5);
console.log(svar);