/*  JavaScript Lab2 */
// Q1:
var tx = 'the quick brown fox' , res="" + tx[0].toUpperCase();
for(var i = 1; i < tx.length; i++) {
    if(tx[i] === ' ' ){
       res += ' '+tx[i+1].toUpperCase();
       i++;
    }else{
        res += tx[i];
    }
}
console.log(res); // The Quick Brown Fox

// Q2:
var tx = ('javascript').split('');
function bubble_Sort(tx) {
    for(var i = 0; i < tx.length; i++) {
        for(var j = 0; j < tx.length - 1 - i; j++) {
            if(tx[j] > tx[j + 1]) { 
                [tx[j],tx[j + 1]] =[tx[j + 1],tx[j]];
            }
        }
    }
    return tx;
}
var sort_tx = bubble_Sort(tx);
console.log(sort_tx.join('')); // aacijprstv

// Q3:
var tx = 'Web Development Tutorial';
var mx_cnt =0, crt = 0;
for(var i = 1; i < tx.length; i++) {
    if(tx[i] != ' ' ){
        crt ++ ;
    }else{
        mx_cnt =Math.max(mx_cnt,crt);
        crt = 0 ;
    }
}console.log(mx_cnt); // 11


// Q4:
var tx = 'Egypt',res="" ;
for(var i = 0; i < tx.length; i++) {
    if(tx[i] === tx[i].toLowerCase()){
        res+= tx[i].toUpperCase();
    }else{
        res+= tx[i].toLowerCase();
    }
}console.log(res); // eGYPT


// Q5:
var tx = "thequickbrownfoxjumpsoverthelazydog", res= "";
for(var i = 0; i < tx.length; i++) {
    if(res.indexOf(tx[i]) === -1){  
        res += tx[i];  
    }
}console.log(res) ;  //"thequickbrownfxjmpsvlazydg"


// Q6:
var res = Math.floor(Math.random()*10) ;
console.log(res) ; 

// Q7:
var R = 5 ;
var A = Math.PI * (R * R);
console.log(A) ;  // 78.53981633974483



