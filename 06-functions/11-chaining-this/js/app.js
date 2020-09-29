 // method -> obj
 // function -> global (window, global)

 const video = {
    title: 'Avengers',
    tags: ['a', 'b', 'c'],
    play() {
        console.log(this);
    },
    showTags() {
        const self = this;

        this.tags.forEach(function (tag) {
            console.log(self.title, tag);
        });
    },
    execTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }.bind(this));
    },
    tagsWithArrow() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();
console.log('-'.repeat(35));
video.execTags();
console.log('-'.repeat(35));
video.tagsWithArrow();

// console.log('-'.repeat(35));

// function playVideo(a, b) {
//     console.log(this, a, b);
// }

// playVideo.call({ name: 'Daniel' }, 1, 2);
// playVideo.apply({ name: 'Joseph' }, [1, 2]);
// playVideo.bind({ name: 'Alex' }, 1, 2)();

// playVideo();