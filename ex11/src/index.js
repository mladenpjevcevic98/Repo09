function switchCase(letter)
{
    var animals=letter;
    switch (animals) 
    {
        case 'a':
            console.log(switchCase("Antelopa"));
            break;
        case 'b':
            console.log(switchCase("Bird"));
            break;
        case "c": 
            console.log(switchCase("Cat"));
            break;
        default:
            "Stuff";
            break;

            
    }
    return animals;
}

console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));

module.exports = switchCase;

