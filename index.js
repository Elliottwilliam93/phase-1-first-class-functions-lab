const returnFirstTwoDrivers = function(array) {
    let result = [array[0], array[1]]
    return result
}

const returnLastTwoDrivers = function(array) {
    let result = [array[2], array[3]]
    return result
}

const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return function() {
        return fare * fare
    }
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(array, name) {
    let result = name(array)
    return result
}