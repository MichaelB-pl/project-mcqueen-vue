<template>
<div class="adding">
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
.adding{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
}
</style>
