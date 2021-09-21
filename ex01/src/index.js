function myTrueBoolean()
{
    var true1 = Boolean('off');
    return true1;
}

console.log(myTrueBoolean());

module.exports = myTrueBoolean;