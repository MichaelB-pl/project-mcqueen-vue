<template>
<div class="app-bar alphabet__letters-bar">
    <ul class="alphabet__letters-bar-list">
        <AlphabetLettersBarListItem  
            v-for="(letter, index) in letters" 
            :key="index" 
            :letter="letter"
            @click.native="$emit('letterIndexChanged', index)"/>
    </ul>
</div>
</template>

<script>
import AlphabetLettersBarListItem from './AlphabetLettersBarListItem.vue';

export default {
    name: 'AlphabetLettersBar',
    components: {
        AlphabetLettersBarListItem
    },
    props: {
        letters: {
            type: Array,
            required: true
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
    background: #0000;
}

.alphabet__letters-bar-list::-webkit-scrollbar-track:hover {
    background: #0002;
}

.alphabet__letters-bar-list::-webkit-scrollbar-thumb {
    background: #fff3;
}

.alphabet__letters-bar-list::-webkit-scrollbar-thumb:hover {
    background: #fffc;
}

@media screen and (orientation:landscape) and (max-height: 480px) {
    .alphabet__letters-bar-list {
        width: calc(var(--bar-size) * 0.8);
        margin: calc(-50vw + var(--bar-size) / 2 * 0.8) 0 0 calc(50vw - var(--bar-size) / 2 * 0.8);
    }
}
</style>
