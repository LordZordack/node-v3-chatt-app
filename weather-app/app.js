
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


//get user input
const address = process.argv[2]

geocode(address, (error, {latitude, longitude, location} = {}) => {
    //const {latitude, longitude, location} = data
    if (error) {
        return console.log(error)
    } else if (address === undefined) {
        return console.log("you didn't say anthing... ;( ")
    }
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }

        console.log(location)
        console.log(forecastData)
      })
})


