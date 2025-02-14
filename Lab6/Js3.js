// Q1: 
var arr = [22,53,64,53,6,17,28,33,17];
function remove_dup(arr){
    var new_arr =[];
    for(var i = 0; i < arr.length; i++) {
        if(new_arr.indexOf(arr[i]) === -1){  
            new_arr.push(arr[i]); 
        }
    } return new_arr ;
}
arr = remove_dup(arr);
console.log(arr);      // [22, 53, 64, 6,17, 28, 33]

// sorting:
function bubble_Sort(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) { 
                [arr[j], arr[j + 1]] =[arr[j + 1],arr[j]];
            }
        }
    }
    return arr;
}
des_arr = bubble_Sort(arr);
console.log(bubble_Sort(arr));   // [64,53,33 ,28,22, 17,6]


// Filter:
function filter_Large(arr) {
    for(var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > 50) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
console.log(filter_Large(arr)); // [ 33, 28, 22, 17, 6 ]
function filter_Large(arr) {
    return arr.filter(num => num <= 50);
}

// Min & Max:
function findMax(arr){
    var mx = arr[0]; 
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > mx) {
            mx = arr[i];
        }
    }
    return mx;
}

function findMin(arr) {
    var mn = arr[0]; 
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < mn) {
            mn = arr[i];
        }
    }
    return mn;
}


console.log(findMax(arr)); // 64
console.log(findMin(arr)); // 6

// Q2:
function sumAll(numbersArray) {
    var sum = eval(numbersArray.join("+"));
    var product = eval(numbersArray.join("*"));
    return { sum, product };
}

var res = sumAll(arr);
console.log("Sum:", res.sum);
console.log("Product:", res.product);
// Function header as follow  function sumAll():
function sumAll() {
    numbersArray = [22,53,64,53,6,17,28,33,17];
    var sum = eval(numbersArray.join("+"));
    var product = eval(numbersArray.join("*"));
    return { sum, product };
}

// Q3:
function Get_Mn(mn) {
    var mns = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var mn_idx = mn.getMonth(); 
    return mns[mn_idx];
}

var mn = new Date("2025-02-04"); 
console.log(Get_Mn(mn));   // February


