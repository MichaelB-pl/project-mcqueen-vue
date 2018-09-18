export default {
    name: 'images-space',
    props: ['selectedNumber'],
    mounted(){
        console.log('selectedNumber');
        console.log(this.selectedNumber);
    }
}