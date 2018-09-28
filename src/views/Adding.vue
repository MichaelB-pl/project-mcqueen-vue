<template>
<div>
    <AddingPuzzleSpace />
    <AddingAnswerBar />
</div>
</template>

<script>
import AddingPuzzleSpace from '../components/AddingPuzzleSpace.vue';
import AddingAnswerBar from '../components/AddingAnswerBar.vue';

export default {
    name: 'Adding',
    components: {
        AddingPuzzleSpace,
        AddingAnswerBar
    }
}
</script>

<style scoped>

</style>
