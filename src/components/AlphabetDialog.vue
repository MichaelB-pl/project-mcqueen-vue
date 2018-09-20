<template>
<div class="spell-dialog">
    <input class="unnecessary-components-checkbox" type="checkbox"
            :checked="areUnnecessaryComponentsVisible"/>
    <input class="pop-image-checkbox" type="checkbox"
            :checked="isCurrentlyPopingImage"/>

    <div class="letters-bar" />

    <div class="main-space">
        <img :src="getSelectedImageUri()"/>
        </div>

        <div class="spell-bar noselect">
            <input class="animate-letters-checkbox" type="checkbox"
                :checked="isCurrentlyMovingNextLetter"/>

            <div class="letters-wrapper">
                <p v-for="(letter, index) in letters" :key="index" :class="{ 'invisible-letter': index > displayedNameLastLetterIndex }">
                    {{ letter }}
                </p>
            </div>
            <div class="letters-wrapper floating-wrapper">
                <p v-for="(letter, index) in letters" :key="index" :class="{ 'unnecessary-letter': index != getNextLetterIndex(),  
                        'desired-letter': index == getNextLetterIndex()}">
                    {{ letter }}
                </p>
            </div>
        </div>

        <div class="images-space" />
    </div>
</template>

<script>
 import {
     playAudio,
     getLettersAudioUri
 } from '../assets/audio/player';

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

.letters-bar {
    width: 100%;
    height: var(--bar-size);
    background-color: var(--color-primary);
    box-shadow: 0 0 16px 0 black;
    z-index: 205;
    transition: height var(--transition-duration);
}

.main-space {
    width: 100%;
    height: calc(var(--alphabeth-dp) * 5);
    z-index: 201;
    transition: height var(--transition-duration);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.main-space>img {
    max-width: 0%;
    max-height: 0%;
}

.spell-bar {
    width: 100%;
    height: var(--bar-size);
    background-color: var(--color-primary);
    box-shadow: 0 0 4px 0 black;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    font-size: calc(var(--bar-size) * 0.5);
    color: white;
    font-weight: bold;
    z-index: 204;
    position: relative;
    transition: height var(--transition-duration), font-size var(--transition-duration);
}

.letters-wrapper {
    height: 100%;
    width: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}

.invisible-letter {
    color: transparent;
}

.floating-wrapper {
    position: absolute;
    top: calc(var(--alphabeth-dp) * -4 - var(--bar-size));
}

.desired-letter {
    font-size: calc(var(--alphabeth-dp) * 4);
    color: #777;
}

.unnecessary-letter {
    color: transparent;
    font-size: 0;
}

.animate-letters-checkbox {
    display: none;
    position: absolute;
}

.unnecessary-components-checkbox {
    display: none;
    position: absolute;
}

.pop-image-checkbox {
    display: none;
    position: absolute;
}

.images-space {
    width: 100%;
    height: calc(var(--alphabeth-dp) * 3);
    background-color: var(--color-primary-light);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    z-index: 202;
    transition: height var(--transition-duration);
}

@media screen and (orientation:landscape) {
    .main-space {
        height: calc(var(--alphabeth-dp) * 6);
    }

    .images-space {
        height: calc(var(--alphabeth-dp) * 2);
    }

    @media(max-height: 480px) {
        .letters-bar {
            height: calc(var(--bar-size) * 0.8);
        }

        .main-space {
            height: calc(var(--alphabeth-dp) * 6 + var(--bar-size) * 0.2);
        }

        .spell-bar {
            height: calc(var(--bar-size) * 0.5);
            font-size: calc(var(--bar-size) * 0.35);
        }

        .images-space {
            height: calc(var(--alphabeth-dp) * 2 + var(--bar-size) * 0.5);
        }
    }
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

.animate-letters-checkbox:not(:checked)~.floating-wrapper {
    animation: floating-wrapper-jump-in .5s ease;
}

.animate-letters-checkbox:checked~.floating-wrapper {
    top: 0;
    transition: top var(--letter-animation-time);
}

.animate-letters-checkbox:checked~.floating-wrapper>p {
    font-size: calc(var(--bar-size));
    transition: font-size var(--letter-animation-time), color var(--letter-animation-time);
}

.animate-letters-checkbox:checked~.floating-wrapper>.desired-letter {
    color: #fff;
}

@keyframes floating-wrapper-jump-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(2);
    }

    100% {
        transform: scale(1);
    }
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
