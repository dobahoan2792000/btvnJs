// var a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]
// function frequency(a)
// {
//     a.sort();
//     var b = [1];
    
//     for ( var i = 0 ; i < a.length - 1; i++)    
//     {
//         if(a[i]==a[i+1])
//             {
//                 b[b.length-1]++;
//             }
//         else {
//             b.push(0);
//             b[b.length-1]++;
//         }
//     }
//     var c = Math.max.apply(Math,b)
    
//     for ( var i = 0 ; i<b.length ; i++)
//         if(b[i]===c)
//             {
//                 var d = 0;
//                 for ( var j = 0 ; j<i ; j++)
//                     d+= b[j];
//                 document.write(a[d] + "----" + c)
//                 break;
                    
//             }
// }
// frequency(a)

