// Speed Limit 70 OK
// 5 -> 1 point
// Math.floor(1.3) -> 1
// 12 points -> License Suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    let output;

    if (speed < (speedLimit + kmPerPoint)) {
        console.log('OK');
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log('License Suspended');
    else output = console.log('Points:', points);
}

checkSpeed(60);
