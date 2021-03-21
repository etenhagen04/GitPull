class Movie {
    constructor(opts) {
        this.movName = opts.movName;
        this.movGenre = opts.movGenre;
        this.movLength = opts.movLength;
        this.movReleaseYear = opts.movReleaseYear;
        this.movView = opts.movView;
    }

    getMovieInfo() {
        return movName, movGenre, movLength, movReleaseYear
    }

    getViewingMethod() {
        return movView
    }
}

class AugReality extends Movie {
    isAugReality() {
        return true
    }
}

const TheJokerOpts = {
    movName = "The Joker",
    movGenre = "Thriller",
    movLength = 122,
    movReleaseYear = 2019,
    movView = "Screen"
}

const TheJoker = new Movie(TheJokerOpts);

const AnonOpts = {
    movName = "Anon",
    movGenre = "Sci-Fi",
    movLength = 100,
    movReleaseYear = 2018,
    movView = "Augmented Reality"
}

const Anon = new AugReality(AnonOpts);

console.log(TheJoker.getViewingMethod())
console.log(Anon.getViewingMethod())

console.log(TheJoker.isAugReality())
console.log(Anon.isAugReality())