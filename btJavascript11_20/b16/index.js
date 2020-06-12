function takeId(id)
{
    var flag = id.lastIndexOf("/");
    return id.substring(flag+1);
}
console.log("takeId :" + takeId("https://www.facebook.com/ngothucdat"));