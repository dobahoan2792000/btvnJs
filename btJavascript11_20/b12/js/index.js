var input = prompt("Enter input")
console.log(input);
function deleteSpace(str)
{
    str = str.trim();
    str = str.replace(/\s+/g," ");
    return str;
}
console.log(deleteSpace(input));