const doWorkCallback = (callback) => {
    setTimeout(() => {
        //callback('This is my error... ;(', undefined)
        callback(undefined, [1, 34, 5, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }
    console.log(result)
})