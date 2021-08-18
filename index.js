function findMatching(drivers, string) {
    return drivers.filter(s => s.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(s => s.toLowerCase().indexOf(string.toLowerCase()) === 0);
}

function matchName(drivers, string) {
    return drivers.filter(o => o.name === string);
}
