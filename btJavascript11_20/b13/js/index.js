function reverse(str)
{
    var reverseStr = "";
    for(var i =0; i<str.length ; i++)
        {
            reverseStr+=str[str.length-i-1];
            
        }
    return reverseStr;
}
var str = prompt("Enter input");
console.log(reverse(str));