function chuanHoa(str)
{
    str = str.trim();
    
    return str.replace(/\s+/g," ");
}
console.log("   Mai Ben        Nhau ban      NhO" + "<br/>")
console.log(chuanHoa("   Mai Ben        Nhau ban      NhO"))