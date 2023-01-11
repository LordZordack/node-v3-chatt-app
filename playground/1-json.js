const fs = require('fs')

/**const book = {
    title: 'Name of the Wind',
    author: 'Patrick Rothfuss'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)**/

/*const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()

const data = JSON.parse(dataJSON)
console.log(data.title) */

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
/* */
data.name = "jonas"
data.age = 16


const stringifiedData = JSON.stringify(data)

fs.writeFileSync('1-json.json', stringifiedData)



console.log(data)
