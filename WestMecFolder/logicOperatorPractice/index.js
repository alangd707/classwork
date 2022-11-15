// Function to check time for if buisness closed.

function checkTime(time, DoW) {
    if ((time >= 9 && time < 17) && DoW != 'saturday' && DoW != 'sunday') {
        return 'Open!'
    }
    else {
        return 'Close!'
    }
}
// Function to check items for to take notes

function checkItems(pen,paper,mouse,keyboard) {
    if ((pen && paper) || (mouse && keyboard)) {
        return 'You can take notes!'
    }
    else {
        return "You can't take notes!"
    }
}
// Logs using random parameters to display functionality of code.

console.log(checkTime(5, 'monday'))
console.log(checkItems(false, false, false, false))
