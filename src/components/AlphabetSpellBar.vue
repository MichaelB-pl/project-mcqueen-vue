<template>
<div class="app-bar alphabet__spell-bar noselect">
    <p v-if="imageIndex > -1" 
        @click="$emit('spellClicked')"
    >{{ getImageSpell() }}</p>
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
