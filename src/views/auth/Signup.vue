<template>
  <div class="my-10">
    <v-main class="d-flex align-center justify-center">
      <v-col cols="10" sm="10" md="8" lg="6" class="mx-auto">
        <v-card class="py-5 elevation-6">
          <div class="text-uppercase mt-5">
            <h2>Sign up</h2>
          </div>
          <p>Sign Up for an Account</p>
          <h6 class="text-center grey--text">
            Let's get you all set up so you can start creatin your <br />
            first onboarding experiance
          </h6>

          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="pa-10"
            @submit="signup"
          >
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8">
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="First Name"
                      placeholder="Enter your First Name"
                      outlined
                      required
                      dense
                      color="blue"
                      autocomplete="false"
                      class="mt-4 text-md-body-2"
                      v-model="user.name"
                    />
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="Last Name"
                      placeholder="Enter your Last Name"
                      outlined
                      required
                      dense
                      color="blue"
                      autocomplete="false"
                      class="mt-4 text-md-body-2"
                      v-model="user.lastname"
                    />
                  </v-col>
                </v-row>

                <v-text-field
                  v-model="user.phone"
                  label="Phone"
                  placeholder="Enter your Phone Number"
                  required
                  outlined
                  dense
                  class="text-md-body-2"
                ></v-text-field>
                <v-text-field
                  v-model="user.email"
                  :rules="[rules.required]"
                  label="E-mail"
                  placeholder="Enter your Email"
                  required
                  outlined
                  dense
                  class="text-md-body-2"
                ></v-text-field>
                <v-text-field
                  v-model="user.village"
                  label="Village"
                  placeholder="Enter your Village"
                  required
                  outlined
                  dense
                  class="text-md-body-2"
                ></v-text-field>

                <v-text-field
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Password"
                  hint="At least 8 characters"
                  class="text-md-body-2"
                  v-model="user.password"
                  counter
                  outlined
                  dense
                  placeholder="Enter your password"
                  @click:append="show1 = !show1"
                ></v-text-field>
                <v-text-field
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Confirm Password"
                  hint="At least 8 characters"
                  class="text-md-body-2"
                  v-model="user.password_confirmation"
                  counter
                  outlined
                  dense
                  placeholder="Confirm your password"
                  @click:append="show1 = !show1"
                ></v-text-field>
                <v-btn color="blue" dark block class="my-4" @click="signup"
                  >Log in</v-btn
                >
                <p class="text-sm-body-2">
                  Alredy Signed up?
                  <router-link class="text-md-body-2" to="/login"
                    ><span> LOG IN</span></router-link
                  >
                </p>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginView",
  data() {
    return {
      show1: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },

      user: {
        name: "",
        lastname: "",
        phone: "",
        email: "",
        village:"",
        password: "",
        password_confirmation: "",
      },
    };
  },

  methods: {
    async signup() {
      await axios
        .post(
          "https://553c-183-182-111-230.ap.ngrok.io/api/register",
          this.user
        )
        .then((res) => {
          let token = res.data.user.api_token;
          localStorage.setItem("token", token);

          this.$router.push('/login');
        });
    },
  },
};
</script>

<style>
v-text-field {
  margin-right: 20px;
  margin-left: 20px;
}
</style>
