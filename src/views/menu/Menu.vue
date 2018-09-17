<template>
<div class="menu">
    <ul class="menu-list">
        <li class="menu-item" v-for="(page, index) in pages" :key="index">
            <a :href="'#' + page.path">
                {{ page.name.toUpperCase() }}
                </a>
        </li>
    </ul>
</div>
</template>

<script src="./menu.js"></script>

<style scoped src="./menu.css"></style>
