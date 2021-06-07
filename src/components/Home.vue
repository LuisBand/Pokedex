<template>
    <div>
        <div  class="flow-root">
            <div id="pokemons" v-if="renderComponent" class="grid grid-cols-3 gap-4 justify-center">
                <article v-for="(pokemon, index) in pokedex" :key="index"  :id="index" class="rounded rounded-t-lg overflow-hidden shadow max-w-xs">
                    <img src="../assets/backgroundCard.jpg" class="w-full" />
                    <div class="flex justify-center -mt-8">
                        <img :src=pokemon.image class="rounded-full border-solid border-white border-2 -mt-3">		
                    </div>
                    <div class="text-center px-3 pb-6 pt-2">
                        <h3 class="text-black text-sm bold font-sans">{{pokemon.name}}</h3>
                        <p class="mt-2 font-sans font-light text-grey-dark">{{pokemon.type}}</p>
                    </div>
                    <div class="flex justify-center pb-3 text-grey-dark">
                        <div class="text-center mr-3 border-r pr-3">
                            <h2>{{pokemon.power}}</h2>
                            <span>Power</span>
                        </div>
                        <div class="text-center">
                            <h2>{{pokemon.experience}}</h2>
                            <span>Experience</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <div class="flow-root">
            <div  id="pagination" class="container mx-auto rounded-lg overflow-hidden my-2 bg-white">
                    <ul class="flex pl-0 list-none rounded my-2">
                        <li id="botonPrevious" v-on:click='refrescar("previous")' class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200">Previous</li>
                        <li id="botonNext" v-on:click='refrescar("next")' class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200">Next</li>
                    </ul>
            </div>
        </div>
    </div>
    

</template>

<script>
    //import CardHome from './CardHome.vue';
    import axios from 'axios';

    export default {
        name: "Home",
        mounted(){
            this.getPokemons(this.current);      
        },
        data(){
            return{
                renderComponent: true,
                current: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=21",
                previous: "",
                next: "",
                pokemons: [],
                newPokemons: [],
                pokedex:[]
            }
        },
        methods:{
            getPokemons(url){
                axios.get(url)
                    .then(res=>{
                        if(res.statusText == 'OK'){
                            this.pokemons = res.data.results;
                            this.next = res.data.next;
                            this.previous = res.data.previous;

                            var myPokemon = new Object();

                            for(var i=0; i<this.pokemons.length; i++){ 
                                axios.get(this.pokemons[i].url)
                                .then(res=>{
                                    if(res.statusText == 'OK'){
                                        myPokemon.name = res.data.name;
                                        myPokemon.type = res.data.types[0].type.name;
                                        myPokemon.power = res.data.abilities[0].ability.name;
                                        myPokemon.image = res.data.sprites.front_default;
                                        myPokemon.experience = res.data.base_experience;

                                        this.pokedex.push({name: myPokemon.name, type: myPokemon.type, experience: myPokemon.experience, power: myPokemon.power, image: myPokemon.image})

                                    }
                                });
                            }     
                        }
                    });
            },


            refrescar(type){

                if(type == "previous"){
                    if(this.previous){
                        for (let i = this.pokedex.length; i > 0; i--) {
                            this.pokedex.pop();
                        }
                        this.getPokemons(this.previous);  
                    }
                }

                if(type == "next"){
                    if(this.next){
                        for (let i = this.pokedex.length; i > 0; i--) {
                            this.pokedex.pop();
                        }
                        this.getPokemons(this.next);  
                    }
                     
                }
                    
            }
        },
        components:{

        }
    };
</script>

<style scoped>
    article{
        padding:0;
        margin: 0px auto;
        margin-top: 30px;
        
    }
    #pagination{
        margin-top: 40px;
        width: 147px;
    }

    li:hover{
        cursor: pointer;
    }
</style>