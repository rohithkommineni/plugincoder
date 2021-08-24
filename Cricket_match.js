// 1 0 1wd 0 3 2 0 0 2nb 0wkt 6 1 0 4
//  total runs scored
//  the number of wickets, 
// the extras, 
//the runs scored by each batsman, 
//the number of overs bowled
let string = "1 0 1wd 0 3 2 0 0 2nb 0wkt 6 1 0 4";
const list_score = string.split(" ");
let score = 0;
let wickets = 0;
let extras = 0 ;
let count = 0;
let runs = 0;
function isNumeric(n){
    return !isNaN(n);
}

for (i=0;i<list_score.length;i++){
    if (list_score[i].includes("wd") || list_score[i].includes("nb")){
        continue;
    }else{
        count = count + 1;
    }
}
const overs = count/6;

for (i=0;i<list_score.length;i++){
    if (isNumeric(list_score[i])){
        score = score + parseInt(list_score[i]);
        runs = runs + parseInt(list_score[i]);
    }else{
        let number = list_score[i].match(/\d+/g);
        index = list_score[i].indexOf(number);
        sub_string = list_score[i].substring(index+1,list_score[i].length);
        runs = runs + parseInt(number[index]);
        score = score + parseInt(number[index]);
        if (sub_string === "wd"){
            score = score + 1
            extras = extras + 1
        }
        else if (sub_string === "nb"){
            score = score + 1
            extras = extras + 1
        }
        else{
            wickets = wickets + 1
        }
    }
}
console.log(score);
console.log(wickets);
console.log(extras);
console.log(runs);
console.log(overs);