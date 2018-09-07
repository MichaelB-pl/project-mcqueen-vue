export default {
    name: 'letters-bar',
    props: ['alphabet'],
    data() {
        const letters = this.alphabet.map(letter => letter.letter);
        return {
            letters
        };
    }
}