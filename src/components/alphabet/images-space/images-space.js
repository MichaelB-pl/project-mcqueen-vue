export default {
    name: 'images-space',
    props: ['alphabet', 'letterIndex'],
    data() {
        const uris = this.alphabet.map(letter => letter.uris);
        return {
            uris
        };
    },
    methods: {
        getImagesUri() {
            return this.uris[this.letterIndex];
        }
    }
}