<template>
    <div>
        <h1>¿Quién es este Pokémon?</h1>

        <pokemon-picture :pokemonId='4' :showImage="false" />
        <pokemon-options/>
        <!-- Opciones -->
    </div>
</template>

<script>

import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

console.log( getPokemonOptions() )

    export default {
  components: { 
      PokemonOptions,
      PokemonPicture },
        
    }
</script>

<style lang="scss" scoped>

</style>