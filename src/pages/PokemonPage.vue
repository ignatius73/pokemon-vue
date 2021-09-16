<template>
    <div>
        <h1 v-if="!pokemon">Cargando...</h1>
        <div v-else>
            <h1>¿Quién es este Pokémon?</h1>
                <pokemon-picture :pokemonId="pokemon.id" :showImage="showPokemon" />
                <pokemon-options 
                    :pokemons="pokemonArr"
                    @selection="checkAnswer" />

        </div>
        <div v-if="showPokemon">
            <h1 v-if="correcto">Felicidades, acertaste!</h1>
            <h1 v-if="!correcto">Vuelve a intentarlo!</h1>
        </div>    
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
            correcto: false
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
            console.log(id)
            this.showImage()
           id == this.pokemon.id ? this.correcto = true : this.correcto = false
          
        }
    }  ,
    mounted(){
        this.getPokemonArr()
    }  
    }
    
 
</script>

<style lang="scss" scoped>

</style>