
let fname = "Emilija";
let surname = "Prašmutaitė";
let birthyear = 2000;
let year = 2022;

console.log(" Aš esu " + fname + " " + surname + " man yra " + (year - birthyear) + " metai "  );



console.log("2uzd");
let rndNum1 = Math.round(Math.random() * 4);
let rndNum2 = Math.round(Math.random() * 4);


console.log(rndNum1, rndNum2);
if (rndNum1 != 0 && rndNum2 != 0) {

    if (rndNum1 > rndNum2) {
        console.log("num1 daugiau uz num2");
        console.log(rndNum1 / rndNum2);
    } else {
        console.log("num2 daugiau uz num1");
        console.log(rndNum2 / rndNum1);
    }
}
//if(){}else{}

console.log("3uzd");
let rndNum3 = Math.round(Math.random() * 25);
let rndNum4 = Math.round(Math.random() * 25);
let rndNum5 = Math.round(Math.random() * 25);

console.log(rndNum3 , rndNum4 , rndNum5);

if ((rndNum3 < rndNum4 && rndNum4 < rndNum5) || (rndNum3 > rndNum4 && rndNum4 > rndNum5)) {
    console.log( "reikšmė = " + rndNum4);
}


 if (rndNum3 > rndNum4 > rndNum5) {
    console.log( rndNum4);

 }
 if ((rndNum3 > rndNum5 && rndNum5 > rndNum4) || (rndNum3 < rndNum5 && rndNum5 < rndNum4)) { 
        console.log(  "reikšmė = " + rndNum5) 
 }

 if ((rndNum5 > rndNum3 && rndNum3 > rndNum4) || (rndNum5 < rndNum3 && rndNum3 < rndNum4)) { 
    console.log(  "reikšmė = " + rndNum3) 
}

console.log("4uzd");
let d = Math.round (((Math.random()) * 9)+1);
console.log("pirma krastine = " + d);
let e = 1 + Math.round ((Math.random()) * (10-1);
console.log("antra krastine = " + e);
let f = 1 +  Math.round ((Math.random()) * 9);
console.log("trecia krastine = " + f);

if ((d + e) > f && (f + e) > d && (d + f) > e) {
    console.log("trikampis bus");
}else {
    console.log("trikampio nebus");
}

