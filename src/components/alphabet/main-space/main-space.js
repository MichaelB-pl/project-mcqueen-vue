import getAlphabet from '../models/alphabet';

export default {
    name: 'main-space',
    props: ['letterIndex'],
    data() {
        const letters = getAlphabet().map(letter => letter.letter);
        return {
            letters
        };
    },
}