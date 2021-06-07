<template id="absolute">
    <div class="space-y-4 p-4">
        <div class="flow-root mt-4 mb-4">
            <div id="searchBox" class="p-4 flex block">
                <input id="idPokemon" class="w-full bg-gray-200 shadow rounded p-2" type="text" placeholder="Type a number">
                <button v-on:click="consultarPokemon" class="bg-red-500 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
                        <p class="font-semibold text-xs">Search</p>
                </button>
            </div>
        </div>

        <div class="flow-root">
             <div class="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
                <div class="relative mb-6">
                    <div id="imagePoke">
                        <img id="imgPokemon" class="w-full" src="" alt="" />
                    </div>
                    
                    <div class="text-center absolute w-full" style="bottom: -30px">
                        <div class="mb-10">
                        <p id="name" class="text-white tracking-wide uppercase text-lg font-bold">?</p>
                        </div>
                    </div>
                </div>
            <div class="py-10 px-6 text-center tracking-wide grid grid-cols-3 gap-6">
                <div class="posts">
                    <p id="type" class="text-lg">?</p>
                    <p class="text-gray-400 text-sm">Type</p>
                </div>
                <div class="followers">
                    <p id="power" class="text-lg">?</p>
                    <p class="text-gray-400 text-sm">Power</p>
                </div>
                <div class="following">
                    <p id="attack" class="text-lg">?</p>
                    <p class="text-gray-400 text-sm">Attack</p>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "PokeFind",
  data() {},
  methods:{
    consultarPokemon: function(){
        var id = document.getElementById("idPokemon").value;
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(function (response){
            response.json().then(function(pokemon){
                document.getElementById("name").innerHTML = pokemon.name;
                document.getElementById("type").innerHTML = pokemon.types[0].type.name;
                document.getElementById("power").innerHTML = pokemon.abilities[0].ability.name;
                document.getElementById("attack").innerHTML = pokemon.abilities[1].ability.name;

                let image = document.getElementById("imgPokemon");
                image.setAttribute("src", pokemon.sprites.front_default);
            })
        })
    }
  }
};
</script>

<style scoped>
    #absolute{
        padding:0px;
        margin:0px;
        background: green;
    }
    #searchBox{
        margin: 0px auto;
        width: 600px;
    }
    #card{
        margin:0px auto;
        display: block;
    }
    #imagePoke{
        margin: 0px auto;
        height: 350px;
        width: 400px;
        background-image: url("../assets/field.webp"); 
        background-size: cover;
    }
</style>

