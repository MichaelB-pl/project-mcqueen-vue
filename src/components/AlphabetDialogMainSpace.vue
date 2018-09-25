<template>
<div :class="['alphabet__main-space', 
        areUnnecessaryComponentsVisible ? '' : 'alphabet__dialog-main-space']">
    <transition name="pop-image">
        <img
        v-if="isImageVisible"
        :src="imageUri"
        />
    </transition>
</div>
</template>

<script>
import {
    playAudio,
    getLettersAudioUri
} from '../assets/audio/player';
import { mapGetters } from 'vuex';

export default {
    name: 'AlphabetDialogMainSpace',
    props: {
        areUnnecessaryComponentsVisible: {
            type: Boolean,
            required: true
        },
        isImageVisible: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        ...mapGetters({
            imageUri: 'selectedImageUri',
            letter: 'selectedAlphabetItemLetter',
            imageName: 'selectedImageName'
        })
    },
    watch: {
        isImageVisible(val, oldVal) {
            if (val && val != oldVal) {
                const imageUri = getLettersAudioUri(this.letter, this.imageName);
                playAudio(imageUri);
            }
        }
    }
}
</script>

<style scoped>
.alphabet__dialog-main-space {
    height: calc(100% - var(--bar-size));
}

@media screen and (orientation:landscape) and (max-height: 480px) {
    .alphabet__dialog-main-space {
        height: calc(100% - var(--bar-size) * 0.5);
    }
}

.pop-image-enter-active {
    animation: pop-image-animation var(--transition-duration-long);
}

@keyframes pop-image-animation {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.15);
    }

    100% {
        transform: scale(1);
    }
}
</style>
