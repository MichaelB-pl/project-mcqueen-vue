<template>
<div class="alphabet">
    <LettersBar 
        :alphabet="alphabet" 
        @letterIndexChanged="onLetterIndexChanged($event)" 
    />

    <MainSpace 
        :alphabet="alphabet" 
        :letterIndex="letterIndex" 
        :imageIndex="imageIndex" 
        @selectedImageClicked="onSelectedImageClicked()" 
        @backgroundLetterClicked="onBackgroundLetterClicked()" 
    />

    <SpellBar 
        :alphabet="alphabet" 
        :letterIndex="letterIndex" 
        :imageIndex="imageIndex" 
        @spellClicked="onSpellClicked()" 
    />

    <ImagesSpace 
        :alphabet="alphabet" 
        :letterIndex="letterIndex" 
        @imageSelected="onImageSelected($event)" 
    />

    <transition name="dialog-in">
        <SpellDialog 
            v-if="isCurrentlySpelling" 
            :alphabet="alphabet" 
            :letterIndex="letterIndex" 
            :imageIndex="imageIndex" 
            @spellingFinished="isCurrentlySpelling = false" 
        />
    </transition>
</div>
</template>

<script>
import LettersBar from '../components/AlphabetLettersBar.vue';
import MainSpace from '../components/AlphabetMainSpace.vue';
import SpellBar from '../components/AlphabetSpellBar.vue';
import ImagesSpace from '../components/AlphabetImagesSpace.vue';
import SpellDialog from '../components/AlphabetSpellDialog.vue';

import getAlphabet from '../models/alphabet/alphabet';
import {
    playAudio,
    getLettersAudioUri
} from '../assets/audio/player';

export default {
    name: 'Alphabet',
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
            console.log('onLetterIndexChanged');
            this.imageIndex = -1;
            this.letterIndex = index;
            this.saySelectedLetter();
        },

        onImageSelected(index) {
            console.log('onImageSelected');
            this.imageIndex = index;
            this.saySelectedImage();
        },

        onBackgroundLetterClicked() {
            console.log('onBackgroundLetterClicked');
            this.saySelectedLetter();
        },

        onSelectedImageClicked() {
            console.log('onSelectedImageClicked');
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
            console.log('onSpellClicked');
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
