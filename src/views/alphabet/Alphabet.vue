<template>
<div class="alphabet">
    <LettersBar v-on:letterIndexChanged="onLetterIndexChanged($event)" v-bind:alphabet="alphabet" />

    <MainSpace v-bind:alphabet="alphabet" v-bind:letterIndex="letterIndex" v-bind:imageIndex="imageIndex" v-on:selectedImageClicked="onSelectedImageClicked()" v-on:backgroundLetterClicked="onBackgroundLetterClicked()" />

    <SpellBar v-bind:alphabet="alphabet" v-bind:letterIndex="letterIndex" v-bind:imageIndex="imageIndex" v-on:spellClicked="onSpellClicked()" />

    <ImagesSpace v-bind:alphabet="alphabet" v-bind:letterIndex="letterIndex" v-on:imageSelected="onImageSelected($event)" />

    <transition name="dialog-in">
        <SpellDialog v-if="isCurrentlySpelling" v-bind:alphabet="alphabet" v-bind:letterIndex="letterIndex" v-bind:imageIndex="imageIndex" v-on:spellingFinished="isCurrentlySpelling = false" />
    </transition>
</div>
</template>

<script>
import LettersBar from '../../components/alphabet/letters-bar/LettersBar.vue';
import MainSpace from '../../components/alphabet/main-space/MainSpace.vue';
import SpellBar from '../../components/alphabet/spell-bar/SpellBar.vue';
import ImagesSpace from '../../components/alphabet/images-space/ImagesSpace.vue';
import SpellDialog from '../../components/alphabet/spell-dialog/SpellDialog.vue';

import getAlphabet from '../../components/alphabet/models/alphabet';
import {
    playAudio,
    getLettersAudioUri
} from '../../assets/audio/player';

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
</script>

<style scoped>
:root {
    --alphabeth-dp: calc((100vh - var(--bar-size) * 2) / 8);
}

.alphabet {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: stretch;
}

.dialog-in-enter-active {
    animation: dialog-fade-in var(--transition-duration-short);
}

.dialog-in-leave-active {
    animation: dialog-fade-in var(--transition-duration) reverse;
}

@keyframes dialog-fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 100%;
    }
}
</style>
