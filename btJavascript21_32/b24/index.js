var a = [1,2,3,2,3,4,6,7,11,13,15,16]
var b = a.filter((number) => {
    if(number==1 || number==2) return false;
    else
    {
        for(var i = 2; i <number;i++)
            {
                if(number%i==0)
                    return false;
            }
    }
    return true;
})
console.log(b)