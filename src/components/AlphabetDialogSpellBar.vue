<template>
<div class="app-bar alphabet__spell-bar noselect">
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
.alphabet__spell-bar>div {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
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
        color: gray;
    }

    12.5% {
        transform: scale(10);
    }

    25% {
        transform: scale(5);
    }

    50% {
        margin-top: -50vh;
        color: gray;
        transform: scale(5);
    }

    100% {
        margin-top: 0;
        color: white;
        transform: scale(1);
    }
}
</style>
