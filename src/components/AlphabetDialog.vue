<template>
<transition name="dialog-fading">
    <div class="alphabet__dialog">
        <AlphabetDialogLettersBar />
        <AlphabetDialogMainSpace />
        <AlphabetDialogSpellBar />
        <AlphabetDialogImagesSpace />
    </div>
</transition>
</template>

<script>
import {
    playAudio,
    getLettersAudioUri
} from '../assets/audio/player';
import AlphabetItem from '../models/alphabet/alphabet-item';

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
    props: {
        alphabetItem: {
            type: AlphabetItem,
            required: true
        },
        imageIndex: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            lastLetterIndex: -1,
            areUnnecessaryComponentsVisible: true,
            isViewDestroyed: false
        };
    },
    mounted() {
        this.startSpelling()
        //         this.$emit('spellingFinished');
    },
    beforeDestroy() {
        this.isViewDestroyed = true;
    },
    methods: {
        getLetter() {
            return this.alphabetItem.letter;
        },

        getImageName() {
            return this.alphabetItem.names[this.imageIndex];
        },

        getImageUri() {
            return this.alphabetItem.uris[this.imageIndex];
        },

        getImageNameLetters() {
            return this.getImageName().split('');
        },

        getCurrentlyDisplayedLetters() {
            return this.lastLetterIndex >= 0 ?
                this.getImageNameLetters().slice(0, this.lastLetterIndex + 1) : [];
        },

        async startSpelling() {
            await this.hideUnnecessaryComponents();
            console.log('next');
            await this.spellWord();
            console.log(`spelled`);
        },

        async hideUnnecessaryComponents() {
            this.areUnnecessaryComponentsVisible = false;
            await this.sleep(300);
        },

        async sleep(timeout) {
            return new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, timeout));
        },

        async spellWord() {
            const letters = this.getImageNameLetters();
            for (let i = 0; i < letters.length; i++) {
                this.lastLetterIndex = i;
                console.log(`Letter: ${letters[i]}`);
                await this.sleep(300);
            }
        },
    }
}
</script>

<style scoped>
:root {
    --letter-animation-time: 2s;
}

.alphabet__dialog {
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

.dialog-fading-enter-active,
.dialog-fading-leave-active {
    transition: opacity var(--transition-duration);
}

.dialog-fading-enter,
.dialog-fading-leave-to {
    opacity: 0;
}
</style>
