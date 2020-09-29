 // method -> obj
 // function -> global (window, global)

 const video = {
    title: 'Avengers',
    tags: ['a', 'b', 'c'],
    play() {
        console.log(this);
    },
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();

/*
    video.stop = function() {
        console.log(this);
    };

    video.start();
    video.stop();
*/

/*
    function playVideo() {
        console.log(this);
    }
*/

// function Video(title) {
//     this.title = title;
//     console.log(this);
// }

// creates empty object {}
// const v = new Video('Spiderman'); 

