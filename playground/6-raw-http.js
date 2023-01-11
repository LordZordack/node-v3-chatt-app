const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=cf215db342b99ce6b3f1b56c2d1a4baa&query=45,-75.7088&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()  
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('an error occured' + error)
})

request.end()
