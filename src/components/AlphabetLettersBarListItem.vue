<template>
<li class="alphabet__letters-bar-list-item noselect"
>{{ letter }}</li>
</template>

<script>
export default {
    name: 'AlphabetLettersBarListItem',
    props: {
        letter: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.alphabet__letters-bar-list-item {
    width: var(--bar-size);
    height: var(--bar-size);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    transform: rotate(90deg);
    color: white;
    cursor: pointer;
}

.alphabet__letters-bar-list-item:hover {
    background-color: #0002;
}
</style>
