const addingModule = {
    namespaced: true,
    state: {
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        numbersRangeIndex: 5,
        firstAddendRangeIndex: 2,
        areAddendsSummed: false,

    },
    getters: {
        selectedNumbers: state =>
            state.numbers.slice(0, state.numbersRangeIndex),
        firstAddendNumbers: state =>
            state.numbers.slice(0, state.firstAddendRangeIndex),
        secondAddendNumbers: state =>
            state.numbers.slice(state.firstAddendRangeIndex, state.numbersRangeIndex),
    },
    mutations: {
        setNewPuzzle(state) {
            state.numbersRangeIndex = Math.floor(Math.random() *
                (state.numbers.length - 2)) + 2;

            state.firstAddendRangeIndex = Math.floor(Math.random() *
                (state.numbersRangeIndex - 1)) + 1;
        },

        mergeAddends(state) {
            //todo: change
            state.areAddendsSummed = !state.areAddendsSummed;
        }
    }
};

export default addingModule;