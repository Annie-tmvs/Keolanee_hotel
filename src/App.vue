<template>
  <div class="body">
    <v-app>
      <Navbar />

      <Footer />
    </v-app>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  data() {
    {
      //
    }
  },
  components: { Navbar, Footer },
};
</script>

<style>

</style>

