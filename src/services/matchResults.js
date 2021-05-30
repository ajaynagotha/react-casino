export const matchResults = {
    blackNumbers: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
    redNumbers: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
    firstColumn: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
    secondColumn: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    thirsdColumn: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
    applyFilters: function (results, label, filters) {
        console.log(filters)
        return new Promise((resolve, reject) => {
            var nresults = []
            switch (label) {
                case "Even":
                    nresults = results.filter((result) => {
                        return (Number(result) % 2) === 0;
                    })
                    if (nresults.length === results.length) {
                        return resolve(true)
                    }
                    else {
                        return resolve(false)
                    }
                case "Odd":
                    nresults = results.filter((result) => {
                        return (Number(result) % 2) !== 0;
                    })
                    if (nresults.length === results.length) {
                        return true
                    }
                    else {
                        return resolve(false)
                    }
                case "Red":
                    nresults = results.filter((result) => {
                        return this.redNumbers.includes(Number(result));
                    })
                    if (nresults.length === results.length) {
                        return resolve(true)
                    }
                    else {
                        return resolve(false)
                    }
                case "Black":
                    nresults = results.filter((result) => {
                        return this.blackNumbers.includes(Number(result));
                    })
                    if (nresults.length === results.length) {
                        return resolve(true)
                    }
                    else {
                        return resolve(false)
                    }
                case "1st Dozen":
                    nresults = results.filter((result) => {
                        return ((Number(result) >= 1) && (Number(result) <= 12))
                    })
                    if (nresults.length === results.length) {
                        return resolve(true)
                    }
                    else {
                        return resolve(false)
                    }
                case "2nd Dozen":
                    nresults = results.filter((result) => {
                        return ((Number(result) >= 13) && (Number(result) <= 24))
                    })
                    if (nresults.length === results.length) {
                        return resolve(true)
                    }
                    else {
                        return resolve(false)
                    }
                case "3rd Dozen":
                    nresults = results.filter((result) => {
                        return ((Number(result) >= 25) && (Number(result) <= 36))
                    })
                    if (nresults.length === results.length) {
                        return resolve(true)
                    }
                    else {
                        return resolve(false)
                    }
                case "1st Column":
                    nresults = results.filter((result) => {
                        return this.firstColumn.includes(Number(result));
                    })
                    if (nresults.length === results.length) {
                        return resolve(true)
                    }
                    else {
                        return resolve(false)
                    }
                case "2nd Colum":
                    nresults = results.filter((result) => {
                        return this.secondColumn.includes(Number(result));
                    })
                    if (nresults.length === results.length) {
                        return resolve(true)
                    }
                    else {
                        return resolve(false)
                    }
                case "3rd Colum":
                    nresults = results.filter((result) => {
                        return this.thirsdColumn.includes(Number(result));
                    })
                    if (nresults.length === results.length) {
                        return resolve(true)
                    }
                    else {
                        return resolve(false)
                    }
                case "singles":
                    var singles = filters.singles
                    nresults = results.filter((result) => {
                        return singles.includes(result);
                    })
                    if (nresults.length === results.length) {
                        return resolve(true)
                    }
                    else {
                        return resolve(false)
                    }
                case "splits":
                    var tsplits = filters.splits
                    var splits = []
                    tsplits.forEach((val) => {
                        var split = val.split(" and ")
                        splits.push(split[0])
                        splits.push(split[1])
                        console.log(splits)
                    })
                    nresults = results.filter((result) => {
                        return splits.includes(result);
                    })
                    if (nresults.length === results.length) {
                        return resolve(true)
                    }
                    else {
                        return resolve(false)
                    }
                case "streets":
                    var tstreets = filters.streets
                    var streets = []
                    tstreets.forEach((val) => {
                        var street = val.split("-")
                        streets.push(street[0])
                        streets.push(street[1])
                        streets.push(street[2])
                        console.log(streets)
                    })
                    nresults = results.filter((result) => {
                        return streets.includes(result);
                    })
                    if (nresults.length === results.length) {
                        return resolve(true)
                    }
                    else {
                        return resolve(false)
                    }
                case "corners":
                    var tcorners = filters.corners
                    var corners = []
                    tcorners.forEach((val) => {
                        var corner = val.split("-")
                        corners.push(corner[0])
                        corners.push(corner[1])
                        corners.push(corner[2])
                        corners.push(corner[3])
                        console.log(corners)
                    })
                    nresults = results.filter((result) => {
                        return corners.includes(result);
                    })
                    if (nresults.length === results.length) {
                        return resolve(true)
                    }
                    else {
                        return resolve(false)
                    }
                    case "lines":
                        var tlines = filters.lines
                        var lines = []
                        tlines.forEach((val) => {
                            var line = val.split("-")
                            lines.push(line[0])
                            lines.push(line[1])
                            lines.push(line[2])
                            lines.push(line[3])
                            console.log(lines)
                        })
                        nresults = results.filter((result) => {
                            return lines.includes(result);
                        })
                        if (nresults.length === results.length) {
                            return resolve(true)
                        }
                        else {
                            return resolve(false)
                        }
                default:
                    return "Error"
            }
        })
    }
}