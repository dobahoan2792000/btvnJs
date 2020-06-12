    var a = [1,2,3,4,6,7]
    var x = prompt("Enter a number");
    x = Number(x);
    function check(number ,a)
    {
        var minNumber = Math.abs(a[0]-number);
        for(var i = 0 ; i<a.length;i++)
            {
                if(Math.abs(a[i]-number)<minNumber)
                    minNumber = Math.abs(a[i]-number);
            }
        return minNumber;
    }
    var t= x - check(x,a);
    var h = x + check(x,a);
    var b = a.filter((number) => {
        if(number==t|| number ==  h)
            return true;
        return false;
    })
    console.log(b)