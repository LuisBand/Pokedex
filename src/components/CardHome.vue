<template>
    <div id="card" class="rounded rounded-t-lg overflow-hidden shadow max-w-xs">
        <img src="../assets/backgroundCard.jpg" class="w-full" />
        <div class="flex justify-center -mt-8">
            <img src="../assets/squirtle.png" class="rounded-full border-solid border-white border-2 -mt-3">		
        </div>
        <div class="text-center px-3 pb-6 pt-2">
            <h3 class="text-black text-sm bold font-sans">Squirtle</h3>
            <p class="mt-2 font-sans font-light text-grey-dark">Water</p>
        </div>
        <div class="flex justify-center pb-3 text-grey-dark">
        <div class="text-center mr-3 border-r pr-3">
            <h2>torrent</h2>
            <span>Power</span>
        </div>
        <div class="text-center">
            <h2>rain-dish</h2>
            <span>Attack</span>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardHome",
        methods: {
            
        },
        pokemomCard: [{
          name: "",
          type: "",
          power: "",
          attack:""  
        }] 
    }
</script>

<style scoped>
#card{
    padding:0;
    margin: 0px auto;
    margin-top: 30px;
    
}
</style>