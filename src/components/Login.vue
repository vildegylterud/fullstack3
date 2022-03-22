<template>
  <div id="login">
    <h2 id="title">Login</h2>
    <input type="text" name="username" v-model= "username" placeholder="Username"/>
    <input type="password" name="password" v-model= "password" placeholder="Password"/>
    <button class="button" v-on:click="handleClickSignin">Sign in</button>
    <label id="loginstatusLabel">{{ loginStatus }}</label>
  </div>
</template>

<script>
import { doLogin } from '../utils/apiutil.js'

export default {

  data() {
    return {
        username: "",
        password: "",
        loginStatus: "",
    };
  },
  methods: {
    async handleClickSignin() {
      alert("You entered, username: " + this.username);
      const loginRequest = {
        username: this.username,
        password: this.password,
      };
      const loginResponse = await doLogin(loginRequest);
      if (loginResponse.loginStatus === "Success") {
        await this.$router.push("/loginSuccess");
      } else if (loginResponse.loginStatus === "Fail") {
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
