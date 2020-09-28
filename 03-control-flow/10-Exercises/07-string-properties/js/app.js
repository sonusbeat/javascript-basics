function showProperties(object) {
    for (let key in object) {
        if (typeof object[key] === 'string') {
            console.log(key, object[key]);
        }
    }
}

const movie = {
    title: 'Avengers',
    releaseYear: 2012,
    director: 'Joss Whedon',
    raiting: 8
}

showProperties(movie);