<template>
<div class="spell-dialog">
    <input class="unnecessary-components-checkbox" type="checkbox"
            :checked="areUnnecessaryComponentsVisible"/>
    <input class="pop-image-checkbox" type="checkbox"
            :checked="isCurrentlyPopingImage"/>
    <AlphabetDialogLettersBar />
    <AlphabetDialogMainSpace />
    <AlphabetDialogSpellBar />
    <AlphabetDialogImagesSpace />
</div>
</template>

<script>
import {
    playAudio,
    getLettersAudioUri
} from '../assets/audio/player';

import AlphabetDialogLettersBar from './AlphabetDialogLettersBar.vue';
import AlphabetDialogMainSpace from './AlphabetDialogMainSpace.vue';
import AlphabetDialogSpellBar from './AlphabetDialogSpellBar.vue';
import AlphabetDialogImagesSpace from './AlphabetDialogImagesSpace.vue';

export default {
    name: 'AlphabetDialog',
    components: {
        AlphabetDialogLettersBar,
        AlphabetDialogMainSpace,
        AlphabetDialogSpellBar,
        AlphabetDialogImagesSpace
    },
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
    mounted() {
        this.startSpelling().then(resolve => {
            if (resolve)
                this.$emit('spellingFinished');
        });
    },
    beforeDestroy() {
        this.isViewDestroyed = true;
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
    }
}
</script>

<style scoped>
:root {
    --letter-animation-time: 2s;
}

.spell-dialog {
    width: 100vw;
    height: 100vh;
    background-color: var(--color-primary-extra-light);
    position: absolute;
    z-index: 200;
    overflow: hidden;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: stretch;
    transition: height var(--transition-duration);
}

.invisible-letter {
    color: transparent;
}

.unnecessary-components-checkbox {
    display: none;
    position: absolute;
}

.pop-image-checkbox {
    display: none;
    position: absolute;
}

.unnecessary-components-checkbox:not(:checked)~.letters-bar {
    height: 0;
}

.unnecessary-components-checkbox:not(:checked)~.main-space {
    height: calc(var(--alphabeth-dp) * 7 + var(--bar-size));
}

.unnecessary-components-checkbox:not(:checked)~.spell-bar {
    height: calc(var(--alphabeth-dp) + var(--bar-size));
    font-size: calc(var(--bar-size));
}

.unnecessary-components-checkbox:not(:checked)~.images-space {
    height: 0;
}

@keyframes image-jump-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes letters-jump {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.5);
    }

    100% {
        transform: scale(1);
    }
}

.pop-image-checkbox:checked~.main-space>img {
    max-width: 90%;
    max-height: 90%;
    animation: image-jump-in .5s ease;
}

.pop-image-checkbox:checked~.spell-bar>.letters-wrapper {
    animation: letters-jump .5s ease;
}
</style>
