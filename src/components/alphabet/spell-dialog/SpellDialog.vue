<template>
    <div class="spell-dialog">
        <input class="unnecessary-components-checkbox" type="checkbox" 
            v-bind:checked="areUnnecessaryComponentsVisible"/>
        <input class="pop-image-checkbox" type="checkbox" 
            v-bind:checked="isCurrentlyPopingImage"/>

        <div class="letters-bar" />

        <div class="main-space">
            <img v-bind:src="getSelectedImageUri()"/>
        </div>

        <div class="spell-bar noselect">
            <input class="animate-letters-checkbox" type="checkbox" 
                v-bind:checked="isCurrentlyMovingNextLetter"/>

            <div class="letters-wrapper">
                <p v-for="(letter, index) in letters" :key="index"
                    v-bind:class="{ 'invisible-letter': index > displayedNameLastLetterIndex }">
                    {{ letter }}
                </p>
            </div>
            <div class="letters-wrapper floating-wrapper">
                <p v-for="(letter, index) in letters" :key="index"
                    v-bind:class="{ 'unnecessary-letter': index != getNextLetterIndex(),  
                        'desired-letter': index == getNextLetterIndex()}">
                    {{ letter }}
                </p>
            </div>
        </div>

        <div class="images-space" />
    </div>
</template>

<script src="./spell-dialog.js"> </script>

<style scoped src="./spell-dialog.css"> </style>
