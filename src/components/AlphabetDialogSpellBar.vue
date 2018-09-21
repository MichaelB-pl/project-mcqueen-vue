<template>
<div class="alphabet__dialog-spell-bar noselect">
    <transition-group name="pop-letter" tag="div">
        <AlphabetDialogSpellBarLetter v-for="(letter, index) in letters" :key="index" :letter="letter" />
    </transition-group>
</div>
</template>

<script>
import AlphabetDialogSpellBarLetter from './AlphabetDialogSpellBarLetter.vue';

export default {
    name: 'AlphabetDialogSpellBar',
    components: {
        AlphabetDialogSpellBarLetter
    },
    props: {
        letters: {
            type: Array,
            required: true
        }
    },
}
</script>

<style scoped>
.alphabet__dialog-spell-bar {
    width: 100%;
    height: var(--bar-size);
    background-color: var(--color-primary);
    box-shadow: 0 0 4px 0 black;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    font-size: calc(var(--bar-size) * 0.5);
    color: white;
    font-weight: bold;
    z-index: 204;
    /* transition: height var(--transition-duration), font-size var(--transition-duration); */
}

.alphabet__dialog-spell-bar>div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}

@media screen and (orientation:landscape) and(max-height: 480px) {

    .alphabet__dialog-spell-bar {
        height: calc(var(--bar-size) * 0.5);
        font-size: calc(var(--bar-size) * 0.35);
    }
}

.pop-letter-enter-active {
    animation: pop-letter-animation 2s;
}

.pop-letter-move {
    transition: transform .3s;
    transition-delay: 1s;
}

@keyframes pop-letter-animation {
    0% {
        margin-top: -50vh;
        transform: scale(0);
    }

    12.5% {
        transform: scale(2);
    }

    25%{
        transform: scale(1);
    }

    50% {
        margin-top: -50vh;
    }

    100% {
        margin-top: 0;
    }
}
</style>
