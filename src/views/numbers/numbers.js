import NumbersBar from '../../components/numbers/numbers-bar/NumbersBar.vue';
import ImagesSpace from '../../components/numbers/images-space/ImagesSpace.vue';

export default {
    name: 'numbers',
    components: {
        NumbersBar,
        ImagesSpace
    },
    data() {
        return {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            selectedIndex: 0
        }
    },
    methods: {
        getSelectedNumber() {
            return this.numbers[this.selectedIndex];
        },

        onNumberSelected(index) {
            this.selectedIndex = index;
        }
    }
}