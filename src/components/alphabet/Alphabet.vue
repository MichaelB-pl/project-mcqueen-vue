<template>
<div class="alphabet">
    <LettersBar v-on:letterIndexChanged="onLetterIndexChanged($event)"
        v-bind:alphabet="alphabet" />

    <MainSpace v-bind:alphabet="alphabet"
        v-bind:letterIndex="letterIndex"
        v-bind:imageIndex="imageIndex" 
        v-on:selectedImageClicked="onSelectedImageClicked()"
        v-on:backgroundLetterClicked="onBackgroundLetterClicked()" />

    <SpellBar v-bind:alphabet="alphabet"
        v-bind:letterIndex="letterIndex"
        v-bind:imageIndex="imageIndex" />

    <ImagesSpace v-bind:alphabet="alphabet"
        v-bind:letterIndex="letterIndex"
        v-on:imageSelected="onImageSelected($event)"/>
</div>
</template>

<script src = "./alphabet.js" ></script>

<style scoped src="./alphabet.css"></style>
