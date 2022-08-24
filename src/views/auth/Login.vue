<template>
  <v-app>
    <div class="background"></div>
    <v-main class="d-flex align-center justify-center">
      <v-col cols="10" sm="10" md="8" lg="6" class="mx-auto">
        <v-card class="py-5 elevation-6">
          <div class="text-uppercase mt-5">
            <h2>Login</h2>
          </div>
          <p>Login in to Your Account</p>
          <h6 class="text-center grey--text">
            Log in to your account so you can continue builiding <br />and
            editing your onboarding flows
          </h6>

          <v-form ref="form" v-model="valid" lazy-validation class="pa-10">
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8">
                <v-text-field
                  v-model="login.email"
                  :rules="emailRules"
                  label="E-mail"
                  placeholder="Enter your Email"
                  required
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="login.password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Password"
                  hint="At least 8 characters"
                  counter
                  outlined
                  dense
                  placeholder="Enter your password"
                  @click:append="show1 = !show1"
                ></v-text-field>
                <v-btn color="blue" dark block class="my-4" @click="logIn"
                  >Log in</v-btn
                >
                <p class="text-sm-body-2">
                  Don't Have an Account Yet?
                  <router-link class="text-md-body-2" to="/signup"
                    ><span> SIGN UP</span></router-link
                  >
                </p>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
  </v-app>
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

      login: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async logIn() {
      await axios
        .post("https://553c-183-182-111-230.ap.ngrok.io/api/login", this.login)
        .then((res) => {
          let token = res.data.user.api_token;
          localStorage.setItem("token", token);

          this.$router.push("/");
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
