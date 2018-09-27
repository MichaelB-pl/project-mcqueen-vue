<template>
<div class="numbers__main-space">
    <transition-group name="pop-image">
        <NumbersMainSpaceItem v-for="number in selectedNumber" :key="number" />
    </transition-group>

</div>
</template>

<script>
import {
    createNamespacedHelpers
} from 'vuex';

const {
    mapGetters
} = createNamespacedHelpers('numbers');

import NumbersMainSpaceItem from './NumbersMainSpaceItem.vue';

export default {
    name: 'NumbersMainSpace',
    components: {
        NumbersMainSpaceItem
    },
    computed: {
        ...mapGetters([
            'selectedNumber'
        ]),
    }
}
</script>

<style lang="scss" scoped>
.numbers__main-space {
        width: 100%;
        height: calc(100% - var(--bar-size));
        z-index: 1;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;

    span {
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
    }
}

.pop-image-enter-active,
.pop-image-leave-active {
    transition: transform var(--transition-duration), opacity var(--transition-duration);
}

.pop-image-leave-active {
    position: absolute;
}

.pop-image-move {
    transition: transform var(--transition-duration), opacity var(--transition-duration);
}

.pop-image-enter,
.pop-image-leave-to {
    transform: scale(0.01);
    opacity: 0;
}
</style>
