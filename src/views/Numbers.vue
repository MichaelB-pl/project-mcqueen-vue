<template>
<div>
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

</style>
