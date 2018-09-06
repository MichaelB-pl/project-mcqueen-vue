import getAlphabet from '../models/alphabet';

export default {
    name: 'main-space',
    props: ['letterIndex'],
    methods:{
        getDisplayedLetter(){
            const letters = getAlphabet().map(letter => letter.letter);
            const letter = letters[this.letterIndex];
            return `${letter}${letter.toLowerCase()}`;
        }
    }
}