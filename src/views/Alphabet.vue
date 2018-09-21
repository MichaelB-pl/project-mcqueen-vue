<template>
<div class="alphabet">
    <AlphabetLettersBar 
        :letters="getLetters()" 
        @letterIndexChanged="onLetterIndexChanged($event)" 
    />

    <AlphabetMainSpace 
        :alphabetItem="getSelectedAlphabetItem()" 
        :imageIndex="imageIndex" 
        @selectedImageClicked="onSelectedImageClicked()" 
        @backgroundLetterClicked="onBackgroundLetterClicked()" 
    />

    <AlphabetSpellBar 
        :alphabetItem="getSelectedAlphabetItem()" 
        :imageIndex="imageIndex"  
        @spellClicked="onSpellClicked()" 
    />

    <AlphabetImagesSpace 
        :alphabetItem="getSelectedAlphabetItem()" 
        @imageSelected="onImageSelected($event)" 
    />

    <AlphabetDialog 
            v-if="isCurrentlySpelling" 
            :alphabetItem="getSelectedAlphabetItem()" 
            :imageIndex="imageIndex"  
            @spellingFinished="isCurrentlySpelling = false" 
    />
    
</div>
</template>

<script>
import AlphabetLettersBar from '../components/AlphabetLettersBar.vue';
import AlphabetMainSpace from '../components/AlphabetMainSpace.vue';
import AlphabetSpellBar from '../components/AlphabetSpellBar.vue';
import AlphabetImagesSpace from '../components/AlphabetImagesSpace.vue';
import AlphabetDialog from '../components/AlphabetDialog.vue';

import getAlphabet from '../models/alphabet/alphabet';
import {
    playAudio,
    getLettersAudioUri
} from '../assets/audio/player';

export default {
    name: 'Alphabet',
    components: {
        AlphabetLettersBar,
        AlphabetMainSpace,
        AlphabetSpellBar,
        AlphabetImagesSpace,
        AlphabetDialog
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
        getLetters(){
            return this.alphabet.map(letter=>letter.letter);
        },

        getSelectedAlphabetItem(){
            return this.alphabet[this.letterIndex];
        },

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

<style>
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

.alphabet__letters-bar{
    box-shadow: 0 0 16px 0 black;
    display: block;
    font-size: calc(var(--bar-size) * 0.6);
    transition: height var(--transition-duration), font-size var(--transition-duration);
}

.alphabet__spell-bar{
    box-shadow: 0 0 4px 0 black;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    font-size: calc(var(--bar-size) * 0.5);
    font-weight: bold;
    transition: height var(--transition-duration), font-size var(--transition-duration);
}

@media screen and (orientation:landscape) and (max-height: 480px) {
    .alphabet__letters-bar {
        height: calc(var(--bar-size) * 0.8);
        font-size: calc(var(--bar-size) * 0.48);
    }
    .alphabet__spell-bar {
        height: calc(var(--bar-size) * 0.5);
        font-size: calc(var(--bar-size) * 0.35);
    }
}
</style>
