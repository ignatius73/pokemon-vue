<template>
    <div>
        <div class="options-container">
        <ul>
            <li v-for="p in pokemons" :key="p.id" @click="$emit('selection', p.id)"> {{ p.name }}</li>
        </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            pokemons:{
            type: Array,
            required:true
            }
        }

    }
</script>

<style lang="css" scoped>
.pokemon-container {
    display:flex;
    align-content: center;
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    right: 50%;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}

/* Pokemon Options */
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>