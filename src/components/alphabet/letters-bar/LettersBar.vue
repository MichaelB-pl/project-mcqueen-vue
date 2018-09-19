<template>
    <div class="letters-bar">
        <ul class="letters-list">
            <li class="letter-item noselect" v-for="(letter, index) in letters" 
            :key="index" 
            v-on:click="$emit('letterIndexChanged',index)">
                {{letter}}
            </li>
        </ul>
    </div>
</template>


<script src="./letters-bar.js"> </script>

<style scoped src="./letters-bar.css"> </style>
