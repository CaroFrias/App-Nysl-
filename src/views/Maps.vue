<template>
  <div class="Maps">
    <ContainerMap /> <!--aquí llamamos el id que contiene todo en el archiv Maps.vue-->
  </div>
</template>

<script>
// @ is an alias to /src

import ContainerMap from "@/components/Maps.vue";

export default {
  name: "Maps",

  components: {

    ContainerMap
    
  }
}
</script>
