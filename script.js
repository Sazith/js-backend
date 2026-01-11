let arr = [1,2,3,4,5]


//For Each
arr.forEach((x) => console.log(x + "Hello"));
// 1Hello
// 4 2Hello
// 4 3Hello
// 4 4Hello
// 5 5Hello


//map
let arrMap = [10,11,12,13,14,15]
let newArrMap = arrMap.map( (val) => {
    console.log(val); 
    // return 13 // [13, 13, 13, 13, 13, 13]
     return val+5  // [15, 16, 17, 18, 19, 20]
    
})
console.log('newArrMap',newArrMap); // [15, 16, 17, 18, 19, 20]


//filter
let arrFilter = arr.filter(function(val){
    if(val>3) {return true;}
    else return false;
})
console.log('arrFilter',arrFilter); // [4, 5]


// find 
let arrFind = arr.find(function(val){
    if(val=== 2) return val
})
console.log('arrFind',arrFind); // arrFind 2

// indexOf
console.log(arr.indexOf(12))// -1
console.log(arr.indexOf(2))// 1
console.log(arr.indexOf(4))// 3

// async js 
async function abcs() {
    var blob = await fetch(`https://randomuser.me/api/`)
    var ans = await blob.json()
    console.log(ans);
    
}
abcs();