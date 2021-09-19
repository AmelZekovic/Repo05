function main() {
    var lastname = "Bezos";
    var thirdToLastLetterOfLastName = lastname[lastname.length - 3];
    return thirdToLastLetterOfLastName;
}

console.log(main());
module.exports = main;