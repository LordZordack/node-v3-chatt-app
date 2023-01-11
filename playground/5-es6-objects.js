// object property shorthand


const name = "Mapley"
const userAge = 16

const user = {
    name,
    age: userAge,
    location: "Greenville"
}

console.log(user)


// object destructuring

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)


const transaction = (type, { label =  "arnold", stock = 0} = {}) => {
    console.log("|type: " + type, "|label: " + label, "|stock: " + stock)
}


transaction('order')