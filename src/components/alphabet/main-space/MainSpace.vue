<template>
    <div class="main-space">
        <div class="background-letter noselect" v-if="imageIndex == -1">
            {{ getDisplayedLetter() }}
        </div>

        <img v-bind:src="getSelectedImageUri()"
            v-on:click="$emit('selectedImageClicked')"/>
    </div>
</template>


<script src="./main-space.js"> </script>

<style scoped src="./main-space.css"> </style>

