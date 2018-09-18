<template>
<div class="images-space">
    <transition-group name="image" class="bla">
        <div class="image-div" v-for="n in selectedNumber" :key="n">
            <img src="https://image.flaticon.com/icons/svg/135/135706.svg"/>
        </div>
    </transition-group>
</div>
</template>

<script src="./images-space.js"> </script>

<style scoped src="./images-space.css"> </style>
