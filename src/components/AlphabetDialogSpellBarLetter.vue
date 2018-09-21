<template>
<p class="alphabet__dialog-spell-bar-letter">
    {{ letter }}
</p>
</template>

<script>
export default {
    name: 'AlphabetDialogSpellBarLetter',
    props: {
        letter: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.alphabet__dialog-spell-bar-letter {
    margin: 0 -0.4em 0 0;
}
</style>
