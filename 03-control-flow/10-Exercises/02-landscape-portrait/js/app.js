function isLandscape(width, height) {
    return width > height;
}

let message = (isLandscape(768, 1024)) ? 'Is Landscape' : 'Is Portrait';

console.log(message);