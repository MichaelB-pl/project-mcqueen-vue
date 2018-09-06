import getAlphabet from '../models/alphabet';

export default {
    name: 'spell-bar',
    props: ['letterIndex', 'imageIndex'],
    methods:{
        getImageSpell(){
            const letter = getAlphabet()[this.letterIndex];
            return letter.names[this.imageIndex];
        }
    }
}