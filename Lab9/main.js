// Q1:
let arr = [33, 78 , 23 , 17 , 55 , 9 , 62];

let ascending = arr.sort((a, b) => a - b);
console.log("Ascending: ", ascending);             //Ascending: [ 9, 17, 23, 33 ,55 , 62 , 78 ]

let descending = arr.sort((a, b) => b - a);
console.log("Descending: ", descending);           //Descending: [ 78, 62, 55 , 33, 23, 17, 9 ]

let filtered = arr.filter(x => x > 50);            // [ 78, 62, 55 ]
console.log(filtered);

let max_num = Math.max(...arr);
let min_num = Math.min(...arr);
console.log(`Max: ${max_num}, Min: ${min_num}`);    // Max: 78, Min: 9


// Q2
function calculator(opr, ...nums) {
    let res;

    if(opr === "+"){
        res = nums.reduce((X, num) => X + num, 0);
    } else if (opr === "*") {
        res = nums.reduce((X, num) => X * num, 1);
    } else if (opr === "-") {
        res = nums.reduce((X, num) => X - num );
    } else if (opr === "/") {
        res = nums.reduce((X, num) => X / num );
    } else {
        console.log("Invalid operation");
        return;
    }
    return res ;
}

console.log(calculator("+",1,2,3,4));   // 10
console.log(calculator("*",1,2,3,4));   // 24


// Q3
const pro_Id = prompt("Enter project ID:");
const pro_Name = prompt("Enter project Name:");
const duration = prompt("Enter duration:");

const project = {
    pro_Id,
    pro_Name,
    duration,
};

document.getElementById("project_info").innerHTML = 
`Project ID: ${project.pro_Id} <br>
Name: ${project.pro_Name}<br>
Duration: ${project.duration}<br>`;