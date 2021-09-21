function myForLoop1()
{
    for (var i=0; i<=9; i++)
        {
        if (i % 2 === 0)
        {
                console.log(i);
        }

    }
}

function myForLoop2()
{
    for (var i=9; i>=0; i--)
    {
    if (i % 2 === 0)
    {
            console.log(i);
    }

}
}

console.log(myForLoop1(), myForLoop2());
module.exports = {myForLoop1, myForLoop2};