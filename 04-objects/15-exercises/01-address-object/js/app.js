// Street
// city
// Zip Code
// Show Address

const address = {
    street: 'Santander #2479',
    city: 'Guadalajara',
    zipCode: 44220
}

function showAddress(object) {
    for (key in object) console.log(key, object[key]);
}

showAddress(address);