<template>
<div class="numbers">
    <NumbersBar :numbers="numbers" v-on:numberSelected="onNumberSelected($event)" />
    <ImagesSpace :selectedNumber="getSelectedNumber()" />
</div>
</template>

<script src="./numbers.js"> </script>

<style scoped src="./numbers.css"> </style>
