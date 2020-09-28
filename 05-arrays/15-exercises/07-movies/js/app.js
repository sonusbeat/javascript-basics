const movies = [
    { title: 'a', year: 2018, raiting: 4.5 },
    { title: 'b', year: 2018, raiting: 4.7 },
    { title: 'c', year: 2018, raiting: 3 },
    { title: 'd', year: 2020, raiting: 4.5 }
];

// All the movies in 2018 with raiting > 4
// Sort them by their raiting
// Descending order
// Pick the title and display to the console

const titles = movies
    .filter(m => m.year === 2018 && m.raiting >= 4)
    .sort((a, b) => a.raiting - b.raiting)
    .reverse()
    .map(m => m.title)
;

console.log(titles);
