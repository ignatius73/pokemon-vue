<template>
    <div class='pokebola-container' v-if="!playing">
        <h1>Presiona la Pokebola para comenzar</h1>
        <a v-on:click.stop.prevent="nuevoJuego" href="#"><img src="../assets/pokeball.png" class="pokebola" alt="pokebola" /></a>
    </div>
    <div v-if="playing">
        <h1 v-if="!pokemon">Cargando...</h1>
        <div v-else>
            <h1>¿Quién es este Pokémon?</h1>
                <pokemon-picture :pokemonId="pokemon.id" :showImage="showPokemon" />
                <pokemon-options 
                    :pokemons="pokemonArr"
                    @selection="checkAnswer" />
            
        </div>
        
        <template v-if="showPokemon">
            <h1 v-if="correcto">Felicidades, acertaste!</h1>
            <h1 v-if="!correcto">Vuelve a intentarlo!</h1>

            

            <button @click="nuevoJuego">Nuevo Juego</button>
        </template>    
        <!-- Opciones -->
    </div>
</template>

<script>

import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'



    export default {
    components: { 
        PokemonOptions,
        PokemonPicture 
        },
    data(){
        return{
            pokemonArr: [],
            pokemon: null,
            showPokemon:false,
            correcto: false,
            playing: false,
            lifes: 3
            
        }
    },
    methods:{
        async getPokemonArr(){
            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor( Math.random() * 4)
            this.pokemon = this.pokemonArr[rndInt]
            
        },
        showImage(){
            this.showPokemon = true
        },
        checkAnswer(id){
            this.showImage()
            id == this.pokemon.id ? this.correcto = true : this.correcto = false
             
        },
        nuevoJuego(){
            
            this.pokemonArr= [],
            this.pokemon= null,
            this.showPokemon=false,
            this.correcto= false,
            this.playing= false,
            this.getPokemonArr(),
            this.playing=true
        }
    },
    mounted(){
        this.getPokemonArr()
    }
   
    }
    
 
</script>

<style lang="css" scoped>
    
    .pokebola-container{
        height:90vh;
        width:100vw;
        align-items: center;
    }
    .pokebola{
       
        width:30vw;
    }
    .hidden-pokemon {
        display:none;
        filter:brightness(0);
}
    .pokebolach{
        width:10vw
    }
</style>