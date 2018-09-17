import LettersBar from '../../components/alphabet/letters-bar/LettersBar.vue';
import MainSpace from '../../components/alphabet/main-space/MainSpace.vue';
import SpellBar from '../../components/alphabet/spell-bar/SpellBar.vue';
import ImagesSpace from '../../components/alphabet/images-space/ImagesSpace.vue';
import SpellDialog from '../../components/alphabet/spell-dialog/SpellDialog.vue';

import getAlphabet from '../../components/alphabet/models/alphabet';
import { playAudio, getLettersAudioUri } from '../../assets/audio/player';

export default {
    name: 'alphabet',
    components: {
        LettersBar,
        MainSpace,
        SpellBar,
        ImagesSpace,
        SpellDialog
    },
    data() {
        const alphabet = getAlphabet();
        return {
            alphabet,
            letterIndex: 0,
            imageIndex: -1,
            isCurrentlySpelling: false
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
        },

        onSpellClicked() {
            this.isCurrentlySpelling = true;
        }
    }
}

