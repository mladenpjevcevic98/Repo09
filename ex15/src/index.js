function myDoWhile()
{
    var myNumbers = 0;
    do
    {
        console.log(myNumbers);
        myNumbers++
    }
    while(myNumbers<9)

    return myNumbers;
}

console.log(myDoWhile());

module.exports = myDoWhile;