<template>
<div class="alphabet">
    <AlphabetLettersBar />

    <AlphabetMainSpace />

    <AlphabetSpellBar />

    <AlphabetImagesSpace />

    <AlphabetDialog v-if="isCurrentlySpelling" />    
</div>
</template>

<script>
import AlphabetLettersBar from '../components/AlphabetLettersBar.vue';
import AlphabetMainSpace from '../components/AlphabetMainSpace.vue';
import AlphabetSpellBar from '../components/AlphabetSpellBar.vue';
import AlphabetImagesSpace from '../components/AlphabetImagesSpace.vue';
import AlphabetDialog from '../components/AlphabetDialog.vue';

import { mapGetters } from 'vuex';
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
    computed: {
        ...mapGetters([
            'isCurrentlySpelling'
        ])
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

.alphabet__letters-bar {
    box-shadow: 0 0 16px 0 black;
    display: block;
    font-size: calc(var(--bar-size) * 0.6);
    transition: height var(--transition-duration), font-size var(--transition-duration);
    z-index: 100;
}

.alphabet__main-space {
    width: 100%;
    height: calc(var(--alphabeth-dp) * 5);
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    transition: height var(--transition-duration);
    z-index: 1;
}

.alphabet__main-space>img {
    max-width: 90%;
    max-height: 90%;
}

.alphabet__spell-bar {
    box-shadow: 0 0 4px 0 black;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    font-size: calc(var(--bar-size) * 0.5);
    font-weight: bold;
    transition: height var(--transition-duration), font-size var(--transition-duration);
    z-index: 75;
    position: relative;
}

.alphabet__images-space {
    width: 100%;
    height: calc(var(--alphabeth-dp) * 3);
    background-color: var(--color-primary-light);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    transition: height var(--transition-duration);
    z-index: 50;
}

@media screen and (orientation:landscape) {
    .alphabet__main-space {
        height: calc(var(--alphabeth-dp) * 6);
    }

    .alphabet__images-space {
        height: calc(var(--alphabeth-dp) * 2);
    }

    @media(max-height: 480px) {
        .alphabet__letters-bar {
            height: calc(var(--bar-size) * 0.8);
            font-size: calc(var(--bar-size) * 0.48);
        }

        .alphabet__main-space {
            height: calc(var(--alphabeth-dp) * 6 + var(--bar-size) * 0.2);
        }

        .alphabet__spell-bar {
            height: calc(var(--bar-size) * 0.5);
            font-size: calc(var(--bar-size) * 0.35);
        }

        .alphabet__images-space {
            height: calc(var(--alphabeth-dp) * 2 + var(--bar-size) * 0.5);
        }
    }
}
</style>
