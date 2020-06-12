var  a = [1,2,3,4,5,6] 
function arr(a)
{
    a.sort();
    document.write("min arr :" , a[0] + "<br/>" + 
                    "max arr :" , a[a.length-1]
    );
    var b = a.reduce(function(a,b){
        return a+b;
    })
    var c = Math.round(b/(a.length-1))
    document.write("trung binh :", a.find(function(a){
        if(a===c) return true;
        else return false;
    }))

}
arr(a)