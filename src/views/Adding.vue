<template>
<div>
    <AddingQuestionSpace />
    <AddingAnswerBar />
</div>
</template>

<script>
import AddingQuestionSpace from '../components/AddingQuestionSpace.vue';
import AddingAnswerBar from '../components/AddingAnswerBar.vue';

export default {
    name: 'Adding',
    components: {
        AddingQuestionSpace,
        AddingAnswerBar
    }
}
</script>

<style scoped>

</style>
