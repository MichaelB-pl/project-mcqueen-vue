<template>
<div class="app-bar alphabet__spell-bar noselect">
    <p v-if="isSelectedAnyImage" 
        @click="$emit('spellClicked')"
    >{{ getImageSpell }}</p>
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
    computed: {
        isSelectedAnyImage() {
            return this.imageIndex > -1;
        },

        getImageSpell() {
            return this.alphabetItem.names[this.imageIndex];
        }
    }
}
</script>
