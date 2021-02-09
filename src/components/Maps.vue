<template>
    <div id="ContainerMap">
        <div class="row">
            <div class="col-12">
                <!-- <script>mapa()</script> -->
              |<div class="contenido">
                    <div class="principal">
                        <h1 id="prueba2">Google Maps - AJ Katzenmaier Elementary </h1>
            
                        <div id="mapa">
                            <h1 id="prueba"></h1>
                        </div>

                    </div>
               </div>
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