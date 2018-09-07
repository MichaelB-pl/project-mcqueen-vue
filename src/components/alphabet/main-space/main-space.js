export default {
    name: 'main-space',
    props: ['alphabet','letterIndex', 'imageIndex'],
    methods: {
        getDisplayedLetter() {
            const letter = this.alphabet[this.letterIndex].letter;
            return `${letter}${letter.toLowerCase()}`;
        },

        getSelectedImageUri() {
            const letter = this.alphabet[this.letterIndex];
            const uri = letter.uris[this.imageIndex];
            return uri;
        }
    }
}