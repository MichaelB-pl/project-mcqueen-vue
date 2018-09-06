import LettersBar from './letters-bar/LettersBar.vue';
import MainSpace from './main-space/MainSpace.vue';
import getAlphabet from './models/alphabet';

export default {
    name: 'alphabet',
    components: {
        LettersBar,
        MainSpace
    },
    data() {
        const letters = getAlphabet();

        return {
            letters,
            letterIndex: 0,
            imageIndex: -1
        };
    },
    methods: {
        onLetterIndexChanged(index) {
            this.letterIndex = index;
        }
    }
}

