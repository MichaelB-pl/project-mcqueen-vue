<template>
<div class="app-bar numbers__count-bar noselect">
    <div v-for="number in numbersLowerAndEquealThanSelected" 
        :key="number"
        :class="'numbers__count-bar-item'"
        @click="onSelectedNumber(number)"
        >{{ number }}
    </div>
    
    <div v-for="number in numbersHigherThanSelected" 
        :key="number"
        :class="'numbers__count-bar-item numbers__count-bar-item-not-selected'"
        @click="onSelectedNumber(number)"
        >{{ number }}
    </div>
</div>
</template>

<script>
import {
    createNamespacedHelpers, mapActions
} from 'vuex';

const {
    mapState,
    mapGetters,
    mapMutations
} = createNamespacedHelpers('numbers');

export default {
    name: 'NumbersCountBar',
    computed: {
        numbersLowerAndEquealThanSelected(state) {
            return state.numbers.filter(number =>
                number <= state.selectedNumber);
        },
        numbersHigherThanSelected(state) {
            return state.numbers.filter(number =>
                number > state.selectedNumber);
        },
        ...mapState([
            'numbers'
        ]),
        ...mapGetters([
            'selectedNumber'
        ]),
    },
    methods: {
        onSelectedNumber(number) {
            const index =number - 1;
            this.selectNumberIndex(index);
        },
        ...mapMutations([
            'selectNumberIndex'
        ])
    }
}
</script>

<style scoped>
.numbers__count-bar {
    box-shadow: 0 0 16px 0 black;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
}

.numbers__count-bar-item {
    font-size: 2em;
    font-weight: bolder;
}

.numbers__count-bar-item-not-selected {
    color: #fff7;
}

@media(max-width: 480px){
    .numbers__count-bar-item {
        font-size: 1.5em;
    }
}
</style>
