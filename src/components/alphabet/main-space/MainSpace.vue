<template>
<div class="main-space">
    <div class="background-letter noselect" v-if="imageIndex == -1" v-on:click="$emit('backgroundLetterClicked')">
        {{ getDisplayedLetter() }}
    </div>

    <img v-bind:src="getSelectedImageUri()"
            v-on:click="$emit('selectedImageClicked')"/>
    </div>
</template>

<script>
export default {
    name: 'main-space',
    props: ['alphabet', 'letterIndex', 'imageIndex'],
    methods: {
        getDisplayedLetter() {
            const letter = this.alphabet[this.letterIndex].letter;
            return `${letter}${letter.toLowerCase()}`;
        },

        getSelectedImageUri() {
            const letter = this.alphabet[this.letterIndex];
            const uri = letter.uris[this.imageIndex];
            return uri;
        }
    }
}
</script>

<style scoped>
 .main-space {
     width: 100%;
     height: calc(var(--alphabeth-dp) * 5);
     position: relative;
     z-index: 1;
     display: flex;
     flex-flow: column nowrap;
     justify-content: center;
     align-items: center;
     transition: height var(--transition-duration);
 }

 .background-letter {
     width: 100%;
     height: 100%;
     color: #0003;
     position: absolute;
     font-size: 40vmin;
     z-index: 2;
     display: flex;
     flex-flow: column nowrap;
     justify-content: center;
     align-items: center;
 }

 .main-space>img {
     max-width: 90%;
     max-height: 90%;
     z-index: 3;
 }

 @media screen and (orientation:landscape) {
     .main-space {
         height: calc(var(--alphabeth-dp) * 6);
     }

     @media(max-height: 480px) {
         .main-space {
             height: calc(var(--alphabeth-dp) * 6 + var(--bar-size) * 0.2);
         }
     }
 }
</style>
