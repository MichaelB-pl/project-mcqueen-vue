import getAlphabet from '../models/alphabet';

export default {
    name: 'letters-bar',
    data() {
        const letters = getAlphabet().map(letter => letter.letter);
        return {
            letters
        };
    }
}