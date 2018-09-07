import LettersBar from './letters-bar/LettersBar.vue';
import MainSpace from './main-space/MainSpace.vue';
import SpellBar from './spell-bar/SpellBar.vue';
import ImagesSpace from './images-space/ImagesSpace.vue';

import getAlphabet from './models/alphabet';
import { playAudio, getLettersAudioUri } from '../../assets/audio/player';

export default {
    name: 'alphabet',
    components: {
        LettersBar,
        MainSpace,
        SpellBar,
        ImagesSpace
    },
    data() {
        const alphabet = getAlphabet();
        return {
            alphabet,
            letterIndex: 0,
            imageIndex: -1
        };
    },
    methods: {
        onLetterIndexChanged(index) {
            this.imageIndex = -1;
            this.letterIndex = index;
            this.saySelectedLetter();
        },

        onImageSelected(index) {
            this.imageIndex = index;
            this.saySelectedImage();
        },

        onBackgroundLetterClicked() {
            this.saySelectedLetter();
        },

        onSelectedImageClicked() {
            this.imageIndex = -1;
        },

        saySelectedLetter() {
            const letter = this.alphabet[this.letterIndex].letter;
            const src = getLettersAudioUri(letter, letter);
            playAudio(src);
        },

        saySelectedImage() {
            const selectedLetterItem = this.alphabet[this.letterIndex];
            const letter = selectedLetterItem.letter;
            const names = selectedLetterItem.names;
            const selectedImageName = names[this.imageIndex];
            const src = getLettersAudioUri(letter, selectedImageName);
            playAudio(src);
        }
    }
}

