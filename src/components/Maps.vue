<template>
    <div id="ContainerMap">
        <div class="row">
            <div class="col-12">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Maps",
        data (){
            return{
            equipo1:null,
            equipo2:null,
            ubicacion:null,
            fecha:null,
            hora:null,
            }
        },

        methods: {

        },
        created(){
            console.log("creado")
        }
    }
</script>

<style>
 #mapa h1 {
            color:black
        }
#mapa {
    height: 400px;
    width: 100%;
        }
</style>