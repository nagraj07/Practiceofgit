let arr = [ 1, 2, 3,  4, 5, 6, 7]
let remove = 3;
for( let i = 0; i < arr.length; i++){
    if(arr[i] == remove){
    arr.splice(i, 1);
    }
}
console.log(arr)