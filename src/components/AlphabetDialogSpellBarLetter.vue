<template>
<p class="alphabet__dialog-spell-bar-letter"
>{{ letter }}</p>
</template>

<script>
import {
    playAudio,
    getLettersAudioUri
} from '../assets/audio/player';

export default {
    name: 'AlphabetDialogSpellBarLetter',
    props: {
        letter: {
            type: String,
            required: true
        }
    },
    mounted() {
        const audioUri = getLettersAudioUri(this.letter, this.letter);
        playAudio(audioUri);
    }
}
</script>

<style scoped>
.alphabet__dialog-spell-bar-letter {
    margin: 0;
}
</style>
