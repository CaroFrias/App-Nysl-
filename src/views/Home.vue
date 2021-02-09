<template>
  <div class="home">
    <Miheader />
    <ContainerHome />
    <Maps />
  </div>
 
</template>

<script>
// @ is an alias to /src

import Miheader from "@/components/Header.vue";
import ContainerHome from "@/components/ContainerHome.vue";
import Maps from '../components/Maps.vue';


export default {
  name: "Home",

  components: {

    ContainerHome,
    Miheader,
    Maps
    
  }
};
</script>
