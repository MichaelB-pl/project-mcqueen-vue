<template>
<div class="letters-bar">
    <ul class="letters-list">
        <li class="letter-item noselect" 
            v-for="(letter, index) in letters" 
            :key="index" 
            @click="$emit('letterIndexChanged',index)"
        >
            {{letter}}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'letters-bar',
    props: ['alphabet'],
    data() {
        const letters = this.alphabet.map(letter => letter.letter);
        return {
            letters
        };
    }
}
</script>

<style scoped>
 .letters-bar {
     width: 100%;
     height: var(--bar-size);
     background-color: var(--color-primary);
     box-shadow: 0 0 16px 0 black;
     display: block;
     font-size: calc(var(--bar-size) * 0.6);
 }

 .letters-list {
     width: var(--bar-size);
     height: 100vw;
     margin: calc(-50vw + var(--bar-size) / 2) 0 0 calc(50vw - var(--bar-size) / 2);
     padding: 0;
     display: flex;
     flex-flow: row wrap;
     justify-content: center;
     align-items: center;
     list-style: none;
     overflow-x: hidden;
     overflow-y: overlay;
     transform: rotate(-90deg);
     transition: width var(--transition-duration);
 }

 .letter-item {
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

 .letter-item:hover {
     background-color: #0002;
 }

 .letters-list:hover::-webkit-scrollbar {
     display: initial;
 }

 .letters-list::-webkit-scrollbar {
     width: calc(var(--bar-size) * 0.15);
     display: none;
 }

 .letters-list::-webkit-scrollbar-track {
     background: #0000;
 }

 .letters-list::-webkit-scrollbar-track:hover {
     background: #0002;
 }

 .letters-list::-webkit-scrollbar-thumb {
     background: #fff3;
 }

 .letters-list::-webkit-scrollbar-thumb:hover {
     background: #fffc;
 }

 @media screen and (orientation:landscape) and (max-height: 480px) {
     .letters-bar {
         height: calc(var(--bar-size) * 0.8);
         font-size: calc(var(--bar-size) * 0.48);
     }

     .letters-list {
         width: calc(var(--bar-size) * 0.8);
         margin: calc(-50vw + var(--bar-size) / 2 * 0.8) 0 0 calc(50vw - var(--bar-size) / 2 * 0.8);
     }
 }
</style>
