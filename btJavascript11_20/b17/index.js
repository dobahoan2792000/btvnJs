function max(a,b,c)
{
    if(a>b && a>c)
        return a;
    else if(b>a && b>c)
        return b;
    return c;
}
function min(a,b,c)
{
    if(a<b && a<c)
        return a;
    else if(b<a && b<c)
        return b;
    return c;
}
console.log(max(1,5,4))
console.log(min(1,5,4))