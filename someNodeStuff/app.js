const names = require("./file1")

const nothing = (name) => {
    console.log(name)
}

Object.keys(names).forEach(element => nothing(names[element]))
// names.forEach((key,value) => {
//     console.log(value)
// });

//console.log(module)