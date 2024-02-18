const sum = require("./sum").sum
console.log("Hello World")
console.log(sum(2, 3))
import style from "./css/index.scss"

let heading = document.querySelector("h1")
let sumValue = sum(1, 100)

heading.textContent = `wynik to:${sumValue}`
