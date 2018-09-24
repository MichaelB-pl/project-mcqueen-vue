<template>
<div class="main-menu">
    <ul class="main-menu__list">
        <MainMenuListItem 
            v-for="(page, index) in pages" 
            :key="index"
            :pagePath="page.path"
            :pageName="page.name.toUpperCase()"
        />
    </ul>
</div>
</template>

<script>
import MainMenuListItem from '../components/MainMenuListItem.vue';

export default {
    name: 'MainMenu',
    components: {
        MainMenuListItem
    },
    data() {
        return {
            pages
        };
    }
}

const pages = [
    pageConstructor('Alfabet', '/alphabet')
];

function pageConstructor(name, path) {
    return {
        name,
        path
    };
}
</script>

<style scoped>
.main-menu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.main-menu__list {
    width: 100%;
    height: 100vh;
    max-width: 480px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
}
</style>
