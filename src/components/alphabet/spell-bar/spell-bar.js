export default {
    name: 'spell-bar',
    props: ['alphabet', 'letterIndex', 'imageIndex'],
    methods: {
        getImageSpell() {
            const letter = this.alphabet[this.letterIndex];
            return letter.names[this.imageIndex];
        }
    }
}