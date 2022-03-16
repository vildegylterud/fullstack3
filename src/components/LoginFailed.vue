<template>
  <form class="login-form" @submit.prevent="onSubmit">
    <div id="login">
      <h2>Login feilet! Prøv igjen eller registrer deg som bruker</h2>
      <input type="text" name="username" v-model="username" placeholder="Username"/>
      <input type="password" name="password" v-model="password" placeholder="Password"/>
      <button class="button" v-on:click="handleClickSignin">Sign in</button>
      <label id="loginstatusLabel">{{ loginStatus }}</label>
      <router-link to="/register">Registrer deg her!</router-link>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",

  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {

    async onSubmit() {
      const loginRequest = { username: this.username, password: this.password };
      const loginResponse = await axios.post(
        "http://localhost:8085/demo/login",
        loginRequest
      );
      console.log(loginResponse);
      alert(loginResponse.data.loginStatus);
      if (loginResponse.data.loginStatus === "Success") {
        await this.$router.push("/loginSuccess");
      } else if (loginResponse.data.loginStatus === "Fail") {
        await this.$router.push("/loginFailed");
      }
    },
  },
};
</script>

<style scoped>
#login {
  width: 1000px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}

input {
  width: 100%;
  display: flex;
  float: top;
  height: 40px;
  margin-bottom: 20px;
}

label {
  font-size: 20px;
  margin-bottom: 5px;
}

.button {
  background-color: #857f72;
  cursor: pointer;
}
</style>
