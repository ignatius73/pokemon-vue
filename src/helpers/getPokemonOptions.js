const getPokemons = () =>{
    const pokemonArr = Array.from(Array(650));
    return pokemonArr.map( ( _, index ) => index + 1 );
    /*console.log(pokemonArr)*/
};

const getPokemonOptions = () => {
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5);
    return getPokemonNames(mixedPokemons.splice(0,4));

};

const getPokemonNames = ( pokemon=[] ) => {
    console.log(pokemon);
    
    
};


export default getPokemonOptions;