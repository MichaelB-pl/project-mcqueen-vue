<template>
<li class="main-menu__list-item">
    <a :href="pagePath">{{ pageName }}</a>
</li>
</template>

<script>
export default {
    name: 'MainMenuListItem',
    props: {
        pagePath: {
            type: String,
            required: true
        },
        pageName: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.main-menu__list-item {
    width: calc(100% - 2* var(--spacing-big));
    height: auto;
    margin: var(--spacing-big);
    background-color: var(--color-primary);
    border-radius: var(--spacing);
    box-shadow: 0 4px 16px -2px black;
    list-style: none;
    transition: var(--transition-duration);
}

.main-menu__list-item a {
    width: calc(100% - 2* var(--spacing));
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: white;
    padding: var(--spacing-big) var(--spacing);
    text-decoration: none;
    font-size: 2em;
}

@media(max-width: 360px) {
    .main-menu__list-item {
        width: 100%;
        margin: var(--spacing) 0;
        border-radius: 0;
        box-shadow: 0 1px 4px 0 black;
    }
}
</style>
