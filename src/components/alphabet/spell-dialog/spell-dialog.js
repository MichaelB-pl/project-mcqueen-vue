import { playAudio, getLettersAudioUri } from '../../../assets/audio/player';

export default {
    name: 'spell-dialog',
    props: ['alphabet', 'letterIndex', 'imageIndex'],
    data() {
        const selectedLetterItem = this.alphabet[this.letterIndex];
        const imageName = selectedLetterItem.names[this.imageIndex];
        const imageUri = selectedLetterItem.uris[this.imageIndex];
        const letters = imageName.split('');

        return {
            letters,
            imageUri,
            displayedNameLastLetterIndex: -2,
            isCurrentlyMovingNextLetter: false
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
                console.log('timeout 01');
                setTimeout(() => {
                    console.log('timeout 02');
                    if (this.displayedNameLastLetterIndex < this.letters.length - 2) {
                        this.spellNextLetter(resolve);
                    } else {
                        setTimeout(() => {
                            resolve();
                        }, 2000);
                    }
                }, 3500);
            }, 1000);
        }
    },
    mounted() {
        this.startSpelling().then(() => {
            console.log('resolved');
            this.$emit('spellingFinished');
        });
    }
}