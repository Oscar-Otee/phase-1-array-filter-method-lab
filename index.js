// Code your solution here

function findMatching(driverNames, string) {
    const matchDrivers = [];
    for (const driver of driverNames) {
        if (driver === string) {
            matchDrivers.push(driver)
        }
        else if (driver.toLowerCase() === string.toLowerCase()) {
            matchDrivers.push(driver);
        }
        
        }
        return matchDrivers;
    }
    



function fuzzyMatch(driverNames, string) {
    const matchString = [];
    for (const driver of driverNames) {
        if (driver.slice(0, 2) === string) {
            matchString.push(driver);
        
        }
    }
    return matchString;
}


function matchName(driverNames, string) {
    const matchDrivers = [];
    for (const driver of driverNames) {
        if (driver.name === string) {
            matchDrivers.push(driver);
    
        }
    }
    return matchDrivers;
}

