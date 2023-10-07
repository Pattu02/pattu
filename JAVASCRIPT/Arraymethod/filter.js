let arr=[1,2,2,3,4,5];

function del(a){
    function delet(ele){
        return ele==a;
    }
   arr=arr.filter(delet)
}
del(2)
console.log(arr)