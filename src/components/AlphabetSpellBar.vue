<template>
<div class="spell-bar noselect">
    <p v-if="imageIndex > -1" v-on:click="$emit('spellClicked')">
        {{ getImageSpell() }}
    </p>
</div>
</template>

<script>
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
</script>

<style scoped>
.spell-bar {
    width: 100%;
    height: var(--bar-size);
    background-color: var(--color-primary);
    z-index: 60;
    box-shadow: 0 0 4px 0 black;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    font-size: calc(var(--bar-size) * 0.5);
    color: white;
    font-weight: bold;
    transition: height var(--transition-duration), font-size var(--transition-duration);
}

@media screen and (orientation:landscape) and (max-height: 480px) {
    .spell-bar {
        height: calc(var(--bar-size) * 0.5);
        font-size: calc(var(--bar-size) * 0.35);
    }
}
</style>
