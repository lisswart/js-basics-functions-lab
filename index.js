// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLoc) {
    return Math.abs(pickUpLoc - 42);
}

function distanceFromHqInFeet(pickUpLoc) {
    return distanceFromHqInBlocks(pickUpLoc) * 264;
}

function distanceTravelledInFeet(begBlock, endBlock) {
    return 264 * Math.abs(endBlock - begBlock);
}

function calculatesFarePrice(begBlock, endBlock) {
    const distTravldInFt = distanceTravelledInFeet(begBlock, endBlock);

    if(distTravldInFt <= 400) {
        return 0;
    }
    else if(distTravldInFt > 400 && distTravldInFt <= 2000) {
        return ((distTravldInFt - 400) * 2) / 100;
    }
    else if(distTravldInFt > 2000 && distTravldInFt <= 2500) {
        return ((distTravldInFt - 400) * 2) / 100 + 25;
    }
}