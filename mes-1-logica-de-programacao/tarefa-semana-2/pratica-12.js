function daysOfTheWeekOne(n) {
    if (n === 1)
        return "Monday"
    else if (n === 2)
        return "Tuesday"
    else if (n === 3)
        return "Wednesday"
    else if (n === 4)
        return "Thursday"
    else if (n === 5)
        return "Friday"
    else if (n === 6)
        return "Saturday"
    else if (n === 7)
        return "Sunday"

    console.log(`The number ${n} ins't valid for a weekday`)
}

function daysOfTheWeekTwo(n) {
    switch (n) {
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
       case 6:
            return "Saturday"
        case 7:
            return "Sunday"

    }
    console.log(`The number ${n} ins't valid for a weekday`)

}

console.log(daysOfTheWeekOne(7))
console.log(daysOfTheWeekTwo(0))