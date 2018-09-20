export default class AlphabetItem {
    constructor({ letter, names, uris }) {
        this.letter = letter;
        this.names = names;
        this.uris = uris;
    }

    getLetter() {
        return this.letter;
    }

    getImageName(index) {
        return this.names[index];
    }
}