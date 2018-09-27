<template>
<div class="app-bar numbers__count-bar noselect">
    <div v-for="number in numbersLowerThanSelected" 
        :key="number"
        :class="'numbers__count-bar-item'"
        @click="onNumberSelected(number)"
        >{{ number }}
    </div>
    
    <div :key="selectedNumber"
        :class="'numbers__count-bar-item numbers__count-bar-item-selected'"
        @click="onNumberSelected(selectedNumber)"
        >{{ selectedNumber }}
    </div>

    <div v-for="number in numbersHigherThanSelected" 
        :key="number"
        :class="'numbers__count-bar-item numbers__count-bar-item-not-selected'"
        @click="onNumberSelected(number)"
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
        numbersLowerThanSelected(state) {
            return state.numbers.filter(number =>
                number < state.selectedNumber);
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
        onNumberSelected(number) {
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
    font-size: 1.8em;
    font-weight: bolder;
    transition: color var(--transition-duration), font-size var(--transition-duration);
    color: #fffc;
}

.numbers__count-bar-item-selected {
    font-size: 2.8em;
    color: white;
}

.numbers__count-bar-item-not-selected {
    color: #fff5;
}

@media(max-width: 480px){
    .numbers__count-bar-item {
        font-size: 1.5em;
    }

.numbers__count-bar-item-selected {
    font-size: 2.5em;
}
}
</style>
