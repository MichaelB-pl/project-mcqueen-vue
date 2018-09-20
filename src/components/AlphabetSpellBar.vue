<template>
<div class="alphabet__spell-bar noselect">
    <p v-if="imageIndex > -1" 
        @click="$emit('spellClicked')"
    >
        {{ getImageSpell() }}
    </p>
</div>
</template>

<script>
import AlphabetItem from '../models/alphabet/alphabet-item';

export default {
    name: 'AlphabetSpellBar',
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
    methods: {
        getImageSpell() {
            return this.alphabetItem.names[this.imageIndex];
        }
    }
}
</script>

<style scoped>
.alphabet__spell-bar {
    width: 100%;
    height: var(--bar-size);
    background-color: var(--color-primary);
    z-index: 60;
    box-shadow: 0 0 4px 0 black;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    font-size: calc(var(--bar-size) * 0.5);
    color: white;
    font-weight: bold;
    transition: height var(--transition-duration), font-size var(--transition-duration);
}

@media screen and (orientation:landscape) and (max-height: 480px) {
    .alphabet__spell-bar {
        height: calc(var(--bar-size) * 0.5);
        font-size: calc(var(--bar-size) * 0.35);
    }
}
</style>
