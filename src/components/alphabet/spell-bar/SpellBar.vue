<template>
<div class="spell-bar noselect">
    <p v-if="imageIndex > -1" v-on:click="$emit('spellClicked')">
        {{ getImageSpell() }}
    </p>
</div>
</template>

<script src="./spell-bar.js"> </script>

<style scoped src="./spell-bar.css"> </style>
