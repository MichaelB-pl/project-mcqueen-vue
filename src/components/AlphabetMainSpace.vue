<template>
<div class="alphabet__main-space">
    <div 
        v-if="!isSelectedAnyImage" 
        class="alphabet__main-space-background-letter noselect" 
        @click="$emit('backgroundLetterClicked')"
    >{{ getDisplayedLetter }}</div>

    <img 
        v-if="isSelectedAnyImage" 
        :src="getSelectedImageUri"
        @click="$emit('selectedImageClicked')"
    />
    </div>
</template>

<script>
import AlphabetItem from '../models/alphabet/alphabet-item';

export default {
    name: 'AlphabetMainSpace',
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
    computed: {
        isSelectedAnyImage() {
            return this.imageIndex > -1;
        },

        getDisplayedLetter() {
            const letter = this.alphabetItem.letter;
            return `${letter.toUpperCase()}${letter.toLowerCase()}`;
        },

        getSelectedImageUri() {
            const uri = this.alphabetItem.uris[this.imageIndex];
            return uri;
        }
    }
}
</script>

<style scoped>
 .alphabet__main-space-background-letter {
     width: auto;
     height: auto;
     color: #0003;
     position: absolute;
     font-size: 40vmin;
     display: flex;
     flex-flow: column nowrap;
     justify-content: center;
     align-items: center;
 }
</style>
