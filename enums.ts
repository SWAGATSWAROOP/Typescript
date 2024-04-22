enum SetChoice{
    AISLE,
    MIDDLE,
    WINDOW,
    FOURTH
}

// But the default values from 0 to 3

// But we can have different values assigned to it

enum SeatChoice{
    AISLE = "Swagat",
    MIDDLE = 3,    //Now rest of values will have increasing values
    WINDOW,
    FOURTH
}

// But the above codes generate very much js code so we want that its should be less
// so just use const in front of that
const enum Swagat {
    AISLE,
    MIDDLE,
    WINDOW,
    FOURTH
}

const hcSeat = SetChoice.AISLE

