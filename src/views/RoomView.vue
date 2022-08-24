<!-- font -->
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap");
* {
  font-family: "Noto Sans Lao", sans-serif;
}
</style>
<!-- ________________ -->

<template>
  <v-app>
    <div class="container" style="margin-top: 2%">
      <template>
        <v-toolbar>
          <v-tabs dark background-color="primary" grow>
            <v-tab>
              <v-badge color="pink" dot> Item One </v-badge>
            </v-tab>

            <v-tab>
              <v-badge color="green" content="6"> Item Two </v-badge>
            </v-tab>

            <v-tab>
              <v-badge color="deep-purple accent-4" icon="mdi-vuetify">
                Item Three
              </v-badge>
            </v-tab>
          </v-tabs>
        </v-toolbar>
      </template>

      <!-- No: 201 -->
      <template>
        <v-card max-width="400" class="mx-auto">
          <v-container>
            <v-row dense>
              <v-col v-for="(item, i) in item201" :key="i" cols="12">
                <v-card :color="item.color" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="text-h5"
                        v-text="item.title"
                      ></v-card-title>
                      <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                      <v-card-actions>
                        <v-btn
                          class="ml-2 mt-3"
                          fab
                          icon
                          height="10px"
                          right
                          width="10px"
                        >
                        </v-btn>

                        <a
                          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                          style="text-decoration: none; margin-top: 25%"
                        >
                          <v-btn class="ma-2" outlined color="#fff">
                            ເບິ່ງລາຍລະອຽດ ແລະ ຈອງຫ້ອງ>
                          </v-btn>
                        </a>
                      </v-card-actions>
                    </div>

                    <v-avatar class="ma-3" size="30%" tile>
                      <v-img :src="item.src"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </template>
      <!--------------------------------------------------->

      <!-- No: 202 -->
      <template>
        <v-card max-width="400" class="mx-auto">
          <v-container>
            <v-row dense>
              <v-col v-for="(item, i) in item202" :key="i" cols="12">
                <v-card :color="item.color" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="text-h5"
                        v-text="item.title"
                      ></v-card-title>
                      <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                      <v-card-actions>
                        <v-btn
                          class="ml-2 mt-3"
                          fab
                          icon
                          height="10px"
                          right
                          width="10px"
                        >
                        </v-btn>

                        <a
                          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                          style="text-decoration: none; margin-top: 25%"
                        >
                          <v-btn class="ma-2" outlined color="#fff">
                            ເບິ່ງລາຍລະອຽດ ແລະ ຈອງຫ້ອງ>
                          </v-btn>
                        </a>
                      </v-card-actions>
                    </div>

                    <v-avatar class="ma-3" size="30%" tile>
                      <v-img :src="item.src"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </template>
      <!--------------------------------------------------->

      <!-- No: 203 -->
      <template>
        <v-card max-width="400" class="mx-auto">
          <v-container>
            <v-row dense>
              <v-col v-for="(item, i) in item203" :key="i" cols="12">
                <v-card :color="item.color" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="text-h5"
                        v-text="item.title"
                      ></v-card-title>
                      <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                      <v-card-actions>
                        <v-btn
                          class="ml-2 mt-3"
                          fab
                          icon
                          height="10px"
                          right
                          width="10px"
                        >
                        </v-btn>

                        <a
                          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                          style="text-decoration: none; margin-top: 25%"
                        >
                          <v-btn class="ma-2" outlined color="#fff">
                            ເບິ່ງລາຍລະອຽດ ແລະ ຈອງຫ້ອງ>
                          </v-btn>
                        </a>
                      </v-card-actions>
                    </div>

                    <v-avatar class="ma-3" size="30%" tile>
                      <v-img :src="item.src"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </template>
      <!--------------------------------------------------->

      <!-- No: 204 -->
      <template>
        <v-card max-width="400" class="mx-auto">
          <v-container>
            <v-row dense>
              <v-col v-for="(item, i) in item204" :key="i" cols="12">
                <v-card :color="item.color" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="text-h5"
                        v-text="item.title"
                      ></v-card-title>
                      <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                      <v-card-actions>
                        <v-btn
                          class="ml-2 mt-3"
                          fab
                          icon
                          height="10px"
                          right
                          width="10px"
                        >
                        </v-btn>

                        <a
                          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                          style="text-decoration: none; margin-top: 25%"
                        >
                          <v-btn class="ma-2" outlined color="#fff">
                            ເບິ່ງລາຍລະອຽດ ແລະ ຈອງຫ້ອງ>
                          </v-btn>
                        </a>
                      </v-card-actions>
                    </div>

                    <v-avatar class="ma-3" size="30%" tile>
                      <v-img :src="item.src"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </template>
      <!--------------------------------------------------->

      <!-- No: 205 -->
      <template>
        <v-card max-width="400" class="mx-auto">
          <v-container>
            <v-row dense>
              <v-col v-for="(item, i) in item205" :key="i" cols="12">
                <v-card :color="item.color" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="text-h5"
                        v-text="item.title"
                      ></v-card-title>
                      <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                      <v-card-actions>
                        <v-btn
                          class="ml-2 mt-3"
                          fab
                          icon
                          height="10px"
                          right
                          width="10px"
                        >
                        </v-btn>

                        <a
                          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                          style="text-decoration: none; margin-top: 25%"
                        >
                          <v-btn class="ma-2" outlined color="#fff">
                            ເບິ່ງລາຍລະອຽດ ແລະ ຈອງຫ້ອງ>
                          </v-btn>
                        </a>
                      </v-card-actions>
                    </div>

                    <v-avatar class="ma-3" size="30%" tile>
                      <v-img :src="item.src"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </template>
      <!--------------------------------------------------->
    </div>
  </v-app>
</template>

<!-- Script -->

<script>
export default {
  data: () => ({
    //201
    item201: [
      {
        color: "#2a2a2a",
        src: "https://media.discordapp.net/attachments/826834529435648000/1007549157436817429/img1.png?width=1215&height=663",
        title: "NO: 201",
        artist: "Price: 275,000 KIP",
      },
    ],

    //202

    item202: [
      {
        color: "#2a2a2a",
        src: "https://media.discordapp.net/attachments/826834529435648000/1007549157436817429/img1.png?width=1215&height=663",
        title: "NO: 202",
        artist: "Price: 275,000 KIP",
      },
    ],

    //203

    item203: [
      {
        color: "#2a2a2a",
        src: "https://media.discordapp.net/attachments/826834529435648000/1007549157436817429/img1.png?width=1215&height=663",
        title: "NO: 203",
        artist: "Price: 275,000 KIP",
      },
    ],

    //204

    item204: [
      {
        color: "#2a2a2a",
        src: "https://media.discordapp.net/attachments/826834529435648000/1007549157436817429/img1.png?width=1215&height=663",
        title: "NO: 204",
        artist: "Price: 275,000 KIP",
      },
    ],

    //205

    item205: [
      {
        color: "#2a2a2a",
        src: "https://media.discordapp.net/attachments/826834529435648000/1007549157436817429/img1.png?width=1215&height=663",
        title: "NO: 205",
        artist: "Price: 275,000 KIP",
      },
    ],
  }),
};
</script>
