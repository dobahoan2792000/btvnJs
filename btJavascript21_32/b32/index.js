var a = [1,3,6,9,11,12,20]
function insertArr(arr,k)
{
    var b = arr.find((number) => {
        if(number>k)
            return true;
        return false;
    })
    arr.splice(arr.indexOf(b),0,k);
}
insertArr(a,2);
console.log(a)