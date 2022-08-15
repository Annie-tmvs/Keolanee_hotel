<template>
  <div id="app">
    <nav class="dark--text body ">
      <v-app-bar
        app
        absolute
        color="black"
        elevation="6"
        style="padding: 0px 50px"
        tile
      >
        <v-toolbar-title
          class="text-uppercase d-flex align-center"
          style="color: white"
        >
          <img
            alt="logo"
            v-for="(img, i) in imgs"
            :key="i"
            :src="img.src"
            contain
            width="50px"
            class="ma-3"
          />
          Keolanee Hotel
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <router-link style="color: white;" class="text-md-body-2" to="/"
          >ໜ້າຫຼັກ</router-link
        >
        <router-link style="color: white" class="text-md-body-2" to="/room"
          >ຫ້ອງພັກ</router-link
        >
        <router-link style="color: white" class="text-md-body-2" to="/info"
          >ຂໍ້ມູນໂຮງແຮມ</router-link
        >
        <router-link style="color: white" class="text-md-body-2" to="/faq"
          >ຊ່ວຍເຫຼືອ</router-link
        >
        <router-link style="color: white" class="text-md-body-2" to="/about"
          >ສະມັກສະມາຊິກ</router-link
        >
      </v-app-bar>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  text-align: center;
}
nav {
  a {
    color: #2a2a2a;
    text-decoration: none;
    font-weight: bold;
    padding: 15px;
  }
}
*{
  font-family: 'Noto Sans Lao', sans-serif;
}
*{
  font-family: 'Rubik Marker Hatch', cursive;
}
</style>

<script>
export default {
  name: "NavbarView",
  setup() {},

  data() {
    return {
      imgs: [
        {
          src: "https://media.discordapp.net/attachments/826834529435648000/1007206321491300352/Keolanee_edited.png?width=662&height=662",
        },
      ],
    };
  },
};
</script>
