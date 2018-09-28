<template>
<div class="adding__puzzle-space">
    <transition-group name="items-adding">
        <AddingPuzzleSpaceItem 
            v-for="number in firstAddendNumbers" 
            :key="number" 
            :imgSource="'https://image.flaticon.com/icons/svg/415/415733.svg'"/>
        <div 
            v-if="!areAddendsSummed" 
            :key="'plus'"
            class="adding__puzzle-space-plus">+</div>
        <AddingPuzzleSpaceItem 
            v-for="number in secondAddendNumbers" 
            :key="number" 
            :imgSource="'https://image.flaticon.com/icons/svg/415/415767.svg'"/>
    </transition-group>
</div>
</template>

<script>
import {
    createNamespacedHelpers
} from 'vuex';
const {
    mapState,
    mapGetters,
    mapMutations
} = createNamespacedHelpers('adding');

import AddingPuzzleSpaceItem from './AddingPuzzleSpaceItem.vue';

export default {
    name: 'AddingPuzzleSpace',
    components: {
        AddingPuzzleSpaceItem
    },
    computed: {
        ...mapState([
            'areAddendsSummed'
        ]),
        ...mapGetters([
            'selectedNumbers',
            'firstAddendNumbers',
            'secondAddendNumbers'
        ])
    },
    mounted(state) {
        this.setNewPuzzle();
    },
    methods: {
        ...mapMutations([
            'setNewPuzzle'
        ])
    }
}
</script>

<style scoped>
.adding__puzzle-space {
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}

.adding__puzzle-space-plus {
    width: 100%;
    color: #0007;
    font-size: 32vmin;
    font-weight: bolder;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.adding__puzzle-space> span {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}

.items-adding-enter-active,
.items-adding-leave-active {
    transition: transform var(--transition-duration), opacity var(--transition-duration);
}
.items-adding-leave-active {
    position: absolute;
}
.items-adding-move {
    transition: transform var(--transition-duration), opacity var(--transition-duration);
}
.items-adding-enter,
.items-adding-leave-to {
    transform: scale(0.01);
    opacity: 0;
}

@media screen and (orientation:landscape) {}
</style>
