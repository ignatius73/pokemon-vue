<template>
    <div>
        <div class="pokemon-container">
        <img class='hidden-pokemon' :src="imgSrc" alt="pokemon" @change="showIg" />
        <img v-if="showImage" class='fade-in' :src="imgSrc" alt="pokemon"/>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            pokemonId:{
                type:Number,
                required:true
            },
            showImage:{
                type:Boolean,
                required:true,
                default:false

            }


        },
        methods:{
            showPokemon(){
                visible=true
            }
        },
        computed:{
            imgSrc(){
                return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
            },
            showIg(){
                setTimeout( ()=>{
                    this.showPokemon()
                },3000)
            }
        }
    }
</script>

<style lang="css" scoped>
.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    right: 40%;
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