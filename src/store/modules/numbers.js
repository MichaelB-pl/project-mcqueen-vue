const numbersModule = {
    namespaced: true,
    state: {
        selectedNumberIndex: 0,
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    getters: {
        selectedNumber: state =>
            state.numbers[state.selectedNumberIndex]
    },
    mutations: {
        selectNumberIndex(state, index){
            state.selectedNumberIndex = index;
        }
    }
};

export default numbersModule;