import getAlphabet from '../models/alphabet';

export default {
    name: 'images-space',
    props: ['letterIndex'],
    data() {
        const uris = getAlphabet().map(letter => letter.uris);
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