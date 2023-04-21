let arry = ["1","2","3","4","5"];
let arry2 = ["17","19","21"];
let arry3 = ["5","5","5"];


function puntaje(str) {
    let temp = 0;
    for (let i = 0; i < str.length; i++) {

        const elemento = Number(str[i]);

        if (elemento % 2 === 0) {
            temp += 2;
        }else{
            switch (elemento % 2 !== 0) {
                case 7:
                    temp += 0;
                    break;
            
                default:
                    temp += 1;
                    break;
            }
        }
        if (str === "5") {
            temp += 3;
        }
        
    }
    return temp;
}

console.log(puntaje(arry));
console.log(puntaje(arry2));
console.log(puntaje(arry3));