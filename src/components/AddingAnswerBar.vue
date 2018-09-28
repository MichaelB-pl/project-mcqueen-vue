<template>
<div class="app-bar adding__answer-bar">
    <button @click="mergeAddends">Next</button>
</div>
</template>

<script>
import {
    createNamespacedHelpers
} from 'vuex';
const {
    mapMutations
} = createNamespacedHelpers('adding');

export default {
    name: 'AddingAnswerBar',
    methods: {
        ...mapMutations([
            'setNewPuzzle',
            'mergeAddends'
        ])
    },
}
</script>

<style scoped>
.adding__answer-bar {
    box-shadow: 0 0 16px 0 black;
    z-index: 100;
}
</style>
