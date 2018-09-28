<template>
<div class="adding__puzzle-space-item">
    <img :src="imgSource"/>
</div>
</template>

<script>
export default {
    name: 'AddingPuzzleSpaceItem',
    props:{
        imgSource:{
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.adding__puzzle-space-item {
    width: 100px;
    height: 100px;
}

.adding__puzzle-space-item > img {
    max-width: 90%;
    max-height: 90%;
}
</style>
