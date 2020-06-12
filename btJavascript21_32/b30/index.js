    var a = [1,1,1,1,1,1,1,1,1,1]
   function findNumber(arr)
   {
    var b = Math.max.apply(Math,arr);
    var aNew = arr.filter((number) => {
        if(number!==b)
         return true
         return false
    })
    if(aNew.length == 0) return -1
    else {
        return Math.max.apply(Math,aNew)
    }
   }
   console.log(findNumber(a))