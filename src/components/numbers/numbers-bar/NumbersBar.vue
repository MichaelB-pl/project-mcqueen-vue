<template>
<div class="numbers-bar">
    <div class="number-item noselect" v-for="(number, index) in numbers" :key="index">
        {{ number }}
    </div>
</div>
</template>

<script src="./numbers-bar.js"> </script>

<style scoped src="./numbers-bar.css"> </style>
