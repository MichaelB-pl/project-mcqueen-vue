<template>
<div class="app-bar alphabet__letters-bar">
    <ul class="alphabet__letters-bar-list">
        <AlphabetLettersBarListItem  
            v-for="(letter, index) in letters" 
            :key="index" 
            :letter="letter"
            @click.native="onSelectAlphabetItem(index, letter)"/>
    </ul>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
    playAudio,
    getLettersAudioUri
} from '../assets/audio/player';

import AlphabetLettersBarListItem from './AlphabetLettersBarListItem.vue';

export default {
    name: 'AlphabetLettersBar',
    components: {
        AlphabetLettersBarListItem
    },
    computed: {
        ...mapGetters(['letters'])
    },
    methods:{
        onSelectAlphabetItem(index, letter){
            this.$store.commit('setAlphabetItemIndex', index);
            this.saySelectedLetter(letter);
        },
        saySelectedLetter(letter){
            const src = getLettersAudioUri(letter, letter);
            playAudio(src);
        }
    }
}
</script>

<style scoped>
.alphabet__letters-bar-list {
    width: var(--bar-size);
    height: 100vw;
    margin: calc(-50vw + var(--bar-size) / 2) 0 0 calc(50vw - var(--bar-size) / 2);
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    overflow-x: hidden;
    overflow-y: overlay;
    transform: rotate(-90deg);
    transition: width var(--transition-duration);
}

.alphabet__letters-bar-list:hover::-webkit-scrollbar {
    display: initial;
}

.alphabet__letters-bar-list::-webkit-scrollbar {
    width: calc(var(--bar-size) * 0.15);
    display: none;
}

.alphabet__letters-bar-list::-webkit-scrollbar-track {
    background: var(--scrollbar-track-background);
}

.alphabet__letters-bar-list::-webkit-scrollbar-track:hover {
    background: var(--scrollbar-track-background-hover);
}

.alphabet__letters-bar-list::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb-background);
}

.alphabet__letters-bar-list::-webkit-scrollbar-thumb:hover {
    background: var(--scrollbar-thumb-background-hover);
}

@media screen and (orientation:landscape) and (max-height: 480px) {
    .alphabet__letters-bar-list {
        width: calc(var(--bar-size) * 0.8);
        margin: calc(-50vw + var(--bar-size) / 2 * 0.8) 0 0 calc(50vw - var(--bar-size) / 2 * 0.8);
    }
}
</style>
