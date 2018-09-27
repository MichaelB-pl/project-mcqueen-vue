<template>
<div class="numbers__main-space-item">
    <img src="https://image.flaticon.com/icons/svg/135/135706.svg"/>
</div>
</template>

<script>
export default {
    name: 'NumbersMainSpace'
}
</script>

<style lang="scss" scoped>
:root {
    --screen-ratio: 1vmax / 1vmin;
    --items-count-in-line: 2;
    --item-size: calc((100vmin - var(--bar-size)) / var(--items-count-in-line));
    --lines-count: 5;
    --line-basis: calc((100vmax - var(--bar-size)) / var(--lines-count));
    --item-flex-basis: calc(var(--line-basis));
}

.numbers__main-space-item {
    flex-basis: var(--item-flex-basis);
    width: var(--item-flex-basis);
    height: var(--item-flex-basis);
    display: flex;
    flex-flow: column norap;
    justify-content: center;
    align-items: center;

    img {
        max-width: 90%;
        max-height: 90%;
    }
}
</style>
