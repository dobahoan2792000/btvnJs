function chuanHoa(str)
{
    str = str.toLowerCase();
    var a = str.split("");
    var strF = "";
    var start = 0;
    var flag = 0;
    while(str.indexOf(" ")!= -1)
        {
            str = str.replace(str[0],str[0].toUpperCase());
           
            flag = str.indexOf(" ");
            strF += str.substring(start,flag+1);
            str = str.substring(flag+1);
            
        }
        str = str.replace(str[0],str[0].toUpperCase());
        strF = strF + str;
        return strF;
}
var x = prompt("Enter")
console.log(chuanHoa(x))