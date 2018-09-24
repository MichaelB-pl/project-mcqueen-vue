<template>
<p>{{ letter }}</p>
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
