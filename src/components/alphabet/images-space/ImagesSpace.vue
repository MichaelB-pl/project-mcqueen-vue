<template>
    <div class="images-space">
        <div class="image-item" v-for="(uri, index) in getImagesUri()"
            :key="index"
            v-on:click="$emit('imageSelected', index)">
            <img v-bind:src="uri"/>
        </div>
    </div>
</template>

<script src="./images-space.js"> </script>

<style scoped src="./images-space.css"> </style>