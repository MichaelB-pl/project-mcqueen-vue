<template>
<div class="app-bar alphabet__spell-bar noselect">
    <p v-if="isSelectedAnyImage" 
        @click="onSpellClicked()"
    >{{ selectedImageName }}</p>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'AlphabetSpellBar',
    computed: {
        ...mapGetters([
            'isSelectedAnyImage',
            'selectedImageName'
        ])
    },
    methods: {
        onSpellClicked() {
            this.$store.commit('setSpellingState', true);
        }
    }
}
</script>
