import getAlphabet from '../../models/alphabet/alphabet';

const alphabetModule = {
    state: {
        alphabet: getAlphabet(),
        alphabetItemIndex: 0,
        alphabetItemImageIndex: -1,
        isCurrentlySpelling: false
    },
    getters: {
        letters: state =>
            state.alphabet.map(alphabetItem => alphabetItem.letter),
        selectedAlphabetItem: state =>
            state.alphabet[state.alphabetItemIndex],
        selectedAlphabetItemLetter: (state, getters) =>
            getters.selectedAlphabetItem.letter,
        selectedAlphabetItemUris: (state, getters) =>
            getters.selectedAlphabetItem.uris,
        selectedImageUri: (state, getters) =>
            getters.selectedAlphabetItemUris[state.alphabetItemImageIndex],
        selectedImageName: (state, getters) =>
            getters.selectedAlphabetItem.names[state.alphabetItemImageIndex],
        isSelectedAnyImage: state =>
            state.alphabetItemImageIndex > -1,
        isCurrentlySpelling: state =>
            state.isCurrentlySpelling
    },
    mutations: {
        setAlphabetItemIndex(state, index) {
            state.alphabetItemImageIndex = -1;
            state.alphabetItemIndex = index;
        },
        setAlphabetItemImageIndex(state, index) {
            state.alphabetItemImageIndex = index;
        },
        setSpellingState(state, isSpelling) {
            state.isCurrentlySpelling = isSpelling;
        }
    },
    actions: {

    }
};

export default alphabetModule;