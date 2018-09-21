<template>
<div class="spell-bar noselect">
    <input class="animate-letters-checkbox" type="checkbox"
            :checked="isCurrentlyMovingNextLetter"/>

    <div class="letters-wrapper">
        <p v-for="(letter, index) in letters" :key="index" :class="{ 'invisible-letter': index > displayedNameLastLetterIndex }">
            {{ letter }}
        </p>
    </div>
    <div class="letters-wrapper floating-wrapper">
        <p v-for="(letter, index) in letters" :key="index" :class="{ 'unnecessary-letter': index != getNextLetterIndex(),  
                    'desired-letter': index == getNextLetterIndex()}">
            {{ letter }}
        </p>
    </div>
</div>
</template>

<script>
export default {
    name: 'AlphabetDialogSpellBar'
}
</script>

<style scoped>
.spell-bar {
    width: 100%;
    height: var(--bar-size);
    background-color: var(--color-primary);
    box-shadow: 0 0 4px 0 black;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    font-size: calc(var(--bar-size) * 0.5);
    color: white;
    font-weight: bold;
    z-index: 204;
    position: relative;
    transition: height var(--transition-duration), font-size var(--transition-duration);
}

.animate-letters-checkbox {
    display: none;
    position: absolute;
}

.letters-wrapper {
    height: 100%;
    width: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}

.floating-wrapper {
    position: absolute;
    top: calc(var(--alphabeth-dp) * -4 - var(--bar-size));
}

.unnecessary-letter {
    color: transparent;
    font-size: 0;
}

.desired-letter {
    font-size: calc(var(--alphabeth-dp) * 4);
    color: #777;
}

.animate-letters-checkbox:not(:checked)~.floating-wrapper {
    animation: floating-wrapper-jump-in .5s ease;
}

.animate-letters-checkbox:checked~.floating-wrapper {
    top: 0;
    transition: top var(--letter-animation-time);
}

.animate-letters-checkbox:checked~.floating-wrapper>p {
    font-size: calc(var(--bar-size));
    transition: font-size var(--letter-animation-time), color var(--letter-animation-time);
}

.animate-letters-checkbox:checked~.floating-wrapper>.desired-letter {
    color: #fff;
}

@media screen and (orientation:landscape) and(max-height: 480px) {

    .spell-bar {
        height: calc(var(--bar-size) * 0.5);
        font-size: calc(var(--bar-size) * 0.35);
    }
}

@keyframes floating-wrapper-jump-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(2);
    }

    100% {
        transform: scale(1);
    }
}
</style>
