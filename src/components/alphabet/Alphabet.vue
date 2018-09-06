<template>
<div class="alphabet">
    <LettersBar v-on:letterIndexChanged="onLetterIndexChanged($event)"/>
    <MainSpace v-bind:letterIndex="letterIndex"/>
</div>
</template>

<script src = "./alphabet.js" ></script>

<style scoped src="./alphabet.css"></style>
