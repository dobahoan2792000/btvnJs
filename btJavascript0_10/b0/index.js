function check(a)
{
    if(a==1 || a==2) return false;
    for(var i = 2; i<a;i++)
        if(a%i==0)
            return false;
    return true;
}
console.log(check(6))   