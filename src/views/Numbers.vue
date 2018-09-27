<template>
<div class="numbers">
    <NumbersCountBar />
    <NumbersMainSpace />
</div>
</template>

<script>
import NumbersCountBar from '../components/NumbersCountBar.vue';
import NumbersMainSpace from '../components/NumbersMainSpace.vue';

export default {
    name: 'Numbers',
    components: {
        NumbersCountBar,
        NumbersMainSpace
    }
}
</script>

<style>
.numbers {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    
}
</style>
