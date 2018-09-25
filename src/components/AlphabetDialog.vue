<template>
<transition name="dialog-fading">
    <div class="alphabet__dialog">
        <transition name="unnecessary-component">
            <AlphabetDialogLettersBar v-if="areUnnecessaryComponentsVisible" />
        </transition>

        <AlphabetDialogMainSpace 
            :areUnnecessaryComponentsVisible="areUnnecessaryComponentsVisible"
            :isImageVisible="isImageVisible"
        />

        <AlphabetDialogSpellBar :letters="currentlyDisplayedLetters"/>

        <transition name="unnecessary-component">
            <AlphabetDialogImagesSpace v-if="areUnnecessaryComponentsVisible" />
        </transition>
    </div>
</transition>
</template>

<script>
import AlphabetDialogLettersBar from './AlphabetDialogLettersBar.vue';
import AlphabetDialogMainSpace from './AlphabetDialogMainSpace.vue';
import AlphabetDialogSpellBar from './AlphabetDialogSpellBar.vue';
import AlphabetDialogImagesSpace from './AlphabetDialogImagesSpace.vue';

export default {
    name: 'AlphabetDialog',
    components: {
        AlphabetDialogLettersBar,
        AlphabetDialogMainSpace,
        AlphabetDialogSpellBar,
        AlphabetDialogImagesSpace
    },
    data() {
        return {
            lastLetterIndex: -1,
            areUnnecessaryComponentsVisible: true,
            isImageVisible: false
        };
    },
    computed: {
        imageNameLetters() {
            return this.$store.getters.selectedImageName.split('');
        },

        currentlyDisplayedLetters() {
            return this.lastLetterIndex >= 0 ?
                this.imageNameLetters.slice(0, this.lastLetterIndex + 1) : [];
        }
    },
    mounted() {
        this.startSpelling()
    },
    methods: {
        async startSpelling() {
            await this.hideUnnecessaryComponents();
            await this.spellWord();
            await this.showImage();
            await this.showUnnecessaryComponents();
            this.closePopup();
        },

        async hideUnnecessaryComponents() {
            await this.sleep(300);
            this.areUnnecessaryComponentsVisible = false;
            await this.sleep(300);
        },

        async sleep(timeout) {
            return new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, timeout));
        },

        async spellWord() {
            const letters = this.imageNameLetters;
            for (let i = 0; i < letters.length; i++) {
                this.lastLetterIndex = i;
                await this.sleep(2000);
            }
        },

        async showImage() {
            this.isImageVisible = true;
            await this.sleep(1000);
        },

        async showUnnecessaryComponents() {
            this.areUnnecessaryComponentsVisible = true;
            await this.sleep(300);
        },

        closePopup() {
            this.$store.commit('setSpellingState', false);
        }
    }
}
</script>

<style scoped>
.alphabet__dialog {
    width: 100vw;
    height: 100vh;
    background-color: var(--color-primary-extra-light);
    position: absolute;
    z-index: 200;
    overflow: hidden;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: stretch;
    transition: height var(--transition-duration);
}

.dialog-fading-enter-active,
.dialog-fading-leave-active {
    transition: opacity var(--transition-duration);
}

.dialog-fading-enter,
.dialog-fading-leave-to {
    opacity: 0;
}

.unnecessary-component-enter-active,
.unnecessary-component-leave-active {
    transition: height var(--transition-duration);
}

.unnecessary-component-enter,
.unnecessary-component-leave-to {
    height: 0;
}
</style>
