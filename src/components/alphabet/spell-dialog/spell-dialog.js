import { playAudio, getLettersAudioUri } from '../../../assets/audio/player';

export default {
    name: 'spell-dialog',
    props: ['alphabet', 'letterIndex', 'imageIndex'],
    data() {
        const selectedLetterItem = this.alphabet[this.letterIndex];
        const letter = selectedLetterItem.letter;
        const imageName = selectedLetterItem.names[this.imageIndex];
        const imageUri = selectedLetterItem.uris[this.imageIndex];
        const letters = imageName.split('');

        return {
            letters,
            letter,
            imageName,
            imageUri,
            displayedNameLastLetterIndex: -2,
            isCurrentlyMovingNextLetter: false,
            isCurrentlyPopingImage: false
        };
    },
    methods: {
        getNextLetterIndex() {
            return this.displayedNameLastLetterIndex + 1;
        },

        startSpelling() {
            return new Promise(resolve => {
                this.spellNextLetter(resolve);
            });
        },

        spellNextLetter(resolve) {
            this.isCurrentlyMovingNextLetter = false;
            this.displayedNameLastLetterIndex++;

            const nextLetter = this.letters[this.getNextLetterIndex()];
            const audioUri = getLettersAudioUri(nextLetter, nextLetter);
            playAudio(audioUri);

            setTimeout(() => {
                this.isCurrentlyMovingNextLetter = true;
                setTimeout(() => {
                    if (this.displayedNameLastLetterIndex < this.letters.length - 2) {
                        this.spellNextLetter(resolve);
                    } else {
                        this.isCurrentlyMovingNextLetter = false;
                        this.displayedNameLastLetterIndex++;
                        this.popImage(resolve);
                    }
                }, 3500);
            }, 1000);
        },

        popImage(resolve) {
            this.isCurrentlyPopingImage = true;

            const audioUri = getLettersAudioUri(this.letter, this.imageName);
            playAudio(audioUri);

            setTimeout(() => {
                resolve();
            }, 2000);
        }
    },
    mounted() {
        this.startSpelling().then(() => {
            this.$emit('spellingFinished');
        });
    }
}