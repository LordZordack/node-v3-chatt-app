/*const square = function (x) {
    return x * x
}
*/
/*const square = (x) => {
    return x * x
}
*/
// const square = (x) => x * x
// console.log(square(5))

const event = {
    name: 'Cloudy Class',
    guestList: ['Mapley', 'Drewbie', 'k1'],
    printGuestList () {
        console.log('Guest list for ' + this.name + ":")
        
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name)
        })

    }
}

event.printGuestList()