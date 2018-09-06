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
    methods:{
        getDisplayedLetter(){
            const letter = this.letters[this.letterIndex];
            return `${letter}${letter.toLowerCase()}`;
        }
    }
}