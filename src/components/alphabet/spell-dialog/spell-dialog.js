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
            areUnnecessaryComponentsVisible: true,
            isCurrentlyMovingNextLetter: true,
            isCurrentlyPopingImage: false,
            isViewDestroyed: false
        };
    },
    methods: {
        getNextLetterIndex() {
            return this.displayedNameLastLetterIndex + 1;
        },

        getSelectedImageUri() {
            const letter = this.alphabet[this.letterIndex];
            const uri = letter.uris[this.imageIndex];
            return uri;
        },

        startSpelling() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    this.areUnnecessaryComponentsVisible = false;
                    setTimeout(() => {
                        this.spellNextLetter(resolve);
                    }, 300);
                }, 300);
            });
        },

        spellNextLetter(resolve) {
            this.showAndSayNextLetter();

            setTimeout(() => {
                if (this.isViewDestroyed) {
                    resolve();
                    return;
                }

                this.isCurrentlyMovingNextLetter = true;
                setTimeout(() => {
                    if (this.isViewDestroyed) {
                        resolve();
                    } else if (this.displayedNameLastLetterIndex < this.letters.length - 2) {
                        this.spellNextLetter(resolve);
                    } else {
                        this.isCurrentlyMovingNextLetter = false;
                        this.displayedNameLastLetterIndex++;
                        this.popImage(resolve);
                    }
                }, 2300);
            }, 1000);
        },

        showAndSayNextLetter() {
            this.isCurrentlyMovingNextLetter = false;
            this.displayedNameLastLetterIndex++;

            const nextLetter = this.letters[this.getNextLetterIndex()];
            const audioUri = getLettersAudioUri(nextLetter, nextLetter);
            playAudio(audioUri);
        },

        popImage(resolve) {
            this.isCurrentlyPopingImage = true;

            const audioUri = getLettersAudioUri(this.letter, this.imageName);
            playAudio(audioUri);

            setTimeout(() => {
                this.areUnnecessaryComponentsVisible = true;
                setTimeout(() => {
                    resolve(true);
                }, 300);
            }, 1000);
        }
    },
    mounted() {
        this.startSpelling().then(resolve => {
            if (resolve)
                this.$emit('spellingFinished');
        });
    },
    beforeDestroy() {
        this.isViewDestroyed = true;
    }
}