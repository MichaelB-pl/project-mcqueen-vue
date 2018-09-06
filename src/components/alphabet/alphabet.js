import LettersBar from './letters-bar/LettersBar.vue';
import MainSpace from './main-space/MainSpace.vue';
import SpellBar from './spell-bar/SpellBar.vue';

import getAlphabet from './models/alphabet';

export default {
    name: 'alphabet',
    components: {
        LettersBar,
        MainSpace,
        SpellBar
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

