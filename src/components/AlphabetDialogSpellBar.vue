<template>
<div class="app-bar alphabet__spell-bar noselect">
    <transition-group name="pop-letter" tag="div">
        <AlphabetDialogSpellBarLetter 
            v-for="(letter, index) in letters" 
            :key="index" 
            :letter="letter" 
        />
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
:root {
    --letter-pop-duration: 2s;
}

.alphabet__spell-bar>div {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}

.pop-letter-enter-active {
    animation: pop-letter-animation var(--letter-pop-duration);
}

.pop-letter-move {
    transition: transform var(--transition-duration);
    transition-delay: calc(var(--letter-pop-duration) / 2);
}

@keyframes pop-letter-animation {
    0% {
        position: relative;
        top: -50vh;
        left: -50%;
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
        top: -50vh;
        left: -50%;
        color: gray;
        transform: scale(5);
    }

    100% {
        top: 0;
        left: 0;
        color: white;
        transform: scale(1);
        position: relative;
    }
}
</style>
